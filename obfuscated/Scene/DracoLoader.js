var a498_0x4598e8=a498_0x4151;(function(_0x3c1803,_0xc8c000){var _0x3c7648=a498_0x4151,_0x12b7c2=_0x3c1803();while(!![]){try{var _0x36047c=parseInt(_0x3c7648(0x1f0))/0x1*(parseInt(_0x3c7648(0x1f9))/0x2)+parseInt(_0x3c7648(0x1f4))/0x3+parseInt(_0x3c7648(0x202))/0x4+-parseInt(_0x3c7648(0x22b))/0x5+parseInt(_0x3c7648(0x220))/0x6+-parseInt(_0x3c7648(0x22c))/0x7+-parseInt(_0x3c7648(0x205))/0x8;if(_0x36047c===_0xc8c000)break;else _0x12b7c2['push'](_0x12b7c2['shift']());}catch(_0x54bcb8){_0x12b7c2['push'](_0x12b7c2['shift']());}}}(a498_0x1181,0x5d856));function a498_0x1181(){var _0x7c9707=['_getDecoderTaskProcessor','2996286tbHtbR','extensionsRequired','vertexBuffersToCreate','resolve','hasExtension','bufferView','bufferViewId','pendingDecodingCache','parse','keys','numberOfIndices','125305PYSoEm','714091SYXFAx','cacheKey','hasOwnProperty','dequeue','modelDecodingCache','primitive','KHR_draco_mesh_compression','_taskProcessorReady','count','56123QPVCth','enqueue','initWebAssemblyModule','ready','777048cAHNMi','indexArray','length','decodePointCloud','bufferViews','4GYmPXy','_dequantizeInShader','_decodedModelResourceCache','_loadResources','buffers','decodeDraco','gltf','all','scheduleTask','2028020AaQvnP','_decodedData','attributes','6940096vvbliJ','max','extras','activeDecodingTasks','.primitive.','buffer','data','cacheDataForModel','createdBufferViews','meshPrimitive','peek','mesh','hardwareConcurrency','ThirdParty/Workers/draco_decoder_nodejs.js','cache','array','byteOffset','fromTypedArray','byteLength','_decoderTaskProcessor','destroyCachedDataForModel','indexBuffersToCreate','extensions','source','_maxDecodingConcurrency','primitivesToDecode'];a498_0x1181=function(){return _0x7c9707;};return a498_0x1181();}import a498_0x58ebba from'../Core/arraySlice.js';import a498_0x3a5ac9 from'../Core/ComponentDatatype.js';import a498_0x577c92 from'../Core/defined.js';import a498_0xa4af74 from'../Core/FeatureDetection.js';import a498_0x5f39c8 from'../Core/TaskProcessor.js';import a498_0x1cb669 from'./GltfPipeline/ForEach.js';import a498_0x30e4e2 from'../ThirdParty/when.js';function DracoLoader(){}function a498_0x4151(_0x1becdc,_0x21f8c6){var _0x11815a=a498_0x1181();return a498_0x4151=function(_0x415105,_0x2723e7){_0x415105=_0x415105-0x1ea;var _0x1b2422=_0x11815a[_0x415105];return _0x1b2422;},a498_0x4151(_0x1becdc,_0x21f8c6);}DracoLoader[a498_0x4598e8(0x21d)]=Math[a498_0x4598e8(0x206)](a498_0xa4af74[a498_0x4598e8(0x211)]-0x1,0x1),DracoLoader[a498_0x4598e8(0x218)]=undefined,DracoLoader[a498_0x4598e8(0x1ee)]=![],DracoLoader[a498_0x4598e8(0x21f)]=function(){var _0x297b7f=a498_0x4598e8;if(!a498_0x577c92(DracoLoader[_0x297b7f(0x218)])){var _0x57c3be=new a498_0x5f39c8(_0x297b7f(0x1fe),DracoLoader[_0x297b7f(0x21d)]);_0x57c3be[_0x297b7f(0x1f2)]({'modulePath':_0x297b7f(0x212),'wasmBinaryFile':'ThirdParty/draco_decoder.wasm'})['then'](function(){var _0x2e9bc5=_0x297b7f;DracoLoader[_0x2e9bc5(0x1ee)]=!![];}),DracoLoader[_0x297b7f(0x218)]=_0x57c3be;}return DracoLoader[_0x297b7f(0x218)];},DracoLoader[a498_0x4598e8(0x224)]=function(_0x42023c){var _0x47dcfa=a498_0x4598e8;return a498_0x577c92(_0x42023c[_0x47dcfa(0x221)][_0x47dcfa(0x1ed)])||a498_0x577c92(_0x42023c['extensionsUsed'][_0x47dcfa(0x1ed)]);};function addBufferToLoadResources(_0x1016fb,_0x19d798){var _0x236a17=a498_0x4598e8,_0xd7042='runtime.'+Object[_0x236a17(0x229)](_0x1016fb['createdBufferViews'])['length'],_0x3f8027=_0x1016fb[_0x236a17(0x1fd)],_0x20ce1b=Object['keys'](_0x3f8027)[_0x236a17(0x1f6)];return _0x3f8027[_0x20ce1b]=_0x19d798,_0x1016fb[_0x236a17(0x20d)][_0xd7042]={'buffer':_0x20ce1b,'byteOffset':0x0,'byteLength':_0x19d798[_0x236a17(0x217)]},_0xd7042;}function addNewVertexBuffer(_0x43f467,_0x22b18d,_0x5dd86c){var _0x573809=a498_0x4598e8,_0x191bb1=_0x22b18d[_0x573809(0x1fc)],_0x24bb05=addBufferToLoadResources(_0x191bb1,_0x43f467);return _0x191bb1[_0x573809(0x222)][_0x573809(0x1f1)](_0x24bb05),_0x24bb05;}function addNewIndexBuffer(_0x3afec1,_0x49a9b5,_0x290f66){var _0x59cd05=a498_0x4598e8,_0x7dc27d=_0x3afec1['typedArray'],_0x50d0c5=_0x49a9b5['_loadResources'],_0x3cd8cc=addBufferToLoadResources(_0x50d0c5,_0x7dc27d);return _0x50d0c5[_0x59cd05(0x21a)][_0x59cd05(0x1f1)]({'id':_0x3cd8cc,'componentType':a498_0x3a5ac9[_0x59cd05(0x216)](_0x7dc27d)}),{'bufferViewId':_0x3cd8cc,'numberOfIndices':_0x3afec1[_0x59cd05(0x22a)]};}function scheduleDecodingTask(_0x4839c5,_0x1142c6,_0x50af24,_0x31cf6e){var _0x52d2c6=a498_0x4598e8;if(!DracoLoader[_0x52d2c6(0x1ee)])return;var _0x4b5d2c=_0x50af24['primitivesToDecode'][_0x52d2c6(0x20f)]();if(!a498_0x577c92(_0x4b5d2c))return;var _0x4cb51c=_0x4839c5[_0x52d2c6(0x201)](_0x4b5d2c,[_0x4b5d2c['array'][_0x52d2c6(0x20a)]]);if(!a498_0x577c92(_0x4cb51c))return;return _0x50af24[_0x52d2c6(0x208)]++,_0x50af24[_0x52d2c6(0x21e)][_0x52d2c6(0x1ea)](),_0x4cb51c['then'](function(_0x3de5f7){var _0x2ba1c1=_0x52d2c6;_0x50af24[_0x2ba1c1(0x208)]--;var _0x4b4313=addNewIndexBuffer(_0x3de5f7[_0x2ba1c1(0x1f5)],_0x1142c6,_0x31cf6e),_0x1c6099={},_0x16dd37=_0x3de5f7['attributeData'];for(var _0xc72a33 in _0x16dd37){if(_0x16dd37[_0x2ba1c1(0x22e)](_0xc72a33)){var _0xb7fe14=_0x16dd37[_0xc72a33],_0x158531=_0xb7fe14[_0x2ba1c1(0x214)],_0x18d3e7=addNewVertexBuffer(_0x158531,_0x1142c6,_0x31cf6e),_0x5bec0b=_0xb7fe14[_0x2ba1c1(0x20b)];_0x5bec0b[_0x2ba1c1(0x225)]=_0x18d3e7,_0x1c6099[_0xc72a33]=_0x5bec0b;}}_0x1142c6[_0x2ba1c1(0x203)][_0x4b5d2c['mesh']+_0x2ba1c1(0x209)+_0x4b5d2c[_0x2ba1c1(0x1ec)]]={'bufferView':_0x4b4313[_0x2ba1c1(0x226)],'numberOfIndices':_0x4b4313[_0x2ba1c1(0x22a)],'attributes':_0x1c6099};});}DracoLoader[a498_0x4598e8(0x1fb)]=undefined,DracoLoader[a498_0x4598e8(0x228)]=function(_0x3c380c,_0x3fba82){var _0x4c4cab=a498_0x4598e8;if(!DracoLoader[_0x4c4cab(0x224)](_0x3c380c))return;var _0x3e8cbf=_0x3c380c[_0x4c4cab(0x1fc)],_0x4c7bb5=_0x3c380c[_0x4c4cab(0x22d)];if(a498_0x577c92(_0x4c7bb5)){!a498_0x577c92(DracoLoader['_decodedModelResourceCache'])&&(!a498_0x577c92(_0x3fba82[_0x4c4cab(0x213)]['modelDecodingCache'])&&(_0x3fba82[_0x4c4cab(0x213)][_0x4c4cab(0x1eb)]={}),DracoLoader[_0x4c4cab(0x1fb)]=_0x3fba82[_0x4c4cab(0x213)][_0x4c4cab(0x1eb)]);var _0x1871f7=DracoLoader['_decodedModelResourceCache'][_0x4c7bb5];if(a498_0x577c92(_0x1871f7)){_0x1871f7[_0x4c4cab(0x1ef)]++,_0x3e8cbf[_0x4c4cab(0x227)]=!![];return;}}var _0x476d48=_0x3c380c[_0x4c4cab(0x1fa)],_0x3d6a5b=_0x3c380c[_0x4c4cab(0x1ff)];a498_0x1cb669[_0x4c4cab(0x210)](_0x3d6a5b,function(_0xbe32ca,_0x48ac93){var _0x241e0d=_0x4c4cab;a498_0x1cb669[_0x241e0d(0x20e)](_0xbe32ca,function(_0x4a5088,_0x387951){var _0x1185e4=_0x241e0d;if(!a498_0x577c92(_0x4a5088[_0x1185e4(0x21b)]))return;var _0x3e1526=_0x4a5088[_0x1185e4(0x21b)][_0x1185e4(0x1ed)];if(!a498_0x577c92(_0x3e1526))return;var _0x250cc6=_0x3d6a5b[_0x1185e4(0x1f8)][_0x3e1526[_0x1185e4(0x225)]],_0x501567=a498_0x58ebba(_0x3d6a5b[_0x1185e4(0x1fd)][_0x250cc6[_0x1185e4(0x20a)]][_0x1185e4(0x207)]['_pipeline'][_0x1185e4(0x21c)],_0x250cc6['byteOffset'],_0x250cc6[_0x1185e4(0x215)]+_0x250cc6[_0x1185e4(0x217)]);_0x3e8cbf[_0x1185e4(0x21e)][_0x1185e4(0x1f1)]({'mesh':_0x48ac93,'primitive':_0x387951,'array':_0x501567,'bufferView':_0x250cc6,'compressedAttributes':_0x3e1526[_0x1185e4(0x204)],'dequantizeInShader':_0x476d48});});});},DracoLoader['decodeModel']=function(_0x34bb9a,_0x56ec87){var _0x3eb3a1=a498_0x4598e8;if(!DracoLoader[_0x3eb3a1(0x224)](_0x34bb9a))return a498_0x30e4e2[_0x3eb3a1(0x223)]();var _0x25f3d3=_0x34bb9a['_loadResources'],_0xbc57b7=_0x34bb9a[_0x3eb3a1(0x22d)];if(a498_0x577c92(_0xbc57b7)&&a498_0x577c92(DracoLoader[_0x3eb3a1(0x1fb)])){var _0x57edd7=DracoLoader[_0x3eb3a1(0x1fb)][_0xbc57b7];if(a498_0x577c92(_0x57edd7)&&_0x25f3d3[_0x3eb3a1(0x227)])return a498_0x30e4e2(_0x57edd7[_0x3eb3a1(0x1f3)],function(){var _0x3ecfae=_0x3eb3a1;_0x34bb9a[_0x3ecfae(0x203)]=_0x57edd7['data'],_0x25f3d3['pendingDecodingCache']=![];});DracoLoader[_0x3eb3a1(0x1fb)][_0xbc57b7]={'ready':![],'count':0x1,'data':undefined};}if(_0x25f3d3['primitivesToDecode'][_0x3eb3a1(0x1f6)]===0x0)return a498_0x30e4e2['resolve']();var _0x1d5dcd=DracoLoader[_0x3eb3a1(0x21f)](),_0xf43d00=[],_0x2c299a=scheduleDecodingTask(_0x1d5dcd,_0x34bb9a,_0x25f3d3,_0x56ec87);while(a498_0x577c92(_0x2c299a)){_0xf43d00['push'](_0x2c299a),_0x2c299a=scheduleDecodingTask(_0x1d5dcd,_0x34bb9a,_0x25f3d3,_0x56ec87);}return a498_0x30e4e2[_0x3eb3a1(0x200)](_0xf43d00);},DracoLoader[a498_0x4598e8(0x1f7)]=function(_0x4d58e1){var _0x276726=a498_0x4598e8,_0x85db57=DracoLoader[_0x276726(0x21f)]();if(!DracoLoader[_0x276726(0x1ee)])return;return _0x85db57[_0x276726(0x201)](_0x4d58e1,[_0x4d58e1['buffer'][_0x276726(0x20a)]]);},DracoLoader['decodeBufferView']=function(_0x5787e8){var _0x3ac050=a498_0x4598e8,_0x46800c=DracoLoader['_getDecoderTaskProcessor']();if(!DracoLoader[_0x3ac050(0x1ee)])return;return _0x46800c[_0x3ac050(0x201)](_0x5787e8,[_0x5787e8[_0x3ac050(0x214)][_0x3ac050(0x20a)]]);},DracoLoader[a498_0x4598e8(0x20c)]=function(_0x177c05){var _0x590c7d=a498_0x4598e8,_0x3a8849=_0x177c05[_0x590c7d(0x22d)];if(a498_0x577c92(_0x3a8849)&&a498_0x577c92(DracoLoader[_0x590c7d(0x1fb)])){var _0x2ecafc=DracoLoader[_0x590c7d(0x1fb)][_0x3a8849];a498_0x577c92(_0x2ecafc)&&(_0x2ecafc['ready']=!![],_0x2ecafc[_0x590c7d(0x20b)]=_0x177c05[_0x590c7d(0x203)]);}},DracoLoader[a498_0x4598e8(0x219)]=function(_0x12267b){var _0x52ddf6=a498_0x4598e8,_0x146a45=_0x12267b[_0x52ddf6(0x22d)];if(a498_0x577c92(_0x146a45)&&a498_0x577c92(DracoLoader[_0x52ddf6(0x1fb)])){var _0x4b107c=DracoLoader[_0x52ddf6(0x1fb)][_0x146a45];a498_0x577c92(_0x4b107c)&&--_0x4b107c[_0x52ddf6(0x1ef)]===0x0&&delete DracoLoader[_0x52ddf6(0x1fb)][_0x146a45];}};export default DracoLoader;