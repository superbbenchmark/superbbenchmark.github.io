(this["webpackJsonpsuperb-website"]=this["webpackJsonpsuperb-website"]||[]).push([[0],{191:function(e,t,n){},192:function(e,t,n){},208:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(17),c=n.n(r),s=(n(191),n(192),n(72)),o=n(253),d=n(41),l=n(22),j=n(265),h=n(90),b=n(20),u=n(211),p=n(2);function m(e){var t=Object(b.a)();return Object(p.jsxs)(a.a.Fragment,{children:[Object(p.jsx)(j.a,{margin:t.spacing(8,"auto",1),children:Object(p.jsx)(h.a,{variant:"h2",color:"textPrimary",children:Object(p.jsx)("strong",{children:"SUPERB"})})}),Object(p.jsx)(j.a,{margin:t.spacing(1,"auto",4),children:Object(p.jsxs)(h.a,{variant:Object(u.a)(t.breakpoints.up("sm"))?"h4":"h5",color:"textPrimary",children:[Object(p.jsx)("strong",{children:"S"}),"peech processing ",Object(p.jsx)("strong",{children:"U"}),"niversal ",Object(p.jsx)("strong",{children:"PER"}),"formance ",Object(p.jsx)("strong",{children:"B"}),"enchmark"]})}),Object(p.jsx)(j.a,{children:Object(p.jsx)(h.a,{variant:"h6",color:"textSecondary",children:"This is the official website for the challenge SUPERB. We are working on the challenge rules, scripts for getting started and submitting results, and leaderboard. We will provide more information in mid April. Stay tuned!"})})]})}var O=n(19),S=n(252),x=n(37),f=n(91),g=n(30),v=n(109);function R(e){var t=Object(v.a)(),n=e.anchorKey;return delete e.anchorKey,Object(p.jsxs)(a.a.Fragment,{children:[Object(p.jsx)(j.a,{id:n,position:"relative",top:t.spacing(-4),visibility:"hidden"}),Object(p.jsx)(j.a,Object(g.a)({},e))]})}function y(e){var t=Object(v.a)();return Object(p.jsx)(R,{margin:t.spacing(4,"auto",8),children:e.children})}function w(e){var t=Object(v.a)();return Object(p.jsx)(R,{margin:t.spacing(4,"auto",8),children:e.children})}var k=n(250);function C(e){return e.charAt(0).toUpperCase()+e.slice(1)}function F(e){return Object(p.jsx)(j.a,{component:"span",fontWeight:"bold",fontStyle:"italic",children:e.children})}function E(e){var t=Object(v.a)(),n=e.title,i=e.description;return Object(p.jsx)(a.a.Fragment,{children:Object(p.jsxs)(j.a,{margin:t.spacing(4,"auto"),children:[Object(p.jsxs)(j.a,{margin:t.spacing(2,"auto"),maxWidth:750,children:[Object(p.jsx)(h.a,{color:"textPrimary",variant:"h4",children:n}),Object(p.jsx)(j.a,{margin:t.spacing(1,"auto"),children:Object(p.jsx)(h.a,{color:"textSecondary",variant:"body1",children:i})})]}),Object(p.jsx)(k.a,{})]})})}var I=n(5),P=n(134);function A(e){var t=a.a.useState(!1),n=Object(I.a)(t,2),i=n[0],r=n[1],c=e.children,s=e.interval;return a.a.useEffect((function(){setInterval((function(){r(!0)}),s)})),Object(p.jsx)(a.a.Fragment,{children:Object(p.jsx)(P.a,Object(g.a)(Object(g.a)({in:i,style:{transformOrigin:"0 0 0"}},i?{timeout:1e3}:{}),{},{children:c}))})}var D=n(154),L=Object(O.a)((function(e){return{}}));function M(e){var t=e.link,n=e.children,i=e.disabled,a=i?j.a:D.a,r=Object(l.g)();Object(b.a)(),L();return Object(p.jsx)(j.a,{fontWeight:r.pathname.includes(t)?"bold":"inherit",children:t.includes("http")?Object(p.jsx)("a",{className:"unlink",href:i?null:t,target:"_blank",children:n}):Object(p.jsx)(a,{className:"unlink",to:t,children:n})})}var T=n(88),V=n(251),K=n(85),N=n(155),Q=n.n(N),B=n(156),W=n.n(B),U=n(157),z=n.n(U),q=[{name:"recognition",description:"recognition description",tasks:[{name:"PR",description:"            Phoneme Recognition, PR transcribes an utterance into the smallest content units.            We include alignment modeling in the PR task to avoid the potential inaccurate forced alignment.            LibriSpeech train-clean-100/dev-clean/test-clean subsets are adopted in SUPERB for training/validation/testing.            Phoneme transcriptions are obtained from the LibriSpeech official g2p-model-5 and the conversion script in Kaldi librispeech s5 recipe.            The evaluation metric is phone error rate (PER).          "},{name:"ASR",description:"            Automatic Speech Recognition, ASR transcribes utterances into words.            While PR analyzes the improvement in modeling phonetics, ASR reflects the significance of the improvement in a real-world scenario.            LibriSpeech train-clean-100/devclean/test-clean subsets are used for training/validation/testing.            The evaluation metric is word error rate (WER).          "}]},{name:"detection",description:"detection description",tasks:[{name:"KS",description:"            Keyword Spotting, KS detects preregistered keywords by classifying utterances into a predefined set of words.            The task is usually performed on-device for the fast response time.            Thus, accuracy, model size, and inference time are all crucial.            We choose the widely used Speech Commands dataset v1.0 for the task.            The dataset consists of ten classes of keywords, a class for silence, and an unknown class to include the false positive.            The evaluation metric is accuracy (ACC)          "},{name:"QbE",description:"            Query by Example Spoken Term Detection, QbE detects a spoken term (query) in an audio database (documents) by             binary discriminating a given pair of query and document into a match or not.            The English subset in QUESST 2014 challenge is adopted since we focus on investigating English as the first step.            The evaluation metric is maximum term weighted value (MTWV) which balances misses and false alarms.          "}]},{name:"semantics",description:"semantics description",tasks:[{name:"IC",description:"            Intent Classification, IC classifies utterances into predefined classes to determine the intent of speakers.            We use the Fluent Speech Commands dataset, where each utterance is tagged with three intent labels: action, object, and location.            The evaluation metric is accuracy (ACC).          "},{name:"SF",description:"            Slot Filling, SF predicts a sequence of semantic slot-types from an utterance,             like a slot-type FromLocation for a spoken word Taipei, which is known as a slot-value.            Both slot-types and slot-values are essential for an SLU system to function.            The evaluation metrics thus include slot-type F1 score and slotvalue CER.            Audio SNIPS is adopted, which synthesized multi-speaker utterances for SNIPS.            Following the standard split in SNIPS, US-accent speakers are further selected for training, and others are for validation/testing.          "}]},{name:"speaker",description:"speaker description",tasks:[{name:"SID",description:"            Speaker Identification, SID classifies each utterance for its speaker identity as a multi-class classification,             where speakers are in the same predefined set for both training and testing.            The widely used VoxCeleb1 [26] is adopted, and the evaluation metric is accuracy (ACC).          "},{name:"SV",description:"            Automatic Speaker Verification, ASV verifies whether the speakers of a pair of utterances match as a binary classification,             and speakers in the testing set may not appear in the training set.            Thus, ASV is more challenging than SID. VoxCeleb1 is used without VoxCeleb2 training data and noise augmentation.             The evaluation metric is equal error rate (EER).          "},{name:"SD",description:"            Speaker Diarization, SD predicts who is speaking when for each timestamp, and multiple speakers can speak simultaneously.            The model has to encode rich speaker characteristics for each frame and should be able to represent mixtures of signals.            LibriMix is adopted where LibriSpeech train-clean-100/dev-clean/test-clean are used to generate mixtures for training/validation/testing.            We focus on the two-speaker scenario as the first step.            The time-coded speaker labels were generated using alignments from Kaldi LibriSpeech ASR model.            The evaluation metric is diarization error rate (DER).          "}]},{name:"paralinguistics",description:"paralinguistics description",tasks:[{name:"ER",description:"            Emotion Recognition, ER predicts an emotion class for each utterance.            The most widely used ER dataset IEMOCAP is adopted, and we follow the conventional evaluation protocol:            we drop the unbalance emotion classes to leave the final four classes with a similar amount of data points and             cross-validates on five folds of the standard splits.            The evaluation metric is accuracy (ACC).          "}]}],G=[{name:"constrained",intro:Object(p.jsxs)("span",{children:["A fair comparison between ",Object(p.jsx)(F,{children:"frozen representations"})," by enforcing the same downstream model in each task. Only a few hyper-paramters for training are allowed to tuned."]}),Icon:Q.a,color:T.a[400],rules:"Universal Representation, some rule..."},{name:"less-constrained",intro:Object(p.jsxs)("span",{children:["A comparison between ",Object(p.jsx)(F,{children:"frozen representations"})," with customized but limited-resource downstream models. The details of downstream models are reported along with submission."]}),Icon:W.a,color:V.a[700],rules:null},{name:"unconstrained",intro:"Not yet open",Icon:z.a,color:K.a[500],rules:null}],H=[{Method:"FBANK",Description:"classic feature",Parameters:0,Stride:10,Input:"waveform",Corpus:"-",PR:82.01,KS:8.63,IC:9.1,SID:85e-5,ER:35.39,ASR:23.18,"ASR-LM":15.21,QbE:.0058,"SF-F1":69.64,"SF-CER":52.94,SV:9.56,SD:10.05},{Method:"PASE+",Description:"multi-task",Parameters:783e4,Stride:10,Input:"waveform",Corpus:"LS 50 hr",PR:58.88,KS:82.37,IC:30.29,SID:35.84,ER:57.64,ASR:24.92,"ASR-LM":16.61,QbE:7e-4,"SF-F1":60.41,"SF-CER":62.77,SV:10.91,SD:8.52},{Method:"APC",Description:"F-G",Parameters:411e4,Stride:10,Input:"FBANK",Corpus:"LS 360 hr",PR:41.85,KS:91.04,IC:74.64,SID:59.79,ER:58.84,ASR:21.61,"ASR-LM":15.09,QbE:.0268,"SF-F1":71.26,"SF-CER":50.76,SV:8.81,SD:10.72},{Method:"VQ-APC",Description:"F-G + VQ",Parameters:463e4,Stride:10,Input:"FBANK",Corpus:"LS 360 hr",PR:42.86,KS:90.52,IC:70.52,SID:49.57,ER:58.31,ASR:21.72,"ASR-LM":15.37,QbE:.0205,"SF-F1":69.62,"SF-CER":52.21,SV:9.29,SD:10.49},{Method:"NPC",Description:"M-G + VQ",Parameters:1938e4,Stride:10,Input:"FBANK",Corpus:"LS 360 hr",PR:52.67,KS:88.54,IC:64.04,SID:50.77,ER:59.55,ASR:20.94,"ASR-LM":14.69,QbE:.022,"SF-F1":67.43,"SF-CER":54.63,SV:10.28,SD:9.59},{Method:"Mockingjay",Description:"time M-G",Parameters:8512e4,Stride:10,Input:"FBANK",Corpus:"LS 360 hr",PR:80.01,KS:82.67,IC:28.87,SID:34.5,ER:45.72,ASR:23.72,"ASR-LM":15.94,QbE:3.1e-10,"SF-F1":60.83,"SF-CER":61.16,SV:23.22,SD:11.24},{Method:"TERA",Description:"time/freq M-G",Parameters:2133e4,Stride:10,Input:"FBANK",Corpus:"LS 960 hr",PR:47.53,KS:88.09,IC:48.8,SID:58.67,ER:54.76,ASR:18.45,"ASR-LM":12.44,QbE:87e-6,"SF-F1":63.28,"SF-CER":57.91,SV:16.49,SD:9.54},{Method:"modified CPC",Description:"F-C",Parameters:184e4,Stride:10,Input:"waveform",Corpus:"LL 60k hr",PR:41.66,KS:92.02,IC:65.01,SID:42.29,ER:59.28,ASR:20.02,"ASR-LM":13.57,QbE:.0061,"SF-F1":74.18,"SF-CER":46.66,SV:9.67,SD:11},{Method:"wav2vec",Description:"F-C",Parameters:3254e4,Stride:10,Input:"waveform",Corpus:"LS 960 hr",PR:32.39,KS:94.09,IC:78.91,SID:44.88,ER:58.17,ASR:16.4,"ASR-LM":11.3,QbE:.0307,"SF-F1":77.52,"SF-CER":41.75,SV:9.83,SD:10.79},{Method:"vq-wav2vec",Description:"F-C + VQ",Parameters:3415e4,Stride:10,Input:"waveform",Corpus:"LS 960 hr",PR:53.49,KS:92.28,IC:59.4,SID:39.04,ER:55.89,ASR:18.7,"ASR-LM":12.69,QbE:.0302,"SF-F1":70.57,"SF-CER":50.16,SV:9.5,SD:9.93},{Method:"wav2vec 2.0",Description:"M-C + VQ",Parameters:9504e4,Stride:20,Input:"waveform",Corpus:"LS 960 hr",PR:28.37,KS:92.31,IC:58.34,SID:45.62,ER:56.93,ASR:9.57,"ASR-LM":6.32,QbE:88e-5,"SF-F1":79.94,"SF-CER":37.81,SV:9.69,SD:7.48},{Method:"HuBERT Base",Description:"M-P + VQ",Parameters:9468e4,Stride:20,Input:"waveform",Corpus:"LS 960 hr",PR:6.85,KS:95.98,IC:95.94,SID:64.84,ER:62.94,ASR:6.74,"ASR-LM":4.93,QbE:.0759,"SF-F1":86.24,"SF-CER":28.52,SV:7.22,SD:6.76},{Method:"HuBERT Large",Description:"M-P + VQ",Parameters:31661e4,Stride:20,Input:"waveform",Corpus:"LL 60k hr",PR:3.72,KS:93.15,IC:98.37,SID:66.4,ER:64.93,ASR:3.67,"ASR-LM":2.91,QbE:.036,"SF-F1":88.68,"SF-CER":23.05,SV:7.7,SD:6.23}],J=Object(O.a)((function(e){return{taskName:{fontWeight:"bold",marginBottom:e.spacing(2)}}}));var _=function(e){var t=J(),n=Object(b.a)();return Object(p.jsxs)(a.a.Fragment,{children:[Object(p.jsxs)(y,{children:[Object(p.jsx)(A,{interval:0,children:Object(p.jsx)("div",{children:Object(p.jsx)(E,{title:"Tasks",description:Object(p.jsxs)("span",{children:["General speech processing can be categorized into ",Object(p.jsx)(F,{children:"discriminative"})," and ",Object(p.jsx)(F,{children:"generative"})," tasks. The initial release of SUPERB focues on the former, where ten tasks are collected from five ",Object(p.jsx)(F,{children:"domains"}),"."]})})})}),Object(p.jsx)(S.a,{container:!0,direction:"row",spacing:2,justify:"center",children:q.map((function(e,t){var n=e.name;return Object(p.jsx)(A,{interval:100*t,children:Object(p.jsx)(S.a,{item:!0,children:Object(p.jsx)(M,{link:"/tasks#".concat(n),children:Object(p.jsx)(x.a,{variant:"outlined",children:C(n.toLowerCase())})})})})}))})]}),q.map((function(e,i){var r=e.name,c=e.description,s=e.tasks,o=400*(i+1);return Object(p.jsxs)(w,{children:[Object(p.jsx)(j.a,{id:r,position:"relative",top:n.spacing(-4),visibility:"hidden"}),Object(p.jsx)(A,{interval:o,children:Object(p.jsx)("div",{children:Object(p.jsx)(E,{title:C(r.toLowerCase()),description:c})})}),Object(p.jsx)(S.a,{container:!0,spacing:5,justify:"center",children:s.map((function(e,i){var r=e.name,c=e.description;return Object(p.jsx)(a.a.Fragment,{children:Object(p.jsx)(A,{interval:o+100*(i+1),children:Object(p.jsx)(S.a,{item:!0,xs:12,sm:6,md:4,children:Object(p.jsx)(f.a,{elevation:3,children:Object(p.jsxs)(j.a,{padding:n.spacing(3,2),children:[Object(p.jsx)(h.a,{color:"textPrimary",variant:"h6",className:t.taskName,children:"".concat(r)}),Object(p.jsx)(h.a,{color:"textSecondary",variant:"body2",children:c})]})})})})})}))})]})}))]})},X=Object(O.a)((function(e){return{icon:{fontSize:64},title:{fontWeight:"bold"}}}));function Y(e){var t=X(),n=Object(b.a)(),i=Object(l.i)(),r=e.Icon,c=e.title,s=e.description,o=e.color,d=e.disabled,u=a.a.useState(!1),m=Object(I.a)(u,2),O=m[0],g=m[1];return Object(p.jsx)(a.a.Fragment,{children:Object(p.jsx)(f.a,{elevation:O?7:2,onMouseOver:function(){g((function(e){return!e}))},onMouseOut:function(){g((function(e){return!e}))},children:Object(p.jsx)(j.a,{padding:n.spacing(4,3),children:Object(p.jsx)(S.a,{container:!0,direction:"column",spacing:3,justify:"center",children:[Object(p.jsx)(r,{style:{fontSize:64,color:o}}),Object(p.jsx)(h.a,{color:"textPrimary",variant:"h5",className:t.title,children:C(c)}),Object(p.jsx)(h.a,{color:"textSecondary",variant:"body1",children:s}),Object(p.jsx)(S.a,{container:!0,direction:"row",spacing:2,justify:"center",children:[["enter",""]].map((function(e){var t=Object(I.a)(e,2),a=t[0],r=t[1];return Object(p.jsx)(S.a,{item:!0,children:Object(p.jsx)(M,{link:"".concat(i.url,"/").concat(c).concat(r),disabled:d,children:Object(p.jsx)(x.a,{size:"medium",variant:"outlined",disabled:d,style:{color:d?n.palette.primary:o},children:a})})})}))})].map((function(e){return Object(p.jsx)(S.a,{item:!0,children:e})}))})})})})}function Z(e){var t=Object(l.h)().urlTrack;return Object(p.jsx)(a.a.Fragment,{children:Object(p.jsx)("h1",{children:t})})}var $=Object(O.a)((function(e){return{}}));function ee(e){$(),Object(b.a)();var t=Object(l.i)();return Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{path:"".concat(t.path),exact:!0,children:Object(p.jsxs)(y,{children:[Object(p.jsx)(A,{interval:0,children:Object(p.jsx)("div",{children:Object(p.jsx)(E,{title:"Submit",description:Object(p.jsx)("span",{children:"task"})})})}),Object(p.jsx)(S.a,{container:!0,direction:"row",spacing:5,justify:"center",children:G.map((function(e,t){var n=e.name,i=e.intro,r=e.Icon,c=e.color,s=e.rules;return Object(p.jsx)(a.a.Fragment,{children:Object(p.jsx)(A,{interval:100*(t+1),children:Object(p.jsx)(S.a,{item:!0,xs:12,sm:6,md:4,children:Object(p.jsx)(Y,{Icon:r,title:n,description:i,color:c,disabled:!s})})})})}))})]})}),Object(p.jsx)(l.a,{path:"".concat(t.path,"/:urlTrack"),children:Object(p.jsx)(Z,{})})]})}var te=n(89);n(209);function ne(){var e=Object(b.a)(),t=Object(s.a)(Object(g.a)({},e));return t.palette.primary.main=t.palette.text.secondary,Object(p.jsx)(o.a,{theme:t,children:Object(p.jsx)(j.a,{margin:"5px 10px",children:Object(p.jsxs)(te.d,{children:[Object(p.jsx)(te.b,{}),Object(p.jsx)(te.c,{})]})})})}function ie(e){var t=H.map((function(e,t){return Object(g.a)({id:t},e)})),n=["Method"],i=["PR","KS","IC","SID","ER","ASR","ASR-LM","QbE","SF-F1","SF-CER","SV","SD"],a=Object.keys(H[0]).map((function(e){var t=81+10*(e.length-2);return{field:e,type:typeof H[0][e],hide:!(n+i).includes(e),width:i.includes(e)?t:130}})),r=Math.floor(Math.random()*i.length);return Object(p.jsx)("div",{style:{height:500,width:"100%"},children:Object(p.jsx)(te.a,{columns:a,rows:t,disableColumnMenu:!0,density:"compact",components:{Toolbar:ne},sortModel:[{field:i[r],sort:["asc","dsc","dsc","dsc","dsc","asc","asc","dsc","dsc","asc","asc","asc"][r]}]})})}var ae=n(262),re=n(256),ce=n(261),se=n(259),oe=n(258),de=n(260),le=n(264),je=n(159),he=n.n(je),be=n(268),ue=n(263),pe=n(15),me=n(4),Oe=n(266),Se=n(213),xe=n(214),fe=n(257),ge=Object(O.a)({list:{width:200,paddingLeft:20,paddingRight:20},fullList:{width:"auto"}});function ve(e){var t=ge(),n=a.a.useState({top:!1,left:!1,bottom:!1,right:!1}),i=Object(I.a)(n,2),r=i[0],c=i[1],s=function(e,t){return function(n){(!n||"keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&c(Object(g.a)(Object(g.a)({},r),{},Object(pe.a)({},e,t)))}},o=function(n){return Object(p.jsx)("div",{className:Object(me.a)(t.list,Object(pe.a)({},t.fullList,"top"===n||"bottom"===n)),role:"presentation",onClick:s(n,!1),onKeyDown:s(n,!1),children:Object(p.jsx)(Se.a,{children:e.items.map((function(e){var t=Object(I.a)(e,2),n=t[0],i=t[1];return Object(p.jsxs)("div",{children:[Object(p.jsx)(M,{link:i,children:Object(p.jsx)(xe.a,{button:!0,children:Object(p.jsx)(fe.a,{children:n})})}),Object(p.jsx)(k.a,{})]})}))})})};return Object(p.jsx)("div",{children:["right"].map((function(t){return Object(p.jsxs)(a.a.Fragment,{children:[Object(p.jsx)("div",{onClick:s(t,!0),children:e.children}),Object(p.jsx)(Oe.a,{anchor:t,open:r[t],onClose:s(t,!1),onOpen:s(t,!0),children:o(t)})]},t)}))})}function Re(e){var t=e.children,n=e.window,i=Object(se.a)({target:n?n():void 0});return Object(p.jsx)(oe.a,{appear:!1,direction:"down",in:!i,children:t})}function ye(e){var t=e.children,n=e.window,i=we(),a=Object(l.f)(),r=Object(l.g)(),c=Object(se.a)({target:n?n():void 0,disableHysteresis:!0,threshold:100});return Object(p.jsx)(de.a,{in:c,children:Object(p.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&(t.scrollIntoView({block:"center"}),a.push(r.pathname))},role:"presentation",className:i.root,children:t})})}var we=Object(O.a)((function(e){return{root:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},toolbar:{width:"100%",maxWidth:900,margin:"auto",paddingLeft:20,paddingRight:20},tool:{paddingTop:5,paddingBottom:5},button:{paddingLeft:12,paddingRight:12,marginLeft:2,marginRight:2,borderRadius:10,border:"solid 1px transparent","&:hover":{background:"rgba(255, 255, 255, 1)",boxShadow:"0px 3px 10px rgba(0, 0, 0, 0.1)"},cursor:"pointer"},navlink:{fontWeight:"inherit"}}}));function ke(e){var t=we();return Object(p.jsx)("div",{className:"".concat(t.tool," ").concat(t.button),children:e.children})}var Ce=Object(ue.a)()((function(e){e.width;var t=we(),n=Object(b.a)(),i=[["Paper","https://arxiv.org/"],["Code","https://github.com/s3prl/s3prl"],["Tasks","/tasks"],["Submit","/submit"],["Compare","/compare"],["Leaderboard","/leaderboard"]].map((function(e){var n=Object(I.a)(e,2),i=n[0],a=n[1];return[Object(p.jsx)(h.a,{color:"textSecondary",variant:"overline",className:t.navlink,children:i}),a]}));return Object(p.jsxs)(a.a.Fragment,{children:[Object(p.jsx)(ce.a,{}),Object(p.jsx)(Re,Object(g.a)(Object(g.a)({},e),{},{children:Object(p.jsx)(ae.a,{color:"primary",children:Object(p.jsx)(re.a,{className:t.toolbar,children:Object(p.jsxs)(S.a,{container:!0,alignItems:"center",children:[Object(p.jsx)(S.a,{item:!0,xs:8,md:4,children:Object(p.jsx)(S.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"center",children:Object(p.jsx)(M,{link:"/",children:Object(p.jsx)(ke,{children:Object(p.jsx)(h.a,{color:"textPrimary",variant:"h6",className:"".concat(t.navlink),children:Object(u.a)(n.breakpoints.up("sm"))?"SUPERB Benchmark":"SUPERB"})})})})}),Object(p.jsx)(S.a,{item:!0,xs:4,md:8,children:Object(p.jsxs)(S.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center",children:[Object(p.jsx)(be.a,{smDown:!0,children:i.map((function(e){var t=Object(I.a)(e,2),n=t[0],i=t[1];return Object(p.jsx)(M,{link:i,children:Object(p.jsx)(ke,{children:n})})}))}),Object(p.jsx)(be.a,{mdUp:!0,children:Object(p.jsx)(ve,{items:i,children:Object(p.jsx)(ke,{children:Object(p.jsx)(h.a,{color:"textSecondary",variant:"overline",children:"MENU"})})})})]})})]})})})})),Object(p.jsx)(re.a,{id:"back-to-top-anchor"}),Object(p.jsx)(ye,Object(g.a)(Object(g.a)({},e),{},{children:Object(p.jsx)(le.a,{color:"secondary",size:"small","aria-label":"scroll back to top",children:Object(p.jsx)(he.a,{})})}))]})})),Fe=Object(s.a)({palette:{primary:{light:"#ffffff",main:"#f5f5f5",dark:"#c2c2c2"},text:{primary:"#546e7a",secondary:"#9e9e9e"}}});var Ee=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(d.a,{children:Object(p.jsxs)(o.a,{theme:Fe,children:[Object(p.jsx)(Ce,{}),Object(p.jsx)(j.a,{margin:Fe.spacing(4,"auto")}),Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{path:"/",exact:!0,children:Object(p.jsx)(m,{})}),Object(p.jsx)(l.a,{path:"/tasks",children:Object(p.jsx)(_,{})}),Object(p.jsx)(l.a,{path:"/submit",children:Object(p.jsx)(ee,{})}),Object(p.jsx)(l.a,{path:"/compare",children:Object(p.jsx)(h.a,{children:"Compare"})}),Object(p.jsx)(l.a,{path:"/leaderboard",children:Object(p.jsx)(ie,{})})]})]})})})},Ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,271)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))};c.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(Ee,{})}),document.getElementById("root")),Ie()}},[[208,1,2]]]);
//# sourceMappingURL=main.1ae0d591.chunk.js.map