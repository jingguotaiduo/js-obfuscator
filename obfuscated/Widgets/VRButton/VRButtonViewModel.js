var a1098_0x370a7d=a1098_0x7f8a;(function(_0x5059b5,_0x58707c){var _0x26b564=a1098_0x7f8a,_0x4c2042=_0x5059b5();while(!![]){try{var _0x346758=-parseInt(_0x26b564(0xc7))/0x1+-parseInt(_0x26b564(0xc6))/0x2*(-parseInt(_0x26b564(0xb6))/0x3)+parseInt(_0x26b564(0xc8))/0x4*(parseInt(_0x26b564(0xa0))/0x5)+-parseInt(_0x26b564(0xa3))/0x6*(-parseInt(_0x26b564(0xb8))/0x7)+parseInt(_0x26b564(0xad))/0x8*(parseInt(_0x26b564(0xba))/0x9)+-parseInt(_0x26b564(0xb2))/0xa+-parseInt(_0x26b564(0xa9))/0xb*(parseInt(_0x26b564(0xca))/0xc);if(_0x346758===_0x58707c)break;else _0x4c2042['push'](_0x4c2042['shift']());}catch(_0x480ae0){_0x4c2042['push'](_0x4c2042['shift']());}}}(a1098_0x215b,0x76394));import a1098_0x109bb9 from'../../Core/defaultValue.js';import a1098_0x517c39 from'../../Core/defined.js';import a1098_0x3bd106 from'../../Core/destroyObject.js';import a1098_0x37e6c from'../../Core/DeveloperError.js';import a1098_0xa9cfd6 from'../../Core/EventHelper.js';import a1098_0x2ab1da from'../../Core/Fullscreen.js';import a1098_0x4c853f from'../../Core/OrthographicFrustum.js';import a1098_0x195983 from'../../ThirdParty/knockout.js';function a1098_0x215b(){var _0x530cec=['1103692tsctBB','695332SAWEHm','15152DQVXwF','observable','49512BnEABZ','msLockOrientation','removeEventListener','_vrElement','_command','mozLockOrientation','mozUnlockOrientation','defineProperty','changeEventName','orientation','add','enabled','isVREnabled','Enter\x20VR\x20mode','485iaMGiX','lock','isVRMode','63660JPepzL','Exit\x20VR\x20mode','isDestroyed','prototype','_locked','destroy','2266QUSGef','unlock','tooltip','frustum','6280aSCZEF','screen','useWebVR','lockOrientation','requestFullscreen','4110200lweRiI','_isOrthographic','defineProperties','_eventHelper','3DSfqor','camera','406LEQuqJ','unlockOrientation','10386yYhRpQ','_callback','msUnlockOrientation','exitFullscreen','enable','landscape','value\x20must\x20be\x20a\x20valid\x20Element.','fullscreen','removeAll','getObservable','addEventListener','_noSleep'];a1098_0x215b=function(){return _0x530cec;};return a1098_0x215b();}import a1098_0x163d14 from'../../ThirdParty/nosleep.js';import a1098_0x2bc629 from'../createCommand.js';import a1098_0x40a695 from'../getElement.js';function lockScreen(_0x5a5490){var _0x292041=a1098_0x7f8a,_0x374113=![],_0x301ed6=window[_0x292041(0xae)];if(a1098_0x517c39(_0x301ed6)){if(a1098_0x517c39(_0x301ed6[_0x292041(0xb0)]))_0x374113=_0x301ed6[_0x292041(0xb0)](_0x5a5490);else{if(a1098_0x517c39(_0x301ed6[_0x292041(0xcf)]))_0x374113=_0x301ed6[_0x292041(0xcf)](_0x5a5490);else{if(a1098_0x517c39(_0x301ed6[_0x292041(0xcb)]))_0x374113=_0x301ed6[_0x292041(0xcb)](_0x5a5490);else a1098_0x517c39(_0x301ed6[_0x292041(0xd3)]&&_0x301ed6[_0x292041(0xd3)][_0x292041(0xa1)])&&(_0x374113=_0x301ed6['orientation']['lock'](_0x5a5490));}}}return _0x374113;}function unlockScreen(){var _0xadf46b=a1098_0x7f8a,_0x25ea5b=window[_0xadf46b(0xae)];if(a1098_0x517c39(_0x25ea5b)){if(a1098_0x517c39(_0x25ea5b[_0xadf46b(0xb9)]))_0x25ea5b['unlockOrientation']();else{if(a1098_0x517c39(_0x25ea5b[_0xadf46b(0xd0)]))_0x25ea5b[_0xadf46b(0xd0)]();else{if(a1098_0x517c39(_0x25ea5b[_0xadf46b(0xbc)]))_0x25ea5b[_0xadf46b(0xbc)]();else a1098_0x517c39(_0x25ea5b[_0xadf46b(0xd3)]&&_0x25ea5b['orientation'][_0xadf46b(0xaa)])&&_0x25ea5b[_0xadf46b(0xd3)][_0xadf46b(0xaa)]();}}}}function toggleVR(_0x1c8604,_0x3c7105,_0x4581aa,_0x3d901b){var _0x2f50a4=a1098_0x7f8a;if(_0x3d901b())return;_0x4581aa()?(_0x3c7105[_0x2f50a4(0xaf)]=![],_0x1c8604[_0x2f50a4(0xa7)]&&(unlockScreen(),_0x1c8604[_0x2f50a4(0xa7)]=![]),_0x1c8604['_noSleep']['disable'](),a1098_0x2ab1da[_0x2f50a4(0xbd)](),_0x4581aa(![])):(!a1098_0x2ab1da[_0x2f50a4(0xc1)]&&a1098_0x2ab1da[_0x2f50a4(0xb1)](_0x1c8604[_0x2f50a4(0xcd)]),_0x1c8604[_0x2f50a4(0xc5)][_0x2f50a4(0xbe)](),!_0x1c8604['_locked']&&(_0x1c8604[_0x2f50a4(0xa7)]=lockScreen(_0x2f50a4(0xbf))),_0x3c7105[_0x2f50a4(0xaf)]=!![],_0x4581aa(!![]));}function a1098_0x7f8a(_0x11352a,_0x102b97){var _0x215be7=a1098_0x215b();return a1098_0x7f8a=function(_0x7f8a35,_0xb8eb90){_0x7f8a35=_0x7f8a35-0x9d;var _0x4f7705=_0x215be7[_0x7f8a35];return _0x4f7705;},a1098_0x7f8a(_0x11352a,_0x102b97);}function VRButtonViewModel(_0x4fefbb,_0x5f0766){var _0x1f36c5=a1098_0x7f8a;if(!a1098_0x517c39(_0x4fefbb))throw new a1098_0x37e6c('scene\x20is\x20required.');var _0x4c0bd0=this,_0x197a65=a1098_0x195983['observable'](a1098_0x2ab1da[_0x1f36c5(0x9d)]),_0xea906=a1098_0x195983[_0x1f36c5(0xc9)](![]);this[_0x1f36c5(0xa2)]=undefined,a1098_0x195983[_0x1f36c5(0xd1)](this,_0x1f36c5(0xa2),{'get':function(){return _0xea906();}}),this[_0x1f36c5(0x9e)]=undefined,a1098_0x195983[_0x1f36c5(0xd1)](this,'isVREnabled',{'get':function(){return _0x197a65();},'set':function(_0x422bec){var _0x4c2a4a=_0x1f36c5;_0x197a65(_0x422bec&&a1098_0x2ab1da[_0x4c2a4a(0x9d)]);}}),this[_0x1f36c5(0xab)]=undefined,a1098_0x195983[_0x1f36c5(0xd1)](this,'tooltip',function(){var _0xe3af70=_0x1f36c5;if(!_0x197a65())return'VR\x20mode\x20is\x20unavailable';return _0xea906()?_0xe3af70(0xa4):_0xe3af70(0x9f);});var _0x587e9a=a1098_0x195983[_0x1f36c5(0xc9)](![]);this['_isOrthographic']=undefined,a1098_0x195983[_0x1f36c5(0xd1)](this,_0x1f36c5(0xb3),{'get':function(){return _0x587e9a();}}),this[_0x1f36c5(0xb5)]=new a1098_0xa9cfd6(),this['_eventHelper'][_0x1f36c5(0xd4)](_0x4fefbb['preRender'],function(){var _0x4958ac=_0x1f36c5;_0x587e9a(_0x4fefbb[_0x4958ac(0xb7)][_0x4958ac(0xac)]instanceof a1098_0x4c853f);}),this[_0x1f36c5(0xa7)]=![],this[_0x1f36c5(0xc5)]=new a1098_0x163d14(),this[_0x1f36c5(0xce)]=a1098_0x2bc629(function(){toggleVR(_0x4c0bd0,_0x4fefbb,_0xea906,_0x587e9a);},a1098_0x195983[_0x1f36c5(0xc3)](this,'isVREnabled')),this[_0x1f36c5(0xcd)]=a1098_0x109bb9(a1098_0x40a695(_0x5f0766),document['body']),this['_callback']=function(){var _0x24c41b=_0x1f36c5;!a1098_0x2ab1da[_0x24c41b(0xc1)]&&_0xea906()&&(_0x4fefbb[_0x24c41b(0xaf)]=![],_0x4c0bd0[_0x24c41b(0xa7)]&&(unlockScreen(),_0x4c0bd0[_0x24c41b(0xa7)]=![]),_0x4c0bd0[_0x24c41b(0xc5)]['disable'](),_0xea906(![]));},document[_0x1f36c5(0xc4)](a1098_0x2ab1da[_0x1f36c5(0xd2)],this[_0x1f36c5(0xbb)]);}Object[a1098_0x370a7d(0xb4)](VRButtonViewModel[a1098_0x370a7d(0xa6)],{'vrElement':{'get':function(){var _0x4c5ce7=a1098_0x370a7d;return this[_0x4c5ce7(0xcd)];},'set':function(_0x69ba){var _0x1fad6=a1098_0x370a7d;if(!(_0x69ba instanceof Element))throw new a1098_0x37e6c(_0x1fad6(0xc0));this['_vrElement']=_0x69ba;}},'command':{'get':function(){var _0x57aa48=a1098_0x370a7d;return this[_0x57aa48(0xce)];}}}),VRButtonViewModel[a1098_0x370a7d(0xa6)][a1098_0x370a7d(0xa5)]=function(){return![];},VRButtonViewModel[a1098_0x370a7d(0xa6)][a1098_0x370a7d(0xa8)]=function(){var _0x321563=a1098_0x370a7d;this[_0x321563(0xb5)][_0x321563(0xc2)](),document[_0x321563(0xcc)](a1098_0x2ab1da[_0x321563(0xd2)],this[_0x321563(0xbb)]),a1098_0x3bd106(this);};export default VRButtonViewModel;