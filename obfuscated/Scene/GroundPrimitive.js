var a561_0x3431e7=a561_0xd8ca;(function(_0x2ff9be,_0x520634){var _0x10d3bc=a561_0xd8ca,_0x119e15=_0x2ff9be();while(!![]){try{var _0x27174d=-parseInt(_0x10d3bc(0x1d9))/0x1*(parseInt(_0x10d3bc(0x21b))/0x2)+parseInt(_0x10d3bc(0x236))/0x3+parseInt(_0x10d3bc(0x231))/0x4*(-parseInt(_0x10d3bc(0x20f))/0x5)+parseInt(_0x10d3bc(0x208))/0x6+-parseInt(_0x10d3bc(0x20c))/0x7*(parseInt(_0x10d3bc(0x1e4))/0x8)+-parseInt(_0x10d3bc(0x223))/0x9*(-parseInt(_0x10d3bc(0x229))/0xa)+parseInt(_0x10d3bc(0x21c))/0xb;if(_0x27174d===_0x520634)break;else _0x119e15['push'](_0x119e15['shift']());}catch(_0x5b9a03){_0x119e15['push'](_0x119e15['shift']());}}}(a561_0x149d,0x27497));import a561_0x216ca5 from'../Core/ApproximateTerrainHeights.js';import a561_0x537796 from'../Core/BoundingSphere.js';import a561_0x235171 from'../Core/Cartesian3.js';import a561_0x2066b6 from'../Core/Cartographic.js';import a561_0x2c2956 from'../Core/Check.js';import a561_0x158de2 from'../Core/defaultValue.js';import a561_0x4895d6 from'../Core/defined.js';import a561_0x31529e from'../Core/destroyObject.js';function a561_0x149d(){var _0x5558f9=['tileset','isSupported','_defaultMinTerrainHeight','union','_minTerrainHeight','pick','_boundingSpheres','constructor','24ZmsQCK','getBoundingSphere','attributes','allowPicking','appearance','push','derivedCommands','POSITIVE_INFINITY','debugShowShadowVolume','_commandsIgnoreShow','invertClassification','getHeight','_needs2DShader','SCENE3D','minimumTerrainHeight','ellipsoid','_defaultMaxTerrainHeight','_createBoundingVolumeFunction','maximumTerrainHeight','longitude','readyPromise','terrainExaggeration','position3DHigh','reject','EMPTY_OBJECT','Not\x20all\x20of\x20the\x20geometry\x20instances\x20have\x20GroundPrimitive\x20support.','For\x20synchronous\x20GroundPrimitives,\x20you\x20must\x20call\x20GroundPrimitive.initializeTerrainHeights()\x20and\x20wait\x20for\x20the\x20returned\x20promise\x20to\x20resolve.','mapProjection','getPlanarTextureCoordinateAttributes','_updateAndQueueCommandsFunction','maximumRadius','compressVertices','min','then','pick2D','CESIUM_3D_TILE','273360tLnKSl','_boundingVolumes','unpack','createShadowVolume','425467nwjVrD','modelMatrix','promise','170AIwqgT','clone','_boundingVolumes2D','_spColor','getMinimumMaximumHeights','max','west','_supportsMaterials','isArray','_minHeight','must\x20call\x20update\x20before\x20calling\x20getGeometryInstanceAttributes','depthTexture','4ufyshn','4980987BPgRWO','floor','_maxTerrainHeight','frameState','context','prototype','owner','18opnupn','scene','releaseGeometryInstances','_spPick','supportsMaterials','classificationType','1149020rncTzy','interleave','_readyPromise','fromRectangleWithHeights2D','scene3DOnly','_ready','center','BOTH','18968Vespwp','asynchronous','defer','_maxHeight','index','80901AmsnkM','initializeTerrainHeights','terrainExaggerationRelativeHeight','initialize','getSphericalExtentGeometryInstanceAttributes','destroy','textureCoordinateRotationPoints','latitude','mode','_primitive','shaderProgram','shouldUseSphericalCoordinates','update','_boundingSpheresKeys','_pickOffsets','object','vertexCacheOptimize','values','cull','boundingVolume','geometry','render','_classificationPrimitiveOptions','passes','show','indexOf','getGeometryInstanceAttributes','debugShowBoundingVolume','isDestroyed','_useFragmentCulling','hasOwnProperty','length','south','geometryInstances','125329xLQmHq','appearance2D','typeOf'];a561_0x149d=function(){return _0x5558f9;};return a561_0x149d();}import a561_0x2db173 from'../Core/DeveloperError.js';import a561_0x11cf41 from'../Core/GeometryInstance.js';import a561_0x18106e from'../Core/OrientedBoundingBox.js';import a561_0x28f6fb from'../Core/Rectangle.js';import a561_0x5bc253 from'../Core/TerrainExaggeration.js';import a561_0xc9a5d3 from'./ClassificationPrimitive.js';import a561_0x51adeb from'./ClassificationType.js';import a561_0x535e29 from'./PerInstanceColorAppearance.js';import a561_0x30c9d from'./SceneMode.js';import a561_0x5d3b3a from'./ShadowVolumeAppearance.js';import a561_0x10d67f from'../ThirdParty/when.js';var GroundPrimitiveUniformMap={'u_globeMinimumAltitude':function(){return 0xd6d8;}};function GroundPrimitive(_0x36c9a2){var _0x33a507=a561_0xd8ca;_0x36c9a2=a561_0x158de2(_0x36c9a2,a561_0x158de2[_0x33a507(0x1fc)]);var _0x1e3c28=_0x36c9a2['appearance'],_0x32c1ab=_0x36c9a2[_0x33a507(0x1d8)];if(!a561_0x4895d6(_0x1e3c28)&&a561_0x4895d6(_0x32c1ab)){var _0x5c63b5=Array[_0x33a507(0x217)](_0x32c1ab)?_0x32c1ab:[_0x32c1ab],_0x3b4103=_0x5c63b5[_0x33a507(0x1d6)];for(var _0x1fcdfc=0x0;_0x1fcdfc<_0x3b4103;_0x1fcdfc++){var _0x122115=_0x5c63b5[_0x1fcdfc]['attributes'];if(a561_0x4895d6(_0x122115)&&a561_0x4895d6(_0x122115['color'])){_0x1e3c28=new a561_0x535e29({'flat':!![]});break;}}}this[_0x33a507(0x1e8)]=_0x1e3c28,this['geometryInstances']=_0x36c9a2[_0x33a507(0x1d8)],this['show']=a561_0x158de2(_0x36c9a2[_0x33a507(0x1cf)],!![]),this[_0x33a507(0x228)]=a561_0x158de2(_0x36c9a2['classificationType'],a561_0x51adeb[_0x33a507(0x230)]),this[_0x33a507(0x1d2)]=a561_0x158de2(_0x36c9a2[_0x33a507(0x1d2)],![]),this['debugShowShadowVolume']=a561_0x158de2(_0x36c9a2['debugShowShadowVolume'],![]),this[_0x33a507(0x209)]=[],this['_boundingVolumes2D']=[],this[_0x33a507(0x22e)]=![],this[_0x33a507(0x22b)]=a561_0x10d67f[_0x33a507(0x233)](),this['_primitive']=undefined,this['_maxHeight']=undefined,this[_0x33a507(0x218)]=undefined,this[_0x33a507(0x21e)]=a561_0x216ca5[_0x33a507(0x1f4)],this[_0x33a507(0x1e0)]=a561_0x216ca5[_0x33a507(0x1de)],this[_0x33a507(0x243)]=[],this['_boundingSpheres']=[],this[_0x33a507(0x1d4)]=![],this['_zIndex']=undefined;var _0x1b0e55=this;this[_0x33a507(0x24c)]={'geometryInstances':undefined,'appearance':undefined,'vertexCacheOptimize':a561_0x158de2(_0x36c9a2['vertexCacheOptimize'],![]),'interleave':a561_0x158de2(_0x36c9a2[_0x33a507(0x22a)],![]),'releaseGeometryInstances':a561_0x158de2(_0x36c9a2[_0x33a507(0x225)],!![]),'allowPicking':a561_0x158de2(_0x36c9a2[_0x33a507(0x1e7)],!![]),'asynchronous':a561_0x158de2(_0x36c9a2[_0x33a507(0x232)],!![]),'compressVertices':a561_0x158de2(_0x36c9a2[_0x33a507(0x203)],!![]),'_createBoundingVolumeFunction':undefined,'_updateAndQueueCommandsFunction':undefined,'_pickPrimitive':_0x1b0e55,'_extruded':!![],'_uniformMap':GroundPrimitiveUniformMap};}Object['defineProperties'](GroundPrimitive['prototype'],{'vertexCacheOptimize':{'get':function(){var _0x30f076=a561_0xd8ca;return this['_classificationPrimitiveOptions'][_0x30f076(0x246)];}},'interleave':{'get':function(){var _0x546141=a561_0xd8ca;return this['_classificationPrimitiveOptions'][_0x546141(0x22a)];}},'releaseGeometryInstances':{'get':function(){var _0x4d79c0=a561_0xd8ca;return this[_0x4d79c0(0x24c)]['releaseGeometryInstances'];}},'allowPicking':{'get':function(){var _0x56473d=a561_0xd8ca;return this[_0x56473d(0x24c)]['allowPicking'];}},'asynchronous':{'get':function(){var _0x2889e6=a561_0xd8ca;return this[_0x2889e6(0x24c)][_0x2889e6(0x232)];}},'compressVertices':{'get':function(){var _0x475d83=a561_0xd8ca;return this[_0x475d83(0x24c)][_0x475d83(0x203)];}},'ready':{'get':function(){var _0x5cf636=a561_0xd8ca;return this[_0x5cf636(0x22e)];}},'readyPromise':{'get':function(){var _0x4bb403=a561_0xd8ca;return this[_0x4bb403(0x22b)][_0x4bb403(0x20e)];}}}),GroundPrimitive[a561_0x3431e7(0x1dd)]=a561_0xc9a5d3[a561_0x3431e7(0x1dd)];function getComputeMaximumHeightFunction(_0x443f8a){return function(_0x5983bd,_0x1aaa2e){var _0x34cb89=a561_0xd8ca,_0x5aa217=_0x1aaa2e[_0x34cb89(0x202)],_0x17d10b=_0x5aa217/Math['cos'](_0x5983bd*0.5)-_0x5aa217;return _0x443f8a[_0x34cb89(0x234)]+_0x17d10b;};}function getComputeMinimumHeightFunction(_0x1cc8e9){return function(_0x4f843a,_0x57a608){var _0x2599ee=a561_0xd8ca;return _0x1cc8e9[_0x2599ee(0x218)];};}var scratchBVCartesianHigh=new a561_0x235171(),scratchBVCartesianLow=new a561_0x235171(),scratchBVCartesian=new a561_0x235171(),scratchBVCartographic=new a561_0x2066b6(),scratchBVRectangle=new a561_0x28f6fb();function getRectangle(_0x4f8e17,_0x57de4b){var _0x59c8ef=a561_0x3431e7,_0x3a161f=_0x4f8e17['mapProjection'][_0x59c8ef(0x1f3)];if(!a561_0x4895d6(_0x57de4b['attributes'])||!a561_0x4895d6(_0x57de4b[_0x59c8ef(0x1e6)][_0x59c8ef(0x1fa)])){if(a561_0x4895d6(_0x57de4b['rectangle']))return _0x57de4b['rectangle'];return undefined;}var _0x26a0b1=_0x57de4b['attributes'][_0x59c8ef(0x1fa)][_0x59c8ef(0x247)],_0x62cb42=_0x57de4b[_0x59c8ef(0x1e6)]['position3DLow'][_0x59c8ef(0x247)],_0x459e3d=_0x26a0b1[_0x59c8ef(0x1d6)],_0x511bfd=Number[_0x59c8ef(0x1eb)],_0x11e58d=Number[_0x59c8ef(0x1eb)],_0x237bc7=Number['NEGATIVE_INFINITY'],_0x40f16d=Number['NEGATIVE_INFINITY'];for(var _0x144ffc=0x0;_0x144ffc<_0x459e3d;_0x144ffc+=0x3){var _0x404583=a561_0x235171[_0x59c8ef(0x20a)](_0x26a0b1,_0x144ffc,scratchBVCartesianHigh),_0x2a2324=a561_0x235171['unpack'](_0x62cb42,_0x144ffc,scratchBVCartesianLow),_0x2174bd=a561_0x235171['add'](_0x404583,_0x2a2324,scratchBVCartesian),_0xe80955=_0x3a161f['cartesianToCartographic'](_0x2174bd,scratchBVCartographic),_0x65687=_0xe80955[_0x59c8ef(0x23d)],_0x164b78=_0xe80955[_0x59c8ef(0x1f7)];_0x511bfd=Math[_0x59c8ef(0x204)](_0x511bfd,_0x65687),_0x11e58d=Math[_0x59c8ef(0x204)](_0x11e58d,_0x164b78),_0x237bc7=Math[_0x59c8ef(0x214)](_0x237bc7,_0x65687),_0x40f16d=Math[_0x59c8ef(0x214)](_0x40f16d,_0x164b78);}var _0x585149=scratchBVRectangle;return _0x585149['north']=_0x237bc7,_0x585149[_0x59c8ef(0x1d7)]=_0x511bfd,_0x585149['east']=_0x40f16d,_0x585149[_0x59c8ef(0x215)]=_0x11e58d,_0x585149;}function setMinMaxTerrainHeights(_0x1c0687,_0x3f7e87,_0xf6fa0f){var _0x818dfd=a561_0x3431e7,_0x1c7a94=a561_0x216ca5[_0x818dfd(0x213)](_0x3f7e87,_0xf6fa0f);_0x1c0687['_minTerrainHeight']=_0x1c7a94[_0x818dfd(0x1f2)],_0x1c0687[_0x818dfd(0x21e)]=_0x1c7a94[_0x818dfd(0x1f6)];}function a561_0xd8ca(_0x557ed9,_0x50039a){var _0x149df3=a561_0x149d();return a561_0xd8ca=function(_0xd8ca3e,_0x362bab){_0xd8ca3e=_0xd8ca3e-0x1ce;var _0x385170=_0x149df3[_0xd8ca3e];return _0x385170;},a561_0xd8ca(_0x557ed9,_0x50039a);}function createBoundingVolume(_0x2e8fe9,_0x243c55,_0x49abc9){var _0x3943c2=a561_0x3431e7,_0xf0de94=_0x243c55[_0x3943c2(0x1ff)]['ellipsoid'],_0x376259=getRectangle(_0x243c55,_0x49abc9),_0x50bad7=a561_0x18106e['fromRectangle'](_0x376259,_0x2e8fe9[_0x3943c2(0x218)],_0x2e8fe9[_0x3943c2(0x234)],_0xf0de94);_0x2e8fe9['_boundingVolumes'][_0x3943c2(0x1e9)](_0x50bad7);if(!_0x243c55[_0x3943c2(0x22d)]){var _0x2839f6=_0x243c55[_0x3943c2(0x1ff)],_0x4ac641=a561_0x537796[_0x3943c2(0x22c)](_0x376259,_0x2839f6,_0x2e8fe9[_0x3943c2(0x234)],_0x2e8fe9['_minHeight']);a561_0x235171['fromElements'](_0x4ac641[_0x3943c2(0x22f)]['z'],_0x4ac641['center']['x'],_0x4ac641[_0x3943c2(0x22f)]['y'],_0x4ac641[_0x3943c2(0x22f)]),_0x2e8fe9[_0x3943c2(0x211)][_0x3943c2(0x1e9)](_0x4ac641);}}function boundingVolumeIndex(_0x48df38,_0x5b5ce7){var _0x413f88=a561_0x3431e7;return Math[_0x413f88(0x21d)](_0x48df38%_0x5b5ce7/0x2);}function updateAndQueueRenderCommand(_0x1569b9,_0x4dd1c8,_0x1b89d1,_0x3ac0c5,_0x3a3bfe,_0x224985,_0x76b301){var _0x8cfba0=a561_0x3431e7,_0x288030=_0x1569b9[_0x8cfba0(0x23f)];_0x1b89d1['mode']!==a561_0x30c9d[_0x8cfba0(0x1f1)]&&_0x4dd1c8['shaderProgram']===_0x288030[_0x8cfba0(0x212)]&&_0x288030[_0x8cfba0(0x1f0)]&&(_0x4dd1c8=_0x4dd1c8[_0x8cfba0(0x1ea)][_0x8cfba0(0x1da)]),_0x4dd1c8['owner']=_0x1569b9,_0x4dd1c8[_0x8cfba0(0x20d)]=_0x3ac0c5,_0x4dd1c8[_0x8cfba0(0x249)]=_0x224985,_0x4dd1c8['cull']=_0x3a3bfe,_0x4dd1c8[_0x8cfba0(0x1d2)]=_0x76b301,_0x1b89d1['commandList'][_0x8cfba0(0x1e9)](_0x4dd1c8);}function updateAndQueuePickCommand(_0x35e885,_0x3f7f92,_0x94e47b,_0x2c4929,_0x3ff650,_0x5a9af1){var _0x2e5d77=a561_0x3431e7,_0x5ceab5=_0x35e885['_primitive'];_0x94e47b[_0x2e5d77(0x23e)]!==a561_0x30c9d[_0x2e5d77(0x1f1)]&&_0x3f7f92[_0x2e5d77(0x240)]===_0x5ceab5[_0x2e5d77(0x226)]&&_0x5ceab5['_needs2DShader']&&(_0x3f7f92=_0x3f7f92[_0x2e5d77(0x1ea)][_0x2e5d77(0x206)]),_0x3f7f92[_0x2e5d77(0x222)]=_0x35e885,_0x3f7f92[_0x2e5d77(0x20d)]=_0x2c4929,_0x3f7f92['boundingVolume']=_0x5a9af1,_0x3f7f92[_0x2e5d77(0x248)]=_0x3ff650,_0x94e47b['commandList'][_0x2e5d77(0x1e9)](_0x3f7f92);}function updateAndQueueCommands(_0x4710ae,_0x473a82,_0x3050f5,_0x4a4e32,_0x1d8bcb,_0x52ed63,_0x1390e3,_0x52dfcb){var _0x28dd9c=a561_0x3431e7,_0x155d4c;_0x473a82[_0x28dd9c(0x23e)]===a561_0x30c9d[_0x28dd9c(0x1f1)]?_0x155d4c=_0x4710ae['_boundingVolumes']:_0x155d4c=_0x4710ae[_0x28dd9c(0x211)];var _0x148b45=_0x4710ae['classificationType'],_0x4bc6e2=_0x148b45!==a561_0x51adeb[_0x28dd9c(0x207)],_0x330a82=_0x148b45!==a561_0x51adeb['TERRAIN'],_0x34ecf2=_0x473a82[_0x28dd9c(0x1ce)],_0x5c42cc=_0x4710ae['_primitive'],_0x1ce58a,_0x25f358,_0x13a03f;if(_0x34ecf2[_0x28dd9c(0x24b)]){var _0x3eff1c=_0x3050f5[_0x28dd9c(0x1d6)];for(_0x1ce58a=0x0;_0x1ce58a<_0x3eff1c;++_0x1ce58a){_0x25f358=_0x155d4c[boundingVolumeIndex(_0x1ce58a,_0x3eff1c)],_0x4bc6e2&&(_0x13a03f=_0x3050f5[_0x1ce58a],updateAndQueueRenderCommand(_0x4710ae,_0x13a03f,_0x473a82,_0x1d8bcb,_0x52ed63,_0x25f358,_0x1390e3)),_0x330a82&&(_0x13a03f=_0x3050f5[_0x1ce58a][_0x28dd9c(0x1ea)][_0x28dd9c(0x1dc)],updateAndQueueRenderCommand(_0x4710ae,_0x13a03f,_0x473a82,_0x1d8bcb,_0x52ed63,_0x25f358,_0x1390e3));}if(_0x473a82[_0x28dd9c(0x1ee)]){var _0x5c7243=_0x5c42cc[_0x28dd9c(0x1ed)],_0x5f3912=_0x5c7243[_0x28dd9c(0x1d6)];for(_0x1ce58a=0x0;_0x1ce58a<_0x5f3912;++_0x1ce58a){_0x25f358=_0x155d4c[_0x1ce58a],_0x13a03f=_0x5c7243[_0x1ce58a],updateAndQueueRenderCommand(_0x4710ae,_0x13a03f,_0x473a82,_0x1d8bcb,_0x52ed63,_0x25f358,_0x1390e3);}}}if(_0x34ecf2[_0x28dd9c(0x1e1)]){var _0xe13897=_0x4a4e32['length'],_0x44dd22;!_0x4710ae[_0x28dd9c(0x1d4)]&&(_0x44dd22=_0x5c42cc['_primitive'][_0x28dd9c(0x244)]);for(_0x1ce58a=0x0;_0x1ce58a<_0xe13897;++_0x1ce58a){_0x25f358=_0x155d4c[boundingVolumeIndex(_0x1ce58a,_0xe13897)];if(!_0x4710ae[_0x28dd9c(0x1d4)]){var _0x49d111=_0x44dd22[boundingVolumeIndex(_0x1ce58a,_0xe13897)];_0x25f358=_0x155d4c[_0x49d111[_0x28dd9c(0x235)]];}_0x4bc6e2&&(_0x13a03f=_0x4a4e32[_0x1ce58a],updateAndQueuePickCommand(_0x4710ae,_0x13a03f,_0x473a82,_0x1d8bcb,_0x52ed63,_0x25f358)),_0x330a82&&(_0x13a03f=_0x4a4e32[_0x1ce58a][_0x28dd9c(0x1ea)][_0x28dd9c(0x1dc)],updateAndQueuePickCommand(_0x4710ae,_0x13a03f,_0x473a82,_0x1d8bcb,_0x52ed63,_0x25f358));}}}GroundPrimitive[a561_0x3431e7(0x237)]=function(){var _0x1cd569=a561_0x3431e7;return a561_0x216ca5[_0x1cd569(0x239)]();},GroundPrimitive[a561_0x3431e7(0x221)]['update']=function(_0x107c7f){var _0x1d863c=a561_0x3431e7;if(!a561_0x4895d6(this[_0x1d863c(0x23f)])&&!a561_0x4895d6(this['geometryInstances']))return;if(!a561_0x216ca5['initialized']){if(!this[_0x1d863c(0x232)])throw new a561_0x2db173(_0x1d863c(0x1fe));GroundPrimitive['initializeTerrainHeights']();return;}var _0x2fc893=this,_0x425531=this['_classificationPrimitiveOptions'];if(!a561_0x4895d6(this['_primitive'])){var _0x1b7d99=_0x107c7f[_0x1d863c(0x1ff)][_0x1d863c(0x1f3)],_0x66b3d1,_0x2385f2,_0x3caaa5,_0x47617e=Array[_0x1d863c(0x217)](this['geometryInstances'])?this[_0x1d863c(0x1d8)]:[this[_0x1d863c(0x1d8)]],_0x562f82=_0x47617e['length'],_0x17bb01=new Array(_0x562f82),_0x2a7ffa,_0x5e95f6;for(_0x2a7ffa=0x0;_0x2a7ffa<_0x562f82;++_0x2a7ffa){_0x66b3d1=_0x47617e[_0x2a7ffa],_0x2385f2=_0x66b3d1[_0x1d863c(0x24a)];var _0x5250c3=getRectangle(_0x107c7f,_0x2385f2);if(!a561_0x4895d6(_0x5e95f6))_0x5e95f6=a561_0x28f6fb[_0x1d863c(0x210)](_0x5250c3);else a561_0x4895d6(_0x5250c3)&&a561_0x28f6fb[_0x1d863c(0x1df)](_0x5e95f6,_0x5250c3,_0x5e95f6);var _0x4a720d=_0x66b3d1['id'];if(a561_0x4895d6(_0x4a720d)&&a561_0x4895d6(_0x5250c3)){var _0x111b5d=a561_0x216ca5[_0x1d863c(0x1e5)](_0x5250c3,_0x1b7d99);this['_boundingSpheresKeys'][_0x1d863c(0x1e9)](_0x4a720d),this[_0x1d863c(0x1e2)]['push'](_0x111b5d);}_0x3caaa5=_0x2385f2[_0x1d863c(0x1e3)];if(!a561_0x4895d6(_0x3caaa5)||!a561_0x4895d6(_0x3caaa5[_0x1d863c(0x20b)]))throw new a561_0x2db173(_0x1d863c(0x1fd));}setMinMaxTerrainHeights(this,_0x5e95f6,_0x1b7d99);var _0x342ebe=_0x107c7f[_0x1d863c(0x1f9)],_0x484656=_0x107c7f[_0x1d863c(0x238)];this[_0x1d863c(0x218)]=a561_0x5bc253[_0x1d863c(0x1ef)](this[_0x1d863c(0x1e0)],_0x342ebe,_0x484656),this['_maxHeight']=a561_0x5bc253[_0x1d863c(0x1ef)](this[_0x1d863c(0x21e)],_0x342ebe,_0x484656);var _0x2ede68=GroundPrimitive[_0x1d863c(0x216)](_0x107c7f['context']);this['_useFragmentCulling']=_0x2ede68;if(_0x2ede68){var _0x2f0903,_0x1ddf87=!![];for(_0x2a7ffa=0x0;_0x2a7ffa<_0x562f82;++_0x2a7ffa){_0x66b3d1=_0x47617e[_0x2a7ffa],_0x2385f2=_0x66b3d1[_0x1d863c(0x24a)],_0x5e95f6=getRectangle(_0x107c7f,_0x2385f2);if(a561_0x5d3b3a[_0x1d863c(0x241)](_0x5e95f6)){_0x1ddf87=![];break;}}for(_0x2a7ffa=0x0;_0x2a7ffa<_0x562f82;++_0x2a7ffa){_0x66b3d1=_0x47617e[_0x2a7ffa],_0x2385f2=_0x66b3d1['geometry'],_0x3caaa5=_0x2385f2['constructor'];var _0x26130f=getRectangle(_0x107c7f,_0x2385f2),_0x3bf6b5=_0x2385f2[_0x1d863c(0x23c)];_0x1ddf87?_0x2f0903=a561_0x5d3b3a[_0x1d863c(0x200)](_0x26130f,_0x3bf6b5,_0x1b7d99,_0x107c7f[_0x1d863c(0x1ff)],this[_0x1d863c(0x234)]):_0x2f0903=a561_0x5d3b3a[_0x1d863c(0x23a)](_0x26130f,_0x3bf6b5,_0x1b7d99,_0x107c7f[_0x1d863c(0x1ff)]);var _0x5668e8=_0x66b3d1[_0x1d863c(0x1e6)];for(var _0x36a46b in _0x5668e8){_0x5668e8[_0x1d863c(0x1d5)](_0x36a46b)&&(_0x2f0903[_0x36a46b]=_0x5668e8[_0x36a46b]);}_0x17bb01[_0x2a7ffa]=new a561_0x11cf41({'geometry':_0x3caaa5[_0x1d863c(0x20b)](_0x2385f2,getComputeMinimumHeightFunction(this),getComputeMaximumHeightFunction(this)),'attributes':_0x2f0903,'id':_0x66b3d1['id']});}}else for(_0x2a7ffa=0x0;_0x2a7ffa<_0x562f82;++_0x2a7ffa){_0x66b3d1=_0x47617e[_0x2a7ffa],_0x2385f2=_0x66b3d1[_0x1d863c(0x24a)],_0x3caaa5=_0x2385f2[_0x1d863c(0x1e3)],_0x17bb01[_0x2a7ffa]=new a561_0x11cf41({'geometry':_0x3caaa5[_0x1d863c(0x20b)](_0x2385f2,getComputeMinimumHeightFunction(this),getComputeMaximumHeightFunction(this)),'attributes':_0x66b3d1['attributes'],'id':_0x66b3d1['id']});}_0x425531[_0x1d863c(0x1d8)]=_0x17bb01,_0x425531[_0x1d863c(0x1e8)]=this['appearance'],_0x425531[_0x1d863c(0x1f5)]=function(_0x15ac9a,_0x52bcca){createBoundingVolume(_0x2fc893,_0x15ac9a,_0x52bcca);},_0x425531[_0x1d863c(0x201)]=function(_0x400077,_0x4e525d,_0x32a9d9,_0x159de5,_0x3a1850,_0x3f03b5,_0x13e83b,_0x4ede01){updateAndQueueCommands(_0x2fc893,_0x4e525d,_0x32a9d9,_0x159de5,_0x3a1850,_0x3f03b5,_0x13e83b,_0x4ede01);},this[_0x1d863c(0x23f)]=new a561_0xc9a5d3(_0x425531),this[_0x1d863c(0x23f)][_0x1d863c(0x1f8)][_0x1d863c(0x205)](function(_0x358fd8){var _0x51e73a=_0x1d863c;_0x2fc893['_ready']=!![];_0x2fc893[_0x51e73a(0x225)]&&(_0x2fc893['geometryInstances']=undefined);var _0x239549=_0x358fd8['_error'];!a561_0x4895d6(_0x239549)?_0x2fc893[_0x51e73a(0x22b)]['resolve'](_0x2fc893):_0x2fc893[_0x51e73a(0x22b)][_0x51e73a(0x1fb)](_0x239549);});}this[_0x1d863c(0x23f)][_0x1d863c(0x1e8)]=this[_0x1d863c(0x1e8)],this[_0x1d863c(0x23f)][_0x1d863c(0x1cf)]=this['show'],this['_primitive']['debugShowShadowVolume']=this[_0x1d863c(0x1ec)],this[_0x1d863c(0x23f)]['debugShowBoundingVolume']=this[_0x1d863c(0x1d2)],this[_0x1d863c(0x23f)][_0x1d863c(0x242)](_0x107c7f);},GroundPrimitive[a561_0x3431e7(0x221)][a561_0x3431e7(0x1e5)]=function(_0x2794f8){var _0x115a49=a561_0x3431e7,_0x2b663d=this[_0x115a49(0x243)][_0x115a49(0x1d0)](_0x2794f8);if(_0x2b663d!==-0x1)return this[_0x115a49(0x1e2)][_0x2b663d];return undefined;},GroundPrimitive['prototype'][a561_0x3431e7(0x1d1)]=function(_0x5cd552){var _0x2789e8=a561_0x3431e7;if(!a561_0x4895d6(this[_0x2789e8(0x23f)]))throw new a561_0x2db173(_0x2789e8(0x219));return this['_primitive']['getGeometryInstanceAttributes'](_0x5cd552);},GroundPrimitive[a561_0x3431e7(0x221)][a561_0x3431e7(0x1d3)]=function(){return![];},GroundPrimitive[a561_0x3431e7(0x221)][a561_0x3431e7(0x23b)]=function(){var _0x195f03=a561_0x3431e7;return this[_0x195f03(0x23f)]=this[_0x195f03(0x23f)]&&this[_0x195f03(0x23f)][_0x195f03(0x23b)](),a561_0x31529e(this);},GroundPrimitive[a561_0x3431e7(0x216)]=function(_0x421813){var _0x29d203=a561_0x3431e7;return _0x421813[_0x29d203(0x21a)];},GroundPrimitive[a561_0x3431e7(0x227)]=function(_0x5dd3be){var _0xe3b809=a561_0x3431e7;return a561_0x2c2956[_0xe3b809(0x1db)][_0xe3b809(0x245)](_0xe3b809(0x224),_0x5dd3be),GroundPrimitive[_0xe3b809(0x216)](_0x5dd3be[_0xe3b809(0x21f)][_0xe3b809(0x220)]);};export default GroundPrimitive;