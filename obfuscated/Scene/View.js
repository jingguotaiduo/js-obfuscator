function a772_0x9093(){var _0x4bc49b=['6828912HVFhWj','totalCommands','SCENE3D','isVisible','camera','viewport','_overlayCommandList','ceil','pickFramebuffer','useLogDepth','frustumSplits','nearToFarDistance2D','direction','occluder','passState','_computeCommandList','translucentTileClassification','equalsEpsilon','shadowState','raiseEvent','debugFrustumStatistics','NUMBER_OF_PASSES','sceneFramebuffer','2hvKQos','_useOIT','max','nearPlane','frustum','COMPUTE','clone','SCENE2D','_cameraMovedTime','abs','min','_commandExtents','frustumCommandsList','oit','EPSILON15','MAX_VALUE','4290444gRNxqM','executeInClosestFrustum','mode','directionWC','cullingVolume','pass','destroy','cameraEventWaitTime','computePlaneDistances','pow','debugShowFrustums','near','boundingVolume','start','stop','checkForCameraUpdates','frameState','indices','967135iAKwVd','30EWbXub','position','receiveShadows','transform','prototype','EPSILON2','length','2981850vPwFPL','planes','globeDepth','61677EMfzVO','2792931aLXAQS','4726169DKDAYm','right','log','push','multiplyByScalar','globeTranslucencyFramebuffer','moveEnd','GLOBE','pickDepthFramebuffer','command','pickDepths','4YugVLu','depthTexture','debugOverlappingFrustums','far','_cameraStartFired','commands','context'];a772_0x9093=function(){return _0x4bc49b;};return a772_0x9093();}var a772_0x17b78e=a772_0x4879;(function(_0x5a7039,_0xc94f05){var _0x68d978=a772_0x4879,_0xb2066a=_0x5a7039();while(!![]){try{var _0x19363b=-parseInt(_0x68d978(0x133))/0x1*(-parseInt(_0x68d978(0x111))/0x2)+-parseInt(_0x68d978(0x13f))/0x3*(-parseInt(_0x68d978(0x14b))/0x4)+-parseInt(_0x68d978(0x13b))/0x5+-parseInt(_0x68d978(0x121))/0x6+-parseInt(_0x68d978(0x140))/0x7+parseInt(_0x68d978(0x152))/0x8+-parseInt(_0x68d978(0x13e))/0x9*(-parseInt(_0x68d978(0x134))/0xa);if(_0x19363b===_0xc94f05)break;else _0xb2066a['push'](_0xb2066a['shift']());}catch(_0x428a37){_0xb2066a['push'](_0xb2066a['shift']());}}}(a772_0x9093,0xbfd0a));import a772_0x4d2983 from'../Core/BoundingRectangle.js';import a772_0x3d4748 from'../Core/Cartesian3.js';import a772_0x439225 from'../Core/CullingVolume.js';import a772_0x5e51fa from'../Core/defined.js';import a772_0x1a07af from'../Core/getTimestamp.js';import a772_0x59dbf0 from'../Core/Interval.js';import a772_0x18e87b from'../Core/Math.js';import a772_0x54ab6f from'../Core/Matrix4.js';import a772_0x294bcb from'../Renderer/ClearCommand.js';import a772_0x982f30 from'../Renderer/Pass.js';import a772_0x3240f3 from'../Renderer/PassState.js';import a772_0x2149b9 from'./Camera.js';import a772_0x3fc3da from'./FrustumCommands.js';import a772_0xa628e6 from'./GlobeDepth.js';import a772_0x5ac95f from'./GlobeTranslucencyFramebuffer.js';import a772_0x14e5cb from'./OIT.js';import a772_0x4621f3 from'./PickDepthFramebuffer.js';import a772_0x2353ee from'./PickFramebuffer.js';import a772_0x15e4d7 from'./SceneFramebuffer.js';import a772_0x21773b from'./SceneMode.js';import a772_0x5c1336 from'./ShadowMap.js';import a772_0x1260be from'./TranslucentTileClassification.js';function CommandExtent(){var _0x2e846c=a772_0x4879;this[_0x2e846c(0x149)]=undefined,this[_0x2e846c(0x12c)]=undefined,this[_0x2e846c(0x14e)]=undefined;}function View(_0x116e5a,_0x428297,_0x529ce5){var _0x5188eb=a772_0x4879,_0x3b4d15=_0x116e5a[_0x5188eb(0x151)],_0x616894;_0x3b4d15[_0x5188eb(0x14c)]&&(_0x616894=new a772_0xa628e6());var _0x4cd457;_0x116e5a[_0x5188eb(0x112)]&&_0x3b4d15['depthTexture']&&(_0x4cd457=new a772_0x14e5cb(_0x3b4d15));var _0x1c41c1=new a772_0x3240f3(_0x3b4d15);_0x1c41c1['viewport']=a772_0x4d2983[_0x5188eb(0x117)](_0x529ce5),this[_0x5188eb(0x156)]=_0x428297,this['_cameraClone']=a772_0x2149b9[_0x5188eb(0x117)](_0x428297),this[_0x5188eb(0x14f)]=![],this[_0x5188eb(0x119)]=undefined,this[_0x5188eb(0x157)]=_0x529ce5,this[_0x5188eb(0x160)]=_0x1c41c1,this[_0x5188eb(0x15a)]=new a772_0x2353ee(_0x3b4d15),this['pickDepthFramebuffer']=new a772_0x4621f3(),this['sceneFramebuffer']=new a772_0x15e4d7(),this[_0x5188eb(0x13d)]=_0x616894,this[_0x5188eb(0x145)]=new a772_0x5ac95f(),this[_0x5188eb(0x11e)]=_0x4cd457,this[_0x5188eb(0x162)]=new a772_0x1260be(_0x3b4d15),this[_0x5188eb(0x14a)]=[],this[_0x5188eb(0x11d)]=[],this[_0x5188eb(0x166)]=undefined,this[_0x5188eb(0x11c)]=[];}var scratchPosition0=new a772_0x3d4748(),scratchPosition1=new a772_0x3d4748();function maxComponent(_0x13d87d,_0x38cf58){var _0x35b6fd=a772_0x4879,_0x1193c4=Math[_0x35b6fd(0x113)](Math[_0x35b6fd(0x11a)](_0x13d87d['x']),Math[_0x35b6fd(0x11a)](_0x38cf58['x'])),_0x1c9202=Math['max'](Math[_0x35b6fd(0x11a)](_0x13d87d['y']),Math[_0x35b6fd(0x11a)](_0x38cf58['y'])),_0x1047f2=Math[_0x35b6fd(0x113)](Math[_0x35b6fd(0x11a)](_0x13d87d['z']),Math[_0x35b6fd(0x11a)](_0x38cf58['z']));return Math[_0x35b6fd(0x113)](Math['max'](_0x1193c4,_0x1c9202),_0x1047f2);}function cameraEqual(_0x3ab4b8,_0x32dfc3,_0x35a575){var _0x2cc54f=a772_0x4879,_0x30e255=0x1/Math['max'](0x1,maxComponent(_0x3ab4b8[_0x2cc54f(0x135)],_0x32dfc3[_0x2cc54f(0x135)]));return a772_0x3d4748[_0x2cc54f(0x144)](_0x3ab4b8[_0x2cc54f(0x135)],_0x30e255,scratchPosition0),a772_0x3d4748[_0x2cc54f(0x144)](_0x32dfc3[_0x2cc54f(0x135)],_0x30e255,scratchPosition1),a772_0x3d4748[_0x2cc54f(0x163)](scratchPosition0,scratchPosition1,_0x35a575)&&a772_0x3d4748[_0x2cc54f(0x163)](_0x3ab4b8[_0x2cc54f(0x15e)],_0x32dfc3[_0x2cc54f(0x15e)],_0x35a575)&&a772_0x3d4748[_0x2cc54f(0x163)](_0x3ab4b8['up'],_0x32dfc3['up'],_0x35a575)&&a772_0x3d4748[_0x2cc54f(0x163)](_0x3ab4b8[_0x2cc54f(0x141)],_0x32dfc3[_0x2cc54f(0x141)],_0x35a575)&&a772_0x54ab6f[_0x2cc54f(0x163)](_0x3ab4b8[_0x2cc54f(0x137)],_0x32dfc3[_0x2cc54f(0x137)],_0x35a575)&&_0x3ab4b8[_0x2cc54f(0x115)][_0x2cc54f(0x163)](_0x32dfc3['frustum'],_0x35a575);}View[a772_0x17b78e(0x138)][a772_0x17b78e(0x130)]=function(_0x2c231c){var _0x505649=a772_0x17b78e,_0x435df2=this[_0x505649(0x156)],_0x2a70f6=this['_cameraClone'];if(!cameraEqual(_0x435df2,_0x2a70f6,a772_0x18e87b[_0x505649(0x11f)]))return!this[_0x505649(0x14f)]&&(_0x435df2['moveStart'][_0x505649(0x165)](),this[_0x505649(0x14f)]=!![]),this[_0x505649(0x119)]=a772_0x1a07af(),a772_0x2149b9['clone'](_0x435df2,_0x2a70f6),!![];return this[_0x505649(0x14f)]&&a772_0x1a07af()-this[_0x505649(0x119)]>_0x2c231c[_0x505649(0x128)]&&(_0x435df2[_0x505649(0x146)][_0x505649(0x165)](),this[_0x505649(0x14f)]=![]),![];};function updateFrustums(_0x43a21c,_0xc85b28,_0x3044dd,_0x38b2c5){var _0x983dad=a772_0x17b78e,_0x56897b=_0xc85b28['frameState'],_0x409832=_0x56897b[_0x983dad(0x156)],_0x28e716=_0x56897b[_0x983dad(0x15b)]?_0xc85b28['logarithmicDepthFarToNearRatio']:_0xc85b28['farToNearRatio'],_0x12fd32=_0xc85b28[_0x983dad(0x123)]===a772_0x21773b[_0x983dad(0x118)],_0x395390=_0xc85b28['nearToFarDistance2D'];_0x38b2c5*=0x1+a772_0x18e87b[_0x983dad(0x139)],_0x3044dd=Math[_0x983dad(0x11b)](Math[_0x983dad(0x113)](_0x3044dd,_0x409832[_0x983dad(0x115)][_0x983dad(0x12c)]),_0x409832['frustum'][_0x983dad(0x14e)]),_0x38b2c5=Math[_0x983dad(0x113)](Math['min'](_0x38b2c5,_0x409832[_0x983dad(0x115)][_0x983dad(0x14e)]),_0x3044dd);var _0x863959;_0x12fd32?(_0x38b2c5=Math[_0x983dad(0x11b)](_0x38b2c5,_0x409832['position']['z']+_0xc85b28[_0x983dad(0x15d)]),_0x3044dd=Math[_0x983dad(0x11b)](_0x3044dd,_0x38b2c5),_0x863959=Math[_0x983dad(0x159)](Math[_0x983dad(0x113)](0x1,_0x38b2c5-_0x3044dd)/_0xc85b28['nearToFarDistance2D'])):_0x863959=Math['ceil'](Math[_0x983dad(0x142)](_0x38b2c5/_0x3044dd)/Math[_0x983dad(0x142)](_0x28e716));var _0x1aa3cb=_0x43a21c[_0x983dad(0x11d)];_0x1aa3cb['length']=_0x863959;for(var _0x4d966c=0x0;_0x4d966c<_0x863959;++_0x4d966c){var _0x1e38ef,_0x504a76;_0x12fd32?(_0x1e38ef=Math[_0x983dad(0x11b)](_0x38b2c5-_0x395390,_0x3044dd+_0x4d966c*_0x395390),_0x504a76=Math[_0x983dad(0x11b)](_0x38b2c5,_0x1e38ef+_0x395390)):(_0x1e38ef=Math[_0x983dad(0x113)](_0x3044dd,Math[_0x983dad(0x12a)](_0x28e716,_0x4d966c)*_0x3044dd),_0x504a76=Math[_0x983dad(0x11b)](_0x38b2c5,_0x28e716*_0x1e38ef));var _0xd32fc8=_0x1aa3cb[_0x4d966c];!a772_0x5e51fa(_0xd32fc8)?_0xd32fc8=_0x1aa3cb[_0x4d966c]=new a772_0x3fc3da(_0x1e38ef,_0x504a76):(_0xd32fc8['near']=_0x1e38ef,_0xd32fc8[_0x983dad(0x14e)]=_0x504a76);}}function insertIntoBin(_0x2d8a92,_0xa102a2,_0x394725,_0x1186e3,_0x5487e6){var _0x5c86ad=a772_0x17b78e;_0xa102a2[_0x5c86ad(0x12b)]&&(_0x394725[_0x5c86ad(0x14d)]=0x0);var _0x4b3ad4=_0x2d8a92[_0x5c86ad(0x11d)],_0x515201=_0x4b3ad4['length'];for(var _0x2269e9=0x0;_0x2269e9<_0x515201;++_0x2269e9){var _0x2219e5=_0x4b3ad4[_0x2269e9],_0x5da2a4=_0x2219e5['near'],_0x34fdd3=_0x2219e5[_0x5c86ad(0x14e)];if(_0x1186e3>_0x34fdd3)continue;if(_0x5487e6<_0x5da2a4)break;var _0x3f0ddd=_0x394725[_0x5c86ad(0x126)],_0x387e22=_0x2219e5[_0x5c86ad(0x132)][_0x3f0ddd]++;_0x2219e5[_0x5c86ad(0x150)][_0x3f0ddd][_0x387e22]=_0x394725;_0xa102a2[_0x5c86ad(0x12b)]&&(_0x394725[_0x5c86ad(0x14d)]|=0x1<<_0x2269e9);if(_0x394725[_0x5c86ad(0x122)])break;}if(_0xa102a2[_0x5c86ad(0x12b)]){var _0x2ad64e=_0x2d8a92[_0x5c86ad(0x166)]['commandsInFrustums'];_0x2ad64e[_0x394725[_0x5c86ad(0x14d)]]=a772_0x5e51fa(_0x2ad64e[_0x394725[_0x5c86ad(0x14d)]])?_0x2ad64e[_0x394725[_0x5c86ad(0x14d)]]+0x1:0x1,++_0x2d8a92[_0x5c86ad(0x166)][_0x5c86ad(0x153)];}_0xa102a2['updateDerivedCommands'](_0x394725);}var scratchCullingVolume=new a772_0x439225(),scratchNearFarInterval=new a772_0x59dbf0();View[a772_0x17b78e(0x138)]['createPotentiallyVisibleSet']=function(_0x5d09db){var _0x5576cc=a772_0x17b78e,_0x5be15f=_0x5d09db[_0x5576cc(0x131)],_0x20db09=_0x5be15f['camera'],_0x2a7c67=_0x20db09[_0x5576cc(0x124)],_0x4f5e60=_0x20db09['positionWC'],_0x48c746=_0x5d09db[_0x5576cc(0x161)],_0x5cfd09=_0x5d09db[_0x5576cc(0x158)],_0x30c482=_0x5be15f['commandList'];_0x5d09db[_0x5576cc(0x12b)]&&(this[_0x5576cc(0x166)]={'totalCommands':0x0,'commandsInFrustums':{}});var _0xd2e4b4=this[_0x5576cc(0x11d)],_0x21fd7a=_0xd2e4b4[_0x5576cc(0x13a)],_0x214280=a772_0x982f30[_0x5576cc(0x10f)];for(var _0x3d3db2=0x0;_0x3d3db2<_0x21fd7a;++_0x3d3db2){for(var _0xfabee7=0x0;_0xfabee7<_0x214280;++_0xfabee7){_0xd2e4b4[_0x3d3db2]['indices'][_0xfabee7]=0x0;}}_0x48c746[_0x5576cc(0x13a)]=0x0,_0x5cfd09['length']=0x0;var _0x499800=this[_0x5576cc(0x11c)],_0x4f52f2=_0x499800['length'],_0x165ba2=0x0,_0x5a6549=+Number[_0x5576cc(0x120)],_0x33a746=-Number[_0x5576cc(0x120)],_0x461154=_0x5be15f[_0x5576cc(0x164)]['shadowsEnabled'],_0x525cad=+Number[_0x5576cc(0x120)],_0x463cc3=-Number[_0x5576cc(0x120)],_0x5ddbd4=Number[_0x5576cc(0x120)],_0x2a28fd=_0x5be15f[_0x5576cc(0x123)]===a772_0x21773b[_0x5576cc(0x154)]?_0x5be15f[_0x5576cc(0x15f)]:undefined,_0x5c333c=_0x5be15f[_0x5576cc(0x125)],_0x58b999=scratchCullingVolume[_0x5576cc(0x13c)];for(var _0x2731dd=0x0;_0x2731dd<0x5;++_0x2731dd){_0x58b999[_0x2731dd]=_0x5c333c[_0x5576cc(0x13c)][_0x2731dd];}_0x5c333c=scratchCullingVolume;var _0x1c798d=_0x30c482['length'];for(var _0x201455=0x0;_0x201455<_0x1c798d;++_0x201455){var _0x1b0009=_0x30c482[_0x201455],_0xcc179e=_0x1b0009[_0x5576cc(0x126)];if(_0xcc179e===a772_0x982f30[_0x5576cc(0x116)])_0x48c746[_0x5576cc(0x143)](_0x1b0009);else{if(_0xcc179e===a772_0x982f30['OVERLAY'])_0x5cfd09[_0x5576cc(0x143)](_0x1b0009);else{var _0x20a5e5,_0x9b4746,_0x185e4f=_0x1b0009[_0x5576cc(0x12d)];if(a772_0x5e51fa(_0x185e4f)){if(!_0x5d09db[_0x5576cc(0x155)](_0x1b0009,_0x5c333c,_0x2a28fd))continue;var _0x43eceb=_0x185e4f[_0x5576cc(0x129)](_0x4f5e60,_0x2a7c67,scratchNearFarInterval);_0x20a5e5=_0x43eceb[_0x5576cc(0x12e)],_0x9b4746=_0x43eceb[_0x5576cc(0x12f)],_0x5a6549=Math[_0x5576cc(0x11b)](_0x5a6549,_0x20a5e5),_0x33a746=Math['max'](_0x33a746,_0x9b4746);if(_0x461154&&_0x1b0009[_0x5576cc(0x136)]&&_0x20a5e5<a772_0x5c1336['MAXIMUM_DISTANCE']&&!(_0xcc179e===a772_0x982f30['GLOBE']&&_0x20a5e5<-0x64&&_0x9b4746>0x64)){var _0x34fa93=_0x9b4746-_0x20a5e5;_0xcc179e!==a772_0x982f30[_0x5576cc(0x147)]&&_0x20a5e5<0x64&&(_0x5ddbd4=Math['min'](_0x5ddbd4,_0x34fa93)),_0x525cad=Math[_0x5576cc(0x11b)](_0x525cad,_0x20a5e5),_0x463cc3=Math[_0x5576cc(0x113)](_0x463cc3,_0x9b4746);}}else _0x1b0009 instanceof a772_0x294bcb?(_0x20a5e5=_0x20db09[_0x5576cc(0x115)]['near'],_0x9b4746=_0x20db09['frustum']['far']):(_0x20a5e5=_0x20db09['frustum'][_0x5576cc(0x12c)],_0x9b4746=_0x20db09[_0x5576cc(0x115)][_0x5576cc(0x14e)],_0x5a6549=Math['min'](_0x5a6549,_0x20a5e5),_0x33a746=Math['max'](_0x33a746,_0x9b4746));var _0x388502=_0x499800[_0x165ba2];!a772_0x5e51fa(_0x388502)&&(_0x388502=_0x499800[_0x165ba2]=new CommandExtent()),_0x388502[_0x5576cc(0x149)]=_0x1b0009,_0x388502[_0x5576cc(0x12c)]=_0x20a5e5,_0x388502[_0x5576cc(0x14e)]=_0x9b4746,_0x165ba2++;}}}_0x461154&&(_0x525cad=Math[_0x5576cc(0x11b)](Math['max'](_0x525cad,_0x20db09[_0x5576cc(0x115)][_0x5576cc(0x12c)]),_0x20db09['frustum']['far']),_0x463cc3=Math[_0x5576cc(0x113)](Math[_0x5576cc(0x11b)](_0x463cc3,_0x20db09[_0x5576cc(0x115)][_0x5576cc(0x14e)]),_0x525cad));_0x461154&&(_0x5be15f[_0x5576cc(0x164)][_0x5576cc(0x114)]=_0x525cad,_0x5be15f[_0x5576cc(0x164)]['farPlane']=_0x463cc3,_0x5be15f[_0x5576cc(0x164)]['closestObjectSize']=_0x5ddbd4);updateFrustums(this,_0x5d09db,_0x5a6549,_0x33a746);var _0x1d66fe,_0x19dde5;for(_0x1d66fe=0x0;_0x1d66fe<_0x165ba2;_0x1d66fe++){_0x19dde5=_0x499800[_0x1d66fe],insertIntoBin(this,_0x5d09db,_0x19dde5[_0x5576cc(0x149)],_0x19dde5[_0x5576cc(0x12c)],_0x19dde5[_0x5576cc(0x14e)]);}if(_0x165ba2<_0x4f52f2)for(_0x1d66fe=_0x165ba2;_0x1d66fe<_0x4f52f2;_0x1d66fe++){_0x19dde5=_0x499800[_0x1d66fe];if(!a772_0x5e51fa(_0x19dde5[_0x5576cc(0x149)]))break;_0x19dde5[_0x5576cc(0x149)]=undefined;}var _0x5bc53a=_0xd2e4b4[_0x5576cc(0x13a)],_0x357bd4=_0x5be15f[_0x5576cc(0x15c)];_0x357bd4[_0x5576cc(0x13a)]=_0x5bc53a+0x1;for(var _0x60d633=0x0;_0x60d633<_0x5bc53a;++_0x60d633){_0x357bd4[_0x60d633]=_0xd2e4b4[_0x60d633][_0x5576cc(0x12c)],_0x60d633===_0x5bc53a-0x1&&(_0x357bd4[_0x60d633+0x1]=_0xd2e4b4[_0x60d633][_0x5576cc(0x14e)]);}},View[a772_0x17b78e(0x138)][a772_0x17b78e(0x127)]=function(){var _0x5a5310=a772_0x17b78e;this[_0x5a5310(0x15a)]=this[_0x5a5310(0x15a)]&&this[_0x5a5310(0x15a)][_0x5a5310(0x127)](),this['pickDepthFramebuffer']=this[_0x5a5310(0x148)]&&this[_0x5a5310(0x148)][_0x5a5310(0x127)](),this[_0x5a5310(0x110)]=this[_0x5a5310(0x110)]&&this[_0x5a5310(0x110)][_0x5a5310(0x127)](),this[_0x5a5310(0x13d)]=this[_0x5a5310(0x13d)]&&this[_0x5a5310(0x13d)][_0x5a5310(0x127)](),this['oit']=this[_0x5a5310(0x11e)]&&this[_0x5a5310(0x11e)][_0x5a5310(0x127)](),this[_0x5a5310(0x162)]=this[_0x5a5310(0x162)]&&this['translucentTileClassification'][_0x5a5310(0x127)](),this[_0x5a5310(0x145)]=this[_0x5a5310(0x145)]&&this[_0x5a5310(0x145)][_0x5a5310(0x127)]();var _0x1f443c,_0x585f8e,_0x2d60b2=this[_0x5a5310(0x14a)];_0x585f8e=_0x2d60b2['length'];for(_0x1f443c=0x0;_0x1f443c<_0x585f8e;++_0x1f443c){_0x2d60b2[_0x1f443c][_0x5a5310(0x127)]();}};function a772_0x4879(_0x5dea36,_0x13cae7){var _0x909327=a772_0x9093();return a772_0x4879=function(_0x48791a,_0x3d939e){_0x48791a=_0x48791a-0x10f;var _0xa3be88=_0x909327[_0x48791a];return _0xa3be88;},a772_0x4879(_0x5dea36,_0x13cae7);}export default View;