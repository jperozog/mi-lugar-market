(this.webpackJsonpmilugarmarket=this.webpackJsonpmilugarmarket||[]).push([[0],{134:function(t,e,r){"use strict";r.r(e),r.d(e,"createSwipeBackGesture",(function(){return i}));var n=r(17),a=(r(29),r(43)),i=function(t,e,r,i,u){var c=t.ownerDocument.defaultView;return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:r,onMove:function(t){var e=t.deltaX/c.innerWidth;i(e)},onEnd:function(t){var e=t.deltaX,r=c.innerWidth,a=e/r,i=t.velocityX,o=r/2,s=i>=0&&(i>.2||t.deltaX>o),h=(s?1-a:a)*r,d=0;if(h>5){var l=h/Math.abs(i);d=Math.min(l,540)}u(s,a<=0?.01:Object(n.h)(0,a,.9999),d)}})}}}]);
//# sourceMappingURL=0.58c3147f.chunk.js.map