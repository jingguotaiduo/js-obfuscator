var a306_0x2381fc=a306_0x28b8;function a306_0x28b8(_0x76016e,_0x264cfc){var _0x234cdc=a306_0x234c();return a306_0x28b8=function(_0x28b885,_0x23a579){_0x28b885=_0x28b885-0x1a6;var _0x14f234=_0x234cdc[_0x28b885];return _0x14f234;},a306_0x28b8(_0x76016e,_0x264cfc);}(function(_0x5475e8,_0x5ed023){var _0x343ea0=a306_0x28b8,_0x41790a=_0x5475e8();while(!![]){try{var _0x5b7bf1=-parseInt(_0x343ea0(0x1b1))/0x1*(-parseInt(_0x343ea0(0x1c4))/0x2)+parseInt(_0x343ea0(0x1c3))/0x3*(parseInt(_0x343ea0(0x1c8))/0x4)+-parseInt(_0x343ea0(0x1f6))/0x5+parseInt(_0x343ea0(0x1a9))/0x6*(parseInt(_0x343ea0(0x1c7))/0x7)+-parseInt(_0x343ea0(0x202))/0x8+-parseInt(_0x343ea0(0x1c6))/0x9*(-parseInt(_0x343ea0(0x1b8))/0xa)+-parseInt(_0x343ea0(0x1e9))/0xb;if(_0x5b7bf1===_0x5ed023)break;else _0x41790a['push'](_0x41790a['shift']());}catch(_0x114bff){_0x41790a['push'](_0x41790a['shift']());}}}(a306_0x234c,0x3f225));import a306_0x28c02e from'../Core/BoundingRectangle.js';import a306_0x2f606c from'../Core/Cartesian2.js';import a306_0x5d8c6c from'../Core/Cartesian3.js';import a306_0x1fcc8c from'../Core/defaultValue.js';import a306_0x38c132 from'../Core/defined.js';import a306_0x328a75 from'../Core/EllipsoidalOccluder.js';import a306_0x28e095 from'../Core/Event.js';import a306_0x511a11 from'../Core/Matrix4.js';import a306_0x5e2ff8 from'../Scene/Billboard.js';import a306_0x1b179a from'../Scene/BillboardCollection.js';import a306_0x4e3ae7 from'../Scene/Label.js';import a306_0x19694d from'../Scene/LabelCollection.js';import a306_0x12423f from'../Scene/PointPrimitive.js';import a306_0xb66e31 from'../Scene/PointPrimitiveCollection.js';import a306_0x2e376b from'../Scene/SceneMode.js';import a306_0x5f31c4 from'../ThirdParty/kdbush.js';function EntityCluster(_0x220545){var _0x1c28b1=a306_0x28b8;_0x220545=a306_0x1fcc8c(_0x220545,a306_0x1fcc8c[_0x1c28b1(0x1b5)]),this[_0x1c28b1(0x1f0)]=a306_0x1fcc8c(_0x220545[_0x1c28b1(0x1aa)],![]),this[_0x1c28b1(0x1cc)]=a306_0x1fcc8c(_0x220545['pixelRange'],0x50),this[_0x1c28b1(0x1e0)]=a306_0x1fcc8c(_0x220545[_0x1c28b1(0x1be)],0x2),this['_clusterBillboards']=a306_0x1fcc8c(_0x220545[_0x1c28b1(0x1ad)],!![]),this[_0x1c28b1(0x1f9)]=a306_0x1fcc8c(_0x220545[_0x1c28b1(0x1d2)],!![]),this[_0x1c28b1(0x1c5)]=a306_0x1fcc8c(_0x220545[_0x1c28b1(0x1eb)],!![]),this[_0x1c28b1(0x1f2)]=undefined,this[_0x1c28b1(0x1b7)]=undefined,this[_0x1c28b1(0x1b9)]=undefined,this[_0x1c28b1(0x1e6)]=undefined,this[_0x1c28b1(0x206)]=undefined,this[_0x1c28b1(0x1e7)]=undefined,this[_0x1c28b1(0x1e2)]={},this[_0x1c28b1(0x201)]=[],this[_0x1c28b1(0x1ee)]=[],this[_0x1c28b1(0x1cb)]=[],this['_previousClusters']=[],this[_0x1c28b1(0x1d1)]=undefined,this[_0x1c28b1(0x1d0)]=![],this[_0x1c28b1(0x1b2)]=![],this['_cluster']=undefined,this[_0x1c28b1(0x1e1)]=undefined,this[_0x1c28b1(0x1af)]=new a306_0x28e095(),this[_0x1c28b1(0x1da)]=a306_0x1fcc8c(_0x220545[_0x1c28b1(0x1da)],!![]);}function getX(_0x3216a6){return _0x3216a6['coord']['x'];}function getY(_0x1e10d1){var _0x5781a0=a306_0x28b8;return _0x1e10d1[_0x5781a0(0x1bc)]['y'];}function expandBoundingBox(_0x3e25d9,_0x5310fa){var _0x2e1abd=a306_0x28b8;_0x3e25d9['x']-=_0x5310fa,_0x3e25d9['y']-=_0x5310fa,_0x3e25d9[_0x2e1abd(0x1d9)]+=_0x5310fa*0x2,_0x3e25d9[_0x2e1abd(0x1bb)]+=_0x5310fa*0x2;}var labelBoundingBoxScratch=new a306_0x28c02e();function getBoundingBox(_0x3bbe05,_0x11690a,_0x19db3e,_0x3a81f7,_0x1820c5){var _0x1d574a=a306_0x28b8;if(a306_0x38c132(_0x3bbe05[_0x1d574a(0x1f2)])&&_0x3a81f7[_0x1d574a(0x1f9)])_0x1820c5=a306_0x4e3ae7[_0x1d574a(0x1c0)](_0x3bbe05,_0x11690a,_0x1820c5);else{if(a306_0x38c132(_0x3bbe05[_0x1d574a(0x1b7)])&&_0x3a81f7[_0x1d574a(0x1e8)])_0x1820c5=a306_0x5e2ff8[_0x1d574a(0x1c0)](_0x3bbe05,_0x11690a,_0x1820c5);else a306_0x38c132(_0x3bbe05[_0x1d574a(0x1bf)])&&_0x3a81f7[_0x1d574a(0x1c5)]&&(_0x1820c5=a306_0x12423f[_0x1d574a(0x1c0)](_0x3bbe05,_0x11690a,_0x1820c5));}expandBoundingBox(_0x1820c5,_0x19db3e);if(_0x3a81f7[_0x1d574a(0x1f9)]&&!a306_0x38c132(_0x3bbe05[_0x1d574a(0x1f2)])&&a306_0x38c132(_0x3bbe05['id'])&&hasLabelIndex(_0x3a81f7,_0x3bbe05['id']['id'])&&a306_0x38c132(_0x3bbe05['id'][_0x1d574a(0x1ba)])){var _0x2b745d=_0x3a81f7['_collectionIndicesByEntity'][_0x3bbe05['id']['id']][_0x1d574a(0x1ed)],_0x382747=_0x3a81f7['_labelCollection'][_0x1d574a(0x1b3)](_0x2b745d),_0x4f1f49=a306_0x4e3ae7[_0x1d574a(0x1c0)](_0x382747,_0x11690a,labelBoundingBoxScratch);expandBoundingBox(_0x4f1f49,_0x19db3e),_0x1820c5=a306_0x28c02e[_0x1d574a(0x1f8)](_0x1820c5,_0x4f1f49,_0x1820c5);}return _0x1820c5;}function addNonClusteredItem(_0x306fdf,_0x1b606b){var _0x324e30=a306_0x28b8;_0x306fdf['clusterShow']=!![];if(!a306_0x38c132(_0x306fdf[_0x324e30(0x1f2)])&&a306_0x38c132(_0x306fdf['id'])&&hasLabelIndex(_0x1b606b,_0x306fdf['id']['id'])&&a306_0x38c132(_0x306fdf['id'][_0x324e30(0x1ba)])){var _0x28ed71=_0x1b606b['_collectionIndicesByEntity'][_0x306fdf['id']['id']][_0x324e30(0x1ed)],_0xa0cb50=_0x1b606b[_0x324e30(0x1f2)][_0x324e30(0x1b3)](_0x28ed71);_0xa0cb50[_0x324e30(0x1f4)]=!![];}}function addCluster(_0x3682aa,_0x319b92,_0x123e70,_0x4869a9){var _0x3f7f49=a306_0x28b8,_0xcd6dab={'billboard':_0x4869a9['_clusterBillboardCollection'][_0x3f7f49(0x1df)](),'label':_0x4869a9['_clusterLabelCollection'][_0x3f7f49(0x1df)](),'point':_0x4869a9['_clusterPointCollection'][_0x3f7f49(0x1df)]()};_0xcd6dab[_0x3f7f49(0x203)][_0x3f7f49(0x1da)]=![],_0xcd6dab[_0x3f7f49(0x1fc)][_0x3f7f49(0x1da)]=![],_0xcd6dab[_0x3f7f49(0x1e3)][_0x3f7f49(0x1da)]=!![],_0xcd6dab[_0x3f7f49(0x1e3)][_0x3f7f49(0x1ab)]=_0x319b92[_0x3f7f49(0x208)](),_0xcd6dab[_0x3f7f49(0x1e3)]['id']=_0x123e70,_0xcd6dab[_0x3f7f49(0x203)][_0x3f7f49(0x1d3)]=_0xcd6dab[_0x3f7f49(0x1e3)]['position']=_0xcd6dab[_0x3f7f49(0x1fc)]['position']=_0x3682aa,_0x4869a9[_0x3f7f49(0x1af)][_0x3f7f49(0x207)](_0x123e70,_0xcd6dab);}function hasLabelIndex(_0x3b1f36,_0x250e61){var _0x257a5b=a306_0x28b8;return a306_0x38c132(_0x3b1f36)&&a306_0x38c132(_0x3b1f36[_0x257a5b(0x1e2)][_0x250e61])&&a306_0x38c132(_0x3b1f36[_0x257a5b(0x1e2)][_0x250e61]['labelIndex']);}function getScreenSpacePositions(_0xe6f647,_0x106c14,_0x53eba5,_0x5963a5,_0xca0e22){var _0x46fe1d=a306_0x28b8;if(!a306_0x38c132(_0xe6f647))return;var _0x46ae80=_0xe6f647['length'];for(var _0x4535cf=0x0;_0x4535cf<_0x46ae80;++_0x4535cf){var _0x5ab76b=_0xe6f647[_0x46fe1d(0x1b3)](_0x4535cf);_0x5ab76b['clusterShow']=![];if(!_0x5ab76b[_0x46fe1d(0x1da)]||_0xca0e22['_scene'][_0x46fe1d(0x1f7)]===a306_0x2e376b['SCENE3D']&&!_0x5963a5['isPointVisible'](_0x5ab76b[_0x46fe1d(0x1d3)]))continue;var _0x245507=_0xca0e22[_0x46fe1d(0x1f9)]&&a306_0x38c132(_0x5ab76b[_0x46fe1d(0x1f2)]),_0x54c246=_0xca0e22[_0x46fe1d(0x1e8)]&&a306_0x38c132(_0x5ab76b['id'][_0x46fe1d(0x1b0)]),_0x43bdd4=_0xca0e22[_0x46fe1d(0x1c5)]&&a306_0x38c132(_0x5ab76b['id'][_0x46fe1d(0x1d6)]);if(_0x245507&&(_0x43bdd4||_0x54c246))continue;var _0x420764=_0x5ab76b[_0x46fe1d(0x1c2)](_0x53eba5);if(!a306_0x38c132(_0x420764))continue;_0x106c14[_0x46fe1d(0x1d8)]({'index':_0x4535cf,'collection':_0xe6f647,'clustered':![],'coord':_0x420764});}}var pointBoundinRectangleScratch=new a306_0x28c02e(),totalBoundingRectangleScratch=new a306_0x28c02e(),neighborBoundingRectangleScratch=new a306_0x28c02e();function createDeclutterCallback(_0x3a2afb){return function(_0xf0bd44){var _0x1e6af4=a306_0x28b8;if(a306_0x38c132(_0xf0bd44)&&_0xf0bd44<0.05||!_0x3a2afb[_0x1e6af4(0x1aa)])return;var _0x304f08=_0x3a2afb['_scene'],_0x5848c6=_0x3a2afb[_0x1e6af4(0x1f2)],_0x2ac9c6=_0x3a2afb['_billboardCollection'],_0x8081a0=_0x3a2afb['_pointCollection'];if(!a306_0x38c132(_0x5848c6)&&!a306_0x38c132(_0x2ac9c6)&&!a306_0x38c132(_0x8081a0)||!_0x3a2afb['_clusterBillboards']&&!_0x3a2afb[_0x1e6af4(0x1f9)]&&!_0x3a2afb['_clusterPoints'])return;var _0x23ca22=_0x3a2afb[_0x1e6af4(0x206)],_0x49ef27=_0x3a2afb['_clusterBillboardCollection'],_0x4addfb=_0x3a2afb[_0x1e6af4(0x1e7)];a306_0x38c132(_0x23ca22)?_0x23ca22['removeAll']():_0x23ca22=_0x3a2afb[_0x1e6af4(0x206)]=new a306_0x19694d({'scene':_0x304f08});a306_0x38c132(_0x49ef27)?_0x49ef27[_0x1e6af4(0x1ef)]():_0x49ef27=_0x3a2afb[_0x1e6af4(0x1e6)]=new a306_0x1b179a({'scene':_0x304f08});a306_0x38c132(_0x4addfb)?_0x4addfb[_0x1e6af4(0x1ef)]():_0x4addfb=_0x3a2afb['_clusterPointCollection']=new a306_0xb66e31();var _0xa2a5ac=_0x3a2afb[_0x1e6af4(0x1cc)],_0x1c6ece=_0x3a2afb['_minimumClusterSize'],_0x388742=_0x3a2afb[_0x1e6af4(0x1d7)],_0x57bb54=[],_0x1f187a=_0x3a2afb[_0x1e6af4(0x1d1)],_0x4c501b=_0x304f08[_0x1e6af4(0x1fb)][_0x1e6af4(0x1bd)]['height'],_0x521bd2=_0x304f08[_0x1e6af4(0x1d4)][_0x1e6af4(0x1fa)],_0x1c459f=_0x304f08[_0x1e6af4(0x1fb)][_0x1e6af4(0x1ea)],_0xa90576=new a306_0x328a75(_0x521bd2,_0x1c459f),_0x1f3293=[];_0x3a2afb[_0x1e6af4(0x1f9)]&&getScreenSpacePositions(_0x5848c6,_0x1f3293,_0x304f08,_0xa90576,_0x3a2afb);_0x3a2afb['_clusterBillboards']&&getScreenSpacePositions(_0x2ac9c6,_0x1f3293,_0x304f08,_0xa90576,_0x3a2afb);_0x3a2afb[_0x1e6af4(0x1c5)]&&getScreenSpacePositions(_0x8081a0,_0x1f3293,_0x304f08,_0xa90576,_0x3a2afb);var _0x37b62c,_0x487ba7,_0x4ad193,_0x4918ea,_0x296426,_0x4375e6,_0x466bd7,_0x594b27,_0x19a187,_0x5ecf38,_0x1926e9,_0x20362e,_0x4ea8ec=new a306_0x5f31c4(_0x1f3293,getX,getY,0x40,Int32Array);if(_0x4c501b<_0x1f187a){_0x4ad193=_0x388742[_0x1e6af4(0x1fd)];for(_0x37b62c=0x0;_0x37b62c<_0x4ad193;++_0x37b62c){var _0x4c5ee1=_0x388742[_0x37b62c];if(!_0xa90576['isPointVisible'](_0x4c5ee1['position']))continue;var _0x1cd426=a306_0x5e2ff8[_0x1e6af4(0x205)](a306_0x511a11[_0x1e6af4(0x1c1)],_0x4c5ee1[_0x1e6af4(0x1d3)],a306_0x5d8c6c['ZERO'],a306_0x2f606c[_0x1e6af4(0x1ec)],_0x304f08);if(!a306_0x38c132(_0x1cd426))continue;var _0x20dfc1=0x1-_0x4c501b/_0x1f187a,_0x52b98b=_0x4c5ee1[_0x1e6af4(0x1d9)]=_0x4c5ee1[_0x1e6af4(0x1d9)]*_0x20dfc1,_0x2803f4=_0x4c5ee1[_0x1e6af4(0x1bb)]=_0x4c5ee1[_0x1e6af4(0x1bb)]*_0x20dfc1;_0x52b98b=Math['max'](_0x52b98b,_0x4c5ee1[_0x1e6af4(0x209)]),_0x2803f4=Math['max'](_0x2803f4,_0x4c5ee1[_0x1e6af4(0x1ac)]);var _0x4911f6=_0x1cd426['x']-_0x52b98b*0.5,_0x13b806=_0x1cd426['y']-_0x2803f4*0.5,_0x33d5cd=_0x1cd426['x']+_0x52b98b,_0x30efac=_0x1cd426['y']+_0x2803f4;_0x296426=_0x4ea8ec['range'](_0x4911f6,_0x13b806,_0x33d5cd,_0x30efac),_0x4375e6=_0x296426[_0x1e6af4(0x1fd)],_0x5ecf38=0x0,_0x19a187=[];for(_0x487ba7=0x0;_0x487ba7<_0x4375e6;++_0x487ba7){_0x466bd7=_0x296426[_0x487ba7],_0x594b27=_0x1f3293[_0x466bd7],!_0x594b27[_0x1e6af4(0x1e4)]&&(++_0x5ecf38,_0x1926e9=_0x594b27[_0x1e6af4(0x1fe)],_0x20362e=_0x594b27[_0x1e6af4(0x1ff)],_0x19a187[_0x1e6af4(0x1d8)](_0x1926e9[_0x1e6af4(0x1b3)](_0x20362e)['id']));}if(_0x5ecf38>=_0x1c6ece){addCluster(_0x4c5ee1[_0x1e6af4(0x1d3)],_0x5ecf38,_0x19a187,_0x3a2afb),_0x57bb54['push'](_0x4c5ee1);for(_0x487ba7=0x0;_0x487ba7<_0x4375e6;++_0x487ba7){_0x1f3293[_0x296426[_0x487ba7]][_0x1e6af4(0x1e4)]=!![];}}}}_0x4ad193=_0x1f3293[_0x1e6af4(0x1fd)];for(_0x37b62c=0x0;_0x37b62c<_0x4ad193;++_0x37b62c){var _0x3f7717=_0x1f3293[_0x37b62c];if(_0x3f7717['clustered'])continue;_0x3f7717['clustered']=!![],_0x1926e9=_0x3f7717[_0x1e6af4(0x1fe)],_0x20362e=_0x3f7717['index'];var _0x171a68=_0x1926e9[_0x1e6af4(0x1b3)](_0x20362e);_0x4918ea=getBoundingBox(_0x171a68,_0x3f7717['coord'],_0xa2a5ac,_0x3a2afb,pointBoundinRectangleScratch);var _0x17e59a=a306_0x28c02e[_0x1e6af4(0x1a6)](_0x4918ea,totalBoundingRectangleScratch);_0x296426=_0x4ea8ec[_0x1e6af4(0x1dc)](_0x4918ea['x'],_0x4918ea['y'],_0x4918ea['x']+_0x4918ea[_0x1e6af4(0x1d9)],_0x4918ea['y']+_0x4918ea[_0x1e6af4(0x1bb)]),_0x4375e6=_0x296426[_0x1e6af4(0x1fd)];var _0x29c2bb=a306_0x5d8c6c[_0x1e6af4(0x1a6)](_0x171a68['position']);_0x5ecf38=0x1,_0x19a187=[_0x171a68['id']];for(_0x487ba7=0x0;_0x487ba7<_0x4375e6;++_0x487ba7){_0x466bd7=_0x296426[_0x487ba7],_0x594b27=_0x1f3293[_0x466bd7];if(!_0x594b27['clustered']){var _0x258a2e=_0x594b27[_0x1e6af4(0x1fe)]['get'](_0x594b27['index']),_0xb9cce5=getBoundingBox(_0x258a2e,_0x594b27[_0x1e6af4(0x1bc)],_0xa2a5ac,_0x3a2afb,neighborBoundingRectangleScratch);a306_0x5d8c6c[_0x1e6af4(0x1df)](_0x258a2e[_0x1e6af4(0x1d3)],_0x29c2bb,_0x29c2bb),a306_0x28c02e[_0x1e6af4(0x1f8)](_0x17e59a,_0xb9cce5,_0x17e59a),++_0x5ecf38,_0x19a187[_0x1e6af4(0x1d8)](_0x258a2e['id']);}}if(_0x5ecf38>=_0x1c6ece){var _0x33b231=a306_0x5d8c6c['multiplyByScalar'](_0x29c2bb,0x1/_0x5ecf38,_0x29c2bb);addCluster(_0x33b231,_0x5ecf38,_0x19a187,_0x3a2afb),_0x57bb54[_0x1e6af4(0x1d8)]({'position':_0x33b231,'width':_0x17e59a[_0x1e6af4(0x1d9)],'height':_0x17e59a[_0x1e6af4(0x1bb)],'minimumWidth':_0x4918ea[_0x1e6af4(0x1d9)],'minimumHeight':_0x4918ea['height']});for(_0x487ba7=0x0;_0x487ba7<_0x4375e6;++_0x487ba7){_0x1f3293[_0x296426[_0x487ba7]]['clustered']=!![];}}else addNonClusteredItem(_0x171a68,_0x3a2afb);}_0x23ca22[_0x1e6af4(0x1fd)]===0x0&&(_0x23ca22['destroy'](),_0x3a2afb[_0x1e6af4(0x206)]=undefined),_0x49ef27[_0x1e6af4(0x1fd)]===0x0&&(_0x49ef27['destroy'](),_0x3a2afb[_0x1e6af4(0x1e6)]=undefined),_0x4addfb[_0x1e6af4(0x1fd)]===0x0&&(_0x4addfb[_0x1e6af4(0x1b4)](),_0x3a2afb[_0x1e6af4(0x1e7)]=undefined),_0x3a2afb['_previousClusters']=_0x57bb54,_0x3a2afb['_previousHeight']=_0x4c501b;};}function a306_0x234c(){var _0x592b5d=['union','_clusterLabels','ellipsoid','camera','point','length','collection','index','changed','_unusedLabelIndices','2363224EaRRlo','billboard','_minimumClusterSizeDirty','_computeScreenSpacePosition','_clusterLabelCollection','raiseEvent','toLocaleString','minimumWidth','clone','getLabel','removeLabel','4434oDCeZQ','enabled','text','minimumHeight','clusterBillboards','getPoint','_clusterEvent','_billboard','489223QkZyDg','_clusterDirty','get','destroy','EMPTY_OBJECT','removePoint','_billboardCollection','18190bVgptG','_pointCollection','_label','height','coord','positionCartographic','minimumClusterSize','_pointPrimitiveCollection','getScreenSpaceBoundingBox','IDENTITY','computeScreenSpacePosition','33240lVooXM','2DQlnOE','_clusterPoints','207crxWsf','1428xEVodF','76YjKYln','removeBillboard','pointIndex','_unusedPointIndices','_pixelRange','_pixelRangeDirty','billboardIndex','defineProperties','_enabledDirty','_previousHeight','clusterLabels','position','mapProjection','commandList','_point','_previousClusters','push','width','show','_cluster','range','update','prototype','add','_minimumClusterSize','_removeEventListener','_collectionIndicesByEntity','label','clustered','image','_clusterBillboardCollection','_clusterPointCollection','_clusterBillboards','2169563VGZGSx','positionWC','clusterPoints','ZERO','labelIndex','_unusedBillboardIndices','removeAll','_enabled','_scene','_labelCollection','_glyphs','clusterShow','addEventListener','705515yfSgOh','mode'];a306_0x234c=function(){return _0x592b5d;};return a306_0x234c();}EntityCluster[a306_0x2381fc(0x1de)]['_initialize']=function(_0x5bbf48){var _0x160ccb=a306_0x2381fc;this[_0x160ccb(0x1f1)]=_0x5bbf48;var _0x24081a=createDeclutterCallback(this);this[_0x160ccb(0x1db)]=_0x24081a,this[_0x160ccb(0x1e1)]=_0x5bbf48[_0x160ccb(0x1fb)][_0x160ccb(0x200)][_0x160ccb(0x1f5)](_0x24081a);},Object[a306_0x2381fc(0x1cf)](EntityCluster[a306_0x2381fc(0x1de)],{'enabled':{'get':function(){var _0x1f6534=a306_0x2381fc;return this[_0x1f6534(0x1f0)];},'set':function(_0x4056c4){var _0x4ad2ed=a306_0x2381fc;this['_enabledDirty']=_0x4056c4!==this[_0x4ad2ed(0x1f0)],this[_0x4ad2ed(0x1f0)]=_0x4056c4;}},'pixelRange':{'get':function(){var _0x2dced8=a306_0x2381fc;return this[_0x2dced8(0x1cc)];},'set':function(_0x364741){var _0x334202=a306_0x2381fc;this['_clusterDirty']=this[_0x334202(0x1b2)]||_0x364741!==this[_0x334202(0x1cc)],this[_0x334202(0x1cc)]=_0x364741;}},'minimumClusterSize':{'get':function(){var _0x44b766=a306_0x2381fc;return this[_0x44b766(0x1e0)];},'set':function(_0x53c908){var _0x59a27d=a306_0x2381fc;this['_clusterDirty']=this[_0x59a27d(0x1b2)]||_0x53c908!==this[_0x59a27d(0x1e0)],this[_0x59a27d(0x1e0)]=_0x53c908;}},'clusterEvent':{'get':function(){return this['_clusterEvent'];}},'clusterBillboards':{'get':function(){return this['_clusterBillboards'];},'set':function(_0x3325e1){var _0x346e48=a306_0x2381fc;this[_0x346e48(0x1b2)]=this[_0x346e48(0x1b2)]||_0x3325e1!==this['_clusterBillboards'],this['_clusterBillboards']=_0x3325e1;}},'clusterLabels':{'get':function(){return this['_clusterLabels'];},'set':function(_0x531f6c){var _0x125a0b=a306_0x2381fc;this[_0x125a0b(0x1b2)]=this['_clusterDirty']||_0x531f6c!==this[_0x125a0b(0x1f9)],this[_0x125a0b(0x1f9)]=_0x531f6c;}},'clusterPoints':{'get':function(){var _0x17a19a=a306_0x2381fc;return this[_0x17a19a(0x1c5)];},'set':function(_0x19f69b){var _0x55a757=a306_0x2381fc;this['_clusterDirty']=this['_clusterDirty']||_0x19f69b!==this[_0x55a757(0x1c5)],this[_0x55a757(0x1c5)]=_0x19f69b;}}});function createGetEntity(_0x54b2b6,_0x501a68,_0x5c4ebc,_0x3c35e7){return function(_0xd6e7f0){var _0x5953fd=a306_0x28b8,_0x5e2126=this[_0x54b2b6];!a306_0x38c132(this[_0x5953fd(0x1e2)])&&(this[_0x5953fd(0x1e2)]={});var _0x4e5644=this[_0x5953fd(0x1e2)][_0xd6e7f0['id']];!a306_0x38c132(_0x4e5644)&&(_0x4e5644=this[_0x5953fd(0x1e2)][_0xd6e7f0['id']]={'billboardIndex':undefined,'labelIndex':undefined,'pointIndex':undefined});if(a306_0x38c132(_0x5e2126)&&a306_0x38c132(_0x4e5644[_0x3c35e7]))return _0x5e2126['get'](_0x4e5644[_0x3c35e7]);!a306_0x38c132(_0x5e2126)&&(_0x5e2126=this[_0x54b2b6]=new _0x501a68({'scene':this['_scene']}));var _0x184335,_0x3caa53,_0x56594f=this[_0x5c4ebc];return _0x56594f[_0x5953fd(0x1fd)]>0x0?(_0x184335=_0x56594f['pop'](),_0x3caa53=_0x5e2126['get'](_0x184335)):(_0x3caa53=_0x5e2126['add'](),_0x184335=_0x5e2126[_0x5953fd(0x1fd)]-0x1),_0x4e5644[_0x3c35e7]=_0x184335,this[_0x5953fd(0x1b2)]=!![],_0x3caa53;};}function removeEntityIndicesIfUnused(_0x3cf66a,_0x43b7c4){var _0x154d51=a306_0x2381fc,_0x3e42f=_0x3cf66a[_0x154d51(0x1e2)][_0x43b7c4];!a306_0x38c132(_0x3e42f[_0x154d51(0x1ce)])&&!a306_0x38c132(_0x3e42f['labelIndex'])&&!a306_0x38c132(_0x3e42f['pointIndex'])&&delete _0x3cf66a[_0x154d51(0x1e2)][_0x43b7c4];}EntityCluster['prototype'][a306_0x2381fc(0x1a7)]=createGetEntity(a306_0x2381fc(0x1f2),a306_0x19694d,a306_0x2381fc(0x201),a306_0x2381fc(0x1ed)),EntityCluster['prototype'][a306_0x2381fc(0x1a8)]=function(_0x2c762a){var _0xb10cad=a306_0x2381fc,_0x3eda68=this['_collectionIndicesByEntity']&&this[_0xb10cad(0x1e2)][_0x2c762a['id']];if(!a306_0x38c132(this[_0xb10cad(0x1f2)])||!a306_0x38c132(_0x3eda68)||!a306_0x38c132(_0x3eda68[_0xb10cad(0x1ed)]))return;var _0x1cc2c0=_0x3eda68['labelIndex'];_0x3eda68['labelIndex']=undefined,removeEntityIndicesIfUnused(this,_0x2c762a['id']);var _0x49656b=this[_0xb10cad(0x1f2)][_0xb10cad(0x1b3)](_0x1cc2c0);_0x49656b[_0xb10cad(0x1da)]=![],_0x49656b[_0xb10cad(0x1ab)]='',_0x49656b['id']=undefined,this[_0xb10cad(0x201)][_0xb10cad(0x1d8)](_0x1cc2c0),this[_0xb10cad(0x1b2)]=!![];},EntityCluster[a306_0x2381fc(0x1de)]['getBillboard']=createGetEntity(a306_0x2381fc(0x1b7),a306_0x1b179a,'_unusedBillboardIndices',a306_0x2381fc(0x1ce)),EntityCluster[a306_0x2381fc(0x1de)][a306_0x2381fc(0x1c9)]=function(_0xfadc60){var _0x33155a=a306_0x2381fc,_0x13c191=this[_0x33155a(0x1e2)]&&this[_0x33155a(0x1e2)][_0xfadc60['id']];if(!a306_0x38c132(this[_0x33155a(0x1b7)])||!a306_0x38c132(_0x13c191)||!a306_0x38c132(_0x13c191[_0x33155a(0x1ce)]))return;var _0x5e9fc5=_0x13c191['billboardIndex'];_0x13c191[_0x33155a(0x1ce)]=undefined,removeEntityIndicesIfUnused(this,_0xfadc60['id']);var _0x57087c=this[_0x33155a(0x1b7)][_0x33155a(0x1b3)](_0x5e9fc5);_0x57087c['id']=undefined,_0x57087c['show']=![],_0x57087c[_0x33155a(0x1e5)]=undefined,this['_unusedBillboardIndices']['push'](_0x5e9fc5),this[_0x33155a(0x1b2)]=!![];},EntityCluster[a306_0x2381fc(0x1de)][a306_0x2381fc(0x1ae)]=createGetEntity('_pointCollection',a306_0xb66e31,'_unusedPointIndices',a306_0x2381fc(0x1ca)),EntityCluster[a306_0x2381fc(0x1de)][a306_0x2381fc(0x1b6)]=function(_0x31995c){var _0x262c88=a306_0x2381fc,_0x2749a2=this['_collectionIndicesByEntity']&&this[_0x262c88(0x1e2)][_0x31995c['id']];if(!a306_0x38c132(this[_0x262c88(0x1b9)])||!a306_0x38c132(_0x2749a2)||!a306_0x38c132(_0x2749a2[_0x262c88(0x1ca)]))return;var _0x34c29f=_0x2749a2[_0x262c88(0x1ca)];_0x2749a2[_0x262c88(0x1ca)]=undefined,removeEntityIndicesIfUnused(this,_0x31995c['id']);var _0x19fcd9=this[_0x262c88(0x1b9)]['get'](_0x34c29f);_0x19fcd9[_0x262c88(0x1da)]=![],_0x19fcd9['id']=undefined,this[_0x262c88(0x1cb)][_0x262c88(0x1d8)](_0x34c29f),this[_0x262c88(0x1b2)]=!![];};function disableCollectionClustering(_0x140881){var _0xfe6870=a306_0x2381fc;if(!a306_0x38c132(_0x140881))return;var _0x156583=_0x140881[_0xfe6870(0x1fd)];for(var _0x3aaeae=0x0;_0x3aaeae<_0x156583;++_0x3aaeae){_0x140881[_0xfe6870(0x1b3)](_0x3aaeae)[_0xfe6870(0x1f4)]=!![];}}function updateEnable(_0x216dd4){var _0x4dfc70=a306_0x2381fc;if(_0x216dd4[_0x4dfc70(0x1aa)])return;a306_0x38c132(_0x216dd4[_0x4dfc70(0x206)])&&_0x216dd4['_clusterLabelCollection'][_0x4dfc70(0x1b4)](),a306_0x38c132(_0x216dd4['_clusterBillboardCollection'])&&_0x216dd4[_0x4dfc70(0x1e6)][_0x4dfc70(0x1b4)](),a306_0x38c132(_0x216dd4['_clusterPointCollection'])&&_0x216dd4[_0x4dfc70(0x1e7)][_0x4dfc70(0x1b4)](),_0x216dd4[_0x4dfc70(0x206)]=undefined,_0x216dd4[_0x4dfc70(0x1e6)]=undefined,_0x216dd4[_0x4dfc70(0x1e7)]=undefined,disableCollectionClustering(_0x216dd4[_0x4dfc70(0x1f2)]),disableCollectionClustering(_0x216dd4[_0x4dfc70(0x1b7)]),disableCollectionClustering(_0x216dd4[_0x4dfc70(0x1b9)]);}EntityCluster['prototype']['update']=function(_0x1c88e3){var _0x2fcc49=a306_0x2381fc;if(!this[_0x2fcc49(0x1da)])return;var _0x1c6b52;a306_0x38c132(this[_0x2fcc49(0x1f2)])&&this[_0x2fcc49(0x1f2)][_0x2fcc49(0x1fd)]>0x0&&this['_labelCollection'][_0x2fcc49(0x1b3)](0x0)[_0x2fcc49(0x1f3)][_0x2fcc49(0x1fd)]===0x0&&(_0x1c6b52=_0x1c88e3[_0x2fcc49(0x1d5)],_0x1c88e3[_0x2fcc49(0x1d5)]=[],this[_0x2fcc49(0x1f2)][_0x2fcc49(0x1dd)](_0x1c88e3),_0x1c88e3[_0x2fcc49(0x1d5)]=_0x1c6b52),a306_0x38c132(this['_billboardCollection'])&&this[_0x2fcc49(0x1b7)]['length']>0x0&&!a306_0x38c132(this[_0x2fcc49(0x1b7)][_0x2fcc49(0x1b3)](0x0)[_0x2fcc49(0x1d9)])&&(_0x1c6b52=_0x1c88e3[_0x2fcc49(0x1d5)],_0x1c88e3[_0x2fcc49(0x1d5)]=[],this[_0x2fcc49(0x1b7)][_0x2fcc49(0x1dd)](_0x1c88e3),_0x1c88e3[_0x2fcc49(0x1d5)]=_0x1c6b52),this[_0x2fcc49(0x1d0)]&&(this['_enabledDirty']=![],updateEnable(this),this[_0x2fcc49(0x1b2)]=!![]),this[_0x2fcc49(0x1b2)]&&(this['_clusterDirty']=![],this[_0x2fcc49(0x1db)]()),a306_0x38c132(this['_clusterLabelCollection'])&&this[_0x2fcc49(0x206)][_0x2fcc49(0x1dd)](_0x1c88e3),a306_0x38c132(this[_0x2fcc49(0x1e6)])&&this[_0x2fcc49(0x1e6)][_0x2fcc49(0x1dd)](_0x1c88e3),a306_0x38c132(this[_0x2fcc49(0x1e7)])&&this[_0x2fcc49(0x1e7)]['update'](_0x1c88e3),a306_0x38c132(this[_0x2fcc49(0x1f2)])&&this['_labelCollection'][_0x2fcc49(0x1dd)](_0x1c88e3),a306_0x38c132(this[_0x2fcc49(0x1b7)])&&this[_0x2fcc49(0x1b7)]['update'](_0x1c88e3),a306_0x38c132(this[_0x2fcc49(0x1b9)])&&this[_0x2fcc49(0x1b9)][_0x2fcc49(0x1dd)](_0x1c88e3);},EntityCluster['prototype'][a306_0x2381fc(0x1b4)]=function(){var _0x237bb7=a306_0x2381fc;return this[_0x237bb7(0x1f2)]=this[_0x237bb7(0x1f2)]&&this['_labelCollection'][_0x237bb7(0x1b4)](),this[_0x237bb7(0x1b7)]=this[_0x237bb7(0x1b7)]&&this[_0x237bb7(0x1b7)]['destroy'](),this[_0x237bb7(0x1b9)]=this[_0x237bb7(0x1b9)]&&this[_0x237bb7(0x1b9)][_0x237bb7(0x1b4)](),this[_0x237bb7(0x206)]=this[_0x237bb7(0x206)]&&this[_0x237bb7(0x206)][_0x237bb7(0x1b4)](),this[_0x237bb7(0x1e6)]=this[_0x237bb7(0x1e6)]&&this[_0x237bb7(0x1e6)][_0x237bb7(0x1b4)](),this[_0x237bb7(0x1e7)]=this[_0x237bb7(0x1e7)]&&this[_0x237bb7(0x1e7)][_0x237bb7(0x1b4)](),a306_0x38c132(this[_0x237bb7(0x1e1)])&&(this[_0x237bb7(0x1e1)](),this[_0x237bb7(0x1e1)]=undefined),this['_labelCollection']=undefined,this[_0x237bb7(0x1b7)]=undefined,this[_0x237bb7(0x1b9)]=undefined,this[_0x237bb7(0x1e6)]=undefined,this[_0x237bb7(0x206)]=undefined,this['_clusterPointCollection']=undefined,this[_0x237bb7(0x1e2)]=undefined,this['_unusedLabelIndices']=[],this[_0x237bb7(0x1ee)]=[],this[_0x237bb7(0x1cb)]=[],this[_0x237bb7(0x1d7)]=[],this['_previousHeight']=undefined,this[_0x237bb7(0x1d0)]=![],this[_0x237bb7(0x1cd)]=![],this[_0x237bb7(0x204)]=![],undefined;};export default EntityCluster;