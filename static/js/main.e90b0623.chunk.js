(this["webpackJsonpsuperb-website"]=this["webpackJsonpsuperb-website"]||[]).push([[0],{267:function(e,t,n){},268:function(e,t,n){},414:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(25),c=n.n(r),s=(n(267),n(16)),o=(n(268),n(60)),l=n(27),d=n(450),h=n(36),j=n(455),b=n(249),u=n(475),p=n(109),m=n(452),O=n(417),x=n(15),g=n(5),f=n(171),S=n(1);function v(e){var t=Object(f.a)(),n=e.anchorKey,i=Object(g.a)(e,["anchorKey"]);return Object(S.jsxs)(a.a.Fragment,{children:[Object(S.jsx)(u.a,{id:n,position:"relative",top:t.spacing(-4),visibility:"hidden"}),Object(S.jsx)(u.a,Object(x.a)({},i))]})}function w(e){var t=Object(f.a)();return Object(S.jsx)(v,Object(x.a)({margin:t.spacing(4,"auto",8)},e))}function y(e){var t=Object(f.a)();return Object(S.jsx)(v,Object(x.a)({margin:t.spacing(4,"auto",6)},e))}function k(e){var t=Object(f.a)();return Object(S.jsx)(v,Object(x.a)({margin:t.spacing(4,"auto",4)},e))}var R=n(28),C=n(451),E=n(453),P=n(216),B=Object(d.a)((function(e){return{}}));function A(e){var t=e.link,n=e.children,i=t?P.a:u.a,a=Object(l.g)();Object(h.a)(),B();return Object(S.jsx)(u.a,{component:"span",fontWeight:a.pathname.includes(t)?"bold":"inherit",children:(t||"").includes("http")?Object(S.jsx)("a",{className:"unlink",href:t||"",target:"_blank",children:n}):Object(S.jsx)(i,{className:"unlink",to:t||"",children:n})})}var F=Object(d.a)((function(e){return{descriptionButton:{display:"inline-block",margin:e.spacing(1)},pseudoOutlinedPrimaryButton:{backgroundColor:"transparent",border:"1px solid ".concat(Object(R.b)(e.palette.primary.main,.5)),borderRadius:e.shape.borderRadius,display:"inline-block"},innerButton:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}}}));function I(e){var t=e.name,n=e.link,i=F();return Object(S.jsx)(A,{link:n,children:Object(S.jsx)(C.a,{size:"small",variant:"outlined",className:i.descriptionButton,children:t})})}function D(e){var t=e.buttons,n=void 0===t?[{name:"rules",link:"/submit#rules"},{name:"submit",link:"/submit#submit"}]:t,i=F();return Object(S.jsx)("div",{className:i.pseudoOutlinedPrimaryButton,children:Object(S.jsx)(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:0,children:n.map((function(e,t){var r=e.name,c=e.link;return Object(S.jsxs)(a.a.Fragment,{children:[Object(S.jsx)(m.a,{item:!0,children:Object(S.jsx)(A,{link:c,children:Object(S.jsx)(C.a,{disabled:!c,color:"primary",className:i.innerButton,children:r})})}),t<n.length-1&&Object(S.jsx)(m.a,{item:!0,children:Object(S.jsx)(u.a,{height:28,children:Object(S.jsx)(E.a,{orientation:"vertical"})})})]})}))})})}function M(e){var t=Object(h.a)();return Object(S.jsxs)(u.a,{margin:t.spacing(0,0,8),children:[Object(S.jsx)(u.a,{margin:t.spacing(8,"auto",1),children:Object(S.jsx)(p.a,{variant:"h2",color:"textPrimary",children:Object(S.jsx)("strong",{children:"SUPERB"})})}),Object(S.jsx)(u.a,{margin:t.spacing(1,"auto",6),children:Object(S.jsxs)(p.a,{variant:Object(O.a)(t.breakpoints.up("sm"))?"h4":"h5",color:"textPrimary",children:[Object(S.jsx)("strong",{children:"S"}),"peech processing ",Object(S.jsx)("strong",{children:"U"}),"niversal"," ",Object(S.jsx)("strong",{children:"PER"}),"formance ",Object(S.jsx)("strong",{children:"B"}),"enchmark"]})}),Object(S.jsx)(y,{children:Object(S.jsx)(m.a,{container:!0,justify:"space-evenly",spacing:0,children:["ntu-1000.png","fair-1000.png","mit-1000.png","cmu-1000.png","jhu-1000.png"].map((function(e){return Object(S.jsx)(m.a,{item:!0,xs:12,sm:6,md:6,children:Object(S.jsx)("img",{src:e,width:"100%"})})}))})}),Object(S.jsxs)(u.a,{maxWidth:800,margin:"auto",textAlign:"left",children:[Object(S.jsx)(k,{children:Object(S.jsxs)(p.a,{variant:"body1",color:"textSecondary",children:["SUPERB is a collection of benchmarking resources to evaluate the capability of a universal shared representation for speech processing. SUPERB consists of the following:",Object(S.jsx)("div",{style:{width:"fit-content",margin:"auto",textAlign:"left"},children:Object(S.jsxs)("ol",{children:[Object(S.jsx)("li",{children:"A benchmark of ten speech processing tasks [1] built on established public datasets,"}),Object(S.jsxs)("li",{children:["A",Object(S.jsx)(I,{name:"benchmark toolkit",link:"https://github.com/s3prl/s3prl"}),"designed to evaluate and analyze pretrained model performance on various downstream tasks following the conventional evaluation protocols from speech communities,"]}),Object(S.jsxs)("li",{children:["A public",Object(S.jsx)(I,{name:"leaderboard",link:"/leaderboard"}),"for ",Object(S.jsx)(I,{name:"submissions",link:"/submit"}),"and performance tracking on the benchmark."]})]})})]})}),Object(S.jsx)(k,{children:Object(S.jsx)(p.a,{variant:"body1",color:"textSecondary",children:"SUPERB aims to offer the community a standard and comprehensive framework to train, evaluate, and compare the generalizability of universal speech representations on speech processing tasks. A universal speech representation can be leveraged to quickly adapt to diverse downstream tasks with minimum architectural change and downstream fine-tuning, so as to reduce the model development cycle time for new tasks. To emphasize on evaluating the quality of the learned universal representation, SUPERB puts an explicit constraint on the downstream model and limits its parameter size."})}),Object(S.jsx)(k,{children:Object(S.jsx)(p.a,{variant:"body1",color:"textSecondary",children:"The ultimate goal of SUPERB is to democratize the advancement in speech processing with powerful, generalizable, and reusable speech representations. SUPERB is a long-term maintained and continuously developing project. As we are gradually releasing new tasks and opening new tracks, we invite researchers to participate in the challenge and advance the research frontier together."})}),Object(S.jsxs)(u.a,{margin:t.spacing(8,0),children:["Note.",Object(S.jsx)("ol",{children:Object(S.jsx)("li",{children:"The initial release covers 10 discriminative tasks ranging from content, speaker, semantics, to paralinguistics. The SUPERB team is working on a follow-up release with generative tasks to come. Stay tuned!"})})]})]})]})}var L=n(88),T=n.n(L);function N(e){var t=Object(f.a)(),n=e.title,i=void 0===n?"Title":n,a=e.titleColor,r=void 0===a?"textPrimary":a,c=e.titleVariant,s=void 0===c?"h4":c,o=e.description,l=void 0===o?null:o,d=e.descriptionColor,h=void 0===d?"textSecondary":d,j=e.descriptionVariant,b=void 0===j?"body1":j,m=e.textMaxWidth,O=void 0===m?750:m,x=e.divider,g=void 0===x||x;return Object(S.jsxs)(u.a,{margin:t.spacing(3,"auto"),children:[Object(S.jsxs)(u.a,{margin:t.spacing(2,"auto"),maxWidth:O,children:[Object(S.jsx)(p.a,{color:r,variant:s,children:i}),l&&Object(S.jsx)(u.a,{margin:t.spacing(1,"auto"),children:Object(S.jsx)(p.a,{color:h,variant:b,children:l})})]}),g&&Object(S.jsx)(E.a,{})]})}function V(e){return Object(S.jsx)(N,Object(x.a)({},e))}function K(e){var t=T()(e,{titleVariant:{$set:"h5"}});return Object(S.jsx)(N,Object(x.a)({},t))}var z=n(418);function Q(e){var t=e.elevation,n=void 0===t?3:t,i=e.liftDegree,r=void 0===i?6:i,c=Object(g.a)(e,["elevation","liftDegree"]),o=a.a.useState(!1),l=Object(s.a)(o,2),d=l[0],h=l[1];return Object(S.jsx)(z.a,Object(x.a)(Object(x.a)({},c),{},{elevation:d?n+r:n,onMouseOver:function(){h((function(e){return!e}))},onMouseOut:function(){h((function(e){return!e}))}}))}function W(e){return e.charAt(0).toUpperCase()+e.slice(1)}function U(e){return Object(S.jsx)(u.a,{component:"span",fontWeight:"bold",fontStyle:"italic",children:e.children})}var H=n(217),G=n.n(H),q=n(218),$=n.n(q),J=n(219),Y=n.n(J),X=n(136),_=n(454),Z=n(137),ee=n(138),te=n(139),ne={palette:{primary:{main:X.a[100]},text:{primary:_.a[600],secondary:X.a[600]}}},ie=T()(ne,{palette:{primary:{main:{$set:Z.a[400]}}}}),ae=T()(ne,{palette:{primary:{main:{$set:ee.a[400]}}}}),re=T()(ne,{palette:{primary:{main:{$set:te.a[400]}}}}),ce=[{name:"recognition",description:"recognition description",tasks:[{name:"PR",description:"            Phoneme Recognition, PR transcribes an utterance into the smallest content units.            We include alignment modeling in the PR task to avoid the potential inaccurate forced alignment.            LibriSpeech train-clean-100/dev-clean/test-clean subsets are adopted in SUPERB for training/validation/testing.            Phoneme transcriptions are obtained from the LibriSpeech official g2p-model-5 and the conversion script in Kaldi librispeech s5 recipe.            The evaluation metric is phone error rate (PER).          "},{name:"ASR",description:"            Automatic Speech Recognition, ASR transcribes utterances into words.            While PR analyzes the improvement in modeling phonetics, ASR reflects the significance of the improvement in a real-world scenario.            LibriSpeech train-clean-100/devclean/test-clean subsets are used for training/validation/testing.            The evaluation metric is word error rate (WER).          "}]},{name:"detection",description:"detection description",tasks:[{name:"KS",description:"            Keyword Spotting, KS detects preregistered keywords by classifying utterances into a predefined set of words.            The task is usually performed on-device for the fast response time.            Thus, accuracy, model size, and inference time are all crucial.            We choose the widely used Speech Commands dataset v1.0 for the task.            The dataset consists of ten classes of keywords, a class for silence, and an unknown class to include the false positive.            The evaluation metric is accuracy (ACC)          "},{name:"QbE",description:"            Query by Example Spoken Term Detection, QbE detects a spoken term (query) in an audio database (documents) by             binary discriminating a given pair of query and document into a match or not.            The English subset in QUESST 2014 challenge is adopted since we focus on investigating English as the first step.            The evaluation metric is maximum term weighted value (MTWV) which balances misses and false alarms.          "}]},{name:"semantics",description:"semantics description",tasks:[{name:"IC",description:"            Intent Classification, IC classifies utterances into predefined classes to determine the intent of speakers.            We use the Fluent Speech Commands dataset, where each utterance is tagged with three intent labels: action, object, and location.            The evaluation metric is accuracy (ACC).          "},{name:"SF",description:"            Slot Filling, SF predicts a sequence of semantic slot-types from an utterance,             like a slot-type FromLocation for a spoken word Taipei, which is known as a slot-value.            Both slot-types and slot-values are essential for an SLU system to function.            The evaluation metrics thus include slot-type F1 score and slotvalue CER.            Audio SNIPS is adopted, which synthesized multi-speaker utterances for SNIPS.            Following the standard split in SNIPS, US-accent speakers are further selected for training, and others are for validation/testing.          "}]},{name:"speaker",description:"speaker description",tasks:[{name:"SID",description:"            Speaker Identification, SID classifies each utterance for its speaker identity as a multi-class classification,             where speakers are in the same predefined set for both training and testing.            The widely used VoxCeleb1 [26] is adopted, and the evaluation metric is accuracy (ACC).          "},{name:"SV",description:"            Automatic Speaker Verification, ASV verifies whether the speakers of a pair of utterances match as a binary classification,             and speakers in the testing set may not appear in the training set.            Thus, ASV is more challenging than SID. VoxCeleb1 is used without VoxCeleb2 training data and noise augmentation.             The evaluation metric is equal error rate (EER).          "},{name:"SD",description:"            Speaker Diarization, SD predicts who is speaking when for each timestamp, and multiple speakers can speak simultaneously.            The model has to encode rich speaker characteristics for each frame and should be able to represent mixtures of signals.            LibriMix is adopted where LibriSpeech train-clean-100/dev-clean/test-clean are used to generate mixtures for training/validation/testing.            We focus on the two-speaker scenario as the first step.            The time-coded speaker labels were generated using alignments from Kaldi LibriSpeech ASR model.            The evaluation metric is diarization error rate (DER).          "}]},{name:"paralinguistics",description:"paralinguistics description",tasks:[{name:"ER",description:"            Emotion Recognition, ER predicts an emotion class for each utterance.            The most widely used ER dataset IEMOCAP is adopted, and we follow the conventional evaluation protocol:            we drop the unbalance emotion classes to leave the final four classes with a similar amount of data points and             cross-validates on five folds of the standard splits.            The evaluation metric is accuracy (ACC).          "}]}],se=[{name:"constrained",rules:Object(S.jsxs)("span",{children:["A fair comparison between ",Object(S.jsx)(U,{children:"frozen representations"})," by enforcing the same downstream model in each task. Only a few hyper-paramters for training are allowed to tuned."]}),submit:"The submission form is in preparation. Stay tuned :)",Icon:G.a,theme:Object(b.a)(ie)},{name:"less-constrained",rules:Object(S.jsxs)("span",{children:["A comparison between ",Object(S.jsx)(U,{children:"frozen representations"})," with customized but limited-resource downstream models. The details of downstream models are reported along with submissions."]}),submit:!1,Icon:$.a,theme:Object(b.a)(ae)},{name:"unconstrained",rules:Object(S.jsxs)("span",{children:["The track does not limit any approach for solving SUPERB tasks as long as it in principle utilizes only ",Object(S.jsx)(U,{children:"a single shared model"})," ","with limited task-specific parameters."]}),submit:!1,Icon:Y.a,theme:Object(b.a)(re)}],oe=[{Method:"FBANK",Description:"classic feature",Parameters:0,Stride:10,Input:"waveform",Corpus:"-",PR:82.01,KS:8.63,IC:9.1,SID:85e-5,ER:35.39,ASR:23.18,"ASR-LM":15.21,QbE:.0058,"SF-F1":69.64,"SF-CER":52.94,SV:9.56,SD:10.05},{Method:"PASE+",Description:"multi-task",Parameters:783e4,Stride:10,Input:"waveform",Corpus:"LS 50 hr",PR:58.88,KS:82.37,IC:30.29,SID:35.84,ER:57.64,ASR:24.92,"ASR-LM":16.61,QbE:7e-4,"SF-F1":60.41,"SF-CER":62.77,SV:10.91,SD:8.52},{Method:"APC",Description:"F-G",Parameters:411e4,Stride:10,Input:"FBANK",Corpus:"LS 360 hr",PR:41.85,KS:91.04,IC:74.64,SID:59.79,ER:58.84,ASR:21.61,"ASR-LM":15.09,QbE:.0268,"SF-F1":71.26,"SF-CER":50.76,SV:8.81,SD:10.72},{Method:"VQ-APC",Description:"F-G + VQ",Parameters:463e4,Stride:10,Input:"FBANK",Corpus:"LS 360 hr",PR:42.86,KS:90.52,IC:70.52,SID:49.57,ER:58.31,ASR:21.72,"ASR-LM":15.37,QbE:.0205,"SF-F1":69.62,"SF-CER":52.21,SV:9.29,SD:10.49},{Method:"NPC",Description:"M-G + VQ",Parameters:1938e4,Stride:10,Input:"FBANK",Corpus:"LS 360 hr",PR:52.67,KS:88.54,IC:64.04,SID:50.77,ER:59.55,ASR:20.94,"ASR-LM":14.69,QbE:.022,"SF-F1":67.43,"SF-CER":54.63,SV:10.28,SD:9.59},{Method:"Mockingjay",Description:"time M-G",Parameters:8512e4,Stride:10,Input:"FBANK",Corpus:"LS 360 hr",PR:80.01,KS:82.67,IC:28.87,SID:34.5,ER:45.72,ASR:23.72,"ASR-LM":15.94,QbE:3.1e-10,"SF-F1":60.83,"SF-CER":61.16,SV:23.22,SD:11.24},{Method:"TERA",Description:"time/freq M-G",Parameters:2133e4,Stride:10,Input:"FBANK",Corpus:"LS 960 hr",PR:47.53,KS:88.09,IC:48.8,SID:58.67,ER:54.76,ASR:18.45,"ASR-LM":12.44,QbE:87e-6,"SF-F1":63.28,"SF-CER":57.91,SV:16.49,SD:9.54},{Method:"modified CPC",Description:"F-C",Parameters:184e4,Stride:10,Input:"waveform",Corpus:"LL 60k hr",PR:41.66,KS:92.02,IC:65.01,SID:42.29,ER:59.28,ASR:20.02,"ASR-LM":13.57,QbE:.0061,"SF-F1":74.18,"SF-CER":46.66,SV:9.67,SD:11},{Method:"wav2vec",Description:"F-C",Parameters:3254e4,Stride:10,Input:"waveform",Corpus:"LS 960 hr",PR:32.39,KS:94.09,IC:78.91,SID:44.88,ER:58.17,ASR:16.4,"ASR-LM":11.3,QbE:.0307,"SF-F1":77.52,"SF-CER":41.75,SV:9.83,SD:10.79},{Method:"vq-wav2vec",Description:"F-C + VQ",Parameters:3415e4,Stride:10,Input:"waveform",Corpus:"LS 960 hr",PR:53.49,KS:92.28,IC:59.4,SID:39.04,ER:55.89,ASR:18.7,"ASR-LM":12.69,QbE:.0302,"SF-F1":70.57,"SF-CER":50.16,SV:9.5,SD:9.93},{Method:"wav2vec 2.0",Description:"M-C + VQ",Parameters:9504e4,Stride:20,Input:"waveform",Corpus:"LS 960 hr",PR:28.37,KS:92.31,IC:58.34,SID:45.62,ER:56.93,ASR:9.57,"ASR-LM":6.32,QbE:88e-5,"SF-F1":79.94,"SF-CER":37.81,SV:9.69,SD:7.48},{Method:"HuBERT Base",Description:"M-P + VQ",Parameters:9468e4,Stride:20,Input:"waveform",Corpus:"LS 960 hr",PR:6.85,KS:95.98,IC:95.94,SID:64.84,ER:62.94,ASR:6.74,"ASR-LM":4.93,QbE:.0759,"SF-F1":86.24,"SF-CER":28.52,SV:7.22,SD:6.76},{Method:"HuBERT Large",Description:"M-P + VQ",Parameters:31661e4,Stride:20,Input:"waveform",Corpus:"LL 60k hr",PR:3.72,KS:93.15,IC:98.37,SID:66.4,ER:64.93,ASR:3.67,"ASR-LM":2.91,QbE:.036,"SF-F1":88.68,"SF-CER":23.05,SV:7.7,SD:6.23}],le=Object(d.a)((function(e){return{taskName:{fontWeight:"bold",marginBottom:e.spacing(2)}}}));var de=function(e){var t=le(),n=Object(h.a)();return Object(S.jsxs)(a.a.Fragment,{children:[Object(S.jsxs)(w,{children:[Object(S.jsx)(V,{title:"Tasks",description:Object(S.jsxs)("span",{children:["General speech processing can be categorized into"," ",Object(S.jsx)(U,{children:"discriminative"})," and ",Object(S.jsx)(U,{children:"generative"})," ","tasks. The initial release of SUPERB focues on the former, where ten tasks are collected from ",Object(S.jsx)(U,{children:"five domains"}),"."]})}),Object(S.jsx)(m.a,{container:!0,direction:"row",spacing:2,justify:"center",children:ce.map((function(e){var t=e.name;return Object(S.jsx)(m.a,{item:!0,children:Object(S.jsx)(A,{link:"/tasks#".concat(t),children:Object(S.jsx)(C.a,{variant:"outlined",children:W(t.toLowerCase())})})})}))})]}),ce.map((function(e){var i=e.name,a=e.description,r=e.tasks;return Object(S.jsxs)(w,{anchorKey:i,children:[Object(S.jsx)(V,{title:W(i.toLowerCase()),description:a}),Object(S.jsx)(m.a,{container:!0,spacing:5,justify:"center",children:r.map((function(e){var i=e.name,a=e.description;return Object(S.jsx)(m.a,{item:!0,xs:12,sm:6,md:4,children:Object(S.jsx)(Q,{elevation:3,children:Object(S.jsxs)(u.a,{padding:n.spacing(3,2),children:[Object(S.jsx)(p.a,{color:"textPrimary",variant:"h6",className:t.taskName,children:"".concat(i)}),Object(S.jsx)(p.a,{color:"textSecondary",variant:"body2",children:a})]})})})}))})]})}))]})};function he(e){var t=e.name,n=void 0===t?"constrained":t,i=e.submit,a=void 0===i?"This is constrained track":i;return Object(S.jsxs)("div",{children:[Object(S.jsx)(k,{children:Object(S.jsx)(K,{title:Object(S.jsxs)("span",{children:[Object(S.jsx)("strong",{children:W(n.toLowerCase())})," Submission"]}),titleColor:"primary"})}),Object(S.jsx)(k,{children:Object(S.jsx)(p.a,{variant:"body1",color:"textSecondary",children:a})})]})}var je=Object(d.a)((function(e){return{}}));function be(e){je();var t=Object(h.a)(),n=Object(l.h)();return Object(S.jsxs)(l.c,{children:[Object(S.jsxs)(l.a,{path:"".concat(n.path),exact:!0,children:[Object(S.jsxs)(w,{children:[Object(S.jsx)(V,{title:"Submit",description:Object(S.jsxs)("span",{children:["Submissions are categorized into ",Object(S.jsx)(U,{children:"three tracks"})," ","for different usages of the shared pretrained model, and should follow the"," ",Object(S.jsx)(I,{name:"general rules",link:"".concat(n.url,"#general-rules")}),"and the track-specific rules."]})}),Object(S.jsx)(m.a,{container:!0,direction:"row",spacing:4,justify:"center",alignItems:"center",children:se.map((function(e){var i=e.name,a=e.rules,r=e.submit,c=e.theme;return Object(S.jsx)(m.a,{item:!0,children:Object(S.jsx)(j.a,{theme:c,children:Object(S.jsxs)("div",{children:[Object(S.jsxs)(p.a,{component:"span",variant:"body1",color:"primary",children:[Object(S.jsx)("strong",{children:W(i.toLowerCase())})," ","track"]}),Object(S.jsx)(u.a,{marginTop:"".concat(t.spacing(1),"px"),children:Object(S.jsx)(D,{buttons:[{name:"rules",link:a?"".concat(n.url,"#").concat(i):null},{name:"submit",link:r?"".concat(n.url,"/").concat(i):null}]})})]})})})}))})]}),Object(S.jsxs)(w,{anchorKey:"general-rules",children:[Object(S.jsx)(V,{title:"General Rules",description:"The general rules applied to all tracks."}),Object(S.jsx)(p.a,{variant:"body1",color:"textSecondary",children:"To be decided."})]}),Object(S.jsxs)(w,{anchorKey:"track-rules",children:[Object(S.jsx)(V,{title:"Track Rules",description:"The track-specific rules for each of the tracks."}),se.map((function(e){var t=e.name,i=e.rules,a=e.submit,r=e.theme;return Object(S.jsx)(j.a,{theme:r,children:Object(S.jsx)(u.a,{maxWidth:650,margin:"auto",children:Object(S.jsxs)(w,{anchorKey:t,children:[Object(S.jsx)(V,{title:W(t.toLowerCase()),titleVariant:"h5",titleColor:"primary",divider:!1}),Object(S.jsx)(p.a,{variant:"body1",color:"textSecondary",children:i}),Object(S.jsx)(u.a,{margin:r.spacing(3,"auto"),children:Object(S.jsx)(A,{link:a?"".concat(n.url,"/").concat(t):null,children:Object(S.jsx)(C.a,{disabled:!a,size:"large",color:"primary",variant:"outlined",children:"Submit"})})})]})})})}))]})]}),se.map((function(e){var t=e.name,i=e.theme;return Object(S.jsx)(l.a,{path:"".concat(n.path,"/").concat(t),children:Object(S.jsx)(j.a,{theme:i,children:Object(S.jsx)(he,Object(x.a)({},e))})})}))]})}var ue=n(456),pe=n(457),me=n(461),Oe=n(235),xe=n(236),ge=n(250),fe=n(104);function Se(e){return Object(S.jsx)("div",{children:Object(S.jsxs)(w,{children:[Object(S.jsx)(V,{title:"Compare",description:"Compare between two submissions including pretraining details and performance."}),Object(S.jsx)(u.a,{display:"flex",alignItems:"center",justifyContent:"center",children:Object(S.jsx)(ue.a,{width:"85%",height:300,children:Object(S.jsxs)(pe.a,{data:[{subject:"Math",A:120,B:110,fullMark:150},{subject:"Chinese",A:98,B:130,fullMark:150},{subject:"English",A:86,B:130,fullMark:150},{subject:"Geography",A:99,B:100,fullMark:150},{subject:"Physics",A:85,B:90,fullMark:150},{subject:"History",A:65,B:85,fullMark:150}],children:[Object(S.jsx)(me.a,{}),Object(S.jsx)(Oe.a,{dataKey:"subject"}),Object(S.jsx)(xe.a,{angle:30,domain:[0,150]}),Object(S.jsx)(ge.a,{name:"Mike",dataKey:"A",stroke:"#8884d8",fill:"#8884d8",fillOpacity:.6}),Object(S.jsx)(ge.a,{name:"Lily",dataKey:"B",stroke:"#82ca9d",fill:"#82ca9d",fillOpacity:.6}),Object(S.jsx)(fe.a,{})]})})})]})})}var ve,we=n(239),ye=n(241),ke=n(107),Re=n(240),Ce=n(245),Ee=n.n(Ce),Pe=n(246),Be=n.n(Pe),Ae=n(477),Fe=n(462),Ie=n(419),De=n(463),Me=n(479),Le=Object(d.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"}}}));function Te(e){var t=e.tableInstance,n=e.modalOpenRef,i=void 0===n?null:n,r=Le(),c=a.a.useState(!1),o=Object(s.a)(c,2),l=o[0],d=o[1],j=t.allColumns,b=(t.setGlobalFilter,function(){d(!0)}),O=Object(h.a)();return Object(S.jsxs)("div",{children:[i?Object(S.jsx)("div",{ref:i,onClick:b}):Object(S.jsx)("button",{type:"button",onClick:b,children:"react-transition-group"}),Object(S.jsx)(Ae.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:r.modal,open:l,onClose:function(){d(!1)},closeAfterTransition:!0,BackdropComponent:Fe.a,BackdropProps:{timeout:500},children:Object(S.jsx)(Ie.a,{in:l,children:Object(S.jsx)(u.a,{width:"85%",maxWidth:700,children:Object(S.jsx)(z.a,{children:Object(S.jsxs)(u.a,{padding:O.spacing(4,6),margin:"auto",maxHeight:"80vh",overflow:"auto",children:[Object(S.jsxs)(y,{children:[Object(S.jsx)(K,{title:"Leaderboard"}),Object(S.jsxs)(p.a,{variant:"body2",color:"textSecondary",children:["All the submissions are presented in a single table. You can use the buttons below to choose which tracks you are interested or what information (column) you wish to compare. The default ranking of all submissions are sorted by a randomly selected task, so the ranking will be different everytime you refresh the page. You can check the column with the"," ",Object(S.jsx)("span",{style:{color:te.a[300]},children:"green task name"})," ","for the current sorting column."]})]}),Object(S.jsxs)(y,{children:[Object(S.jsx)(K,{title:"Toggles"}),Object(S.jsx)(u.a,{margin:O.spacing(4,"auto",0),children:Object(S.jsx)(m.a,{container:!0,direction:"row",children:j.map((function(e){return Object(S.jsx)(m.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(S.jsx)(De.a,{control:Object(S.jsx)(Me.a,{checked:e.isVisible,onChange:function(){e.toggleHidden()},name:e.Header}),label:e.Header})})}))})})]})]})})})})})]})}var Ne=ye.a.div(ve||(ve=Object(we.a)(["\n  .table {\n    outline: 1px solid #ddd;\n\n    .th,\n    .td {\n      background-color: ",";\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      border: 0.2px solid #ddd;\n      padding: ",";\n    }\n\n    .th {\n      font-weight: bold;\n      padding: ",";\n    }\n\n    .toggle {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    &.sticky {\n      overflow: scroll;\n      .header,\n      .footer {\n        position: sticky;\n        z-index: 1;\n        width: fit-content;\n      }\n\n      .header {\n        top: 0;\n        box-shadow: 0px 3px 3px #ccc;\n      }\n\n      .footer {\n        bottom: 0;\n        box-shadow: 0px -3px 3px #ccc;\n      }\n\n      .body {\n        position: relative;\n        z-index: 0;\n      }\n\n      [data-sticky-td] {\n        position: sticky;\n      }\n\n      [data-sticky-last-left-td] {\n        box-shadow: 2px 2px 3px #ccc;\n      }\n\n      [data-sticky-first-right-td] {\n        box-shadow: -2px -2px 3px #ccc;\n      }\n    }\n  }\n\n  .resizer {\n    display: inline-block;\n    background: ",";\n    width: ",";\n    height: 100%;\n    position: absolute;\n    right: 0;\n    top: 0;\n    transform: translateX(50%);\n    z-index: 1;\n    ","\n    touch-action:none;\n\n    &.isResizing, &:hover {\n      background: ",";\n    }\n"])),(function(e){return e.theme.palette.primary.main}),(function(e){return e.theme.spacing(1,1)}),(function(e){return e.theme.spacing(1.5,1)}),(function(e){return"".concat(Object(R.b)(e.theme.palette.text.primary,.2))}),(function(e){return"".concat(e.theme.spacing(2),"px")}),"",(function(e){return"".concat(Object(R.b)(e.theme.palette.text.primary,.6))}));function Ve(e){var t=e.columns,n=e.data,i=e.height,r=void 0===i?"500px":i,c=e.tableControlRef,s=void 0===c?null:c,o=Object(h.a)(),l=a.a.useMemo((function(){return{minWidth:10,width:150,maxWidth:400}}),[]),d=t.filter((function(e){return e.isScore})),j=d[Math.floor(Math.random()*d.length)],b=a.a.useMemo((function(){return[{id:j.accessor,desc:j.higherBetter}]})),u=Object(ke.useTable)({columns:t,data:n,defaultColumn:l,initialState:{hiddenColumns:["Description","Parameters","Stride","Input","Corpus"],sortBy:b}},ke.useSortBy,ke.useBlockLayout,ke.useResizeColumns,Re.useSticky),p=u.getTableProps,m=u.getTableBodyProps,O=u.headerGroups,g=u.rows,f=u.prepareRow;return Object(S.jsxs)(Ne,{theme:o,children:[Object(S.jsx)(Te,{tableInstance:u,modalOpenRef:s}),Object(S.jsxs)("div",Object(x.a)(Object(x.a)({},p()),{},{className:"table sticky",style:{width:"fit-content",maxWidth:"100%",maxHeight:r,margin:"auto"},children:[Object(S.jsx)("div",{className:"header",children:O.map((function(e){return Object(S.jsx)("div",Object(x.a)(Object(x.a)({},e.getHeaderGroupProps()),{},{className:"tr",children:e.headers.map((function(e){var t=void 0==e.isSortedDesc||void 0==e.higherBetter?o.palette.text.primary:e.isSortedDesc==e.higherBetter?te.a[300]:Z.a[300];return Object(S.jsxs)("div",Object(x.a)(Object(x.a)({},e.getHeaderProps()),{},{className:"th",children:[Object(S.jsxs)("div",Object(x.a)(Object(x.a)({},e.getSortByToggleProps()),{},{className:"toggle",children:[Object(S.jsx)("span",{style:{margin:"0px 1px",color:t},children:e.render("Header")}),void 0!=e.higherBetter&&(e.higherBetter?Object(S.jsx)(Ee.a,{style:{fontSize:16,color:t}}):Object(S.jsx)(Be.a,{style:{fontSize:16,color:t}}))]})),Object(S.jsx)("div",Object(x.a)(Object(x.a)({},e.getResizerProps()),{},{className:"resizer ".concat(e.isResizing?"isResizing":"")}))]}))}))}))}))}),Object(S.jsx)("div",Object(x.a)(Object(x.a)({},m()),{},{className:"body",children:g.map((function(e,t){return f(e),Object(S.jsx)("div",Object(x.a)(Object(x.a)({},e.getRowProps()),{},{className:"tr",children:e.cells.map((function(e){return Object(S.jsx)("div",Object(x.a)(Object(x.a)({},e.getCellProps()),{},{className:"td",children:e.render("Cell")}))}))}))}))}))]}))]})}var Ke=function(e){Object(h.a)();var t={Method:{width:120,higherBetter:void 0},Description:{width:120,higherBetter:void 0},Parameters:{width:100,higherBetter:void 0},Stride:{width:100,higherBetter:void 0},Input:{width:100,higherBetter:void 0},Corpus:{width:100,higherBetter:void 0},PR:{width:100,higherBetter:!1,isScore:!0},KS:{width:100,higherBetter:!0,isScore:!0},IC:{width:100,higherBetter:!0,isScore:!0},SID:{width:100,higherBetter:!0,isScore:!0},ER:{width:100,higherBetter:!0,isScore:!0},ASR:{width:100,higherBetter:!1,isScore:!0},"ASR-LM":{width:100,higherBetter:!1,isScore:!0},QbE:{width:100,higherBetter:!0,isScore:!0},"SF-F1":{width:100,higherBetter:!0,isScore:!0},"SF-CER":{width:100,higherBetter:!1,isScore:!0},SV:{width:100,higherBetter:!1,isScore:!0},SD:{width:100,higherBetter:!1,isScore:!0}},n=a.a.useCallback((function(e,t,n,i){return e.original[n]>t.original[n]?1:-1})),i=Object.keys(t).map((function(e){return{Header:e,accessor:e,width:t[e].width,sortType:"number"==typeof oe[0][e]?n:"alphanumeric",higherBetter:t[e].higherBetter,isScore:t[e].isScore}}));i[0].sticky="left";var r=a.a.useMemo((function(){return i})),c=a.a.useMemo((function(){return oe}),[]);return Object(S.jsx)(Ve,Object(x.a)({columns:r,data:c},e))},ze=n(468),Qe=n(467),We=n(469),Ue=n(470),He=n(471),Ge=n(472),qe=n(474),$e=n(247),Je=n.n($e),Ye=n(480),Xe=n(473),_e=n(29),Ze=n(8),et=n(478),tt=n(464),nt=n(465),it=n(466),at=Object(d.a)({list:{width:200,paddingLeft:20,paddingRight:20},fullList:{width:"auto"}});function rt(e){var t=at(),n=a.a.useState({top:!1,left:!1,bottom:!1,right:!1}),i=Object(s.a)(n,2),r=i[0],c=i[1],o=function(e,t){return function(n){(!n||"keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&c(Object(x.a)(Object(x.a)({},r),{},Object(_e.a)({},e,t)))}},l=function(n){return Object(S.jsx)("div",{className:Object(Ze.a)(t.list,Object(_e.a)({},t.fullList,"top"===n||"bottom"===n)),role:"presentation",onClick:o(n,!1),onKeyDown:o(n,!1),children:Object(S.jsx)(tt.a,{children:e.items.map((function(e){var t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(S.jsxs)("div",{children:[Object(S.jsx)(A,{link:i,children:Object(S.jsx)(nt.a,{button:!0,children:Object(S.jsx)(it.a,{children:n})})}),Object(S.jsx)(E.a,{})]})}))})})};return Object(S.jsx)("div",{children:["right"].map((function(t){return Object(S.jsxs)(a.a.Fragment,{children:[Object(S.jsx)("div",{onClick:o(t,!0),children:e.children}),Object(S.jsx)(et.a,{anchor:t,open:r[t],onClose:o(t,!1),onOpen:o(t,!0),children:l(t)})]},t)}))})}function ct(e){var t=e.children,n=e.window,i=Object(ze.a)({target:n?n():void 0});return Object(S.jsx)(Qe.a,{appear:!1,direction:"down",in:!i,children:t})}function st(e){var t=e.children,n=e.window,i=ot(),a=Object(l.f)(),r=Object(l.g)(),c=Object(ze.a)({target:n?n():void 0,disableHysteresis:!0,threshold:100});return Object(S.jsx)(We.a,{in:c,children:Object(S.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&(t.scrollIntoView({block:"center"}),a.push(r.pathname))},role:"presentation",className:i.root,children:t})})}var ot=Object(d.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},toolbar:{width:"100%",maxWidth:900,margin:"auto",paddingLeft:20,paddingRight:20},tool:{paddingTop:5,paddingBottom:5},button:{paddingLeft:12,paddingRight:12,marginLeft:2,marginRight:2,borderRadius:10,border:"solid 1px transparent","&:hover":{background:"rgba(255, 255, 255, 1)",boxShadow:"0px 3px 10px rgba(0, 0, 0, 0.1)"},cursor:"pointer"},navlink:{fontWeight:"inherit"}}}));function lt(e){var t=ot();return Object(S.jsx)("div",{className:"".concat(t.tool," ").concat(t.button),children:e.children})}var dt=Object(Xe.a)()((function(e){e.width;var t=e.tableControlRef,n=Object(g.a)(e,["width","tableControlRef"]),i=ot(),r=Object(h.a)(),c=Object(l.g)(),o=[["Paper","https://arxiv.org/"],["Code","https://github.com/s3prl/s3prl"],["Tasks","/tasks"],["Submit","/submit"],["Leaderboard","/leaderboard"]].map((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];return[Object(S.jsx)(p.a,{color:"textSecondary",variant:"overline",className:i.navlink,children:n}),a]}));return Object(O.a)(r.breakpoints.up("lg")),Object(S.jsxs)(a.a.Fragment,{children:[Object(S.jsx)(Ue.a,{}),Object(S.jsx)(ct,Object(x.a)(Object(x.a)({},n),{},{children:Object(S.jsx)(He.a,{color:"primary",children:Object(S.jsx)(Ge.a,{className:i.toolbar,children:Object(S.jsxs)(m.a,{container:!0,alignItems:"center",children:[Object(S.jsx)(m.a,{item:!0,xs:9,md:4,children:Object(S.jsxs)(m.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,children:[Object(S.jsx)(m.a,{item:!0,children:Object(S.jsx)(A,{link:"/",children:Object(S.jsx)(lt,{children:Object(S.jsx)(p.a,{color:"textPrimary",variant:"h6",className:"".concat(i.navlink),children:"SUPERB"})})})}),c.pathname.includes("leaderboard")&&Object(S.jsx)(m.a,{item:!0,children:Object(S.jsx)(A,{link:null,children:Object(S.jsx)(C.a,{size:"small",variant:"outlined",onClick:function(){t.current.click()},children:"Help"})})})]})}),Object(S.jsx)(m.a,{item:!0,xs:3,md:8,children:Object(S.jsxs)(m.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center",children:[Object(S.jsx)(Ye.a,{smDown:!0,children:o.map((function(e){var t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(S.jsx)(m.a,{item:!0,children:Object(S.jsx)(A,{link:i,children:Object(S.jsx)(lt,{children:n})})})}))}),Object(S.jsx)(Ye.a,{mdUp:!0,children:Object(S.jsx)(m.a,{item:!0,children:Object(S.jsx)(rt,{items:o,children:Object(S.jsx)(lt,{children:Object(S.jsx)(p.a,{color:"textSecondary",variant:"overline",children:"MENU"})})})})})]})})]})})})})),Object(S.jsx)(Ge.a,{id:"back-to-top-anchor"}),Object(S.jsx)(st,Object(x.a)(Object(x.a)({},n),{},{children:Object(S.jsx)(qe.a,{color:"secondary",size:"small","aria-label":"scroll back to top",children:Object(S.jsx)(Je.a,{})})}))]})})),ht=Object(d.a)((function(e){return{narrowViewport:{width:"85%",maxWidth:900,margin:"auto"}}}));function jt(){var e=a.a.useState(0),t=Object(s.a)(e,2),n=(t[0],t[1]),i=a.a.useState(0),r=Object(s.a)(i,2),c=r[0],d=r[1],j=a.a.useState(0),b=Object(s.a)(j,2),u=b[0],p=b[1],m=a.a.useRef(null),O=function(){n(window.innerWidth),d(window.innerHeight),p(document.getElementById("navbar").offsetHeight)};a.a.useEffect(O),window.addEventListener("resize",O);var x=ht();Object(h.a)();return Object(S.jsx)("div",{className:"App",children:Object(S.jsxs)(o.a,{children:[Object(S.jsx)("div",{id:"navbar",children:Object(S.jsx)(dt,{tableControlRef:m})}),Object(S.jsxs)(l.c,{children:[Object(S.jsx)(l.a,{path:"/",exact:!0,children:Object(S.jsx)("div",{className:"".concat(x.narrowViewport),children:Object(S.jsx)(M,{})})}),Object(S.jsx)(l.a,{path:"/tasks",children:Object(S.jsx)("div",{className:"".concat(x.narrowViewport),children:Object(S.jsx)(de,{})})}),Object(S.jsx)(l.a,{path:"/submit",children:Object(S.jsx)("div",{className:"".concat(x.narrowViewport),children:Object(S.jsx)(be,{})})}),Object(S.jsx)(l.a,{path:"/compare",children:Object(S.jsx)("div",{className:"".concat(x.narrowViewport),children:Object(S.jsx)(Se,{})})}),Object(S.jsx)(l.a,{path:"/leaderboard",children:Object(S.jsx)(Ke,{height:"".concat(c-u,"px"),tableControlRef:m})})]})]})})}var bt=function(){return Object(S.jsx)(j.a,{theme:Object(b.a)(ne),children:Object(S.jsx)(jt,{})})},ut=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,482)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))};c.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(bt,{})}),document.getElementById("root")),ut()}},[[414,1,2]]]);
//# sourceMappingURL=main.e90b0623.chunk.js.map