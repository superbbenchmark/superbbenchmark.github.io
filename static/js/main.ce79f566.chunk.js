(this["webpackJsonpsuperb-website"]=this["webpackJsonpsuperb-website"]||[]).push([[0],{191:function(e,t,a){},192:function(e,t,a){},208:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(17),c=a.n(i),s=(a(191),a(192),a(72)),o=a(261),l=a(44),d=a(22),h=a(265),j=a(90),b=a(29),u=a(5),S=a(256),p=a(257),m=a(255),O=a(253),f=a(252),x=a(254),R=a(260),g=a(155),v=a.n(g),C=a(258),F=a(268),E=a(259),I=a(19),w=a(20),y=a(214),P=a(15),A=a(4),D=a(266),k=a(211),M=a(251),L=a(212),V=a(250),K=a(154),Q=a(2),T=Object(I.a)((function(e){return{}}));function N(e){var t=e.link,a=e.children,r=e.disabled,n=r?h.a:K.a,i=Object(d.g)();Object(w.a)(),T();return Object(Q.jsx)(h.a,{fontWeight:i.pathname.includes(t)?"bold":"inherit",children:t.includes("http")?Object(Q.jsx)("a",{className:"unlink",href:r?null:t,target:"_blank",children:a}):Object(Q.jsx)(n,{className:"unlink",to:t,children:a})})}var B=Object(I.a)({list:{width:200,paddingLeft:20,paddingRight:20},fullList:{width:"auto"}});function W(e){var t=B(),a=n.a.useState({top:!1,left:!1,bottom:!1,right:!1}),r=Object(u.a)(a,2),i=r[0],c=r[1],s=function(e,t){return function(a){(!a||"keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&c(Object(b.a)(Object(b.a)({},i),{},Object(P.a)({},e,t)))}},o=function(a){return Object(Q.jsx)("div",{className:Object(A.a)(t.list,Object(P.a)({},t.fullList,"top"===a||"bottom"===a)),role:"presentation",onClick:s(a,!1),onKeyDown:s(a,!1),children:Object(Q.jsx)(k.a,{children:e.items.map((function(e){var t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(Q.jsxs)("div",{children:[Object(Q.jsx)(N,{link:r,children:Object(Q.jsx)(L.a,{button:!0,children:Object(Q.jsx)(V.a,{children:a})})}),Object(Q.jsx)(M.a,{})]})}))})})};return Object(Q.jsx)("div",{children:["right"].map((function(t){return Object(Q.jsxs)(n.a.Fragment,{children:[Object(Q.jsx)("div",{onClick:s(t,!0),children:e.children}),Object(Q.jsx)(D.a,{anchor:t,open:i[t],onClose:s(t,!1),onOpen:s(t,!0),children:o(t)})]},t)}))})}function U(e){var t=e.children,a=e.window,r=Object(O.a)({target:a?a():void 0});return Object(Q.jsx)(f.a,{appear:!1,direction:"down",in:!r,children:t})}function z(e){var t=e.children,a=e.window,r=G(),n=Object(d.f)(),i=Object(d.g)(),c=Object(O.a)({target:a?a():void 0,disableHysteresis:!0,threshold:100});return Object(Q.jsx)(x.a,{in:c,children:Object(Q.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&(t.scrollIntoView({block:"center"}),n.push(i.pathname))},role:"presentation",className:r.root,children:t})})}var G=Object(I.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},toolbar:{width:"100%",maxWidth:900,margin:"auto",paddingLeft:20,paddingRight:20},tool:{paddingTop:5,paddingBottom:5},button:{paddingLeft:12,paddingRight:12,marginLeft:2,marginRight:2,borderRadius:10,border:"solid 1px transparent","&:hover":{background:"rgba(255, 255, 255, 1)",boxShadow:"0px 3px 10px rgba(0, 0, 0, 0.1)"},cursor:"pointer"},navlink:{fontWeight:"inherit"}}}));function q(e){var t=G();return Object(Q.jsx)("div",{className:"".concat(t.tool," ").concat(t.button),children:e.children})}var H=Object(E.a)()((function(e){e.width;var t=G(),a=Object(w.a)(),r=[["Paper","https://arxiv.org/"],["Code","https://github.com/s3prl/s3prl"],["Tasks","/tasks"],["Submit","/submit"],["Compare","/compare"],["Leaderboard","/leaderboard"]].map((function(e){var a=Object(u.a)(e,2),r=a[0],n=a[1];return[Object(Q.jsx)(j.a,{color:"textSecondary",variant:"overline",className:t.navlink,children:r}),n]}));return Object(Q.jsxs)(n.a.Fragment,{children:[Object(Q.jsx)(m.a,{}),Object(Q.jsx)(U,Object(b.a)(Object(b.a)({},e),{},{children:Object(Q.jsx)(S.a,{color:"primary",children:Object(Q.jsx)(p.a,{className:t.toolbar,children:Object(Q.jsxs)(C.a,{container:!0,alignItems:"center",children:[Object(Q.jsx)(C.a,{item:!0,xs:8,md:4,children:Object(Q.jsx)(C.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",children:Object(Q.jsx)(N,{link:"/",children:Object(Q.jsx)(q,{children:Object(Q.jsx)(j.a,{color:"textPrimary",variant:"h6",className:"".concat(t.navlink),children:Object(y.a)(a.breakpoints.up("sm"))?"SUPERB Benchmark":"SUPERB"})})})})}),Object(Q.jsx)(C.a,{item:!0,xs:4,md:8,children:Object(Q.jsxs)(C.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center",children:[Object(Q.jsx)(F.a,{smDown:!0,children:r.map((function(e){var t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(Q.jsx)(N,{link:r,children:Object(Q.jsx)(q,{children:a})})}))}),Object(Q.jsx)(F.a,{mdUp:!0,children:Object(Q.jsx)(W,{items:r,children:Object(Q.jsx)(q,{children:Object(Q.jsx)(j.a,{color:"textSecondary",variant:"overline",children:"MENU"})})})})]})})]})})})})),Object(Q.jsx)(p.a,{id:"back-to-top-anchor"}),Object(Q.jsx)(z,Object(b.a)(Object(b.a)({},e),{},{children:Object(Q.jsx)(R.a,{color:"secondary",size:"small","aria-label":"scroll back to top",children:Object(Q.jsx)(v.a,{})})}))]})}));function J(e){var t=Object(w.a)();return Object(Q.jsxs)(n.a.Fragment,{children:[Object(Q.jsx)(h.a,{margin:t.spacing(8,"auto",1),children:Object(Q.jsx)(j.a,{variant:"h2",color:"textPrimary",children:Object(Q.jsx)("strong",{children:"SUPERB"})})}),Object(Q.jsx)(h.a,{margin:t.spacing(1,"auto",4),children:Object(Q.jsxs)(j.a,{variant:Object(y.a)(t.breakpoints.up("sm"))?"h4":"h5",color:"textPrimary",children:[Object(Q.jsx)("strong",{children:"S"}),"peech processing ",Object(Q.jsx)("strong",{children:"U"}),"niversal ",Object(Q.jsx)("strong",{children:"PER"}),"formance ",Object(Q.jsx)("strong",{children:"B"}),"enchmark"]})}),Object(Q.jsx)(h.a,{children:Object(Q.jsx)(j.a,{variant:"h6",color:"textSecondary",children:"This is the official website for the challenge SUPERB. We are working on the challenge rules, scripts for getting started and submitting results, and leaderboard. We will provide more information in mid April. Stay tuned!"})})]})}var _=a(37),X=a(91),Y=a(134);function Z(e){var t=n.a.useState(!1),a=Object(u.a)(t,2),r=a[0],i=a[1],c=e.children,s=e.interval;return n.a.useEffect((function(){setInterval((function(){i(!0)}),s)})),Object(Q.jsx)(n.a.Fragment,{children:Object(Q.jsx)(Y.a,Object(b.a)(Object(b.a)({in:r,style:{transformOrigin:"0 0 0"}},r?{timeout:1e3}:{}),{},{children:c}))})}function $(e){return e.charAt(0).toUpperCase()+e.slice(1)}var ee={recognition:[["PR","      Phoneme Recognition, PR transcribes an utterance into the smallest content units.      We include alignment modeling in the PR task to avoid the potential inaccurate forced alignment.      LibriSpeech train-clean-100/dev-clean/test-clean subsets are adopted in SUPERB for training/validation/testing.      Phoneme transcriptions are obtained from the LibriSpeech official g2p-model-5 and the conversion script in Kaldi librispeech s5 recipe.      The evaluation metric is phone error rate (PER).    "],["ASR","      Automatic Speech Recognition, ASR transcribes utterances into words.      While PR analyzes the improvement in modeling phonetics, ASR reflects the significance of the improvement in a real-world scenario.      LibriSpeech train-clean-100/devclean/test-clean subsets are used for training/validation/testing.      The evaluation metric is word error rate (WER).    "]],detection:[["KS","          Keyword Spotting, KS detects preregistered keywords by classifying utterances into a predefined set of words.          The task is usually performed on-device for the fast response time.          Thus, accuracy, model size, and inference time are all crucial.          We choose the widely used Speech Commands dataset v1.0 for the task.          The dataset consists of ten classes of keywords, a class for silence, and an unknown class to include the false positive.          The evaluation metric is accuracy (ACC)        "],["QbE","          Query by Example Spoken Term Detection, QbE detects a spoken term (query) in an audio database (documents) by           binary discriminating a given pair of query and document into a match or not.          The English subset in QUESST 2014 challenge is adopted since we focus on investigating English as the first step.          The evaluation metric is maximum term weighted value (MTWV) which balances misses and false alarms.        "]],semantic:[["IC","          Intent Classification, IC classifies utterances into predefined classes to determine the intent of speakers.          We use the Fluent Speech Commands dataset, where each utterance is tagged with three intent labels: action, object, and location.          The evaluation metric is accuracy (ACC).        "],["SF","          Slot Filling, SF predicts a sequence of semantic slot-types from an utterance,           like a slot-type FromLocation for a spoken word Taipei, which is known as a slot-value.          Both slot-types and slot-values are essential for an SLU system to function.          The evaluation metrics thus include slot-type F1 score and slotvalue CER.          Audio SNIPS is adopted, which synthesized multi-speaker utterances for SNIPS.          Following the standard split in SNIPS, US-accent speakers are further selected for training, and others are for validation/testing.        "]],speaker:[["SID","          Speaker Identification, SID classifies each utterance for its speaker identity as a multi-class classification,           where speakers are in the same predefined set for both training and testing.          The widely used VoxCeleb1 [26] is adopted, and the evaluation metric is accuracy (ACC).        "],["SV","          Automatic Speaker Verification, ASV verifies whether the speakers of a pair of utterances match as a binary classification,           and speakers in the testing set may not appear in the training set.          Thus, ASV is more challenging than SID. VoxCeleb1 is used without VoxCeleb2 training data and noise augmentation.           The evaluation metric is equal error rate (EER).        "],["SD","          Speaker Diarization, SD predicts who is speaking when for each timestamp, and multiple speakers can speak simultaneously.          The model has to encode rich speaker characteristics for each frame and should be able to represent mixtures of signals.          LibriMix is adopted where LibriSpeech train-clean-100/dev-clean/test-clean are used to generate mixtures for training/validation/testing.          We focus on the two-speaker scenario as the first step.          The time-coded speaker labels were generated using alignments from Kaldi LibriSpeech ASR model.          The evaluation metric is diarization error rate (DER).        "]],paralinguistics:[["ER","          Emotion Recognition, ER predicts an emotion class for each utterance.          The most widely used ER dataset IEMOCAP is adopted, and we follow the conventional evaluation protocol:          we drop the unbalance emotion classes to leave the final four classes with a similar amount of data points and           cross-validates on five folds of the standard splits.          The evaluation metric is accuracy (ACC).        "]]},te=Object(I.a)((function(e){return{taskName:{fontWeight:"bold",marginBottom:e.spacing(2)}}}));var ae=function(e){var t=te(),a=Object(w.a)();return Object(Q.jsxs)(h.a,{margin:a.spacing(6,"auto"),children:[Object(Q.jsx)(Z,{interval:0,children:Object(Q.jsxs)(h.a,{margin:a.spacing(4,"auto"),children:[Object(Q.jsx)(h.a,{margin:a.spacing(2,"auto"),children:Object(Q.jsx)(j.a,{color:"textPrimary",variant:"h4",children:"Tasks"})}),Object(Q.jsx)(M.a,{})]})}),Object(Q.jsx)(C.a,{container:!0,direction:"row",spacing:2,justify:"center",children:Object.keys(ee).map((function(e,t){return Object(Q.jsx)(Z,{interval:100*t,children:Object(Q.jsx)(C.a,{item:!0,children:Object(Q.jsx)(N,{link:"/tasks#".concat(e),children:Object(Q.jsx)(_.a,{variant:"outlined",children:$(e)})})})})}))}),Object.keys(ee).map((function(e,r){var i=400*(r+1);return Object(Q.jsxs)(h.a,{margin:a.spacing(6,"auto",8),children:[Object(Q.jsx)(h.a,{id:e,position:"relative",top:a.spacing(-4),visibility:"hidden"}),Object(Q.jsx)(Z,{interval:i,children:Object(Q.jsxs)(h.a,{margin:a.spacing(4,"auto"),children:[Object(Q.jsx)(h.a,{margin:a.spacing(2,"auto"),children:Object(Q.jsx)(j.a,{color:"textPrimary",variant:"h4",children:$(e)})}),Object(Q.jsx)(M.a,{})]})}),Object(Q.jsx)(C.a,{container:!0,spacing:5,justify:"center",children:ee[e].map((function(e,r){var c=Object(u.a)(e,2),s=c[0],o=c[1];return Object(Q.jsx)(n.a.Fragment,{children:Object(Q.jsx)(Z,{interval:i+100*(r+1),children:Object(Q.jsx)(C.a,{item:!0,xs:12,sm:6,md:4,children:Object(Q.jsx)(X.a,{elevation:3,children:Object(Q.jsxs)(h.a,{padding:a.spacing(3,2),children:[Object(Q.jsx)(j.a,{color:"textPrimary",variant:"h6",className:t.taskName,children:"".concat(s)}),Object(Q.jsx)(j.a,{color:"textSecondary",variant:"body2",children:o})]})})})})})}))})]})}))]})},re=a(88),ne=a(262),ie=a(85),ce=a(156),se=a.n(ce),oe=a(157),le=a.n(oe),de=a(158),he=a.n(de);function je(e){var t=Object(w.a)(),a=e.children,r=e.sectionName;return Object(Q.jsxs)(h.a,{margin:t.spacing(6,"auto"),children:[Object(Q.jsx)(h.a,{id:r.toLowerCase(),position:"relative",top:t.spacing(-4),visibility:"hidden"}),Object(Q.jsx)(h.a,{margin:t.spacing(2,"auto"),children:Object(Q.jsx)(j.a,{variant:"h5",color:"primary",children:$(r.toLowerCase())})}),a]})}function be(e){var t=Object(w.a)(),a=(Object(d.i)(),Object(d.h)().urlTrack),r=e.infos[a],n=(r.Icon,r.color),i=(r.rules,r.submissions,Object(s.a)(Object(b.a)({},t)));return i.palette.primary.main=n,Object(Q.jsx)(o.a,{theme:i,children:Object(Q.jsxs)(h.a,{margin:i.spacing(4,"auto",8),children:[Object(Q.jsxs)(h.a,{margin:i.spacing(4,"auto"),children:[Object(Q.jsx)(h.a,{margin:i.spacing(2,"auto"),children:Object(Q.jsxs)(j.a,{variant:"h4",color:"primary",children:[Object(Q.jsx)("strong",{children:$(a)})," Track"]})}),Object(Q.jsx)(M.a,{})]}),Object(Q.jsx)(je,{sectionName:"rules",children:Object(Q.jsx)(j.a,{variant:"body1",color:"textSecondary",children:"Some rules"})})]})})}var ue=Object(I.a)((function(e){return{icon:{fontSize:64},trackTitle:{fontWeight:"bold"}}}));function Se(e){var t=ue(),a=Object(w.a)(),r=Object(d.i)(),i=e.name,c=e.intro,s=e.Icon,o=e.color,l=e.rules,b=e.submissions,S=n.a.useState(!1),p=Object(u.a)(S,2),m=p[0],O=p[1],f=!l&&!b;return Object(Q.jsx)(n.a.Fragment,{children:Object(Q.jsx)(X.a,{elevation:m?7:2,onMouseOver:function(){O((function(e){return!e}))},onMouseOut:function(){O((function(e){return!e}))},children:Object(Q.jsx)(h.a,{padding:a.spacing(4,3),children:Object(Q.jsx)(C.a,{container:!0,direction:"column",spacing:3,justify:"center",children:[Object(Q.jsx)(s,{style:{fontSize:64,color:o}}),Object(Q.jsx)(j.a,{color:"textPrimary",variant:"h5",className:t.trackTitle,children:$(i)}),Object(Q.jsx)(j.a,{color:"textSecondary",variant:"body1",children:c}),Object(Q.jsx)(C.a,{container:!0,direction:"row",spacing:2,justify:"center",children:[["enter","",f]].map((function(e){var t=Object(u.a)(e,3),n=t[0],c=t[1],s=t[2];return Object(Q.jsx)(C.a,{item:!0,children:Object(Q.jsx)(N,{link:"".concat(r.url,"/").concat(i).concat(c),disabled:s,children:Object(Q.jsx)(_.a,{size:"medium",variant:"outlined",disabled:s,style:{color:s?a.palette.primary:o},children:n})})})}))})].map((function(e){return Object(Q.jsx)(C.a,{item:!0,children:e})}))})})})})}function pe(e){Object(w.a)();return Object(Q.jsx)(h.a,{component:"span",fontWeight:"bold",fontStyle:"italic",children:e.children})}function me(e){ue();var t=Object(w.a)(),a=Object(d.i)(),r={constrained:{intro:Object(Q.jsxs)("span",{children:["A fair comparison between ",Object(Q.jsx)(pe,{children:"frozen representations"})," by enforcing the same downstream model in each task. Only a few hyper-paramters for training are allowed to tuned."]}),Icon:se.a,color:re.a[400],rules:"Universal Representation, some rule...",submissions:[{Method:"FBANK",Description:"classic feature",Parameters:0,Stride:10,Input:"waveform",Corpus:"-",PR:82.01,KS:8.63,IC:9.1,SID:85e-5,ER:35.39,ASR:23.18,"ASR-LM":15.21,QbE:.0058,"SF-F1":69.64,"SF-CER":52.94,SV:9.56,SD:10.05},{Method:"PASE+",Description:"multi-task",Parameters:783e4,Stride:10,Input:"waveform",Corpus:"LS 50 hr",PR:58.88,KS:82.37,IC:30.29,SID:35.84,ER:57.64,ASR:24.92,"ASR-LM":16.61,QbE:7e-4,"SF-F1":60.41,"SF-CER":62.77,SV:10.91,SD:8.52},{Method:"APC",Description:"F-G",Parameters:411e4,Stride:10,Input:"FBANK",Corpus:"LS 360 hr",PR:41.85,KS:91.04,IC:74.64,SID:59.79,ER:58.84,ASR:21.61,"ASR-LM":15.09,QbE:.0268,"SF-F1":71.26,"SF-CER":50.76,SV:8.81,SD:10.72},{Method:"VQ-APC",Description:"F-G + VQ",Parameters:463e4,Stride:10,Input:"FBANK",Corpus:"LS 360 hr",PR:42.86,KS:90.52,IC:70.52,SID:49.57,ER:58.31,ASR:21.72,"ASR-LM":15.37,QbE:.0205,"SF-F1":69.62,"SF-CER":52.21,SV:9.29,SD:10.49},{Method:"NPC",Description:"M-G + VQ",Parameters:1938e4,Stride:10,Input:"FBANK",Corpus:"LS 360 hr",PR:52.67,KS:88.54,IC:64.04,SID:50.77,ER:59.55,ASR:20.94,"ASR-LM":14.69,QbE:.022,"SF-F1":67.43,"SF-CER":54.63,SV:10.28,SD:9.59},{Method:"Mockingjay",Description:"time M-G",Parameters:8512e4,Stride:10,Input:"FBANK",Corpus:"LS 360 hr",PR:80.01,KS:82.67,IC:28.87,SID:34.5,ER:45.72,ASR:23.72,"ASR-LM":15.94,QbE:3.1e-10,"SF-F1":60.83,"SF-CER":61.16,SV:23.22,SD:11.24},{Method:"TERA",Description:"time/freq M-G",Parameters:2133e4,Stride:10,Input:"FBANK",Corpus:"LS 960 hr",PR:47.53,KS:88.09,IC:48.8,SID:58.67,ER:54.76,ASR:18.45,"ASR-LM":12.44,QbE:87e-6,"SF-F1":63.28,"SF-CER":57.91,SV:16.49,SD:9.54},{Method:"modified CPC",Description:"F-C",Parameters:184e4,Stride:10,Input:"waveform",Corpus:"LL 60k hr",PR:41.66,KS:92.02,IC:65.01,SID:42.29,ER:59.28,ASR:20.02,"ASR-LM":13.57,QbE:.0061,"SF-F1":74.18,"SF-CER":46.66,SV:9.67,SD:11},{Method:"wav2vec",Description:"F-C",Parameters:3254e4,Stride:10,Input:"waveform",Corpus:"LS 960 hr",PR:32.39,KS:94.09,IC:78.91,SID:44.88,ER:58.17,ASR:16.4,"ASR-LM":11.3,QbE:.0307,"SF-F1":77.52,"SF-CER":41.75,SV:9.83,SD:10.79},{Method:"vq-wav2vec",Description:"F-C + VQ",Parameters:3415e4,Stride:10,Input:"waveform",Corpus:"LS 960 hr",PR:53.49,KS:92.28,IC:59.4,SID:39.04,ER:55.89,ASR:18.7,"ASR-LM":12.69,QbE:.0302,"SF-F1":70.57,"SF-CER":50.16,SV:9.5,SD:9.93},{Method:"wav2vec 2.0",Description:"M-C + VQ",Parameters:9504e4,Stride:20,Input:"waveform",Corpus:"LS 960 hr",PR:28.37,KS:92.31,IC:58.34,SID:45.62,ER:56.93,ASR:9.57,"ASR-LM":6.32,QbE:88e-5,"SF-F1":79.94,"SF-CER":37.81,SV:9.69,SD:7.48},{Method:"HuBERT Base",Description:"M-P + VQ",Parameters:9468e4,Stride:20,Input:"waveform",Corpus:"LS 960 hr",PR:6.85,KS:95.98,IC:95.94,SID:64.84,ER:62.94,ASR:6.74,"ASR-LM":4.93,QbE:.0759,"SF-F1":86.24,"SF-CER":28.52,SV:7.22,SD:6.76},{Method:"HuBERT Large",Description:"M-P + VQ",Parameters:31661e4,Stride:20,Input:"waveform",Corpus:"LL 60k hr",PR:3.72,KS:93.15,IC:98.37,SID:66.4,ER:64.93,ASR:3.67,"ASR-LM":2.91,QbE:.036,"SF-F1":88.68,"SF-CER":23.05,SV:7.7,SD:6.23}]},"less-constrained":{intro:Object(Q.jsxs)("span",{children:["A comparison between ",Object(Q.jsx)(pe,{children:"frozen representations"})," with customized but limited-resource downstream models. The details of downstream models are reported along with submission."]}),Icon:le.a,color:ne.a[700],rules:null,submissions:null},unconstrained:{intro:"Not yet open",Icon:he.a,color:ie.a[500],rules:null,submissions:null}};return Object(Q.jsxs)(d.c,{children:[Object(Q.jsxs)(d.a,{path:"".concat(a.path),exact:!0,children:[Object(Q.jsx)(Z,{interval:0,children:Object(Q.jsxs)(h.a,{margin:t.spacing(4,"auto"),children:[Object(Q.jsx)(h.a,{margin:t.spacing(2,"auto"),children:Object(Q.jsx)(j.a,{color:"textPrimary",variant:"h4",children:"Submit"})}),Object(Q.jsx)(M.a,{})]})}),Object(Q.jsx)(C.a,{container:!0,direction:"row",spacing:5,justify:"center",children:Object.keys(r).map((function(e,t){return Object(Q.jsx)(n.a.Fragment,{children:Object(Q.jsx)(Z,{interval:100*(t+1),children:Object(Q.jsx)(C.a,{item:!0,xs:12,sm:6,md:4,children:Object(Q.jsx)(Se,Object(b.a)({name:e},r[e]))})})})}))})]}),Object(Q.jsx)(d.a,{path:"".concat(a.path,"/:urlTrack"),children:Object(Q.jsx)(be,{infos:r})})]})}var Oe=a(89),fe=(a(209),[{Method:"FBANK",Description:"classic feature",Parameters:0,Stride:10,Input:"waveform",Corpus:"-",PR:82.01,KS:8.63,IC:9.1,SID:85e-5,ER:35.39,ASR:23.18,"ASR-LM":15.21,QbE:.0058,"SF-F1":69.64,"SF-CER":52.94,SV:9.56,SD:10.05},{Method:"PASE+",Description:"multi-task",Parameters:783e4,Stride:10,Input:"waveform",Corpus:"LS 50 hr",PR:58.88,KS:82.37,IC:30.29,SID:35.84,ER:57.64,ASR:24.92,"ASR-LM":16.61,QbE:7e-4,"SF-F1":60.41,"SF-CER":62.77,SV:10.91,SD:8.52},{Method:"APC",Description:"F-G",Parameters:411e4,Stride:10,Input:"FBANK",Corpus:"LS 360 hr",PR:41.85,KS:91.04,IC:74.64,SID:59.79,ER:58.84,ASR:21.61,"ASR-LM":15.09,QbE:.0268,"SF-F1":71.26,"SF-CER":50.76,SV:8.81,SD:10.72},{Method:"VQ-APC",Description:"F-G + VQ",Parameters:463e4,Stride:10,Input:"FBANK",Corpus:"LS 360 hr",PR:42.86,KS:90.52,IC:70.52,SID:49.57,ER:58.31,ASR:21.72,"ASR-LM":15.37,QbE:.0205,"SF-F1":69.62,"SF-CER":52.21,SV:9.29,SD:10.49},{Method:"NPC",Description:"M-G + VQ",Parameters:1938e4,Stride:10,Input:"FBANK",Corpus:"LS 360 hr",PR:52.67,KS:88.54,IC:64.04,SID:50.77,ER:59.55,ASR:20.94,"ASR-LM":14.69,QbE:.022,"SF-F1":67.43,"SF-CER":54.63,SV:10.28,SD:9.59},{Method:"Mockingjay",Description:"time M-G",Parameters:8512e4,Stride:10,Input:"FBANK",Corpus:"LS 360 hr",PR:80.01,KS:82.67,IC:28.87,SID:34.5,ER:45.72,ASR:23.72,"ASR-LM":15.94,QbE:3.1e-10,"SF-F1":60.83,"SF-CER":61.16,SV:23.22,SD:11.24},{Method:"TERA",Description:"time/freq M-G",Parameters:2133e4,Stride:10,Input:"FBANK",Corpus:"LS 960 hr",PR:47.53,KS:88.09,IC:48.8,SID:58.67,ER:54.76,ASR:18.45,"ASR-LM":12.44,QbE:87e-6,"SF-F1":63.28,"SF-CER":57.91,SV:16.49,SD:9.54},{Method:"modified CPC",Description:"F-C",Parameters:184e4,Stride:10,Input:"waveform",Corpus:"LL 60k hr",PR:41.66,KS:92.02,IC:65.01,SID:42.29,ER:59.28,ASR:20.02,"ASR-LM":13.57,QbE:.0061,"SF-F1":74.18,"SF-CER":46.66,SV:9.67,SD:11},{Method:"wav2vec",Description:"F-C",Parameters:3254e4,Stride:10,Input:"waveform",Corpus:"LS 960 hr",PR:32.39,KS:94.09,IC:78.91,SID:44.88,ER:58.17,ASR:16.4,"ASR-LM":11.3,QbE:.0307,"SF-F1":77.52,"SF-CER":41.75,SV:9.83,SD:10.79},{Method:"vq-wav2vec",Description:"F-C + VQ",Parameters:3415e4,Stride:10,Input:"waveform",Corpus:"LS 960 hr",PR:53.49,KS:92.28,IC:59.4,SID:39.04,ER:55.89,ASR:18.7,"ASR-LM":12.69,QbE:.0302,"SF-F1":70.57,"SF-CER":50.16,SV:9.5,SD:9.93},{Method:"wav2vec 2.0",Description:"M-C + VQ",Parameters:9504e4,Stride:20,Input:"waveform",Corpus:"LS 960 hr",PR:28.37,KS:92.31,IC:58.34,SID:45.62,ER:56.93,ASR:9.57,"ASR-LM":6.32,QbE:88e-5,"SF-F1":79.94,"SF-CER":37.81,SV:9.69,SD:7.48},{Method:"HuBERT Base",Description:"M-P + VQ",Parameters:9468e4,Stride:20,Input:"waveform",Corpus:"LS 960 hr",PR:6.85,KS:95.98,IC:95.94,SID:64.84,ER:62.94,ASR:6.74,"ASR-LM":4.93,QbE:.0759,"SF-F1":86.24,"SF-CER":28.52,SV:7.22,SD:6.76},{Method:"HuBERT Large",Description:"M-P + VQ",Parameters:31661e4,Stride:20,Input:"waveform",Corpus:"LL 60k hr",PR:3.72,KS:93.15,IC:98.37,SID:66.4,ER:64.93,ASR:3.67,"ASR-LM":2.91,QbE:.036,"SF-F1":88.68,"SF-CER":23.05,SV:7.7,SD:6.23}]);function xe(){var e=Object(w.a)(),t=Object(s.a)(Object(b.a)({},e));return t.palette.primary.main=t.palette.text.secondary,Object(Q.jsx)(o.a,{theme:t,children:Object(Q.jsx)(h.a,{margin:"5px 10px",children:Object(Q.jsxs)(Oe.d,{children:[Object(Q.jsx)(Oe.b,{}),Object(Q.jsx)(Oe.c,{})]})})})}function Re(e){var t=fe.map((function(e,t){return Object(b.a)({id:t},e)})),a=["Method"],r=["PR","KS","IC","SID","ER","ASR","ASR-LM","QbE","SF-F1","SF-CER","SV","SD"],n=Object.keys(fe[0]).map((function(e){var t=81+10*(e.length-2);return{field:e,type:typeof fe[0][e],hide:!(a+r).includes(e),width:r.includes(e)?t:130}})),i=Math.floor(Math.random()*r.length);return Object(Q.jsx)("div",{style:{height:500,width:"100%"},children:Object(Q.jsx)(Oe.a,{columns:n,rows:t,disableColumnMenu:!0,density:"compact",components:{Toolbar:xe},sortModel:[{field:r[i],sort:["asc","dsc","dsc","dsc","dsc","asc","asc","dsc","dsc","asc","asc","asc"][i]}]})})}var ge=Object(s.a)({palette:{primary:{light:"#ffffff",main:"#f5f5f5",dark:"#c2c2c2"},text:{primary:"#546e7a",secondary:"#9e9e9e"}}});var ve=function(){return Object(Q.jsx)("div",{className:"App",children:Object(Q.jsx)(l.a,{children:Object(Q.jsxs)(o.a,{theme:ge,children:[Object(Q.jsx)(H,{}),Object(Q.jsx)(h.a,{margin:ge.spacing(6,"auto")}),Object(Q.jsxs)(d.c,{children:[Object(Q.jsx)(d.a,{path:"/",exact:!0,children:Object(Q.jsx)(J,{})}),Object(Q.jsx)(d.a,{path:"/tasks",children:Object(Q.jsx)(ae,{})}),Object(Q.jsx)(d.a,{path:"/submit",children:Object(Q.jsx)(me,{})}),Object(Q.jsx)(d.a,{path:"/compare",children:Object(Q.jsx)(j.a,{children:"Compare"})}),Object(Q.jsx)(d.a,{path:"/leaderboard",children:Object(Q.jsx)(Re,{})})]})]})})})},Ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,271)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),i(e),c(e)}))};c.a.render(Object(Q.jsx)(n.a.StrictMode,{children:Object(Q.jsx)(ve,{})}),document.getElementById("root")),Ce()}},[[208,1,2]]]);
//# sourceMappingURL=main.ce79f566.chunk.js.map