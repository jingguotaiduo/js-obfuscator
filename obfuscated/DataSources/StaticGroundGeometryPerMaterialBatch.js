var a361_0x1e3c41=a361_0x5d93;(function(_0x280d41,_0x5be96d){var _0x53aa70=a361_0x5d93,_0xcf9b81=_0x280d41();while(!![]){try{var _0x22b504=-parseInt(_0x53aa70(0xab))/0x1*(parseInt(_0x53aa70(0xd2))/0x2)+parseInt(_0x53aa70(0xd7))/0x3+-parseInt(_0x53aa70(0xbf))/0x4+-parseInt(_0x53aa70(0xe4))/0x5+-parseInt(_0x53aa70(0xbe))/0x6+parseInt(_0x53aa70(0xb2))/0x7*(parseInt(_0x53aa70(0xee))/0x8)+parseInt(_0x53aa70(0xbd))/0x9;if(_0x22b504===_0x5be96d)break;else _0xcf9b81['push'](_0xcf9b81['shift']());}catch(_0x12fbe8){_0xcf9b81['push'](_0xcf9b81['shift']());}}}(a361_0x3b43,0x4681f));import a361_0x34f918 from'../Core/AssociativeArray.js';import a361_0x31a9b2 from'../Core/defined.js';import a361_0x44bfc6 from'../Core/DistanceDisplayCondition.js';import a361_0xec941d from'../Core/DistanceDisplayConditionGeometryInstanceAttribute.js';import a361_0x17f912 from'../Core/RectangleCollisionChecker.js';import a361_0x1a2e57 from'../Core/ShowGeometryInstanceAttribute.js';import a361_0x585a76 from'../Scene/GroundPrimitive.js';import a361_0x4a3c71 from'../Scene/ShadowVolumeAppearance.js';import a361_0x36bcb8 from'./BoundingSphereState.js';import a361_0x258cc2 from'./ColorMaterialProperty.js';import a361_0x1c80c6 from'./MaterialProperty.js';import a361_0x23ea94 from'./Property.js';var distanceDisplayConditionScratch=new a361_0x44bfc6(),defaultDistanceDisplayCondition=new a361_0x44bfc6();function Batch(_0x2f06a5,_0x1f569e,_0x830dc9,_0x21fe74,_0x4a58f2,_0x400e2c){var _0x5f0b42=a361_0x5d93;this[_0x5f0b42(0xe5)]=_0x2f06a5,this[_0x5f0b42(0xd4)]=_0x1f569e,this[_0x5f0b42(0xeb)]=_0x830dc9,this[_0x5f0b42(0xba)]=_0x21fe74,this[_0x5f0b42(0xe9)]=new a361_0x34f918(),this['createPrimitive']=!![],this[_0x5f0b42(0xa8)]=undefined,this['oldPrimitive']=undefined,this[_0x5f0b42(0xcc)]=new a361_0x34f918(),this['material']=undefined,this[_0x5f0b42(0xc8)]=new a361_0x34f918(),this['attributes']=new a361_0x34f918(),this['invalidated']=![],this[_0x5f0b42(0xb5)]=_0x21fe74[_0x5f0b42(0xdc)][_0x5f0b42(0xb6)](Batch['prototype'][_0x5f0b42(0xda)],this),this[_0x5f0b42(0xaa)]=new a361_0x34f918(),this[_0x5f0b42(0xb3)]=new a361_0x34f918(),this['usingSphericalTextureCoordinates']=_0x4a58f2,this['zIndex']=_0x400e2c,this['rectangleCollisionCheck']=new a361_0x17f912();}Batch[a361_0x1e3c41(0xd8)][a361_0x1e3c41(0xda)]=function(){var _0x1045b3=a361_0x1e3c41;this[_0x1045b3(0xd5)]=!![];},Batch[a361_0x1e3c41(0xd8)][a361_0x1e3c41(0xdf)]=function(_0x41e55d){var _0x23fefa=a361_0x1e3c41;return this[_0x23fefa(0xad)][_0x23fefa(0xa7)](_0x41e55d);},Batch[a361_0x1e3c41(0xd8)]['isMaterial']=function(_0x3f59f8){var _0x232bbb=a361_0x1e3c41,_0x132f50=this[_0x232bbb(0xba)],_0x39bc1d=_0x3f59f8[_0x232bbb(0xc9)];if(_0x39bc1d===_0x132f50||_0x39bc1d instanceof a361_0x258cc2&&_0x132f50 instanceof a361_0x258cc2)return!![];return a361_0x31a9b2(_0x132f50)&&_0x132f50[_0x232bbb(0xe7)](_0x39bc1d);},Batch[a361_0x1e3c41(0xd8)][a361_0x1e3c41(0xdd)]=function(_0x25cb3a,_0x36ca7d,_0x15a915){var _0xca4476=a361_0x1e3c41,_0x5e8910=_0x36ca7d['id'];this[_0xca4476(0xe9)][_0xca4476(0xbc)](_0x5e8910,_0x36ca7d),this[_0xca4476(0xcc)][_0xca4476(0xbc)](_0x5e8910,_0x15a915),this[_0xca4476(0xad)]['insert'](_0x5e8910,_0x15a915['geometry'][_0xca4476(0xc1)]);if(!_0x36ca7d[_0xca4476(0xea)]||!_0x36ca7d[_0xca4476(0xc9)]['isConstant']||!a361_0x23ea94[_0xca4476(0xef)](_0x36ca7d[_0xca4476(0xb0)]))this[_0xca4476(0xc8)][_0xca4476(0xbc)](_0x5e8910,_0x36ca7d);else{var _0x48c24a=this;this[_0xca4476(0xaa)][_0xca4476(0xbc)](_0x5e8910,_0x36ca7d['entity'][_0xca4476(0xdc)]['addEventListener'](function(_0x2429c1,_0x161e2a,_0x2b4c6f,_0x553f33){var _0x31866b=_0xca4476;_0x161e2a===_0x31866b(0xf0)&&_0x48c24a[_0x31866b(0xb3)][_0x31866b(0xbc)](_0x36ca7d['id'],_0x36ca7d);}));}this['createPrimitive']=!![];},Batch[a361_0x1e3c41(0xd8)][a361_0x1e3c41(0xd6)]=function(_0x803da3){var _0x130de9=a361_0x1e3c41,_0xd2c8f9=_0x803da3['id'],_0x372adf=this['geometry'][_0x130de9(0xac)](_0xd2c8f9);this[_0x130de9(0xc5)]=this[_0x130de9(0xcc)][_0x130de9(0xd6)](_0xd2c8f9)||this[_0x130de9(0xc5)];if(this['updaters'][_0x130de9(0xd6)](_0xd2c8f9)){this[_0x130de9(0xad)]['remove'](_0xd2c8f9,_0x372adf[_0x130de9(0xcc)][_0x130de9(0xc1)]),this[_0x130de9(0xc8)][_0x130de9(0xd6)](_0xd2c8f9);var _0x101376=this['subscriptions'][_0x130de9(0xac)](_0xd2c8f9);return a361_0x31a9b2(_0x101376)&&(_0x101376(),this[_0x130de9(0xaa)][_0x130de9(0xd6)](_0xd2c8f9)),!![];}return![];},Batch['prototype'][a361_0x1e3c41(0xd1)]=function(_0x30c549){var _0x5da389=a361_0x1e3c41,_0x4d03e6=!![],_0x3eb8ee=this[_0x5da389(0xa8)],_0x1ac4fd=this[_0x5da389(0xe5)],_0x3c4899=this['geometry'][_0x5da389(0xdb)],_0xa800e1;if(this[_0x5da389(0xc5)]){var _0x361eca=_0x3c4899[_0x5da389(0xd3)];if(_0x361eca>0x0)a361_0x31a9b2(_0x3eb8ee)&&(!a361_0x31a9b2(this[_0x5da389(0xec)])?this['oldPrimitive']=_0x3eb8ee:_0x1ac4fd[_0x5da389(0xd6)](_0x3eb8ee)),this[_0x5da389(0xb1)]=a361_0x1c80c6['getValue'](_0x30c549,this[_0x5da389(0xba)],this['material']),_0x3eb8ee=new a361_0x585a76({'show':![],'asynchronous':!![],'geometryInstances':_0x3c4899[_0x5da389(0xa5)](),'appearance':new this[(_0x5da389(0xeb))]({'material':this[_0x5da389(0xb1)]}),'classificationType':this[_0x5da389(0xd4)]}),_0x1ac4fd[_0x5da389(0xdd)](_0x3eb8ee,this['zIndex']),_0x4d03e6=![];else{a361_0x31a9b2(_0x3eb8ee)&&(_0x1ac4fd[_0x5da389(0xd6)](_0x3eb8ee),_0x3eb8ee=undefined);var _0x369395=this[_0x5da389(0xec)];a361_0x31a9b2(_0x369395)&&(_0x1ac4fd[_0x5da389(0xd6)](_0x369395),this[_0x5da389(0xec)]=undefined);}this[_0x5da389(0xcb)][_0x5da389(0xb8)](),this['primitive']=_0x3eb8ee,this[_0x5da389(0xc5)]=![];}else{if(a361_0x31a9b2(_0x3eb8ee)&&_0x3eb8ee[_0x5da389(0xc2)]){_0x3eb8ee[_0x5da389(0xb9)]=!![];a361_0x31a9b2(this[_0x5da389(0xec)])&&(_0x1ac4fd[_0x5da389(0xd6)](this[_0x5da389(0xec)]),this['oldPrimitive']=undefined);this[_0x5da389(0xb1)]=a361_0x1c80c6[_0x5da389(0xb7)](_0x30c549,this[_0x5da389(0xba)],this['material']),this[_0x5da389(0xa8)]['appearance']['material']=this[_0x5da389(0xb1)];var _0x46fec8=this[_0x5da389(0xc8)][_0x5da389(0xdb)],_0x35b849=_0x46fec8['length'];for(_0xa800e1=0x0;_0xa800e1<_0x35b849;_0xa800e1++){var _0x3d2d83=_0x46fec8[_0xa800e1],_0x2e1ae3=_0x3d2d83[_0x5da389(0xaf)],_0x175e15=this['geometry'][_0x5da389(0xac)](_0x3d2d83['id']),_0x5120d4=this['attributes'][_0x5da389(0xac)](_0x175e15['id']['id']);!a361_0x31a9b2(_0x5120d4)&&(_0x5120d4=_0x3eb8ee['getGeometryInstanceAttributes'](_0x175e15['id']),this[_0x5da389(0xcb)][_0x5da389(0xbc)](_0x175e15['id']['id'],_0x5120d4));var _0x11f30b=_0x2e1ae3[_0x5da389(0xf0)]&&(_0x3d2d83['hasConstantFill']||_0x3d2d83[_0x5da389(0xe2)](_0x30c549)),_0x29df01=_0x5120d4[_0x5da389(0xb9)][0x0]===0x1;_0x11f30b!==_0x29df01&&(_0x5120d4['show']=a361_0x1a2e57[_0x5da389(0xc4)](_0x11f30b,_0x5120d4[_0x5da389(0xb9)]));var _0x37aad6=_0x3d2d83['distanceDisplayConditionProperty'];if(!a361_0x23ea94[_0x5da389(0xef)](_0x37aad6)){var _0x5838ac=a361_0x23ea94[_0x5da389(0xd9)](_0x37aad6,_0x30c549,defaultDistanceDisplayCondition,distanceDisplayConditionScratch);!a361_0x44bfc6['equals'](_0x5838ac,_0x5120d4['_lastDistanceDisplayCondition'])&&(_0x5120d4[_0x5da389(0xa6)]=a361_0x44bfc6['clone'](_0x5838ac,_0x5120d4[_0x5da389(0xa6)]),_0x5120d4[_0x5da389(0xc3)]=a361_0xec941d[_0x5da389(0xc4)](_0x5838ac,_0x5120d4[_0x5da389(0xc3)]));}}this['updateShows'](_0x3eb8ee);}else a361_0x31a9b2(_0x3eb8ee)&&!_0x3eb8ee[_0x5da389(0xc2)]&&(_0x4d03e6=![]);}return _0x4d03e6;},Batch[a361_0x1e3c41(0xd8)][a361_0x1e3c41(0xe8)]=function(_0x1e3b1e){var _0x2fad17=a361_0x1e3c41,_0x53d5d2=this[_0x2fad17(0xb3)][_0x2fad17(0xdb)],_0x3a23d0=_0x53d5d2['length'];for(var _0x16402a=0x0;_0x16402a<_0x3a23d0;_0x16402a++){var _0x290e0e=_0x53d5d2[_0x16402a],_0xf6ec84=_0x290e0e[_0x2fad17(0xaf)],_0x33202a=this[_0x2fad17(0xcc)][_0x2fad17(0xac)](_0x290e0e['id']),_0x541458=this[_0x2fad17(0xcb)][_0x2fad17(0xac)](_0x33202a['id']['id']);!a361_0x31a9b2(_0x541458)&&(_0x541458=_0x1e3b1e[_0x2fad17(0xe6)](_0x33202a['id']),this[_0x2fad17(0xcb)][_0x2fad17(0xbc)](_0x33202a['id']['id'],_0x541458));var _0x5662c1=_0xf6ec84[_0x2fad17(0xf0)],_0x4796d5=_0x541458[_0x2fad17(0xb9)][0x0]===0x1;_0x5662c1!==_0x4796d5&&(_0x541458[_0x2fad17(0xb9)]=a361_0x1a2e57[_0x2fad17(0xc4)](_0x5662c1,_0x541458['show']),_0x33202a[_0x2fad17(0xcb)][_0x2fad17(0xb9)]['value'][0x0]=_0x541458[_0x2fad17(0xb9)][0x0]);}this[_0x2fad17(0xb3)][_0x2fad17(0xb8)]();},Batch[a361_0x1e3c41(0xd8)][a361_0x1e3c41(0xae)]=function(_0x1a2104){var _0x3e23c9=a361_0x1e3c41;return this[_0x3e23c9(0xe9)][_0x3e23c9(0xae)](_0x1a2104['id']);},Batch[a361_0x1e3c41(0xd8)][a361_0x1e3c41(0xd0)]=function(_0x19395d,_0x1cb2e1){var _0x520684=a361_0x1e3c41,_0x36464d=this[_0x520684(0xa8)];if(!_0x36464d[_0x520684(0xc2)])return a361_0x36bcb8[_0x520684(0xe1)];var _0x78f5a1=_0x36464d['getGeometryInstanceAttributes'](_0x19395d[_0x520684(0xaf)]);if(!a361_0x31a9b2(_0x78f5a1)||!a361_0x31a9b2(_0x78f5a1['boundingSphere'])||a361_0x31a9b2(_0x78f5a1[_0x520684(0xb9)])&&_0x78f5a1[_0x520684(0xb9)][0x0]===0x0)return a361_0x36bcb8[_0x520684(0xb4)];return _0x78f5a1['boundingSphere']['clone'](_0x1cb2e1),a361_0x36bcb8[_0x520684(0xde)];},Batch[a361_0x1e3c41(0xd8)][a361_0x1e3c41(0xe0)]=function(){var _0x5bb4c0=a361_0x1e3c41,_0x58771b=this[_0x5bb4c0(0xa8)],_0x264490=this[_0x5bb4c0(0xe5)];a361_0x31a9b2(_0x58771b)&&_0x264490['remove'](_0x58771b);var _0x27f61d=this[_0x5bb4c0(0xec)];a361_0x31a9b2(_0x27f61d)&&_0x264490[_0x5bb4c0(0xd6)](_0x27f61d),this['removeMaterialSubscription']();};function StaticGroundGeometryPerMaterialBatch(_0x4daca3,_0x198f68,_0x314614){var _0x2c8b5f=a361_0x1e3c41;this['_items']=[],this['_primitives']=_0x4daca3,this[_0x2c8b5f(0xc7)]=_0x198f68,this[_0x2c8b5f(0xbb)]=_0x314614;}function a361_0x5d93(_0x7974b9,_0x38783c){var _0x3b4336=a361_0x3b43();return a361_0x5d93=function(_0x5d93bb,_0x4aa278){_0x5d93bb=_0x5d93bb-0xa5;var _0x3b30c3=_0x3b4336[_0x5d93bb];return _0x3b30c3;},a361_0x5d93(_0x7974b9,_0x38783c);}StaticGroundGeometryPerMaterialBatch['prototype'][a361_0x1e3c41(0xdd)]=function(_0x490354,_0x214160){var _0x1153d8=a361_0x1e3c41,_0x5437dd=this[_0x1153d8(0xcf)],_0x3a3095=_0x5437dd['length'],_0x531a3e=_0x214160['createFillGeometryInstance'](_0x490354),_0x2be704=a361_0x4a3c71[_0x1153d8(0xc0)](_0x531a3e[_0x1153d8(0xcc)][_0x1153d8(0xc1)]),_0x251ae7=a361_0x23ea94[_0x1153d8(0xd9)](_0x214160['zIndex'],0x0);for(var _0xbdc50e=0x0;_0xbdc50e<_0x3a3095;++_0xbdc50e){var _0x37a6f0=_0x5437dd[_0xbdc50e];if(_0x37a6f0[_0x1153d8(0xe3)](_0x214160)&&_0x37a6f0[_0x1153d8(0xce)]===_0x2be704&&_0x37a6f0[_0x1153d8(0xca)]===_0x251ae7&&!_0x37a6f0[_0x1153d8(0xdf)](_0x531a3e[_0x1153d8(0xcc)]['rectangle'])){_0x37a6f0['add'](_0x490354,_0x214160,_0x531a3e);return;}}var _0x324c3e=new Batch(this[_0x1153d8(0xed)],this[_0x1153d8(0xc7)],this[_0x1153d8(0xbb)],_0x214160[_0x1153d8(0xc9)],_0x2be704,_0x251ae7);_0x324c3e[_0x1153d8(0xdd)](_0x490354,_0x214160,_0x531a3e),_0x5437dd[_0x1153d8(0xcd)](_0x324c3e);},StaticGroundGeometryPerMaterialBatch[a361_0x1e3c41(0xd8)][a361_0x1e3c41(0xd6)]=function(_0x943774){var _0x35f4ee=a361_0x1e3c41,_0x27709c=this[_0x35f4ee(0xcf)],_0x135be6=_0x27709c['length'];for(var _0x18418e=_0x135be6-0x1;_0x18418e>=0x0;_0x18418e--){var _0x120950=_0x27709c[_0x18418e];if(_0x120950[_0x35f4ee(0xd6)](_0x943774)){_0x120950['updaters'][_0x35f4ee(0xd3)]===0x0&&(_0x27709c[_0x35f4ee(0xa9)](_0x18418e,0x1),_0x120950['destroy']());break;}}},StaticGroundGeometryPerMaterialBatch[a361_0x1e3c41(0xd8)][a361_0x1e3c41(0xd1)]=function(_0x10d2b1){var _0x2a1726=a361_0x1e3c41,_0x551c0d,_0x4ae5e6=this[_0x2a1726(0xcf)],_0x47dd7e=_0x4ae5e6[_0x2a1726(0xd3)];for(_0x551c0d=_0x47dd7e-0x1;_0x551c0d>=0x0;_0x551c0d--){var _0x2e0f3e=_0x4ae5e6[_0x551c0d];if(_0x2e0f3e[_0x2a1726(0xd5)]){_0x4ae5e6['splice'](_0x551c0d,0x1);var _0x22af34=_0x2e0f3e['updaters'][_0x2a1726(0xdb)],_0x593cfc=_0x22af34[_0x2a1726(0xd3)];for(var _0x1ea44d=0x0;_0x1ea44d<_0x593cfc;_0x1ea44d++){this[_0x2a1726(0xdd)](_0x10d2b1,_0x22af34[_0x1ea44d]);}_0x2e0f3e[_0x2a1726(0xe0)]();}}var _0x1b6760=!![];for(_0x551c0d=0x0;_0x551c0d<_0x4ae5e6[_0x2a1726(0xd3)];_0x551c0d++){_0x1b6760=_0x4ae5e6[_0x551c0d][_0x2a1726(0xd1)](_0x10d2b1)&&_0x1b6760;}return _0x1b6760;},StaticGroundGeometryPerMaterialBatch[a361_0x1e3c41(0xd8)][a361_0x1e3c41(0xd0)]=function(_0x4e8526,_0x10adc4){var _0x40ef0c=a361_0x1e3c41,_0x47a67b=this[_0x40ef0c(0xcf)],_0x1ef702=_0x47a67b['length'];for(var _0x281300=0x0;_0x281300<_0x1ef702;_0x281300++){var _0x24e458=_0x47a67b[_0x281300];if(_0x24e458[_0x40ef0c(0xae)](_0x4e8526))return _0x24e458[_0x40ef0c(0xd0)](_0x4e8526,_0x10adc4);}return a361_0x36bcb8[_0x40ef0c(0xb4)];},StaticGroundGeometryPerMaterialBatch[a361_0x1e3c41(0xd8)][a361_0x1e3c41(0xc6)]=function(){var _0x37492e=a361_0x1e3c41,_0x575b52=this[_0x37492e(0xcf)],_0x245dd2=_0x575b52['length'];for(var _0x2b2942=0x0;_0x2b2942<_0x245dd2;_0x2b2942++){_0x575b52[_0x2b2942][_0x37492e(0xe0)]();}this['_items'][_0x37492e(0xd3)]=0x0;};export default StaticGroundGeometryPerMaterialBatch;function a361_0x3b43(){var _0x5dd989=['_lastDistanceDisplayCondition','collides','primitive','splice','subscriptions','1JXGcYc','get','rectangleCollisionCheck','contains','entity','distanceDisplayConditionProperty','material','49xypQkH','showsUpdated','FAILED','removeMaterialSubscription','addEventListener','getValue','removeAll','show','materialProperty','_appearanceType','set','11657232GSWxyU','2761704Obydui','1767404iljqqc','shouldUseSphericalCoordinates','rectangle','ready','distanceDisplayCondition','toValue','createPrimitive','removeAllPrimitives','_classificationType','updatersWithAttributes','fillMaterialProperty','zIndex','attributes','geometry','push','usingSphericalTextureCoordinates','_items','getBoundingSphere','update','1064846pLvDUD','length','classificationType','invalidated','remove','1672260sSzjBC','prototype','getValueOrDefault','onMaterialChanged','values','definitionChanged','add','DONE','overlapping','destroy','PENDING','isFilled','isMaterial','2274020XQEnbc','primitives','getGeometryInstanceAttributes','equals','updateShows','updaters','hasConstantFill','appearanceType','oldPrimitive','_primitives','371992wFRwJg','isConstant','isShowing','slice'];a361_0x3b43=function(){return _0x5dd989;};return a361_0x3b43();}