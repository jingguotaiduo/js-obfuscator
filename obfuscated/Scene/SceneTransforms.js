var a718_0x1679ab=a718_0xd642;(function(_0x39772c,_0x51ad38){var _0x2ee197=a718_0xd642,_0x3f6f7a=_0x39772c();while(!![]){try{var _0x481c09=-parseInt(_0x2ee197(0x18a))/0x1*(parseInt(_0x2ee197(0x1c4))/0x2)+-parseInt(_0x2ee197(0x1bb))/0x3*(parseInt(_0x2ee197(0x1aa))/0x4)+parseInt(_0x2ee197(0x197))/0x5*(-parseInt(_0x2ee197(0x189))/0x6)+-parseInt(_0x2ee197(0x182))/0x7+parseInt(_0x2ee197(0x1b5))/0x8*(-parseInt(_0x2ee197(0x19f))/0x9)+-parseInt(_0x2ee197(0x1c2))/0xa*(parseInt(_0x2ee197(0x198))/0xb)+-parseInt(_0x2ee197(0x1a6))/0xc*(-parseInt(_0x2ee197(0x1a5))/0xd);if(_0x481c09===_0x51ad38)break;else _0x3f6f7a['push'](_0x3f6f7a['shift']());}catch(_0x5443d5){_0x3f6f7a['push'](_0x3f6f7a['shift']());}}}(a718_0x4618,0x1e1a5));import a718_0x2aea57 from'../Core/BoundingRectangle.js';import a718_0x2984dd from'../Core/Cartesian2.js';function a718_0xd642(_0x54f546,_0x36c129){var _0x4618c4=a718_0x4618();return a718_0xd642=function(_0xd64279,_0x306f62){_0xd64279=_0xd64279-0x182;var _0x110bd2=_0x4618c4[_0xd64279];return _0x110bd2;},a718_0xd642(_0x54f546,_0x36c129);}import a718_0x1571b4 from'../Core/Cartesian3.js';import a718_0x257184 from'../Core/Cartesian4.js';import a718_0x537bfc from'../Core/Cartographic.js';import a718_0x286997 from'../Core/defined.js';import a718_0x383603 from'../Core/DeveloperError.js';import a718_0x370866 from'../Core/Math.js';import a718_0x37b74f from'../Core/Matrix4.js';import a718_0x34d890 from'../Core/OrthographicFrustum.js';import a718_0x3152c4 from'../Core/OrthographicOffCenterFrustum.js';import a718_0x2999ce from'../Core/Transforms.js';import a718_0x1c01c1 from'./SceneMode.js';var SceneTransforms={},actualPositionScratch=new a718_0x257184(0x0,0x0,0x0,0x1),positionCC=new a718_0x257184(),scratchViewport=new a718_0x2aea57(),scratchWindowCoord0=new a718_0x2984dd(),scratchWindowCoord1=new a718_0x2984dd();SceneTransforms[a718_0x1679ab(0x1a0)]=function(_0xd242bc,_0x2b80f8,_0x553c82){var _0x6dfedd=a718_0x1679ab;return SceneTransforms[_0x6dfedd(0x1af)](_0xd242bc,_0x2b80f8,a718_0x1571b4['ZERO'],_0x553c82);};var scratchCartesian4=new a718_0x257184(),scratchEyeOffset=new a718_0x1571b4();function worldToClip(_0x337348,_0x418d53,_0x2e72fd,_0x4936dd){var _0x434c06=a718_0x1679ab,_0x5d4b1b=_0x2e72fd['viewMatrix'],_0xd273d3=a718_0x37b74f[_0x434c06(0x1a4)](_0x5d4b1b,a718_0x257184[_0x434c06(0x1b3)](_0x337348['x'],_0x337348['y'],_0x337348['z'],0x1,scratchCartesian4),scratchCartesian4),_0x51d354=a718_0x1571b4['multiplyComponents'](_0x418d53,a718_0x1571b4[_0x434c06(0x1bc)](_0xd273d3,scratchEyeOffset),scratchEyeOffset);return _0xd273d3['x']+=_0x418d53['x']+_0x51d354['x'],_0xd273d3['y']+=_0x418d53['y']+_0x51d354['y'],_0xd273d3['z']+=_0x51d354['z'],a718_0x37b74f['multiplyByVector'](_0x2e72fd[_0x434c06(0x1a9)]['projectionMatrix'],_0xd273d3,_0x4936dd);}var scratchMaxCartographic=new a718_0x537bfc(Math['PI'],a718_0x370866[a718_0x1679ab(0x1ad)]),scratchProjectedCartesian=new a718_0x1571b4(),scratchCameraPosition=new a718_0x1571b4();SceneTransforms[a718_0x1679ab(0x1af)]=function(_0x5255be,_0x319652,_0x538b5c,_0x10c33f){var _0x553583=a718_0x1679ab;if(!a718_0x286997(_0x5255be))throw new a718_0x383603(_0x553583(0x1a7));if(!a718_0x286997(_0x319652))throw new a718_0x383603('position\x20is\x20required.');var _0x971bb1=_0x5255be[_0x553583(0x1ba)],_0x1694d8=SceneTransforms[_0x553583(0x19d)](_0x971bb1,_0x319652,actualPositionScratch);if(!a718_0x286997(_0x1694d8))return undefined;var _0x4012cb=_0x5255be[_0x553583(0x184)],_0x6386c6=scratchViewport;_0x6386c6['x']=0x0,_0x6386c6['y']=0x0,_0x6386c6[_0x553583(0x19a)]=_0x4012cb[_0x553583(0x1a1)],_0x6386c6[_0x553583(0x199)]=_0x4012cb[_0x553583(0x1be)];var _0x2eae2f=_0x5255be[_0x553583(0x1c1)],_0x263d03=![];if(_0x971bb1[_0x553583(0x1b9)]===a718_0x1c01c1[_0x553583(0x19c)]){var _0x122a5=_0x5255be[_0x553583(0x1b7)],_0x10bafb=scratchMaxCartographic,_0x28bdfc=_0x122a5[_0x553583(0x1b8)](_0x10bafb,scratchProjectedCartesian),_0x7529e7=a718_0x1571b4[_0x553583(0x183)](_0x2eae2f[_0x553583(0x188)],scratchCameraPosition),_0x456224=_0x2eae2f[_0x553583(0x1a9)][_0x553583(0x183)](),_0x44370a=a718_0x37b74f['computeViewportTransformation'](_0x6386c6,0x0,0x1,new a718_0x37b74f()),_0x3b0047=_0x2eae2f[_0x553583(0x1a9)]['projectionMatrix'],_0x4a4b38=_0x2eae2f[_0x553583(0x18f)]['y'],_0x271e13=a718_0x1571b4[_0x553583(0x1b3)](a718_0x370866[_0x553583(0x185)](_0x4a4b38)*_0x28bdfc['x']-_0x4a4b38,0x0,-_0x2eae2f[_0x553583(0x18f)]['x']),_0x3cf8fa=a718_0x2999ce['pointToGLWindowCoordinates'](_0x3b0047,_0x44370a,_0x271e13);if(_0x4a4b38===0x0||_0x3cf8fa['x']<=0x0||_0x3cf8fa['x']>=_0x4012cb[_0x553583(0x1a1)])_0x263d03=!![];else{if(_0x3cf8fa['x']>_0x4012cb[_0x553583(0x1a1)]*0.5){_0x6386c6[_0x553583(0x19a)]=_0x3cf8fa['x'],_0x2eae2f[_0x553583(0x1a9)]['right']=_0x28bdfc['x']-_0x4a4b38,positionCC=worldToClip(_0x1694d8,_0x538b5c,_0x2eae2f,positionCC),SceneTransforms[_0x553583(0x1a8)](_0x6386c6,positionCC,scratchWindowCoord0),_0x6386c6['x']+=_0x3cf8fa['x'],_0x2eae2f[_0x553583(0x188)]['x']=-_0x2eae2f[_0x553583(0x188)]['x'];var _0x2110be=_0x2eae2f[_0x553583(0x1a9)]['right'];_0x2eae2f[_0x553583(0x1a9)][_0x553583(0x1b2)]=-_0x2eae2f[_0x553583(0x1a9)][_0x553583(0x1b6)],_0x2eae2f[_0x553583(0x1a9)][_0x553583(0x1b6)]=-_0x2110be,positionCC=worldToClip(_0x1694d8,_0x538b5c,_0x2eae2f,positionCC),SceneTransforms[_0x553583(0x1a8)](_0x6386c6,positionCC,scratchWindowCoord1);}else{_0x6386c6['x']+=_0x3cf8fa['x'],_0x6386c6[_0x553583(0x19a)]-=_0x3cf8fa['x'],_0x2eae2f[_0x553583(0x1a9)][_0x553583(0x1b6)]=-_0x28bdfc['x']-_0x4a4b38,positionCC=worldToClip(_0x1694d8,_0x538b5c,_0x2eae2f,positionCC),SceneTransforms['clipToGLWindowCoordinates'](_0x6386c6,positionCC,scratchWindowCoord0),_0x6386c6['x']=_0x6386c6['x']-_0x6386c6[_0x553583(0x19a)],_0x2eae2f[_0x553583(0x188)]['x']=-_0x2eae2f[_0x553583(0x188)]['x'];var _0x4a2564=_0x2eae2f['frustum'][_0x553583(0x1b6)];_0x2eae2f[_0x553583(0x1a9)][_0x553583(0x1b6)]=-_0x2eae2f[_0x553583(0x1a9)][_0x553583(0x1b2)],_0x2eae2f[_0x553583(0x1a9)]['right']=-_0x4a2564,positionCC=worldToClip(_0x1694d8,_0x538b5c,_0x2eae2f,positionCC),SceneTransforms[_0x553583(0x1a8)](_0x6386c6,positionCC,scratchWindowCoord1);}a718_0x1571b4['clone'](_0x7529e7,_0x2eae2f[_0x553583(0x188)]),_0x2eae2f[_0x553583(0x1a9)]=_0x456224[_0x553583(0x183)](),_0x10c33f=a718_0x2984dd['clone'](scratchWindowCoord0,_0x10c33f),(_0x10c33f['x']<0x0||_0x10c33f['x']>_0x4012cb[_0x553583(0x1a1)])&&(_0x10c33f['x']=scratchWindowCoord1['x']);}}if(_0x971bb1[_0x553583(0x1b9)]!==a718_0x1c01c1[_0x553583(0x19c)]||_0x263d03){positionCC=worldToClip(_0x1694d8,_0x538b5c,_0x2eae2f,positionCC);if(positionCC['z']<0x0&&!(_0x2eae2f['frustum']instanceof a718_0x34d890)&&!(_0x2eae2f['frustum']instanceof a718_0x3152c4))return undefined;_0x10c33f=SceneTransforms[_0x553583(0x1a8)](_0x6386c6,positionCC,_0x10c33f);}return _0x10c33f['y']=_0x4012cb[_0x553583(0x1be)]-_0x10c33f['y'],_0x10c33f;},SceneTransforms[a718_0x1679ab(0x1ab)]=function(_0x12291c,_0x1089d3,_0x53773e){var _0x1be081=a718_0x1679ab;_0x53773e=SceneTransforms[_0x1be081(0x1a0)](_0x12291c,_0x1089d3,_0x53773e);if(!a718_0x286997(_0x53773e))return undefined;return SceneTransforms[_0x1be081(0x1bf)](_0x12291c,_0x53773e,_0x53773e);};var projectedPosition=new a718_0x1571b4(),positionInCartographic=new a718_0x537bfc();SceneTransforms[a718_0x1679ab(0x19d)]=function(_0x23e016,_0x1d2b21,_0x33b848){var _0x4f3c99=a718_0x1679ab,_0x318aa8=_0x23e016[_0x4f3c99(0x1b9)];if(_0x318aa8===a718_0x1c01c1[_0x4f3c99(0x1c3)])return a718_0x1571b4[_0x4f3c99(0x183)](_0x1d2b21,_0x33b848);var _0xb4635e=_0x23e016[_0x4f3c99(0x1b7)],_0x19d203=_0xb4635e[_0x4f3c99(0x1b1)][_0x4f3c99(0x1b0)](_0x1d2b21,positionInCartographic);if(!a718_0x286997(_0x19d203))return undefined;_0xb4635e[_0x4f3c99(0x1b8)](_0x19d203,projectedPosition);if(_0x318aa8===a718_0x1c01c1['COLUMBUS_VIEW'])return a718_0x1571b4[_0x4f3c99(0x1b3)](projectedPosition['z'],projectedPosition['x'],projectedPosition['y'],_0x33b848);if(_0x318aa8===a718_0x1c01c1[_0x4f3c99(0x19c)])return a718_0x1571b4[_0x4f3c99(0x1b3)](0x0,projectedPosition['x'],projectedPosition['y'],_0x33b848);var _0x32cdc7=_0x23e016[_0x4f3c99(0x1b4)];return a718_0x1571b4[_0x4f3c99(0x1b3)](a718_0x370866[_0x4f3c99(0x190)](projectedPosition['z'],_0x1d2b21['x'],_0x32cdc7),a718_0x370866[_0x4f3c99(0x190)](projectedPosition['x'],_0x1d2b21['y'],_0x32cdc7),a718_0x370866['lerp'](projectedPosition['y'],_0x1d2b21['z'],_0x32cdc7),_0x33b848);};var positionNDC=new a718_0x1571b4(),positionWC=new a718_0x1571b4(),viewportTransform=new a718_0x37b74f();SceneTransforms[a718_0x1679ab(0x1a8)]=function(_0x14fd40,_0x26a18d,_0xc46cc5){var _0x99e31e=a718_0x1679ab;return a718_0x1571b4[_0x99e31e(0x192)](_0x26a18d,_0x26a18d['w'],positionNDC),a718_0x37b74f[_0x99e31e(0x18e)](_0x14fd40,0x0,0x1,viewportTransform),a718_0x37b74f[_0x99e31e(0x1a2)](viewportTransform,positionNDC,positionWC),a718_0x2984dd[_0x99e31e(0x195)](positionWC,_0xc46cc5);},SceneTransforms[a718_0x1679ab(0x1bf)]=function(_0x588254,_0x3744f3,_0x37f4f5){var _0x18857b=a718_0x1679ab,_0x18ae76=_0x588254['canvas'],_0x10f936=_0x588254[_0x18857b(0x193)]/_0x18ae76[_0x18857b(0x1a1)],_0x369830=_0x588254[_0x18857b(0x19b)]/_0x18ae76[_0x18857b(0x1be)];return a718_0x2984dd[_0x18857b(0x1b3)](_0x3744f3['x']*_0x10f936,_0x3744f3['y']*_0x369830,_0x37f4f5);};var scratchNDC=new a718_0x257184(),scratchWorldCoords=new a718_0x257184();SceneTransforms['drawingBufferToWgs84Coordinates']=function(_0x34d4c6,_0x19041b,_0x2e9b11,_0x3fc766){var _0xcb54ca=a718_0x1679ab,_0x17b987=_0x34d4c6['context'],_0x2c0544=_0x17b987[_0xcb54ca(0x196)],_0x1007ce=_0x2c0544[_0xcb54ca(0x186)],_0x211433=_0x1007ce['x'],_0x4593cb=_0x1007ce['y'];if(_0x34d4c6[_0xcb54ca(0x1ba)][_0xcb54ca(0x1c5)]){var _0x33a27f=_0x2e9b11*_0x2c0544[_0xcb54ca(0x1ac)],_0x444fc3=Math[_0xcb54ca(0x194)](0x2,_0x33a27f)-0x1;_0x2e9b11=_0x4593cb*(0x1-_0x211433/(_0x444fc3+_0x211433))/(_0x4593cb-_0x211433);}var _0xd6e272=_0x34d4c6['view'][_0xcb54ca(0x191)][_0xcb54ca(0x18b)],_0x55c514=a718_0x257184['clone'](a718_0x257184[_0xcb54ca(0x1a3)],scratchNDC);_0x55c514['x']=(_0x19041b['x']-_0xd6e272['x'])/_0xd6e272[_0xcb54ca(0x19a)]*0x2-0x1,_0x55c514['y']=(_0x19041b['y']-_0xd6e272['y'])/_0xd6e272[_0xcb54ca(0x199)]*0x2-0x1,_0x55c514['z']=_0x2e9b11*0x2-0x1,_0x55c514['w']=0x1;var _0xe5de61,_0x4a8c75=_0x34d4c6[_0xcb54ca(0x1c1)][_0xcb54ca(0x1a9)];if(!a718_0x286997(_0x4a8c75[_0xcb54ca(0x1c0)]))a718_0x286997(_0x4a8c75['_offCenterFrustum'])&&(_0x4a8c75=_0x4a8c75[_0xcb54ca(0x19e)]),_0xe5de61=scratchWorldCoords,_0xe5de61['x']=(_0x55c514['x']*(_0x4a8c75[_0xcb54ca(0x1b2)]-_0x4a8c75['left'])+_0x4a8c75[_0xcb54ca(0x1b6)]+_0x4a8c75[_0xcb54ca(0x1b2)])*0.5,_0xe5de61['y']=(_0x55c514['y']*(_0x4a8c75[_0xcb54ca(0x187)]-_0x4a8c75[_0xcb54ca(0x1ae)])+_0x4a8c75[_0xcb54ca(0x1ae)]+_0x4a8c75['top'])*0.5,_0xe5de61['z']=(_0x55c514['z']*(_0x211433-_0x4593cb)-_0x211433-_0x4593cb)*0.5,_0xe5de61['w']=0x1,_0xe5de61=a718_0x37b74f[_0xcb54ca(0x1a4)](_0x2c0544[_0xcb54ca(0x18d)],_0xe5de61,_0xe5de61);else{_0xe5de61=a718_0x37b74f[_0xcb54ca(0x1a4)](_0x2c0544[_0xcb54ca(0x1bd)],_0x55c514,scratchWorldCoords);var _0x188b53=0x1/_0xe5de61['w'];a718_0x1571b4[_0xcb54ca(0x18c)](_0xe5de61,_0x188b53,_0xe5de61);}return a718_0x1571b4['fromCartesian4'](_0xe5de61,_0x3fc766);};function a718_0x4618(){var _0x12a2a4=['inverseView','computeViewportTransformation','positionWC','lerp','passState','divideByScalar','drawingBufferWidth','pow','fromCartesian3','uniformState','922405hzrdhb','11VJBmpj','height','width','drawingBufferHeight','SCENE2D','computeActualWgs84Position','_offCenterFrustum','1899mqLTMw','wgs84ToWindowCoordinates','clientWidth','multiplyByPoint','UNIT_W','multiplyByVector','14716nnZTMK','9972Bjbcwr','scene\x20is\x20required.','clipToGLWindowCoordinates','frustum','4BTvKrJ','wgs84ToDrawingBufferCoordinates','log2FarDepthFromNearPlusOne','PI_OVER_TWO','bottom','wgs84WithEyeOffsetToWindowCoordinates','cartesianToCartographic','ellipsoid','right','fromElements','morphTime','8208rmQkeh','left','mapProjection','project','mode','frameState','386031NtfeQT','normalize','inverseViewProjection','clientHeight','transformWindowToDrawingBuffer','fovy','camera','693690fzuCqC','SCENE3D','58424ABpkxc','useLogDepth','710710nXrQUC','clone','canvas','sign','currentFrustum','top','position','6QyCkSu','4UzVEZT','viewport','multiplyByScalar'];a718_0x4618=function(){return _0x12a2a4;};return a718_0x4618();}export default SceneTransforms;