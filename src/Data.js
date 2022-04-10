import { createMuiTheme } from "@material-ui/core/styles";
import LockIcon from "@material-ui/icons/Lock";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import AllInclusive from "@material-ui/icons/AllInclusive";

import {
    constrainedTheme,
    lessConstrainedTheme,
    unconstrainedTheme,
    submitFormTheme,
} from "./components/Theme";
import { Strong } from "./components/Utilies";

const subscribe_link = "https://forms.gle/sVMWx9FHjL4DvK3K8"

const domains = [
    {
        name: "recognition",
        description: "recognition description",
        tasks: [
            {
                name: "PR",
                description:
                    "\
            Phoneme Recognition, PR transcribes an utterance into the smallest content units.\
            We include alignment modeling in the PR task to avoid the potential inaccurate forced alignment.\
            LibriSpeech train-clean-100/dev-clean/test-clean subsets are adopted in SUPERB for training/validation/testing.\
            Phoneme transcriptions are obtained from the LibriSpeech official g2p-model-5 and the conversion script in Kaldi librispeech s5 recipe.\
            The evaluation metric is phone error rate (PER).\
          ",
            },
            {
                name: "ASR",
                description:
                    "\
            Automatic Speech Recognition, ASR transcribes utterances into words.\
            While PR analyzes the improvement in modeling phonetics, ASR reflects the significance of the improvement in a real-world scenario.\
            LibriSpeech train-clean-100/devclean/test-clean subsets are used for training/validation/testing.\
            The evaluation metric is word error rate (WER).\
          ",
            },
        ],
    },
    {
        name: "detection",
        description: "detection description",
        tasks: [
            {
                name: "KS",
                description:
                    "\
            Keyword Spotting, KS detects preregistered keywords by classifying utterances into a predefined set of words.\
            The task is usually performed on-device for the fast response time.\
            Thus, accuracy, model size, and inference time are all crucial.\
            We choose the widely used Speech Commands dataset v1.0 for the task.\
            The dataset consists of ten classes of keywords, a class for silence, and an unknown class to include the false positive.\
            The evaluation metric is accuracy (ACC)\
          ",
            },
            {
                name: "QbE",
                description:
                    "\
            Query by Example Spoken Term Detection, QbE detects a spoken term (query) in an audio database (documents) by \
            binary discriminating a given pair of query and document into a match or not.\
            The English subset in QUESST 2014 challenge is adopted since we focus on investigating English as the first step.\
            The evaluation metric is maximum term weighted value (MTWV) which balances misses and false alarms.\
            In the SUPERB Challenge, the average between Mean Average Precision (MAP) and Equal Error Rate (ERR) is used as the metric on the hidden-set\
          ",
            },
        ],
    },
    {
        name: "semantics",
        description: "semantics description",
        tasks: [
            {
                name: "IC",
                description:
                    "\
            Intent Classification, IC classifies utterances into predefined classes to determine the intent of speakers.\
            We use the Fluent Speech Commands dataset, where each utterance is tagged with three intent labels: action, object, and location.\
            The evaluation metric is accuracy (ACC).\
          ",
            },
            {
                name: "SF",
                description:
                    "\
            Slot Filling, SF predicts a sequence of semantic slot-types from an utterance, \
            like a slot-type FromLocation for a spoken word Taipei, which is known as a slot-value.\
            Both slot-types and slot-values are essential for an SLU system to function.\
            The evaluation metrics thus include slot-type F1 score and slotvalue CER.\
            Audio SNIPS is adopted, which synthesized multi-speaker utterances for SNIPS.\
            Following the standard split in SNIPS, US-accent speakers are further selected for training, and others are for validation/testing.\
          ",
            },
            {
                name: "ST",
                description: `Speech Translation (ST) translates utterance into foreign words. To achieve this goal, the model has to perform ASR and MT simultaneously, which increases the difficulty. CoVoST2 En-De dataset is adopted while all the examples containing "REMOVE" are removed. The evaluation metric is case-sensitive detokenized BLEU. \
                In the SUPERB Challenge, since it is too difficult to train the ST model with limited translation pairs, we first train on CoVoST2 En-De dataset and then finetuned on the training set of the hidden-set.
                `
            }
        ],
    },
    {
        name: "speaker",
        description: "speaker description",
        tasks: [
            {
                name: "SID",
                description:
                    "\
            Speaker Identification, SID classifies each utterance for its speaker identity as a multi-class classification, \
            where speakers are in the same predefined set for both training and testing.\
            The widely used VoxCeleb1 [26] is adopted, and the evaluation metric is accuracy (ACC).\
          ",
            },
            {
                name: "SV",
                description:
                    "\
            Automatic Speaker Verification, ASV verifies whether the speakers of a pair of utterances match as a binary classification, \
            and speakers in the testing set may not appear in the training set.\
            Thus, ASV is more challenging than SID. VoxCeleb1 is used without VoxCeleb2 training data and noise augmentation. \
            The evaluation metric is equal error rate (EER).\
          ",
            },
            {
                name: "SD",
                description:
                    "\
            Speaker Diarization, SD predicts who is speaking when for each timestamp, and multiple speakers can speak simultaneously.\
            The model has to encode rich speaker characteristics for each frame and should be able to represent mixtures of signals.\
            LibriMix is adopted where LibriSpeech train-clean-100/dev-clean/test-clean are used to generate mixtures for training/validation/testing.\
            We focus on the two-speaker scenario as the first step.\
            The time-coded speaker labels were generated using alignments from Kaldi LibriSpeech ASR model.\
            The evaluation metric is diarization error rate (DER).\
          ",
            },
        ],
    },
    {
        name: "paralinguistics",
        description: "paralinguistics description",
        tasks: [
            {
                name: "ER",
                description:
                    "\
            Emotion Recognition, ER predicts an emotion class for each utterance.\
            The most widely used ER dataset IEMOCAP is adopted, and we follow the conventional evaluation protocol:\
            we drop the unbalance emotion classes to leave the final four classes with a similar amount of data points and \
            cross-validates on five folds of the standard splits.\
            The evaluation metric is accuracy (ACC).\
          ",
            },
        ],
    },
    {
        name: "generation",
        description: "generation description",
        tasks: [
            {
                name: "SE",
                description: `Speech enhancement (SE) is the task of removing background noise from a degraded speech signal and improving the perceived quality and intelligibility of the signal. In SUPERB, we evaluate the speech enhancement problem on the VoiceBank-DEMAND corpus. A three layer BLSTM model is trained to predict the spectral mask for the clean signal. The prediction is transformed back to the time domain using inverse short-time Fourier transform (iSTFT). Our evaluation metrics cover various aspects of the speech enhancement quality. including Perceptual Evaluation of Speech Quality (PESQ) and ShortTime Objective Intelligibility (STOI)
                `
            },
            {
                name: "SS",
                description: `Speech Separation (SS) is the task of separating target speech from background interference. It is an important step for speech processing, especially for noisy and multi-talker scenarios. In SUPERB, we investigate speech separation on the Libri2Mix dataset. We use the same 3-layer BLSTM model as the enhancement task, and permutation invariant training (PIT) is performed to optimize the objectives. The evaluation metric for speech separation is scale-invariant signal-to-distortion ratio improvement (SI-SDRi).
                `
            },
        ],
    }
];

