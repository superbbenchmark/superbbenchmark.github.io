const policy = String.raw`
# SUPERB Challenge

## Evaluation Framework

### Background

![](https://i.imgur.com/FDARwvz.png)
*Fig 1.*

SUPERB Challenge follows the similar evaluation framework introduced in [SUPERB Benchmark](https://arxiv.org/abs/2105.01051), which benchmarks the **generalizability** of Self-Supervised Learning (SSL) on speech. SSL models are termed **Upstream** and are evaluated with various **Downstream** tasks. The framework extract **multiple frozen hidden states** from a single upstream model and trains a learnable **weighted-sum** over the hidden states along with the downstream model task-by-task.

### Overview

![](https://i.imgur.com/BNr2gfE.png)
*Fig 2.*

Fig 2. illustrates the evaluation framework of the challenge. The challenge evaluates SSL models' generalizability on 10 tasks. Each of the tasks has a corresponding public dataset (**public-set**) that is publicly available, and a hidden dataset (**hidden-set**) that will not be released. Participants can practice on the public-set to understand the performance of their upstream models, and choose the best one for submission as they wish. Then, participants **submit the upstream model** (model definition & pre-trained weights) publicly or privately to the hidden-set leaderboard. **We finetune the downstream models on the hidden-set** without releasing any audio/label. Both public-set and hidden-set have leaderboards and welcome submissions to share more results with the community. **The winners of the challenge will be solely determined by the ranking on the hidden-set leaderboard.** Finally, there will be **overall metrics** for ranking all upstreams.

All the participants are encouraged to submit papers to [*AAAI workshop: The 2nd Self-supervised Learning for Audio and Speech Processing*](https://aaai-sas-2022.github.io/). The winners of the challenge will be invited to present their methods in the workshop. We plan to collaborate with more conferences for participants to present their works and papers.

### Tasks

10 evaluation tasks are included in this challenge:

- **Content**
    - Phoneme Recognition (PR)
    - Automatic Speech Recognition (ASR)
    - Query-by-example Spoken Term Detection (QbE)
- **Speaker**
    - Speaker Identification (SID)
    - Automatic Speaker Verification (ASV)
    - Speaker Diarization (SD)
- **Paralinguistics**
    - Emotion Recognition (ER)
- **Semantics**
    - Speech Translation (ST)
- **Generation**
    - Speech Enhancement (SE)
    - Speech Separation (SS)

More task descriptions for the public-set can be found in [TASKS](https://superbbenchmark.org/tasks), and we implement the evaluation scripts for public-set in [S3PRL](https://github.com/s3prl/s3prl/blob/master/s3prl/downstream/docs/superb.md) for reference. The task design and evaluation pipeline will be the same between public-set & hidden-set unless otherwise mentioned.

### Secret tasks

Secret tasks evaluate SSL models' generalizability on completely unseen tasks. Secret tasks are only present in the hidden-set, and the task design will not be revealed until the final winner announcement. 

### What is new

Compared with SUPERB Benchmark, SUPERB Challenge extends the framework with the following:

- **New Tasks**: Speech Translation, Speech Enhancement, Source Separation and secret tasks.
- **New Data Domains**: A challenging and newly recorded hidden-set with unseen (to upstream) text/audio domain.
- **New Overall Metrics**: The metrics to rank upstreams.


## Upstream Specification

### Unlabeled data only: Focus on SSL

- Any labeled/parallel data made by human annotators are **not allowed** to used for both model training and data preprocessing, e.g.
    - **audio/text pairs:** transcriptions in English, foreign languages, or phonemes.
    - **audio/tagging pairs:** speaker labels or sound event labels.
    - **audio/audio pairs:** audios with the same properties made parallel by human, e.g. audios with same content from different speakers, or the opposite.
- Any system pre-trained by labeled/parallel data **cannot** be used to help with the SSL pre-training, like pre-trained ASR.
- Any unlabeled/unparallel data is allowed, including the downstream datasets in the public-set. The nature alignments (not made by human annotators) bettwen audio and other modalities are also allowed, e.g. videos.
- If it is hard to define whether your data is labeled/parallel, please [contact us](#Contact)!

### Programming Language

- We currently support:
    - **Python >= 3.6**
    - **Pytorch >= 1.7**

- We expect the upstream submission can pass the following check:
    ~~~python=
    upstream = YourModel.cuda()
    assert isinstance(upstream, torch.nn.Module)
    ~~~


We accept upstream models in PyTorch by default. If you wish to submit upstreams in non-PyTorch frameworks, please [fill this form](https://docs.google.com/forms/d/e/1FAIpQLSe52jYL2Yk9oYqXfg_Bg0Sjp01a6HSLUhY5VohsZOE5sNmgsw/viewform)!
If you are not feasible to submit the pre-trained model, please [fill this form](https://docs.google.com/forms/d/e/1FAIpQLSdA44nArlIDfGV63WwtwXer4WAPQO1aBwEpAjDSNjbMQN-GJQ/viewform) for us to see how to help!

### Interface functions

#### forward

Extract features from waveforms.

- **Input:** A list of waveforms in 16000 Hz

    ~~~python=
    SAMPLE_RATE = 16000
    BATCH_SIZE = 8
    EXAMPLE_SEC = 10
    wavs = [torch.randn(SAMPLE_RATE * EXAMPLE_SEC).cuda() for _ in range(BATCH_SIZE)]
    results = upstream(wavs)
    ~~~

- **Output:** A dictionary with a key for each task, and a single key for all secret tasks. If any task-specific key is not presented, a "hidden_states" key should be provided as the default key. The value for each key is **a list** of padded sequences in the same shape of **(batch_size, max_sequence_length_of_batch, hidden_size)** for weighted-sum to work. It is welcomed to perform some preprocessing on the upstream's raw hidden-sets, including upsampling and downsampling. However, all the values must come from **a single upstream model**:

    ~~~python=
    assert isinstance(results, dict)
    tasks = ["PR", "SID", "ER", "ASR", "ASV", "SD", "QbE", "ST", "SS", "SE", "secret"]
    for task in tasks:
        hidden_states = results.get(task, "hidden_states")
        assert isinstance(hidden_states, list)

        for state in hidden_states:
            assert isinstance(state, torch.Tensor)
            assert state.dim() == 3, "(batch_size, max_sequence_length_of_batch, hidden_size)"
            assert state.shape == hidden_states[0].shape
    ~~~

#### get_downsample_rates

Provide the downsample rate **from 16000 Hz waveforms** for each task's representation in the dict. For the standard 10ms stride representation, the downsample rate is 160.

~~~python=
SAMPLE_RATE = 16000
MSEC_PER_SEC = 1000
downsample_rate = SAMPLE_RATE * 10 / MSEC_PER_SEC  # 160
~~~

The downsample rate will be used to:

1. Calculate the valid representation length of each utterance in the output padded representation.
2. Prepare the training materials according to the representation's downsample rate for frame-level tasks: SD, SE, SS.

- **Input:** the task key (str)
- **Output:** the downsample rate (int) of the representation for that task

~~~python=
for task in tasks:
    assert isinstance(task, str)
    downsample_rate = upstream.get_downsample_rate(task)
    assert isinstance(downsample_rate, int)
    print("The upstream's representation for {task}"
        f" has the downsample rate of {downsample_rate}.")
~~~

## Public-set and S3PRL toolkit

### As the task definition and demonstration

The public-set serves as the demonstration of the task design: including the data preprocessing, tasks' input/output formats and task-specific metrics. The datasets used in the public-set are all chosen to be public available for everyone to participate. Please refer to [TASKS](https://superbbenchmark.org/tasks) and the implementation in [S3PRL](https://github.com/s3prl/s3prl/blob/master/s3prl/downstream/docs/superb.md) for details.

### As the platform for developing upstreams for the hidden-set

The differences between the public-set and the hidden-set are controlled to be only the following:

1. Recording conditions
2. Spoken content / text scripts
3. Speakers
4. Fewer labeled data

In this way, the public-set is still a good indicator of the hidden-set performance to some degree. We follow the same (unless mentioned otherwise in [TASKS](/tasks)) implementation in the public-set for the hidden-set, and hence encourage participants to use [S3PRL](https://github.com/s3prl/s3prl/blob/master/s3prl/downstream/docs/superb.md) to benchmark their upstream models (optional) on the public-set. The winners of the challenge will be decided solely on the hidden-set, and the public-set and [S3PRL](https://github.com/s3prl/s3prl/blob/master/s3prl/downstream/docs/superb.md) implementations can serve as the start-kit.

### Provide baselines for comparison

#### Baselines

We collected most of the well-known SSL baseline models in [S3PRL](https://github.com/s3prl/s3prl/blob/master/s3prl/downstream/docs/superb.md), including TERA, wav2vec2, Hubert, DeCoAR 2.0, and more. You can easily benchmark different upstreams by specifying in the command line arguments.

#### Comparison

Since the full benchmarking on the public-set can take some time for the training to converge. We released the [training artifacts](https://github.com/s3prl/s3prl/blob/master/s3prl/downstream/docs/superb_artifacts.md) of the top baseline systems (e.g. wav2vec2, HuBERT) for participants to quickly compare with them. The artifacts include:

- Tensorboard logs
- Trained downstream weights (the best on public dev set)

### Public-set leaderboard and submission

The [public-set leaderboard](leaderboard?subset=Public+Set&track=constrained) is online and [accepts submissions](submit?type=public). There is no deadline. Since all the train/dev/test splits are public available, **the leaderboard accepts submissions with the inferenced prediction files on each task's testing split** which will be auto-generated if you follow the benchmarking steps in [S3PRL](https://github.com/s3prl/s3prl/blob/master/s3prl/downstream/docs/superb.md).

## Hidden-set

### Fairness & prevent overfitting

Since all the train/dev/test splits are public in the public-set, it is possible to cheat by directly reporting the best results on the testing split, and the results are thus overfit on the testing split. Hence, the hidden-set is collected and prepared to follow the same task design as that in the public-set but with the newly created data. All the splits will **NOT be released in both audio and labels**. The members involved in the hidden-set preparation should **NOT** participate the challenge. These members are listed in the **Hidden-set Committee** below.

### Hidden-set leaderboard and submission

#### Submission type

The leaderboard accepts **submissions with the upstream model solely**, including **model definition** and **pre-trained weights**. The upstream model should follow the specification detailed at [Upstream Specification](#Upstream-Specification). The submission can be done publicly or privately. Only the **Hidden-set Committee** members can access the privately submitted upstreams and the models will be used solely for this challenge.

- We accept upstream models in PyTorch by default. If you wish to submit upstreams in non-PyTorch frameworks, please [fill this form](https://docs.google.com/forms/d/e/1FAIpQLSe52jYL2Yk9oYqXfg_Bg0Sjp01a6HSLUhY5VohsZOE5sNmgsw/viewform)!
- If you are not feasible to submit the pre-trained model, please [fill this form](https://docs.google.com/forms/d/e/1FAIpQLSdA44nArlIDfGV63WwtwXer4WAPQO1aBwEpAjDSNjbMQN-GJQ/viewform) for us to see how to help!

#### Finetuning on submission

After the upstream model is submitted, we **benchmark the submitted upstream by finetuning each task's downstream model for participants**. **The quota for submissions per week is limited and starts from 2 times/week,** but will be dynamically adjusted based on the number of participants. The quota adjustment will be announced at [NEWS](https://superbbenchmark.org/news). Participants can [contact us](#Contact) to acquire the finetuning artifacts of their own submissions for sanity checks, including:

- Tensorboard logs
- Testing results
- Trained downstream weights

#### Practice (dev) / Private (test) scores

After training the downstream model for all tasks, we show the best performance on the hidden-set's development splits as the **practice scores** (one score per task). The true performance on the testing splits, termed **private scores**, will be revealed along with the final winner announcement. The final team ranking will depend only on the hidden-set's **private scores**.

#### How to submit

(Update 10/20/2021 AOE)

The [hidden-set leaderboard](leaderboard?subset=Hidden+Dev+Set&track=constrained) is online and accepts submissions. Please follow [the submission steps](https://huggingface.co/superb/superb-submission). We use HuggingFace's Hub to host the submitted upstreams and track the submitted model weights. On the other hand, we use our [submission page](submit?type=hidden) to control the submission limit, where the participants tell us the locations of their models on HuggingFace's Hub.

After submitting via the submission page, you will see a new entry in the **submission history** under your Profile page, and the evaluation results on the hidden-set will be revealed at the entry within one week.
Please stay tuned!

(Update 10/31/2021 AOE)

All the submitted results will remain anonymous during and after the challenge.
You can select a few submissions to show on the leaderboard.
If no submission is selected, we will show all your submissions on the leaderboard anonymously.
Only you can see your personal/model information on the leaderboard, but you will not see others'.
If you wish to reveal your personal/model information on the [hidden-set leaderboard](leaderboard?subset=Hidden+Dev+Set&track=constrained), please [contact us](#Contact)!

## Overall Metrics

(Update 10/1/2021 AOE)

We announce two kinds of metrics: **superb-rank** and **superb-score**, each with parameter-agnostic and parameter-panelized versions.

Type|Parameter-agnostic|Parameter-penalized
-|-|-
Scoring|$superb_s$|$superb_{sp}$
Ranking|$superb_r$|$superb_{rp}$

In this challenge, $superb_r$ and $superb_{rp}$ are the primary metrics. When equal rank is found on two different upstreams, $superb_{s}$ or $superb_{sp}$ is used to break the tie. Hence, there will be only two final lists of winners: **Parameter-agnostic** and **Parameter-penalized**.

### Notation

Suppose each task $t$ in all tasks $T$ has a single metric $s_t$, and the score of an upstream $u$ on task $t$ is $s_t(u)$ which has already been transformed to make higher values represent better performance. Eg. We use WAcc here for ASR instead of the raw WER. The upstream $u$ has $|u|$ millions parameters.

### Parameter-agnostic

Parameter-agnostic metrics demonstrate the best performance SSL can achieve, and encourages participants to explore any possibility to push the limits.

#### $superb_s$

To aggregate all task-specific scores $s_t(u)$ into a single static score, we linearly transform each of them into points so that:

- $s_t(fbank) = 0$, The performance of FBANK maps to 0
- $s_t(sota) = 1000$, The performance of the existing SOTA upstream *for this task* maps to 1000.

$$
p_t(u) = \dfrac{1000}{s_t({sota}) - s_t({fbank})}\ (\ s_t(u) - s_t({fbank})\ )
$$

Hence, most of the points will sit between 0~1000. The upstream worse than FBANK on this task will get negative points. The upstream better than the task-specific SOTA upstream will get points higher than 1000. The $superb_s$ of the upstream $u$ is the average of $p_t$ over all tasks.

$$
superb_s = \dfrac{1}{|T|} \sum_{t \in T}\ p_t(u)
$$

Intuitively, two reference points: FBANK and SOTA decide the typical interested interval for a task-specific metric and scale the task scores to 0~1000 points accordingly. The similar range of points across tasks can then be averaged. Beyond scaling with the pre-defined metric range, this interval further determines *how hard for a task to improve*. For a harder task, its smaller interval at the denominator give the task more credit for any unit improvement.

#### $superb_r$

To encourage the development on **universal models** instead of models skewed toward a subset of tasks. We use ranking to saturate the improvement when an upstream already become the best for that task. The $superb_r$ for an upstream $u$ is the average number of upstreams which $u$ can win in each task. This metric dynamically depends on all the upsreams $U$ shown on the leaderboard. In the following, $L$ is the number of upstreams which $u$ can win using the metric $x_t$.

$$
L(x_t, u) = |\ \{\ \hat{u} \in U\ |\ x_t(u) > x_t(\hat{u}) \ \}\ |
$$

$$
superb_r = \dfrac{1}{|T|} \sum_{t \in T} L(s_t, u) = \dfrac{1}{|T|} \sum_{t \in T} L(p_t, u)
$$

### Parameter-penalized

To encourage the development of speech SSL on small and green models, we add a metric with penalization on models' parameter size. To gauge the effectiveness and parameter-efficiency of new SSL algorithms, we encourage participants to submit multiple upstreams trained by the same algorithm with the only difference in parameter size.

#### $superb_{sp}$

We penalize the parameter-agnostic scoring by an upstream $u$'s parameter size $|u|$.

$$
\hat{p_t}(u) =
\left\{
    \begin{array}{lr}
        \frac{p_t(u)}{\ max(|u|,\ 1)},& \text{if } p_t(u) \geq 0\\
        \ \ \ \ p_t(u),              & \text{otherwise}
    \end{array}
\right.
$$

Since either the point of the baseline FBANK or its parameter size is 0. The above formula measures how many improvement upon FBANK per parameter. The minimum 1 million parameter size is designed to avoid too small upstreams dominating others by receiving too much credit on a single task. When $p_t(u)$ is negative we do not penalize it, since it is already worse than the zero-parameter FBANK.

$$
superb_{sp} = \dfrac{1}{|T|} \sum_{t \in T}\ \hat{p_t}(u)
$$

#### $superb_{sp}$

Similar to $superb_r$, we rank all upstreams on the leaderboard with $\hat{p_t}$.

$$
superb_{rp} = \dfrac{1}{|T|} \sum_{t \in T}\ L(\hat{p_t}, u)
$$

### Conclusion

The ranking metrics are the primary measures in this challenge and are designed to emphasize an upstream's universally usability. When two upstreams tie on the same rank, the scoring metrics take the tasks' variations and improvement difficulty into account to help the final decision. You can refer to the [public-set leaderboard](leaderboard?subset=Public+Set&track=constrained) for the overal metrics calculation.

#### Reference points

If a task have multiple metrics, each metric is first tranformed into points or ranks as illustrated above. Then, points or ranks are first averaged in intra-task fashion before being averaged with other task.

Task|PR|SID|ER|ASR|QbE|ASV|SD|ST|SE|SE|SS
-|-|-|-|-|-|-|-|-|-|-|-
Metrics|PER|ACC|ACC|WER|MTWV|EER|DER|BLEU|PESQ|STOI|SS
FBANK|82.01|41.38|48.24|23.18|0.58|9.56|10.05|2.32|2.55|0.9364|9.234
SOTA|3.53|96.66|67.62|3.62|7.36|5.62|5.11|20.01|2.64|0.9418|10.45

## Winner Minimum Requirements

The following describes the minimum requirements for a team to win the challenge.

### Submit an upstream model to the hidden-set leaderboard

The public-set is for the upstream development purpose. You can pre-train your upstream and evaluate it with any method you like. You are required to submit at least one upstream model to the hidden-set leaderboard. The hidden-set leaderboard submission deadline is **Jan 10, 2022**.

### Submission selection

A team can **select at most 2 submissions** among its previous submissions for the final team ranking: one for the parameter-agnostic metrics and another for the parameter-panelized metrics. However, these 2 submissions **must come from the same method** and only differ in parameter size. The deadline for the submission selection is **Jan 13, 2022**.

### System description paper

To verify the submitted upstream follows the challenge policy, we require each team to submit a system description paper in **AAAI submission format** without the page limit. The paper should describe the method **for the selected submissions**, containing at least the following materials:

- SSL objectives
- Model architecture
- Pre-training data
- Parameter size for each submission

Since all the selected submissions come from the same method, the above materials should be almost identical between submissions except for the parameter size.

The submission should follow the challenge policy and the paper is expected to be well-written. The deadline for the system description paper is **Jan 13, 2022**.

#### Note 1.

The system description paper is for the challenge review only and is not considered as our AAAI workshop paper by default, since the [AAAI workshop has the early hard deadlines](https://aaai.org/Conferences/AAAI-22/ws22call/) for both paper submission (**Nov 12, 2021**) and acceptance/rejection announcement (**Dec 3, 2021**). Hence, **we encourage participants to submit their methods' papers early to our AAAI workshop** before Nov 12, 2021. If the method turns out to be similar to that used for the final selected submissions, the same paper can be used as the system description paper.

#### Note 2.

We plan to work with other conferences and offer presentation & paper submission opportunities.

## Winner Announcement and Presentation

After review the system description papers and compare their performance with the hidden-set **private scores**. We will reveal all the private scores and announce the final winners on **January 20, 2022**. The winners will be invited to present their methods in our AAAI workshop.

## Timeline

- Sep 18, 2021: Challenge announcement & [S3PRL](https://github.com/s3prl/s3prl/blob/master/s3prl/downstream/docs/superb.md) released
- Sep 30, 2021: [Overall metrics](challenge#Overall-Metrics) announcement & [public-set leaderboard](leaderboard?track=constrained&subset=Public+Set) is online and [accepts submissions](submit?type=public)
- Oct 15, 2021: [Hidden-set leaderboard](leaderboard?track=constrained&subset=Hidden+Dev+Set) is online and [accepts submissions](submit?type=hidden)
- Nov 12, 2021: [AAAI workshop](https://aaai-sas-2022.github.io/) paper submission deadline (encouraged)
- Dec 3, 2021: [AAAI workshop](https://aaai-sas-2022.github.io/) paper acceptance / rejection announcement
- Jan 10, 2022: Hidden-set leaderboard submission deadline
- Jan 13, 2022: Submission selection & system description paper deadline
- Jan 20, 2022: Winner announcement & reveal hidden-set private scores
- Jan 22, 2022: AAAI late [registration](https://aaai.org/Conferences/AAAI-21/registration/) deadline
- Feb 28 - Mar 1, 2022: [AAAI workshop](https://aaai-sas-2022.github.io/) presentation

## Organizers

Hung-yi Lee

Shinji Watanabe

Abdelrahman Mohamed

Shang-Wen Li

Shuyan Dong

Heng-Jui Chang

Hsuan-Jui Chen

Po-Han Chi

Xuankai Chang

Yung-Sung Chuang

Tzu-Hsun Feng

Tzu-Hsien Huang

Wen-Chin Huang

Zili Huang

Andy T. Liu

Cheng-I Jeff Lai

Guan-Ting Lin

Kushal Lakhotia

Yist Y. Lin

Yassin Omar

Jiatong Shi

Hsiang-Sheng Tsai

Lewis Tunstall

Wei-Cheng Tseng

Shu-wen Yang

## Hidden-set Committee

Xuankai Chang

Hsuan-Jui Chen

Yung-Sung Chuang

Zili Huang

Shang-Wen Li

Guan-Ting Lin

Yassin Omar

Jiatong Shi

Hsiang-Sheng Tsai

Shu-wen Yang

# Contact

superb.announcement@gmail.com
`

export default policy
// using String.raw to avoid escaping in latex expression
// to meet the parsing format, do things as below
// remove comment <!-- ...  -->
// replace ``` with ~~~ (code block)
// replace <strong> with ** 
// replace math block below $superb_{sp}$ as another ver. (origin ver. can't be render but the reason is unknown)