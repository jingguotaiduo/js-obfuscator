var a1051_0x337fdd=a1051_0x2fea;(function(_0x26464c,_0xaf0364){var _0x2e799f=a1051_0x2fea,_0x26b1fe=_0x26464c();while(!![]){try{var _0x391bf7=-parseInt(_0x2e799f(0xee))/0x1+parseInt(_0x2e799f(0xeb))/0x2+parseInt(_0x2e799f(0xea))/0x3*(parseInt(_0x2e799f(0x95))/0x4)+-parseInt(_0x2e799f(0x10b))/0x5+-parseInt(_0x2e799f(0xd5))/0x6*(parseInt(_0x2e799f(0x143))/0x7)+-parseInt(_0x2e799f(0xa0))/0x8+-parseInt(_0x2e799f(0xa8))/0x9*(-parseInt(_0x2e799f(0x111))/0xa);if(_0x391bf7===_0xaf0364)break;else _0x26b1fe['push'](_0x26b1fe['shift']());}catch(_0x273b4c){_0x26b1fe['push'](_0x26b1fe['shift']());}}}(a1051_0x289e,0x5e5ba));import a1051_0x346320 from'../../Core/Color.js';import a1051_0x56ad8f from'../../Core/defined.js';import a1051_0x11af5d from'../../Core/destroyObject.js';import a1051_0x54b430 from'../../Core/DeveloperError.js';import a1051_0x3b1c6b from'../getElement.js';import a1051_0x18c20a from'../subscribeAndEvaluate.js';var svgNS=a1051_0x337fdd(0xb4),xlinkNS='http://www.w3.org/1999/xlink',widgetForDrag,gradientEnabledColor0=a1051_0x346320[a1051_0x337fdd(0xcf)](a1051_0x337fdd(0xaf)),gradientEnabledColor1=a1051_0x346320[a1051_0x337fdd(0xcf)](a1051_0x337fdd(0x117)),gradientEnabledColor2=a1051_0x346320[a1051_0x337fdd(0xcf)](a1051_0x337fdd(0x12f)),gradientEnabledColor3=a1051_0x346320[a1051_0x337fdd(0xcf)]('rgba(255,255,255,0.086)'),gradientDisabledColor0=a1051_0x346320[a1051_0x337fdd(0xcf)](a1051_0x337fdd(0x125)),gradientDisabledColor1=a1051_0x346320[a1051_0x337fdd(0xcf)](a1051_0x337fdd(0xed)),gradientKnobColor=a1051_0x346320['fromCssColorString']('rgba(66,67,68,0.3)'),gradientPointerColor=a1051_0x346320['fromCssColorString']('rgba(0,0,0,0.5)');function getElementColor(_0x44038f){var _0x97e5e9=a1051_0x337fdd;return a1051_0x346320[_0x97e5e9(0xcf)](window['getComputedStyle'](_0x44038f)['getPropertyValue']('color'));}var svgIconsById={'animation_pathReset':{'tagName':a1051_0x337fdd(0xe8),'transform':a1051_0x337fdd(0x140),'d':'M24.316,5.318,9.833,13.682,9.833,5.5,5.5,5.5,5.5,25.5,9.833,25.5,9.833,17.318,24.316,25.682z'},'animation_pathPause':{'tagName':a1051_0x337fdd(0xe8),'transform':a1051_0x337fdd(0x140),'d':a1051_0x337fdd(0xff)},'animation_pathPlay':{'tagName':a1051_0x337fdd(0xe8),'transform':a1051_0x337fdd(0x140),'d':a1051_0x337fdd(0x148)},'animation_pathPlayReverse':{'tagName':a1051_0x337fdd(0xe8),'transform':a1051_0x337fdd(0xbb),'d':a1051_0x337fdd(0x148)},'animation_pathLoop':{'tagName':a1051_0x337fdd(0xe8),'transform':a1051_0x337fdd(0x140),'d':'M24.249,15.499c-0.009,4.832-3.918,8.741-8.75,8.75c-2.515,0-4.768-1.064-6.365-2.763l2.068-1.442l-7.901-3.703l0.744,8.694l2.193-1.529c2.244,2.594,5.562,4.242,9.26,4.242c6.767,0,12.249-5.482,12.249-12.249H24.249zM15.499,6.75c2.516,0,4.769,1.065,6.367,2.764l-2.068,1.443l7.901,3.701l-0.746-8.693l-2.192,1.529c-2.245-2.594-5.562-4.245-9.262-4.245C8.734,3.25,3.25,8.734,3.249,15.499H6.75C6.758,10.668,10.668,6.758,15.499,6.75z'},'animation_pathClock':{'tagName':'path','transform':a1051_0x337fdd(0x84),'d':a1051_0x337fdd(0x122)},'animation_pathWingButton':{'tagName':a1051_0x337fdd(0xe8),'d':a1051_0x337fdd(0xc2)},'animation_pathPointer':{'tagName':a1051_0x337fdd(0xe8),'d':a1051_0x337fdd(0xf4)},'animation_pathSwooshFX':{'tagName':a1051_0x337fdd(0xe8),'d':a1051_0x337fdd(0x89)}};function svgFromObject(_0x173f15){var _0x5c36f0=a1051_0x337fdd,_0x33d1df=document['createElementNS'](svgNS,_0x173f15[_0x5c36f0(0xe7)]);for(var _0x35b893 in _0x173f15){if(_0x173f15[_0x5c36f0(0x85)](_0x35b893)&&_0x35b893!==_0x5c36f0(0xe7)){if(_0x35b893==='children'){var _0x521be1,_0x34755b=_0x173f15[_0x5c36f0(0xe9)][_0x5c36f0(0xd3)];for(_0x521be1=0x0;_0x521be1<_0x34755b;++_0x521be1){_0x33d1df['appendChild'](svgFromObject(_0x173f15['children'][_0x521be1]));}}else{if(_0x35b893[_0x5c36f0(0xd4)](_0x5c36f0(0x9a))===0x0)_0x33d1df[_0x5c36f0(0x13b)](xlinkNS,_0x35b893['substring'](0x6),_0x173f15[_0x35b893]);else _0x35b893===_0x5c36f0(0x14f)?_0x33d1df[_0x5c36f0(0x14f)]=_0x173f15[_0x35b893]:_0x33d1df[_0x5c36f0(0x118)](_0x35b893,_0x173f15[_0x35b893]);}}}return _0x33d1df;}function svgText(_0x1912e2,_0x5e6dae,_0xf28da8){var _0x5bc06e=a1051_0x337fdd,_0x2ae1c1=document[_0x5bc06e(0x8d)](svgNS,'text');_0x2ae1c1[_0x5bc06e(0x118)]('x',_0x1912e2),_0x2ae1c1[_0x5bc06e(0x118)]('y',_0x5e6dae),_0x2ae1c1['setAttribute'](_0x5bc06e(0x137),_0x5bc06e(0xc6));var _0x4a14b5=document[_0x5bc06e(0x8d)](svgNS,_0x5bc06e(0x102));return _0x4a14b5[_0x5bc06e(0x14f)]=_0xf28da8,_0x2ae1c1[_0x5bc06e(0x129)](_0x4a14b5),_0x2ae1c1;}function setShuttleRingPointer(_0x31f4ac,_0x4bb741,_0x35f402){var _0x248d5f=a1051_0x337fdd;_0x31f4ac[_0x248d5f(0x118)](_0x248d5f(0xe3),_0x248d5f(0x8e)+_0x35f402+')'),_0x4bb741[_0x248d5f(0x118)](_0x248d5f(0xe3),_0x248d5f(0x9f)+_0x35f402+')');}var makeColorStringScratch=new a1051_0x346320();function makeColorString(_0x596861,_0x542970){var _0x544b96=a1051_0x337fdd,_0x443ce4=_0x542970[_0x544b96(0x136)],_0x319e47=0x1-_0x443ce4;return makeColorStringScratch[_0x544b96(0x10a)]=_0x596861[_0x544b96(0x10a)]*_0x319e47+_0x542970['red']*_0x443ce4,makeColorStringScratch['green']=_0x596861['green']*_0x319e47+_0x542970['green']*_0x443ce4,makeColorStringScratch[_0x544b96(0xab)]=_0x596861[_0x544b96(0xab)]*_0x319e47+_0x542970[_0x544b96(0xab)]*_0x443ce4,makeColorStringScratch[_0x544b96(0x147)]();}function rectButton(_0x137ee9,_0x33929a,_0x547164){var _0x5858ac=a1051_0x337fdd,_0x213914=svgIconsById[_0x547164],_0x394a31={'tagName':'g','class':'cesium-animation-rectButton','transform':_0x5858ac(0x131)+_0x137ee9+','+_0x33929a+')','children':[{'tagName':_0x5858ac(0xe5),'class':'cesium-animation-buttonGlow','width':0x20,'height':0x20,'rx':0x2,'ry':0x2},{'tagName':_0x5858ac(0xe5),'class':_0x5858ac(0x86),'width':0x20,'height':0x20,'rx':0x4,'ry':0x4},{'class':_0x5858ac(0x13c),'id':_0x547164,'tagName':_0x213914[_0x5858ac(0xe7)],'transform':_0x213914[_0x5858ac(0xe3)],'d':_0x213914['d']},{'tagName':_0x5858ac(0x100),'textContent':''}]};return svgFromObject(_0x394a31);}function wingButton(_0x10311d,_0x205dc1,_0x56b89b){var _0x5a2003=a1051_0x337fdd,_0x1f56bb=svgIconsById[_0x56b89b],_0x582246=svgIconsById[_0x5a2003(0x92)],_0x41e9cc={'tagName':'g','class':_0x5a2003(0xcc),'transform':'translate('+_0x10311d+','+_0x205dc1+')','children':[{'class':'cesium-animation-buttonGlow','id':_0x5a2003(0x92),'tagName':_0x582246[_0x5a2003(0xe7)],'d':_0x582246['d']},{'class':_0x5a2003(0x86),'id':_0x5a2003(0x92),'tagName':_0x582246[_0x5a2003(0xe7)],'d':_0x582246['d']},{'class':_0x5a2003(0x13c),'id':_0x56b89b,'tagName':_0x1f56bb['tagName'],'transform':_0x1f56bb[_0x5a2003(0xe3)],'d':_0x1f56bb['d']},{'tagName':_0x5a2003(0x100),'textContent':''}]};return svgFromObject(_0x41e9cc);}function setShuttleRingFromMouseOrTouch(_0x65ae0d,_0x1722bc){var _0x278a8e=a1051_0x337fdd,_0x40f585=_0x65ae0d['_viewModel'],_0x50b8f9=_0x40f585['shuttleRingDragging'];if(_0x50b8f9&&widgetForDrag!==_0x65ae0d)return;if(_0x1722bc[_0x278a8e(0x11a)]===_0x278a8e(0xa2)||_0x50b8f9&&_0x1722bc[_0x278a8e(0x11a)]===_0x278a8e(0x126)||_0x1722bc['type']===_0x278a8e(0x132)&&_0x1722bc['touches']['length']===0x1||_0x50b8f9&&_0x1722bc['type']===_0x278a8e(0xa9)&&_0x1722bc['touches'][_0x278a8e(0xd3)]===0x1){var _0x4f006f=_0x65ae0d[_0x278a8e(0xd0)],_0x12ecc7=_0x65ae0d[_0x278a8e(0x134)],_0x5ee937=_0x65ae0d[_0x278a8e(0x123)],_0x27a7d6=_0x5ee937[_0x278a8e(0x120)](),_0x217425,_0x5c0eb3;_0x1722bc[_0x278a8e(0x11a)]===_0x278a8e(0x132)||_0x1722bc[_0x278a8e(0x11a)]==='touchmove'?(_0x217425=_0x1722bc[_0x278a8e(0xb1)][0x0][_0x278a8e(0x9b)],_0x5c0eb3=_0x1722bc[_0x278a8e(0xb1)][0x0][_0x278a8e(0xc7)]):(_0x217425=_0x1722bc['clientX'],_0x5c0eb3=_0x1722bc[_0x278a8e(0xc7)]);if(!_0x50b8f9&&(_0x217425>_0x27a7d6[_0x278a8e(0x108)]||_0x217425<_0x27a7d6['left']||_0x5c0eb3<_0x27a7d6[_0x278a8e(0xdc)]||_0x5c0eb3>_0x27a7d6['bottom']))return;var _0x145c9f=_0x65ae0d['_shuttleRingPointer']['getBoundingClientRect'](),_0x37b14b=_0x217425-_0x4f006f-_0x27a7d6['left'],_0x5018b8=_0x5c0eb3-_0x12ecc7-_0x27a7d6[_0x278a8e(0xdc)],_0x23f465=Math['atan2'](_0x5018b8,_0x37b14b)*0xb4/Math['PI']+0x5a;_0x23f465>0xb4&&(_0x23f465-=0x168);var _0x374a1b=_0x40f585[_0x278a8e(0xe0)];if(_0x50b8f9||_0x217425<_0x145c9f[_0x278a8e(0x108)]&&_0x217425>_0x145c9f[_0x278a8e(0x114)]&&_0x5c0eb3>_0x145c9f[_0x278a8e(0xdc)]&&_0x5c0eb3<_0x145c9f['bottom'])widgetForDrag=_0x65ae0d,_0x40f585[_0x278a8e(0xb5)]=!![],_0x40f585['shuttleRingAngle']=_0x23f465;else{if(_0x23f465<_0x374a1b)_0x40f585[_0x278a8e(0x11e)]();else _0x23f465>_0x374a1b&&_0x40f585[_0x278a8e(0xb6)]();}_0x1722bc[_0x278a8e(0x9e)]();}else _0x65ae0d===widgetForDrag&&(widgetForDrag=undefined),_0x40f585[_0x278a8e(0xb5)]=![];}function a1051_0x289e(){var _0x4ceb7d=['style','animation_buttonToggled','rgba(143,191,255,0.216)','setAttribute','tooltip','type','dispose','resize','75%','slower','cesium-animation-buttonDisabled','getBoundingClientRect','_topG','M15.5,2.374C8.251,2.375,2.376,8.251,2.374,15.5C2.376,22.748,8.251,28.623,15.5,28.627c7.249-0.004,13.124-5.879,13.125-13.127C28.624,8.251,22.749,2.375,15.5,2.374zM15.5,25.623C9.909,25.615,5.385,21.09,5.375,15.5C5.385,9.909,9.909,5.384,15.5,5.374c5.59,0.01,10.115,4.535,10.124,10.125C25.615,21.09,21.091,25.615,15.5,25.623zM8.625,15.5c-0.001-0.552-0.448-0.999-1.001-1c-0.553,0-1,0.448-1,1c0,0.553,0.449,1,1,1C8.176,16.5,8.624,16.053,8.625,15.5zM8.179,18.572c-0.478,0.277-0.642,0.889-0.365,1.367c0.275,0.479,0.889,0.641,1.365,0.365c0.479-0.275,0.643-0.887,0.367-1.367C9.27,18.461,8.658,18.297,8.179,18.572zM9.18,10.696c-0.479-0.276-1.09-0.112-1.366,0.366s-0.111,1.09,0.365,1.366c0.479,0.276,1.09,0.113,1.367-0.366C9.821,11.584,9.657,10.973,9.18,10.696zM22.822,12.428c0.478-0.275,0.643-0.888,0.366-1.366c-0.275-0.478-0.89-0.642-1.366-0.366c-0.479,0.278-0.642,0.89-0.366,1.367C21.732,12.54,22.344,12.705,22.822,12.428zM12.062,21.455c-0.478-0.275-1.089-0.111-1.366,0.367c-0.275,0.479-0.111,1.09,0.366,1.365c0.478,0.277,1.091,0.111,1.365-0.365C12.704,22.344,12.54,21.732,12.062,21.455zM12.062,9.545c0.479-0.276,0.642-0.888,0.366-1.366c-0.276-0.478-0.888-0.642-1.366-0.366s-0.642,0.888-0.366,1.366C10.973,9.658,11.584,9.822,12.062,9.545zM22.823,18.572c-0.48-0.275-1.092-0.111-1.367,0.365c-0.275,0.479-0.112,1.092,0.367,1.367c0.477,0.275,1.089,0.113,1.365-0.365C23.464,19.461,23.3,18.848,22.823,18.572zM19.938,7.813c-0.477-0.276-1.091-0.111-1.365,0.366c-0.275,0.48-0.111,1.091,0.366,1.367s1.089,0.112,1.366-0.366C20.581,8.702,20.418,8.089,19.938,7.813zM23.378,14.5c-0.554,0.002-1.001,0.45-1.001,1c0.001,0.552,0.448,1,1.001,1c0.551,0,1-0.447,1-1C24.378,14.949,23.929,14.5,23.378,14.5zM15.501,6.624c-0.552,0-1,0.448-1,1l-0.466,7.343l-3.004,1.96c-0.478,0.277-0.642,0.889-0.365,1.365c0.275,0.479,0.889,0.643,1.365,0.367l3.305-1.676C15.39,16.99,15.444,17,15.501,17c0.828,0,1.5-0.671,1.5-1.5l-0.5-7.876C16.501,7.072,16.053,6.624,15.501,6.624zM15.501,22.377c-0.552,0-1,0.447-1,1s0.448,1,1,1s1-0.447,1-1S16.053,22.377,15.501,22.377zM18.939,21.455c-0.479,0.277-0.643,0.889-0.366,1.367c0.275,0.477,0.888,0.643,1.366,0.365c0.478-0.275,0.642-0.889,0.366-1.365C20.028,21.344,19.417,21.18,18.939,21.455z','_svgNode','canExecute','rgba(255,255,255,0.267)','mousemove','95%','_mouseCallback','appendChild','-50%','.cesium-animation-rectButton\x20.cesium-animation-buttonGlow\x20{\x20filter:\x20url(#animation_blurred);\x20}.cesium-animation-rectButton\x20.cesium-animation-buttonMain\x20{\x20fill:\x20url(#animation_buttonNormal);\x20}.cesium-animation-buttonToggled\x20.cesium-animation-buttonMain\x20{\x20fill:\x20url(#animation_buttonToggled);\x20}.cesium-animation-rectButton:hover\x20.cesium-animation-buttonMain\x20{\x20fill:\x20url(#animation_buttonHovered);\x20}.cesium-animation-buttonDisabled\x20.cesium-animation-buttonMain\x20{\x20fill:\x20url(#animation_buttonDisabled);\x20}.cesium-animation-shuttleRingG\x20.cesium-animation-shuttleRingSwoosh\x20{\x20fill:\x20url(#animation_shuttleRingSwooshGradient);\x20}.cesium-animation-shuttleRingG:hover\x20.cesium-animation-shuttleRingSwoosh\x20{\x20fill:\x20url(#animation_shuttleRingSwooshHovered);\x20}.cesium-animation-shuttleRingPointer\x20{\x20fill:\x20url(#animation_shuttleRingPointerGradient);\x20}.cesium-animation-shuttleRingPausePointer\x20{\x20fill:\x20url(#animation_shuttleRingPointerPaused);\x20}.cesium-animation-knobOuter\x20{\x20fill:\x20url(#animation_knobOuter);\x20}.cesium-animation-knobInner\x20{\x20fill:\x20url(#animation_knobInner);\x20}','playRealtimeViewModel','toggled','12%','rgba(153,197,255,0.098)','cssText','translate(','touchstart','filter','_centerY','90%','alpha','class','_pauseSVG','applyThemeChanges','cesium-animation-shuttleRingSwoosh','setAttributeNS','cesium-animation-buttonPath','_shuttleRingPointer','timeLabel','feGaussianBlur','translate(16,16)\x20scale(0.85)\x20translate(-16,-16)','cesium-animation-shuttleRingPointer','_themeSwoosh','133KWaiGZ','_playForwardSVG','innerHTML','200%','toCssColorString','M6.684,25.682L24.316,15.5L6.684,5.318V25.682z','_themeDisabled','_container','command','animation_shuttleRingPointerGradient','50%','click','textContent','_themeSelect','animation_shuttleRingPointerPaused','85%','translate(16,16)\x20scale(0.85)\x20translate(-16,-15.5)','hasOwnProperty','cesium-animation-buttonMain','animation_pathPointer','cesium-animation-theme','m\x2085,0\x20c\x200,16.617\x20-4.813944,35.356\x20-13.131081,48.4508\x20h\x206.099803\x20c\x208.317138,-13.0948\x2013.13322,-28.5955\x2013.13322,-45.2124\x200,-46.94483\x20-38.402714,-85.00262\x20-85.7743869,-85.00262\x20-1.0218522,0\x20-2.0373001,0.0241\x20-3.0506131,0.0589\x2045.958443,1.59437\x2082.723058,35.77285\x2082.723058,81.70532\x20z','_lastHeight','_themeKnob','_viewModel','createElementNS','translate(100,100)\x20rotate(','viewBox','circle','_knobTime','animation_pathWingButton','cesium-animation-blank','setTooltip','2164iaOKeJ','touchcancel','_knobStatus','touchend','animation_shuttleRingSwooshGradient','xlink:','clientX','linearGradient','div','preventDefault','rotate(','3228160bFAclS','head','mousedown','<div\x20class=\x22cesium-animation-themeNormal\x22></div><div\x20class=\x22cesium-animation-themeHover\x22></div><div\x20class=\x22cesium-animation-themeSelect\x22></div><div\x20class=\x22cesium-animation-themeDisabled\x22></div><div\x20class=\x22cesium-animation-themeKnob\x22></div><div\x20class=\x22cesium-animation-themePointer\x22></div><div\x20class=\x22cesium-animation-themeSwoosh\x22></div><div\x20class=\x22cesium-animation-themeSwooshHover\x22></div>','60%','animation_pathPause','animation_buttonHovered','cesium-animation-rectButton\x20cesium-animation-buttonToggled','18lukAke','touchmove','body','blue','_themeSwooshHover','ownerDocument','animation_knobInner','rgba(247,250,255,0.384)','svg:svg','touches','_toggled','20%','http://www.w3.org/2000/svg','shuttleRingDragging','faster','animation_buttonDisabled','isDestroyed','http://www.w3.org/2000/xmlns/','pauseViewModel','translate(16,16)\x20scale(-0.85,0.85)\x20translate(-16,-16)','destroy','setToggled','clientHeight','100%','_theme','setEnabled','m\x204.5,0.5\x20c\x20-2.216,0\x20-4,1.784\x20-4,4\x20l\x200,24\x20c\x200,2.216\x201.784,4\x204,4\x20l\x2013.71875,0\x20C\x2022.478584,27.272785\x2027.273681,22.511272\x2032.5,18.25\x20l\x200,-13.75\x20c\x200,-2.216\x20-1.784,-4\x20-4,-4\x20l\x20-24,0\x20z','_clickFunction','svgElement','defineProperties','cesium-animation-svgText','clientY','contains','playReverseViewModel','width:\x20','cesium-animation-knobOuter','cesium-animation-rectButton','animation_pathClock','_playReverseSVG','fromCssColorString','_centerX','#CCC','max','length','indexOf','236154ObPktG','40%','81%','multiplierLabel','_observer','46%','_lastWidth','top','mouseup','insertBefore','_subscriptions','shuttleRingAngle','_shuttleRingSwooshG','cesium-animation-knobInner','transform','translate(100,97)\x20scale(-1,1)','rect','animation_knobOuter','tagName','path','children','2073WFLLXB','622540yPhROQ','className','rgba(255,255,255,0)','489203GJrxXR','removeChild','_enabled','height','_realtimeSVG','clientWidth','M-15,-65,-15,-55,15,-55,15,-65,0,-95z','childNodes','_knobDate','prototype','disconnect','stop','#555','SourceGraphic','_themeNormal','animation_pathSwooshFX','removeEventListener','M13,5.5,7.5,5.5,7.5,25.5,13,25.5zM24.5,5.5,19,5.5,19,25.5,24.5,25.5z','title','addEventListener','tspan','animation_pathPlayReverse','container\x20is\x20required.','_knobOuter','_defsElement','cesium-animation-shuttleRingG','right','width','red','2089535lQhIwW','_themePointer','observe','xmlns:xlink','_shuttleRingBackPanel','createElement','8799200jwxwZk','px;\x20position:\x20absolute;\x20bottom:\x200;\x20left:\x200;\x20overflow:\x20hidden;','_themeHover','left'];a1051_0x289e=function(){return _0x4ceb7d;};return a1051_0x289e();}function SvgButton(_0x188ee6,_0x460606){var _0xdfbcc6=a1051_0x337fdd;this[_0xdfbcc6(0x8c)]=_0x460606,this[_0xdfbcc6(0xc4)]=_0x188ee6,this[_0xdfbcc6(0xf0)]=undefined,this['_toggled']=undefined;var _0x305df0=this;this[_0xdfbcc6(0xc3)]=function(){var _0x39409e=_0xdfbcc6,_0x4fa839=_0x305df0[_0x39409e(0x8c)][_0x39409e(0x14b)];_0x4fa839[_0x39409e(0x124)]&&_0x4fa839();},_0x188ee6['addEventListener']('click',this[_0xdfbcc6(0xc3)],!![]),this[_0xdfbcc6(0xdf)]=[a1051_0x18c20a(_0x460606,'toggled',this[_0xdfbcc6(0xbd)],this),a1051_0x18c20a(_0x460606,_0xdfbcc6(0x119),this[_0xdfbcc6(0x94)],this),a1051_0x18c20a(_0x460606['command'],_0xdfbcc6(0x124),this[_0xdfbcc6(0xc1)],this)];}SvgButton[a1051_0x337fdd(0xf7)][a1051_0x337fdd(0xbc)]=function(){var _0x40ec25=a1051_0x337fdd;this[_0x40ec25(0xc4)][_0x40ec25(0xfe)](_0x40ec25(0x14e),this[_0x40ec25(0xc3)],!![]);var _0x4e9f84=this[_0x40ec25(0xdf)];for(var _0x286e14=0x0,_0x727c55=_0x4e9f84[_0x40ec25(0xd3)];_0x286e14<_0x727c55;_0x286e14++){_0x4e9f84[_0x286e14][_0x40ec25(0x11b)]();}a1051_0x11af5d(this);},SvgButton[a1051_0x337fdd(0xf7)][a1051_0x337fdd(0xb8)]=function(){return![];},SvgButton[a1051_0x337fdd(0xf7)][a1051_0x337fdd(0xc1)]=function(_0x2d13f1){var _0x177154=a1051_0x337fdd;if(this[_0x177154(0xf0)]!==_0x2d13f1){this[_0x177154(0xf0)]=_0x2d13f1;if(!_0x2d13f1){this[_0x177154(0xc4)]['setAttribute']('class',_0x177154(0x11f));return;}if(this[_0x177154(0xb2)]){this[_0x177154(0xc4)][_0x177154(0x118)](_0x177154(0x137),_0x177154(0xa7));return;}this[_0x177154(0xc4)][_0x177154(0x118)](_0x177154(0x137),_0x177154(0xcc));}},SvgButton[a1051_0x337fdd(0xf7)][a1051_0x337fdd(0xbd)]=function(_0x49f0b5){var _0x2e2fa5=a1051_0x337fdd;this[_0x2e2fa5(0xb2)]!==_0x49f0b5&&(this[_0x2e2fa5(0xb2)]=_0x49f0b5,this[_0x2e2fa5(0xf0)]&&(_0x49f0b5?this[_0x2e2fa5(0xc4)]['setAttribute'](_0x2e2fa5(0x137),'cesium-animation-rectButton\x20cesium-animation-buttonToggled'):this[_0x2e2fa5(0xc4)][_0x2e2fa5(0x118)](_0x2e2fa5(0x137),_0x2e2fa5(0xcc))));},SvgButton[a1051_0x337fdd(0xf7)][a1051_0x337fdd(0x94)]=function(_0x3d7680){var _0x2ddfec=a1051_0x337fdd;this[_0x2ddfec(0xc4)]['getElementsByTagName'](_0x2ddfec(0x100))[0x0][_0x2ddfec(0x14f)]=_0x3d7680;};function a1051_0x2fea(_0x116c0b,_0x3ea3c5){var _0x289ee8=a1051_0x289e();return a1051_0x2fea=function(_0x2fea60,_0x2da7ba){_0x2fea60=_0x2fea60-0x83;var _0x5c88f4=_0x289ee8[_0x2fea60];return _0x5c88f4;},a1051_0x2fea(_0x116c0b,_0x3ea3c5);}function Animation(_0x499dcb,_0xd5dc8d){var _0x5c6953=a1051_0x337fdd;if(!a1051_0x56ad8f(_0x499dcb))throw new a1051_0x54b430(_0x5c6953(0x104));if(!a1051_0x56ad8f(_0xd5dc8d))throw new a1051_0x54b430('viewModel\x20is\x20required.');_0x499dcb=a1051_0x3b1c6b(_0x499dcb),this[_0x5c6953(0x8c)]=_0xd5dc8d,this[_0x5c6953(0x14a)]=_0x499dcb,this[_0x5c6953(0xd0)]=0x0,this[_0x5c6953(0x134)]=0x0,this[_0x5c6953(0x106)]=undefined,this[_0x5c6953(0x123)]=undefined,this[_0x5c6953(0x121)]=undefined,this[_0x5c6953(0x8a)]=undefined,this['_lastWidth']=undefined;var _0x21573d=_0x499dcb[_0x5c6953(0xad)],_0x575104=document['createElement'](_0x5c6953(0x115));_0x575104[_0x5c6953(0x14f)]=_0x5c6953(0x12b),_0x21573d[_0x5c6953(0xa1)][_0x5c6953(0xde)](_0x575104,_0x21573d['head']['childNodes'][0x0]);var _0x5b38ee=document[_0x5c6953(0x110)](_0x5c6953(0x9d));_0x5b38ee[_0x5c6953(0xec)]=_0x5c6953(0x88),_0x5b38ee[_0x5c6953(0x145)]=_0x5c6953(0xa3),this[_0x5c6953(0xc0)]=_0x5b38ee,this[_0x5c6953(0xfc)]=_0x5b38ee[_0x5c6953(0xf5)][0x0],this['_themeHover']=_0x5b38ee[_0x5c6953(0xf5)][0x1],this[_0x5c6953(0x150)]=_0x5b38ee['childNodes'][0x2],this['_themeDisabled']=_0x5b38ee[_0x5c6953(0xf5)][0x3],this['_themeKnob']=_0x5b38ee[_0x5c6953(0xf5)][0x4],this['_themePointer']=_0x5b38ee['childNodes'][0x5],this[_0x5c6953(0x142)]=_0x5b38ee[_0x5c6953(0xf5)][0x6],this[_0x5c6953(0xac)]=_0x5b38ee[_0x5c6953(0xf5)][0x7];var _0x300d4c=document['createElementNS'](svgNS,_0x5c6953(0xb0));this[_0x5c6953(0x123)]=_0x300d4c,_0x300d4c[_0x5c6953(0x13b)](_0x5c6953(0xb9),_0x5c6953(0x10e),xlinkNS);var _0x508618=document[_0x5c6953(0x8d)](svgNS,'g');this[_0x5c6953(0x121)]=_0x508618,this[_0x5c6953(0xf2)]=new SvgButton(wingButton(0x3,0x4,_0x5c6953(0xcd)),_0xd5dc8d[_0x5c6953(0x12c)]),this[_0x5c6953(0xce)]=new SvgButton(rectButton(0x2c,0x63,_0x5c6953(0x103)),_0xd5dc8d[_0x5c6953(0xc9)]),this[_0x5c6953(0x144)]=new SvgButton(rectButton(0x7c,0x63,'animation_pathPlay'),_0xd5dc8d['playForwardViewModel']),this[_0x5c6953(0x138)]=new SvgButton(rectButton(0x54,0x63,_0x5c6953(0xa5)),_0xd5dc8d[_0x5c6953(0xba)]);var _0xba5e29=document[_0x5c6953(0x8d)](svgNS,'g');_0xba5e29['appendChild'](this[_0x5c6953(0xf2)][_0x5c6953(0xc4)]),_0xba5e29[_0x5c6953(0x129)](this[_0x5c6953(0xce)]['svgElement']),_0xba5e29[_0x5c6953(0x129)](this[_0x5c6953(0x144)][_0x5c6953(0xc4)]),_0xba5e29[_0x5c6953(0x129)](this['_pauseSVG'][_0x5c6953(0xc4)]);var _0x37728a=svgFromObject({'tagName':_0x5c6953(0x90),'class':'cesium-animation-shuttleRingBack','cx':0x64,'cy':0x64,'r':0x63});this[_0x5c6953(0x10f)]=_0x37728a;var _0x17ec4f=svgIconsById['animation_pathSwooshFX'],_0x4c1041=svgIconsById[_0x5c6953(0x87)],_0x5d8b60=svgFromObject({'tagName':'g','class':_0x5c6953(0x13a),'children':[{'tagName':_0x17ec4f['tagName'],'transform':_0x5c6953(0xe4),'id':_0x5c6953(0xfd),'d':_0x17ec4f['d']},{'tagName':_0x17ec4f[_0x5c6953(0xe7)],'transform':'translate(100,97)','id':_0x5c6953(0xfd),'d':_0x17ec4f['d']},{'tagName':'line','x1':0x64,'y1':0x8,'x2':0x64,'y2':0x16}]});this[_0x5c6953(0xe1)]=_0x5d8b60,this[_0x5c6953(0x13d)]=svgFromObject({'class':'cesium-animation-shuttleRingPointer','id':_0x5c6953(0x87),'tagName':_0x4c1041[_0x5c6953(0xe7)],'d':_0x4c1041['d']});var _0x5f5989=svgFromObject({'tagName':'g','transform':'translate(100,100)'});this[_0x5c6953(0x105)]=svgFromObject({'tagName':_0x5c6953(0x90),'class':_0x5c6953(0xcb),'cx':0x0,'cy':0x0,'r':0x47});var _0x2ae941=0x3d,_0x453c1b=svgFromObject({'tagName':_0x5c6953(0x90),'class':_0x5c6953(0xe2),'cx':0x0,'cy':0x0,'r':_0x2ae941});this[_0x5c6953(0xf6)]=svgText(0x0,-0x18,''),this[_0x5c6953(0x91)]=svgText(0x0,-0x7,''),this[_0x5c6953(0x97)]=svgText(0x0,-0x29,'');var _0x158aef=svgFromObject({'tagName':'circle','class':_0x5c6953(0x93),'cx':0x0,'cy':0x0,'r':_0x2ae941}),_0x46e122=document[_0x5c6953(0x8d)](svgNS,'g');_0x46e122[_0x5c6953(0x118)](_0x5c6953(0x137),_0x5c6953(0x107)),_0x499dcb['appendChild'](_0x5b38ee),_0x508618[_0x5c6953(0x129)](_0x46e122),_0x508618[_0x5c6953(0x129)](_0x5f5989),_0x508618[_0x5c6953(0x129)](_0xba5e29),_0x46e122[_0x5c6953(0x129)](_0x37728a),_0x46e122[_0x5c6953(0x129)](_0x5d8b60),_0x46e122[_0x5c6953(0x129)](this[_0x5c6953(0x13d)]),_0x5f5989[_0x5c6953(0x129)](this[_0x5c6953(0x105)]),_0x5f5989[_0x5c6953(0x129)](_0x453c1b),_0x5f5989[_0x5c6953(0x129)](this[_0x5c6953(0xf6)]),_0x5f5989[_0x5c6953(0x129)](this[_0x5c6953(0x91)]),_0x5f5989[_0x5c6953(0x129)](this[_0x5c6953(0x97)]),_0x5f5989[_0x5c6953(0x129)](_0x158aef),_0x300d4c[_0x5c6953(0x129)](_0x508618),_0x499dcb[_0x5c6953(0x129)](_0x300d4c);var _0x13736b=this;function _0x2c90be(_0xffaff6){setShuttleRingFromMouseOrTouch(_0x13736b,_0xffaff6);}this[_0x5c6953(0x128)]=_0x2c90be,_0x37728a[_0x5c6953(0x101)](_0x5c6953(0xa2),_0x2c90be,!![]),_0x37728a[_0x5c6953(0x101)](_0x5c6953(0x132),_0x2c90be,!![]),_0x5d8b60['addEventListener']('mousedown',_0x2c90be,!![]),_0x5d8b60[_0x5c6953(0x101)](_0x5c6953(0x132),_0x2c90be,!![]),_0x21573d[_0x5c6953(0x101)](_0x5c6953(0x126),_0x2c90be,!![]),_0x21573d[_0x5c6953(0x101)](_0x5c6953(0xa9),_0x2c90be,!![]),_0x21573d['addEventListener'](_0x5c6953(0xdd),_0x2c90be,!![]),_0x21573d[_0x5c6953(0x101)]('touchend',_0x2c90be,!![]),_0x21573d[_0x5c6953(0x101)](_0x5c6953(0x96),_0x2c90be,!![]),this[_0x5c6953(0x13d)][_0x5c6953(0x101)](_0x5c6953(0xa2),_0x2c90be,!![]),this[_0x5c6953(0x13d)]['addEventListener'](_0x5c6953(0x132),_0x2c90be,!![]),this['_knobOuter'][_0x5c6953(0x101)](_0x5c6953(0xa2),_0x2c90be,!![]),this[_0x5c6953(0x105)][_0x5c6953(0x101)](_0x5c6953(0x132),_0x2c90be,!![]);var _0x3b6cbc=this[_0x5c6953(0x91)]['childNodes'][0x0],_0x41bf29=this['_knobDate'][_0x5c6953(0xf5)][0x0],_0x3a6999=this[_0x5c6953(0x97)][_0x5c6953(0xf5)][0x0],_0x1d57ad;this[_0x5c6953(0xdf)]=[a1051_0x18c20a(_0xd5dc8d[_0x5c6953(0xba)],_0x5c6953(0x12d),function(_0x4b571a){var _0x46151c=_0x5c6953;_0x1d57ad!==_0x4b571a&&(_0x1d57ad=_0x4b571a,_0x1d57ad?_0x13736b[_0x46151c(0x13d)]['setAttribute']('class','cesium-animation-shuttleRingPausePointer'):_0x13736b['_shuttleRingPointer'][_0x46151c(0x118)](_0x46151c(0x137),_0x46151c(0x141)));}),a1051_0x18c20a(_0xd5dc8d,'shuttleRingAngle',function(_0x167836){var _0x1543cc=_0x5c6953;setShuttleRingPointer(_0x13736b['_shuttleRingPointer'],_0x13736b[_0x1543cc(0x105)],_0x167836);}),a1051_0x18c20a(_0xd5dc8d,'dateLabel',function(_0x440cac){var _0x3d2279=_0x5c6953;_0x41bf29[_0x3d2279(0x14f)]!==_0x440cac&&(_0x41bf29[_0x3d2279(0x14f)]=_0x440cac);}),a1051_0x18c20a(_0xd5dc8d,_0x5c6953(0x13e),function(_0x4071d8){var _0x361486=_0x5c6953;_0x3b6cbc[_0x361486(0x14f)]!==_0x4071d8&&(_0x3b6cbc[_0x361486(0x14f)]=_0x4071d8);}),a1051_0x18c20a(_0xd5dc8d,_0x5c6953(0xd8),function(_0xa1cc5a){var _0x108a13=_0x5c6953;_0x3a6999[_0x108a13(0x14f)]!==_0xa1cc5a&&(_0x3a6999[_0x108a13(0x14f)]=_0xa1cc5a);})],this[_0x5c6953(0x139)](),this[_0x5c6953(0x11c)]();}Object[a1051_0x337fdd(0xc5)](Animation['prototype'],{'container':{'get':function(){var _0x52f3de=a1051_0x337fdd;return this[_0x52f3de(0x14a)];}},'viewModel':{'get':function(){return this['_viewModel'];}}}),Animation[a1051_0x337fdd(0xf7)]['isDestroyed']=function(){return![];},Animation[a1051_0x337fdd(0xf7)]['destroy']=function(){var _0x4bcdd2=a1051_0x337fdd;a1051_0x56ad8f(this[_0x4bcdd2(0xd9)])&&(this['_observer'][_0x4bcdd2(0xf8)](),this[_0x4bcdd2(0xd9)]=undefined);var _0x53e069=this[_0x4bcdd2(0x14a)][_0x4bcdd2(0xad)],_0x4d3586=this[_0x4bcdd2(0x128)];this['_shuttleRingBackPanel'][_0x4bcdd2(0xfe)](_0x4bcdd2(0xa2),_0x4d3586,!![]),this[_0x4bcdd2(0x10f)][_0x4bcdd2(0xfe)](_0x4bcdd2(0x132),_0x4d3586,!![]),this['_shuttleRingSwooshG'][_0x4bcdd2(0xfe)](_0x4bcdd2(0xa2),_0x4d3586,!![]),this[_0x4bcdd2(0xe1)]['removeEventListener'](_0x4bcdd2(0x132),_0x4d3586,!![]),_0x53e069[_0x4bcdd2(0xfe)](_0x4bcdd2(0x126),_0x4d3586,!![]),_0x53e069[_0x4bcdd2(0xfe)]('touchmove',_0x4d3586,!![]),_0x53e069['removeEventListener'](_0x4bcdd2(0xdd),_0x4d3586,!![]),_0x53e069[_0x4bcdd2(0xfe)](_0x4bcdd2(0x98),_0x4d3586,!![]),_0x53e069[_0x4bcdd2(0xfe)](_0x4bcdd2(0x96),_0x4d3586,!![]),this[_0x4bcdd2(0x13d)]['removeEventListener'](_0x4bcdd2(0xa2),_0x4d3586,!![]),this['_shuttleRingPointer']['removeEventListener']('touchstart',_0x4d3586,!![]),this[_0x4bcdd2(0x105)]['removeEventListener'](_0x4bcdd2(0xa2),_0x4d3586,!![]),this[_0x4bcdd2(0x105)][_0x4bcdd2(0xfe)](_0x4bcdd2(0x132),_0x4d3586,!![]),this[_0x4bcdd2(0x14a)]['removeChild'](this[_0x4bcdd2(0x123)]),this[_0x4bcdd2(0x14a)][_0x4bcdd2(0xef)](this[_0x4bcdd2(0xc0)]),this[_0x4bcdd2(0xf2)][_0x4bcdd2(0xbc)](),this[_0x4bcdd2(0xce)][_0x4bcdd2(0xbc)](),this[_0x4bcdd2(0x144)][_0x4bcdd2(0xbc)](),this[_0x4bcdd2(0x138)][_0x4bcdd2(0xbc)]();var _0x4ecd1f=this['_subscriptions'];for(var _0x3219a5=0x0,_0x165c2f=_0x4ecd1f[_0x4bcdd2(0xd3)];_0x3219a5<_0x165c2f;_0x3219a5++){_0x4ecd1f[_0x3219a5]['dispose']();}return a1051_0x11af5d(this);},Animation['prototype']['resize']=function(){var _0xa7c440=a1051_0x337fdd,_0x18fd3a=this[_0xa7c440(0x14a)][_0xa7c440(0xf3)],_0x57ab2d=this['_container'][_0xa7c440(0xbe)];if(_0x18fd3a===this[_0xa7c440(0xdb)]&&_0x57ab2d===this[_0xa7c440(0x8a)])return;var _0x2d4a7a=this[_0xa7c440(0x123)],_0x4bcffb=0xc8,_0x3abb22=0x84,_0x16c597=_0x18fd3a,_0x2f9e0c=_0x57ab2d;if(_0x18fd3a===0x0&&_0x57ab2d===0x0)_0x16c597=_0x4bcffb,_0x2f9e0c=_0x3abb22;else{if(_0x18fd3a===0x0)_0x2f9e0c=_0x57ab2d,_0x16c597=_0x4bcffb*(_0x57ab2d/_0x3abb22);else _0x57ab2d===0x0&&(_0x16c597=_0x18fd3a,_0x2f9e0c=_0x3abb22*(_0x18fd3a/_0x4bcffb));}var _0x5830a5=_0x16c597/_0x4bcffb,_0x36bbae=_0x2f9e0c/_0x3abb22;_0x2d4a7a[_0xa7c440(0x115)][_0xa7c440(0x130)]=_0xa7c440(0xca)+_0x16c597+'px;\x20height:\x20'+_0x2f9e0c+_0xa7c440(0x112),_0x2d4a7a[_0xa7c440(0x118)](_0xa7c440(0x109),_0x16c597),_0x2d4a7a['setAttribute'](_0xa7c440(0xf1),_0x2f9e0c),_0x2d4a7a[_0xa7c440(0x118)](_0xa7c440(0x8f),'0\x200\x20'+_0x16c597+'\x20'+_0x2f9e0c),this[_0xa7c440(0x121)][_0xa7c440(0x118)]('transform','scale('+_0x5830a5+','+_0x36bbae+')'),this[_0xa7c440(0xd0)]=Math[_0xa7c440(0xd2)](0x1,0x64*_0x5830a5),this['_centerY']=Math[_0xa7c440(0xd2)](0x1,0x64*_0x36bbae),this[_0xa7c440(0x8a)]=_0x18fd3a,this[_0xa7c440(0xdb)]=_0x57ab2d;},Animation[a1051_0x337fdd(0xf7)][a1051_0x337fdd(0x139)]=function(){var _0x46e8a9=a1051_0x337fdd,_0x1066e7=this['_container'][_0x46e8a9(0xad)];if(!_0x1066e7[_0x46e8a9(0xaa)][_0x46e8a9(0xc8)](this[_0x46e8a9(0x14a)])){if(a1051_0x56ad8f(this[_0x46e8a9(0xd9)]))return;var _0x1e68dc=this;_0x1e68dc[_0x46e8a9(0xd9)]=new MutationObserver(function(){var _0x210e14=_0x46e8a9;_0x1066e7[_0x210e14(0xaa)]['contains'](_0x1e68dc[_0x210e14(0x14a)])&&(_0x1e68dc['_observer'][_0x210e14(0xf8)](),_0x1e68dc[_0x210e14(0xd9)]=undefined,_0x1e68dc[_0x210e14(0x139)]());}),_0x1e68dc['_observer'][_0x46e8a9(0x10d)](_0x1066e7,{'childList':!![],'subtree':!![]});return;}var _0x5effb3=getElementColor(this[_0x46e8a9(0xfc)]),_0x2978fe=getElementColor(this[_0x46e8a9(0x113)]),_0x227a05=getElementColor(this['_themeSelect']),_0x2df59d=getElementColor(this[_0x46e8a9(0x149)]),_0x31f76c=getElementColor(this[_0x46e8a9(0x8b)]),_0x5884db=getElementColor(this[_0x46e8a9(0x10c)]),_0x58d445=getElementColor(this[_0x46e8a9(0x142)]),_0x446a33=getElementColor(this[_0x46e8a9(0xac)]),_0x1e5499=svgFromObject({'tagName':'defs','children':[{'id':'animation_buttonNormal','tagName':_0x46e8a9(0x9c),'x1':'50%','y1':'0%','x2':_0x46e8a9(0x14d),'y2':_0x46e8a9(0xbf),'children':[{'tagName':_0x46e8a9(0xf9),'offset':'0%','stop-color':makeColorString(_0x5effb3,gradientEnabledColor0)},{'tagName':_0x46e8a9(0xf9),'offset':_0x46e8a9(0x12e),'stop-color':makeColorString(_0x5effb3,gradientEnabledColor1)},{'tagName':'stop','offset':_0x46e8a9(0xda),'stop-color':makeColorString(_0x5effb3,gradientEnabledColor2)},{'tagName':_0x46e8a9(0xf9),'offset':'81%','stop-color':makeColorString(_0x5effb3,gradientEnabledColor3)}]},{'id':_0x46e8a9(0xa6),'tagName':'linearGradient','x1':_0x46e8a9(0x14d),'y1':'0%','x2':'50%','y2':_0x46e8a9(0xbf),'children':[{'tagName':'stop','offset':'0%','stop-color':makeColorString(_0x2978fe,gradientEnabledColor0)},{'tagName':_0x46e8a9(0xf9),'offset':'12%','stop-color':makeColorString(_0x2978fe,gradientEnabledColor1)},{'tagName':_0x46e8a9(0xf9),'offset':_0x46e8a9(0xda),'stop-color':makeColorString(_0x2978fe,gradientEnabledColor2)},{'tagName':'stop','offset':_0x46e8a9(0xd7),'stop-color':makeColorString(_0x2978fe,gradientEnabledColor3)}]},{'id':_0x46e8a9(0x116),'tagName':_0x46e8a9(0x9c),'x1':_0x46e8a9(0x14d),'y1':'0%','x2':_0x46e8a9(0x14d),'y2':'100%','children':[{'tagName':'stop','offset':'0%','stop-color':makeColorString(_0x227a05,gradientEnabledColor0)},{'tagName':_0x46e8a9(0xf9),'offset':_0x46e8a9(0x12e),'stop-color':makeColorString(_0x227a05,gradientEnabledColor1)},{'tagName':_0x46e8a9(0xf9),'offset':_0x46e8a9(0xda),'stop-color':makeColorString(_0x227a05,gradientEnabledColor2)},{'tagName':_0x46e8a9(0xf9),'offset':_0x46e8a9(0xd7),'stop-color':makeColorString(_0x227a05,gradientEnabledColor3)}]},{'id':_0x46e8a9(0xb7),'tagName':_0x46e8a9(0x9c),'x1':_0x46e8a9(0x14d),'y1':'0%','x2':'50%','y2':_0x46e8a9(0xbf),'children':[{'tagName':'stop','offset':'0%','stop-color':makeColorString(_0x2df59d,gradientDisabledColor0)},{'tagName':_0x46e8a9(0xf9),'offset':_0x46e8a9(0x11d),'stop-color':makeColorString(_0x2df59d,gradientDisabledColor1)}]},{'id':'animation_blurred','tagName':_0x46e8a9(0x133),'width':_0x46e8a9(0x146),'height':_0x46e8a9(0x146),'x':_0x46e8a9(0x12a),'y':_0x46e8a9(0x12a),'children':[{'tagName':_0x46e8a9(0x13f),'stdDeviation':0x4,'in':_0x46e8a9(0xfb)}]},{'id':_0x46e8a9(0x99),'tagName':'linearGradient','x1':_0x46e8a9(0x14d),'y1':'0%','x2':_0x46e8a9(0x14d),'y2':_0x46e8a9(0xbf),'children':[{'tagName':'stop','offset':'0%','stop-opacity':0.2,'stop-color':_0x58d445['toCssColorString']()},{'tagName':_0x46e8a9(0xf9),'offset':_0x46e8a9(0x83),'stop-opacity':0.85,'stop-color':_0x58d445[_0x46e8a9(0x147)]()},{'tagName':_0x46e8a9(0xf9),'offset':'95%','stop-opacity':0.05,'stop-color':_0x58d445[_0x46e8a9(0x147)]()}]},{'id':'animation_shuttleRingSwooshHovered','tagName':_0x46e8a9(0x9c),'x1':_0x46e8a9(0x14d),'y1':'0%','x2':_0x46e8a9(0x14d),'y2':_0x46e8a9(0xbf),'children':[{'tagName':'stop','offset':'0%','stop-opacity':0.2,'stop-color':_0x446a33[_0x46e8a9(0x147)]()},{'tagName':_0x46e8a9(0xf9),'offset':_0x46e8a9(0x83),'stop-opacity':0.85,'stop-color':_0x446a33[_0x46e8a9(0x147)]()},{'tagName':'stop','offset':_0x46e8a9(0x127),'stop-opacity':0.05,'stop-color':_0x446a33['toCssColorString']()}]},{'id':_0x46e8a9(0x14c),'tagName':_0x46e8a9(0x9c),'x1':'0%','y1':_0x46e8a9(0x14d),'x2':'100%','y2':'50%','children':[{'tagName':'stop','offset':'0%','stop-color':_0x5884db[_0x46e8a9(0x147)]()},{'tagName':_0x46e8a9(0xf9),'offset':_0x46e8a9(0xd6),'stop-color':_0x5884db['toCssColorString']()},{'tagName':'stop','offset':_0x46e8a9(0xa4),'stop-color':makeColorString(_0x5884db,gradientPointerColor)},{'tagName':_0x46e8a9(0xf9),'offset':_0x46e8a9(0xbf),'stop-color':makeColorString(_0x5884db,gradientPointerColor)}]},{'id':_0x46e8a9(0x151),'tagName':_0x46e8a9(0x9c),'x1':'0%','y1':'50%','x2':_0x46e8a9(0xbf),'y2':_0x46e8a9(0x14d),'children':[{'tagName':'stop','offset':'0%','stop-color':'#CCC'},{'tagName':_0x46e8a9(0xf9),'offset':_0x46e8a9(0xd6),'stop-color':_0x46e8a9(0xd1)},{'tagName':_0x46e8a9(0xf9),'offset':_0x46e8a9(0xa4),'stop-color':_0x46e8a9(0xfa)},{'tagName':'stop','offset':'100%','stop-color':_0x46e8a9(0xfa)}]},{'id':_0x46e8a9(0xe6),'tagName':'linearGradient','x1':_0x46e8a9(0xb3),'y1':'0%','x2':'90%','y2':_0x46e8a9(0xbf),'children':[{'tagName':_0x46e8a9(0xf9),'offset':'5%','stop-color':makeColorString(_0x31f76c,gradientEnabledColor0)},{'tagName':_0x46e8a9(0xf9),'offset':_0x46e8a9(0xa4),'stop-color':makeColorString(_0x31f76c,gradientKnobColor)},{'tagName':_0x46e8a9(0xf9),'offset':_0x46e8a9(0x83),'stop-color':makeColorString(_0x31f76c,gradientEnabledColor1)}]},{'id':_0x46e8a9(0xae),'tagName':_0x46e8a9(0x9c),'x1':_0x46e8a9(0xb3),'y1':'0%','x2':_0x46e8a9(0x135),'y2':'100%','children':[{'tagName':_0x46e8a9(0xf9),'offset':'5%','stop-color':makeColorString(_0x31f76c,gradientKnobColor)},{'tagName':'stop','offset':_0x46e8a9(0xa4),'stop-color':makeColorString(_0x31f76c,gradientEnabledColor0)},{'tagName':'stop','offset':_0x46e8a9(0x83),'stop-color':makeColorString(_0x31f76c,gradientEnabledColor3)}]}]});!a1051_0x56ad8f(this[_0x46e8a9(0x106)])?this['_svgNode'][_0x46e8a9(0x129)](_0x1e5499):this[_0x46e8a9(0x123)]['replaceChild'](_0x1e5499,this['_defsElement']),this[_0x46e8a9(0x106)]=_0x1e5499;};export default Animation;