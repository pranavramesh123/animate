import{h as t}from"./p-26c8340a.js";export{A as ANIMATIONS,E as EASING,a as EASING_FUNCTIONS}from"./p-88d62153.js";var e=function(t,a){var e={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&a.indexOf(i)<0&&(e[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)a.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(e[i[o]]=t[i[o]])}return e};function i(a){return i=>{const{ref:o,keyFrames:n,keyFramesData:r,options:s,optionsData:c,animateId:m,delay:l,endDelay:p,duration:y,direction:d,composite:u,easing:f,fill:F,iterations:b,iterationStart:k,iterationComposite:D,autoPlay:I,currentTime:T,startTime:j,playbackRate:C,onFinish:O,onCancel:S}=i,N=e(i,["ref","keyFrames","keyFramesData","options","optionsData","animateId","delay","endDelay","duration","direction","composite","easing","fill","iterations","iterationStart","iterationComposite","autoPlay","currentTime","startTime","playbackRate","onFinish","onCancel"]);return t("animatable-component",{ref:o,keyFrames:n,keyFramesData:r,options:s,optionsData:c,animateId:m,delay:l,endDelay:p,duration:y,direction:d,composite:u,easing:f,fill:F,iterations:b,iterationStart:k,iterationComposite:D,autoPlay:I,currentTime:T,startTime:j,playbackRate:C,onFinish:O,onCancel:S},t(a,Object.assign({},N)))}}export{i as createAnimatableComponent};