const tracks = [
    {
        name: "constrained",
        rules: (
            <span>
                A fair comparison between{" "}
                <Strong>frozen representations</Strong> by enforcing the same
                downstream model in each task. Only a few hyper-paramters for
                training are allowed to tuned.
            </span>
        ),
        submit: "Make sure to read the rules before submitting.",
        Icon: LockIcon,
        theme: createMuiTheme(constrainedTheme),
    },
    {
        name: "less-constrained",
        rules: (
            <span>
                A comparison between <Strong>frozen representations</Strong>{" "}
                with customized but limited-resource downstream models. The
                details of downstream models are reported along with
                submissions.
            </span>
        ),
        submit: false,
        Icon: LockOpenIcon,
        theme: createMuiTheme(lessConstrainedTheme),
    },
    {
        name: "unconstrained",
        rules: (
            <span>
                The track does not limit any approach for solving SUPERB tasks
                as long as it in principle utilizes only{" "}
                <Strong>a single shared model</Strong> with limited
                task-specific parameters.
            </span>
        ),
        submit: false,
        Icon: AllInclusive,
        theme: createMuiTheme(unconstrainedTheme),
    },
];


const leaderboard_selections = [
    {
        name: "all",
        theme: createMuiTheme(submitFormTheme),
    },
    {
        name: "constrained",
        theme: createMuiTheme(constrainedTheme),
    },
    {
        name: "less-constrained",
        theme: createMuiTheme(lessConstrainedTheme),
    },
    {
        name: "unconstrained",
        theme: createMuiTheme(unconstrainedTheme),
    },
];

