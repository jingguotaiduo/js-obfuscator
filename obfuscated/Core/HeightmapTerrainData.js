var a122_0x5cdb78=a122_0x2ef6;(function(_0xeab1d1,_0x30ab7d){var _0x1b6c1e=a122_0x2ef6,_0x58b994=_0xeab1d1();while(!![]){try{var _0x5d7650=parseInt(_0x1b6c1e(0x171))/0x1*(parseInt(_0x1b6c1e(0x16e))/0x2)+parseInt(_0x1b6c1e(0x1ba))/0x3*(parseInt(_0x1b6c1e(0x186))/0x4)+-parseInt(_0x1b6c1e(0x1b2))/0x5*(-parseInt(_0x1b6c1e(0x1a9))/0x6)+parseInt(_0x1b6c1e(0x170))/0x7+parseInt(_0x1b6c1e(0x190))/0x8+parseInt(_0x1b6c1e(0x183))/0x9+parseInt(_0x1b6c1e(0x1ac))/0xa*(-parseInt(_0x1b6c1e(0x18f))/0xb);if(_0x5d7650===_0x30ab7d)break;else _0x58b994['push'](_0x58b994['shift']());}catch(_0x51f90b){_0x58b994['push'](_0x58b994['shift']());}}}(a122_0x3440,0x664ad));import a122_0x2e8c78 from'../ThirdParty/when.js';import a122_0xfb8f7e from'./BoundingSphere.js';import a122_0x174427 from'./Cartesian3.js';import a122_0x46bf7e from'./Check.js';import a122_0x409b95 from'./defaultValue.js';import a122_0x5d8e58 from'./defined.js';import a122_0x5802c2 from'./DeveloperError.js';import a122_0x17b86b from'./GeographicProjection.js';import a122_0x5726df from'./HeightmapEncoding.js';import a122_0x5b3e67 from'./HeightmapTessellator.js';import a122_0x15517d from'./Math.js';import a122_0x1b12d4 from'./OrientedBoundingBox.js';function a122_0x2ef6(_0x5f1fe0,_0xf6bf57){var _0x344015=a122_0x3440();return a122_0x2ef6=function(_0x2ef6cd,_0x41b65a){_0x2ef6cd=_0x2ef6cd-0x163;var _0x1a5946=_0x344015[_0x2ef6cd];return _0x1a5946;},a122_0x2ef6(_0x5f1fe0,_0xf6bf57);}import a122_0x33fc81 from'./Rectangle.js';import a122_0x3779f2 from'./TaskProcessor.js';import a122_0x18047f from'./TerrainData.js';import a122_0x5299a3 from'./TerrainEncoding.js';import a122_0x26ebe1 from'./TerrainMesh.js';import a122_0x5c7d1d from'./TerrainProvider.js';function HeightmapTerrainData(_0x430b9f){var _0x1abd92=a122_0x2ef6;if(!a122_0x5d8e58(_0x430b9f)||!a122_0x5d8e58(_0x430b9f[_0x1abd92(0x172)]))throw new a122_0x5802c2(_0x1abd92(0x1a3));if(!a122_0x5d8e58(_0x430b9f[_0x1abd92(0x1a4)]))throw new a122_0x5802c2(_0x1abd92(0x196));if(!a122_0x5d8e58(_0x430b9f[_0x1abd92(0x179)]))throw new a122_0x5802c2(_0x1abd92(0x1c7));this[_0x1abd92(0x17d)]=_0x430b9f[_0x1abd92(0x172)],this[_0x1abd92(0x1a1)]=_0x430b9f['width'],this[_0x1abd92(0x1aa)]=_0x430b9f[_0x1abd92(0x179)],this[_0x1abd92(0x184)]=a122_0x409b95(_0x430b9f[_0x1abd92(0x193)],0xf),this[_0x1abd92(0x1bf)]=a122_0x409b95(_0x430b9f['encoding'],a122_0x5726df[_0x1abd92(0x1c9)]);var _0x335596=a122_0x5b3e67[_0x1abd92(0x1a0)],_0x440031=_0x430b9f[_0x1abd92(0x16c)];if(!a122_0x5d8e58(_0x440031))_0x440031=_0x335596;else _0x440031!==_0x335596&&(_0x440031[_0x1abd92(0x199)]=a122_0x409b95(_0x440031[_0x1abd92(0x199)],_0x335596[_0x1abd92(0x199)]),_0x440031[_0x1abd92(0x175)]=a122_0x409b95(_0x440031[_0x1abd92(0x175)],_0x335596[_0x1abd92(0x175)]),_0x440031[_0x1abd92(0x18e)]=a122_0x409b95(_0x440031[_0x1abd92(0x18e)],_0x335596[_0x1abd92(0x18e)]),_0x440031[_0x1abd92(0x1bb)]=a122_0x409b95(_0x440031[_0x1abd92(0x1bb)],_0x335596[_0x1abd92(0x1bb)]),_0x440031['elementMultiplier']=a122_0x409b95(_0x440031[_0x1abd92(0x18c)],_0x335596[_0x1abd92(0x18c)]),_0x440031['isBigEndian']=a122_0x409b95(_0x440031['isBigEndian'],_0x335596[_0x1abd92(0x1c8)]));this[_0x1abd92(0x1b5)]=_0x440031,this[_0x1abd92(0x1ab)]=a122_0x409b95(_0x430b9f[_0x1abd92(0x163)],![]),this[_0x1abd92(0x1c6)]=_0x430b9f['waterMask'],this['_skirtHeight']=undefined,this[_0x1abd92(0x189)]=this[_0x1abd92(0x1bf)]===a122_0x5726df[_0x1abd92(0x165)]?Float32Array:this[_0x1abd92(0x17d)][_0x1abd92(0x185)],this[_0x1abd92(0x197)]=undefined;}Object['defineProperties'](HeightmapTerrainData[a122_0x5cdb78(0x17c)],{'credits':{'get':function(){return undefined;}},'waterMask':{'get':function(){var _0x4e4bf6=a122_0x5cdb78;return this[_0x4e4bf6(0x1c6)];}},'childTileMask':{'get':function(){var _0x30b15b=a122_0x5cdb78;return this[_0x30b15b(0x184)];}}});var createMeshTaskName=a122_0x5cdb78(0x1b1),createMeshTaskProcessorNoThrottle=new a122_0x3779f2(createMeshTaskName),createMeshTaskProcessorThrottle=new a122_0x3779f2(createMeshTaskName,a122_0x18047f['maximumAsynchronousTasks']);HeightmapTerrainData[a122_0x5cdb78(0x17c)][a122_0x5cdb78(0x17f)]=function(_0x2a86e3){var _0x1001e0=a122_0x5cdb78;_0x2a86e3=a122_0x409b95(_0x2a86e3,a122_0x409b95[_0x1001e0(0x1a8)]),a122_0x46bf7e[_0x1001e0(0x1a5)][_0x1001e0(0x1a6)]('options.tilingScheme',_0x2a86e3[_0x1001e0(0x198)]),a122_0x46bf7e['typeOf']['number'](_0x1001e0(0x1b3),_0x2a86e3['x']),a122_0x46bf7e[_0x1001e0(0x1a5)][_0x1001e0(0x173)](_0x1001e0(0x194),_0x2a86e3['y']),a122_0x46bf7e[_0x1001e0(0x1a5)][_0x1001e0(0x173)]('options.level',_0x2a86e3[_0x1001e0(0x188)]);var _0x33bd03=_0x2a86e3['tilingScheme'],_0x7335b6=_0x2a86e3['x'],_0x1af7aa=_0x2a86e3['y'],_0x39489c=_0x2a86e3[_0x1001e0(0x188)],_0x5e6a32=a122_0x409b95(_0x2a86e3[_0x1001e0(0x1c2)],0x1),_0xc71efb=a122_0x409b95(_0x2a86e3[_0x1001e0(0x17e)],0x0),_0x4d2a7a=a122_0x409b95(_0x2a86e3[_0x1001e0(0x1af)],!![]),_0x44b5b7=_0x33bd03[_0x1001e0(0x176)],_0x1da3d1=_0x33bd03[_0x1001e0(0x18d)](_0x7335b6,_0x1af7aa,_0x39489c),_0x5016c7=_0x33bd03[_0x1001e0(0x169)](_0x7335b6,_0x1af7aa,_0x39489c),_0xd956b0=_0x44b5b7['cartographicToCartesian'](a122_0x33fc81['center'](_0x5016c7)),_0x4f9d87=this['_structure'],_0x589ab2=a122_0x5c7d1d['getEstimatedLevelZeroGeometricErrorForAHeightmap'](_0x44b5b7,this[_0x1001e0(0x1a1)],_0x33bd03['getNumberOfXTilesAtLevel'](0x0)),_0x4c5b6e=_0x589ab2/(0x1<<_0x39489c);this[_0x1001e0(0x19c)]=Math[_0x1001e0(0x1b7)](_0x4c5b6e*0x4,0x3e8);var _0x222eb6=_0x4d2a7a?createMeshTaskProcessorThrottle:createMeshTaskProcessorNoThrottle,_0x2232a6=_0x222eb6['scheduleTask']({'heightmap':this[_0x1001e0(0x17d)],'structure':_0x4f9d87,'includeWebMercatorT':!![],'width':this[_0x1001e0(0x1a1)],'height':this[_0x1001e0(0x1aa)],'nativeRectangle':_0x1da3d1,'rectangle':_0x5016c7,'relativeToCenter':_0xd956b0,'ellipsoid':_0x44b5b7,'skirtHeight':this[_0x1001e0(0x19c)],'isGeographic':_0x33bd03[_0x1001e0(0x1b0)]instanceof a122_0x17b86b,'exaggeration':_0x5e6a32,'exaggerationRelativeHeight':_0xc71efb,'encoding':this[_0x1001e0(0x1bf)]});if(!a122_0x5d8e58(_0x2232a6))return undefined;var _0x1df4b3=this;return a122_0x2e8c78(_0x2232a6,function(_0x30ccbd){var _0x4460eb=_0x1001e0,_0x38ef46;_0x1df4b3[_0x4460eb(0x19c)]>0x0?_0x38ef46=a122_0x5c7d1d['getRegularGridAndSkirtIndicesAndEdgeIndices'](_0x30ccbd[_0x4460eb(0x1c4)],_0x30ccbd[_0x4460eb(0x16a)]):_0x38ef46=a122_0x5c7d1d['getRegularGridIndicesAndEdgeIndices'](_0x30ccbd['gridWidth'],_0x30ccbd['gridHeight']);var _0x3c6de2=_0x30ccbd[_0x4460eb(0x1c4)]*_0x30ccbd[_0x4460eb(0x16a)];return _0x1df4b3[_0x4460eb(0x197)]=new a122_0x26ebe1(_0xd956b0,new Float32Array(_0x30ccbd[_0x4460eb(0x174)]),_0x38ef46['indices'],_0x38ef46[_0x4460eb(0x18a)],_0x3c6de2,_0x30ccbd[_0x4460eb(0x1a2)],_0x30ccbd[_0x4460eb(0x1be)],a122_0xfb8f7e[_0x4460eb(0x17b)](_0x30ccbd['boundingSphere3D']),a122_0x174427[_0x4460eb(0x17b)](_0x30ccbd['occludeePointInScaledSpace']),_0x30ccbd[_0x4460eb(0x16d)],a122_0x1b12d4['clone'](_0x30ccbd[_0x4460eb(0x19e)]),a122_0x5299a3[_0x4460eb(0x17b)](_0x30ccbd['encoding']),_0x38ef46[_0x4460eb(0x1c5)],_0x38ef46[_0x4460eb(0x187)],_0x38ef46[_0x4460eb(0x1ae)],_0x38ef46[_0x4460eb(0x1c0)]),_0x1df4b3[_0x4460eb(0x17d)]=undefined,_0x1df4b3[_0x4460eb(0x197)];});},HeightmapTerrainData['prototype']['_createMeshSync']=function(_0x49ac9a){var _0x20b66d=a122_0x5cdb78;a122_0x46bf7e[_0x20b66d(0x1a5)][_0x20b66d(0x1a6)](_0x20b66d(0x19d),_0x49ac9a['tilingScheme']),a122_0x46bf7e[_0x20b66d(0x1a5)][_0x20b66d(0x173)](_0x20b66d(0x1b3),_0x49ac9a['x']),a122_0x46bf7e[_0x20b66d(0x1a5)][_0x20b66d(0x173)](_0x20b66d(0x194),_0x49ac9a['y']),a122_0x46bf7e[_0x20b66d(0x1a5)][_0x20b66d(0x173)](_0x20b66d(0x16b),_0x49ac9a[_0x20b66d(0x188)]);var _0xf4232a=_0x49ac9a[_0x20b66d(0x198)],_0x2b5802=_0x49ac9a['x'],_0x2d46da=_0x49ac9a['y'],_0x4461ff=_0x49ac9a[_0x20b66d(0x188)],_0x16b93b=a122_0x409b95(_0x49ac9a[_0x20b66d(0x1c2)],0x1),_0x517561=a122_0x409b95(_0x49ac9a[_0x20b66d(0x17e)],0x0),_0x312d4b=_0xf4232a[_0x20b66d(0x176)],_0x3b1711=_0xf4232a['tileXYToNativeRectangle'](_0x2b5802,_0x2d46da,_0x4461ff),_0x1be459=_0xf4232a[_0x20b66d(0x169)](_0x2b5802,_0x2d46da,_0x4461ff),_0x5e9b75=_0x312d4b['cartographicToCartesian'](a122_0x33fc81[_0x20b66d(0x191)](_0x1be459)),_0x5df842=this[_0x20b66d(0x1b5)],_0x137552=a122_0x5c7d1d['getEstimatedLevelZeroGeometricErrorForAHeightmap'](_0x312d4b,this[_0x20b66d(0x1a1)],_0xf4232a['getNumberOfXTilesAtLevel'](0x0)),_0x3d538b=_0x137552/(0x1<<_0x4461ff);this['_skirtHeight']=Math[_0x20b66d(0x1b7)](_0x3d538b*0x4,0x3e8);var _0x45a726=a122_0x5b3e67['computeVertices']({'heightmap':this[_0x20b66d(0x17d)],'structure':_0x5df842,'includeWebMercatorT':!![],'width':this[_0x20b66d(0x1a1)],'height':this[_0x20b66d(0x1aa)],'nativeRectangle':_0x3b1711,'rectangle':_0x1be459,'relativeToCenter':_0x5e9b75,'ellipsoid':_0x312d4b,'skirtHeight':this[_0x20b66d(0x19c)],'isGeographic':_0xf4232a[_0x20b66d(0x1b0)]instanceof a122_0x17b86b,'exaggeration':_0x16b93b,'exaggerationRelativeHeight':_0x517561});this['_buffer']=undefined;var _0x11fab8;this[_0x20b66d(0x19c)]>0x0?_0x11fab8=a122_0x5c7d1d[_0x20b66d(0x1bd)](this['_width'],this[_0x20b66d(0x1aa)]):_0x11fab8=a122_0x5c7d1d[_0x20b66d(0x1ad)](this[_0x20b66d(0x1a1)],this[_0x20b66d(0x1aa)]);var _0x45f5bb=_0x45a726['gridWidth']*_0x45a726[_0x20b66d(0x16a)];return this[_0x20b66d(0x197)]=new a122_0x26ebe1(_0x5e9b75,_0x45a726[_0x20b66d(0x174)],_0x11fab8[_0x20b66d(0x19b)],_0x11fab8[_0x20b66d(0x18a)],_0x45f5bb,_0x45a726[_0x20b66d(0x1a2)],_0x45a726[_0x20b66d(0x1be)],_0x45a726[_0x20b66d(0x1b8)],_0x45a726[_0x20b66d(0x19f)],_0x45a726[_0x20b66d(0x1b9)]['stride'],_0x45a726[_0x20b66d(0x19e)],_0x45a726[_0x20b66d(0x1b9)],_0x11fab8[_0x20b66d(0x1c5)],_0x11fab8[_0x20b66d(0x187)],_0x11fab8[_0x20b66d(0x1ae)],_0x11fab8[_0x20b66d(0x1c0)]),this[_0x20b66d(0x197)];},HeightmapTerrainData[a122_0x5cdb78(0x17c)][a122_0x5cdb78(0x17a)]=function(_0x5d4a20,_0x4885e9,_0x1c4515){var _0x4b847f=a122_0x5cdb78,_0x69f33=this['_width'],_0x329249=this[_0x4b847f(0x1aa)],_0x225802=this[_0x4b847f(0x1b5)],_0x50d64e=_0x225802['stride'],_0x4733c2=_0x225802['elementsPerHeight'],_0x59c114=_0x225802[_0x4b847f(0x18c)],_0x57d67b=_0x225802[_0x4b847f(0x1c8)],_0x1df24e=_0x225802[_0x4b847f(0x175)],_0x5593f4=_0x225802[_0x4b847f(0x199)],_0x572363=a122_0x5d8e58(this[_0x4b847f(0x197)]),_0x30be29=this[_0x4b847f(0x1bf)]===a122_0x5726df[_0x4b847f(0x165)],_0x4d3266=!_0x572363&&_0x30be29;if(_0x4d3266)return undefined;var _0x458fcf;if(_0x572363){var _0x48dc58=this[_0x4b847f(0x197)][_0x4b847f(0x174)],_0x35e129=this[_0x4b847f(0x197)][_0x4b847f(0x1b9)];_0x458fcf=interpolateMeshHeight(_0x48dc58,_0x35e129,_0x1df24e,_0x5593f4,_0x5d4a20,_0x69f33,_0x329249,_0x4885e9,_0x1c4515);}else _0x458fcf=interpolateHeight(this[_0x4b847f(0x17d)],_0x4733c2,_0x59c114,_0x50d64e,_0x57d67b,_0x5d4a20,_0x69f33,_0x329249,_0x4885e9,_0x1c4515),_0x458fcf=_0x458fcf*_0x5593f4+_0x1df24e;return _0x458fcf;},HeightmapTerrainData['prototype'][a122_0x5cdb78(0x1c1)]=function(_0x12bb9e,_0x16fcec,_0x54c94b,_0x5cf790,_0x4c5d53,_0x416c10,_0x244d64){var _0x26a150=a122_0x5cdb78;if(!a122_0x5d8e58(_0x12bb9e))throw new a122_0x5802c2(_0x26a150(0x164));if(!a122_0x5d8e58(_0x16fcec))throw new a122_0x5802c2(_0x26a150(0x195));if(!a122_0x5d8e58(_0x54c94b))throw new a122_0x5802c2('thisY\x20is\x20required.');if(!a122_0x5d8e58(_0x5cf790))throw new a122_0x5802c2(_0x26a150(0x177));if(!a122_0x5d8e58(_0x4c5d53))throw new a122_0x5802c2(_0x26a150(0x1b4));if(!a122_0x5d8e58(_0x416c10))throw new a122_0x5802c2('descendantY\x20is\x20required.');if(!a122_0x5d8e58(_0x244d64))throw new a122_0x5802c2(_0x26a150(0x167));var _0x5a850b=_0x244d64-_0x5cf790;if(_0x5a850b>0x1)throw new a122_0x5802c2('Upsampling\x20through\x20more\x20than\x20one\x20level\x20at\x20a\x20time\x20is\x20not\x20currently\x20supported.');var _0x517056=this['_mesh'];if(!a122_0x5d8e58(_0x517056))return undefined;var _0x4bfc91=this[_0x26a150(0x1a1)],_0x1ad84c=this['_height'],_0x1c2fda=this[_0x26a150(0x1b5)],_0x2c765c=_0x1c2fda[_0x26a150(0x1bb)],_0x481dfc=new this['_bufferType'](_0x4bfc91*_0x1ad84c*_0x2c765c),_0x5a0b51=_0x517056[_0x26a150(0x174)],_0x4eeaa2=_0x517056[_0x26a150(0x1b9)],_0x4f2903=_0x12bb9e['tileXYToRectangle'](_0x16fcec,_0x54c94b,_0x5cf790),_0x292f67=_0x12bb9e['tileXYToRectangle'](_0x4c5d53,_0x416c10,_0x244d64),_0x32700c=_0x1c2fda[_0x26a150(0x175)],_0x493eb3=_0x1c2fda['heightScale'],_0x55efdc=_0x1c2fda[_0x26a150(0x18e)],_0x544037=_0x1c2fda[_0x26a150(0x18c)],_0x5e336c=_0x1c2fda[_0x26a150(0x1c8)],_0x40fd34=Math[_0x26a150(0x192)](_0x544037,_0x55efdc-0x1);for(var _0x1a98de=0x0;_0x1a98de<_0x1ad84c;++_0x1a98de){var _0x4f8cad=a122_0x15517d[_0x26a150(0x19a)](_0x292f67[_0x26a150(0x182)],_0x292f67[_0x26a150(0x166)],_0x1a98de/(_0x1ad84c-0x1));for(var _0x44283d=0x0;_0x44283d<_0x4bfc91;++_0x44283d){var _0x1ea01b=a122_0x15517d[_0x26a150(0x19a)](_0x292f67[_0x26a150(0x168)],_0x292f67[_0x26a150(0x1a7)],_0x44283d/(_0x4bfc91-0x1)),_0x12590a=interpolateMeshHeight(_0x5a0b51,_0x4eeaa2,_0x32700c,_0x493eb3,_0x4f2903,_0x4bfc91,_0x1ad84c,_0x1ea01b,_0x4f8cad);_0x12590a=_0x12590a<_0x1c2fda[_0x26a150(0x180)]?_0x1c2fda['lowestEncodedHeight']:_0x12590a,_0x12590a=_0x12590a>_0x1c2fda[_0x26a150(0x16f)]?_0x1c2fda[_0x26a150(0x16f)]:_0x12590a,setHeight(_0x481dfc,_0x55efdc,_0x544037,_0x40fd34,_0x2c765c,_0x5e336c,_0x1a98de*_0x4bfc91+_0x44283d,_0x12590a);}}return new HeightmapTerrainData({'buffer':_0x481dfc,'width':_0x4bfc91,'height':_0x1ad84c,'childTileMask':0x0,'structure':this[_0x26a150(0x1b5)],'createdByUpsampling':!![]});},HeightmapTerrainData[a122_0x5cdb78(0x17c)][a122_0x5cdb78(0x1bc)]=function(_0x3e4b49,_0x45fe8e,_0x21ebe5,_0x20b242){var _0xeb09ac=a122_0x5cdb78;if(!a122_0x5d8e58(_0x3e4b49))throw new a122_0x5802c2(_0xeb09ac(0x195));if(!a122_0x5d8e58(_0x45fe8e))throw new a122_0x5802c2(_0xeb09ac(0x1c3));if(!a122_0x5d8e58(_0x21ebe5))throw new a122_0x5802c2(_0xeb09ac(0x18b));if(!a122_0x5d8e58(_0x20b242))throw new a122_0x5802c2(_0xeb09ac(0x1b6));var _0x425d05=0x2;return _0x21ebe5!==_0x3e4b49*0x2&&++_0x425d05,_0x20b242!==_0x45fe8e*0x2&&(_0x425d05-=0x2),(this[_0xeb09ac(0x184)]&0x1<<_0x425d05)!==0x0;},HeightmapTerrainData[a122_0x5cdb78(0x17c)][a122_0x5cdb78(0x178)]=function(){var _0x3b5daa=a122_0x5cdb78;return this[_0x3b5daa(0x1ab)];};function interpolateHeight(_0xe77f65,_0x596a2f,_0x14a51d,_0x661de8,_0x50606d,_0x15f93f,_0x3d3c63,_0x58266,_0x1d2975,_0x4b7aa2){var _0x3685cc=a122_0x5cdb78,_0x2e8661=(_0x1d2975-_0x15f93f['west'])*(_0x3d3c63-0x1)/(_0x15f93f[_0x3685cc(0x1a7)]-_0x15f93f[_0x3685cc(0x168)]),_0x5cbe58=(_0x4b7aa2-_0x15f93f['south'])*(_0x58266-0x1)/(_0x15f93f['north']-_0x15f93f[_0x3685cc(0x166)]),_0x1b1e5a=_0x2e8661|0x0,_0x52abc4=_0x1b1e5a+0x1;_0x52abc4>=_0x3d3c63&&(_0x52abc4=_0x3d3c63-0x1,_0x1b1e5a=_0x3d3c63-0x2);var _0x36df09=_0x5cbe58|0x0,_0x1a2090=_0x36df09+0x1;_0x1a2090>=_0x58266&&(_0x1a2090=_0x58266-0x1,_0x36df09=_0x58266-0x2);var _0x2e6bdf=_0x2e8661-_0x1b1e5a,_0x82dbb2=_0x5cbe58-_0x36df09;_0x36df09=_0x58266-0x1-_0x36df09,_0x1a2090=_0x58266-0x1-_0x1a2090;var _0x24241d=getHeight(_0xe77f65,_0x596a2f,_0x14a51d,_0x661de8,_0x50606d,_0x36df09*_0x3d3c63+_0x1b1e5a),_0x152d9b=getHeight(_0xe77f65,_0x596a2f,_0x14a51d,_0x661de8,_0x50606d,_0x36df09*_0x3d3c63+_0x52abc4),_0x52bd9e=getHeight(_0xe77f65,_0x596a2f,_0x14a51d,_0x661de8,_0x50606d,_0x1a2090*_0x3d3c63+_0x1b1e5a),_0x56d6c3=getHeight(_0xe77f65,_0x596a2f,_0x14a51d,_0x661de8,_0x50606d,_0x1a2090*_0x3d3c63+_0x52abc4);return triangleInterpolateHeight(_0x2e6bdf,_0x82dbb2,_0x24241d,_0x152d9b,_0x52bd9e,_0x56d6c3);}function interpolateMeshHeight(_0x4a61be,_0x2aba00,_0x1369e3,_0x12072a,_0xfe54fe,_0x4aba1c,_0x52945a,_0x48b30f,_0x54f839){var _0xd102b1=a122_0x5cdb78,_0x5ece58=(_0x48b30f-_0xfe54fe[_0xd102b1(0x168)])*(_0x4aba1c-0x1)/(_0xfe54fe[_0xd102b1(0x1a7)]-_0xfe54fe[_0xd102b1(0x168)]),_0x48ad6b=(_0x54f839-_0xfe54fe['south'])*(_0x52945a-0x1)/(_0xfe54fe[_0xd102b1(0x182)]-_0xfe54fe[_0xd102b1(0x166)]),_0x314d57=_0x5ece58|0x0,_0xfd2ae1=_0x314d57+0x1;_0xfd2ae1>=_0x4aba1c&&(_0xfd2ae1=_0x4aba1c-0x1,_0x314d57=_0x4aba1c-0x2);var _0x1e5ad4=_0x48ad6b|0x0,_0x5b7cca=_0x1e5ad4+0x1;_0x5b7cca>=_0x52945a&&(_0x5b7cca=_0x52945a-0x1,_0x1e5ad4=_0x52945a-0x2);var _0x3f1e73=_0x5ece58-_0x314d57,_0x3d57f9=_0x48ad6b-_0x1e5ad4;_0x1e5ad4=_0x52945a-0x1-_0x1e5ad4,_0x5b7cca=_0x52945a-0x1-_0x5b7cca;var _0x2fd2f2=(_0x2aba00[_0xd102b1(0x181)](_0x4a61be,_0x1e5ad4*_0x4aba1c+_0x314d57)-_0x1369e3)/_0x12072a,_0x46976e=(_0x2aba00[_0xd102b1(0x181)](_0x4a61be,_0x1e5ad4*_0x4aba1c+_0xfd2ae1)-_0x1369e3)/_0x12072a,_0xa6fa8a=(_0x2aba00[_0xd102b1(0x181)](_0x4a61be,_0x5b7cca*_0x4aba1c+_0x314d57)-_0x1369e3)/_0x12072a,_0x5244e7=(_0x2aba00[_0xd102b1(0x181)](_0x4a61be,_0x5b7cca*_0x4aba1c+_0xfd2ae1)-_0x1369e3)/_0x12072a;return triangleInterpolateHeight(_0x3f1e73,_0x3d57f9,_0x2fd2f2,_0x46976e,_0xa6fa8a,_0x5244e7);}function a122_0x3440(){var _0x13d471=['typeOf','object','east','EMPTY_OBJECT','18CTItIx','_height','_createdByUpsampling','170Timvyc','getRegularGridIndicesAndEdgeIndices','eastIndicesNorthToSouth','throttle','projection','createVerticesFromHeightmap','559185pHjSGh','options.x','descendantX\x20is\x20required.','_structure','childY\x20is\x20required.','min','boundingSphere3D','encoding','174mXWmjZ','stride','isChildAvailable','getRegularGridAndSkirtIndicesAndEdgeIndices','maximumHeight','_encoding','northIndicesWestToEast','upsample','exaggeration','thisY\x20is\x20required.','gridWidth','westIndicesSouthToNorth','_waterMask','options.height\x20is\x20required.','isBigEndian','NONE','createdByUpsampling','tilingScheme\x20is\x20required.','LERC','south','descendantLevel\x20is\x20required.','west','tileXYToRectangle','gridHeight','options.level','structure','numberOfAttributes','2KcYtYT','highestEncodedHeight','488796JOuffO','549989oTDWzh','buffer','number','vertices','heightOffset','ellipsoid','thisLevel\x20is\x20required.','wasCreatedByUpsampling','height','interpolateHeight','clone','prototype','_buffer','exaggerationRelativeHeight','createMesh','lowestEncodedHeight','decodeHeight','north','3181311IeDeju','_childTileMask','constructor','45416DCwkQL','southIndicesEastToWest','level','_bufferType','indexCountWithoutSkirts','childX\x20is\x20required.','elementMultiplier','tileXYToNativeRectangle','elementsPerHeight','1456103biKTHi','5615928Slzreh','center','pow','childTileMask','options.y','thisX\x20is\x20required.','options.width\x20is\x20required.','_mesh','tilingScheme','heightScale','lerp','indices','_skirtHeight','options.tilingScheme','orientedBoundingBox','occludeePointInScaledSpace','DEFAULT_STRUCTURE','_width','minimumHeight','options.buffer\x20is\x20required.','width'];a122_0x3440=function(){return _0x13d471;};return a122_0x3440();}function triangleInterpolateHeight(_0x52e94c,_0x2afce4,_0xc91863,_0x1a182e,_0x3f7fd2,_0x491e7c){if(_0x2afce4<_0x52e94c)return _0xc91863+_0x52e94c*(_0x1a182e-_0xc91863)+_0x2afce4*(_0x491e7c-_0x1a182e);return _0xc91863+_0x52e94c*(_0x491e7c-_0x3f7fd2)+_0x2afce4*(_0x3f7fd2-_0xc91863);}function getHeight(_0x57ff74,_0x5dd853,_0x49999a,_0x4c4b51,_0x522552,_0x18237f){_0x18237f*=_0x4c4b51;var _0x12d75a=0x0,_0x413eed;if(_0x522552)for(_0x413eed=0x0;_0x413eed<_0x5dd853;++_0x413eed){_0x12d75a=_0x12d75a*_0x49999a+_0x57ff74[_0x18237f+_0x413eed];}else for(_0x413eed=_0x5dd853-0x1;_0x413eed>=0x0;--_0x413eed){_0x12d75a=_0x12d75a*_0x49999a+_0x57ff74[_0x18237f+_0x413eed];}return _0x12d75a;}function setHeight(_0x347e93,_0x5cda14,_0x57cc42,_0x1ae2ae,_0x2139fc,_0xf80bab,_0x64b7ce,_0x2f7cdb){_0x64b7ce*=_0x2139fc;var _0x4bc5ed;if(_0xf80bab)for(_0x4bc5ed=0x0;_0x4bc5ed<_0x5cda14-0x1;++_0x4bc5ed){_0x347e93[_0x64b7ce+_0x4bc5ed]=_0x2f7cdb/_0x1ae2ae|0x0,_0x2f7cdb-=_0x347e93[_0x64b7ce+_0x4bc5ed]*_0x1ae2ae,_0x1ae2ae/=_0x57cc42;}else for(_0x4bc5ed=_0x5cda14-0x1;_0x4bc5ed>0x0;--_0x4bc5ed){_0x347e93[_0x64b7ce+_0x4bc5ed]=_0x2f7cdb/_0x1ae2ae|0x0,_0x2f7cdb-=_0x347e93[_0x64b7ce+_0x4bc5ed]*_0x1ae2ae,_0x1ae2ae/=_0x57cc42;}_0x347e93[_0x64b7ce+_0x4bc5ed]=_0x2f7cdb;}export default HeightmapTerrainData;