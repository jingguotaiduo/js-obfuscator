var a187_0x17a557=a187_0x4d48;(function(_0x32b0f4,_0x3d21ec){var _0x70ef49=a187_0x4d48,_0x471f64=_0x32b0f4();while(!![]){try{var _0x17ff5a=parseInt(_0x70ef49(0x71))/0x1+parseInt(_0x70ef49(0x84))/0x2*(-parseInt(_0x70ef49(0x8a))/0x3)+-parseInt(_0x70ef49(0x9d))/0x4*(-parseInt(_0x70ef49(0x92))/0x5)+parseInt(_0x70ef49(0x98))/0x6+-parseInt(_0x70ef49(0xad))/0x7*(-parseInt(_0x70ef49(0xa5))/0x8)+parseInt(_0x70ef49(0x7e))/0x9+-parseInt(_0x70ef49(0x9f))/0xa;if(_0x17ff5a===_0x3d21ec)break;else _0x471f64['push'](_0x471f64['shift']());}catch(_0x42e308){_0x471f64['push'](_0x471f64['shift']());}}}(a187_0x5632,0x3ae9f));import a187_0xa9e055 from'./ArcType.js';import a187_0x4d5981 from'./arrayRemoveDuplicates.js';import a187_0x54acf9 from'./Cartesian2.js';import a187_0xf2afc0 from'./Cartesian3.js';import a187_0x43cefc from'./Cartographic.js';import a187_0x5847b8 from'./ComponentDatatype.js';function a187_0x4d48(_0x2efa0e,_0x404aee){var _0x5632d2=a187_0x5632();return a187_0x4d48=function(_0x4d4852,_0x210298){_0x4d4852=_0x4d4852-0x6a;var _0x5d9cc9=_0x5632d2[_0x4d4852];return _0x5d9cc9;},a187_0x4d48(_0x2efa0e,_0x404aee);}import a187_0x3016d6 from'./defaultValue.js';import a187_0xb532 from'./defined.js';import a187_0x46bac0 from'./Ellipsoid.js';import a187_0x208db8 from'./EllipsoidRhumbLine.js';import a187_0x5519ca from'./Geometry.js';import a187_0x1a692b from'./GeometryAttribute.js';import a187_0x23b2fb from'./GeometryAttributes.js';import a187_0x15463c from'./GeometryPipeline.js';import a187_0x1decb4 from'./IndexDatatype.js';import a187_0x3b190a from'./Math.js';import a187_0x3538c2 from'./Matrix3.js';import a187_0x1de6ac from'./PolygonPipeline.js';import a187_0x18a2f5 from'./PrimitiveType.js';import a187_0x39ba3c from'./Quaternion.js';import a187_0x5a8c45 from'./Queue.js';import a187_0x2e13a9 from'./WindingOrder.js';function a187_0x5632(){var _0x1760c5=['polygonOutlinesFromHierarchy','add','slice','pow','fromArray','1261869QMGXgo','chordLength','TRIANGLES','POSITIVE_INFINITY','computeSubdivision','geodeticSurfaceNormal','log2','triangulate','155zWsPUI','subdivideRhumbLineCount','subdivideLine','holes','startingIndex','multiplyByVector','2685438LOanLu','subtract','position','push','reverse','1628sLdEFx','GEODESIC','3334540Yuvxhx','surfaceDistance','clone','cartesianToCartographic','packPolygonHierarchy','dequeue','2693160SUuoGj','normal','pack','computeRhumbLineSubdivision','distance','maximumRadius','scaleToGeodeticHeightExtruded','subdivideLineCount','7NGEULf','createTypedArray','concat','attributes','ceil','computeNormal','scaleToGeodeticSurface','packedLength','computeWindingOrder2D','NEGATIVE_INFINITY','max','width','height','pop','min','176636BawZtb','positions','CLOCKWISE','unpack','EPSILON10','length','fromQuaternion','computeWallGeometry','multiplyByScalar','DOUBLE','RHUMB','WGS84','enqueue','197253HAIkPm','polygonsFromHierarchy','equalsEpsilon','computeHierarchyPackedLength','fromAxisAngle','subdivideRhumbLine','2dlvioi'];a187_0x5632=function(){return _0x1760c5;};return a187_0x5632();}var PolygonGeometryLibrary={};PolygonGeometryLibrary[a187_0x17a557(0x81)]=function(_0x5f03fc){var _0x13ab73=a187_0x17a557,_0x268167=0x0,_0x1d8646=[_0x5f03fc];while(_0x1d8646['length']>0x0){var _0x29aabd=_0x1d8646[_0x13ab73(0x6f)]();if(!a187_0xb532(_0x29aabd))continue;_0x268167+=0x2;var _0x1074c3=_0x29aabd[_0x13ab73(0x72)],_0x547989=_0x29aabd[_0x13ab73(0x95)];a187_0xb532(_0x1074c3)&&(_0x268167+=_0x1074c3[_0x13ab73(0x76)]*a187_0xf2afc0[_0x13ab73(0xb4)]);if(a187_0xb532(_0x547989)){var _0x22f6fc=_0x547989[_0x13ab73(0x76)];for(var _0x5888bd=0x0;_0x5888bd<_0x22f6fc;++_0x5888bd){_0x1d8646[_0x13ab73(0x9b)](_0x547989[_0x5888bd]);}}}return _0x268167;},PolygonGeometryLibrary[a187_0x17a557(0xa3)]=function(_0x4a33f3,_0x59847a,_0x5878f6){var _0x46976e=a187_0x17a557,_0x55b010=[_0x4a33f3];while(_0x55b010['length']>0x0){var _0x2bd28a=_0x55b010[_0x46976e(0x6f)]();if(!a187_0xb532(_0x2bd28a))continue;var _0x2bb93c=_0x2bd28a[_0x46976e(0x72)],_0x3719a6=_0x2bd28a[_0x46976e(0x95)];_0x59847a[_0x5878f6++]=a187_0xb532(_0x2bb93c)?_0x2bb93c[_0x46976e(0x76)]:0x0,_0x59847a[_0x5878f6++]=a187_0xb532(_0x3719a6)?_0x3719a6['length']:0x0;if(a187_0xb532(_0x2bb93c)){var _0x580ca9=_0x2bb93c['length'];for(var _0x3dfb80=0x0;_0x3dfb80<_0x580ca9;++_0x3dfb80,_0x5878f6+=0x3){a187_0xf2afc0[_0x46976e(0xa7)](_0x2bb93c[_0x3dfb80],_0x59847a,_0x5878f6);}}if(a187_0xb532(_0x3719a6)){var _0x60374b=_0x3719a6[_0x46976e(0x76)];for(var _0x584b47=0x0;_0x584b47<_0x60374b;++_0x584b47){_0x55b010[_0x46976e(0x9b)](_0x3719a6[_0x584b47]);}}}return _0x5878f6;},PolygonGeometryLibrary['unpackPolygonHierarchy']=function(_0x1bebb7,_0x13537f){var _0x5c9e31=a187_0x17a557,_0x2f642a=_0x1bebb7[_0x13537f++],_0x3f963b=_0x1bebb7[_0x13537f++],_0x34b73d=new Array(_0x2f642a),_0x591b68=_0x3f963b>0x0?new Array(_0x3f963b):undefined;for(var _0x47c82d=0x0;_0x47c82d<_0x2f642a;++_0x47c82d,_0x13537f+=a187_0xf2afc0['packedLength']){_0x34b73d[_0x47c82d]=a187_0xf2afc0[_0x5c9e31(0x74)](_0x1bebb7,_0x13537f);}for(var _0x2f8ce4=0x0;_0x2f8ce4<_0x3f963b;++_0x2f8ce4){_0x591b68[_0x2f8ce4]=PolygonGeometryLibrary['unpackPolygonHierarchy'](_0x1bebb7,_0x13537f),_0x13537f=_0x591b68[_0x2f8ce4][_0x5c9e31(0x96)],delete _0x591b68[_0x2f8ce4][_0x5c9e31(0x96)];}return{'positions':_0x34b73d,'holes':_0x591b68,'startingIndex':_0x13537f};};var distanceScratch=new a187_0xf2afc0();function getPointAtDistance(_0xb4ad92,_0x1db9e9,_0x5937c2,_0x935119){var _0x1cc4ba=a187_0x17a557;return a187_0xf2afc0[_0x1cc4ba(0x99)](_0x1db9e9,_0xb4ad92,distanceScratch),a187_0xf2afc0[_0x1cc4ba(0x79)](distanceScratch,_0x5937c2/_0x935119,distanceScratch),a187_0xf2afc0[_0x1cc4ba(0x86)](_0xb4ad92,distanceScratch,distanceScratch),[distanceScratch['x'],distanceScratch['y'],distanceScratch['z']];}PolygonGeometryLibrary[a187_0x17a557(0xac)]=function(_0x4eeb96,_0x1859bc,_0x334d4c){var _0x70f537=a187_0x17a557,_0x2e3e16=a187_0xf2afc0[_0x70f537(0xa9)](_0x4eeb96,_0x1859bc),_0x49a0a3=_0x2e3e16/_0x334d4c,_0x511cc0=Math[_0x70f537(0x6c)](0x0,Math[_0x70f537(0xb1)](a187_0x3b190a['log2'](_0x49a0a3)));return Math['pow'](0x2,_0x511cc0);};var scratchCartographic0=new a187_0x43cefc(),scratchCartographic1=new a187_0x43cefc(),scratchCartographic2=new a187_0x43cefc(),scratchCartesian0=new a187_0xf2afc0();PolygonGeometryLibrary[a187_0x17a557(0x93)]=function(_0x42dd6d,_0x1c9e29,_0x55ff4d,_0x25e18f){var _0x4df208=a187_0x17a557,_0x1e58b6=_0x42dd6d[_0x4df208(0xa2)](_0x1c9e29,scratchCartographic0),_0x588b04=_0x42dd6d[_0x4df208(0xa2)](_0x55ff4d,scratchCartographic1),_0x28b65a=new a187_0x208db8(_0x1e58b6,_0x588b04,_0x42dd6d),_0x4d0b9d=_0x28b65a[_0x4df208(0xa0)]/_0x25e18f,_0x5e55aa=Math[_0x4df208(0x6c)](0x0,Math[_0x4df208(0xb1)](a187_0x3b190a['log2'](_0x4d0b9d)));return Math[_0x4df208(0x88)](0x2,_0x5e55aa);},PolygonGeometryLibrary[a187_0x17a557(0x94)]=function(_0xf32d74,_0x4077ce,_0x5bd0fb,_0x533707){var _0x4ad583=a187_0x17a557,_0x2d89b=PolygonGeometryLibrary[_0x4ad583(0xac)](_0xf32d74,_0x4077ce,_0x5bd0fb),_0x11b758=a187_0xf2afc0[_0x4ad583(0xa9)](_0xf32d74,_0x4077ce),_0x5ef4d3=_0x11b758/_0x2d89b;!a187_0xb532(_0x533707)&&(_0x533707=[]);var _0x289597=_0x533707;_0x289597[_0x4ad583(0x76)]=_0x2d89b*0x3;var _0x245f8a=0x0;for(var _0xe7270f=0x0;_0xe7270f<_0x2d89b;_0xe7270f++){var _0xfb454b=getPointAtDistance(_0xf32d74,_0x4077ce,_0xe7270f*_0x5ef4d3,_0x11b758);_0x289597[_0x245f8a++]=_0xfb454b[0x0],_0x289597[_0x245f8a++]=_0xfb454b[0x1],_0x289597[_0x245f8a++]=_0xfb454b[0x2];}return _0x289597;},PolygonGeometryLibrary[a187_0x17a557(0x83)]=function(_0xc54d53,_0x563cc3,_0x621d44,_0x43bde4,_0x9a9a9e){var _0x29bb23=a187_0x17a557,_0x415967=_0xc54d53[_0x29bb23(0xa2)](_0x563cc3,scratchCartographic0),_0xc6ff18=_0xc54d53[_0x29bb23(0xa2)](_0x621d44,scratchCartographic1),_0x294683=new a187_0x208db8(_0x415967,_0xc6ff18,_0xc54d53),_0x102965=_0x294683[_0x29bb23(0xa0)]/_0x43bde4,_0x11f6f7=Math[_0x29bb23(0x6c)](0x0,Math[_0x29bb23(0xb1)](a187_0x3b190a[_0x29bb23(0x90)](_0x102965))),_0x1d4c66=Math[_0x29bb23(0x88)](0x2,_0x11f6f7),_0x1267c3=_0x294683[_0x29bb23(0xa0)]/_0x1d4c66;!a187_0xb532(_0x9a9a9e)&&(_0x9a9a9e=[]);var _0x6c3578=_0x9a9a9e;_0x6c3578['length']=_0x1d4c66*0x3;var _0x5e9a53=0x0;for(var _0x9ee230=0x0;_0x9ee230<_0x1d4c66;_0x9ee230++){var _0x577bed=_0x294683['interpolateUsingSurfaceDistance'](_0x9ee230*_0x1267c3,scratchCartographic2),_0x3a90d9=_0xc54d53['cartographicToCartesian'](_0x577bed,scratchCartesian0);_0x6c3578[_0x5e9a53++]=_0x3a90d9['x'],_0x6c3578[_0x5e9a53++]=_0x3a90d9['y'],_0x6c3578[_0x5e9a53++]=_0x3a90d9['z'];}return _0x6c3578;};var scaleToGeodeticHeightN1=new a187_0xf2afc0(),scaleToGeodeticHeightN2=new a187_0xf2afc0(),scaleToGeodeticHeightP1=new a187_0xf2afc0(),scaleToGeodeticHeightP2=new a187_0xf2afc0();PolygonGeometryLibrary[a187_0x17a557(0xab)]=function(_0x4934e4,_0x5e2a60,_0x2757a3,_0x1d3ba1,_0x14db10){var _0x176b8a=a187_0x17a557;_0x1d3ba1=a187_0x3016d6(_0x1d3ba1,a187_0x46bac0[_0x176b8a(0x7c)]);var _0x33f358=scaleToGeodeticHeightN1,_0x14d08e=scaleToGeodeticHeightN2,_0x156f6c=scaleToGeodeticHeightP1,_0x1b574c=scaleToGeodeticHeightP2;if(a187_0xb532(_0x4934e4)&&a187_0xb532(_0x4934e4[_0x176b8a(0xb0)])&&a187_0xb532(_0x4934e4[_0x176b8a(0xb0)][_0x176b8a(0x9a)])){var _0x2e1f86=_0x4934e4[_0x176b8a(0xb0)][_0x176b8a(0x9a)]['values'],_0x44df57=_0x2e1f86[_0x176b8a(0x76)]/0x2;for(var _0xed63c6=0x0;_0xed63c6<_0x44df57;_0xed63c6+=0x3){a187_0xf2afc0[_0x176b8a(0x89)](_0x2e1f86,_0xed63c6,_0x156f6c),_0x1d3ba1[_0x176b8a(0x8f)](_0x156f6c,_0x33f358),_0x1b574c=_0x1d3ba1[_0x176b8a(0xb3)](_0x156f6c,_0x1b574c),_0x14d08e=a187_0xf2afc0[_0x176b8a(0x79)](_0x33f358,_0x2757a3,_0x14d08e),_0x14d08e=a187_0xf2afc0[_0x176b8a(0x86)](_0x1b574c,_0x14d08e,_0x14d08e),_0x2e1f86[_0xed63c6+_0x44df57]=_0x14d08e['x'],_0x2e1f86[_0xed63c6+0x1+_0x44df57]=_0x14d08e['y'],_0x2e1f86[_0xed63c6+0x2+_0x44df57]=_0x14d08e['z'],_0x14db10&&(_0x1b574c=a187_0xf2afc0['clone'](_0x156f6c,_0x1b574c)),_0x14d08e=a187_0xf2afc0['multiplyByScalar'](_0x33f358,_0x5e2a60,_0x14d08e),_0x14d08e=a187_0xf2afc0['add'](_0x1b574c,_0x14d08e,_0x14d08e),_0x2e1f86[_0xed63c6]=_0x14d08e['x'],_0x2e1f86[_0xed63c6+0x1]=_0x14d08e['y'],_0x2e1f86[_0xed63c6+0x2]=_0x14d08e['z'];}}return _0x4934e4;},PolygonGeometryLibrary[a187_0x17a557(0x85)]=function(_0x781b74,_0x4fa304,_0x31cfdc){var _0xdc2861=a187_0x17a557,_0x2df378=[],_0x5df173=new a187_0x5a8c45();_0x5df173[_0xdc2861(0x7d)](_0x781b74);var _0x28b182,_0x5559f3,_0x5bdbba;while(_0x5df173[_0xdc2861(0x76)]!==0x0){var _0x5ab3c3=_0x5df173[_0xdc2861(0xa4)](),_0x8a7727=_0x5ab3c3[_0xdc2861(0x72)];if(_0x4fa304){_0x5bdbba=_0x8a7727[_0xdc2861(0x76)];for(_0x28b182=0x0;_0x28b182<_0x5bdbba;_0x28b182++){_0x31cfdc[_0xdc2861(0xb3)](_0x8a7727[_0x28b182],_0x8a7727[_0x28b182]);}}_0x8a7727=a187_0x4d5981(_0x8a7727,a187_0xf2afc0[_0xdc2861(0x80)],!![]);if(_0x8a7727['length']<0x3)continue;var _0x5907cd=_0x5ab3c3[_0xdc2861(0x95)]?_0x5ab3c3['holes'][_0xdc2861(0x76)]:0x0;for(_0x28b182=0x0;_0x28b182<_0x5907cd;_0x28b182++){var _0x2c9243=_0x5ab3c3[_0xdc2861(0x95)][_0x28b182],_0x237e58=_0x2c9243[_0xdc2861(0x72)];if(_0x4fa304){_0x5bdbba=_0x237e58[_0xdc2861(0x76)];for(_0x5559f3=0x0;_0x5559f3<_0x5bdbba;++_0x5559f3){_0x31cfdc[_0xdc2861(0xb3)](_0x237e58[_0x5559f3],_0x237e58[_0x5559f3]);}}_0x237e58=a187_0x4d5981(_0x237e58,a187_0xf2afc0[_0xdc2861(0x80)],!![]);if(_0x237e58[_0xdc2861(0x76)]<0x3)continue;_0x2df378[_0xdc2861(0x9b)](_0x237e58);var _0x45af4b=0x0;a187_0xb532(_0x2c9243[_0xdc2861(0x95)])&&(_0x45af4b=_0x2c9243[_0xdc2861(0x95)]['length']);for(_0x5559f3=0x0;_0x5559f3<_0x45af4b;_0x5559f3++){_0x5df173[_0xdc2861(0x7d)](_0x2c9243[_0xdc2861(0x95)][_0x5559f3]);}}_0x2df378[_0xdc2861(0x9b)](_0x8a7727);}return _0x2df378;},PolygonGeometryLibrary[a187_0x17a557(0x7f)]=function(_0x568472,_0x4673a4,_0x1ba5ce,_0x2fdc96){var _0x431362=a187_0x17a557,_0x590d22=[],_0x3f1e33=[],_0x59d3f6=new a187_0x5a8c45();_0x59d3f6[_0x431362(0x7d)](_0x568472);while(_0x59d3f6[_0x431362(0x76)]!==0x0){var _0x2c4c1c=_0x59d3f6[_0x431362(0xa4)](),_0x250872=_0x2c4c1c[_0x431362(0x72)],_0x439934=_0x2c4c1c['holes'],_0x36c275,_0xc13eb5;if(_0x1ba5ce){_0xc13eb5=_0x250872['length'];for(_0x36c275=0x0;_0x36c275<_0xc13eb5;_0x36c275++){_0x2fdc96[_0x431362(0xb3)](_0x250872[_0x36c275],_0x250872[_0x36c275]);}}_0x250872=a187_0x4d5981(_0x250872,a187_0xf2afc0['equalsEpsilon'],!![]);if(_0x250872['length']<0x3)continue;var _0x11aa98=_0x4673a4(_0x250872);if(!a187_0xb532(_0x11aa98))continue;var _0xc7c64d=[],_0x5dcd43=a187_0x1de6ac[_0x431362(0x6a)](_0x11aa98);_0x5dcd43===a187_0x2e13a9['CLOCKWISE']&&(_0x11aa98['reverse'](),_0x250872=_0x250872['slice']()[_0x431362(0x9c)]());var _0x5b6226=_0x250872[_0x431362(0x87)](),_0x147f0e=a187_0xb532(_0x439934)?_0x439934['length']:0x0,_0x5457c3=[],_0x2fb964;for(_0x36c275=0x0;_0x36c275<_0x147f0e;_0x36c275++){var _0x17e48c=_0x439934[_0x36c275],_0x51df3f=_0x17e48c[_0x431362(0x72)];if(_0x1ba5ce){_0xc13eb5=_0x51df3f['length'];for(_0x2fb964=0x0;_0x2fb964<_0xc13eb5;++_0x2fb964){_0x2fdc96[_0x431362(0xb3)](_0x51df3f[_0x2fb964],_0x51df3f[_0x2fb964]);}}_0x51df3f=a187_0x4d5981(_0x51df3f,a187_0xf2afc0['equalsEpsilon'],!![]);if(_0x51df3f['length']<0x3)continue;var _0x1d3220=_0x4673a4(_0x51df3f);if(!a187_0xb532(_0x1d3220))continue;_0x5dcd43=a187_0x1de6ac[_0x431362(0x6a)](_0x1d3220);_0x5dcd43===a187_0x2e13a9[_0x431362(0x73)]&&(_0x1d3220['reverse'](),_0x51df3f=_0x51df3f[_0x431362(0x87)]()[_0x431362(0x9c)]());_0x5457c3[_0x431362(0x9b)](_0x51df3f),_0xc7c64d[_0x431362(0x9b)](_0x5b6226[_0x431362(0x76)]),_0x5b6226=_0x5b6226[_0x431362(0xaf)](_0x51df3f),_0x11aa98=_0x11aa98[_0x431362(0xaf)](_0x1d3220);var _0x3b5332=0x0;a187_0xb532(_0x17e48c[_0x431362(0x95)])&&(_0x3b5332=_0x17e48c['holes'][_0x431362(0x76)]);for(_0x2fb964=0x0;_0x2fb964<_0x3b5332;_0x2fb964++){_0x59d3f6[_0x431362(0x7d)](_0x17e48c[_0x431362(0x95)][_0x2fb964]);}}_0x590d22[_0x431362(0x9b)]({'outerRing':_0x250872,'holes':_0x5457c3}),_0x3f1e33[_0x431362(0x9b)]({'positions':_0x5b6226,'positions2D':_0x11aa98,'holes':_0xc7c64d});}return{'hierarchy':_0x590d22,'polygons':_0x3f1e33};};var computeBoundingRectangleCartesian2=new a187_0x54acf9(),computeBoundingRectangleCartesian3=new a187_0xf2afc0(),computeBoundingRectangleQuaternion=new a187_0x39ba3c(),computeBoundingRectangleMatrix3=new a187_0x3538c2();PolygonGeometryLibrary['computeBoundingRectangle']=function(_0x3c9115,_0x106ccc,_0x72ca5f,_0x3a992f,_0x4be4f9){var _0x1b85bb=a187_0x17a557,_0x500f63=a187_0x39ba3c[_0x1b85bb(0x82)](_0x3c9115,_0x3a992f,computeBoundingRectangleQuaternion),_0xcd9327=a187_0x3538c2[_0x1b85bb(0x77)](_0x500f63,computeBoundingRectangleMatrix3),_0x5cb25a=Number[_0x1b85bb(0x8d)],_0x4f1802=Number[_0x1b85bb(0x6b)],_0x23bfa5=Number[_0x1b85bb(0x8d)],_0x53ba42=Number['NEGATIVE_INFINITY'],_0x44f22d=_0x72ca5f[_0x1b85bb(0x76)];for(var _0x4f8551=0x0;_0x4f8551<_0x44f22d;++_0x4f8551){var _0xec8728=a187_0xf2afc0[_0x1b85bb(0xa1)](_0x72ca5f[_0x4f8551],computeBoundingRectangleCartesian3);a187_0x3538c2[_0x1b85bb(0x97)](_0xcd9327,_0xec8728,_0xec8728);var _0x57f7c9=_0x106ccc(_0xec8728,computeBoundingRectangleCartesian2);a187_0xb532(_0x57f7c9)&&(_0x5cb25a=Math[_0x1b85bb(0x70)](_0x5cb25a,_0x57f7c9['x']),_0x4f1802=Math['max'](_0x4f1802,_0x57f7c9['x']),_0x23bfa5=Math[_0x1b85bb(0x70)](_0x23bfa5,_0x57f7c9['y']),_0x53ba42=Math['max'](_0x53ba42,_0x57f7c9['y']));}return _0x4be4f9['x']=_0x5cb25a,_0x4be4f9['y']=_0x23bfa5,_0x4be4f9[_0x1b85bb(0x6d)]=_0x4f1802-_0x5cb25a,_0x4be4f9[_0x1b85bb(0x6e)]=_0x53ba42-_0x23bfa5,_0x4be4f9;},PolygonGeometryLibrary['createGeometryFromPositions']=function(_0x35f54f,_0xf3ba43,_0x161867,_0x1ca7c5,_0x270ce8,_0x45d5bc){var _0x1e9a0f=a187_0x17a557,_0x525361=a187_0x1de6ac[_0x1e9a0f(0x91)](_0xf3ba43['positions2D'],_0xf3ba43[_0x1e9a0f(0x95)]);_0x525361[_0x1e9a0f(0x76)]<0x3&&(_0x525361=[0x0,0x1,0x2]);var _0xd9cdb1=_0xf3ba43[_0x1e9a0f(0x72)];if(_0x1ca7c5){var _0x84389f=_0xd9cdb1[_0x1e9a0f(0x76)],_0x33e591=new Array(_0x84389f*0x3),_0xbe15ba=0x0;for(var _0x54e191=0x0;_0x54e191<_0x84389f;_0x54e191++){var _0x3aa1f1=_0xd9cdb1[_0x54e191];_0x33e591[_0xbe15ba++]=_0x3aa1f1['x'],_0x33e591[_0xbe15ba++]=_0x3aa1f1['y'],_0x33e591[_0xbe15ba++]=_0x3aa1f1['z'];}var _0x51dd3a=new a187_0x5519ca({'attributes':{'position':new a187_0x1a692b({'componentDatatype':a187_0x5847b8[_0x1e9a0f(0x7a)],'componentsPerAttribute':0x3,'values':_0x33e591})},'indices':_0x525361,'primitiveType':a187_0x18a2f5[_0x1e9a0f(0x8c)]});if(_0x270ce8[_0x1e9a0f(0xa6)])return a187_0x15463c[_0x1e9a0f(0xb2)](_0x51dd3a);return _0x51dd3a;}if(_0x45d5bc===a187_0xa9e055[_0x1e9a0f(0x9e)])return a187_0x1de6ac[_0x1e9a0f(0x8e)](_0x35f54f,_0xd9cdb1,_0x525361,_0x161867);else{if(_0x45d5bc===a187_0xa9e055[_0x1e9a0f(0x7b)])return a187_0x1de6ac[_0x1e9a0f(0xa8)](_0x35f54f,_0xd9cdb1,_0x525361,_0x161867);}};var computeWallIndicesSubdivided=[],p1Scratch=new a187_0xf2afc0(),p2Scratch=new a187_0xf2afc0();PolygonGeometryLibrary[a187_0x17a557(0x78)]=function(_0x12f100,_0x81f97,_0x54ff87,_0x46a451,_0x195233){var _0x413b01=a187_0x17a557,_0x3bb4f2,_0x33300d,_0xccfad6,_0x2e7a43,_0x2518fc,_0xb00cf2=_0x12f100[_0x413b01(0x76)],_0x221002=0x0;if(!_0x46a451){var _0x269f27=a187_0x3b190a[_0x413b01(0x8b)](_0x54ff87,_0x81f97[_0x413b01(0xaa)]),_0x402721=0x0;if(_0x195233===a187_0xa9e055[_0x413b01(0x9e)])for(_0xccfad6=0x0;_0xccfad6<_0xb00cf2;_0xccfad6++){_0x402721+=PolygonGeometryLibrary[_0x413b01(0xac)](_0x12f100[_0xccfad6],_0x12f100[(_0xccfad6+0x1)%_0xb00cf2],_0x269f27);}else{if(_0x195233===a187_0xa9e055['RHUMB'])for(_0xccfad6=0x0;_0xccfad6<_0xb00cf2;_0xccfad6++){_0x402721+=PolygonGeometryLibrary['subdivideRhumbLineCount'](_0x81f97,_0x12f100[_0xccfad6],_0x12f100[(_0xccfad6+0x1)%_0xb00cf2],_0x269f27);}}_0x33300d=(_0x402721+_0xb00cf2)*0x3,_0x3bb4f2=new Array(_0x33300d*0x2);for(_0xccfad6=0x0;_0xccfad6<_0xb00cf2;_0xccfad6++){_0x2e7a43=_0x12f100[_0xccfad6],_0x2518fc=_0x12f100[(_0xccfad6+0x1)%_0xb00cf2];var _0x9aceb6;if(_0x195233===a187_0xa9e055[_0x413b01(0x9e)])_0x9aceb6=PolygonGeometryLibrary[_0x413b01(0x94)](_0x2e7a43,_0x2518fc,_0x269f27,computeWallIndicesSubdivided);else _0x195233===a187_0xa9e055[_0x413b01(0x7b)]&&(_0x9aceb6=PolygonGeometryLibrary[_0x413b01(0x83)](_0x81f97,_0x2e7a43,_0x2518fc,_0x269f27,computeWallIndicesSubdivided));var _0x16adff=_0x9aceb6[_0x413b01(0x76)];for(var _0x56636f=0x0;_0x56636f<_0x16adff;++_0x56636f,++_0x221002){_0x3bb4f2[_0x221002]=_0x9aceb6[_0x56636f],_0x3bb4f2[_0x221002+_0x33300d]=_0x9aceb6[_0x56636f];}_0x3bb4f2[_0x221002]=_0x2518fc['x'],_0x3bb4f2[_0x221002+_0x33300d]=_0x2518fc['x'],++_0x221002,_0x3bb4f2[_0x221002]=_0x2518fc['y'],_0x3bb4f2[_0x221002+_0x33300d]=_0x2518fc['y'],++_0x221002,_0x3bb4f2[_0x221002]=_0x2518fc['z'],_0x3bb4f2[_0x221002+_0x33300d]=_0x2518fc['z'],++_0x221002;}}else{_0x33300d=_0xb00cf2*0x3*0x2,_0x3bb4f2=new Array(_0x33300d*0x2);for(_0xccfad6=0x0;_0xccfad6<_0xb00cf2;_0xccfad6++){_0x2e7a43=_0x12f100[_0xccfad6],_0x2518fc=_0x12f100[(_0xccfad6+0x1)%_0xb00cf2],_0x3bb4f2[_0x221002]=_0x3bb4f2[_0x221002+_0x33300d]=_0x2e7a43['x'],++_0x221002,_0x3bb4f2[_0x221002]=_0x3bb4f2[_0x221002+_0x33300d]=_0x2e7a43['y'],++_0x221002,_0x3bb4f2[_0x221002]=_0x3bb4f2[_0x221002+_0x33300d]=_0x2e7a43['z'],++_0x221002,_0x3bb4f2[_0x221002]=_0x3bb4f2[_0x221002+_0x33300d]=_0x2518fc['x'],++_0x221002,_0x3bb4f2[_0x221002]=_0x3bb4f2[_0x221002+_0x33300d]=_0x2518fc['y'],++_0x221002,_0x3bb4f2[_0x221002]=_0x3bb4f2[_0x221002+_0x33300d]=_0x2518fc['z'],++_0x221002;}}_0xb00cf2=_0x3bb4f2[_0x413b01(0x76)];var _0xf436e9=a187_0x1decb4[_0x413b01(0xae)](_0xb00cf2/0x3,_0xb00cf2-_0x12f100['length']*0x6),_0x1ba787=0x0;_0xb00cf2/=0x6;for(_0xccfad6=0x0;_0xccfad6<_0xb00cf2;_0xccfad6++){var _0x4a2e04=_0xccfad6,_0x31edce=_0x4a2e04+0x1,_0x1b70c2=_0x4a2e04+_0xb00cf2,_0x331fe1=_0x1b70c2+0x1;_0x2e7a43=a187_0xf2afc0['fromArray'](_0x3bb4f2,_0x4a2e04*0x3,p1Scratch),_0x2518fc=a187_0xf2afc0['fromArray'](_0x3bb4f2,_0x31edce*0x3,p2Scratch);if(a187_0xf2afc0[_0x413b01(0x80)](_0x2e7a43,_0x2518fc,a187_0x3b190a[_0x413b01(0x75)],a187_0x3b190a[_0x413b01(0x75)]))continue;_0xf436e9[_0x1ba787++]=_0x4a2e04,_0xf436e9[_0x1ba787++]=_0x1b70c2,_0xf436e9[_0x1ba787++]=_0x31edce,_0xf436e9[_0x1ba787++]=_0x31edce,_0xf436e9[_0x1ba787++]=_0x1b70c2,_0xf436e9[_0x1ba787++]=_0x331fe1;}return new a187_0x5519ca({'attributes':new a187_0x23b2fb({'position':new a187_0x1a692b({'componentDatatype':a187_0x5847b8[_0x413b01(0x7a)],'componentsPerAttribute':0x3,'values':_0x3bb4f2})}),'indices':_0xf436e9,'primitiveType':a187_0x18a2f5[_0x413b01(0x8c)]});};export default PolygonGeometryLibrary;