var a518_0x437720=a518_0x2e4a;(function(_0x1edca3,_0x3fd7cc){var _0x427ce0=a518_0x2e4a,_0x383a24=_0x1edca3();while(!![]){try{var _0x34847f=parseInt(_0x427ce0(0x1a3))/0x1+-parseInt(_0x427ce0(0x1e7))/0x2*(parseInt(_0x427ce0(0x1c0))/0x3)+-parseInt(_0x427ce0(0x19e))/0x4+parseInt(_0x427ce0(0x1e6))/0x5*(-parseInt(_0x427ce0(0x1ca))/0x6)+-parseInt(_0x427ce0(0x1c5))/0x7*(parseInt(_0x427ce0(0x1fd))/0x8)+parseInt(_0x427ce0(0x1ff))/0x9*(-parseInt(_0x427ce0(0x200))/0xa)+parseInt(_0x427ce0(0x180))/0xb*(parseInt(_0x427ce0(0x1a8))/0xc);if(_0x34847f===_0x3fd7cc)break;else _0x383a24['push'](_0x383a24['shift']());}catch(_0x5ef1bf){_0x383a24['push'](_0x383a24['shift']());}}}(a518_0x53e1,0xe4ada));import a518_0x29f72d from'../Core/BoundingSphere.js';import a518_0x1ed4b0 from'../Core/Cartesian3.js';import a518_0xfc10e8 from'../Core/Cartesian4.js';import a518_0x3c99ab from'../Core/Cartographic.js';import a518_0x3d41d1 from'../Core/defined.js';import a518_0xc8b560 from'../Core/IndexDatatype.js';import a518_0x161efb from'../Core/IntersectionTests.js';import a518_0x392316 from'../Core/PixelFormat.js';import a518_0x15e3ad from'../Core/Ray.js';import a518_0x147077 from'../Core/Request.js';import a518_0x264efe from'../Core/RequestState.js';import a518_0x421619 from'../Core/RequestType.js';import a518_0x313dfa from'../Core/TerrainEncoding.js';import a518_0x5e9e25 from'../Core/TileProviderError.js';import a518_0x4059cb from'../Renderer/Buffer.js';import a518_0x2a69a9 from'../Renderer/BufferUsage.js';import a518_0xc1b522 from'../Renderer/PixelDatatype.js';import a518_0x3dac3e from'../Renderer/Sampler.js';import a518_0x4d283b from'../Renderer/Texture.js';import a518_0x149061 from'../Renderer/TextureMagnificationFilter.js';function a518_0x2e4a(_0x567123,_0x3cc94f){var _0x53e10c=a518_0x53e1();return a518_0x2e4a=function(_0x2e4ab3,_0xf3f884){_0x2e4ab3=_0x2e4ab3-0x17f;var _0x81646c=_0x53e10c[_0x2e4ab3];return _0x81646c;},a518_0x2e4a(_0x567123,_0x3cc94f);}import a518_0x43ee5b from'../Renderer/TextureMinificationFilter.js';import a518_0x658318 from'../Renderer/TextureWrap.js';import a518_0x15b166 from'../Renderer/VertexArray.js';import a518_0x5094db from'../ThirdParty/when.js';import a518_0x301388 from'./ImageryState.js';import a518_0x3e10c7 from'./QuadtreeTileLoadState.js';import a518_0x18e196 from'./SceneMode.js';import a518_0x95924c from'./TerrainState.js';function GlobeSurfaceTile(){var _0xc7ea7b=a518_0x2e4a;this[_0xc7ea7b(0x1b1)]=[],this[_0xc7ea7b(0x1e2)]=undefined,this[_0xc7ea7b(0x1d8)]=new a518_0xfc10e8(0x0,0x0,0x1,0x1),this[_0xc7ea7b(0x1da)]=undefined,this[_0xc7ea7b(0x1ee)]=undefined,this[_0xc7ea7b(0x18f)]=undefined,this[_0xc7ea7b(0x1fb)]=new a518_0x1ed4b0(),this[_0xc7ea7b(0x182)]=undefined,this[_0xc7ea7b(0x1a1)]=![],this[_0xc7ea7b(0x1cf)]=a518_0x95924c[_0xc7ea7b(0x1ec)],this['mesh']=undefined,this[_0xc7ea7b(0x18d)]=undefined,this[_0xc7ea7b(0x1a0)]=new a518_0x29f72d(),this[_0xc7ea7b(0x1df)]=undefined,this[_0xc7ea7b(0x1f0)]=!![],this[_0xc7ea7b(0x1d3)]=![];}Object[a518_0x437720(0x1b9)](GlobeSurfaceTile[a518_0x437720(0x1e1)],{'eligibleForUnloading':{'get':function(){var _0x563198=a518_0x437720,_0xbc84ef=this[_0x563198(0x1cf)],_0x6702af=_0xbc84ef===a518_0x95924c[_0x563198(0x189)]||_0xbc84ef===a518_0x95924c[_0x563198(0x1e8)],_0x2fb6e3=!_0x6702af,_0x96eaf1=this[_0x563198(0x1b1)];for(var _0x4b73f0=0x0,_0x1ec219=_0x96eaf1[_0x563198(0x1f4)];_0x2fb6e3&&_0x4b73f0<_0x1ec219;++_0x4b73f0){var _0xb46d06=_0x96eaf1[_0x4b73f0];_0x2fb6e3=!a518_0x3d41d1(_0xb46d06[_0x563198(0x19b)])||_0xb46d06[_0x563198(0x19b)][_0x563198(0x1db)]!==a518_0x301388[_0x563198(0x1ef)];}return _0x2fb6e3;}},'renderedMesh':{'get':function(){var _0x2ff43c=a518_0x437720;if(a518_0x3d41d1(this[_0x2ff43c(0x1ee)]))return this[_0x2ff43c(0x1f3)];else{if(a518_0x3d41d1(this[_0x2ff43c(0x18d)]))return this[_0x2ff43c(0x18d)][_0x2ff43c(0x1f3)];}return undefined;}}});var scratchCartographic=new a518_0x3c99ab();function getPosition(_0x159775,_0x121b6a,_0x4d150d,_0x911650,_0x370689,_0x2c0c6b){var _0x3d3847=a518_0x437720,_0x2a0e80=_0x159775['getExaggeratedPosition'](_0x911650,_0x370689,_0x2c0c6b);if(a518_0x3d41d1(_0x121b6a)&&_0x121b6a!==a518_0x18e196[_0x3d3847(0x195)]){var _0x42bf29=_0x4d150d['ellipsoid'],_0x5e9a4f=_0x42bf29['cartesianToCartographic'](_0x2a0e80,scratchCartographic);_0x2a0e80=_0x4d150d[_0x3d3847(0x183)](_0x5e9a4f,_0x2c0c6b),_0x2a0e80=a518_0x1ed4b0[_0x3d3847(0x1f1)](_0x2a0e80['z'],_0x2a0e80['x'],_0x2a0e80['y'],_0x2c0c6b);}return _0x2a0e80;}var scratchV0=new a518_0x1ed4b0(),scratchV1=new a518_0x1ed4b0(),scratchV2=new a518_0x1ed4b0();GlobeSurfaceTile[a518_0x437720(0x1e1)]['pick']=function(_0x3516b2,_0x40e9fe,_0x3627e8,_0x163cd4,_0x2aff21){var _0x39b017=a518_0x437720,_0x59b688=this[_0x39b017(0x1f9)];if(!a518_0x3d41d1(_0x59b688))return undefined;var _0x4e6e0f=_0x59b688[_0x39b017(0x19c)],_0x28e42a=_0x59b688[_0x39b017(0x1f8)],_0x4e3b58=_0x59b688[_0x39b017(0x1c3)],_0x5c9fb7=_0x28e42a[_0x39b017(0x1f4)],_0x574978=Number[_0x39b017(0x190)];for(var _0xfeadef=0x0;_0xfeadef<_0x5c9fb7;_0xfeadef+=0x3){var _0x419242=_0x28e42a[_0xfeadef],_0x2151fe=_0x28e42a[_0xfeadef+0x1],_0x525d78=_0x28e42a[_0xfeadef+0x2],_0x18b9a0=getPosition(_0x4e3b58,_0x40e9fe,_0x3627e8,_0x4e6e0f,_0x419242,scratchV0),_0x290103=getPosition(_0x4e3b58,_0x40e9fe,_0x3627e8,_0x4e6e0f,_0x2151fe,scratchV1),_0x253c78=getPosition(_0x4e3b58,_0x40e9fe,_0x3627e8,_0x4e6e0f,_0x525d78,scratchV2),_0x54838a=a518_0x161efb[_0x39b017(0x1e3)](_0x3516b2,_0x18b9a0,_0x290103,_0x253c78,_0x163cd4);a518_0x3d41d1(_0x54838a)&&_0x54838a<_0x574978&&_0x54838a>=0x0&&(_0x574978=_0x54838a);}return _0x574978!==Number[_0x39b017(0x190)]?a518_0x15e3ad['getPoint'](_0x3516b2,_0x574978,_0x2aff21):undefined;},GlobeSurfaceTile[a518_0x437720(0x1e1)]['freeResources']=function(){var _0xe1cdc1=a518_0x437720;a518_0x3d41d1(this['waterMaskTexture'])&&(--this[_0xe1cdc1(0x1e2)][_0xe1cdc1(0x17f)],this['waterMaskTexture']['referenceCount']===0x0&&this[_0xe1cdc1(0x1e2)][_0xe1cdc1(0x1a6)](),this[_0xe1cdc1(0x1e2)]=undefined);this[_0xe1cdc1(0x1da)]=undefined,this['terrainState']=a518_0x95924c[_0xe1cdc1(0x1ec)],this[_0xe1cdc1(0x1f3)]=undefined,this[_0xe1cdc1(0x18d)]=this['fill']&&this[_0xe1cdc1(0x18d)][_0xe1cdc1(0x1a6)]();var _0x3ad4cc=this[_0xe1cdc1(0x1b1)];for(var _0x369d70=0x0,_0x1ac663=_0x3ad4cc[_0xe1cdc1(0x1f4)];_0x369d70<_0x1ac663;++_0x369d70){_0x3ad4cc[_0x369d70][_0xe1cdc1(0x1d7)]();}this['imagery'][_0xe1cdc1(0x1f4)]=0x0,this[_0xe1cdc1(0x1c1)]();},GlobeSurfaceTile['prototype'][a518_0x437720(0x1c1)]=function(){var _0x9eed49=a518_0x437720;GlobeSurfaceTile['_freeVertexArray'](this[_0x9eed49(0x1ee)]),this[_0x9eed49(0x1ee)]=undefined,GlobeSurfaceTile[_0x9eed49(0x1a5)](this[_0x9eed49(0x1fe)]),this['wireframeVertexArray']=undefined;},GlobeSurfaceTile[a518_0x437720(0x1cb)]=function(_0x4888a7,_0x4379a5,_0x2576c6){var _0x2dc022=a518_0x437720,_0x3fe24a=_0x4888a7[_0x2dc022(0x19f)];!a518_0x3d41d1(_0x3fe24a)&&(_0x3fe24a=_0x4888a7[_0x2dc022(0x19f)]=new GlobeSurfaceTile()),_0x4888a7[_0x2dc022(0x1db)]===a518_0x3e10c7[_0x2dc022(0x194)]&&(prepareNewTile(_0x4888a7,_0x4379a5,_0x2576c6),_0x4888a7[_0x2dc022(0x1db)]=a518_0x3e10c7[_0x2dc022(0x1b5)]);},GlobeSurfaceTile[a518_0x437720(0x181)]=function(_0x3e6e85,_0x1ea247,_0x4fd964,_0xf520b,_0x831a7e,_0x28e1c9,_0x3b1cba){var _0x49c00e=a518_0x437720;GlobeSurfaceTile[_0x49c00e(0x1cb)](_0x3e6e85,_0x4fd964,_0xf520b);var _0x453065=_0x3e6e85[_0x49c00e(0x19f)];_0x3e6e85[_0x49c00e(0x1db)]===a518_0x3e10c7[_0x49c00e(0x1b5)]&&processTerrainStateMachine(_0x3e6e85,_0x1ea247,_0x4fd964,_0xf520b,_0x831a7e,_0x28e1c9);if(_0x3b1cba)return;var _0x536c68=_0x3e6e85['renderable'];_0x3e6e85[_0x49c00e(0x1d4)]=a518_0x3d41d1(_0x453065[_0x49c00e(0x1ee)]);var _0x599f7e=_0x453065[_0x49c00e(0x1cf)]===a518_0x95924c[_0x49c00e(0x1cd)];_0x3e6e85[_0x49c00e(0x18c)]=a518_0x3d41d1(_0x453065[_0x49c00e(0x1da)])&&_0x453065[_0x49c00e(0x1da)][_0x49c00e(0x1f6)]();var _0x33e9c4=_0x453065[_0x49c00e(0x1e5)](_0x3e6e85,_0x4fd964,_0x1ea247);if(_0x599f7e&&_0x33e9c4){var _0x2ca2aa=_0x3e6e85['_loadedCallbacks'],_0x314eb0={};for(var _0x4fc088 in _0x2ca2aa){_0x2ca2aa[_0x49c00e(0x1b8)](_0x4fc088)&&(!_0x2ca2aa[_0x4fc088](_0x3e6e85)&&(_0x314eb0[_0x4fc088]=_0x2ca2aa[_0x4fc088]));}_0x3e6e85[_0x49c00e(0x1d0)]=_0x314eb0,_0x3e6e85['state']=a518_0x3e10c7[_0x49c00e(0x1f2)];}_0x536c68&&(_0x3e6e85[_0x49c00e(0x1d4)]=!![]);},GlobeSurfaceTile['prototype'][a518_0x437720(0x1e5)]=function(_0x25ebc2,_0x4bc110,_0x596159,_0x12d841){var _0x4753fc=a518_0x437720,_0x21f124=_0x25ebc2[_0x4753fc(0x19f)],_0x5d0445=_0x25ebc2[_0x4753fc(0x18c)],_0x319146=![],_0x484f18=!![],_0x11a90b=_0x21f124[_0x4753fc(0x1b1)],_0x270302,_0x483950;for(_0x270302=0x0,_0x483950=_0x11a90b['length'];_0x270302<_0x483950;++_0x270302){var _0x1d8839=_0x11a90b[_0x270302];if(!a518_0x3d41d1(_0x1d8839['loadingImagery'])){_0x5d0445=![];continue;}if(_0x1d8839[_0x4753fc(0x19b)][_0x4753fc(0x1db)]===a518_0x301388[_0x4753fc(0x1ae)]){var _0x393e69=_0x1d8839[_0x4753fc(0x19b)][_0x4753fc(0x1af)];if(_0x393e69['imageryProvider'][_0x4753fc(0x1aa)]){_0x1d8839[_0x4753fc(0x1d7)](),_0x11a90b[_0x4753fc(0x192)](_0x270302,0x1),_0x393e69[_0x4753fc(0x186)](_0x25ebc2,_0x4bc110,_0x270302),--_0x270302,_0x483950=_0x11a90b[_0x4753fc(0x1f4)];continue;}else _0x5d0445=![];}var _0xc67c7=_0x1d8839['processStateMachine'](_0x25ebc2,_0x596159,_0x12d841);_0x484f18=_0x484f18&&_0xc67c7,_0x319146=_0x319146||_0xc67c7||a518_0x3d41d1(_0x1d8839[_0x4753fc(0x1d5)]),_0x5d0445=_0x5d0445&&a518_0x3d41d1(_0x1d8839[_0x4753fc(0x19b)])&&(_0x1d8839[_0x4753fc(0x19b)]['state']===a518_0x301388[_0x4753fc(0x1b3)]||_0x1d8839[_0x4753fc(0x19b)][_0x4753fc(0x1db)]===a518_0x301388['INVALID']);}return _0x25ebc2[_0x4753fc(0x18c)]=_0x5d0445,_0x25ebc2[_0x4753fc(0x1d4)]=_0x25ebc2[_0x4753fc(0x1d4)]&&(_0x319146||_0x484f18),_0x484f18;};function a518_0x53e1(){var _0x52ffe2=['stride','tile_waterMaskData','waterMask','loadingImagery','vertices','_computeWaterMaskTranslationAndScale','5257048GTxfnL','data','pickBoundingSphere','boundingVolumeIsFromMesh','removeGeodeticSurfaceNormals','1467613HyMmki','canUpsample','_freeVertexArray','destroy','terrainExaggeration','936AmwWfw','LINEAR','ready','CANCELLED','createIndexBuffer','customData','PLACEHOLDER','imageryLayer','rectangle','imagery','fromSizeInBytes','FAILED','isDestroyed','LOADING','RECEIVED','TRANSFORMED','hasOwnProperty','defineProperties','request','_findAncestorTileWithTerrainData','addGeodeticSurfaceNormals','create','STATIC_DRAW','level','9myomwo','freeVertexArray','sampler','encoding','exaggeration','2440907zYRHUH','vertexArrayDestroyable','south','tilingScheme','.\x20Error\x20message:\x20\x22','490668KnDWIW','initialize','height','READY','requestTileGeometry','terrainState','_loadedCallbacks','getTileDataAvailable','Failed\x20to\x20obtain\x20terrain\x20tile\x20X:\x20','clippedByBoundaries','renderable','readyImagery','sqrt','freeResources','waterMaskTranslationAndScale','hasWaterMask','terrainData','state','push','TERRAIN','createVertexBuffer','surfaceShader','context','prototype','waterMaskTexture','rayTriangleParametric','getAttributes','processImagery','40UYHxIG','493594vRxVtG','TRANSFORMING','createMesh','show','handleError','UNLOADED','cache','vertexArray','TRANSITIONING','isClipped','fromElements','DONE','mesh','length','indexBuffers','wasCreatedByUpsampling','indexBuffer','indices','renderedMesh','clone','occludeePointInScaledSpace','updateExaggeration','40ZppIpk','wireframeVertexArray','42111PFcdDI','1410yqiBJx','_createVertexArrayForMesh','width','hasGeodeticSurfaceNormals','CLAMP_TO_EDGE','referenceCount','646063qFrlZe','processStateMachine','boundingVolumeSourceTile','project','parent','get','_createTileImagerySkeletons','_requestError','exaggerationRelativeHeight','RECEIVING','errorEvent','BYTES_PER_ELEMENT','upsampledFromParent','fill','west','tileBoundingRegion','MAX_VALUE','ellipsoid','splice','LUMINANCE','START','SCENE3D','allWaterTexture','terrainExaggerationRelativeHeight'];a518_0x53e1=function(){return _0x52ffe2;};return a518_0x53e1();}function toggleGeodeticSurfaceNormals(_0x5d8f35,_0x5b604c,_0x5c6d35,_0x218270){var _0x4eef28=a518_0x437720,_0x302278=_0x5d8f35[_0x4eef28(0x1f9)],_0x3f520e=_0x302278['vertices'],_0x487bbb=_0x302278[_0x4eef28(0x1c3)],_0x16ed0b=_0x3f520e[_0x4eef28(0x1f4)]/_0x487bbb[_0x4eef28(0x198)],_0xf4665d=a518_0x313dfa[_0x4eef28(0x1fa)](_0x487bbb);_0xf4665d[_0x4eef28(0x203)]=_0x5b604c,_0xf4665d=a518_0x313dfa[_0x4eef28(0x1fa)](_0xf4665d);var _0x181596=_0xf4665d['stride'],_0x22eca6=new Float32Array(_0x16ed0b*_0x181596);_0x5b604c?_0x487bbb[_0x4eef28(0x1bc)](_0x3f520e,_0x22eca6,_0x5c6d35):_0x487bbb[_0x4eef28(0x1a2)](_0x3f520e,_0x22eca6);_0x302278[_0x4eef28(0x19c)]=_0x22eca6,_0x302278[_0x4eef28(0x198)]=_0x181596;var _0xd7dbef=_0x302278!==_0x5d8f35[_0x4eef28(0x1f3)];_0xd7dbef?(GlobeSurfaceTile[_0x4eef28(0x1a5)](_0x5d8f35['fill'][_0x4eef28(0x1ee)]),_0x5d8f35[_0x4eef28(0x18d)][_0x4eef28(0x1ee)]=GlobeSurfaceTile[_0x4eef28(0x201)](_0x218270[_0x4eef28(0x1e0)],_0x302278)):(GlobeSurfaceTile['_freeVertexArray'](_0x5d8f35['vertexArray']),_0x5d8f35[_0x4eef28(0x1ee)]=GlobeSurfaceTile[_0x4eef28(0x201)](_0x218270[_0x4eef28(0x1e0)],_0x302278)),GlobeSurfaceTile[_0x4eef28(0x1a5)](_0x5d8f35[_0x4eef28(0x1fe)]),_0x5d8f35['wireframeVertexArray']=undefined;}GlobeSurfaceTile[a518_0x437720(0x1e1)][a518_0x437720(0x1bc)]=function(_0x3312a0,_0x4f468b){toggleGeodeticSurfaceNormals(this,!![],_0x3312a0,_0x4f468b);},GlobeSurfaceTile['prototype'][a518_0x437720(0x1a2)]=function(_0xd4f350){toggleGeodeticSurfaceNormals(this,![],undefined,_0xd4f350);},GlobeSurfaceTile[a518_0x437720(0x1e1)][a518_0x437720(0x1fc)]=function(_0x3c3882,_0x2af26c,_0x364feb){var _0x487926=a518_0x437720,_0x5ae109=this,_0x57f16d=_0x5ae109['renderedMesh'];if(_0x57f16d===undefined)return;var _0x2ba26f=_0x2af26c['terrainExaggeration'],_0x299ed2=_0x2af26c[_0x487926(0x197)],_0x2e8a39=_0x2ba26f!==0x1,_0x2f29e1=_0x57f16d['encoding'],_0x4a0a59=_0x2f29e1[_0x487926(0x1c4)]!==_0x2ba26f,_0x2d7e82=_0x2f29e1[_0x487926(0x188)]!==_0x299ed2;if(_0x4a0a59||_0x2d7e82){if(_0x4a0a59){if(_0x2e8a39&&!_0x2f29e1[_0x487926(0x203)]){var _0x4ee730=_0x3c3882[_0x487926(0x1c8)][_0x487926(0x191)];_0x5ae109['addGeodeticSurfaceNormals'](_0x4ee730,_0x2af26c);}else!_0x2e8a39&&_0x2f29e1[_0x487926(0x203)]&&_0x5ae109['removeGeodeticSurfaceNormals'](_0x2af26c);}_0x2f29e1[_0x487926(0x1c4)]=_0x2ba26f,_0x2f29e1[_0x487926(0x188)]=_0x299ed2;if(_0x364feb!==undefined){_0x364feb['_tileToUpdateHeights'][_0x487926(0x1dc)](_0x3c3882);var _0x4d23bf=_0x3c3882[_0x487926(0x1ad)],_0x60dc48=_0x4d23bf[_0x487926(0x1f4)];for(var _0x1768dd=0x0;_0x1768dd<_0x60dc48;_0x1768dd++){var _0x407baf=_0x4d23bf[_0x1768dd];_0x407baf['level']=-0x1;}}}};function prepareNewTile(_0x407214,_0x1fe58d,_0x215f2c){var _0xcc9763=a518_0x437720,_0x504495=_0x1fe58d[_0xcc9763(0x1d1)](_0x407214['x'],_0x407214['y'],_0x407214[_0xcc9763(0x1bf)]);if(!a518_0x3d41d1(_0x504495)&&a518_0x3d41d1(_0x407214[_0xcc9763(0x184)])){var _0x569982=_0x407214[_0xcc9763(0x184)],_0x26ef6b=_0x569982[_0xcc9763(0x19f)];a518_0x3d41d1(_0x26ef6b)&&a518_0x3d41d1(_0x26ef6b[_0xcc9763(0x1da)])&&(_0x504495=_0x26ef6b[_0xcc9763(0x1da)]['isChildAvailable'](_0x569982['x'],_0x569982['y'],_0x407214['x'],_0x407214['y']));}_0x504495===![]&&(_0x407214[_0xcc9763(0x19f)][_0xcc9763(0x1cf)]=a518_0x95924c[_0xcc9763(0x1b3)]);for(var _0x1ea263=0x0,_0x5bec4b=_0x215f2c[_0xcc9763(0x1f4)];_0x1ea263<_0x5bec4b;++_0x1ea263){var _0x1c6886=_0x215f2c[_0xcc9763(0x185)](_0x1ea263);_0x1c6886[_0xcc9763(0x1ea)]&&_0x1c6886[_0xcc9763(0x186)](_0x407214,_0x1fe58d);}}function processTerrainStateMachine(_0x3a174b,_0x5711f5,_0x2c6e15,_0xc85ffe,_0x27db07,_0x102e01){var _0x1dd149=a518_0x437720,_0x36e71e=_0x3a174b[_0x1dd149(0x19f)],_0xfa5914=_0x3a174b[_0x1dd149(0x184)];if(_0x36e71e[_0x1dd149(0x1cf)]===a518_0x95924c[_0x1dd149(0x1b3)]&&_0xfa5914!==undefined){var _0x92416d=_0xfa5914[_0x1dd149(0x19f)]!==undefined&&_0xfa5914[_0x1dd149(0x19f)][_0x1dd149(0x1da)]!==undefined&&_0xfa5914[_0x1dd149(0x19f)][_0x1dd149(0x1da)][_0x1dd149(0x1a4)]!==![];!_0x92416d&&GlobeSurfaceTile[_0x1dd149(0x181)](_0xfa5914,_0x5711f5,_0x2c6e15,_0xc85ffe,_0x27db07,_0x102e01,!![]);}_0x36e71e[_0x1dd149(0x1cf)]===a518_0x95924c['FAILED']&&upsample(_0x36e71e,_0x3a174b,_0x5711f5,_0x2c6e15,_0x3a174b['x'],_0x3a174b['y'],_0x3a174b[_0x1dd149(0x1bf)]);_0x36e71e['terrainState']===a518_0x95924c[_0x1dd149(0x1ec)]&&requestTileGeometry(_0x36e71e,_0x2c6e15,_0x3a174b['x'],_0x3a174b['y'],_0x3a174b[_0x1dd149(0x1bf)]);_0x36e71e[_0x1dd149(0x1cf)]===a518_0x95924c[_0x1dd149(0x1b6)]&&transform(_0x36e71e,_0x5711f5,_0x2c6e15,_0x3a174b['x'],_0x3a174b['y'],_0x3a174b[_0x1dd149(0x1bf)]);_0x36e71e['terrainState']===a518_0x95924c[_0x1dd149(0x1b7)]&&(createResources(_0x36e71e,_0x5711f5[_0x1dd149(0x1e0)],_0x2c6e15,_0x3a174b['x'],_0x3a174b['y'],_0x3a174b[_0x1dd149(0x1bf)],_0x102e01),_0x36e71e[_0x1dd149(0x1fc)](_0x3a174b,_0x5711f5,_0x27db07));if(_0x36e71e[_0x1dd149(0x1cf)]>=a518_0x95924c[_0x1dd149(0x1b6)]&&_0x36e71e[_0x1dd149(0x1e2)]===undefined&&_0x2c6e15[_0x1dd149(0x1d9)]){var _0x220793=_0x36e71e[_0x1dd149(0x1da)];if(_0x220793[_0x1dd149(0x19a)]!==undefined)createWaterMaskTextureIfNeeded(_0x5711f5['context'],_0x36e71e);else{var _0x17293d=_0x36e71e[_0x1dd149(0x1bb)](_0x3a174b);a518_0x3d41d1(_0x17293d)&&a518_0x3d41d1(_0x17293d['data'][_0x1dd149(0x1e2)])&&(_0x36e71e[_0x1dd149(0x1e2)]=_0x17293d[_0x1dd149(0x19f)][_0x1dd149(0x1e2)],++_0x36e71e[_0x1dd149(0x1e2)]['referenceCount'],_0x36e71e[_0x1dd149(0x19d)](_0x3a174b,_0x17293d,_0x36e71e[_0x1dd149(0x1d8)]));}}}function upsample(_0x1912ba,_0x4cb698,_0x2ebfce,_0x30f9d2,_0x28b1d2,_0x6963fe,_0x2d5bde){var _0x235df7=a518_0x437720,_0x3635a7=_0x4cb698[_0x235df7(0x184)];if(!_0x3635a7){_0x4cb698[_0x235df7(0x1db)]=a518_0x3e10c7[_0x235df7(0x1b3)];return;}var _0x51d033=_0x3635a7[_0x235df7(0x19f)][_0x235df7(0x1da)],_0x1f0a17=_0x3635a7['x'],_0x3e98e6=_0x3635a7['y'],_0x5d01fd=_0x3635a7[_0x235df7(0x1bf)];if(!a518_0x3d41d1(_0x51d033))return;var _0x56afcb=_0x51d033['upsample'](_0x30f9d2[_0x235df7(0x1c8)],_0x1f0a17,_0x3e98e6,_0x5d01fd,_0x28b1d2,_0x6963fe,_0x2d5bde);if(!a518_0x3d41d1(_0x56afcb))return;_0x1912ba['terrainState']=a518_0x95924c[_0x235df7(0x189)],a518_0x5094db(_0x56afcb,function(_0x70fb6e){var _0x5da2ce=_0x235df7;_0x1912ba[_0x5da2ce(0x1da)]=_0x70fb6e,_0x1912ba[_0x5da2ce(0x1cf)]=a518_0x95924c[_0x5da2ce(0x1b6)];},function(){var _0x120fe0=_0x235df7;_0x1912ba[_0x120fe0(0x1cf)]=a518_0x95924c[_0x120fe0(0x1b3)];});}function requestTileGeometry(_0x2e40f4,_0x5000e5,_0x49c758,_0x5963c1,_0xc25640){function _0x2572d1(_0x15fdb8){var _0x26126b=a518_0x2e4a;_0x2e40f4[_0x26126b(0x1da)]=_0x15fdb8,_0x2e40f4[_0x26126b(0x1cf)]=a518_0x95924c[_0x26126b(0x1b6)],_0x2e40f4[_0x26126b(0x1ba)]=undefined;}function _0x3029d5(_0x4085a0){var _0x20ac95=a518_0x2e4a;if(_0x2e40f4[_0x20ac95(0x1ba)][_0x20ac95(0x1db)]===a518_0x264efe[_0x20ac95(0x1ab)]){_0x2e40f4['terrainData']=undefined,_0x2e40f4['terrainState']=a518_0x95924c['UNLOADED'],_0x2e40f4[_0x20ac95(0x1ba)]=undefined;return;}_0x2e40f4['terrainState']=a518_0x95924c['FAILED'],_0x2e40f4[_0x20ac95(0x1ba)]=undefined;var _0x40d39a=_0x20ac95(0x1d2)+_0x49c758+'\x20Y:\x20'+_0x5963c1+'\x20Level:\x20'+_0xc25640+_0x20ac95(0x1c9)+_0x4085a0+'\x22';_0x5000e5[_0x20ac95(0x187)]=a518_0x5e9e25[_0x20ac95(0x1eb)](_0x5000e5[_0x20ac95(0x187)],_0x5000e5,_0x5000e5[_0x20ac95(0x18a)],_0x40d39a,_0x49c758,_0x5963c1,_0xc25640,_0x5b1e54);}function _0x5b1e54(){var _0x532913=a518_0x2e4a,_0x3c5ae9=new a518_0x147077({'throttle':![],'throttleByServer':!![],'type':a518_0x421619[_0x532913(0x1dd)]});_0x2e40f4[_0x532913(0x1ba)]=_0x3c5ae9;var _0x334119=_0x5000e5[_0x532913(0x1ce)](_0x49c758,_0x5963c1,_0xc25640,_0x3c5ae9);a518_0x3d41d1(_0x334119)?(_0x2e40f4['terrainState']=a518_0x95924c['RECEIVING'],a518_0x5094db(_0x334119,_0x2572d1,_0x3029d5)):(_0x2e40f4['terrainState']=a518_0x95924c[_0x532913(0x1ec)],_0x2e40f4['request']=undefined);}_0x5b1e54();}var scratchCreateMeshOptions={'tilingScheme':undefined,'x':0x0,'y':0x0,'level':0x0,'exaggeration':0x1,'exaggerationRelativeHeight':0x0,'throttle':!![]};function transform(_0x43b330,_0xda6a24,_0x497514,_0x14d8e8,_0x4af27b,_0x572014){var _0x25eb57=a518_0x437720,_0x62fa8a=_0x497514[_0x25eb57(0x1c8)],_0x2525ba=scratchCreateMeshOptions;_0x2525ba[_0x25eb57(0x1c8)]=_0x62fa8a,_0x2525ba['x']=_0x14d8e8,_0x2525ba['y']=_0x4af27b,_0x2525ba['level']=_0x572014,_0x2525ba[_0x25eb57(0x1c4)]=_0xda6a24[_0x25eb57(0x1a7)],_0x2525ba['exaggerationRelativeHeight']=_0xda6a24['terrainExaggerationRelativeHeight'],_0x2525ba['throttle']=!![];var _0x372503=_0x43b330[_0x25eb57(0x1da)],_0x1d2256=_0x372503[_0x25eb57(0x1e9)](_0x2525ba);if(!a518_0x3d41d1(_0x1d2256))return;_0x43b330[_0x25eb57(0x1cf)]=a518_0x95924c[_0x25eb57(0x1e8)],a518_0x5094db(_0x1d2256,function(_0x93e24){var _0x5a2a5b=_0x25eb57;_0x43b330[_0x5a2a5b(0x1f3)]=_0x93e24,_0x43b330['terrainState']=a518_0x95924c[_0x5a2a5b(0x1b7)];},function(){var _0x429ae5=_0x25eb57;_0x43b330[_0x429ae5(0x1cf)]=a518_0x95924c[_0x429ae5(0x1b3)];});}GlobeSurfaceTile[a518_0x437720(0x201)]=function(_0x26bc90,_0xcd760e){var _0x1aec7d=a518_0x437720,_0x59ecef=_0xcd760e[_0x1aec7d(0x19c)],_0x4f537d=a518_0x4059cb[_0x1aec7d(0x1de)]({'context':_0x26bc90,'typedArray':_0x59ecef,'usage':a518_0x2a69a9['STATIC_DRAW']}),_0x566e0f=_0xcd760e[_0x1aec7d(0x1c3)][_0x1aec7d(0x1e4)](_0x4f537d),_0x449015=_0xcd760e[_0x1aec7d(0x1f8)][_0x1aec7d(0x1f5)]||{},_0x216063=_0x449015[_0x26bc90['id']];if(!a518_0x3d41d1(_0x216063)||_0x216063['isDestroyed']()){var _0x4ab26e=_0xcd760e[_0x1aec7d(0x1f8)];_0x216063=a518_0x4059cb[_0x1aec7d(0x1ac)]({'context':_0x26bc90,'typedArray':_0x4ab26e,'usage':a518_0x2a69a9[_0x1aec7d(0x1be)],'indexDatatype':a518_0xc8b560[_0x1aec7d(0x1b2)](_0x4ab26e[_0x1aec7d(0x18b)])}),_0x216063[_0x1aec7d(0x1c6)]=![],_0x216063[_0x1aec7d(0x17f)]=0x1,_0x449015[_0x26bc90['id']]=_0x216063,_0xcd760e['indices'][_0x1aec7d(0x1f5)]=_0x449015;}else++_0x216063[_0x1aec7d(0x17f)];return new a518_0x15b166({'context':_0x26bc90,'attributes':_0x566e0f,'indexBuffer':_0x216063});},GlobeSurfaceTile[a518_0x437720(0x1a5)]=function(_0x115556){var _0x1c0622=a518_0x437720;if(a518_0x3d41d1(_0x115556)){var _0x310975=_0x115556[_0x1c0622(0x1f7)];!_0x115556[_0x1c0622(0x1b4)]()&&_0x115556[_0x1c0622(0x1a6)](),a518_0x3d41d1(_0x310975)&&!_0x310975[_0x1c0622(0x1b4)]()&&a518_0x3d41d1(_0x310975[_0x1c0622(0x17f)])&&(--_0x310975[_0x1c0622(0x17f)],_0x310975['referenceCount']===0x0&&_0x310975[_0x1c0622(0x1a6)]());}};function createResources(_0x4156a2,_0x3092b9,_0x1efa23,_0x1b2916,_0x198a11,_0x50666d,_0x40c117){var _0x1c1e72=a518_0x437720;_0x4156a2[_0x1c1e72(0x1ee)]=GlobeSurfaceTile['_createVertexArrayForMesh'](_0x3092b9,_0x4156a2[_0x1c1e72(0x1f3)]),_0x4156a2['terrainState']=a518_0x95924c[_0x1c1e72(0x1cd)],_0x4156a2[_0x1c1e72(0x18d)]=_0x4156a2[_0x1c1e72(0x18d)]&&_0x4156a2[_0x1c1e72(0x18d)][_0x1c1e72(0x1a6)](_0x40c117);}function getContextWaterMaskData(_0x5aef91){var _0x16d762=a518_0x437720,_0x435cda=_0x5aef91[_0x16d762(0x1ed)][_0x16d762(0x199)];if(!a518_0x3d41d1(_0x435cda)){var _0x1911cb=a518_0x4d283b[_0x16d762(0x1bd)]({'context':_0x5aef91,'pixelFormat':a518_0x392316[_0x16d762(0x193)],'pixelDatatype':a518_0xc1b522['UNSIGNED_BYTE'],'source':{'arrayBufferView':new Uint8Array([0xff]),'width':0x1,'height':0x1}});_0x1911cb[_0x16d762(0x17f)]=0x1;var _0x443019=new a518_0x3dac3e({'wrapS':a518_0x658318[_0x16d762(0x204)],'wrapT':a518_0x658318['CLAMP_TO_EDGE'],'minificationFilter':a518_0x43ee5b['LINEAR'],'magnificationFilter':a518_0x149061[_0x16d762(0x1a9)]});_0x435cda={'allWaterTexture':_0x1911cb,'sampler':_0x443019,'destroy':function(){var _0x1a425a=_0x16d762;this[_0x1a425a(0x196)][_0x1a425a(0x1a6)]();}},_0x5aef91['cache'][_0x16d762(0x199)]=_0x435cda;}return _0x435cda;}function createWaterMaskTextureIfNeeded(_0x405e09,_0x44b89d){var _0x5c631d=a518_0x437720,_0x440867=_0x44b89d[_0x5c631d(0x1da)]['waterMask'],_0x3e1354=getContextWaterMaskData(_0x405e09),_0x81b7ea,_0x3216c1=_0x440867['length'];if(_0x3216c1===0x1){if(_0x440867[0x0]!==0x0)_0x81b7ea=_0x3e1354['allWaterTexture'];else return;}else{var _0x38d645=Math[_0x5c631d(0x1d6)](_0x3216c1);_0x81b7ea=a518_0x4d283b[_0x5c631d(0x1bd)]({'context':_0x405e09,'pixelFormat':a518_0x392316[_0x5c631d(0x193)],'pixelDatatype':a518_0xc1b522['UNSIGNED_BYTE'],'source':{'width':_0x38d645,'height':_0x38d645,'arrayBufferView':_0x440867},'sampler':_0x3e1354[_0x5c631d(0x1c2)],'flipY':![]}),_0x81b7ea[_0x5c631d(0x17f)]=0x0;}++_0x81b7ea[_0x5c631d(0x17f)],_0x44b89d[_0x5c631d(0x1e2)]=_0x81b7ea,a518_0xfc10e8[_0x5c631d(0x1f1)](0x0,0x0,0x1,0x1,_0x44b89d[_0x5c631d(0x1d8)]);}GlobeSurfaceTile['prototype'][a518_0x437720(0x1bb)]=function(_0xb8c2ea){var _0x566db8=a518_0x437720,_0x1e4923=_0xb8c2ea['parent'];while(a518_0x3d41d1(_0x1e4923)&&(!a518_0x3d41d1(_0x1e4923[_0x566db8(0x19f)])||!a518_0x3d41d1(_0x1e4923[_0x566db8(0x19f)]['terrainData'])||_0x1e4923['data'][_0x566db8(0x1da)]['wasCreatedByUpsampling']())){_0x1e4923=_0x1e4923['parent'];}return _0x1e4923;},GlobeSurfaceTile[a518_0x437720(0x1e1)]['_computeWaterMaskTranslationAndScale']=function(_0x1dcd2d,_0x3ca00b,_0x519261){var _0x1029eb=a518_0x437720,_0x367877=_0x3ca00b[_0x1029eb(0x1b0)],_0x119fc7=_0x1dcd2d[_0x1029eb(0x1b0)],_0x2dcfa3=_0x119fc7['width'],_0x57c1ac=_0x119fc7[_0x1029eb(0x1cc)],_0x1603c8=_0x2dcfa3/_0x367877[_0x1029eb(0x202)],_0x163e39=_0x57c1ac/_0x367877[_0x1029eb(0x1cc)];return _0x519261['x']=_0x1603c8*(_0x119fc7[_0x1029eb(0x18e)]-_0x367877[_0x1029eb(0x18e)])/_0x2dcfa3,_0x519261['y']=_0x163e39*(_0x119fc7[_0x1029eb(0x1c7)]-_0x367877[_0x1029eb(0x1c7)])/_0x57c1ac,_0x519261['z']=_0x1603c8,_0x519261['w']=_0x163e39,_0x519261;};export default GlobeSurfaceTile;