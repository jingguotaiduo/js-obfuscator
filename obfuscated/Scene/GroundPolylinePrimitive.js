var a560_0x528bcc=a560_0x5655;(function(_0x24e55a,_0x299b65){var _0x56b8e5=a560_0x5655,_0x2b4793=_0x24e55a();while(!![]){try{var _0x5370c1=parseInt(_0x56b8e5(0xb9))/0x1+-parseInt(_0x56b8e5(0x12d))/0x2*(parseInt(_0x56b8e5(0x11a))/0x3)+-parseInt(_0x56b8e5(0x12b))/0x4*(parseInt(_0x56b8e5(0x116))/0x5)+parseInt(_0x56b8e5(0xf5))/0x6*(parseInt(_0x56b8e5(0xd3))/0x7)+parseInt(_0x56b8e5(0xec))/0x8*(-parseInt(_0x56b8e5(0x108))/0x9)+-parseInt(_0x56b8e5(0xde))/0xa*(-parseInt(_0x56b8e5(0x132))/0xb)+-parseInt(_0x56b8e5(0x113))/0xc*(-parseInt(_0x56b8e5(0xf1))/0xd);if(_0x5370c1===_0x299b65)break;else _0x2b4793['push'](_0x2b4793['shift']());}catch(_0x4cbd65){_0x2b4793['push'](_0x2b4793['shift']());}}}(a560_0xcc6e,0x71405));import a560_0x376c03 from'../Core/ApproximateTerrainHeights.js';import a560_0x5ab706 from'../Core/ComponentDatatype.js';import a560_0x109ea8 from'../Core/defaultValue.js';import a560_0x2b9aa5 from'../Core/defined.js';import a560_0x28c6a6 from'../Core/destroyObject.js';import a560_0x30a3e0 from'../Core/DeveloperError.js';import a560_0x6a594c from'../Core/GeometryInstance.js';import a560_0x3fc6b8 from'../Core/GeometryInstanceAttribute.js';import a560_0x3ed10d from'../Core/GroundPolylineGeometry.js';import a560_0x3663d3 from'../Renderer/DrawCommand.js';import a560_0x33d0a9 from'../Renderer/Pass.js';import a560_0x3a8fdb from'../Renderer/RenderState.js';import a560_0x5417ce from'../Renderer/ShaderProgram.js';import a560_0x5bdf89 from'../Renderer/ShaderSource.js';import a560_0x4a8d0f from'../Shaders/PolylineShadowVolumeFS.js';import a560_0x108b3a from'../Shaders/PolylineShadowVolumeMorphFS.js';import a560_0x140da0 from'../Shaders/PolylineShadowVolumeMorphVS.js';import a560_0x256e44 from'../Shaders/PolylineShadowVolumeVS.js';function a560_0xcc6e(){var _0x1d33e8=['MorphColor','ellipsoid','debugShowShadowVolume','tileset','_va','prototype','PER_INSTANCE_COLOR','2900328koErWU','color2D','appearance','BOTH','_spMorph','13snCfpG','must\x20call\x20update\x20before\x20calling\x20getGeometryInstanceAttributes','SCENE2D','defer','63738OxMWKD','promise','replaceCache','isDestroyed','geometry','All\x20GeometryInstances\x20must\x20have\x20color\x20attributes\x20to\x20use\x20PolylineColorAppearance\x20with\x20GroundPolylinePrimitive.','EMPTY_OBJECT','_renderState','commandList','CESIUM_3D_TILE','modelMatrix','PRE_MULTIPLIED_ALPHA_BLEND','initialized','releaseGeometryInstances','_scene3DOnly','shallowClone','mode','_defaultMaxTerrainHeight','concat','18tNsAqZ','For\x20synchronous\x20GroundPolylinePrimitives,\x20you\x20must\x20call\x20GroundPolylinePrimitives.initializeTerrainHeights()\x20and\x20wait\x20for\x20the\x20returned\x20promise\x20to\x20resolve.','setProjectionAndEllipsoid','_sp','_createShaderProgramFunction','allowPicking','czm_batchTable_pickColor(v_endPlaneNormalEcAndBatchId.w)','reject','TERRAIN_CLASSIFICATION','czm_batchTable_pickColor(v_batchId)','_debugShowShadowVolume','1711524PHLvTx','_sp2D','CESIUM_3D_TILE_CLASSIFICATION','15yZtDwm','geometryInstances','width','_renderStateMorph','275901orgxMM','isSupported','fromCache','readyPromise','asynchronous','show','_primitiveOptions','classificationType','pickId','minimumRadius','FRONT','update','boundingVolume','shaderProgram','debugShowBoundingVolume','COLUMBUS_VIEW','getVertexShaderCallback','162332nmqxEy','UNSIGNED_BYTE','20qmhLLF','_ready','colorMorph','length','scene3DOnly','605CzRwlc','attributes','defineProperties','mapProjection','_uniforms','620175oRBAgL','getGeometryInstanceAttributes','initialize','COLUMBUS_VIEW_2D','interleave','_modifyShaderPosition','shaderSource','_boundingSphereWC','_boundingSphereMorph','_renderState3DTiles','_appendDistanceDisplayConditionToShader','cull','destroy','pick','_primitive','vertexArray','getUniformMapCallback','2dColor','_batchTable','_appendShowToShader','derivedCommands','push','CESIUM_3D_TILE_MASK','renderState','SCENE3D','pass','539JjXtwE','toFixed','TERRAIN','_boundingSphereCV','search','render','_readyPromise','WIDTH_VARYING','createDerivedShaderProgram','_updateAndQueueCommandsFunction','_hasPerInstanceColors','118110WeliIB','KEEP','material','getDerivedShaderProgram','EQUAL','shaderCache','DEBUG_SHOW_VOLUME'];a560_0xcc6e=function(){return _0x1d33e8;};return a560_0xcc6e();}import a560_0x2e1e00 from'../ThirdParty/when.js';import a560_0x5a24d6 from'./BlendingState.js';function a560_0x5655(_0x4514a6,_0x5ca42e){var _0xcc6e64=a560_0xcc6e();return a560_0x5655=function(_0x565587,_0x19ff6a){_0x565587=_0x565587-0xb5;var _0x4dd8bd=_0xcc6e64[_0x565587];return _0x4dd8bd;},a560_0x5655(_0x4514a6,_0x5ca42e);}import a560_0x2a1989 from'./ClassificationType.js';import a560_0x302f29 from'./CullFace.js';import a560_0x57da9a from'./PolylineColorAppearance.js';import a560_0x2aaca1 from'./PolylineMaterialAppearance.js';import a560_0x242b4d from'./Primitive.js';import a560_0x129b64 from'./SceneMode.js';import a560_0x3fec05 from'./StencilConstants.js';import a560_0xabe274 from'./StencilFunction.js';import a560_0x295e28 from'./StencilOperation.js';function GroundPolylinePrimitive(_0x41d9f1){var _0x1a668c=a560_0x5655;_0x41d9f1=a560_0x109ea8(_0x41d9f1,a560_0x109ea8[_0x1a668c(0xfb)]),this[_0x1a668c(0x117)]=_0x41d9f1['geometryInstances'],this[_0x1a668c(0xdd)]=!![];var _0x3b5c4d=_0x41d9f1[_0x1a668c(0xee)];!a560_0x2b9aa5(_0x3b5c4d)&&(_0x3b5c4d=new a560_0x2aaca1()),this['appearance']=_0x3b5c4d,this[_0x1a668c(0x11f)]=a560_0x109ea8(_0x41d9f1['show'],!![]),this[_0x1a668c(0x121)]=a560_0x109ea8(_0x41d9f1[_0x1a668c(0x121)],a560_0x2a1989[_0x1a668c(0xef)]),this[_0x1a668c(0x128)]=a560_0x109ea8(_0x41d9f1[_0x1a668c(0x128)],![]),this['_debugShowShadowVolume']=a560_0x109ea8(_0x41d9f1[_0x1a668c(0xe7)],![]),this[_0x1a668c(0x120)]={'geometryInstances':undefined,'appearance':undefined,'vertexCacheOptimize':![],'interleave':a560_0x109ea8(_0x41d9f1[_0x1a668c(0xbd)],![]),'releaseGeometryInstances':a560_0x109ea8(_0x41d9f1[_0x1a668c(0x102)],!![]),'allowPicking':a560_0x109ea8(_0x41d9f1[_0x1a668c(0x10d)],!![]),'asynchronous':a560_0x109ea8(_0x41d9f1[_0x1a668c(0x11e)],!![]),'compressVertices':![],'_createShaderProgramFunction':undefined,'_createCommandsFunction':undefined,'_updateAndQueueCommandsFunction':undefined},this['_zIndex']=undefined,this['_ready']=![],this[_0x1a668c(0xd9)]=a560_0x2e1e00[_0x1a668c(0xf4)](),this[_0x1a668c(0xc7)]=undefined,this['_sp']=undefined,this['_sp2D']=undefined,this[_0x1a668c(0xf0)]=undefined,this[_0x1a668c(0xfc)]=getRenderState(![]),this[_0x1a668c(0xc2)]=getRenderState(!![]),this[_0x1a668c(0x119)]=a560_0x3a8fdb[_0x1a668c(0x11c)]({'cull':{'enabled':!![],'face':a560_0x302f29[_0x1a668c(0x124)]},'depthTest':{'enabled':!![]},'blending':a560_0x5a24d6[_0x1a668c(0x100)],'depthMask':![]});}Object[a560_0x528bcc(0xb6)](GroundPolylinePrimitive['prototype'],{'interleave':{'get':function(){var _0x1cd99a=a560_0x528bcc;return this[_0x1cd99a(0x120)][_0x1cd99a(0xbd)];}},'releaseGeometryInstances':{'get':function(){var _0x458556=a560_0x528bcc;return this[_0x458556(0x120)][_0x458556(0x102)];}},'allowPicking':{'get':function(){var _0x49721e=a560_0x528bcc;return this['_primitiveOptions'][_0x49721e(0x10d)];}},'asynchronous':{'get':function(){var _0x1dc862=a560_0x528bcc;return this[_0x1dc862(0x120)][_0x1dc862(0x11e)];}},'ready':{'get':function(){return this['_ready'];}},'readyPromise':{'get':function(){var _0x261acd=a560_0x528bcc;return this['_readyPromise'][_0x261acd(0xf6)];}},'debugShowShadowVolume':{'get':function(){var _0x575c2c=a560_0x528bcc;return this[_0x575c2c(0x112)];}}}),GroundPolylinePrimitive['initializeTerrainHeights']=function(){var _0x33d8c7=a560_0x528bcc;return a560_0x376c03[_0x33d8c7(0xbb)]();};function createShaderProgram(_0x83a42a,_0xb4387,_0x4881d3){var _0x2991ac=a560_0x528bcc,_0x53b272=_0xb4387['context'],_0x542e57=_0x83a42a['_primitive'],_0x5cb526=_0x542e57['_attributeLocations'],_0x3f0a45=_0x542e57[_0x2991ac(0xcb)][_0x2991ac(0x12a)]()(a560_0x256e44);_0x3f0a45=a560_0x242b4d[_0x2991ac(0xcc)](_0x542e57,_0x3f0a45),_0x3f0a45=a560_0x242b4d[_0x2991ac(0xc3)](_0x542e57,_0x3f0a45),_0x3f0a45=a560_0x242b4d[_0x2991ac(0xbe)](_0x83a42a,_0x3f0a45,_0xb4387[_0x2991ac(0x131)]);var _0x1529d2=_0x542e57[_0x2991ac(0xcb)][_0x2991ac(0x12a)]()(a560_0x140da0);_0x1529d2=a560_0x242b4d[_0x2991ac(0xcc)](_0x542e57,_0x1529d2),_0x1529d2=a560_0x242b4d[_0x2991ac(0xc3)](_0x542e57,_0x1529d2),_0x1529d2=a560_0x242b4d['_modifyShaderPosition'](_0x83a42a,_0x1529d2,_0xb4387[_0x2991ac(0x131)]);var _0x4e2972=_0x542e57[_0x2991ac(0xcb)][_0x2991ac(0x12a)]()(a560_0x4a8d0f),_0x32f099=['GLOBE_MINIMUM_ALTITUDE\x20'+_0xb4387[_0x2991ac(0xb7)][_0x2991ac(0xe6)][_0x2991ac(0x123)][_0x2991ac(0xd4)](0x1)],_0x4e904e='',_0x19b7ee='';a560_0x2b9aa5(_0x4881d3[_0x2991ac(0xe0)])?(_0x19b7ee=a560_0x2b9aa5(_0x4881d3[_0x2991ac(0xe0)])?_0x4881d3['material'][_0x2991ac(0xbf)]:'',_0x19b7ee[_0x2991ac(0xd7)](/varying\s+float\s+v_polylineAngle;/g)!==-0x1&&_0x32f099[_0x2991ac(0xce)]('ANGLE_VARYING'),_0x19b7ee[_0x2991ac(0xd7)](/varying\s+float\s+v_width;/g)!==-0x1&&_0x32f099['push'](_0x2991ac(0xda))):_0x4e904e=_0x2991ac(0xeb);_0x32f099[_0x2991ac(0xce)](_0x4e904e);var _0xd3a5e2=_0x83a42a[_0x2991ac(0xe7)]?[_0x2991ac(0xe4),_0x4e904e]:[_0x4e904e],_0x4ca282=new a560_0x5bdf89({'defines':_0x32f099,'sources':[_0x3f0a45]}),_0x2b59f0=new a560_0x5bdf89({'defines':_0xd3a5e2,'sources':[_0x19b7ee,_0x4e2972]});_0x83a42a[_0x2991ac(0x10b)]=a560_0x5417ce[_0x2991ac(0xf7)]({'context':_0x53b272,'shaderProgram':_0x542e57['_sp'],'vertexShaderSource':_0x4ca282,'fragmentShaderSource':_0x2b59f0,'attributeLocations':_0x5cb526});var _0x4f0bc3=_0x53b272[_0x2991ac(0xe3)][_0x2991ac(0xe1)](_0x83a42a[_0x2991ac(0x10b)],_0x2991ac(0xca));if(!a560_0x2b9aa5(_0x4f0bc3)){var _0x525f32=new a560_0x5bdf89({'defines':_0x32f099[_0x2991ac(0x107)]([_0x2991ac(0xbc)]),'sources':[_0x3f0a45]});_0x4f0bc3=_0x53b272[_0x2991ac(0xe3)]['createDerivedShaderProgram'](_0x83a42a[_0x2991ac(0x10b)],_0x2991ac(0xca),{'context':_0x53b272,'shaderProgram':_0x83a42a[_0x2991ac(0x114)],'vertexShaderSource':_0x525f32,'fragmentShaderSource':_0x2b59f0,'attributeLocations':_0x5cb526});}_0x83a42a[_0x2991ac(0x114)]=_0x4f0bc3;var _0x36137e=_0x53b272[_0x2991ac(0xe3)]['getDerivedShaderProgram'](_0x83a42a[_0x2991ac(0x10b)],'MorphColor');if(!a560_0x2b9aa5(_0x36137e)){var _0x3fddf7=new a560_0x5bdf89({'defines':_0x32f099[_0x2991ac(0x107)](['MAX_TERRAIN_HEIGHT\x20'+a560_0x376c03[_0x2991ac(0x106)][_0x2991ac(0xd4)](0x1)]),'sources':[_0x1529d2]});_0x4e2972=_0x542e57[_0x2991ac(0xcb)][_0x2991ac(0x12a)]()(a560_0x108b3a);var _0x3a368d=new a560_0x5bdf89({'defines':_0xd3a5e2,'sources':[_0x19b7ee,_0x4e2972]});_0x36137e=_0x53b272[_0x2991ac(0xe3)][_0x2991ac(0xdb)](_0x83a42a[_0x2991ac(0x10b)],_0x2991ac(0xe5),{'context':_0x53b272,'shaderProgram':_0x83a42a[_0x2991ac(0xf0)],'vertexShaderSource':_0x3fddf7,'fragmentShaderSource':_0x3a368d,'attributeLocations':_0x5cb526});}_0x83a42a['_spMorph']=_0x36137e;}function getRenderState(_0x5c0083){var _0x178c20=a560_0x528bcc;return a560_0x3a8fdb[_0x178c20(0x11c)]({'cull':{'enabled':!![]},'blending':a560_0x5a24d6[_0x178c20(0x100)],'depthMask':![],'stencilTest':{'enabled':_0x5c0083,'frontFunction':a560_0xabe274[_0x178c20(0xe2)],'frontOperation':{'fail':a560_0x295e28[_0x178c20(0xdf)],'zFail':a560_0x295e28[_0x178c20(0xdf)],'zPass':a560_0x295e28[_0x178c20(0xdf)]},'backFunction':a560_0xabe274[_0x178c20(0xe2)],'backOperation':{'fail':a560_0x295e28[_0x178c20(0xdf)],'zFail':a560_0x295e28[_0x178c20(0xdf)],'zPass':a560_0x295e28[_0x178c20(0xdf)]},'reference':a560_0x3fec05[_0x178c20(0xcf)],'mask':a560_0x3fec05[_0x178c20(0xcf)]}});}function createCommands(_0x5826d2,_0xe9bfe1,_0x4705c7,_0x37da13,_0x4d6622,_0x1a4ea5){var _0x40a4dc=a560_0x528bcc,_0x11911a=_0x5826d2[_0x40a4dc(0xc7)],_0xbdaf25=_0x11911a['_va'][_0x40a4dc(0x130)];_0x4d6622[_0x40a4dc(0x130)]=_0xbdaf25,_0x1a4ea5['length']=_0xbdaf25;var _0xbdf4bd=_0xe9bfe1 instanceof a560_0x57da9a,_0x2e4207=_0xbdf4bd?{}:_0x4705c7[_0x40a4dc(0xb8)],_0x56fc19=_0x11911a[_0x40a4dc(0xcb)][_0x40a4dc(0xc9)]()(_0x2e4207);for(var _0xdeff2b=0x0;_0xdeff2b<_0xbdaf25;_0xdeff2b++){var _0x2e0b3c=_0x11911a[_0x40a4dc(0xe9)][_0xdeff2b],_0x4f9fb0=_0x4d6622[_0xdeff2b];!a560_0x2b9aa5(_0x4f9fb0)&&(_0x4f9fb0=_0x4d6622[_0xdeff2b]=new a560_0x3663d3({'owner':_0x5826d2,'primitiveType':_0x11911a['_primitiveType']}));_0x4f9fb0[_0x40a4dc(0xc8)]=_0x2e0b3c,_0x4f9fb0[_0x40a4dc(0xd0)]=_0x5826d2['_renderState'],_0x4f9fb0[_0x40a4dc(0x127)]=_0x5826d2[_0x40a4dc(0x10b)],_0x4f9fb0['uniformMap']=_0x56fc19,_0x4f9fb0[_0x40a4dc(0xd2)]=a560_0x33d0a9[_0x40a4dc(0x110)],_0x4f9fb0[_0x40a4dc(0x122)]=_0x40a4dc(0x10e);var _0x44af80=a560_0x3663d3[_0x40a4dc(0x104)](_0x4f9fb0,_0x4f9fb0['derivedCommands'][_0x40a4dc(0xe8)]);_0x44af80[_0x40a4dc(0xd0)]=_0x5826d2['_renderState3DTiles'],_0x44af80[_0x40a4dc(0xd2)]=a560_0x33d0a9[_0x40a4dc(0x115)],_0x4f9fb0[_0x40a4dc(0xcd)][_0x40a4dc(0xe8)]=_0x44af80;var _0x209e00=a560_0x3663d3[_0x40a4dc(0x104)](_0x4f9fb0,_0x4f9fb0[_0x40a4dc(0xcd)][_0x40a4dc(0xed)]);_0x209e00[_0x40a4dc(0x127)]=_0x5826d2[_0x40a4dc(0x114)],_0x4f9fb0[_0x40a4dc(0xcd)][_0x40a4dc(0xed)]=_0x209e00;var _0x5e644a=a560_0x3663d3[_0x40a4dc(0x104)](_0x44af80,_0x44af80[_0x40a4dc(0xcd)][_0x40a4dc(0xed)]);_0x5e644a[_0x40a4dc(0x127)]=_0x5826d2[_0x40a4dc(0x114)],_0x44af80[_0x40a4dc(0xcd)][_0x40a4dc(0xed)]=_0x5e644a;var _0x4be28e=a560_0x3663d3[_0x40a4dc(0x104)](_0x4f9fb0,_0x4f9fb0[_0x40a4dc(0xcd)][_0x40a4dc(0x12f)]);_0x4be28e[_0x40a4dc(0xd0)]=_0x5826d2[_0x40a4dc(0x119)],_0x4be28e['shaderProgram']=_0x5826d2['_spMorph'],_0x4be28e[_0x40a4dc(0x122)]=_0x40a4dc(0x111),_0x4f9fb0[_0x40a4dc(0xcd)]['colorMorph']=_0x4be28e;}}function updateAndQueueCommand(_0x14d42d,_0x2b0c34,_0x5cdbe1,_0xe3684b,_0xf0916e,_0x7761fc,_0x370060){var _0x35d86a=a560_0x528bcc;if(_0x5cdbe1[_0x35d86a(0x105)]===a560_0x129b64['MORPHING'])_0x2b0c34=_0x2b0c34[_0x35d86a(0xcd)][_0x35d86a(0x12f)];else _0x5cdbe1[_0x35d86a(0x105)]!==a560_0x129b64[_0x35d86a(0xd1)]&&(_0x2b0c34=_0x2b0c34[_0x35d86a(0xcd)]['color2D']);_0x2b0c34[_0x35d86a(0xff)]=_0xe3684b,_0x2b0c34[_0x35d86a(0x126)]=_0x7761fc,_0x2b0c34[_0x35d86a(0xc4)]=_0xf0916e,_0x2b0c34['debugShowBoundingVolume']=_0x370060,_0x5cdbe1[_0x35d86a(0xfd)][_0x35d86a(0xce)](_0x2b0c34);}function updateAndQueueCommands(_0x218851,_0x22cf3b,_0x36b8f9,_0x3cab88,_0x3c8027,_0x9c7e59,_0x1139b6){var _0x5002f9=a560_0x528bcc,_0x4299f5=_0x218851[_0x5002f9(0xc7)];a560_0x242b4d['_updateBoundingVolumes'](_0x4299f5,_0x22cf3b,_0x3c8027);var _0x83045e;if(_0x22cf3b[_0x5002f9(0x105)]===a560_0x129b64[_0x5002f9(0xd1)])_0x83045e=_0x4299f5[_0x5002f9(0xc0)];else{if(_0x22cf3b[_0x5002f9(0x105)]===a560_0x129b64[_0x5002f9(0x129)])_0x83045e=_0x4299f5[_0x5002f9(0xd6)];else{if(_0x22cf3b[_0x5002f9(0x105)]===a560_0x129b64[_0x5002f9(0xf3)]&&a560_0x2b9aa5(_0x4299f5['_boundingSphere2D']))_0x83045e=_0x4299f5['_boundingSphere2D'];else a560_0x2b9aa5(_0x4299f5[_0x5002f9(0xc1)])&&(_0x83045e=_0x4299f5[_0x5002f9(0xc1)]);}}var _0x9cda6b=_0x22cf3b['mode']===a560_0x129b64['MORPHING'],_0x269820=_0x218851[_0x5002f9(0x121)],_0x19702f=_0x269820!==a560_0x2a1989[_0x5002f9(0xfe)],_0x3d4938=_0x269820!==a560_0x2a1989[_0x5002f9(0xd5)]&&!_0x9cda6b,_0x2e20c5,_0x150d89=_0x22cf3b['passes'];if(_0x150d89[_0x5002f9(0xd8)]||_0x150d89[_0x5002f9(0xc6)]&&_0x4299f5[_0x5002f9(0x10d)]){var _0x1118df=_0x36b8f9[_0x5002f9(0x130)];for(var _0x247681=0x0;_0x247681<_0x1118df;++_0x247681){var _0xe76be6=_0x83045e[_0x247681];_0x19702f&&(_0x2e20c5=_0x36b8f9[_0x247681],updateAndQueueCommand(_0x218851,_0x2e20c5,_0x22cf3b,_0x3c8027,_0x9c7e59,_0xe76be6,_0x1139b6)),_0x3d4938&&(_0x2e20c5=_0x36b8f9[_0x247681]['derivedCommands']['tileset'],updateAndQueueCommand(_0x218851,_0x2e20c5,_0x22cf3b,_0x3c8027,_0x9c7e59,_0xe76be6,_0x1139b6));}}}GroundPolylinePrimitive[a560_0x528bcc(0xea)][a560_0x528bcc(0x125)]=function(_0x4eec9a){var _0x2f0715=a560_0x528bcc;if(!a560_0x2b9aa5(this[_0x2f0715(0xc7)])&&!a560_0x2b9aa5(this[_0x2f0715(0x117)]))return;if(!a560_0x376c03[_0x2f0715(0x101)]){if(!this[_0x2f0715(0x11e)])throw new a560_0x30a3e0(_0x2f0715(0x109));GroundPolylinePrimitive['initializeTerrainHeights']();return;}var _0x44ba0b,_0x4a4f0a=this,_0x5a7762=this[_0x2f0715(0x120)];if(!a560_0x2b9aa5(this[_0x2f0715(0xc7)])){var _0xa4468f=Array['isArray'](this[_0x2f0715(0x117)])?this[_0x2f0715(0x117)]:[this[_0x2f0715(0x117)]],_0x5245ee=_0xa4468f[_0x2f0715(0x130)],_0x530284=new Array(_0x5245ee),_0x2886fe;for(_0x44ba0b=0x0;_0x44ba0b<_0x5245ee;++_0x44ba0b){_0x2886fe=_0xa4468f[_0x44ba0b][_0x2f0715(0xb5)];if(!a560_0x2b9aa5(_0x2886fe)||!a560_0x2b9aa5(_0x2886fe['color'])){this[_0x2f0715(0xdd)]=![];break;}}for(_0x44ba0b=0x0;_0x44ba0b<_0x5245ee;++_0x44ba0b){var _0x41779d=_0xa4468f[_0x44ba0b];_0x2886fe={};var _0x3b4a90=_0x41779d['attributes'];for(var _0x522117 in _0x3b4a90){_0x3b4a90['hasOwnProperty'](_0x522117)&&(_0x2886fe[_0x522117]=_0x3b4a90[_0x522117]);}!a560_0x2b9aa5(_0x2886fe[_0x2f0715(0x118)])&&(_0x2886fe[_0x2f0715(0x118)]=new a560_0x3fc6b8({'componentDatatype':a560_0x5ab706[_0x2f0715(0x12c)],'componentsPerAttribute':0x1,'value':[_0x41779d[_0x2f0715(0xf9)][_0x2f0715(0x118)]]})),_0x41779d[_0x2f0715(0xf9)][_0x2f0715(0x103)]=_0x4eec9a[_0x2f0715(0x131)],a560_0x3ed10d[_0x2f0715(0x10a)](_0x41779d['geometry'],_0x4eec9a['mapProjection']),_0x530284[_0x44ba0b]=new a560_0x6a594c({'geometry':_0x41779d['geometry'],'attributes':_0x2886fe,'id':_0x41779d['id'],'pickPrimitive':_0x4a4f0a});}_0x5a7762[_0x2f0715(0x117)]=_0x530284,_0x5a7762[_0x2f0715(0xee)]=this[_0x2f0715(0xee)],_0x5a7762[_0x2f0715(0x10c)]=function(_0x2c7f39,_0x2736ed,_0x217340){createShaderProgram(_0x4a4f0a,_0x2736ed,_0x217340);},_0x5a7762['_createCommandsFunction']=function(_0x3a1eb8,_0x94878b,_0x13d3fe,_0x2a73b8,_0x4af3af,_0x49bc68,_0x312c3f){createCommands(_0x4a4f0a,_0x94878b,_0x13d3fe,_0x2a73b8,_0x49bc68,_0x312c3f);},_0x5a7762[_0x2f0715(0xdc)]=function(_0x105d7a,_0x41e906,_0x5e0c54,_0x2bfb2d,_0x505c19,_0x5df9a3,_0x378150,_0x54e45d){updateAndQueueCommands(_0x4a4f0a,_0x41e906,_0x5e0c54,_0x2bfb2d,_0x505c19,_0x5df9a3,_0x378150);},this['_primitive']=new a560_0x242b4d(_0x5a7762),this[_0x2f0715(0xc7)][_0x2f0715(0x11d)]['then'](function(_0x9cb9f3){var _0x1c6d16=_0x2f0715;_0x4a4f0a[_0x1c6d16(0x12e)]=!![];_0x4a4f0a[_0x1c6d16(0x102)]&&(_0x4a4f0a[_0x1c6d16(0x117)]=undefined);var _0xe098df=_0x9cb9f3['_error'];!a560_0x2b9aa5(_0xe098df)?_0x4a4f0a[_0x1c6d16(0xd9)]['resolve'](_0x4a4f0a):_0x4a4f0a[_0x1c6d16(0xd9)][_0x1c6d16(0x10f)](_0xe098df);});}if(this[_0x2f0715(0xee)]instanceof a560_0x57da9a&&!this['_hasPerInstanceColors'])throw new a560_0x30a3e0(_0x2f0715(0xfa));this[_0x2f0715(0xc7)][_0x2f0715(0xee)]=this[_0x2f0715(0xee)],this[_0x2f0715(0xc7)][_0x2f0715(0x11f)]=this[_0x2f0715(0x11f)],this[_0x2f0715(0xc7)][_0x2f0715(0x128)]=this['debugShowBoundingVolume'],this[_0x2f0715(0xc7)][_0x2f0715(0x125)](_0x4eec9a);},GroundPolylinePrimitive[a560_0x528bcc(0xea)][a560_0x528bcc(0xba)]=function(_0x14821c){var _0x42ef5b=a560_0x528bcc;if(!a560_0x2b9aa5(this['_primitive']))throw new a560_0x30a3e0(_0x42ef5b(0xf2));return this[_0x42ef5b(0xc7)]['getGeometryInstanceAttributes'](_0x14821c);},GroundPolylinePrimitive[a560_0x528bcc(0x11b)]=function(_0x12778d){return _0x12778d['frameState']['context']['depthTexture'];},GroundPolylinePrimitive['prototype'][a560_0x528bcc(0xf8)]=function(){return![];},GroundPolylinePrimitive['prototype'][a560_0x528bcc(0xc5)]=function(){var _0x28e150=a560_0x528bcc;return this['_primitive']=this[_0x28e150(0xc7)]&&this['_primitive'][_0x28e150(0xc5)](),this[_0x28e150(0x10b)]=this[_0x28e150(0x10b)]&&this['_sp'][_0x28e150(0xc5)](),this[_0x28e150(0x114)]=undefined,this['_spMorph']=undefined,a560_0x28c6a6(this);};export default GroundPolylinePrimitive;