var a439_0x36071f=a439_0xfacd;(function(_0x391bab,_0x42e80d){var _0x3b3e83=a439_0xfacd,_0x45366b=_0x391bab();while(!![]){try{var _0x5a8576=parseInt(_0x3b3e83(0x1dd))/0x1*(parseInt(_0x3b3e83(0x1d5))/0x2)+-parseInt(_0x3b3e83(0x1d8))/0x3+parseInt(_0x3b3e83(0x1c5))/0x4+parseInt(_0x3b3e83(0x1f5))/0x5*(-parseInt(_0x3b3e83(0x1d4))/0x6)+-parseInt(_0x3b3e83(0x1e5))/0x7+parseInt(_0x3b3e83(0x1be))/0x8*(parseInt(_0x3b3e83(0x1f7))/0x9)+-parseInt(_0x3b3e83(0x1d0))/0xa;if(_0x5a8576===_0x42e80d)break;else _0x45366b['push'](_0x45366b['shift']());}catch(_0x5f26d2){_0x45366b['push'](_0x45366b['shift']());}}}(a439_0x5b50,0xe5b53));import a439_0x59600a from'../Core/Cartesian2.js';import a439_0x19c384 from'../Core/defined.js';function a439_0xfacd(_0x4ba145,_0x419ab3){var _0x5b5042=a439_0x5b50();return a439_0xfacd=function(_0xfacdf0,_0x16bde3){_0xfacdf0=_0xfacdf0-0x1ba;var _0x3398f9=_0x5b5042[_0xfacdf0];return _0x3398f9;},a439_0xfacd(_0x4ba145,_0x419ab3);}import a439_0x35e6ff from'../Core/destroyObject.js';import a439_0x589f0a from'../Core/DeveloperError.js';import a439_0x5a18f4 from'../Core/KeyboardEventModifier.js';import a439_0xedf076 from'../Core/Math.js';import a439_0x260983 from'../Core/ScreenSpaceEventHandler.js';import a439_0x1ffcb9 from'../Core/ScreenSpaceEventType.js';import a439_0x57af17 from'./CameraEventType.js';function getKey(_0x53a040,_0x3ac8b7){var _0x1e75e3=_0x53a040;return a439_0x19c384(_0x3ac8b7)&&(_0x1e75e3+='+'+_0x3ac8b7),_0x1e75e3;}function clonePinchMovement(_0x161a68,_0x5dc813){var _0x5f0b2e=a439_0xfacd;a439_0x59600a[_0x5f0b2e(0x1e1)](_0x161a68[_0x5f0b2e(0x1db)][_0x5f0b2e(0x1c4)],_0x5dc813[_0x5f0b2e(0x1db)]['startPosition']),a439_0x59600a['clone'](_0x161a68[_0x5f0b2e(0x1db)][_0x5f0b2e(0x1e8)],_0x5dc813['distance'][_0x5f0b2e(0x1e8)]),a439_0x59600a[_0x5f0b2e(0x1e1)](_0x161a68['angleAndHeight'][_0x5f0b2e(0x1c4)],_0x5dc813['angleAndHeight'][_0x5f0b2e(0x1c4)]),a439_0x59600a[_0x5f0b2e(0x1e1)](_0x161a68[_0x5f0b2e(0x1c1)][_0x5f0b2e(0x1e8)],_0x5dc813[_0x5f0b2e(0x1c1)]['endPosition']);}function listenToPinch(_0xf2745d,_0x3e1246,_0x4ea131){var _0x580c53=a439_0xfacd,_0x3cb0d5=getKey(a439_0x57af17[_0x580c53(0x1c2)],_0x3e1246),_0x45c1ae=_0xf2745d['_update'],_0xaca9f7=_0xf2745d[_0x580c53(0x1f4)],_0x43731d=_0xf2745d[_0x580c53(0x1ea)],_0x2fdea3=_0xf2745d[_0x580c53(0x1f3)],_0x53d482=_0xf2745d[_0x580c53(0x1c6)];_0x45c1ae[_0x3cb0d5]=!![],_0xaca9f7[_0x3cb0d5]=![],_0x43731d[_0x3cb0d5]=new a439_0x59600a();var _0xd5be68=_0xf2745d[_0x580c53(0x1f1)][_0x3cb0d5];!a439_0x19c384(_0xd5be68)&&(_0xd5be68=_0xf2745d[_0x580c53(0x1f1)][_0x3cb0d5]={}),_0xd5be68[_0x580c53(0x1db)]={'startPosition':new a439_0x59600a(),'endPosition':new a439_0x59600a()},_0xd5be68[_0x580c53(0x1c1)]={'startPosition':new a439_0x59600a(),'endPosition':new a439_0x59600a()},_0xd5be68['prevAngle']=0x0,_0xf2745d[_0x580c53(0x1cf)]['setInputAction'](function(_0x21c317){var _0xa2621c=_0x580c53;_0xf2745d['_buttonsDown']++,_0xaca9f7[_0x3cb0d5]=!![],_0x2fdea3[_0x3cb0d5]=new Date(),a439_0x59600a[_0xa2621c(0x1ca)](_0x21c317[_0xa2621c(0x1bd)],_0x21c317[_0xa2621c(0x1d6)],0.5,_0x43731d[_0x3cb0d5]);},a439_0x1ffcb9[_0x580c53(0x1e6)],_0x3e1246),_0xf2745d[_0x580c53(0x1cf)][_0x580c53(0x1da)](function(){var _0xc20eec=_0x580c53;_0xf2745d[_0xc20eec(0x1d7)]=Math[_0xc20eec(0x1ba)](_0xf2745d[_0xc20eec(0x1d7)]-0x1,0x0),_0xaca9f7[_0x3cb0d5]=![],_0x53d482[_0x3cb0d5]=new Date();},a439_0x1ffcb9[_0x580c53(0x1e7)],_0x3e1246),_0xf2745d['_eventHandler'][_0x580c53(0x1da)](function(_0x52f703){var _0x1077be=_0x580c53;if(_0xaca9f7[_0x3cb0d5]){!_0x45c1ae[_0x3cb0d5]?(a439_0x59600a[_0x1077be(0x1e1)](_0x52f703['distance'][_0x1077be(0x1e8)],_0xd5be68[_0x1077be(0x1db)][_0x1077be(0x1e8)]),a439_0x59600a[_0x1077be(0x1e1)](_0x52f703['angleAndHeight']['endPosition'],_0xd5be68['angleAndHeight'][_0x1077be(0x1e8)])):(clonePinchMovement(_0x52f703,_0xd5be68),_0x45c1ae[_0x3cb0d5]=![],_0xd5be68[_0x1077be(0x1d1)]=_0xd5be68[_0x1077be(0x1c1)][_0x1077be(0x1c4)]['x']);var _0x7bdb96=_0xd5be68['angleAndHeight'][_0x1077be(0x1e8)]['x'],_0xa6f705=_0xd5be68[_0x1077be(0x1d1)],_0x400c8d=Math['PI']*0x2;while(_0x7bdb96>=_0xa6f705+Math['PI']){_0x7bdb96-=_0x400c8d;}while(_0x7bdb96<_0xa6f705-Math['PI']){_0x7bdb96+=_0x400c8d;}_0xd5be68[_0x1077be(0x1c1)][_0x1077be(0x1e8)]['x']=-_0x7bdb96*_0x4ea131['clientWidth']/0xc,_0xd5be68[_0x1077be(0x1c1)][_0x1077be(0x1c4)]['x']=-_0xa6f705*_0x4ea131[_0x1077be(0x1e9)]/0xc;}},a439_0x1ffcb9['PINCH_MOVE'],_0x3e1246);}function a439_0x5b50(){var _0x176560=['5483VawXBO','MIDDLE_UP','RIGHT_UP','getButtonPressTime','clone','WHEEL','isMoving','LEFT_DOWN','5063072HNxcTX','PINCH_START','PINCH_END','endPosition','clientWidth','_eventStartPosition','getLastMovement','isDestroyed','prototype','_update','canvas\x20is\x20required.','_lastMovement','_movement','_currentMousePosition','_pressTime','_isDown','15160IaVqlp','toRadians','18xHgmED','max','getStartMousePosition','hasOwnProperty','position1','1349704TOTnVJ','RIGHT_DRAG','LEFT_DRAG','angleAndHeight','PINCH','SHIFT','startPosition','1942420OzmOOO','_releaseTime','CTRL','type\x20is\x20required.','valid','lerp','ZERO','getButtonReleaseTime','MIDDLE_DRAG','ALT','_eventHandler','4515210nUoQtW','prevAngle','destroy','MIDDLE_DOWN','18saiqpW','534RQTKlq','position2','_buttonsDown','486588aGSFsW','isButtonDown','setInputAction','distance','position'];a439_0x5b50=function(){return _0x176560;};return a439_0x5b50();}function listenToWheel(_0x286c6c,_0x4b8379){var _0x2c6c55=a439_0xfacd,_0x3e4eea=getKey(a439_0x57af17[_0x2c6c55(0x1e2)],_0x4b8379),_0x1f9f72=_0x286c6c[_0x2c6c55(0x1ee)];_0x1f9f72[_0x3e4eea]=!![];var _0x32bb20=_0x286c6c[_0x2c6c55(0x1f1)][_0x3e4eea];!a439_0x19c384(_0x32bb20)&&(_0x32bb20=_0x286c6c[_0x2c6c55(0x1f1)][_0x3e4eea]={}),_0x32bb20[_0x2c6c55(0x1c4)]=new a439_0x59600a(),_0x32bb20['endPosition']=new a439_0x59600a(),_0x286c6c[_0x2c6c55(0x1cf)]['setInputAction'](function(_0x443b01){var _0x11f20f=_0x2c6c55,_0x35f40e=0xf*a439_0xedf076[_0x11f20f(0x1f6)](_0x443b01);!_0x1f9f72[_0x3e4eea]?_0x32bb20[_0x11f20f(0x1e8)]['y']=_0x32bb20[_0x11f20f(0x1e8)]['y']+_0x35f40e:(a439_0x59600a[_0x11f20f(0x1e1)](a439_0x59600a[_0x11f20f(0x1cb)],_0x32bb20[_0x11f20f(0x1c4)]),_0x32bb20['endPosition']['x']=0x0,_0x32bb20['endPosition']['y']=_0x35f40e,_0x1f9f72[_0x3e4eea]=![]);},a439_0x1ffcb9['WHEEL'],_0x4b8379);}function listenMouseButtonDownUp(_0x48a4c0,_0x424a21,_0xd4a1dd){var _0x592616=a439_0xfacd,_0x2088ab=getKey(_0xd4a1dd,_0x424a21),_0x4643ac=_0x48a4c0[_0x592616(0x1f4)],_0x2f2c54=_0x48a4c0['_eventStartPosition'],_0xb85f41=_0x48a4c0[_0x592616(0x1f3)],_0x6c79e6=_0x48a4c0[_0x592616(0x1c6)];_0x4643ac[_0x2088ab]=![],_0x2f2c54[_0x2088ab]=new a439_0x59600a();var _0x10dc79=_0x48a4c0[_0x592616(0x1f0)][_0x2088ab];!a439_0x19c384(_0x10dc79)&&(_0x10dc79=_0x48a4c0['_lastMovement'][_0x2088ab]={'startPosition':new a439_0x59600a(),'endPosition':new a439_0x59600a(),'valid':![]});var _0xcc493,_0x2a4878;if(_0xd4a1dd===a439_0x57af17['LEFT_DRAG'])_0xcc493=a439_0x1ffcb9[_0x592616(0x1e4)],_0x2a4878=a439_0x1ffcb9['LEFT_UP'];else{if(_0xd4a1dd===a439_0x57af17[_0x592616(0x1bf)])_0xcc493=a439_0x1ffcb9['RIGHT_DOWN'],_0x2a4878=a439_0x1ffcb9[_0x592616(0x1df)];else _0xd4a1dd===a439_0x57af17[_0x592616(0x1cd)]&&(_0xcc493=a439_0x1ffcb9[_0x592616(0x1d3)],_0x2a4878=a439_0x1ffcb9[_0x592616(0x1de)]);}_0x48a4c0[_0x592616(0x1cf)]['setInputAction'](function(_0x4c2922){var _0x5e1d82=_0x592616;_0x48a4c0[_0x5e1d82(0x1d7)]++,_0x10dc79[_0x5e1d82(0x1c9)]=![],_0x4643ac[_0x2088ab]=!![],_0xb85f41[_0x2088ab]=new Date(),a439_0x59600a[_0x5e1d82(0x1e1)](_0x4c2922[_0x5e1d82(0x1dc)],_0x2f2c54[_0x2088ab]);},_0xcc493,_0x424a21),_0x48a4c0[_0x592616(0x1cf)][_0x592616(0x1da)](function(){_0x48a4c0['_buttonsDown']=Math['max'](_0x48a4c0['_buttonsDown']-0x1,0x0),_0x4643ac[_0x2088ab]=![],_0x6c79e6[_0x2088ab]=new Date();},_0x2a4878,_0x424a21);}function cloneMouseMovement(_0x18b54b,_0x7a2acd){var _0x89fff5=a439_0xfacd;a439_0x59600a[_0x89fff5(0x1e1)](_0x18b54b['startPosition'],_0x7a2acd[_0x89fff5(0x1c4)]),a439_0x59600a[_0x89fff5(0x1e1)](_0x18b54b['endPosition'],_0x7a2acd['endPosition']);}function listenMouseMove(_0x4d6c2c,_0x4814a9){var _0x449ea9=a439_0xfacd,_0x155978=_0x4d6c2c['_update'],_0x1524fb=_0x4d6c2c[_0x449ea9(0x1f1)],_0x6369d0=_0x4d6c2c[_0x449ea9(0x1f0)],_0x235baa=_0x4d6c2c[_0x449ea9(0x1f4)];for(var _0xd40e8d in a439_0x57af17){if(a439_0x57af17[_0x449ea9(0x1bc)](_0xd40e8d)){var _0x474ec6=a439_0x57af17[_0xd40e8d];if(a439_0x19c384(_0x474ec6)){var _0x1934c5=getKey(_0x474ec6,_0x4814a9);_0x155978[_0x1934c5]=!![],!a439_0x19c384(_0x4d6c2c[_0x449ea9(0x1f0)][_0x1934c5])&&(_0x4d6c2c['_lastMovement'][_0x1934c5]={'startPosition':new a439_0x59600a(),'endPosition':new a439_0x59600a(),'valid':![]}),!a439_0x19c384(_0x4d6c2c['_movement'][_0x1934c5])&&(_0x4d6c2c[_0x449ea9(0x1f1)][_0x1934c5]={'startPosition':new a439_0x59600a(),'endPosition':new a439_0x59600a()});}}}_0x4d6c2c[_0x449ea9(0x1cf)][_0x449ea9(0x1da)](function(_0x54953a){var _0xe68034=_0x449ea9;for(var _0x5168ab in a439_0x57af17){if(a439_0x57af17[_0xe68034(0x1bc)](_0x5168ab)){var _0x18e409=a439_0x57af17[_0x5168ab];if(a439_0x19c384(_0x18e409)){var _0x7f5ffb=getKey(_0x18e409,_0x4814a9);_0x235baa[_0x7f5ffb]&&(!_0x155978[_0x7f5ffb]?a439_0x59600a[_0xe68034(0x1e1)](_0x54953a[_0xe68034(0x1e8)],_0x1524fb[_0x7f5ffb][_0xe68034(0x1e8)]):(cloneMouseMovement(_0x1524fb[_0x7f5ffb],_0x6369d0[_0x7f5ffb]),_0x6369d0[_0x7f5ffb][_0xe68034(0x1c9)]=!![],cloneMouseMovement(_0x54953a,_0x1524fb[_0x7f5ffb]),_0x155978[_0x7f5ffb]=![]));}}}a439_0x59600a[_0xe68034(0x1e1)](_0x54953a[_0xe68034(0x1e8)],_0x4d6c2c['_currentMousePosition']);},a439_0x1ffcb9['MOUSE_MOVE'],_0x4814a9);}function CameraEventAggregator(_0x410039){var _0x2c2af9=a439_0xfacd;if(!a439_0x19c384(_0x410039))throw new a439_0x589f0a(_0x2c2af9(0x1ef));this['_eventHandler']=new a439_0x260983(_0x410039),this[_0x2c2af9(0x1ee)]={},this[_0x2c2af9(0x1f1)]={},this['_lastMovement']={},this[_0x2c2af9(0x1f4)]={},this[_0x2c2af9(0x1ea)]={},this['_pressTime']={},this[_0x2c2af9(0x1c6)]={},this[_0x2c2af9(0x1d7)]=0x0,this['_currentMousePosition']=new a439_0x59600a(),listenToWheel(this,undefined),listenToPinch(this,undefined,_0x410039),listenMouseButtonDownUp(this,undefined,a439_0x57af17['LEFT_DRAG']),listenMouseButtonDownUp(this,undefined,a439_0x57af17['RIGHT_DRAG']),listenMouseButtonDownUp(this,undefined,a439_0x57af17[_0x2c2af9(0x1cd)]),listenMouseMove(this,undefined);for(var _0x24151f in a439_0x5a18f4){if(a439_0x5a18f4[_0x2c2af9(0x1bc)](_0x24151f)){var _0x563681=a439_0x5a18f4[_0x24151f];a439_0x19c384(_0x563681)&&(listenToWheel(this,_0x563681),listenToPinch(this,_0x563681,_0x410039),listenMouseButtonDownUp(this,_0x563681,a439_0x57af17[_0x2c2af9(0x1c0)]),listenMouseButtonDownUp(this,_0x563681,a439_0x57af17[_0x2c2af9(0x1bf)]),listenMouseButtonDownUp(this,_0x563681,a439_0x57af17[_0x2c2af9(0x1cd)]),listenMouseMove(this,_0x563681));}}}Object['defineProperties'](CameraEventAggregator['prototype'],{'currentMousePosition':{'get':function(){return this['_currentMousePosition'];}},'anyButtonDown':{'get':function(){var _0xaffbef=a439_0xfacd,_0x981fd4=!this[_0xaffbef(0x1ee)][getKey(a439_0x57af17[_0xaffbef(0x1e2)])]||!this['_update'][getKey(a439_0x57af17['WHEEL'],a439_0x5a18f4[_0xaffbef(0x1c3)])]||!this[_0xaffbef(0x1ee)][getKey(a439_0x57af17[_0xaffbef(0x1e2)],a439_0x5a18f4[_0xaffbef(0x1c7)])]||!this[_0xaffbef(0x1ee)][getKey(a439_0x57af17[_0xaffbef(0x1e2)],a439_0x5a18f4[_0xaffbef(0x1ce)])];return this['_buttonsDown']>0x0||_0x981fd4;}}}),CameraEventAggregator['prototype'][a439_0x36071f(0x1e3)]=function(_0x301e13,_0x1810ab){var _0x34dd6d=a439_0x36071f;if(!a439_0x19c384(_0x301e13))throw new a439_0x589f0a(_0x34dd6d(0x1c8));var _0xe8db30=getKey(_0x301e13,_0x1810ab);return!this[_0x34dd6d(0x1ee)][_0xe8db30];},CameraEventAggregator[a439_0x36071f(0x1ed)]['getMovement']=function(_0x80223e,_0x2b808c){var _0x44e6de=a439_0x36071f;if(!a439_0x19c384(_0x80223e))throw new a439_0x589f0a(_0x44e6de(0x1c8));var _0x31c607=getKey(_0x80223e,_0x2b808c),_0x4a61a6=this[_0x44e6de(0x1f1)][_0x31c607];return _0x4a61a6;},CameraEventAggregator['prototype'][a439_0x36071f(0x1eb)]=function(_0x5bf4b9,_0x52d990){var _0xede019=a439_0x36071f;if(!a439_0x19c384(_0x5bf4b9))throw new a439_0x589f0a(_0xede019(0x1c8));var _0x516d85=getKey(_0x5bf4b9,_0x52d990),_0x67058=this[_0xede019(0x1f0)][_0x516d85];if(_0x67058[_0xede019(0x1c9)])return _0x67058;return undefined;},CameraEventAggregator[a439_0x36071f(0x1ed)][a439_0x36071f(0x1d9)]=function(_0x12235f,_0x2b50d5){var _0x5ee8c8=a439_0x36071f;if(!a439_0x19c384(_0x12235f))throw new a439_0x589f0a(_0x5ee8c8(0x1c8));var _0x34343d=getKey(_0x12235f,_0x2b50d5);return this['_isDown'][_0x34343d];},CameraEventAggregator[a439_0x36071f(0x1ed)][a439_0x36071f(0x1bb)]=function(_0x350bfa,_0x556efa){var _0x629fa8=a439_0x36071f;if(!a439_0x19c384(_0x350bfa))throw new a439_0x589f0a(_0x629fa8(0x1c8));if(_0x350bfa===a439_0x57af17[_0x629fa8(0x1e2)])return this[_0x629fa8(0x1f2)];var _0x1a5a49=getKey(_0x350bfa,_0x556efa);return this[_0x629fa8(0x1ea)][_0x1a5a49];},CameraEventAggregator[a439_0x36071f(0x1ed)][a439_0x36071f(0x1e0)]=function(_0x388355,_0x4048f9){var _0x2b6ff9=a439_0x36071f;if(!a439_0x19c384(_0x388355))throw new a439_0x589f0a(_0x2b6ff9(0x1c8));var _0x459161=getKey(_0x388355,_0x4048f9);return this['_pressTime'][_0x459161];},CameraEventAggregator[a439_0x36071f(0x1ed)][a439_0x36071f(0x1cc)]=function(_0x32b8e1,_0x2c5939){var _0x8d8fa2=a439_0x36071f;if(!a439_0x19c384(_0x32b8e1))throw new a439_0x589f0a(_0x8d8fa2(0x1c8));var _0x3508c3=getKey(_0x32b8e1,_0x2c5939);return this[_0x8d8fa2(0x1c6)][_0x3508c3];},CameraEventAggregator['prototype']['reset']=function(){var _0x51d19e=a439_0x36071f;for(var _0x6655 in this[_0x51d19e(0x1ee)]){this[_0x51d19e(0x1ee)]['hasOwnProperty'](_0x6655)&&(this[_0x51d19e(0x1ee)][_0x6655]=!![]);}},CameraEventAggregator[a439_0x36071f(0x1ed)][a439_0x36071f(0x1ec)]=function(){return![];},CameraEventAggregator[a439_0x36071f(0x1ed)][a439_0x36071f(0x1d2)]=function(){var _0x3c7d3d=a439_0x36071f;return this['_eventHandler']=this[_0x3c7d3d(0x1cf)]&&this[_0x3c7d3d(0x1cf)]['destroy'](),a439_0x35e6ff(this);};export default CameraEventAggregator;