var a769_0x404c=a769_0xc690;(function(_0xb1cb01,_0x19c038){var _0x49b200=a769_0xc690,_0x2ee1db=_0xb1cb01();while(!![]){try{var _0x39bc55=parseInt(_0x49b200(0x1ab))/0x1*(parseInt(_0x49b200(0x138))/0x2)+-parseInt(_0x49b200(0x133))/0x3*(-parseInt(_0x49b200(0x165))/0x4)+parseInt(_0x49b200(0x12a))/0x5*(parseInt(_0x49b200(0x145))/0x6)+parseInt(_0x49b200(0x16c))/0x7+parseInt(_0x49b200(0x13c))/0x8+parseInt(_0x49b200(0x190))/0x9*(-parseInt(_0x49b200(0x132))/0xa)+-parseInt(_0x49b200(0x189))/0xb*(parseInt(_0x49b200(0x13e))/0xc);if(_0x39bc55===_0x19c038)break;else _0x2ee1db['push'](_0x2ee1db['shift']());}catch(_0x533d15){_0x2ee1db['push'](_0x2ee1db['shift']());}}}(a769_0x1883,0x9a295));import a769_0x5ca5d2 from'../Core/Cartesian3.js';import a769_0x5ecc9b from'../Core/Color.js';import a769_0x360447 from'../Core/ComponentDatatype.js';import a769_0x5cf083 from'../Core/defaultValue.js';import a769_0xd728e8 from'../Core/defined.js';import a769_0x102ce0 from'../Core/destroyObject.js';import a769_0xe91fb4 from'../Core/IndexDatatype.js';import a769_0x66de3f from'../Core/Matrix4.js';import a769_0x5bdafd from'../Core/PrimitiveType.js';import a769_0x24da9b from'../Renderer/Buffer.js';import a769_0x4d9cb7 from'../Renderer/BufferUsage.js';import a769_0x8540c7 from'../Renderer/DrawCommand.js';import a769_0xd4e7f5 from'../Renderer/Pass.js';import a769_0x254b7f from'../Renderer/RenderState.js';import a769_0x4f2ef2 from'../Renderer/ShaderProgram.js';import a769_0x28738c from'../Renderer/ShaderSource.js';import a769_0x3242a4 from'../Renderer/VertexArray.js';import a769_0x1ca267 from'../Shaders/ShadowVolumeFS.js';import a769_0x58b7c2 from'../Shaders/VectorTileVS.js';import a769_0x1a1fee from'./BlendingState.js';import a769_0x162b39 from'./Cesium3DTileFeature.js';import a769_0x1ae8dd from'./ClassificationType.js';import a769_0x3f5c5b from'./DepthFunction.js';import a769_0x348545 from'./Expression.js';import a769_0x56afee from'./StencilConstants.js';import a769_0x905eb4 from'./StencilFunction.js';import a769_0x5b4842 from'./StencilOperation.js';import a769_0xf5d4ce from'./Vector3DTileBatch.js';function Vector3DTilePrimitive(_0x15d8fb){var _0x34bc6d=a769_0xc690;_0x15d8fb=a769_0x5cf083(_0x15d8fb,a769_0x5cf083[_0x34bc6d(0x191)]),this['_batchTable']=_0x15d8fb['batchTable'],this[_0x34bc6d(0x19d)]=_0x15d8fb[_0x34bc6d(0x13d)],this[_0x34bc6d(0x15f)]=_0x15d8fb[_0x34bc6d(0x1a1)],this[_0x34bc6d(0x183)]=_0x15d8fb['vertexBatchIds'],this[_0x34bc6d(0x123)]=_0x15d8fb[_0x34bc6d(0x1bf)],this[_0x34bc6d(0x177)]=_0x15d8fb[_0x34bc6d(0x1a8)],this[_0x34bc6d(0x13f)]=_0x15d8fb[_0x34bc6d(0x1a7)],this[_0x34bc6d(0x12c)]=_0x15d8fb[_0x34bc6d(0x1a0)],this[_0x34bc6d(0x16b)]=_0x15d8fb[_0x34bc6d(0x169)],this[_0x34bc6d(0x14d)]=_0x15d8fb[_0x34bc6d(0x187)],this[_0x34bc6d(0x180)]=a769_0x5cf083(_0x15d8fb[_0x34bc6d(0x163)],a769_0x5ca5d2['ZERO']),this[_0x34bc6d(0x188)]=undefined,this[_0x34bc6d(0x1b4)]=undefined,this['_spStencil']=undefined,this[_0x34bc6d(0x161)]=undefined,this[_0x34bc6d(0x14e)]=undefined,this[_0x34bc6d(0x14c)]=undefined,this[_0x34bc6d(0x14a)]=undefined,this[_0x34bc6d(0x137)]=undefined,this[_0x34bc6d(0x173)]=undefined,this[_0x34bc6d(0x147)]=undefined,this['_rsWireframe']=undefined,this['_commands']=[],this[_0x34bc6d(0x1a3)]=[],this[_0x34bc6d(0x143)]=[],this[_0x34bc6d(0x1b7)]=a769_0x5ecc9b[_0x34bc6d(0x1be)](a769_0x5ecc9b['WHITE']),this['_highlightColor']=this[_0x34bc6d(0x1b7)],this[_0x34bc6d(0x185)]=!![],this[_0x34bc6d(0x1b3)]=!![],this['_framesSinceLastRebatch']=0x0,this['_updatingAllCommands']=![],this[_0x34bc6d(0x164)]=this[_0x34bc6d(0x123)][_0x34bc6d(0x196)]/0x3,this[_0x34bc6d(0x174)]=this[_0x34bc6d(0x123)][_0x34bc6d(0x1c3)]+this[_0x34bc6d(0x15f)]['byteLength']+this['_vertexBatchIds'][_0x34bc6d(0x1c3)],this[_0x34bc6d(0x1b0)]=![],this['_debugWireframe']=this[_0x34bc6d(0x1b0)],this[_0x34bc6d(0x1c0)]=![],this[_0x34bc6d(0x170)]=![],this[_0x34bc6d(0x16f)]=a769_0x5cf083(_0x15d8fb[_0x34bc6d(0x16f)],a769_0x1ae8dd['BOTH']),this[_0x34bc6d(0x186)]=_0x15d8fb['_vertexShaderSource'],this[_0x34bc6d(0x1a4)]=_0x15d8fb[_0x34bc6d(0x1a4)],this[_0x34bc6d(0x17e)]=_0x15d8fb[_0x34bc6d(0x17e)],this[_0x34bc6d(0x14e)]=_0x15d8fb[_0x34bc6d(0x14e)],this['_pickId']=_0x15d8fb['_pickId'],this[_0x34bc6d(0x1aa)]=_0x15d8fb[_0x34bc6d(0x1aa)],this[_0x34bc6d(0x142)]=_0x15d8fb['_boundingSphere'],this[_0x34bc6d(0x158)]={};var _0x243913=this[_0x34bc6d(0x19d)]['length'];for(var _0x5374b8=0x0;_0x5374b8<_0x243913;++_0x5374b8){var _0x1c7f2e=this[_0x34bc6d(0x19d)][_0x5374b8];this[_0x34bc6d(0x158)][_0x1c7f2e]=_0x5374b8;}}Object[a769_0x404c(0x182)](Vector3DTilePrimitive[a769_0x404c(0x1b1)],{'trianglesLength':{'get':function(){var _0x167047=a769_0x404c;return this[_0x167047(0x164)];}},'geometryByteLength':{'get':function(){var _0x1021d2=a769_0x404c;return this[_0x1021d2(0x174)];}}});var defaultAttributeLocations={'position':0x0,'a_batchId':0x1};function createVertexArray(_0x1b50a6,_0x31d0ad){var _0x5922cd=a769_0x404c;if(a769_0xd728e8(_0x1b50a6[_0x5922cd(0x188)]))return;var _0x52f1b7=a769_0x24da9b[_0x5922cd(0x166)]({'context':_0x31d0ad,'typedArray':_0x1b50a6['_positions'],'usage':a769_0x4d9cb7[_0x5922cd(0x148)]}),_0x42c3f4=a769_0x24da9b[_0x5922cd(0x166)]({'context':_0x31d0ad,'typedArray':_0x1b50a6[_0x5922cd(0x183)],'usage':a769_0x4d9cb7[_0x5922cd(0x148)]}),_0x425034=a769_0x24da9b[_0x5922cd(0x12f)]({'context':_0x31d0ad,'typedArray':_0x1b50a6[_0x5922cd(0x123)],'usage':a769_0x4d9cb7[_0x5922cd(0x1c1)],'indexDatatype':_0x1b50a6['_indices'][_0x5922cd(0x15e)]===0x2?a769_0xe91fb4['UNSIGNED_SHORT']:a769_0xe91fb4[_0x5922cd(0x159)]}),_0x1c5aa2=[{'index':0x0,'vertexBuffer':_0x52f1b7,'componentDatatype':a769_0x360447[_0x5922cd(0x128)](_0x1b50a6[_0x5922cd(0x15f)]),'componentsPerAttribute':0x3},{'index':0x1,'vertexBuffer':_0x42c3f4,'componentDatatype':a769_0x360447[_0x5922cd(0x128)](_0x1b50a6[_0x5922cd(0x183)]),'componentsPerAttribute':0x1}];_0x1b50a6[_0x5922cd(0x188)]=new a769_0x3242a4({'context':_0x31d0ad,'attributes':_0x1c5aa2,'indexBuffer':_0x425034}),_0x31d0ad[_0x5922cd(0x198)]&&(_0x1b50a6[_0x5922cd(0x14c)]=new a769_0x3242a4({'context':_0x31d0ad,'attributes':_0x1c5aa2,'indexBuffer':a769_0x24da9b[_0x5922cd(0x12f)]({'context':_0x31d0ad,'sizeInBytes':_0x425034[_0x5922cd(0x17d)],'usage':a769_0x4d9cb7['DYNAMIC_DRAW'],'indexDatatype':_0x425034[_0x5922cd(0x1c2)]})})),_0x1b50a6[_0x5922cd(0x162)]=undefined,_0x1b50a6[_0x5922cd(0x19b)]=undefined,_0x1b50a6[_0x5922cd(0x183)]=undefined,_0x1b50a6['_verticesPromise']=undefined;}function createShaders(_0x1e097a,_0x20c728){var _0x352b65=a769_0x404c;if(a769_0xd728e8(_0x1e097a['_sp']))return;var _0x1d318a=_0x1e097a[_0x352b65(0x193)],_0x211f5d=a769_0x5cf083(_0x1e097a[_0x352b65(0x17e)],defaultAttributeLocations),_0x4ba056=_0x1e097a['_pickId'],_0x5ba43e=_0x1e097a['_vertexShaderSource'],_0x44d5a0=_0x1e097a[_0x352b65(0x1a4)];if(a769_0xd728e8(_0x5ba43e)){_0x1e097a[_0x352b65(0x1b4)]=a769_0x4f2ef2[_0x352b65(0x135)]({'context':_0x20c728,'vertexShaderSource':_0x5ba43e,'fragmentShaderSource':_0x44d5a0,'attributeLocations':_0x211f5d}),_0x1e097a[_0x352b65(0x16d)]=_0x1e097a[_0x352b65(0x1b4)],_0x44d5a0=a769_0x28738c[_0x352b65(0x157)](_0x44d5a0,'czm_non_pick_main'),_0x44d5a0=_0x44d5a0+_0x352b65(0x12d)+_0x352b65(0x1b5)+_0x352b65(0x179)+_0x352b65(0x17f)+_0x4ba056+_0x352b65(0x17a)+'}\x20\x0a',_0x1e097a[_0x352b65(0x161)]=a769_0x4f2ef2[_0x352b65(0x135)]({'context':_0x20c728,'vertexShaderSource':_0x5ba43e,'fragmentShaderSource':_0x44d5a0,'attributeLocations':_0x211f5d});return;}var _0x396957=_0x1d318a[_0x352b65(0x14b)](![],_0x352b65(0x18b),undefined)(a769_0x58b7c2),_0x29a9ee=_0x1d318a[_0x352b65(0x136)](![],undefined,!![])(a769_0x1ca267);_0x4ba056=_0x1d318a[_0x352b65(0x18e)]();var _0x5add4a=new a769_0x28738c({'sources':[_0x396957]}),_0x278cdd=new a769_0x28738c({'defines':['VECTOR_TILE'],'sources':[_0x29a9ee]});_0x1e097a[_0x352b65(0x1b4)]=a769_0x4f2ef2[_0x352b65(0x135)]({'context':_0x20c728,'vertexShaderSource':_0x5add4a,'fragmentShaderSource':_0x278cdd,'attributeLocations':_0x211f5d}),_0x5add4a=new a769_0x28738c({'sources':[a769_0x58b7c2]}),_0x278cdd=new a769_0x28738c({'defines':[_0x352b65(0x154)],'sources':[a769_0x1ca267]}),_0x1e097a[_0x352b65(0x16d)]=a769_0x4f2ef2['fromCache']({'context':_0x20c728,'vertexShaderSource':_0x5add4a,'fragmentShaderSource':_0x278cdd,'attributeLocations':_0x211f5d}),_0x29a9ee=a769_0x28738c[_0x352b65(0x157)](_0x29a9ee,_0x352b65(0x1bd)),_0x29a9ee=_0x29a9ee+'\x0a'+_0x352b65(0x12d)+_0x352b65(0x1b5)+_0x352b65(0x179)+_0x352b65(0x17f)+_0x4ba056+';\x20\x0a'+_0x352b65(0x1b6);var _0x1269cf=new a769_0x28738c({'sources':[_0x396957]}),_0x4230fe=new a769_0x28738c({'defines':[_0x352b65(0x154)],'sources':[_0x29a9ee]});_0x1e097a[_0x352b65(0x161)]=a769_0x4f2ef2[_0x352b65(0x135)]({'context':_0x20c728,'vertexShaderSource':_0x1269cf,'fragmentShaderSource':_0x4230fe,'attributeLocations':_0x211f5d});}function getStencilDepthRenderState(_0xa173b4){var _0x3d8131=a769_0x404c,_0x5453be=_0xa173b4?a769_0x905eb4[_0x3d8131(0x153)]:a769_0x905eb4['ALWAYS'];return{'colorMask':{'red':![],'green':![],'blue':![],'alpha':![]},'stencilTest':{'enabled':!![],'frontFunction':_0x5453be,'frontOperation':{'fail':a769_0x5b4842[_0x3d8131(0x152)],'zFail':a769_0x5b4842[_0x3d8131(0x129)],'zPass':a769_0x5b4842[_0x3d8131(0x152)]},'backFunction':_0x5453be,'backOperation':{'fail':a769_0x5b4842[_0x3d8131(0x152)],'zFail':a769_0x5b4842[_0x3d8131(0x194)],'zPass':a769_0x5b4842[_0x3d8131(0x152)]},'reference':a769_0x56afee[_0x3d8131(0x16a)],'mask':a769_0x56afee[_0x3d8131(0x16a)]},'stencilMask':a769_0x56afee[_0x3d8131(0x1b2)],'depthTest':{'enabled':!![],'func':a769_0x3f5c5b['LESS_OR_EQUAL']},'depthMask':![]};}var colorRenderState={'stencilTest':{'enabled':!![],'frontFunction':a769_0x905eb4['NOT_EQUAL'],'frontOperation':{'fail':a769_0x5b4842[a769_0x404c(0x19a)],'zFail':a769_0x5b4842[a769_0x404c(0x19a)],'zPass':a769_0x5b4842[a769_0x404c(0x19a)]},'backFunction':a769_0x905eb4[a769_0x404c(0x17b)],'backOperation':{'fail':a769_0x5b4842[a769_0x404c(0x19a)],'zFail':a769_0x5b4842['ZERO'],'zPass':a769_0x5b4842['ZERO']},'reference':0x0,'mask':a769_0x56afee[a769_0x404c(0x1b2)]},'stencilMask':a769_0x56afee[a769_0x404c(0x1b2)],'depthTest':{'enabled':![]},'depthMask':![],'blending':a769_0x1a1fee[a769_0x404c(0x1a9)]},pickRenderState={'stencilTest':{'enabled':!![],'frontFunction':a769_0x905eb4[a769_0x404c(0x17b)],'frontOperation':{'fail':a769_0x5b4842[a769_0x404c(0x19a)],'zFail':a769_0x5b4842['ZERO'],'zPass':a769_0x5b4842['ZERO']},'backFunction':a769_0x905eb4[a769_0x404c(0x17b)],'backOperation':{'fail':a769_0x5b4842[a769_0x404c(0x19a)],'zFail':a769_0x5b4842['ZERO'],'zPass':a769_0x5b4842['ZERO']},'reference':0x0,'mask':a769_0x56afee[a769_0x404c(0x1b2)]},'stencilMask':a769_0x56afee[a769_0x404c(0x1b2)],'depthTest':{'enabled':![]},'depthMask':![]};function createRenderStates(_0x11095d){var _0xf5664=a769_0x404c;if(a769_0xd728e8(_0x11095d['_rsStencilDepthPass']))return;_0x11095d[_0xf5664(0x14a)]=a769_0x254b7f[_0xf5664(0x135)](getStencilDepthRenderState(![])),_0x11095d[_0xf5664(0x137)]=a769_0x254b7f[_0xf5664(0x135)](getStencilDepthRenderState(!![])),_0x11095d[_0xf5664(0x173)]=a769_0x254b7f['fromCache'](colorRenderState),_0x11095d[_0xf5664(0x147)]=a769_0x254b7f[_0xf5664(0x135)](pickRenderState);}var modifiedModelViewScratch=new a769_0x66de3f(),rtcScratch=new a769_0x5ca5d2();function createUniformMap(_0x3e6b3f,_0x3bea3d){var _0x357f4c=a769_0x404c;if(a769_0xd728e8(_0x3e6b3f['_uniformMap']))return;var _0x1c4930={'u_modifiedModelViewProjection':function(){var _0x583f52=a769_0xc690,_0xca8e8c=_0x3bea3d[_0x583f52(0x144)][_0x583f52(0x15c)],_0x319c80=_0x3bea3d[_0x583f52(0x144)][_0x583f52(0x18d)];return a769_0x66de3f[_0x583f52(0x1be)](_0xca8e8c,modifiedModelViewScratch),a769_0x66de3f[_0x583f52(0x1b8)](modifiedModelViewScratch,_0x3e6b3f[_0x583f52(0x180)],rtcScratch),a769_0x66de3f['setTranslation'](modifiedModelViewScratch,rtcScratch,modifiedModelViewScratch),a769_0x66de3f[_0x583f52(0x1ae)](_0x319c80,modifiedModelViewScratch,modifiedModelViewScratch),modifiedModelViewScratch;},'u_highlightColor':function(){var _0x98cd6c=a769_0xc690;return _0x3e6b3f[_0x98cd6c(0x12b)];}};_0x3e6b3f[_0x357f4c(0x14e)]=_0x3e6b3f[_0x357f4c(0x193)][_0x357f4c(0x178)]()(_0x1c4930);}function copyIndicesCPU(_0x8c57a3,_0x186385,_0x8489e2,_0x5d6639,_0x4103d8,_0x56d08c,_0x1e52ae){var _0x32ce75=a769_0x404c,_0x1bf037=_0x8c57a3[_0x32ce75(0x18c)]['BYTES_PER_ELEMENT'],_0x20458b=_0x56d08c[_0x32ce75(0x196)];for(var _0x4fc43d=0x0;_0x4fc43d<_0x20458b;++_0x4fc43d){var _0x5d4b18=_0x56d08c[_0x4fc43d],_0x3e74ea=_0x1e52ae[_0x5d4b18],_0x2ba8ab=_0x5d6639[_0x3e74ea],_0x3da3aa=_0x4103d8[_0x3e74ea],_0x984e01=new _0x8c57a3[(_0x32ce75(0x18c))](_0x8c57a3[_0x32ce75(0x15d)],_0x1bf037*_0x2ba8ab,_0x3da3aa);_0x186385[_0x32ce75(0x176)](_0x984e01,_0x8489e2),_0x5d6639[_0x3e74ea]=_0x8489e2,_0x8489e2+=_0x3da3aa;}return _0x8489e2;}function rebatchCPU(_0x25251b,_0x49c74f){var _0x177b2a=a769_0x404c,_0x4b4201=_0x25251b['_indices'],_0x308782=_0x25251b['_indexOffsets'],_0x24aba3=_0x25251b['_indexCounts'],_0x48b508=_0x25251b['_batchIdLookUp'],_0x4dd9d2=new _0x4b4201[(_0x177b2a(0x18c))](_0x4b4201[_0x177b2a(0x196)]),_0x3cf756=_0x49c74f[_0x177b2a(0x181)](),_0x4b3f1c=[_0x3cf756],_0x523574=copyIndicesCPU(_0x4b4201,_0x4dd9d2,0x0,_0x308782,_0x24aba3,_0x3cf756[_0x177b2a(0x13d)],_0x48b508);_0x3cf756['offset']=0x0,_0x3cf756['count']=_0x523574;while(_0x49c74f[_0x177b2a(0x196)]>0x0){var _0x26626f=_0x49c74f[_0x177b2a(0x181)]();if(a769_0x5ecc9b[_0x177b2a(0x1ac)](_0x26626f['color'],_0x3cf756[_0x177b2a(0x15b)]))_0x523574=copyIndicesCPU(_0x4b4201,_0x4dd9d2,_0x523574,_0x308782,_0x24aba3,_0x26626f[_0x177b2a(0x13d)],_0x48b508),_0x3cf756[_0x177b2a(0x13d)]=_0x3cf756['batchIds'][_0x177b2a(0x197)](_0x26626f[_0x177b2a(0x13d)]),_0x3cf756[_0x177b2a(0x149)]=_0x523574-_0x3cf756[_0x177b2a(0x127)];else{var _0x231ce6=_0x523574;_0x523574=copyIndicesCPU(_0x4b4201,_0x4dd9d2,_0x523574,_0x308782,_0x24aba3,_0x26626f[_0x177b2a(0x13d)],_0x48b508),_0x26626f['offset']=_0x231ce6,_0x26626f[_0x177b2a(0x149)]=_0x523574-_0x231ce6,_0x4b3f1c['push'](_0x26626f),_0x3cf756=_0x26626f;}}_0x25251b['_va'][_0x177b2a(0x172)][_0x177b2a(0x150)](_0x4dd9d2),_0x25251b[_0x177b2a(0x123)]=_0x4dd9d2,_0x25251b[_0x177b2a(0x12c)]=_0x4b3f1c;}function a769_0x1883(){var _0x4fac00=['getVertexShaderCallback','_vaSwap','_boundingVolumes','_uniformMap','modelMatrix','copyFromArrayView','vertexArray','KEEP','EQUAL','VECTOR_TILE','shallowClone','renderState','replaceMain','_batchIdLookUp','UNSIGNED_INT','OPAQUE','color','view','buffer','BYTES_PER_ELEMENT','_positions','TERRAIN_CLASSIFICATION','_spPick','_batchedPositions','center','_trianglesLength','28484wcsBBh','createVertexBuffer','_commands','toRgba','boundingVolume','CESIUM_3D_TILE_MASK','_boundingVolume','5918535IcHimC','_spStencil','CESIUM_3D_TILE_CLASSIFICATION_IGNORE_SHOW','classificationType','forceRebatch','TERRAIN','indexBuffer','_rsColorPass','_geometryByteLength','test','set','_indexCounts','getUniformMapCallback','\x20\x20\x20\x20czm_non_pick_main();\x20\x0a',';\x20\x0a','NOT_EQUAL','_rsWireframe','sizeInBytes','_attributeLocations','\x20\x20\x20\x20gl_FragColor\x20=\x20','_center','pop','defineProperties','_vertexBatchIds','invertClassification','_batchDirty','_vertexShaderSource','boundingVolumes','_va','5991183HrthMK','_commandsDirty','a_batchId','constructor','projection','getPickId','destroy','20259GeXIig','EMPTY_OBJECT','pass','_batchTable','INCREMENT_WRAP','WHITE','length','concat','webgl2','applyStyle','ZERO','_transferrableBatchIds','push','_batchIds','TRIANGLES','primitiveType','batchedIndices','positions','CESIUM_3D_TILE','_commandsIgnoreShow','_fragmentShaderSource','_framesSinceLastRebatch','CESIUM_3D_TILE_CLASSIFICATION','indexOffsets','indexCounts','PRE_MULTIPLIED_ALPHA_BLEND','_modelMatrix','2laBKcs','equals','expression','multiply','applyDebugSettings','debugWireframe','prototype','CLASSIFICATION_MASK','_pickCommandsDirty','_sp','{\x20\x0a','}\x20\x0a','_constantColor','multiplyByPoint','pick','derivedCommands','uniformMap','update','czm_non_pick_main','clone','indices','_wireframeDirty','DYNAMIC_DRAW','indexDatatype','byteLength','_indices','evaluate','shaderProgram','show','offset','fromTypedArray','DECREMENT_WRAP','35TSxRco','_highlightColor','_batchedIndices','void\x20main()\x20\x0a','context','createIndexBuffer','IDENTITY','_updatingAllCommands','4030KVKJWy','519minrRj','_debugWireframe','fromCache','getFragmentShaderCallback','_rsStencilDepthPass3DTiles','757398WTZqRI','evaluateColor','bytesPerIndex','passes','1124304HCCKlC','batchIds','36unuuWt','_indexOffsets','commandList','render','_boundingSphere','_pickCommands','uniformState','169014dZSBUV','tileset','_rsPickPass','STATIC_DRAW','count','_rsStencilDepthPass'];a769_0x1883=function(){return _0x4fac00;};return a769_0x1883();}function copyIndicesGPU(_0x13e751,_0x570792,_0x36ccf5,_0x562e29,_0x2a621a,_0x3bf8b7,_0xb038ff){var _0x3d3878=a769_0x404c,_0x2af1c6=_0x13e751[_0x3d3878(0x13a)],_0x45bc4d=_0x3bf8b7[_0x3d3878(0x196)];for(var _0x16ef5f=0x0;_0x16ef5f<_0x45bc4d;++_0x16ef5f){var _0x12ea58=_0x3bf8b7[_0x16ef5f],_0x930305=_0xb038ff[_0x12ea58],_0x130360=_0x562e29[_0x930305],_0x3cb53d=_0x2a621a[_0x930305];_0x570792['copyFromBuffer'](_0x13e751,_0x130360*_0x2af1c6,_0x36ccf5*_0x2af1c6,_0x3cb53d*_0x2af1c6),_0x562e29[_0x930305]=_0x36ccf5,_0x36ccf5+=_0x3cb53d;}return _0x36ccf5;}function rebatchGPU(_0x3709f2,_0x20ab76){var _0xfeb7af=a769_0x404c,_0x47ed0b=_0x3709f2[_0xfeb7af(0x13f)],_0x2a06de=_0x3709f2['_indexCounts'],_0x335ce5=_0x3709f2['_batchIdLookUp'],_0x138734=_0x20ab76['pop'](),_0x5550e9=[_0x138734],_0x12a25e=_0x3709f2[_0xfeb7af(0x188)][_0xfeb7af(0x172)],_0x3342e9=_0x3709f2[_0xfeb7af(0x14c)][_0xfeb7af(0x172)],_0x225372=copyIndicesGPU(_0x12a25e,_0x3342e9,0x0,_0x47ed0b,_0x2a06de,_0x138734['batchIds'],_0x335ce5);_0x138734[_0xfeb7af(0x127)]=0x0,_0x138734[_0xfeb7af(0x149)]=_0x225372;while(_0x20ab76['length']>0x0){var _0x103d26=_0x20ab76[_0xfeb7af(0x181)]();if(a769_0x5ecc9b[_0xfeb7af(0x1ac)](_0x103d26[_0xfeb7af(0x15b)],_0x138734[_0xfeb7af(0x15b)]))_0x225372=copyIndicesGPU(_0x12a25e,_0x3342e9,_0x225372,_0x47ed0b,_0x2a06de,_0x103d26['batchIds'],_0x335ce5),_0x138734['batchIds']=_0x138734['batchIds'][_0xfeb7af(0x197)](_0x103d26[_0xfeb7af(0x13d)]),_0x138734[_0xfeb7af(0x149)]=_0x225372-_0x138734[_0xfeb7af(0x127)];else{var _0xf09441=_0x225372;_0x225372=copyIndicesGPU(_0x12a25e,_0x3342e9,_0x225372,_0x47ed0b,_0x2a06de,_0x103d26[_0xfeb7af(0x13d)],_0x335ce5),_0x103d26['offset']=_0xf09441,_0x103d26['count']=_0x225372-_0xf09441,_0x5550e9[_0xfeb7af(0x19c)](_0x103d26),_0x138734=_0x103d26;}}var _0x48c672=_0x3709f2['_va'];_0x3709f2['_va']=_0x3709f2['_vaSwap'],_0x3709f2[_0xfeb7af(0x14c)]=_0x48c672,_0x3709f2['_batchedIndices']=_0x5550e9;}function compareColors(_0x3039e4,_0xc1531f){var _0x51e999=a769_0x404c;return _0xc1531f[_0x51e999(0x15b)][_0x51e999(0x168)]()-_0x3039e4[_0x51e999(0x15b)][_0x51e999(0x168)]();}function rebatchCommands(_0x23b2e9,_0x3b1247){var _0x1ba6d0=a769_0x404c;if(!_0x23b2e9[_0x1ba6d0(0x185)])return![];var _0xe39bdc=_0x23b2e9[_0x1ba6d0(0x12c)],_0x3e3620=_0xe39bdc[_0x1ba6d0(0x196)],_0x266708=![],_0x17d17e={};for(var _0x2fdb1f=0x0;_0x2fdb1f<_0x3e3620;++_0x2fdb1f){var _0xcfb47d=_0xe39bdc[_0x2fdb1f][_0x1ba6d0(0x15b)],_0x746404=_0xcfb47d['toRgba']();if(a769_0xd728e8(_0x17d17e[_0x746404])){_0x266708=!![];break;}else _0x17d17e[_0x746404]=!![];}if(!_0x266708)return _0x23b2e9[_0x1ba6d0(0x185)]=![],![];if(_0x266708&&!_0x23b2e9[_0x1ba6d0(0x170)]&&_0x23b2e9[_0x1ba6d0(0x1a5)]<0x78){++_0x23b2e9[_0x1ba6d0(0x1a5)];return;}return _0xe39bdc['sort'](compareColors),_0x3b1247[_0x1ba6d0(0x198)]?rebatchGPU(_0x23b2e9,_0xe39bdc):rebatchCPU(_0x23b2e9,_0xe39bdc),_0x23b2e9[_0x1ba6d0(0x1a5)]=0x0,_0x23b2e9[_0x1ba6d0(0x185)]=![],_0x23b2e9[_0x1ba6d0(0x1b3)]=!![],_0x23b2e9[_0x1ba6d0(0x1c0)]=!![],!![];}function createColorCommands(_0x14676d,_0x1fc515){var _0x546605=a769_0x404c,_0x583c0f=rebatchCommands(_0x14676d,_0x1fc515),_0x46983=_0x14676d[_0x546605(0x167)],_0x244bdf=_0x14676d['_batchedIndices'],_0x4414f2=_0x244bdf['length'],_0x42336d=_0x4414f2*0x2;if(a769_0xd728e8(_0x46983)&&!_0x583c0f&&_0x46983[_0x546605(0x196)]===_0x42336d)return;_0x46983[_0x546605(0x196)]=_0x42336d;var _0x31b71a=_0x14676d[_0x546605(0x188)],_0x8574bd=_0x14676d[_0x546605(0x1b4)],_0x39cc92=a769_0x5cf083(_0x14676d[_0x546605(0x1aa)],a769_0x66de3f['IDENTITY']),_0x57ccf0=_0x14676d['_uniformMap'],_0x1e0985=_0x14676d[_0x546605(0x16b)];for(var _0x44e877=0x0;_0x44e877<_0x4414f2;++_0x44e877){var _0x2350f1=_0x244bdf[_0x44e877]['offset'],_0x2b6a30=_0x244bdf[_0x44e877][_0x546605(0x149)],_0x3d687c=_0x46983[_0x44e877*0x2];!a769_0xd728e8(_0x3d687c)&&(_0x3d687c=_0x46983[_0x44e877*0x2]=new a769_0x8540c7({'owner':_0x14676d}));_0x3d687c[_0x546605(0x151)]=_0x31b71a,_0x3d687c[_0x546605(0x14f)]=_0x39cc92,_0x3d687c[_0x546605(0x127)]=_0x2350f1,_0x3d687c[_0x546605(0x149)]=_0x2b6a30,_0x3d687c[_0x546605(0x156)]=_0x14676d[_0x546605(0x14a)],_0x3d687c[_0x546605(0x125)]=_0x8574bd,_0x3d687c['uniformMap']=_0x57ccf0,_0x3d687c[_0x546605(0x169)]=_0x1e0985,_0x3d687c['cull']=![],_0x3d687c[_0x546605(0x192)]=a769_0xd4e7f5[_0x546605(0x160)];var _0x54bb9c=a769_0x8540c7['shallowClone'](_0x3d687c,_0x3d687c[_0x546605(0x1ba)][_0x546605(0x146)]);_0x54bb9c[_0x546605(0x156)]=_0x14676d[_0x546605(0x137)],_0x54bb9c[_0x546605(0x192)]=a769_0xd4e7f5[_0x546605(0x1a6)],_0x3d687c['derivedCommands']['tileset']=_0x54bb9c;var _0x4992ca=_0x46983[_0x44e877*0x2+0x1];!a769_0xd728e8(_0x4992ca)&&(_0x4992ca=_0x46983[_0x44e877*0x2+0x1]=new a769_0x8540c7({'owner':_0x14676d}));_0x4992ca[_0x546605(0x151)]=_0x31b71a,_0x4992ca['modelMatrix']=_0x39cc92,_0x4992ca['offset']=_0x2350f1,_0x4992ca[_0x546605(0x149)]=_0x2b6a30,_0x4992ca[_0x546605(0x156)]=_0x14676d['_rsColorPass'],_0x4992ca[_0x546605(0x125)]=_0x8574bd,_0x4992ca[_0x546605(0x1bb)]=_0x57ccf0,_0x4992ca[_0x546605(0x169)]=_0x1e0985,_0x4992ca['cull']=![],_0x4992ca[_0x546605(0x192)]=a769_0xd4e7f5[_0x546605(0x160)];var _0xb7cbbd=a769_0x8540c7['shallowClone'](_0x4992ca,_0x4992ca[_0x546605(0x1ba)]['tileset']);_0xb7cbbd[_0x546605(0x192)]=a769_0xd4e7f5[_0x546605(0x1a6)],_0x4992ca[_0x546605(0x1ba)][_0x546605(0x146)]=_0xb7cbbd;}_0x14676d[_0x546605(0x18a)]=!![];}function createColorCommandsIgnoreShow(_0x5c915a,_0x1cfb83){var _0x42d8a7=a769_0x404c;if(_0x5c915a[_0x42d8a7(0x16f)]===a769_0x1ae8dd['TERRAIN']||!_0x1cfb83[_0x42d8a7(0x184)]||a769_0xd728e8(_0x5c915a[_0x42d8a7(0x1a3)])&&!_0x5c915a[_0x42d8a7(0x18a)])return;var _0x345f18=_0x5c915a['_commands'],_0x5b17d2=_0x5c915a[_0x42d8a7(0x1a3)],_0x5f1744=_0x5c915a[_0x42d8a7(0x16d)],_0x5bce0e=_0x345f18[_0x42d8a7(0x196)],_0x1afde3=_0x5b17d2[_0x42d8a7(0x196)]=_0x5bce0e/0x2,_0x398ec8=0x0;for(var _0x2da974=0x0;_0x2da974<_0x1afde3;++_0x2da974){var _0x5f44ed=_0x5b17d2[_0x2da974]=a769_0x8540c7[_0x42d8a7(0x155)](_0x345f18[_0x398ec8],_0x5b17d2[_0x2da974]);_0x5f44ed['shaderProgram']=_0x5f1744,_0x5f44ed['pass']=a769_0xd4e7f5[_0x42d8a7(0x16e)],_0x398ec8+=0x2;}_0x5c915a['_commandsDirty']=![];}function createPickCommands(_0x57fe22){var _0x232d63=a769_0x404c;if(!_0x57fe22[_0x232d63(0x1b3)])return;var _0x478df4=_0x57fe22[_0x232d63(0x13f)][_0x232d63(0x196)],_0x14f5b5=_0x57fe22['_pickCommands'];_0x14f5b5[_0x232d63(0x196)]=_0x478df4*0x2;var _0xe29dad=_0x57fe22['_va'],_0x595e0b=_0x57fe22['_spStencil'],_0x4e3ef5=_0x57fe22['_spPick'],_0x381d05=a769_0x5cf083(_0x57fe22[_0x232d63(0x1aa)],a769_0x66de3f[_0x232d63(0x130)]),_0x47ee85=_0x57fe22[_0x232d63(0x14e)];for(var _0x3169ca=0x0;_0x3169ca<_0x478df4;++_0x3169ca){var _0x1ec145=_0x57fe22[_0x232d63(0x13f)][_0x3169ca],_0x5b4c33=_0x57fe22[_0x232d63(0x177)][_0x3169ca],_0x9586aa=a769_0xd728e8(_0x57fe22[_0x232d63(0x14d)])?_0x57fe22[_0x232d63(0x14d)][_0x3169ca]:_0x57fe22[_0x232d63(0x169)],_0x27da8f=_0x14f5b5[_0x3169ca*0x2];!a769_0xd728e8(_0x27da8f)&&(_0x27da8f=_0x14f5b5[_0x3169ca*0x2]=new a769_0x8540c7({'owner':_0x57fe22,'pickOnly':!![]}));_0x27da8f['vertexArray']=_0xe29dad,_0x27da8f[_0x232d63(0x14f)]=_0x381d05,_0x27da8f[_0x232d63(0x127)]=_0x1ec145,_0x27da8f[_0x232d63(0x149)]=_0x5b4c33,_0x27da8f['renderState']=_0x57fe22[_0x232d63(0x14a)],_0x27da8f['shaderProgram']=_0x595e0b,_0x27da8f[_0x232d63(0x1bb)]=_0x47ee85,_0x27da8f['boundingVolume']=_0x9586aa,_0x27da8f[_0x232d63(0x192)]=a769_0xd4e7f5[_0x232d63(0x160)];var _0x14faa0=a769_0x8540c7[_0x232d63(0x155)](_0x27da8f,_0x27da8f[_0x232d63(0x1ba)][_0x232d63(0x146)]);_0x14faa0[_0x232d63(0x156)]=_0x57fe22[_0x232d63(0x137)],_0x14faa0[_0x232d63(0x192)]=a769_0xd4e7f5['CESIUM_3D_TILE_CLASSIFICATION'],_0x27da8f['derivedCommands']['tileset']=_0x14faa0;var _0x2f6252=_0x14f5b5[_0x3169ca*0x2+0x1];!a769_0xd728e8(_0x2f6252)&&(_0x2f6252=_0x14f5b5[_0x3169ca*0x2+0x1]=new a769_0x8540c7({'owner':_0x57fe22,'pickOnly':!![]}));_0x2f6252[_0x232d63(0x151)]=_0xe29dad,_0x2f6252[_0x232d63(0x14f)]=_0x381d05,_0x2f6252[_0x232d63(0x127)]=_0x1ec145,_0x2f6252[_0x232d63(0x149)]=_0x5b4c33,_0x2f6252['renderState']=_0x57fe22[_0x232d63(0x147)],_0x2f6252[_0x232d63(0x125)]=_0x4e3ef5,_0x2f6252[_0x232d63(0x1bb)]=_0x47ee85,_0x2f6252['boundingVolume']=_0x9586aa,_0x2f6252[_0x232d63(0x192)]=a769_0xd4e7f5[_0x232d63(0x160)];var _0x104482=a769_0x8540c7['shallowClone'](_0x2f6252,_0x2f6252[_0x232d63(0x1ba)][_0x232d63(0x146)]);_0x104482[_0x232d63(0x192)]=a769_0xd4e7f5[_0x232d63(0x1a6)],_0x2f6252[_0x232d63(0x1ba)]['tileset']=_0x104482;}_0x57fe22[_0x232d63(0x1b3)]=![];}Vector3DTilePrimitive[a769_0x404c(0x1b1)]['createFeatures']=function(_0x3f4d38,_0x3b09aa){var _0x33086e=a769_0x404c,_0x1c1386=this[_0x33086e(0x19d)],_0x4dee43=_0x1c1386[_0x33086e(0x196)];for(var _0x1c7276=0x0;_0x1c7276<_0x4dee43;++_0x1c7276){var _0x1b8224=_0x1c1386[_0x1c7276];_0x3b09aa[_0x1b8224]=new a769_0x162b39(_0x3f4d38,_0x1b8224);}},Vector3DTilePrimitive[a769_0x404c(0x1b1)][a769_0x404c(0x1af)]=function(_0x49126f,_0x15adc5){var _0x470c23=a769_0x404c;this[_0x470c23(0x12b)]=_0x49126f?_0x15adc5:this[_0x470c23(0x1b7)];};function clearStyle(_0x4ac468,_0x1833d0){var _0x21e7c3=a769_0x404c;_0x4ac468[_0x21e7c3(0x131)]=!![];var _0x4fe9ce=_0x4ac468[_0x21e7c3(0x19d)],_0x5b7593=_0x4fe9ce[_0x21e7c3(0x196)],_0x406a9c;for(_0x406a9c=0x0;_0x406a9c<_0x5b7593;++_0x406a9c){var _0x11f86b=_0x4fe9ce[_0x406a9c],_0x36b4cf=_0x1833d0[_0x11f86b];_0x36b4cf[_0x21e7c3(0x126)]=!![],_0x36b4cf[_0x21e7c3(0x15b)]=a769_0x5ecc9b['WHITE'];}var _0x3269aa=_0x4ac468[_0x21e7c3(0x12c)];_0x5b7593=_0x3269aa[_0x21e7c3(0x196)];for(_0x406a9c=0x0;_0x406a9c<_0x5b7593;++_0x406a9c){_0x3269aa[_0x406a9c][_0x21e7c3(0x15b)]=a769_0x5ecc9b[_0x21e7c3(0x1be)](a769_0x5ecc9b[_0x21e7c3(0x195)]);}_0x4ac468[_0x21e7c3(0x131)]=![],_0x4ac468[_0x21e7c3(0x185)]=!![];}var scratchColor=new a769_0x5ecc9b(),DEFAULT_COLOR_VALUE=a769_0x5ecc9b['WHITE'],DEFAULT_SHOW_VALUE=!![],complexExpressionReg=/\$/;Vector3DTilePrimitive[a769_0x404c(0x1b1)][a769_0x404c(0x199)]=function(_0x32f974,_0x8d4537){var _0x30506e=a769_0x404c;if(!a769_0xd728e8(_0x32f974)){clearStyle(this,_0x8d4537);return;}var _0x18d0ec=_0x32f974[_0x30506e(0x15b)],_0x29834d=_0x18d0ec instanceof a769_0x348545&&!complexExpressionReg[_0x30506e(0x175)](_0x18d0ec[_0x30506e(0x1ad)]);this[_0x30506e(0x131)]=_0x29834d;var _0x9818c2=this[_0x30506e(0x19d)],_0x5456b9=_0x9818c2['length'],_0x34b5ad;for(_0x34b5ad=0x0;_0x34b5ad<_0x5456b9;++_0x34b5ad){var _0x4d2c65=_0x9818c2[_0x34b5ad],_0x20c178=_0x8d4537[_0x4d2c65];_0x20c178[_0x30506e(0x15b)]=a769_0xd728e8(_0x32f974[_0x30506e(0x15b)])?_0x32f974[_0x30506e(0x15b)][_0x30506e(0x139)](_0x20c178,scratchColor):DEFAULT_COLOR_VALUE,_0x20c178[_0x30506e(0x126)]=a769_0xd728e8(_0x32f974[_0x30506e(0x126)])?_0x32f974[_0x30506e(0x126)][_0x30506e(0x124)](_0x20c178):DEFAULT_SHOW_VALUE;}if(_0x29834d){var _0xa4c5c5=this[_0x30506e(0x12c)];_0x5456b9=_0xa4c5c5['length'];for(_0x34b5ad=0x0;_0x34b5ad<_0x5456b9;++_0x34b5ad){_0xa4c5c5[_0x34b5ad]['color']=a769_0x5ecc9b[_0x30506e(0x1be)](a769_0x5ecc9b[_0x30506e(0x195)]);}this[_0x30506e(0x131)]=![],this['_batchDirty']=!![];}},Vector3DTilePrimitive[a769_0x404c(0x1b1)]['updateCommands']=function(_0x1c5bf0,_0x2f8e4a){var _0x43f751=a769_0x404c;if(this[_0x43f751(0x131)])return;var _0x1694d9=this[_0x43f751(0x158)],_0x231dcf=_0x1694d9[_0x1c5bf0];if(!a769_0xd728e8(_0x231dcf))return;var _0xa1a153=this[_0x43f751(0x13f)],_0x8e671d=this[_0x43f751(0x177)],_0x31ab0e=_0xa1a153[_0x231dcf],_0x4a5a4c=_0x8e671d[_0x231dcf],_0x2bd8a6=this[_0x43f751(0x12c)],_0x3d2171=_0x2bd8a6[_0x43f751(0x196)],_0x5848db;for(_0x5848db=0x0;_0x5848db<_0x3d2171;++_0x5848db){var _0x3c4bb8=_0x2bd8a6[_0x5848db][_0x43f751(0x127)],_0x496c5a=_0x2bd8a6[_0x5848db][_0x43f751(0x149)];if(_0x31ab0e>=_0x3c4bb8&&_0x31ab0e<_0x3c4bb8+_0x496c5a)break;}_0x2bd8a6['push'](new a769_0xf5d4ce({'color':a769_0x5ecc9b[_0x43f751(0x1be)](_0x2f8e4a),'offset':_0x31ab0e,'count':_0x4a5a4c,'batchIds':[_0x1c5bf0]}));var _0xb116eb=[],_0x30b615=[],_0x3eaa9e=_0x2bd8a6[_0x5848db][_0x43f751(0x13d)],_0x1acd76=_0x3eaa9e[_0x43f751(0x196)];for(var _0x25d962=0x0;_0x25d962<_0x1acd76;++_0x25d962){var _0x597e27=_0x3eaa9e[_0x25d962];if(_0x597e27===_0x1c5bf0)continue;var _0x5a109b=_0x1694d9[_0x597e27];_0xa1a153[_0x5a109b]<_0x31ab0e?_0xb116eb[_0x43f751(0x19c)](_0x597e27):_0x30b615[_0x43f751(0x19c)](_0x597e27);}_0x30b615[_0x43f751(0x196)]!==0x0&&_0x2bd8a6[_0x43f751(0x19c)](new a769_0xf5d4ce({'color':a769_0x5ecc9b[_0x43f751(0x1be)](_0x2bd8a6[_0x5848db][_0x43f751(0x15b)]),'offset':_0x31ab0e+_0x4a5a4c,'count':_0x2bd8a6[_0x5848db][_0x43f751(0x127)]+_0x2bd8a6[_0x5848db]['count']-(_0x31ab0e+_0x4a5a4c),'batchIds':_0x30b615})),_0xb116eb[_0x43f751(0x196)]!==0x0?(_0x2bd8a6[_0x5848db][_0x43f751(0x149)]=_0x31ab0e-_0x2bd8a6[_0x5848db][_0x43f751(0x127)],_0x2bd8a6[_0x5848db][_0x43f751(0x13d)]=_0xb116eb):_0x2bd8a6['splice'](_0x5848db,0x1),this['_batchDirty']=!![];};function queueCommands(_0x30c285,_0x45d920,_0x7711ae,_0x160bfd){var _0x575cf2=a769_0x404c,_0x21f3ce=_0x30c285[_0x575cf2(0x16f)],_0x3621c2=_0x21f3ce!==a769_0x1ae8dd[_0x575cf2(0x1a2)],_0x21c315=_0x21f3ce!==a769_0x1ae8dd[_0x575cf2(0x171)],_0x5b22f1=_0x45d920['commandList'],_0x4418d9=_0x7711ae['length'],_0x43a939,_0xedd9bf;for(_0xedd9bf=0x0;_0xedd9bf<_0x4418d9;++_0xedd9bf){_0x3621c2&&(_0x43a939=_0x7711ae[_0xedd9bf],_0x43a939[_0x575cf2(0x192)]=a769_0xd4e7f5[_0x575cf2(0x160)],_0x5b22f1[_0x575cf2(0x19c)](_0x43a939)),_0x21c315&&(_0x43a939=_0x7711ae[_0xedd9bf][_0x575cf2(0x1ba)][_0x575cf2(0x146)],_0x43a939['pass']=a769_0xd4e7f5['CESIUM_3D_TILE_CLASSIFICATION'],_0x5b22f1[_0x575cf2(0x19c)](_0x43a939));}if(!_0x45d920[_0x575cf2(0x184)]||!a769_0xd728e8(_0x160bfd))return;_0x4418d9=_0x160bfd[_0x575cf2(0x196)];for(_0xedd9bf=0x0;_0xedd9bf<_0x4418d9;++_0xedd9bf){_0x5b22f1[_0x575cf2(0x19c)](_0x160bfd[_0xedd9bf]);}}function a769_0xc690(_0x55b053,_0xbe37be){var _0x1883c9=a769_0x1883();return a769_0xc690=function(_0xc6907d,_0x355ab6){_0xc6907d=_0xc6907d-0x123;var _0x69b27=_0x1883c9[_0xc6907d];return _0x69b27;},a769_0xc690(_0x55b053,_0xbe37be);}function queueWireframeCommands(_0x1a4c11,_0x225f84){var _0x38d6b8=a769_0x404c,_0x3b3465=_0x1a4c11[_0x38d6b8(0x140)],_0x270d71=_0x225f84[_0x38d6b8(0x196)];for(var _0x323e92=0x0;_0x323e92<_0x270d71;_0x323e92+=0x2){var _0x17fef2=_0x225f84[_0x323e92+0x1];_0x17fef2[_0x38d6b8(0x192)]=a769_0xd4e7f5[_0x38d6b8(0x15a)],_0x3b3465[_0x38d6b8(0x19c)](_0x17fef2);}}function updateWireframe(_0x4a6f96){var _0x3bac76=a769_0x404c,_0x2e8070=_0x4a6f96[_0x3bac76(0x1b0)]===_0x4a6f96[_0x3bac76(0x134)];_0x2e8070=_0x2e8070&&!(_0x4a6f96[_0x3bac76(0x1b0)]&&_0x4a6f96['_wireframeDirty']);if(_0x2e8070)return;!a769_0xd728e8(_0x4a6f96[_0x3bac76(0x17c)])&&(_0x4a6f96[_0x3bac76(0x17c)]=a769_0x254b7f[_0x3bac76(0x135)]({}));var _0x5014c2,_0x251f53;_0x4a6f96[_0x3bac76(0x1b0)]?(_0x5014c2=_0x4a6f96[_0x3bac76(0x17c)],_0x251f53=a769_0x5bdafd['LINES']):(_0x5014c2=_0x4a6f96[_0x3bac76(0x173)],_0x251f53=a769_0x5bdafd[_0x3bac76(0x19e)]);var _0x1e870b=_0x4a6f96[_0x3bac76(0x167)],_0x2bb860=_0x1e870b['length'];for(var _0x24938b=0x0;_0x24938b<_0x2bb860;_0x24938b+=0x2){var _0x5d50a7=_0x1e870b[_0x24938b+0x1];_0x5d50a7[_0x3bac76(0x156)]=_0x5014c2,_0x5d50a7[_0x3bac76(0x19f)]=_0x251f53;}_0x4a6f96['_debugWireframe']=_0x4a6f96[_0x3bac76(0x1b0)],_0x4a6f96['_wireframeDirty']=![];}Vector3DTilePrimitive[a769_0x404c(0x1b1)][a769_0x404c(0x1bc)]=function(_0x13c1fa){var _0x3fc333=a769_0x404c,_0x19da23=_0x13c1fa[_0x3fc333(0x12e)];createVertexArray(this,_0x19da23),createShaders(this,_0x19da23),createRenderStates(this),createUniformMap(this,_0x19da23);var _0x28886e=_0x13c1fa[_0x3fc333(0x13b)];_0x28886e[_0x3fc333(0x141)]&&(createColorCommands(this,_0x19da23),createColorCommandsIgnoreShow(this,_0x13c1fa),updateWireframe(this),this['_debugWireframe']?queueWireframeCommands(_0x13c1fa,this[_0x3fc333(0x167)]):queueCommands(this,_0x13c1fa,this[_0x3fc333(0x167)],this[_0x3fc333(0x1a3)])),_0x28886e[_0x3fc333(0x1b9)]&&(createPickCommands(this),queueCommands(this,_0x13c1fa,this['_pickCommands']));},Vector3DTilePrimitive[a769_0x404c(0x1b1)]['isDestroyed']=function(){return![];},Vector3DTilePrimitive[a769_0x404c(0x1b1)]['destroy']=function(){var _0x549cab=a769_0x404c;return this[_0x549cab(0x188)]=this[_0x549cab(0x188)]&&this[_0x549cab(0x188)]['destroy'](),this[_0x549cab(0x1b4)]=this['_sp']&&this[_0x549cab(0x1b4)][_0x549cab(0x18f)](),this[_0x549cab(0x161)]=this[_0x549cab(0x161)]&&this[_0x549cab(0x161)]['destroy'](),this[_0x549cab(0x14c)]=this[_0x549cab(0x14c)]&&this[_0x549cab(0x14c)][_0x549cab(0x18f)](),a769_0x102ce0(this);};export default Vector3DTilePrimitive;