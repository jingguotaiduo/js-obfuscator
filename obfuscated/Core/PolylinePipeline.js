var a192_0x4b3cbb=a192_0x159c;function a192_0x349d(){var _0x46fec2=['UNIT_Y','setEndPoints','cartesianToCartographic','pack','interpolateUsingSurfaceDistance','IDENTITY','2126243VvBwCT','WGS84','generateRhumbArc','multiplyByScalar','UNIT_X','surfaceDistance','height','longitude','generateCartesianArc','minDistance','RADIANS_PER_DEGREE','generateCartesianRhumbArc','maximumRadius','1089042MwKOWH','inverseTransformation','fromPointNormal','12vclUHb','scaleToGeodeticSurface','options.positions\x20is\x20required.','distance','max','push','145924pIMSdZ','wrapLongitude','chordLength','length','914960iAzQHO','2262384ehQvZm','numberOfPointsRhumbLine','granularity','unpack','negate','getPointDistance','34514RGgoGA','10PuHXec','clone','latitude','lineSegmentPlane','add','positions','ceil','normalize','equals','numberOfPoints','multiplyByPoint','sqrt','119619nRboVy','cartographicToCartesian','isArray','24FaVBdn','ellipsoid'];a192_0x349d=function(){return _0x46fec2;};return a192_0x349d();}(function(_0x349ec4,_0x5a0078){var _0x13a1d7=a192_0x159c,_0x397ebc=_0x349ec4();while(!![]){try{var _0x496040=parseInt(_0x13a1d7(0x1ce))/0x1*(-parseInt(_0x13a1d7(0x1a5))/0x2)+-parseInt(_0x13a1d7(0x1ba))/0x3+parseInt(_0x13a1d7(0x1c3))/0x4+parseInt(_0x13a1d7(0x1c7))/0x5+-parseInt(_0x13a1d7(0x1bd))/0x6*(-parseInt(_0x13a1d7(0x1ad))/0x7)+parseInt(_0x13a1d7(0x1c8))/0x8+parseInt(_0x13a1d7(0x1a2))/0x9*(-parseInt(_0x13a1d7(0x1cf))/0xa);if(_0x496040===_0x5a0078)break;else _0x397ebc['push'](_0x397ebc['shift']());}catch(_0x325135){_0x397ebc['push'](_0x397ebc['shift']());}}}(a192_0x349d,0x4df40));import a192_0x55612d from'./Cartesian3.js';import a192_0x5a06a7 from'./Cartographic.js';import a192_0x4fb905 from'./defaultValue.js';import a192_0x352fb0 from'./defined.js';import a192_0x2685bc from'./DeveloperError.js';function a192_0x159c(_0x305f0b,_0x3b749a){var _0x349d82=a192_0x349d();return a192_0x159c=function(_0x159cb8,_0x2d0511){_0x159cb8=_0x159cb8-0x19c;var _0x5ecdf1=_0x349d82[_0x159cb8];return _0x5ecdf1;},a192_0x159c(_0x305f0b,_0x3b749a);}import a192_0x4cbdb3 from'./Ellipsoid.js';import a192_0x181979 from'./EllipsoidGeodesic.js';import a192_0x14863a from'./EllipsoidRhumbLine.js';import a192_0x20af8f from'./IntersectionTests.js';import a192_0x3f103f from'./Math.js';import a192_0x40f188 from'./Matrix4.js';import a192_0x1c3f72 from'./Plane.js';var PolylinePipeline={};PolylinePipeline[a192_0x4b3cbb(0x19f)]=function(_0x69b8bb,_0x56b560,_0x444158){var _0xc1b499=a192_0x4b3cbb,_0x59fac9=a192_0x55612d[_0xc1b499(0x1c0)](_0x69b8bb,_0x56b560);return Math[_0xc1b499(0x19c)](_0x59fac9/_0x444158);},PolylinePipeline[a192_0x4b3cbb(0x1c9)]=function(_0x4bfb52,_0x44388b,_0x1eb36a){var _0x2c53c5=a192_0x4b3cbb,_0x3584d6=Math['pow'](_0x4bfb52[_0x2c53c5(0x1b4)]-_0x44388b[_0x2c53c5(0x1b4)],0x2)+Math['pow'](_0x4bfb52[_0x2c53c5(0x1d1)]-_0x44388b['latitude'],0x2);return Math[_0x2c53c5(0x1c1)](0x1,Math[_0x2c53c5(0x19c)](Math[_0x2c53c5(0x1a1)](_0x3584d6/(_0x1eb36a*_0x1eb36a))));};var cartoScratch=new a192_0x5a06a7();PolylinePipeline['extractHeights']=function(_0x5c97d9,_0x11c995){var _0x35061c=a192_0x4b3cbb,_0x5eb27d=_0x5c97d9[_0x35061c(0x1c6)],_0x4032de=new Array(_0x5eb27d);for(var _0x1f4a14=0x0;_0x1f4a14<_0x5eb27d;_0x1f4a14++){var _0x5c736b=_0x5c97d9[_0x1f4a14];_0x4032de[_0x1f4a14]=_0x11c995[_0x35061c(0x1a9)](_0x5c736b,cartoScratch)[_0x35061c(0x1b3)];}return _0x4032de;};var wrapLongitudeInversMatrix=new a192_0x40f188(),wrapLongitudeOrigin=new a192_0x55612d(),wrapLongitudeXZNormal=new a192_0x55612d(),wrapLongitudeXZPlane=new a192_0x1c3f72(a192_0x55612d[a192_0x4b3cbb(0x1b1)],0x0),wrapLongitudeYZNormal=new a192_0x55612d(),wrapLongitudeYZPlane=new a192_0x1c3f72(a192_0x55612d[a192_0x4b3cbb(0x1b1)],0x0),wrapLongitudeIntersection=new a192_0x55612d(),wrapLongitudeOffset=new a192_0x55612d(),subdivideHeightsScratchArray=[];function subdivideHeights(_0x4ca3b9,_0x32e9fd,_0x528151){var _0x4dd321=a192_0x4b3cbb,_0x150bd8=subdivideHeightsScratchArray;_0x150bd8[_0x4dd321(0x1c6)]=_0x4ca3b9;var _0x2fbb3e;if(_0x32e9fd===_0x528151){for(_0x2fbb3e=0x0;_0x2fbb3e<_0x4ca3b9;_0x2fbb3e++){_0x150bd8[_0x2fbb3e]=_0x32e9fd;}return _0x150bd8;}var _0x3daa2c=_0x528151-_0x32e9fd,_0x1ff408=_0x3daa2c/_0x4ca3b9;for(_0x2fbb3e=0x0;_0x2fbb3e<_0x4ca3b9;_0x2fbb3e++){var _0x3117e4=_0x32e9fd+_0x2fbb3e*_0x1ff408;_0x150bd8[_0x2fbb3e]=_0x3117e4;}return _0x150bd8;}var carto1=new a192_0x5a06a7(),carto2=new a192_0x5a06a7(),cartesian=new a192_0x55612d(),scaleFirst=new a192_0x55612d(),scaleLast=new a192_0x55612d(),ellipsoidGeodesic=new a192_0x181979(),ellipsoidRhumb=new a192_0x14863a();function generateCartesianArc(_0x317520,_0x40c935,_0x27d880,_0x4c324f,_0x336c33,_0x57cc03,_0x575162,_0xcc0e4a){var _0x170307=a192_0x4b3cbb,_0x1b6bb3=_0x4c324f[_0x170307(0x1be)](_0x317520,scaleFirst),_0x26e748=_0x4c324f[_0x170307(0x1be)](_0x40c935,scaleLast),_0x59b6df=PolylinePipeline[_0x170307(0x19f)](_0x317520,_0x40c935,_0x27d880),_0x2912aa=_0x4c324f['cartesianToCartographic'](_0x1b6bb3,carto1),_0x59b753=_0x4c324f[_0x170307(0x1a9)](_0x26e748,carto2),_0x61b444=subdivideHeights(_0x59b6df,_0x336c33,_0x57cc03);ellipsoidGeodesic[_0x170307(0x1a8)](_0x2912aa,_0x59b753);var _0x75888c=ellipsoidGeodesic[_0x170307(0x1b2)]/_0x59b6df,_0x12084d=_0xcc0e4a;_0x2912aa[_0x170307(0x1b3)]=_0x336c33;var _0x419d18=_0x4c324f[_0x170307(0x1a3)](_0x2912aa,cartesian);a192_0x55612d[_0x170307(0x1aa)](_0x419d18,_0x575162,_0x12084d),_0x12084d+=0x3;for(var _0x3b388d=0x1;_0x3b388d<_0x59b6df;_0x3b388d++){var _0x318142=ellipsoidGeodesic[_0x170307(0x1ab)](_0x3b388d*_0x75888c,carto2);_0x318142[_0x170307(0x1b3)]=_0x61b444[_0x3b388d],_0x419d18=_0x4c324f[_0x170307(0x1a3)](_0x318142,cartesian),a192_0x55612d[_0x170307(0x1aa)](_0x419d18,_0x575162,_0x12084d),_0x12084d+=0x3;}return _0x12084d;}function generateCartesianRhumbArc(_0x340ca2,_0x4286de,_0xd90d3e,_0x4ef98c,_0x1d445b,_0x215a09,_0x6e41b3,_0xaa9f83){var _0x28b0d5=a192_0x4b3cbb,_0x5b2895=_0x4ef98c[_0x28b0d5(0x1a9)](_0x340ca2,carto1),_0x4b868e=_0x4ef98c['cartesianToCartographic'](_0x4286de,carto2),_0x4010dd=PolylinePipeline[_0x28b0d5(0x1c9)](_0x5b2895,_0x4b868e,_0xd90d3e);_0x5b2895[_0x28b0d5(0x1b3)]=0x0,_0x4b868e[_0x28b0d5(0x1b3)]=0x0;var _0x5bd1a7=subdivideHeights(_0x4010dd,_0x1d445b,_0x215a09);!ellipsoidRhumb['ellipsoid'][_0x28b0d5(0x19e)](_0x4ef98c)&&(ellipsoidRhumb=new a192_0x14863a(undefined,undefined,_0x4ef98c));ellipsoidRhumb[_0x28b0d5(0x1a8)](_0x5b2895,_0x4b868e);var _0x4d4701=ellipsoidRhumb['surfaceDistance']/_0x4010dd,_0x598ece=_0xaa9f83;_0x5b2895['height']=_0x1d445b;var _0x3a2ae0=_0x4ef98c['cartographicToCartesian'](_0x5b2895,cartesian);a192_0x55612d[_0x28b0d5(0x1aa)](_0x3a2ae0,_0x6e41b3,_0x598ece),_0x598ece+=0x3;for(var _0xfda1a6=0x1;_0xfda1a6<_0x4010dd;_0xfda1a6++){var _0x43fb6a=ellipsoidRhumb[_0x28b0d5(0x1ab)](_0xfda1a6*_0x4d4701,carto2);_0x43fb6a[_0x28b0d5(0x1b3)]=_0x5bd1a7[_0xfda1a6],_0x3a2ae0=_0x4ef98c[_0x28b0d5(0x1a3)](_0x43fb6a,cartesian),a192_0x55612d[_0x28b0d5(0x1aa)](_0x3a2ae0,_0x6e41b3,_0x598ece),_0x598ece+=0x3;}return _0x598ece;}PolylinePipeline[a192_0x4b3cbb(0x1c4)]=function(_0x3dd230,_0x47a909){var _0x16af2b=a192_0x4b3cbb,_0x3d9695=[],_0x27f318=[];if(a192_0x352fb0(_0x3dd230)&&_0x3dd230[_0x16af2b(0x1c6)]>0x0){_0x47a909=a192_0x4fb905(_0x47a909,a192_0x40f188[_0x16af2b(0x1ac)]);var _0x396e7e=a192_0x40f188[_0x16af2b(0x1bb)](_0x47a909,wrapLongitudeInversMatrix),_0xe93f40=a192_0x40f188[_0x16af2b(0x1a0)](_0x396e7e,a192_0x55612d['ZERO'],wrapLongitudeOrigin),_0x33e85d=a192_0x55612d[_0x16af2b(0x19d)](a192_0x40f188['multiplyByPointAsVector'](_0x396e7e,a192_0x55612d[_0x16af2b(0x1a7)],wrapLongitudeXZNormal),wrapLongitudeXZNormal),_0x178ab1=a192_0x1c3f72['fromPointNormal'](_0xe93f40,_0x33e85d,wrapLongitudeXZPlane),_0x54ff2d=a192_0x55612d[_0x16af2b(0x19d)](a192_0x40f188['multiplyByPointAsVector'](_0x396e7e,a192_0x55612d['UNIT_X'],wrapLongitudeYZNormal),wrapLongitudeYZNormal),_0x267b9=a192_0x1c3f72[_0x16af2b(0x1bc)](_0xe93f40,_0x54ff2d,wrapLongitudeYZPlane),_0x200328=0x1;_0x3d9695[_0x16af2b(0x1c2)](a192_0x55612d['clone'](_0x3dd230[0x0]));var _0x3685d8=_0x3d9695[0x0],_0x8a20c7=_0x3dd230['length'];for(var _0x24720b=0x1;_0x24720b<_0x8a20c7;++_0x24720b){var _0x599ed3=_0x3dd230[_0x24720b];if(a192_0x1c3f72[_0x16af2b(0x1cd)](_0x267b9,_0x3685d8)<0x0||a192_0x1c3f72[_0x16af2b(0x1cd)](_0x267b9,_0x599ed3)<0x0){var _0x2c7c2b=a192_0x20af8f[_0x16af2b(0x1d2)](_0x3685d8,_0x599ed3,_0x178ab1,wrapLongitudeIntersection);if(a192_0x352fb0(_0x2c7c2b)){var _0xf4d62d=a192_0x55612d[_0x16af2b(0x1b0)](_0x33e85d,5e-9,wrapLongitudeOffset);a192_0x1c3f72['getPointDistance'](_0x178ab1,_0x3685d8)<0x0&&a192_0x55612d[_0x16af2b(0x1cc)](_0xf4d62d,_0xf4d62d),_0x3d9695[_0x16af2b(0x1c2)](a192_0x55612d['add'](_0x2c7c2b,_0xf4d62d,new a192_0x55612d())),_0x27f318[_0x16af2b(0x1c2)](_0x200328+0x1),a192_0x55612d[_0x16af2b(0x1cc)](_0xf4d62d,_0xf4d62d),_0x3d9695['push'](a192_0x55612d['add'](_0x2c7c2b,_0xf4d62d,new a192_0x55612d())),_0x200328=0x1;}}_0x3d9695[_0x16af2b(0x1c2)](a192_0x55612d[_0x16af2b(0x1d0)](_0x3dd230[_0x24720b])),_0x200328++,_0x3685d8=_0x599ed3;}_0x27f318[_0x16af2b(0x1c2)](_0x200328);}return{'positions':_0x3d9695,'lengths':_0x27f318};},PolylinePipeline['generateArc']=function(_0x2610c2){var _0x2ca91a=a192_0x4b3cbb;!a192_0x352fb0(_0x2610c2)&&(_0x2610c2={});var _0x58572a=_0x2610c2[_0x2ca91a(0x1d4)];if(!a192_0x352fb0(_0x58572a))throw new a192_0x2685bc(_0x2ca91a(0x1bf));var _0x4287c7=_0x58572a[_0x2ca91a(0x1c6)],_0x366b4b=a192_0x4fb905(_0x2610c2[_0x2ca91a(0x1a6)],a192_0x4cbdb3[_0x2ca91a(0x1ae)]),_0x33d145=a192_0x4fb905(_0x2610c2[_0x2ca91a(0x1b3)],0x0),_0x2369ce=Array[_0x2ca91a(0x1a4)](_0x33d145);if(_0x4287c7<0x1)return[];else{if(_0x4287c7===0x1){var _0x102287=_0x366b4b[_0x2ca91a(0x1be)](_0x58572a[0x0],scaleFirst);_0x33d145=_0x2369ce?_0x33d145[0x0]:_0x33d145;if(_0x33d145!==0x0){var _0x44105f=_0x366b4b['geodeticSurfaceNormal'](_0x102287,cartesian);a192_0x55612d[_0x2ca91a(0x1b0)](_0x44105f,_0x33d145,_0x44105f),a192_0x55612d[_0x2ca91a(0x1d3)](_0x102287,_0x44105f,_0x102287);}return[_0x102287['x'],_0x102287['y'],_0x102287['z']];}}var _0x5ad60f=_0x2610c2[_0x2ca91a(0x1b6)];if(!a192_0x352fb0(_0x5ad60f)){var _0x41fc59=a192_0x4fb905(_0x2610c2['granularity'],a192_0x3f103f[_0x2ca91a(0x1b7)]);_0x5ad60f=a192_0x3f103f[_0x2ca91a(0x1c5)](_0x41fc59,_0x366b4b[_0x2ca91a(0x1b9)]);}var _0x1e457d=0x0,_0x3af792;for(_0x3af792=0x0;_0x3af792<_0x4287c7-0x1;_0x3af792++){_0x1e457d+=PolylinePipeline[_0x2ca91a(0x19f)](_0x58572a[_0x3af792],_0x58572a[_0x3af792+0x1],_0x5ad60f);}var _0x280ef0=(_0x1e457d+0x1)*0x3,_0x5e6eec=new Array(_0x280ef0),_0x5b0a62=0x0;for(_0x3af792=0x0;_0x3af792<_0x4287c7-0x1;_0x3af792++){var _0x509b3a=_0x58572a[_0x3af792],_0x1f6ba=_0x58572a[_0x3af792+0x1],_0x2c76d3=_0x2369ce?_0x33d145[_0x3af792]:_0x33d145,_0x2b0c6d=_0x2369ce?_0x33d145[_0x3af792+0x1]:_0x33d145;_0x5b0a62=generateCartesianArc(_0x509b3a,_0x1f6ba,_0x5ad60f,_0x366b4b,_0x2c76d3,_0x2b0c6d,_0x5e6eec,_0x5b0a62);}subdivideHeightsScratchArray['length']=0x0;var _0x559d13=_0x58572a[_0x4287c7-0x1],_0x3a5d41=_0x366b4b[_0x2ca91a(0x1a9)](_0x559d13,carto1);_0x3a5d41[_0x2ca91a(0x1b3)]=_0x2369ce?_0x33d145[_0x4287c7-0x1]:_0x33d145;var _0x3fcbe0=_0x366b4b[_0x2ca91a(0x1a3)](_0x3a5d41,cartesian);return a192_0x55612d[_0x2ca91a(0x1aa)](_0x3fcbe0,_0x5e6eec,_0x280ef0-0x3),_0x5e6eec;};var scratchCartographic0=new a192_0x5a06a7(),scratchCartographic1=new a192_0x5a06a7();PolylinePipeline[a192_0x4b3cbb(0x1af)]=function(_0x190b1e){var _0x49cf63=a192_0x4b3cbb;!a192_0x352fb0(_0x190b1e)&&(_0x190b1e={});var _0xf5eb2a=_0x190b1e[_0x49cf63(0x1d4)];if(!a192_0x352fb0(_0xf5eb2a))throw new a192_0x2685bc(_0x49cf63(0x1bf));var _0x2a08d5=_0xf5eb2a[_0x49cf63(0x1c6)],_0x4bffcd=a192_0x4fb905(_0x190b1e[_0x49cf63(0x1a6)],a192_0x4cbdb3[_0x49cf63(0x1ae)]),_0x32dd87=a192_0x4fb905(_0x190b1e['height'],0x0),_0x15e1c4=Array[_0x49cf63(0x1a4)](_0x32dd87);if(_0x2a08d5<0x1)return[];else{if(_0x2a08d5===0x1){var _0x58c3a7=_0x4bffcd[_0x49cf63(0x1be)](_0xf5eb2a[0x0],scaleFirst);_0x32dd87=_0x15e1c4?_0x32dd87[0x0]:_0x32dd87;if(_0x32dd87!==0x0){var _0x45cbba=_0x4bffcd['geodeticSurfaceNormal'](_0x58c3a7,cartesian);a192_0x55612d['multiplyByScalar'](_0x45cbba,_0x32dd87,_0x45cbba),a192_0x55612d['add'](_0x58c3a7,_0x45cbba,_0x58c3a7);}return[_0x58c3a7['x'],_0x58c3a7['y'],_0x58c3a7['z']];}}var _0x26d639=a192_0x4fb905(_0x190b1e[_0x49cf63(0x1ca)],a192_0x3f103f[_0x49cf63(0x1b7)]),_0x347362=0x0,_0x551550,_0x20d6d1=_0x4bffcd[_0x49cf63(0x1a9)](_0xf5eb2a[0x0],scratchCartographic0),_0x377fc7;for(_0x551550=0x0;_0x551550<_0x2a08d5-0x1;_0x551550++){_0x377fc7=_0x4bffcd[_0x49cf63(0x1a9)](_0xf5eb2a[_0x551550+0x1],scratchCartographic1),_0x347362+=PolylinePipeline[_0x49cf63(0x1c9)](_0x20d6d1,_0x377fc7,_0x26d639),_0x20d6d1=a192_0x5a06a7[_0x49cf63(0x1d0)](_0x377fc7,scratchCartographic0);}var _0xd91ab8=(_0x347362+0x1)*0x3,_0x5f3aaf=new Array(_0xd91ab8),_0x11f98d=0x0;for(_0x551550=0x0;_0x551550<_0x2a08d5-0x1;_0x551550++){var _0x423ca1=_0xf5eb2a[_0x551550],_0x5151d0=_0xf5eb2a[_0x551550+0x1],_0x1bf08b=_0x15e1c4?_0x32dd87[_0x551550]:_0x32dd87,_0x315cac=_0x15e1c4?_0x32dd87[_0x551550+0x1]:_0x32dd87;_0x11f98d=generateCartesianRhumbArc(_0x423ca1,_0x5151d0,_0x26d639,_0x4bffcd,_0x1bf08b,_0x315cac,_0x5f3aaf,_0x11f98d);}subdivideHeightsScratchArray[_0x49cf63(0x1c6)]=0x0;var _0x3610ba=_0xf5eb2a[_0x2a08d5-0x1],_0x5e9d5a=_0x4bffcd[_0x49cf63(0x1a9)](_0x3610ba,carto1);_0x5e9d5a[_0x49cf63(0x1b3)]=_0x15e1c4?_0x32dd87[_0x2a08d5-0x1]:_0x32dd87;var _0x2b84fb=_0x4bffcd[_0x49cf63(0x1a3)](_0x5e9d5a,cartesian);return a192_0x55612d['pack'](_0x2b84fb,_0x5f3aaf,_0xd91ab8-0x3),_0x5f3aaf;},PolylinePipeline[a192_0x4b3cbb(0x1b5)]=function(_0x3138f7){var _0x2b81a5=a192_0x4b3cbb,_0x105d0e=PolylinePipeline['generateArc'](_0x3138f7),_0x1a7244=_0x105d0e[_0x2b81a5(0x1c6)]/0x3,_0x255723=new Array(_0x1a7244);for(var _0x3108bf=0x0;_0x3108bf<_0x1a7244;_0x3108bf++){_0x255723[_0x3108bf]=a192_0x55612d[_0x2b81a5(0x1cb)](_0x105d0e,_0x3108bf*0x3);}return _0x255723;},PolylinePipeline[a192_0x4b3cbb(0x1b8)]=function(_0x1cf761){var _0x40a926=a192_0x4b3cbb,_0x32d514=PolylinePipeline['generateRhumbArc'](_0x1cf761),_0x5c49d4=_0x32d514[_0x40a926(0x1c6)]/0x3,_0x24d8ed=new Array(_0x5c49d4);for(var _0x56cb49=0x0;_0x56cb49<_0x5c49d4;_0x56cb49++){_0x24d8ed[_0x56cb49]=a192_0x55612d[_0x40a926(0x1cb)](_0x32d514,_0x56cb49*0x3);}return _0x24d8ed;};export default PolylinePipeline;