const public_hidden_selections = [
    {
        name: "public",
        theme: createMuiTheme(submitFormTheme),
    },
    {
        name: "hidden",
        theme: createMuiTheme(submitFormTheme),
    },
];


const public_task_columnInfo = {
    PR_per_public: {
        header: "PR public",
        width: 110,
        higherBetter: false,
        isScore: true,
        type: "number",
    },
    KS_acc_public: {
        header: "KS public",
        width: 110,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    IC_acc_public: {
        header: "IC public",
        width: 110,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    SID_acc_public: {
        header: "SID public",
        width: 110,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    ER_acc_public: {
        header: "ER public",
        width: 110,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    ERfold1_acc_public: {
        header: "ER fold1",
        width: 110,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    ERfold2_acc_public: {
        header: "ER fold2",
        width: 110,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    ERfold3_acc_public: {
        header: "ER fold3",
        width: 110,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    ERfold4_acc_public: {
        header: "ER fold4",
        width: 110,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    ERfold5_acc_public: {
        header: "ER fold5",
        width: 110,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    ASR_wer_public: {
        header: "ASR public",
        width: 120,
        higherBetter: false,
        isScore: true,
        type: "number",
    },
    ASR_LM_wer_public: {
        header: "ASR-LM public",
        width: 140,
        higherBetter: false,
        isScore: true,
        type: "number",
    },
    QbE_mtwv_public: {
        header: "QbE public",
        width: 120,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    SF_f1_public: {
        header: "SF-F1 public",
        width: 130,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    SF_cer_public: {
        header: "SF-CER public",
        width: 140,
        higherBetter: false,
        isScore: true,
        type: "number",
    },
    SV_eer_public: {
        header: "SV public",
        width: 110,
        higherBetter: false,
        isScore: true,
        type: "number",
    },
    SD_der_public: {
        header: "SD public",
        width: 110,
        higherBetter: false,
        isScore: true,
        type: "number",
    },
    ST_bleu_public: {
        header: "ST public",
        width: 110,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    SE_pesq_public: {
        header: "SE-PESQ public",
        width: 140,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    SE_stoi_public: {
        header: "SE-STOI public",
        width: 140,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    SS_sisdri_public: {
        header: "SS public",
        width: 110,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
}

const hidden_task_columnInfo = {
    PR_per_hidden_dev: {
        header: "PR hidden dev",
        width: 140,
        higherBetter: false,
        isScore: true,
        type: "number",
    },
    SID_acc_hidden_dev: {
        header: "SID hidden dev",
        width: 140,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    ER_acc_hidden_dev: {
        header: "ER hidden dev",
        width: 140,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    ASR_wer_hidden_dev: {
        header: "ASR hidden dev",
        width: 140,
        higherBetter: false,
        isScore: true,
        type: "number",
    },
    QbE_map_hidden_dev: {
        header: "QbE-MAP hidden dev",
        width: 180,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    QbE_eer_hidden_dev: {
        header: "QbE-EER hidden dev",
        width: 180,
        higherBetter: false,
        isScore: true,
        type: "number",
    },
    SV_eer_hidden_dev: {
        header: "SV hidden dev",
        width: 140,
        higherBetter: false,
        isScore: true,
        type: "number",
    },
    SD_der_hidden_dev: {
        header: "SD hidden dev",
        width: 140,
        higherBetter: false,
        isScore: true,
        type: "number",
    },
    ST_bleu_hidden_dev: {
        header: "ST hidden dev",
        width: 140,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    SS_sisdri_hidden_dev: {
        header: "SS hidden dev",
        width: 140,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    SE_stoi_hidden_dev: {
        header: "SE-STOI hidden dev",
        width: 180,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
    SE_pesq_hidden_dev: {
        header: "SE-PESQ hidden dev",
        width: 180,
        higherBetter: true,
        isScore: true,
        type: "number",
    },
}

const individual_submission_columnInfo = {
    aoeTimeUpload: {
        header: "Upolad Time",
        width: 160,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    submitName: {
        header: "Method",
        width: 150,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    modelDesc: {
        header: "Description",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    modelURL: {
        header: "Model URL",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    download: {
        header: "Download",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    task: {
        header: "Track",
        width: 130,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    showOnLeaderboard: {
        header: "Show",
        width: 70,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    stride: {
        header: "Stride",
        width: 100,
        higherBetter: undefined,
        type: "number",
    },
    inputFormat: {
        header: "Input Format",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    corpus: {
        header: "Corpus",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    paramDesc: {
        header: "Parameter Description",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    paramShared: {
        header: "Shared parameters",
        width: 100,
        higherBetter: undefined,
        type: "number",
    },
    fineTunedParam: {
        header: "Fine-tuned parameters",
        width: 100,
        higherBetter: undefined,
        type: "number",
    },
    taskSpecParam: {
        header: "Task-specific parameters",
        width: 100,
        higherBetter: undefined,
        type: "number",
    },
    state: {
        header: "State",
        width: 70,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    stateInfo: {
        header: "State Info",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    submitUUID: {
        header: "Submission ID",
        width: 300,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    ...public_task_columnInfo,
};

const individual_submission_hidden_columnInfo = {
    aoeTimeUpload: {
        header: "Upolad Time",
        width: 160,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    submitName: {
        header: "Method",
        width: 150,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    modelDesc: {
        header: "Description",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    task: {
        header: "Track",
        width: 130,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    showOnLeaderboard: {
        header: "Show",
        width: 70,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    huggingfaceOrganizationName: {
        header: "Organization",
        width: 130,
        higherBetter: undefined,
        type: "alphanumeric"
    },
    huggingfaceRepoName: {
        header: "Repository",
        width: 130,
        higherBetter: undefined,
        type: "alphanumeric"
    },
    huggingfaceCommonHash: {
        header: "Commit",
        width: 130,
        higherBetter: undefined,
        type: "alphanumeric"
    },
    paramShared: {
        header: "Shared parameters",
        width: 100,
        higherBetter: undefined,
        type: "number",
    },
    state: {
        header: "State",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    stateInfo: {
        header: "State Info",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    submitUUID: {
        header: "Submission ID",
        width: 300,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    ...hidden_task_columnInfo,
};


const leaderboard_columnInfo = {
    submitName: {
        header: "Method",
        width: 150,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    name: {
        header: "Name",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    modelDesc: {
        header: "Description",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    modelURL: {
        header: "URL",
        width: 60,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    aoeTimeUpload: {
        header: "Upolad Time",
        width: 160,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    task: {
        header: "Track",
        width: 130,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    stride: {
        header: "Stride",
        width: 100,
        higherBetter: undefined,
        type: "number",
    },
    inputFormat: {
        header: "Input Format",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    corpus: {
        header: "Corpus",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    paramDesc: {
        header: "Parameter Description",
        width: 100,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    paramShared: {
        header: "Shared parameters",
        width: 100,
        higherBetter: undefined,
        type: "number",
    },
    fineTunedParam: {
        header: "Fine-tuned parameters",
        width: 100,
        higherBetter: undefined,
        type: "number",
    },
    taskSpecParam: {
        header: "Task-specific parameters",
        width: 100,
        higherBetter: undefined,
        type: "number",
    },
    ...public_task_columnInfo,
};

const leaderboard_hidden_columnInfo = {
    submitName: {
        header: "Method",
        width: 150,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    modelDesc: {
        header: "Description",
        width: 150,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    name: {
        header: "Name",
        width: 130,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    aoeTimeUpload: {
        header: "Upolad Time",
        width: 160,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    task: {
        header: "Track",
        width: 130,
        higherBetter: undefined,
        type: "alphanumeric",
    },
    paramShared: {
        header: "Shared parameters",
        width: 100,
        higherBetter: undefined,
        type: "number",
    },
    ...hidden_task_columnInfo,
};

const reference_points = {
    "PR_per_public": [17.989999999999995, 96.47],
    "KS_acc_public": [41.3826674, 96.66],
    "IC_acc_public": [9.649354219, 98.76],
    "SID_acc_public": [20.058174, 9.03e+01],
    "ER_acc_public": [48.23672168, 67.62],
    "ASR_wer_public": [76.82, 96.38],
    "QbE_mtwv_public": [0.0058, 0.0736].map(item => 100 * item),
    "SF_f1_public": [69.64, 89.81],
    "SF_cer_public": [47.06, 78.24],
    "SV_eer_public": [90.44, 94.89],
    "SD_der_public": [89.95, 94.38],
    "ST_bleu_public": [2.32, 20.01],
    "SE_pesq_public": [2.55, 2.64],
    "SE_stoi_public": [93.6, 94.2],
    "SS_sisdri_public": [9.2341, 10.4514],
    "PR_per_hidden_dev": [0.8100076941, 0.1632352551].map(item => 100 * (1 - item)),
    "SID_acc_hidden_dev": [0.4958333373, 0.7983333468].map(item => 100 * item),
    "ER_acc_hidden_dev": [0.4712328911, 0.6794520617].map(item => 100 * item),
    "ASR_wer_hidden_dev": [0.7356, 0.2149418249].map(item => 100 * (1 - item)),
    "SV_eer_hidden_dev": [0.255671, 0.127294].map(item => 100 * (1 - item)),
    "SD_der_hidden_dev": [0.157551825, 0.1048149392].map(item => 100 * (1 - item)),
    "QbE_map_hidden_dev": [0.1860194802, 0.5108585358].map(item => 100 * item),
    "QbE_eer_hidden_dev": [0.3694903255, 0.1780432165].map(item => 100 * (1 - item)),
    "ST_bleu_hidden_dev": [3.2, 23.33],
    "SS_sisdri_hidden_dev": [4.655592075, 8.082589958],
    "SE_pesq_hidden_dev": [1.510035692, 1.567159144],
    "SE_stoi_hidden_dev": [0.8433188677, 0.8520344653].map(item => 100 * item),
}

const hidden_dev_set = [
    "PR_per_hidden_dev", "SID_acc_hidden_dev", "ER_acc_hidden_dev", "ASR_wer_hidden_dev", "QbE_map_hidden_dev",
    "QbE_eer_hidden_dev", "SV_eer_hidden_dev", "SD_der_hidden_dev", "ST_bleu_hidden_dev",
    "SE_pesq_hidden_dev", "SE_stoi_hidden_dev", "SS_sisdri_hidden_dev",
]

const hidden_test_set = [
    "PR_per_hidden_test", "SID_acc_hidden_test", "ER_acc_hidden_test", "ASR_wer_hidden_test", "QbE_map_hidden_test",
    "QbE_eer_hidden_test", "SV_eer_hidden_test", "SD_der_hidden_test", "ST_bleu_hidden_test",
    "SE_pesq_hidden_test", "SE_stoi_hidden_test", "SS_sisdri_hidden_test",
]

export {
    reference_points,
    subscribe_link,
    domains,
    tracks,
    individual_submission_columnInfo,
    individual_submission_hidden_columnInfo,
    leaderboard_columnInfo,
    leaderboard_hidden_columnInfo,
    leaderboard_selections,
    public_hidden_selections,
    hidden_dev_set,
    hidden_test_set,
};
