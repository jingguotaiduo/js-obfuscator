var a194_0x19381f=a194_0x230a;(function(_0x5a2e52,_0x48f350){var _0x582785=a194_0x230a,_0xd16fa2=_0x5a2e52();while(!![]){try{var _0x59180a=-parseInt(_0x582785(0x1b0))/0x1*(parseInt(_0x582785(0x1c5))/0x2)+parseInt(_0x582785(0x1bf))/0x3*(parseInt(_0x582785(0x1a4))/0x4)+parseInt(_0x582785(0x1cb))/0x5+parseInt(_0x582785(0x1c1))/0x6*(parseInt(_0x582785(0x1bc))/0x7)+-parseInt(_0x582785(0x1ac))/0x8*(-parseInt(_0x582785(0x1ab))/0x9)+-parseInt(_0x582785(0x1b9))/0xa*(-parseInt(_0x582785(0x1b7))/0xb)+parseInt(_0x582785(0x1c8))/0xc*(-parseInt(_0x582785(0x1c0))/0xd);if(_0x59180a===_0x48f350)break;else _0xd16fa2['push'](_0xd16fa2['shift']());}catch(_0x3c1cc8){_0xd16fa2['push'](_0xd16fa2['shift']());}}}(a194_0x5b26,0x4dfc6));import a194_0x48c16c from'./Cartesian2.js';import a194_0x5a5eb6 from'./Cartesian3.js';import a194_0x593480 from'./Cartesian4.js';import a194_0x112e97 from'./Cartographic.js';import a194_0x2c0f19 from'./CornerType.js';import a194_0xd9f4df from'./EllipsoidTangentPlane.js';import a194_0x57046c from'./Math.js';import a194_0x8186a8 from'./Matrix3.js';function a194_0x5b26(){var _0x4b1b1d=['EPSILON7','set','equals','normalize','removeDuplicatesFromShape','add','451AjDPOw','multiplyTransformation','85770QhJHcT','dot','subtract','1596SBcwEv','width','scaleToGeodeticSurface','274803ZxeYXF','7345ZWBXXv','13128wgyCNq','geodeticSurfaceNormal','generateArc','ceil','10qPxRCP','fromRotationZ','length','27564XZtwNQ','fromRotationTranslation','fromAxisAngle','720240TZOEKk','BEVELED','magnitude','angleIsGreaterThanPi','negate','toRadians','clone','Positions\x20are\x20too\x20close\x20and\x20are\x20considered\x20equivalent\x20with\x20rounding\x20error.','abs','multiplyByScalar','max','_granularity','projectPointOntoPlane','height','equalsEpsilon','computePositions','eastNorthUpToFixedFrame','cross','8ysrIbR','multiplyByVector','multiplyByPointAsVector','fromArray','cartesianToCartographic','angleBetween','IDENTITY','76077ooEctj','584wqgdtO','push','multiplyByPoint','ROUNDED','35521dRAOYG'];a194_0x5b26=function(){return _0x4b1b1d;};return a194_0x5b26();}import a194_0x431063 from'./Matrix4.js';import a194_0x53743f from'./PolylinePipeline.js';import a194_0x36c518 from'./Quaternion.js';import a194_0xa5fb5f from'./Transforms.js';import a194_0x7efd33 from'../Core/oneTimeWarning.js';var scratch2Array=[new a194_0x5a5eb6(),new a194_0x5a5eb6()],scratchCartesian1=new a194_0x5a5eb6(),scratchCartesian2=new a194_0x5a5eb6(),scratchCartesian3=new a194_0x5a5eb6(),scratchCartesian4=new a194_0x5a5eb6(),scratchCartesian5=new a194_0x5a5eb6(),scratchCartesian6=new a194_0x5a5eb6(),scratchCartesian7=new a194_0x5a5eb6(),scratchCartesian8=new a194_0x5a5eb6(),scratchCartesian9=new a194_0x5a5eb6(),scratch1=new a194_0x5a5eb6(),scratch2=new a194_0x5a5eb6(),PolylineVolumeGeometryLibrary={},cartographic=new a194_0x112e97();function scaleToSurface(_0x1ffe67,_0xbc43b9){var _0x56e9f7=a194_0x230a,_0x13f4e1=new Array(_0x1ffe67[_0x56e9f7(0x1c7)]);for(var _0x340c14=0x0;_0x340c14<_0x1ffe67['length'];_0x340c14++){var _0x890d13=_0x1ffe67[_0x340c14];cartographic=_0xbc43b9[_0x56e9f7(0x1a8)](_0x890d13,cartographic),_0x13f4e1[_0x340c14]=cartographic[_0x56e9f7(0x19f)],_0x1ffe67[_0x340c14]=_0xbc43b9['scaleToGeodeticSurface'](_0x890d13,_0x890d13);}return _0x13f4e1;}function subdivideHeights(_0x572c38,_0x5447ef,_0x5ac771,_0xf60277){var _0x43e4bd=a194_0x230a,_0x22befb=_0x572c38[0x0],_0x29cf0b=_0x572c38[0x1],_0x4052d5=a194_0x5a5eb6[_0x43e4bd(0x1a9)](_0x22befb,_0x29cf0b),_0x9281ae=Math[_0x43e4bd(0x1c4)](_0x4052d5/_0xf60277),_0x15ba21=new Array(_0x9281ae),_0x1c5f29;if(_0x5447ef===_0x5ac771){for(_0x1c5f29=0x0;_0x1c5f29<_0x9281ae;_0x1c5f29++){_0x15ba21[_0x1c5f29]=_0x5447ef;}return _0x15ba21[_0x43e4bd(0x1ad)](_0x5ac771),_0x15ba21;}var _0x136ff8=_0x5ac771-_0x5447ef,_0xcab108=_0x136ff8/_0x9281ae;for(_0x1c5f29=0x1;_0x1c5f29<_0x9281ae;_0x1c5f29++){var _0x5d7d09=_0x5447ef+_0x1c5f29*_0xcab108;_0x15ba21[_0x1c5f29]=_0x5d7d09;}return _0x15ba21[0x0]=_0x5447ef,_0x15ba21[_0x43e4bd(0x1ad)](_0x5ac771),_0x15ba21;}var nextScratch=new a194_0x5a5eb6(),prevScratch=new a194_0x5a5eb6();function computeRotationAngle(_0x5bc79e,_0x4bf4eb,_0x4e0193,_0x5f395a){var _0x4cc41a=a194_0x230a,_0x500871=new a194_0xd9f4df(_0x4e0193,_0x5f395a),_0x3619ef=_0x500871[_0x4cc41a(0x19e)](a194_0x5a5eb6[_0x4cc41a(0x1b6)](_0x4e0193,_0x5bc79e,nextScratch),nextScratch),_0x85ffd6=_0x500871['projectPointOntoPlane'](a194_0x5a5eb6['add'](_0x4e0193,_0x4bf4eb,prevScratch),prevScratch),_0x452eb7=a194_0x48c16c[_0x4cc41a(0x1a9)](_0x3619ef,_0x85ffd6);return _0x85ffd6['x']*_0x3619ef['y']-_0x85ffd6['y']*_0x3619ef['x']>=0x0?-_0x452eb7:_0x452eb7;}function a194_0x230a(_0x409a86,_0x2a0218){var _0x5b260d=a194_0x5b26();return a194_0x230a=function(_0x230ac2,_0x40380d){_0x230ac2=_0x230ac2-0x19b;var _0x509118=_0x5b260d[_0x230ac2];return _0x509118;},a194_0x230a(_0x409a86,_0x2a0218);}var negativeX=new a194_0x5a5eb6(-0x1,0x0,0x0),transform=new a194_0x431063(),translation=new a194_0x431063(),rotationZ=new a194_0x8186a8(),scaleMatrix=a194_0x8186a8[a194_0x19381f(0x1aa)][a194_0x19381f(0x1d1)](),westScratch=new a194_0x5a5eb6(),finalPosScratch=new a194_0x593480(),heightCartesian=new a194_0x5a5eb6();function addPosition(_0x270236,_0x18fa5f,_0x4eef43,_0x4e5a5f,_0x1a1c6e,_0x3efb44,_0x22b069,_0x5c34ae){var _0x3eb639=a194_0x19381f,_0x5a6bfd=westScratch,_0x509e56=finalPosScratch;transform=a194_0xa5fb5f[_0x3eb639(0x1a2)](_0x270236,_0x1a1c6e,transform),_0x5a6bfd=a194_0x431063[_0x3eb639(0x1a6)](transform,negativeX,_0x5a6bfd),_0x5a6bfd=a194_0x5a5eb6['normalize'](_0x5a6bfd,_0x5a6bfd);var _0x49130d=computeRotationAngle(_0x5a6bfd,_0x18fa5f,_0x270236,_0x1a1c6e);rotationZ=a194_0x8186a8[_0x3eb639(0x1c6)](_0x49130d,rotationZ),heightCartesian['z']=_0x3efb44,transform=a194_0x431063[_0x3eb639(0x1b8)](transform,a194_0x431063[_0x3eb639(0x1c9)](rotationZ,heightCartesian,translation),transform);var _0xff7a2e=scaleMatrix;_0xff7a2e[0x0]=_0x22b069;for(var _0x2c9b56=0x0;_0x2c9b56<_0x5c34ae;_0x2c9b56++){for(var _0x31e801=0x0;_0x31e801<_0x4eef43[_0x3eb639(0x1c7)];_0x31e801+=0x3){_0x509e56=a194_0x5a5eb6['fromArray'](_0x4eef43,_0x31e801,_0x509e56),_0x509e56=a194_0x8186a8['multiplyByVector'](_0xff7a2e,_0x509e56,_0x509e56),_0x509e56=a194_0x431063[_0x3eb639(0x1ae)](transform,_0x509e56,_0x509e56),_0x4e5a5f[_0x3eb639(0x1ad)](_0x509e56['x'],_0x509e56['y'],_0x509e56['z']);}}return _0x4e5a5f;}var centerScratch=new a194_0x5a5eb6();function addPositions(_0x2d03b7,_0x402caf,_0x4187d5,_0x2d01a0,_0x4d0e57,_0xebefe8,_0x264c0e){var _0xbb060f=a194_0x19381f;for(var _0x19e35b=0x0;_0x19e35b<_0x2d03b7[_0xbb060f(0x1c7)];_0x19e35b+=0x3){var _0x22afec=a194_0x5a5eb6[_0xbb060f(0x1a7)](_0x2d03b7,_0x19e35b,centerScratch);_0x2d01a0=addPosition(_0x22afec,_0x402caf,_0x4187d5,_0x2d01a0,_0x4d0e57,_0xebefe8[_0x19e35b/0x3],_0x264c0e,0x1);}return _0x2d01a0;}function convertShapeTo3DDuplicate(_0x3558bc,_0x78e1bd){var _0x162399=a194_0x19381f,_0x3636fd=_0x3558bc[_0x162399(0x1c7)],_0x4159d5=new Array(_0x3636fd*0x6),_0x1c575e=0x0,_0x42a1d2=_0x78e1bd['x']+_0x78e1bd[_0x162399(0x1bd)]/0x2,_0x48da37=_0x78e1bd['y']+_0x78e1bd['height']/0x2,_0x4e1411=_0x3558bc[0x0];_0x4159d5[_0x1c575e++]=_0x4e1411['x']-_0x42a1d2,_0x4159d5[_0x1c575e++]=0x0,_0x4159d5[_0x1c575e++]=_0x4e1411['y']-_0x48da37;for(var _0x204ba9=0x1;_0x204ba9<_0x3636fd;_0x204ba9++){_0x4e1411=_0x3558bc[_0x204ba9];var _0x493696=_0x4e1411['x']-_0x42a1d2,_0x4187b1=_0x4e1411['y']-_0x48da37;_0x4159d5[_0x1c575e++]=_0x493696,_0x4159d5[_0x1c575e++]=0x0,_0x4159d5[_0x1c575e++]=_0x4187b1,_0x4159d5[_0x1c575e++]=_0x493696,_0x4159d5[_0x1c575e++]=0x0,_0x4159d5[_0x1c575e++]=_0x4187b1;}return _0x4e1411=_0x3558bc[0x0],_0x4159d5[_0x1c575e++]=_0x4e1411['x']-_0x42a1d2,_0x4159d5[_0x1c575e++]=0x0,_0x4159d5[_0x1c575e++]=_0x4e1411['y']-_0x48da37,_0x4159d5;}function convertShapeTo3D(_0x3d4737,_0x122ad2){var _0x47b9b0=a194_0x19381f,_0x584de5=_0x3d4737[_0x47b9b0(0x1c7)],_0x858180=new Array(_0x584de5*0x3),_0x4ef0ba=0x0,_0x37534b=_0x122ad2['x']+_0x122ad2['width']/0x2,_0xe1b479=_0x122ad2['y']+_0x122ad2[_0x47b9b0(0x19f)]/0x2;for(var _0x5c4f6c=0x0;_0x5c4f6c<_0x584de5;_0x5c4f6c++){_0x858180[_0x4ef0ba++]=_0x3d4737[_0x5c4f6c]['x']-_0x37534b,_0x858180[_0x4ef0ba++]=0x0,_0x858180[_0x4ef0ba++]=_0x3d4737[_0x5c4f6c]['y']-_0xe1b479;}return _0x858180;}var quaterion=new a194_0x36c518(),startPointScratch=new a194_0x5a5eb6(),rotMatrix=new a194_0x8186a8();function computeRoundCorner(_0x283fd5,_0xc4d59a,_0x2c4279,_0x1bdf89,_0x423201,_0x45319c,_0x19bbfb,_0x4a1155,_0x53dd6a,_0x231cbf){var _0x5c4315=a194_0x19381f,_0x3e5d78=a194_0x5a5eb6[_0x5c4315(0x1a9)](a194_0x5a5eb6[_0x5c4315(0x1bb)](_0xc4d59a,_0x283fd5,scratch1),a194_0x5a5eb6[_0x5c4315(0x1bb)](_0x2c4279,_0x283fd5,scratch2)),_0x1a8789=_0x1bdf89===a194_0x2c0f19[_0x5c4315(0x1cc)]?0x0:Math[_0x5c4315(0x1c4)](_0x3e5d78/a194_0x57046c[_0x5c4315(0x1d0)](0x5)),_0x41d838;_0x423201?_0x41d838=a194_0x8186a8['fromQuaternion'](a194_0x36c518[_0x5c4315(0x1ca)](a194_0x5a5eb6[_0x5c4315(0x1cf)](_0x283fd5,scratch1),_0x3e5d78/(_0x1a8789+0x1),quaterion),rotMatrix):_0x41d838=a194_0x8186a8['fromQuaternion'](a194_0x36c518['fromAxisAngle'](_0x283fd5,_0x3e5d78/(_0x1a8789+0x1),quaterion),rotMatrix);var _0x10efde,_0x1c101a;_0xc4d59a=a194_0x5a5eb6[_0x5c4315(0x1d1)](_0xc4d59a,startPointScratch);if(_0x1a8789>0x0){var _0x1d8754=_0x231cbf?0x2:0x1;for(var _0x414ed2=0x0;_0x414ed2<_0x1a8789;_0x414ed2++){_0xc4d59a=a194_0x8186a8[_0x5c4315(0x1a5)](_0x41d838,_0xc4d59a,_0xc4d59a),_0x10efde=a194_0x5a5eb6[_0x5c4315(0x1bb)](_0xc4d59a,_0x283fd5,scratch1),_0x10efde=a194_0x5a5eb6[_0x5c4315(0x1b4)](_0x10efde,_0x10efde),!_0x423201&&(_0x10efde=a194_0x5a5eb6[_0x5c4315(0x1cf)](_0x10efde,_0x10efde)),_0x1c101a=_0x45319c[_0x5c4315(0x1be)](_0xc4d59a,scratch2),_0x19bbfb=addPosition(_0x1c101a,_0x10efde,_0x4a1155,_0x19bbfb,_0x45319c,_0x53dd6a,0x1,_0x1d8754);}}else _0x10efde=a194_0x5a5eb6['subtract'](_0xc4d59a,_0x283fd5,scratch1),_0x10efde=a194_0x5a5eb6[_0x5c4315(0x1b4)](_0x10efde,_0x10efde),!_0x423201&&(_0x10efde=a194_0x5a5eb6[_0x5c4315(0x1cf)](_0x10efde,_0x10efde)),_0x1c101a=_0x45319c[_0x5c4315(0x1be)](_0xc4d59a,scratch2),_0x19bbfb=addPosition(_0x1c101a,_0x10efde,_0x4a1155,_0x19bbfb,_0x45319c,_0x53dd6a,0x1,0x1),_0x2c4279=a194_0x5a5eb6['clone'](_0x2c4279,startPointScratch),_0x10efde=a194_0x5a5eb6[_0x5c4315(0x1bb)](_0x2c4279,_0x283fd5,scratch1),_0x10efde=a194_0x5a5eb6[_0x5c4315(0x1b4)](_0x10efde,_0x10efde),!_0x423201&&(_0x10efde=a194_0x5a5eb6[_0x5c4315(0x1cf)](_0x10efde,_0x10efde)),_0x1c101a=_0x45319c[_0x5c4315(0x1be)](_0x2c4279,scratch2),_0x19bbfb=addPosition(_0x1c101a,_0x10efde,_0x4a1155,_0x19bbfb,_0x45319c,_0x53dd6a,0x1,0x1);return _0x19bbfb;}PolylineVolumeGeometryLibrary[a194_0x19381f(0x1b5)]=function(_0x34e012){var _0x394895=a194_0x19381f,_0x3d885f=_0x34e012['length'],_0x16d10e=[];for(var _0x346973=_0x3d885f-0x1,_0x215f80=0x0;_0x215f80<_0x3d885f;_0x346973=_0x215f80++){var _0x7a8b22=_0x34e012[_0x346973],_0x27b672=_0x34e012[_0x215f80];!a194_0x48c16c[_0x394895(0x1b3)](_0x7a8b22,_0x27b672)&&_0x16d10e['push'](_0x27b672);}return _0x16d10e;},PolylineVolumeGeometryLibrary[a194_0x19381f(0x1ce)]=function(_0x175618,_0x197c9b,_0x2adc6d,_0x3323ba){var _0x2001a7=a194_0x19381f,_0x1a0b0c=new a194_0xd9f4df(_0x2adc6d,_0x3323ba),_0x4f1bb5=_0x1a0b0c['projectPointOntoPlane'](a194_0x5a5eb6[_0x2001a7(0x1b6)](_0x2adc6d,_0x175618,nextScratch),nextScratch),_0x151e91=_0x1a0b0c[_0x2001a7(0x19e)](a194_0x5a5eb6[_0x2001a7(0x1b6)](_0x2adc6d,_0x197c9b,prevScratch),prevScratch);return _0x151e91['x']*_0x4f1bb5['y']-_0x151e91['y']*_0x4f1bb5['x']>=0x0;};var scratchForwardProjection=new a194_0x5a5eb6(),scratchBackwardProjection=new a194_0x5a5eb6();PolylineVolumeGeometryLibrary[a194_0x19381f(0x1a1)]=function(_0x164242,_0x4e5e71,_0x5df46a,_0x68be51,_0x127055){var _0xf87129=a194_0x19381f,_0x2f265c=_0x68be51['_ellipsoid'],_0x4f9655=scaleToSurface(_0x164242,_0x2f265c),_0x19d328=_0x68be51[_0xf87129(0x19d)],_0x50c420=_0x68be51['_cornerType'],_0x176129=_0x127055?convertShapeTo3DDuplicate(_0x4e5e71,_0x5df46a):convertShapeTo3D(_0x4e5e71,_0x5df46a),_0x13b318=_0x127055?convertShapeTo3D(_0x4e5e71,_0x5df46a):undefined,_0x547ea6=_0x5df46a[_0xf87129(0x19f)]/0x2,_0x39e59a=_0x5df46a[_0xf87129(0x1bd)]/0x2,_0x2afaac=_0x164242[_0xf87129(0x1c7)],_0x54eab2=[],_0x3c085a=_0x127055?[]:undefined,_0x5adc3a=scratchCartesian1,_0x4cb283=scratchCartesian2,_0x2ea2c2=scratchCartesian3,_0x20c83e=scratchCartesian4,_0x154f6a=scratchCartesian5,_0x3ac0fc=scratchCartesian6,_0x186586=scratchCartesian7,_0x5531a5=scratchCartesian8,_0xad07ff=scratchCartesian9,_0x27fb4e=_0x164242[0x0],_0x107717=_0x164242[0x1];_0x20c83e=_0x2f265c[_0xf87129(0x1c2)](_0x27fb4e,_0x20c83e),_0x5adc3a=a194_0x5a5eb6[_0xf87129(0x1bb)](_0x107717,_0x27fb4e,_0x5adc3a),_0x5adc3a=a194_0x5a5eb6[_0xf87129(0x1b4)](_0x5adc3a,_0x5adc3a),_0x5531a5=a194_0x5a5eb6['cross'](_0x20c83e,_0x5adc3a,_0x5531a5),_0x5531a5=a194_0x5a5eb6['normalize'](_0x5531a5,_0x5531a5);var _0x75b52c=_0x4f9655[0x0],_0x508506=_0x4f9655[0x1];_0x127055&&(_0x3c085a=addPosition(_0x27fb4e,_0x5531a5,_0x13b318,_0x3c085a,_0x2f265c,_0x75b52c+_0x547ea6,0x1,0x1));_0xad07ff=a194_0x5a5eb6[_0xf87129(0x1d1)](_0x27fb4e,_0xad07ff),_0x27fb4e=_0x107717,_0x4cb283=a194_0x5a5eb6['negate'](_0x5adc3a,_0x4cb283);var _0x37b11f,_0xed0e4c;for(var _0x53afcd=0x1;_0x53afcd<_0x2afaac-0x1;_0x53afcd++){var _0x5ced21=_0x127055?0x2:0x1;_0x107717=_0x164242[_0x53afcd+0x1];if(_0x27fb4e[_0xf87129(0x1b3)](_0x107717)){a194_0x7efd33(_0xf87129(0x1d2));continue;}_0x5adc3a=a194_0x5a5eb6['subtract'](_0x107717,_0x27fb4e,_0x5adc3a),_0x5adc3a=a194_0x5a5eb6[_0xf87129(0x1b4)](_0x5adc3a,_0x5adc3a),_0x2ea2c2=a194_0x5a5eb6[_0xf87129(0x1b6)](_0x5adc3a,_0x4cb283,_0x2ea2c2),_0x2ea2c2=a194_0x5a5eb6[_0xf87129(0x1b4)](_0x2ea2c2,_0x2ea2c2),_0x20c83e=_0x2f265c['geodeticSurfaceNormal'](_0x27fb4e,_0x20c83e);var _0x3ebcf2=a194_0x5a5eb6[_0xf87129(0x19b)](_0x20c83e,a194_0x5a5eb6[_0xf87129(0x1ba)](_0x5adc3a,_0x20c83e),scratchForwardProjection);a194_0x5a5eb6[_0xf87129(0x1bb)](_0x5adc3a,_0x3ebcf2,_0x3ebcf2),a194_0x5a5eb6['normalize'](_0x3ebcf2,_0x3ebcf2);var _0x2487e6=a194_0x5a5eb6['multiplyByScalar'](_0x20c83e,a194_0x5a5eb6[_0xf87129(0x1ba)](_0x4cb283,_0x20c83e),scratchBackwardProjection);a194_0x5a5eb6['subtract'](_0x4cb283,_0x2487e6,_0x2487e6),a194_0x5a5eb6[_0xf87129(0x1b4)](_0x2487e6,_0x2487e6);var _0x11ced8=!a194_0x57046c[_0xf87129(0x1a0)](Math[_0xf87129(0x1d3)](a194_0x5a5eb6['dot'](_0x3ebcf2,_0x2487e6)),0x1,a194_0x57046c[_0xf87129(0x1b1)]);if(_0x11ced8){_0x2ea2c2=a194_0x5a5eb6['cross'](_0x2ea2c2,_0x20c83e,_0x2ea2c2),_0x2ea2c2=a194_0x5a5eb6[_0xf87129(0x1a3)](_0x20c83e,_0x2ea2c2,_0x2ea2c2),_0x2ea2c2=a194_0x5a5eb6['normalize'](_0x2ea2c2,_0x2ea2c2);var _0x2fe58a=0x1/Math[_0xf87129(0x19c)](0.25,a194_0x5a5eb6[_0xf87129(0x1cd)](a194_0x5a5eb6[_0xf87129(0x1a3)](_0x2ea2c2,_0x4cb283,scratch1))),_0x578b24=PolylineVolumeGeometryLibrary[_0xf87129(0x1ce)](_0x5adc3a,_0x4cb283,_0x27fb4e,_0x2f265c);_0x578b24?(_0x154f6a=a194_0x5a5eb6['add'](_0x27fb4e,a194_0x5a5eb6['multiplyByScalar'](_0x2ea2c2,_0x2fe58a*_0x39e59a,_0x2ea2c2),_0x154f6a),_0x3ac0fc=a194_0x5a5eb6[_0xf87129(0x1b6)](_0x154f6a,a194_0x5a5eb6[_0xf87129(0x19b)](_0x5531a5,_0x39e59a,_0x3ac0fc),_0x3ac0fc),scratch2Array[0x0]=a194_0x5a5eb6[_0xf87129(0x1d1)](_0xad07ff,scratch2Array[0x0]),scratch2Array[0x1]=a194_0x5a5eb6[_0xf87129(0x1d1)](_0x3ac0fc,scratch2Array[0x1]),_0x37b11f=subdivideHeights(scratch2Array,_0x75b52c+_0x547ea6,_0x508506+_0x547ea6,_0x19d328),_0xed0e4c=a194_0x53743f['generateArc']({'positions':scratch2Array,'granularity':_0x19d328,'ellipsoid':_0x2f265c}),_0x54eab2=addPositions(_0xed0e4c,_0x5531a5,_0x176129,_0x54eab2,_0x2f265c,_0x37b11f,0x1),_0x5531a5=a194_0x5a5eb6[_0xf87129(0x1a3)](_0x20c83e,_0x5adc3a,_0x5531a5),_0x5531a5=a194_0x5a5eb6[_0xf87129(0x1b4)](_0x5531a5,_0x5531a5),_0x186586=a194_0x5a5eb6['add'](_0x154f6a,a194_0x5a5eb6[_0xf87129(0x19b)](_0x5531a5,_0x39e59a,_0x186586),_0x186586),_0x50c420===a194_0x2c0f19[_0xf87129(0x1af)]||_0x50c420===a194_0x2c0f19['BEVELED']?computeRoundCorner(_0x154f6a,_0x3ac0fc,_0x186586,_0x50c420,_0x578b24,_0x2f265c,_0x54eab2,_0x176129,_0x508506+_0x547ea6,_0x127055):(_0x2ea2c2=a194_0x5a5eb6[_0xf87129(0x1cf)](_0x2ea2c2,_0x2ea2c2),_0x54eab2=addPosition(_0x27fb4e,_0x2ea2c2,_0x176129,_0x54eab2,_0x2f265c,_0x508506+_0x547ea6,_0x2fe58a,_0x5ced21)),_0xad07ff=a194_0x5a5eb6[_0xf87129(0x1d1)](_0x186586,_0xad07ff)):(_0x154f6a=a194_0x5a5eb6[_0xf87129(0x1b6)](_0x27fb4e,a194_0x5a5eb6[_0xf87129(0x19b)](_0x2ea2c2,_0x2fe58a*_0x39e59a,_0x2ea2c2),_0x154f6a),_0x3ac0fc=a194_0x5a5eb6[_0xf87129(0x1b6)](_0x154f6a,a194_0x5a5eb6['multiplyByScalar'](_0x5531a5,-_0x39e59a,_0x3ac0fc),_0x3ac0fc),scratch2Array[0x0]=a194_0x5a5eb6[_0xf87129(0x1d1)](_0xad07ff,scratch2Array[0x0]),scratch2Array[0x1]=a194_0x5a5eb6['clone'](_0x3ac0fc,scratch2Array[0x1]),_0x37b11f=subdivideHeights(scratch2Array,_0x75b52c+_0x547ea6,_0x508506+_0x547ea6,_0x19d328),_0xed0e4c=a194_0x53743f[_0xf87129(0x1c3)]({'positions':scratch2Array,'granularity':_0x19d328,'ellipsoid':_0x2f265c}),_0x54eab2=addPositions(_0xed0e4c,_0x5531a5,_0x176129,_0x54eab2,_0x2f265c,_0x37b11f,0x1),_0x5531a5=a194_0x5a5eb6[_0xf87129(0x1a3)](_0x20c83e,_0x5adc3a,_0x5531a5),_0x5531a5=a194_0x5a5eb6[_0xf87129(0x1b4)](_0x5531a5,_0x5531a5),_0x186586=a194_0x5a5eb6[_0xf87129(0x1b6)](_0x154f6a,a194_0x5a5eb6[_0xf87129(0x19b)](_0x5531a5,-_0x39e59a,_0x186586),_0x186586),_0x50c420===a194_0x2c0f19[_0xf87129(0x1af)]||_0x50c420===a194_0x2c0f19[_0xf87129(0x1cc)]?computeRoundCorner(_0x154f6a,_0x3ac0fc,_0x186586,_0x50c420,_0x578b24,_0x2f265c,_0x54eab2,_0x176129,_0x508506+_0x547ea6,_0x127055):_0x54eab2=addPosition(_0x27fb4e,_0x2ea2c2,_0x176129,_0x54eab2,_0x2f265c,_0x508506+_0x547ea6,_0x2fe58a,_0x5ced21),_0xad07ff=a194_0x5a5eb6[_0xf87129(0x1d1)](_0x186586,_0xad07ff)),_0x4cb283=a194_0x5a5eb6[_0xf87129(0x1cf)](_0x5adc3a,_0x4cb283);}else _0x54eab2=addPosition(_0xad07ff,_0x5531a5,_0x176129,_0x54eab2,_0x2f265c,_0x75b52c+_0x547ea6,0x1,0x1),_0xad07ff=_0x27fb4e;_0x75b52c=_0x508506,_0x508506=_0x4f9655[_0x53afcd+0x1],_0x27fb4e=_0x107717;}scratch2Array[0x0]=a194_0x5a5eb6['clone'](_0xad07ff,scratch2Array[0x0]),scratch2Array[0x1]=a194_0x5a5eb6[_0xf87129(0x1d1)](_0x27fb4e,scratch2Array[0x1]),_0x37b11f=subdivideHeights(scratch2Array,_0x75b52c+_0x547ea6,_0x508506+_0x547ea6,_0x19d328),_0xed0e4c=a194_0x53743f[_0xf87129(0x1c3)]({'positions':scratch2Array,'granularity':_0x19d328,'ellipsoid':_0x2f265c}),_0x54eab2=addPositions(_0xed0e4c,_0x5531a5,_0x176129,_0x54eab2,_0x2f265c,_0x37b11f,0x1);_0x127055&&(_0x3c085a=addPosition(_0x27fb4e,_0x5531a5,_0x13b318,_0x3c085a,_0x2f265c,_0x508506+_0x547ea6,0x1,0x1));_0x2afaac=_0x54eab2[_0xf87129(0x1c7)];var _0x51f4e7=_0x127055?_0x2afaac+_0x3c085a[_0xf87129(0x1c7)]:_0x2afaac,_0x38da7e=new Float64Array(_0x51f4e7);return _0x38da7e['set'](_0x54eab2),_0x127055&&_0x38da7e[_0xf87129(0x1b2)](_0x3c085a,_0x2afaac),_0x38da7e;};export default PolylineVolumeGeometryLibrary;