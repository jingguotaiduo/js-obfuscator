var a742_0xa1b4b2=a742_0x1e94;(function(_0x5a9943,_0x3541e3){var _0x2d468f=a742_0x1e94,_0x1e205b=_0x5a9943();while(!![]){try{var _0x4f029c=-parseInt(_0x2d468f(0xc9))/0x1+parseInt(_0x2d468f(0xdd))/0x2*(-parseInt(_0x2d468f(0xd6))/0x3)+parseInt(_0x2d468f(0xd5))/0x4*(parseInt(_0x2d468f(0xfe))/0x5)+parseInt(_0x2d468f(0x100))/0x6*(parseInt(_0x2d468f(0xef))/0x7)+-parseInt(_0x2d468f(0xe9))/0x8+parseInt(_0x2d468f(0xd1))/0x9*(-parseInt(_0x2d468f(0xca))/0xa)+parseInt(_0x2d468f(0xc5))/0xb*(parseInt(_0x2d468f(0xe3))/0xc);if(_0x4f029c===_0x3541e3)break;else _0x1e205b['push'](_0x1e205b['shift']());}catch(_0x5a32a9){_0x1e205b['push'](_0x1e205b['shift']());}}}(a742_0x39d5,0xacf8d));import a742_0x4f3392 from'../Core/Cartesian3.js';import a742_0x5eb8fa from'../Core/defined.js';import a742_0x304593 from'../Core/Cartographic.js';import a742_0x350f79 from'../Core/Ellipsoid.js';import a742_0x17e767 from'../Core/Intersect.js';import a742_0x31ea46 from'../Core/Matrix3.js';import a742_0x3e9c53 from'../Core/Plane.js';import a742_0x1a6bf3 from'../Core/CoplanarPolygonOutlineGeometry.js';import a742_0x306509 from'../Core/BoundingSphere.js';import a742_0x121596 from'../Core/Check.js';import a742_0x5a4630 from'../Core/ColorGeometryInstanceAttribute.js';import a742_0x16d7e4 from'../Core/defaultValue.js';import a742_0x547e45 from'../Core/GeometryInstance.js';import a742_0x447fb7 from'../Core/Matrix4.js';import a742_0x1068a3 from'./PerInstanceColorAppearance.js';function a742_0x39d5(){var _0x47e81b=['2714327VJIDUg','createGeometry','normal','options','fromPointNormal','defineProperties','IDENTITY','token','maximumHeight','sqrt','getCenter','camera','INTERSECTING','negate','_vertices','95SBkeYv','fromPoints','18wsSONy','normalize','getPointDistance','add','cartesianToCartographic','createDebugVolume','_boundingSphere','55eTUEeS','UNIT_X','defined','OUTSIDE','1110090jVeynh','379230mbGkal','cross','string','ellipsoid','WGS84','determinant','cartographicToCartesian','99LLbpcR','fromColor','typeOf','geodeticSurfaceNormal','210308OBiEjq','115722lWCHjZ','prototype','s2Cell','_planeVertices','clone','slice','plane','18TdbuJq','_boundingPlanes','outline','projectPointOntoPlane','multiplyByScalar','distance','2064132IRCOvK','length','MAX_VALUE','intersectPlane','height','center','3515192zoUvhX','push','dot','subtract','_edgeNormals','object'];a742_0x39d5=function(){return _0x47e81b;};return a742_0x39d5();}import a742_0x56b7ec from'./Primitive.js';import a742_0x5e4e7e from'../Core/S2Cell.js';var centerCartographicScratch=new a742_0x304593();function TileBoundingS2Cell(_0x7417e){var _0x12395a=a742_0x1e94;a742_0x121596[_0x12395a(0xd3)][_0x12395a(0xee)](_0x12395a(0xf2),_0x7417e),a742_0x121596['typeOf'][_0x12395a(0xcc)]('options.token',_0x7417e[_0x12395a(0xf6)]);var _0x481672=a742_0x5e4e7e['fromToken'](_0x7417e[_0x12395a(0xf6)]),_0x1c18bf=a742_0x16d7e4(_0x7417e['minimumHeight'],0x0),_0x509ea1=a742_0x16d7e4(_0x7417e[_0x12395a(0xf7)],0x0),_0x598808=a742_0x16d7e4(_0x7417e[_0x12395a(0xcd)],a742_0x350f79[_0x12395a(0xce)]);this[_0x12395a(0xd8)]=_0x481672,this['minimumHeight']=_0x1c18bf,this[_0x12395a(0xf7)]=_0x509ea1,this[_0x12395a(0xcd)]=_0x598808;var _0x31fbbe=computeBoundingPlanes(_0x481672,_0x1c18bf,_0x509ea1,_0x598808);this[_0x12395a(0xde)]=_0x31fbbe;var _0x16f158=computeVertices(_0x31fbbe);this['_vertices']=_0x16f158,this[_0x12395a(0xed)]=new Array(0x6),this[_0x12395a(0xed)][0x0]=computeEdgeNormals(_0x31fbbe[0x0],_0x16f158[_0x12395a(0xdb)](0x0,0x4));var _0xa851cf;for(_0xa851cf=0x0;_0xa851cf<0x4;_0xa851cf++){this[_0x12395a(0xed)][0x0][_0xa851cf]=a742_0x4f3392[_0x12395a(0xfc)](this[_0x12395a(0xed)][0x0][_0xa851cf],this['_edgeNormals'][0x0][_0xa851cf]);}this['_edgeNormals'][0x1]=computeEdgeNormals(_0x31fbbe[0x1],_0x16f158[_0x12395a(0xdb)](0x4,0x8));for(_0xa851cf=0x0;_0xa851cf<0x4;_0xa851cf++){this[_0x12395a(0xed)][0x2+_0xa851cf]=computeEdgeNormals(_0x31fbbe[0x2+_0xa851cf],[_0x16f158[_0xa851cf%0x4],_0x16f158[(_0xa851cf+0x1)%0x4],_0x16f158[0x4+(_0xa851cf+0x1)%0x4],_0x16f158[0x4+_0xa851cf]]);}this[_0x12395a(0xd9)]=[this[_0x12395a(0xfd)][_0x12395a(0xdb)](0x0,0x4),this[_0x12395a(0xfd)][_0x12395a(0xdb)](0x4,0x8)];for(_0xa851cf=0x0;_0xa851cf<0x4;_0xa851cf++){this[_0x12395a(0xd9)][_0x12395a(0xea)]([this['_vertices'][_0xa851cf%0x4],this[_0x12395a(0xfd)][(_0xa851cf+0x1)%0x4],this['_vertices'][0x4+(_0xa851cf+0x1)%0x4],this[_0x12395a(0xfd)][0x4+_0xa851cf]]);}var _0x26f727=_0x481672[_0x12395a(0xf9)]();centerCartographicScratch=_0x598808[_0x12395a(0x104)](_0x26f727,centerCartographicScratch),centerCartographicScratch[_0x12395a(0xe7)]=(_0x509ea1+_0x1c18bf)/0x2,this[_0x12395a(0xe8)]=_0x598808[_0x12395a(0xd0)](centerCartographicScratch,_0x26f727),this[_0x12395a(0xc4)]=a742_0x306509[_0x12395a(0xff)](_0x16f158);}var centerGeodeticNormalScratch=new a742_0x4f3392(),topCartographicScratch=new a742_0x304593(),topScratch=new a742_0x4f3392(),vertexCartographicScratch=new a742_0x304593(),vertexScratch=new a742_0x4f3392(),vertexGeodeticNormalScratch=new a742_0x4f3392(),sideNormalScratch=new a742_0x4f3392(),sideScratch=new a742_0x4f3392();function computeBoundingPlanes(_0x2ce1f5,_0x49dc0d,_0x1ec8f7,_0x357238){var _0x505ab1=a742_0x1e94,_0x4a8bfa=new Array(0x6),_0x1772d7=_0x2ce1f5[_0x505ab1(0xf9)](),_0x468082=_0x357238[_0x505ab1(0xd4)](_0x1772d7,centerGeodeticNormalScratch),_0x559529=_0x357238['cartesianToCartographic'](_0x1772d7,topCartographicScratch);_0x559529['height']=_0x1ec8f7;var _0x492ccd=_0x357238[_0x505ab1(0xd0)](_0x559529,topScratch),_0x53b41a=a742_0x3e9c53[_0x505ab1(0xf3)](_0x492ccd,_0x468082);_0x4a8bfa[0x0]=_0x53b41a;var _0x5d8a88=0x0,_0x354338,_0x18dd3d=[],_0x2ad224,_0x44e423;for(_0x354338=0x0;_0x354338<0x4;_0x354338++){_0x2ad224=_0x2ce1f5['getVertex'](_0x354338),_0x18dd3d[_0x354338]=_0x2ad224,_0x44e423=_0x357238['cartesianToCartographic'](_0x2ad224,vertexCartographicScratch),_0x44e423['height']=_0x49dc0d;var _0x48eb4c=a742_0x3e9c53[_0x505ab1(0x102)](_0x53b41a,_0x357238[_0x505ab1(0xd0)](_0x44e423,vertexScratch));_0x48eb4c<_0x5d8a88&&(_0x5d8a88=_0x48eb4c);}var _0x56ec1c=a742_0x3e9c53[_0x505ab1(0xda)](_0x53b41a);_0x56ec1c[_0x505ab1(0xf1)]=a742_0x4f3392[_0x505ab1(0xfc)](_0x56ec1c[_0x505ab1(0xf1)],_0x56ec1c['normal']),_0x56ec1c[_0x505ab1(0xe2)]=_0x56ec1c[_0x505ab1(0xe2)]*-0x1+_0x5d8a88,_0x4a8bfa[0x1]=_0x56ec1c;for(_0x354338=0x0;_0x354338<0x4;_0x354338++){_0x2ad224=_0x18dd3d[_0x354338];var _0xb5057f=_0x18dd3d[(_0x354338+0x1)%0x4],_0x27d87a=_0x357238[_0x505ab1(0xd4)](_0x2ad224,vertexGeodeticNormalScratch),_0x32d4f7=a742_0x4f3392[_0x505ab1(0xec)](_0xb5057f,_0x2ad224,sideScratch),_0x14bfd6=a742_0x4f3392[_0x505ab1(0xcb)](_0x32d4f7,_0x27d87a,sideNormalScratch);_0x14bfd6=a742_0x4f3392['normalize'](_0x14bfd6,_0x14bfd6),_0x4a8bfa[0x2+_0x354338]=a742_0x3e9c53[_0x505ab1(0xf3)](_0x2ad224,_0x14bfd6);}return _0x4a8bfa;}var n0Scratch=new a742_0x4f3392(),n1Scratch=new a742_0x4f3392(),n2Scratch=new a742_0x4f3392(),x0Scratch=new a742_0x4f3392(),x1Scratch=new a742_0x4f3392(),x2Scratch=new a742_0x4f3392(),t0Scratch=new a742_0x4f3392(),t1Scratch=new a742_0x4f3392(),t2Scratch=new a742_0x4f3392(),f0Scratch=new a742_0x4f3392(),f1Scratch=new a742_0x4f3392(),f2Scratch=new a742_0x4f3392(),sScratch=new a742_0x4f3392(),matrixScratch=new a742_0x31ea46();function computeIntersection(_0xc8a548,_0x2e52a5,_0x3a2383){var _0x30c40e=a742_0x1e94;n0Scratch=_0xc8a548[_0x30c40e(0xf1)],n1Scratch=_0x2e52a5[_0x30c40e(0xf1)],n2Scratch=_0x3a2383[_0x30c40e(0xf1)],x0Scratch=a742_0x4f3392[_0x30c40e(0xe1)](_0xc8a548['normal'],-_0xc8a548['distance'],x0Scratch),x1Scratch=a742_0x4f3392[_0x30c40e(0xe1)](_0x2e52a5[_0x30c40e(0xf1)],-_0x2e52a5[_0x30c40e(0xe2)],x1Scratch),x2Scratch=a742_0x4f3392[_0x30c40e(0xe1)](_0x3a2383[_0x30c40e(0xf1)],-_0x3a2383[_0x30c40e(0xe2)],x2Scratch),f0Scratch=a742_0x4f3392[_0x30c40e(0xe1)](a742_0x4f3392['cross'](n1Scratch,n2Scratch,t0Scratch),a742_0x4f3392['dot'](x0Scratch,n0Scratch),f0Scratch),f1Scratch=a742_0x4f3392[_0x30c40e(0xe1)](a742_0x4f3392[_0x30c40e(0xcb)](n2Scratch,n0Scratch,t1Scratch),a742_0x4f3392[_0x30c40e(0xeb)](x1Scratch,n1Scratch),f1Scratch),f2Scratch=a742_0x4f3392[_0x30c40e(0xe1)](a742_0x4f3392[_0x30c40e(0xcb)](n0Scratch,n1Scratch,t2Scratch),a742_0x4f3392[_0x30c40e(0xeb)](x2Scratch,n2Scratch),f2Scratch),matrixScratch[0x0]=n0Scratch['x'],matrixScratch[0x1]=n1Scratch['x'],matrixScratch[0x2]=n2Scratch['x'],matrixScratch[0x3]=n0Scratch['y'],matrixScratch[0x4]=n1Scratch['y'],matrixScratch[0x5]=n2Scratch['y'],matrixScratch[0x6]=n0Scratch['z'],matrixScratch[0x7]=n1Scratch['z'],matrixScratch[0x8]=n2Scratch['z'];var _0x53ecd7=a742_0x31ea46[_0x30c40e(0xcf)](matrixScratch);return sScratch=a742_0x4f3392[_0x30c40e(0x103)](f0Scratch,f1Scratch,sScratch),sScratch=a742_0x4f3392[_0x30c40e(0x103)](sScratch,f2Scratch,sScratch),new a742_0x4f3392(sScratch['x']/_0x53ecd7,sScratch['y']/_0x53ecd7,sScratch['z']/_0x53ecd7);}function computeVertices(_0x3aec20){var _0x5b4b0=new Array(0x8);for(var _0x2f707a=0x0;_0x2f707a<0x4;_0x2f707a++){_0x5b4b0[_0x2f707a]=computeIntersection(_0x3aec20[0x0],_0x3aec20[0x2+(_0x2f707a+0x3)%0x4],_0x3aec20[0x2+_0x2f707a%0x4]),_0x5b4b0[_0x2f707a+0x4]=computeIntersection(_0x3aec20[0x1],_0x3aec20[0x2+(_0x2f707a+0x3)%0x4],_0x3aec20[0x2+_0x2f707a%0x4]);}return _0x5b4b0;}var edgeScratch=new a742_0x4f3392(),edgeNormalScratch=new a742_0x4f3392();function computeEdgeNormals(_0x12c368,_0x41aeb4){var _0x32fdd3=a742_0x1e94,_0x7b7819=[];for(var _0x2a5c6a=0x0;_0x2a5c6a<0x4;_0x2a5c6a++){edgeScratch=a742_0x4f3392[_0x32fdd3(0xec)](_0x41aeb4[(_0x2a5c6a+0x1)%0x4],_0x41aeb4[_0x2a5c6a],edgeScratch),edgeNormalScratch=a742_0x4f3392[_0x32fdd3(0xcb)](_0x12c368['normal'],edgeScratch,edgeNormalScratch),edgeNormalScratch=a742_0x4f3392[_0x32fdd3(0x101)](edgeNormalScratch,edgeNormalScratch),_0x7b7819[_0x2a5c6a]=a742_0x4f3392['clone'](edgeNormalScratch);}return _0x7b7819;}Object[a742_0xa1b4b2(0xf4)](TileBoundingS2Cell[a742_0xa1b4b2(0xd7)],{'boundingVolume':{'get':function(){return this;}},'boundingSphere':{'get':function(){return this['_boundingSphere'];}}});var facePointScratch=new a742_0x4f3392();TileBoundingS2Cell['prototype']['distanceToCamera']=function(_0x2d6144){var _0x525ab8=a742_0xa1b4b2;a742_0x121596[_0x525ab8(0xc7)]('frameState',_0x2d6144);var _0x4a90a5=_0x2d6144[_0x525ab8(0xfa)]['positionWC'],_0x369f34=[],_0x20df1c=[],_0x328ada;if(a742_0x3e9c53[_0x525ab8(0x102)](this[_0x525ab8(0xde)][0x0],_0x4a90a5)>0x0)_0x369f34['push'](0x0),_0x20df1c['push'](this[_0x525ab8(0xd9)][0x0]),_0x328ada=this[_0x525ab8(0xed)][0x0];else a742_0x3e9c53['getPointDistance'](this[_0x525ab8(0xde)][0x1],_0x4a90a5)>0x0&&(_0x369f34[_0x525ab8(0xea)](0x1),_0x20df1c[_0x525ab8(0xea)](this['_planeVertices'][0x1]),_0x328ada=this[_0x525ab8(0xed)][0x1]);var _0x4b5de5,_0x44e96f;for(_0x4b5de5=0x0;_0x4b5de5<0x4;_0x4b5de5++){_0x44e96f=0x2+_0x4b5de5,a742_0x3e9c53[_0x525ab8(0x102)](this[_0x525ab8(0xde)][_0x44e96f],_0x4a90a5)>0x0&&(_0x369f34[_0x525ab8(0xea)](_0x44e96f),_0x20df1c[_0x525ab8(0xea)](this[_0x525ab8(0xd9)][_0x44e96f]),_0x328ada=this[_0x525ab8(0xed)][_0x44e96f]);}if(_0x369f34[_0x525ab8(0xe4)]===0x0)return 0x0;var _0x174bfc,_0x5b5300,_0x51f7b2;if(_0x369f34[_0x525ab8(0xe4)]===0x1)return _0x51f7b2=this[_0x525ab8(0xde)][_0x369f34[0x0]],_0x5b5300=closestPointPolygon(a742_0x3e9c53[_0x525ab8(0xe0)](_0x51f7b2,_0x4a90a5,facePointScratch),_0x20df1c[0x0],_0x51f7b2,_0x328ada),a742_0x4f3392[_0x525ab8(0xe2)](_0x5b5300,_0x4a90a5);else{if(_0x369f34[_0x525ab8(0xe4)]===0x2){if(_0x369f34[0x0]===0x0){var _0x1a7aff=[this[_0x525ab8(0xfd)][0x4*_0x369f34[0x0]+(_0x369f34[0x1]-0x2)],this[_0x525ab8(0xfd)][0x4*_0x369f34[0x0]+(_0x369f34[0x1]-0x2+0x1)%0x4]];return _0x5b5300=closestPointLineSegment(_0x4a90a5,_0x1a7aff[0x0],_0x1a7aff[0x1]),a742_0x4f3392[_0x525ab8(0xe2)](_0x5b5300,_0x4a90a5);}var _0x597d75=Number[_0x525ab8(0xe5)],_0x1f2f7e;for(_0x4b5de5=0x0;_0x4b5de5<0x2;_0x4b5de5++){_0x51f7b2=this[_0x525ab8(0xde)][_0x369f34[_0x4b5de5]],_0x5b5300=closestPointPolygon(a742_0x3e9c53[_0x525ab8(0xe0)](_0x51f7b2,_0x4a90a5,facePointScratch),_0x20df1c[_0x4b5de5],_0x51f7b2,this[_0x525ab8(0xed)][_0x369f34[_0x4b5de5]]),_0x1f2f7e=a742_0x4f3392['distanceSquared'](_0x5b5300,_0x4a90a5),_0x1f2f7e<_0x597d75&&(_0x597d75=_0x1f2f7e);}return Math[_0x525ab8(0xf8)](_0x597d75);}else{if(_0x369f34[_0x525ab8(0xe4)]>0x3)return _0x5b5300=closestPointPolygon(a742_0x3e9c53[_0x525ab8(0xe0)](this[_0x525ab8(0xde)][0x1],_0x4a90a5,facePointScratch),this[_0x525ab8(0xd9)][0x1],this[_0x525ab8(0xde)][0x1],this['_edgeNormals'][0x1]),a742_0x4f3392['distance'](_0x5b5300,_0x4a90a5);}}_0x174bfc=_0x369f34[0x1]===0x2&&_0x369f34[0x2]===0x5?0x0:0x1;if(_0x369f34[0x0]===0x0)return a742_0x4f3392[_0x525ab8(0xe2)](_0x4a90a5,this[_0x525ab8(0xfd)][(_0x369f34[0x1]-0x2+_0x174bfc)%0x4]);return a742_0x4f3392['distance'](_0x4a90a5,this[_0x525ab8(0xfd)][0x4+(_0x369f34[0x1]-0x2+_0x174bfc)%0x4]);};var dScratch=new a742_0x4f3392(),pL0Scratch=new a742_0x4f3392();function closestPointLineSegment(_0x643b40,_0x3fb800,_0x385341){var _0x287e58=a742_0xa1b4b2,_0x28dff6=a742_0x4f3392['subtract'](_0x385341,_0x3fb800,dScratch),_0x2fc993=a742_0x4f3392[_0x287e58(0xec)](_0x643b40,_0x3fb800,pL0Scratch),_0x38c321=a742_0x4f3392['dot'](_0x28dff6,_0x2fc993);if(_0x38c321<=0x0)return _0x3fb800;var _0x2c11c1=a742_0x4f3392[_0x287e58(0xeb)](_0x28dff6,_0x28dff6);if(_0x38c321>=_0x2c11c1)return _0x385341;return _0x38c321=_0x38c321/_0x2c11c1,new a742_0x4f3392((0x1-_0x38c321)*_0x3fb800['x']+_0x38c321*_0x385341['x'],(0x1-_0x38c321)*_0x3fb800['y']+_0x38c321*_0x385341['y'],(0x1-_0x38c321)*_0x3fb800['z']+_0x38c321*_0x385341['z']);}function a742_0x1e94(_0x548ea3,_0xe76c2c){var _0x39d56f=a742_0x39d5();return a742_0x1e94=function(_0x1e943d,_0x30af1b){_0x1e943d=_0x1e943d-0xc4;var _0x476ba8=_0x39d56f[_0x1e943d];return _0x476ba8;},a742_0x1e94(_0x548ea3,_0xe76c2c);}var edgePlaneScratch=new a742_0x3e9c53(a742_0x4f3392[a742_0xa1b4b2(0xc6)],0x0);function closestPointPolygon(_0x1dfa6e,_0x102605,_0x10e874,_0x3fe933){var _0x1a95f4=a742_0xa1b4b2,_0x2b1e30=Number[_0x1a95f4(0xe5)],_0x366d06,_0x5a0900,_0x496f44;for(var _0xf7142c=0x0;_0xf7142c<_0x102605['length'];_0xf7142c++){var _0x2030ea=a742_0x3e9c53[_0x1a95f4(0xf3)](_0x102605[_0xf7142c],_0x3fe933[_0xf7142c],edgePlaneScratch),_0x45ea3f=a742_0x3e9c53[_0x1a95f4(0x102)](_0x2030ea,_0x1dfa6e);if(_0x45ea3f<0x0)continue;_0x496f44=closestPointLineSegment(_0x1dfa6e,_0x102605[_0xf7142c],_0x102605[(_0xf7142c+0x1)%0x4]),_0x366d06=a742_0x4f3392[_0x1a95f4(0xe2)](_0x1dfa6e,_0x496f44),_0x366d06<_0x2b1e30&&(_0x2b1e30=_0x366d06,_0x5a0900=_0x496f44);}if(!a742_0x5eb8fa(_0x5a0900))return _0x1dfa6e;return _0x5a0900;}TileBoundingS2Cell['prototype'][a742_0xa1b4b2(0xe6)]=function(_0x3e1ed7){var _0x5f5234=a742_0xa1b4b2;a742_0x121596['defined'](_0x5f5234(0xdc),_0x3e1ed7);var _0x23c79e=0x0,_0x3d9315=0x0;for(var _0x910d7f=0x0;_0x910d7f<this['_vertices']['length'];_0x910d7f++){var _0x54a1c5=a742_0x4f3392[_0x5f5234(0xeb)](_0x3e1ed7['normal'],this['_vertices'][_0x910d7f])+_0x3e1ed7[_0x5f5234(0xe2)];_0x54a1c5<0x0?_0x3d9315++:_0x23c79e++;}if(_0x23c79e===this[_0x5f5234(0xfd)]['length'])return a742_0x17e767['INSIDE'];else{if(_0x3d9315===this['_vertices'][_0x5f5234(0xe4)])return a742_0x17e767[_0x5f5234(0xc8)];}return a742_0x17e767[_0x5f5234(0xfb)];},TileBoundingS2Cell[a742_0xa1b4b2(0xd7)][a742_0xa1b4b2(0x105)]=function(_0x5d9546){var _0x308aac=a742_0xa1b4b2;a742_0x121596[_0x308aac(0xc7)]('color',_0x5d9546);var _0x531ed6=new a742_0x447fb7[(_0x308aac(0xda))](a742_0x447fb7[_0x308aac(0xf5)]),_0xad1255=new a742_0x1a6bf3({'polygonHierarchy':{'positions':this[_0x308aac(0xd9)][0x0]}}),_0x279722=a742_0x1a6bf3['createGeometry'](_0xad1255),_0x5f082c=new a742_0x547e45({'geometry':_0x279722,'id':'outline','modelMatrix':_0x531ed6,'attributes':{'color':a742_0x5a4630[_0x308aac(0xd2)](_0x5d9546)}}),_0xd2034=new a742_0x1a6bf3({'polygonHierarchy':{'positions':this[_0x308aac(0xd9)][0x1]}}),_0x4b2762=a742_0x1a6bf3['createGeometry'](_0xd2034),_0x2f5849=new a742_0x547e45({'geometry':_0x4b2762,'id':'outline','modelMatrix':_0x531ed6,'attributes':{'color':a742_0x5a4630[_0x308aac(0xd2)](_0x5d9546)}}),_0x542e10=[];for(var _0x34e403=0x0;_0x34e403<0x4;_0x34e403++){var _0x321b34=new a742_0x1a6bf3({'polygonHierarchy':{'positions':this['_planeVertices'][0x2+_0x34e403]}}),_0x3e0712=a742_0x1a6bf3[_0x308aac(0xf0)](_0x321b34);_0x542e10[_0x34e403]=new a742_0x547e45({'geometry':_0x3e0712,'id':_0x308aac(0xdf),'modelMatrix':_0x531ed6,'attributes':{'color':a742_0x5a4630[_0x308aac(0xd2)](_0x5d9546)}});}return new a742_0x56b7ec({'geometryInstances':[_0x542e10[0x0],_0x542e10[0x1],_0x542e10[0x2],_0x542e10[0x3],_0x2f5849,_0x5f082c],'appearance':new a742_0x1068a3({'translucent':![],'flat':!![]}),'asynchronous':![]});};export default TileBoundingS2Cell;