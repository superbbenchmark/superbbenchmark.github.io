(this["webpackJsonpsuperb-website"]=this["webpackJsonpsuperb-website"]||[]).push([[0],{108:function(e,t,n){},109:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(10),c=n.n(r),s=(n(108),n(12)),o=(n(109),n(32)),d=n(13),l=n(161),h=n(18),j=n(165),b=n(95),u=n(179),p=n(48),m=n(128),O=n(1);function x(e){var t=Object(h.a)();return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)(u.a,{margin:t.spacing(8,"auto",1),children:Object(O.jsx)(p.a,{variant:"h2",color:"textPrimary",children:Object(O.jsx)("strong",{children:"SUPERB"})})}),Object(O.jsx)(u.a,{margin:t.spacing(1,"auto",4),children:Object(O.jsxs)(p.a,{variant:Object(m.a)(t.breakpoints.up("sm"))?"h4":"h5",color:"textPrimary",children:[Object(O.jsx)("strong",{children:"S"}),"peech processing ",Object(O.jsx)("strong",{children:"U"}),"niversal ",Object(O.jsx)("strong",{children:"PER"}),"formance ",Object(O.jsx)("strong",{children:"B"}),"enchmark"]})}),Object(O.jsx)(u.a,{children:Object(O.jsx)(p.a,{variant:"h6",color:"textSecondary",children:"This is the official website for the challenge SUPERB. We are working on the challenge rules, scripts for getting started and submitting results, and leaderboard. We will provide more information in mid April. Stay tuned!"})})]})}var g=n(163),f=n(164),S=n(7),v=n(3),w=n(72);function y(e){var t=Object(w.a)(),n=e.anchorKey,i=Object(v.a)(e,["anchorKey"]);return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)(u.a,{id:n,position:"relative",top:t.spacing(-4),visibility:"hidden"}),Object(O.jsx)(u.a,Object(S.a)({},i))]})}function k(e){var t=Object(w.a)();return Object(O.jsx)(y,Object(S.a)({margin:t.spacing(4,"auto",8)},e))}function R(e){var t=Object(w.a)();return Object(O.jsx)(y,Object(S.a)({margin:t.spacing(4,"auto",6)},e))}function C(e){var t=Object(w.a)();return Object(O.jsx)(y,Object(S.a)({margin:t.spacing(4,"auto",4)},e))}var E=n(160),P=n(41),F=n.n(P);function I(e){var t=Object(w.a)(),n=e.title,i=void 0===n?"Title":n,a=e.titleColor,r=void 0===a?"textPrimary":a,c=e.titleVariant,s=void 0===c?"h4":c,o=e.description,d=void 0===o?null:o,l=e.descriptionColor,h=void 0===l?"textSecondary":l,j=e.descriptionVariant,b=void 0===j?"body1":j,m=e.textMaxWidth,x=void 0===m?750:m,g=e.divider,f=void 0===g||g;return Object(O.jsxs)(u.a,{margin:t.spacing(3,"auto"),children:[Object(O.jsxs)(u.a,{margin:t.spacing(2,"auto"),maxWidth:x,children:[Object(O.jsx)(p.a,{color:r,variant:s,children:i}),d&&Object(O.jsx)(u.a,{margin:t.spacing(1,"auto"),children:Object(O.jsx)(p.a,{color:h,variant:b,children:d})})]}),f&&Object(O.jsx)(E.a,{})]})}function B(e){return Object(O.jsx)(I,Object(S.a)({},e))}function A(e){var t=F()(e,{titleVariant:{$set:"h5"}});return Object(O.jsx)(I,Object(S.a)({},t))}var D=n(82),L=Object(l.a)((function(e){return{}}));function T(e){var t=e.link,n=e.children,i=t?D.a:u.a,a=Object(d.g)();Object(h.a)(),L();return Object(O.jsx)(u.a,{component:"span",fontWeight:a.pathname.includes(t)?"bold":"inherit",children:(t||"").includes("http")?Object(O.jsx)("a",{className:"unlink",href:t||"",target:"_blank",children:n}):Object(O.jsx)(i,{className:"unlink",to:t||"",children:n})})}var M=n(129);function N(e){var t=e.elevation,n=void 0===t?3:t,i=e.liftDegree,r=void 0===i?6:i,c=Object(v.a)(e,["elevation","liftDegree"]),o=a.a.useState(!1),d=Object(s.a)(o,2),l=d[0],h=d[1];return Object(O.jsx)(M.a,Object(S.a)(Object(S.a)({},c),{},{elevation:l?n+r:n,onMouseOver:function(){h((function(e){return!e}))},onMouseOut:function(){h((function(e){return!e}))}}))}function V(e){return e.charAt(0).toUpperCase()+e.slice(1)}function K(e){return Object(O.jsx)(u.a,{component:"span",fontWeight:"bold",fontStyle:"italic",children:e.children})}var z=n(83),Q=n.n(z),W=n(84),H=n.n(W),U=n(85),G=n.n(U),q=n(59),$=n(162),J=n(60),Y=n(61),X=n(62),_={palette:{primary:{main:q.a[100]},text:{primary:$.a[600],secondary:q.a[500]}}},Z=F()(_,{palette:{primary:{main:{$set:J.a[400]}}}}),ee=F()(_,{palette:{primary:{main:{$set:Y.a[400]}}}}),te=F()(_,{palette:{primary:{main:{$set:X.a[400]}}}}),ne=[{name:"recognition",description:"recognition description",tasks:[{name:"PR",description:"            Phoneme Recognition, PR transcribes an utterance into the smallest content units.            We include alignment modeling in the PR task to avoid the potential inaccurate forced alignment.            LibriSpeech train-clean-100/dev-clean/test-clean subsets are adopted in SUPERB for training/validation/testing.            Phoneme transcriptions are obtained from the LibriSpeech official g2p-model-5 and the conversion script in Kaldi librispeech s5 recipe.            The evaluation metric is phone error rate (PER).          "},{name:"ASR",description:"            Automatic Speech Recognition, ASR transcribes utterances into words.            While PR analyzes the improvement in modeling phonetics, ASR reflects the significance of the improvement in a real-world scenario.            LibriSpeech train-clean-100/devclean/test-clean subsets are used for training/validation/testing.            The evaluation metric is word error rate (WER).          "}]},{name:"detection",description:"detection description",tasks:[{name:"KS",description:"            Keyword Spotting, KS detects preregistered keywords by classifying utterances into a predefined set of words.            The task is usually performed on-device for the fast response time.            Thus, accuracy, model size, and inference time are all crucial.            We choose the widely used Speech Commands dataset v1.0 for the task.            The dataset consists of ten classes of keywords, a class for silence, and an unknown class to include the false positive.            The evaluation metric is accuracy (ACC)          "},{name:"QbE",description:"            Query by Example Spoken Term Detection, QbE detects a spoken term (query) in an audio database (documents) by             binary discriminating a given pair of query and document into a match or not.            The English subset in QUESST 2014 challenge is adopted since we focus on investigating English as the first step.            The evaluation metric is maximum term weighted value (MTWV) which balances misses and false alarms.          "}]},{name:"semantics",description:"semantics description",tasks:[{name:"IC",description:"            Intent Classification, IC classifies utterances into predefined classes to determine the intent of speakers.            We use the Fluent Speech Commands dataset, where each utterance is tagged with three intent labels: action, object, and location.            The evaluation metric is accuracy (ACC).          "},{name:"SF",description:"            Slot Filling, SF predicts a sequence of semantic slot-types from an utterance,             like a slot-type FromLocation for a spoken word Taipei, which is known as a slot-value.            Both slot-types and slot-values are essential for an SLU system to function.            The evaluation metrics thus include slot-type F1 score and slotvalue CER.            Audio SNIPS is adopted, which synthesized multi-speaker utterances for SNIPS.            Following the standard split in SNIPS, US-accent speakers are further selected for training, and others are for validation/testing.          "}]},{name:"speaker",description:"speaker description",tasks:[{name:"SID",description:"            Speaker Identification, SID classifies each utterance for its speaker identity as a multi-class classification,             where speakers are in the same predefined set for both training and testing.            The widely used VoxCeleb1 [26] is adopted, and the evaluation metric is accuracy (ACC).          "},{name:"SV",description:"            Automatic Speaker Verification, ASV verifies whether the speakers of a pair of utterances match as a binary classification,             and speakers in the testing set may not appear in the training set.            Thus, ASV is more challenging than SID. VoxCeleb1 is used without VoxCeleb2 training data and noise augmentation.             The evaluation metric is equal error rate (EER).          "},{name:"SD",description:"            Speaker Diarization, SD predicts who is speaking when for each timestamp, and multiple speakers can speak simultaneously.            The model has to encode rich speaker characteristics for each frame and should be able to represent mixtures of signals.            LibriMix is adopted where LibriSpeech train-clean-100/dev-clean/test-clean are used to generate mixtures for training/validation/testing.            We focus on the two-speaker scenario as the first step.            The time-coded speaker labels were generated using alignments from Kaldi LibriSpeech ASR model.            The evaluation metric is diarization error rate (DER).          "}]},{name:"paralinguistics",description:"paralinguistics description",tasks:[{name:"ER",description:"            Emotion Recognition, ER predicts an emotion class for each utterance.            The most widely used ER dataset IEMOCAP is adopted, and we follow the conventional evaluation protocol:            we drop the unbalance emotion classes to leave the final four classes with a similar amount of data points and             cross-validates on five folds of the standard splits.            The evaluation metric is accuracy (ACC).          "}]}],ie=[{name:"constrained",rules:Object(O.jsxs)("span",{children:["A fair comparison between ",Object(O.jsx)(K,{children:"frozen representations"})," by enforcing the same downstream model in each task. Only a few hyper-paramters for training are allowed to tuned."]}),submit:"The submission form is in preparation. Stay tuned :)",Icon:Q.a,theme:Object(b.a)(Z)},{name:"less-constrained",rules:Object(O.jsxs)("span",{children:["A comparison between ",Object(O.jsx)(K,{children:"frozen representations"})," with customized but limited-resource downstream models. The details of downstream models are reported along with submissions."]}),submit:!1,Icon:H.a,theme:Object(b.a)(ee)},{name:"unconstrained",rules:Object(O.jsxs)("span",{children:["The track does not limit any approach for solving SUPERB tasks as long as it in principle utilizes only ",Object(O.jsx)(K,{children:"a single shared model"})," ","with limited task-specific parameters."]}),submit:!1,Icon:G.a,theme:Object(b.a)(te)}],ae=[{Method:"FBANK",Description:"classic feature",Parameters:0,Stride:10,Input:"waveform",Corpus:"-",PR:82.01,KS:8.63,IC:9.1,SID:85e-5,ER:35.39,ASR:23.18,"ASR-LM":15.21,QbE:.0058,"SF-F1":69.64,"SF-CER":52.94,SV:9.56,SD:10.05},{Method:"PASE+",Description:"multi-task",Parameters:783e4,Stride:10,Input:"waveform",Corpus:"LS 50 hr",PR:58.88,KS:82.37,IC:30.29,SID:35.84,ER:57.64,ASR:24.92,"ASR-LM":16.61,QbE:7e-4,"SF-F1":60.41,"SF-CER":62.77,SV:10.91,SD:8.52},{Method:"APC",Description:"F-G",Parameters:411e4,Stride:10,Input:"FBANK",Corpus:"LS 360 hr",PR:41.85,KS:91.04,IC:74.64,SID:59.79,ER:58.84,ASR:21.61,"ASR-LM":15.09,QbE:.0268,"SF-F1":71.26,"SF-CER":50.76,SV:8.81,SD:10.72},{Method:"VQ-APC",Description:"F-G + VQ",Parameters:463e4,Stride:10,Input:"FBANK",Corpus:"LS 360 hr",PR:42.86,KS:90.52,IC:70.52,SID:49.57,ER:58.31,ASR:21.72,"ASR-LM":15.37,QbE:.0205,"SF-F1":69.62,"SF-CER":52.21,SV:9.29,SD:10.49},{Method:"NPC",Description:"M-G + VQ",Parameters:1938e4,Stride:10,Input:"FBANK",Corpus:"LS 360 hr",PR:52.67,KS:88.54,IC:64.04,SID:50.77,ER:59.55,ASR:20.94,"ASR-LM":14.69,QbE:.022,"SF-F1":67.43,"SF-CER":54.63,SV:10.28,SD:9.59},{Method:"Mockingjay",Description:"time M-G",Parameters:8512e4,Stride:10,Input:"FBANK",Corpus:"LS 360 hr",PR:80.01,KS:82.67,IC:28.87,SID:34.5,ER:45.72,ASR:23.72,"ASR-LM":15.94,QbE:3.1e-10,"SF-F1":60.83,"SF-CER":61.16,SV:23.22,SD:11.24},{Method:"TERA",Description:"time/freq M-G",Parameters:2133e4,Stride:10,Input:"FBANK",Corpus:"LS 960 hr",PR:47.53,KS:88.09,IC:48.8,SID:58.67,ER:54.76,ASR:18.45,"ASR-LM":12.44,QbE:87e-6,"SF-F1":63.28,"SF-CER":57.91,SV:16.49,SD:9.54},{Method:"modified CPC",Description:"F-C",Parameters:184e4,Stride:10,Input:"waveform",Corpus:"LL 60k hr",PR:41.66,KS:92.02,IC:65.01,SID:42.29,ER:59.28,ASR:20.02,"ASR-LM":13.57,QbE:.0061,"SF-F1":74.18,"SF-CER":46.66,SV:9.67,SD:11},{Method:"wav2vec",Description:"F-C",Parameters:3254e4,Stride:10,Input:"waveform",Corpus:"LS 960 hr",PR:32.39,KS:94.09,IC:78.91,SID:44.88,ER:58.17,ASR:16.4,"ASR-LM":11.3,QbE:.0307,"SF-F1":77.52,"SF-CER":41.75,SV:9.83,SD:10.79},{Method:"vq-wav2vec",Description:"F-C + VQ",Parameters:3415e4,Stride:10,Input:"waveform",Corpus:"LS 960 hr",PR:53.49,KS:92.28,IC:59.4,SID:39.04,ER:55.89,ASR:18.7,"ASR-LM":12.69,QbE:.0302,"SF-F1":70.57,"SF-CER":50.16,SV:9.5,SD:9.93},{Method:"wav2vec 2.0",Description:"M-C + VQ",Parameters:9504e4,Stride:20,Input:"waveform",Corpus:"LS 960 hr",PR:28.37,KS:92.31,IC:58.34,SID:45.62,ER:56.93,ASR:9.57,"ASR-LM":6.32,QbE:88e-5,"SF-F1":79.94,"SF-CER":37.81,SV:9.69,SD:7.48},{Method:"HuBERT Base",Description:"M-P + VQ",Parameters:9468e4,Stride:20,Input:"waveform",Corpus:"LS 960 hr",PR:6.85,KS:95.98,IC:95.94,SID:64.84,ER:62.94,ASR:6.74,"ASR-LM":4.93,QbE:.0759,"SF-F1":86.24,"SF-CER":28.52,SV:7.22,SD:6.76},{Method:"HuBERT Large",Description:"M-P + VQ",Parameters:31661e4,Stride:20,Input:"waveform",Corpus:"LL 60k hr",PR:3.72,KS:93.15,IC:98.37,SID:66.4,ER:64.93,ASR:3.67,"ASR-LM":2.91,QbE:.036,"SF-F1":88.68,"SF-CER":23.05,SV:7.7,SD:6.23}],re=Object(l.a)((function(e){return{taskName:{fontWeight:"bold",marginBottom:e.spacing(2)}}}));var ce=function(e){var t=re(),n=Object(h.a)();return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsxs)(k,{children:[Object(O.jsx)(B,{title:"Tasks",description:Object(O.jsxs)("span",{children:["General speech processing can be categorized into"," ",Object(O.jsx)(K,{children:"discriminative"})," and ",Object(O.jsx)(K,{children:"generative"})," ","tasks. The initial release of SUPERB focues on the former, where ten tasks are collected from ",Object(O.jsx)(K,{children:"five domains"}),"."]})}),Object(O.jsx)(g.a,{container:!0,direction:"row",spacing:2,justify:"center",children:ne.map((function(e){var t=e.name;return Object(O.jsx)(g.a,{item:!0,children:Object(O.jsx)(T,{link:"/tasks#".concat(t),children:Object(O.jsx)(f.a,{variant:"outlined",children:V(t.toLowerCase())})})})}))})]}),ne.map((function(e){var i=e.name,a=e.description,r=e.tasks;return Object(O.jsxs)(k,{anchorKey:i,children:[Object(O.jsx)(B,{title:V(i.toLowerCase()),description:a}),Object(O.jsx)(g.a,{container:!0,spacing:5,justify:"center",children:r.map((function(e){var i=e.name,a=e.description;return Object(O.jsx)(g.a,{item:!0,xs:12,sm:6,md:4,children:Object(O.jsx)(N,{elevation:3,children:Object(O.jsxs)(u.a,{padding:n.spacing(3,2),children:[Object(O.jsx)(p.a,{color:"textPrimary",variant:"h6",className:t.taskName,children:"".concat(i)}),Object(O.jsx)(p.a,{color:"textSecondary",variant:"body2",children:a})]})})})}))})]})}))]})};function se(e){var t=e.name,n=void 0===t?"constrained":t,i=e.submit,a=void 0===i?"This is constrained track":i;return Object(O.jsxs)("div",{children:[Object(O.jsx)(C,{children:Object(O.jsx)(A,{title:Object(O.jsxs)("span",{children:[Object(O.jsx)("strong",{children:V(n.toLowerCase())})," Submission"]}),titleColor:"primary"})}),Object(O.jsx)(C,{children:Object(O.jsx)(p.a,{variant:"body1",color:"textSecondary",children:a})})]})}var oe=n(14),de=Object(l.a)((function(e){return{descriptionButton:{display:"inline-block",margin:e.spacing(1)},pseudoOutlinedPrimaryButton:{backgroundColor:"transparent",border:"1px solid ".concat(Object(oe.b)(e.palette.primary.main,.5)),borderRadius:e.shape.borderRadius,display:"inline-block"},innerButton:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}}}));function le(e){var t=e.name,n=e.link,i=de();return Object(O.jsx)(T,{link:n,children:Object(O.jsx)(f.a,{size:"small",variant:"outlined",className:i.descriptionButton,children:t})})}function he(e){var t=e.buttons,n=void 0===t?[{name:"rules",link:"/submit#rules"},{name:"submit",link:"/submit#submit"}]:t,i=de();return Object(O.jsx)("div",{className:i.pseudoOutlinedPrimaryButton,children:Object(O.jsx)(g.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:0,children:n.map((function(e,t){var r=e.name,c=e.link;return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)(g.a,{item:!0,children:Object(O.jsx)(T,{link:c,children:Object(O.jsx)(f.a,{disabled:!c,color:"primary",className:i.innerButton,children:r})})}),t<n.length-1&&Object(O.jsx)(g.a,{item:!0,children:Object(O.jsx)(u.a,{height:28,children:Object(O.jsx)(E.a,{orientation:"vertical"})})})]})}))})})}var je=Object(l.a)((function(e){return{}}));function be(e){je();var t=Object(h.a)(),n=Object(d.h)();return Object(O.jsxs)(d.c,{children:[Object(O.jsxs)(d.a,{path:"".concat(n.path),exact:!0,children:[Object(O.jsxs)(k,{children:[Object(O.jsx)(B,{title:"Submit",description:Object(O.jsxs)("span",{children:["Submissions are categorized into ",Object(O.jsx)(K,{children:"three tracks"})," ","for different usages of the shared pretrained model, and should follow the"," ",Object(O.jsx)(le,{name:"general rules",link:"".concat(n.url,"#general-rules")}),"and the track-specific rules."]})}),Object(O.jsx)(g.a,{container:!0,direction:"row",spacing:4,justify:"center",alignItems:"center",children:ie.map((function(e){var i=e.name,a=e.rules,r=e.submit,c=e.theme;return Object(O.jsx)(g.a,{item:!0,children:Object(O.jsx)(j.a,{theme:c,children:Object(O.jsxs)("div",{children:[Object(O.jsxs)(p.a,{component:"span",variant:"body1",color:"primary",children:[Object(O.jsx)("strong",{children:V(i.toLowerCase())})," ","track"]}),Object(O.jsx)(u.a,{marginTop:"".concat(t.spacing(1),"px"),children:Object(O.jsx)(he,{buttons:[{name:"rules",link:a?"".concat(n.url,"#").concat(i):null},{name:"submit",link:r?"".concat(n.url,"/").concat(i):null}]})})]})})})}))})]}),Object(O.jsxs)(k,{anchorKey:"general-rules",children:[Object(O.jsx)(B,{title:"General Rules",description:"The general rules applied to all tracks."}),Object(O.jsx)(p.a,{variant:"body1",color:"textSecondary",children:"Some general rules."})]}),Object(O.jsxs)(k,{anchorKey:"track-rules",children:[Object(O.jsx)(B,{title:"Track Rules",description:"The track-specific rules for each of the tracks."}),ie.map((function(e){var t=e.name,i=e.rules,a=e.submit,r=e.theme;return Object(O.jsx)(j.a,{theme:r,children:Object(O.jsx)(u.a,{maxWidth:650,margin:"auto",children:Object(O.jsxs)(k,{anchorKey:t,children:[Object(O.jsx)(B,{title:V(t.toLowerCase()),titleVariant:"h5",titleColor:"primary",divider:!1}),Object(O.jsx)(p.a,{variant:"body1",color:"textSecondary",children:i}),Object(O.jsx)(u.a,{margin:r.spacing(3,"auto"),children:Object(O.jsx)(T,{link:a?"".concat(n.url,"/").concat(t):null,children:Object(O.jsx)(f.a,{disabled:!a,size:"large",color:"primary",variant:"outlined",children:"Submit"})})})]})})})}))]})]}),ie.map((function(e){var t=e.name,i=e.theme;return Object(O.jsx)(d.a,{path:"".concat(n.path,"/").concat(t),children:Object(O.jsx)(j.a,{theme:i,children:Object(O.jsx)(se,Object(S.a)({},e))})})}))]})}function ue(e){return Object(O.jsx)("div",{children:Object(O.jsxs)(k,{children:[Object(O.jsx)(B,{title:"Compare",description:"Compare between two submissions including pretraining details and performance."}),Object(O.jsx)(p.a,{color:"textSecondary",variant:"body1",children:"In progress"})]})})}var pe,me=n(86),Oe=n(88),xe=n(47),ge=n(87),fe=n(92),Se=n.n(fe),ve=n(93),we=n.n(ve),ye=n(180),ke=n(166),Re=n(130),Ce=n(167),Ee=n(182),Pe=Object(l.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"}}}));function Fe(e){var t=e.tableInstance,n=e.modalOpenRef,i=void 0===n?null:n,r=Pe(),c=a.a.useState(!1),o=Object(s.a)(c,2),d=o[0],l=o[1],j=t.allColumns,b=(t.setGlobalFilter,function(){l(!0)}),m=Object(h.a)();return Object(O.jsxs)("div",{children:[i?Object(O.jsx)("div",{ref:i,onClick:b}):Object(O.jsx)("button",{type:"button",onClick:b,children:"react-transition-group"}),Object(O.jsx)(ye.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:r.modal,open:d,onClose:function(){l(!1)},closeAfterTransition:!0,BackdropComponent:ke.a,BackdropProps:{timeout:500},children:Object(O.jsx)(Re.a,{in:d,children:Object(O.jsx)(u.a,{width:"85%",maxWidth:700,children:Object(O.jsx)(M.a,{children:Object(O.jsxs)(u.a,{padding:m.spacing(4,6),margin:"auto",maxHeight:"80vh",overflow:"auto",children:[Object(O.jsxs)(R,{children:[Object(O.jsx)(A,{title:"Leaderboard"}),Object(O.jsxs)(p.a,{variant:"body2",color:"textSecondary",children:["All the submissions are merged into a single table. You can use the buttons below to choose which tracks you are interested or what information (column) you wish to compare. The default ranking of all submissions are sorted by a randomly selected task, so the ranking will be different everytime you refresh the page. You can check the column with the ",Object(O.jsx)("span",{style:{color:X.a[300]},children:"green task name"})," for the current sorting column."]})]}),Object(O.jsxs)(R,{children:[Object(O.jsx)(A,{title:"Toggles"}),Object(O.jsx)(u.a,{margin:m.spacing(4,"auto",0),children:Object(O.jsx)(g.a,{container:!0,direction:"row",children:j.map((function(e){return Object(O.jsx)(g.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(O.jsx)(Ce.a,{control:Object(O.jsx)(Ee.a,{checked:e.isVisible,onChange:function(){e.toggleHidden()},name:e.Header}),label:e.Header})})}))})})]})]})})})})})]})}var Ie=Oe.a.div(pe||(pe=Object(me.a)(["\n  .table {\n    outline: 1px solid #ddd;\n\n    .th,\n    .td {\n      background-color: ",";\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      border: 0.2px solid #ddd;\n      padding: ",";\n    }\n\n    .th {\n      font-weight: bold;\n      padding: ",";\n    }\n\n    .toggle {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n\n    &.sticky {\n      overflow: scroll;\n      .header,\n      .footer {\n        position: sticky;\n        z-index: 1;\n        width: fit-content;\n      }\n\n      .header {\n        top: 0;\n        box-shadow: 0px 3px 3px #ccc;\n      }\n\n      .footer {\n        bottom: 0;\n        box-shadow: 0px -3px 3px #ccc;\n      }\n\n      .body {\n        position: relative;\n        z-index: 0;\n      }\n\n      [data-sticky-td] {\n        position: sticky;\n      }\n\n      [data-sticky-last-left-td] {\n        box-shadow: 2px 2px 3px #ccc;\n      }\n\n      [data-sticky-first-right-td] {\n        box-shadow: -2px -2px 3px #ccc;\n      }\n    }\n  }\n\n  .resizer {\n    display: inline-block;\n    background: ",";\n    width: ",";\n    height: 100%;\n    position: absolute;\n    right: 0;\n    top: 0;\n    transform: translateX(50%);\n    z-index: 1;\n    ","\n    touch-action:none;\n\n    &.isResizing, &:hover {\n      background: ",";\n    }\n"])),(function(e){return e.theme.palette.primary.main}),(function(e){return e.theme.spacing(1,1)}),(function(e){return e.theme.spacing(1.5,1)}),(function(e){return"".concat(Object(oe.b)(e.theme.palette.text.primary,.2))}),(function(e){return"".concat(e.theme.spacing(2),"px")}),"",(function(e){return"".concat(Object(oe.b)(e.theme.palette.text.primary,.6))}));function Be(e){var t=e.columns,n=e.data,i=e.height,r=void 0===i?"500px":i,c=e.tableControlRef,s=void 0===c?null:c,o=Object(h.a)(),d=a.a.useMemo((function(){return{minWidth:10,width:150,maxWidth:400}}),[]),l=t.filter((function(e){return e.isScore})),j=l[Math.floor(Math.random()*l.length)],b=a.a.useMemo((function(){return[{id:j.accessor,desc:j.higherBetter}]})),u=Object(xe.useTable)({columns:t,data:n,defaultColumn:d,initialState:{hiddenColumns:["Description","Parameters","Stride","Input","Corpus"],sortBy:b}},xe.useSortBy,xe.useBlockLayout,xe.useResizeColumns,ge.useSticky),p=u.getTableProps,m=u.getTableBodyProps,x=u.headerGroups,g=u.rows,f=u.prepareRow;return Object(O.jsxs)(Ie,{theme:o,children:[Object(O.jsx)(Fe,{tableInstance:u,modalOpenRef:s}),Object(O.jsxs)("div",Object(S.a)(Object(S.a)({},p()),{},{className:"table sticky",style:{width:"fit-content",maxWidth:"100%",maxHeight:r,margin:"auto"},children:[Object(O.jsx)("div",{className:"header",children:x.map((function(e){return Object(O.jsx)("div",Object(S.a)(Object(S.a)({},e.getHeaderGroupProps()),{},{className:"tr",children:e.headers.map((function(e){var t=void 0==e.isSortedDesc||void 0==e.higherBetter?o.palette.text.primary:e.isSortedDesc==e.higherBetter?X.a[300]:J.a[300];return Object(O.jsxs)("div",Object(S.a)(Object(S.a)({},e.getHeaderProps()),{},{className:"th",children:[Object(O.jsxs)("div",Object(S.a)(Object(S.a)({},e.getSortByToggleProps()),{},{className:"toggle",children:[Object(O.jsx)("span",{style:{margin:"0px 1px",color:t},children:e.render("Header")}),void 0!=e.higherBetter&&(e.higherBetter?Object(O.jsx)(Se.a,{style:{fontSize:16,color:t}}):Object(O.jsx)(we.a,{style:{fontSize:16,color:t}}))]})),Object(O.jsx)("div",Object(S.a)(Object(S.a)({},e.getResizerProps()),{},{className:"resizer ".concat(e.isResizing?"isResizing":"")}))]}))}))}))}))}),Object(O.jsx)("div",Object(S.a)(Object(S.a)({},m()),{},{className:"body",children:g.map((function(e,t){return f(e),Object(O.jsx)("div",Object(S.a)(Object(S.a)({},e.getRowProps()),{},{className:"tr",children:e.cells.map((function(e){return Object(O.jsx)("div",Object(S.a)(Object(S.a)({},e.getCellProps()),{},{className:"td",children:e.render("Cell")}))}))}))}))}))]}))]})}var Ae=function(e){Object(h.a)();var t={Method:{width:120,higherBetter:void 0},Description:{width:120,higherBetter:void 0},Parameters:{width:100,higherBetter:void 0},Stride:{width:100,higherBetter:void 0},Input:{width:100,higherBetter:void 0},Corpus:{width:100,higherBetter:void 0},PR:{width:100,higherBetter:!1,isScore:!0},KS:{width:100,higherBetter:!0,isScore:!0},IC:{width:100,higherBetter:!0,isScore:!0},SID:{width:100,higherBetter:!0,isScore:!0},ER:{width:100,higherBetter:!0,isScore:!0},ASR:{width:100,higherBetter:!1,isScore:!0},"ASR-LM":{width:100,higherBetter:!1,isScore:!0},QbE:{width:100,higherBetter:!0,isScore:!0},"SF-F1":{width:100,higherBetter:!0,isScore:!0},"SF-CER":{width:100,higherBetter:!1,isScore:!0},SV:{width:100,higherBetter:!1,isScore:!0},SD:{width:100,higherBetter:!1,isScore:!0}},n=a.a.useCallback((function(e,t,n,i){return e.original[n]>t.original[n]?1:-1})),i=Object.keys(t).map((function(e){return{Header:e,accessor:e,width:t[e].width,sortType:"number"==typeof ae[0][e]?n:"alphanumeric",higherBetter:t[e].higherBetter,isScore:t[e].isScore}}));i[0].sticky="left";var r=a.a.useMemo((function(){return i})),c=a.a.useMemo((function(){return ae}),[]);return Object(O.jsx)(Be,Object(S.a)({columns:r,data:c},e))},De=n(172),Le=n(171),Te=n(173),Me=n(174),Ne=n(175),Ve=n(176),Ke=n(178),ze=n(94),Qe=n.n(ze),We=n(183),He=n(177),Ue=n(15),Ge=n(5),qe=n(181),$e=n(168),Je=n(169),Ye=n(170),Xe=Object(l.a)({list:{width:200,paddingLeft:20,paddingRight:20},fullList:{width:"auto"}});function _e(e){var t=Xe(),n=a.a.useState({top:!1,left:!1,bottom:!1,right:!1}),i=Object(s.a)(n,2),r=i[0],c=i[1],o=function(e,t){return function(n){(!n||"keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&c(Object(S.a)(Object(S.a)({},r),{},Object(Ue.a)({},e,t)))}},d=function(n){return Object(O.jsx)("div",{className:Object(Ge.a)(t.list,Object(Ue.a)({},t.fullList,"top"===n||"bottom"===n)),role:"presentation",onClick:o(n,!1),onKeyDown:o(n,!1),children:Object(O.jsx)($e.a,{children:e.items.map((function(e){var t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)(T,{link:i,children:Object(O.jsx)(Je.a,{button:!0,children:Object(O.jsx)(Ye.a,{children:n})})}),Object(O.jsx)(E.a,{})]})}))})})};return Object(O.jsx)("div",{children:["right"].map((function(t){return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)("div",{onClick:o(t,!0),children:e.children}),Object(O.jsx)(qe.a,{anchor:t,open:r[t],onClose:o(t,!1),onOpen:o(t,!0),children:d(t)})]},t)}))})}function Ze(e){var t=e.children,n=e.window,i=Object(De.a)({target:n?n():void 0});return Object(O.jsx)(Le.a,{appear:!1,direction:"down",in:!i,children:t})}function et(e){var t=e.children,n=e.window,i=tt(),a=Object(d.f)(),r=Object(d.g)(),c=Object(De.a)({target:n?n():void 0,disableHysteresis:!0,threshold:100});return Object(O.jsx)(Te.a,{in:c,children:Object(O.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&(t.scrollIntoView({block:"center"}),a.push(r.pathname))},role:"presentation",className:i.root,children:t})})}var tt=Object(l.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},toolbar:{width:"100%",maxWidth:900,margin:"auto",paddingLeft:20,paddingRight:20},tool:{paddingTop:5,paddingBottom:5},button:{paddingLeft:12,paddingRight:12,marginLeft:2,marginRight:2,borderRadius:10,border:"solid 1px transparent","&:hover":{background:"rgba(255, 255, 255, 1)",boxShadow:"0px 3px 10px rgba(0, 0, 0, 0.1)"},cursor:"pointer"},navlink:{fontWeight:"inherit"}}}));function nt(e){var t=tt();return Object(O.jsx)("div",{className:"".concat(t.tool," ").concat(t.button),children:e.children})}var it=Object(He.a)()((function(e){e.width;var t=e.tableControlRef,n=Object(v.a)(e,["width","tableControlRef"]),i=tt(),r=Object(h.a)(),c=Object(d.g)(),o=[["Paper","https://arxiv.org/"],["Code","https://github.com/s3prl/s3prl"],["Tasks","/tasks"],["Submit","/submit"],["Leaderboard","/leaderboard"]].map((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];return[Object(O.jsx)(p.a,{color:"textSecondary",variant:"overline",className:i.navlink,children:n}),a]})),l=Object(m.a)(r.breakpoints.up("sm"));return Object(O.jsxs)(a.a.Fragment,{children:[Object(O.jsx)(Me.a,{}),Object(O.jsx)(Ze,Object(S.a)(Object(S.a)({},n),{},{children:Object(O.jsx)(Ne.a,{color:"primary",children:Object(O.jsx)(Ve.a,{className:i.toolbar,children:Object(O.jsxs)(g.a,{container:!0,alignItems:"center",children:[Object(O.jsx)(g.a,{item:!0,xs:9,md:5,children:Object(O.jsxs)(g.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",spacing:1,children:[Object(O.jsx)(g.a,{item:!0,children:Object(O.jsx)(T,{link:"/",children:Object(O.jsx)(nt,{children:Object(O.jsx)(p.a,{color:"textPrimary",variant:"h6",className:"".concat(i.navlink),children:l?"SUPERB Benchmark":"SUPERB"})})})}),c.pathname.includes("leaderboard")&&Object(O.jsx)(g.a,{item:!0,children:Object(O.jsx)(T,{link:null,children:Object(O.jsx)(f.a,{size:"small",variant:"outlined",onClick:function(){t.current.click()},children:"Help"})})})]})}),Object(O.jsx)(g.a,{item:!0,xs:3,md:7,children:Object(O.jsxs)(g.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center",children:[Object(O.jsx)(We.a,{smDown:!0,children:o.map((function(e){var t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(O.jsx)(g.a,{item:!0,children:Object(O.jsx)(T,{link:i,children:Object(O.jsx)(nt,{children:n})})})}))}),Object(O.jsx)(We.a,{mdUp:!0,children:Object(O.jsx)(g.a,{item:!0,children:Object(O.jsx)(_e,{items:o,children:Object(O.jsx)(nt,{children:Object(O.jsx)(p.a,{color:"textSecondary",variant:"overline",children:"MENU"})})})})})]})})]})})})})),Object(O.jsx)(Ve.a,{id:"back-to-top-anchor"}),Object(O.jsx)(et,Object(S.a)(Object(S.a)({},n),{},{children:Object(O.jsx)(Ke.a,{color:"secondary",size:"small","aria-label":"scroll back to top",children:Object(O.jsx)(Qe.a,{})})}))]})})),at=Object(l.a)((function(e){return{narrowViewport:{width:"85%",maxWidth:900,margin:"auto"}}}));function rt(){var e=a.a.useState(0),t=Object(s.a)(e,2),n=(t[0],t[1]),i=a.a.useState(0),r=Object(s.a)(i,2),c=r[0],l=r[1],j=a.a.useState(0),b=Object(s.a)(j,2),u=b[0],p=b[1],m=a.a.useRef(null),g=function(){n(window.innerWidth),l(window.innerHeight),p(document.getElementById("navbar").offsetHeight)};a.a.useEffect(g),window.addEventListener("resize",g);var f=at();Object(h.a)();return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)("div",{id:"navbar",children:Object(O.jsx)(it,{tableControlRef:m})}),Object(O.jsxs)(d.c,{children:[Object(O.jsx)(d.a,{path:"/",exact:!0,children:Object(O.jsx)("div",{className:"".concat(f.narrowViewport),children:Object(O.jsx)(x,{})})}),Object(O.jsx)(d.a,{path:"/tasks",children:Object(O.jsx)("div",{className:"".concat(f.narrowViewport),children:Object(O.jsx)(ce,{})})}),Object(O.jsx)(d.a,{path:"/submit",children:Object(O.jsx)("div",{className:"".concat(f.narrowViewport),children:Object(O.jsx)(be,{})})}),Object(O.jsx)(d.a,{path:"/compare",children:Object(O.jsx)("div",{className:"".concat(f.narrowViewport),children:Object(O.jsx)(ue,{})})}),Object(O.jsx)(d.a,{path:"/leaderboard",children:Object(O.jsx)(Ae,{height:"".concat(c-u,"px"),tableControlRef:m})})]})]})})}var ct=function(){return Object(O.jsx)(j.a,{theme:Object(b.a)(_),children:Object(O.jsx)(rt,{})})},st=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,185)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))};c.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(ct,{})}),document.getElementById("root")),st()}},[[125,1,2]]]);
//# sourceMappingURL=main.5fd63408.chunk.js.map