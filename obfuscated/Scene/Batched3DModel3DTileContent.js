var a423_0x45a5a6=a423_0xa415;(function(_0x5cca37,_0x3c11af){var _0x44eb40=a423_0xa415,_0x411004=_0x5cca37();while(!![]){try{var _0x53b2bb=parseInt(_0x44eb40(0x103))/0x1+parseInt(_0x44eb40(0x110))/0x2+-parseInt(_0x44eb40(0xef))/0x3*(parseInt(_0x44eb40(0x10c))/0x4)+-parseInt(_0x44eb40(0xe7))/0x5*(parseInt(_0x44eb40(0xdb))/0x6)+-parseInt(_0x44eb40(0xd7))/0x7+-parseInt(_0x44eb40(0x120))/0x8+parseInt(_0x44eb40(0xd5))/0x9*(parseInt(_0x44eb40(0x100))/0xa);if(_0x53b2bb===_0x3c11af)break;else _0x411004['push'](_0x411004['shift']());}catch(_0x3df524){_0x411004['push'](_0x411004['shift']());}}}(a423_0x2e69,0x49e07));import a423_0x1a9060 from'../Core/Cartesian3.js';import a423_0x2b8747 from'../Core/Color.js';import a423_0x447636 from'../Core/ComponentDatatype.js';import a423_0x5b651f from'../Core/defined.js';import a423_0x47952d from'../Core/deprecationWarning.js';import a423_0x28e0cc from'../Core/destroyObject.js';function a423_0xa415(_0x2ff14d,_0x3037b2){var _0x2e6919=a423_0x2e69();return a423_0xa415=function(_0xa415d0,_0x95d51f){_0xa415d0=_0xa415d0-0xc8;var _0x4da954=_0x2e6919[_0xa415d0];return _0x4da954;},a423_0xa415(_0x2ff14d,_0x3037b2);}import a423_0x22c517 from'../Core/DeveloperError.js';function a423_0x2e69(){var _0x42d89e=['batchTableJson','268518GDbDEz','specularEnvironmentMaps','_tileset','batchLength','_batchIdAttributeName','The\x20glTF\x20in\x20this\x20b3dm\x20uses\x20the\x20semantic\x20`BATCHID`.\x20Application-specific\x20semantics\x20should\x20be\x20prefixed\x20with\x20an\x20underscore:\x20`_BATCHID`.','_deprecationWarning','BATCH_LENGTH','BATCHID','60kXUCae','modelMatrix','debugWireframe','update','364552CHSThC','getClassificationFragmentShaderCallback','backFaceCulling','getDiffuseAttributeOrUniform','shadows','showOutline','_features','color','setAllColor','addDerivedCommands','_tile','WHITE','_groupMetadata','featureTableBinary','_rtcCenterTransform','clippingPlanes','620224owbiVC','TILES3D','_gltfUpAxis','imageBasedLightingFactor','getAttributeOrUniformBySemantic','passes','clone','IDENTITY','destroy','lightColor','prototype','length','_BATCHID','CESIUM_3D_TILE','featureTableJson','_resource','fromTranslation','show','738fGttRd','trianglesLength','1984843GurtKA','computedTransform','FLOAT','applyDebugSettings','6fAGsWL','readyPromise','then','classificationType','commandList','batchTableBinary','_diffuseAttributeOrUniformName','batchTable','evaluateColor','luminanceAtZenith','getUniformMapCallback','applyStyle','2889050GdqPce','getFeature','clippingPlanesOriginMatrix','gltf','getPickId','_contentModelMatrix','featuresLength','getVertexShaderCallback','31134pdTsqr','vectorClassificationOnly','parse','_batchTable','_isClipped','pointsLength','addAll','_classificationType','geometryByteLength','b3dm-legacy-batchid','sphericalHarmonicCoefficients','getGlobalProperty','_clippingPlanes','isDestroyed','_model','defineProperties','multiply','115410TBimSo','updateCommands'];a423_0x2e69=function(){return _0x42d89e;};return a423_0x2e69();}import a423_0x50e558 from'../Core/Matrix4.js';import a423_0x248925 from'../Core/RequestType.js';import a423_0x18e1bf from'../Renderer/Pass.js';import a423_0x658736 from'./Axis.js';import a423_0x49cf01 from'./B3dmParser.js';import a423_0x5b38ae from'./Cesium3DTileBatchTable.js';import a423_0x5c5954 from'./Cesium3DTileFeature.js';import a423_0x24e6df from'./Cesium3DTileFeatureTable.js';import a423_0x4c0e67 from'./ClassificationModel.js';import a423_0x38292a from'./Model.js';import a423_0xe5f225 from'./ModelAnimationLoop.js';import a423_0x2618d6 from'./ModelUtility.js';function Batched3DModel3DTileContent(_0x207107,_0x4f4b47,_0x123130,_0x49ec3b,_0x1427f2){var _0x14dc2a=a423_0xa415;this['_tileset']=_0x207107,this['_tile']=_0x4f4b47,this[_0x14dc2a(0xd2)]=_0x123130,this[_0x14dc2a(0xfd)]=undefined,this['_batchTable']=undefined,this[_0x14dc2a(0x116)]=undefined,this[_0x14dc2a(0xf6)]=_0x207107[_0x14dc2a(0xf0)]?undefined:_0x207107[_0x14dc2a(0xde)],this[_0x14dc2a(0x107)]=undefined,this[_0x14dc2a(0xe1)]={},this[_0x14dc2a(0x11e)]=undefined,this[_0x14dc2a(0xec)]=undefined,this['featurePropertiesDirty']=![],this[_0x14dc2a(0x11c)]=undefined,initialize(this,_0x49ec3b,_0x1427f2);}Batched3DModel3DTileContent[a423_0x45a5a6(0x109)]=a423_0x47952d,Object[a423_0x45a5a6(0xfe)](Batched3DModel3DTileContent[a423_0x45a5a6(0xcd)],{'featuresLength':{'get':function(){var _0x5bcfa3=a423_0x45a5a6;return this[_0x5bcfa3(0xe2)][_0x5bcfa3(0xed)];}},'pointsLength':{'get':function(){var _0x149ca5=a423_0x45a5a6;return this['_model'][_0x149ca5(0xf4)];}},'trianglesLength':{'get':function(){var _0x448dcb=a423_0x45a5a6;return this['_model'][_0x448dcb(0xd6)];}},'geometryByteLength':{'get':function(){var _0x145f13=a423_0x45a5a6;return this[_0x145f13(0xfd)][_0x145f13(0xf7)];}},'texturesByteLength':{'get':function(){var _0x2accea=a423_0x45a5a6;return this[_0x2accea(0xfd)]['texturesByteLength'];}},'batchTableByteLength':{'get':function(){var _0x40fbbf=a423_0x45a5a6;return this[_0x40fbbf(0xe2)]['memorySizeInBytes'];}},'innerContents':{'get':function(){return undefined;}},'readyPromise':{'get':function(){var _0x961360=a423_0x45a5a6;return this[_0x961360(0xfd)]['readyPromise'];}},'tileset':{'get':function(){var _0x22ed79=a423_0x45a5a6;return this[_0x22ed79(0x105)];}},'tile':{'get':function(){var _0x462e97=a423_0x45a5a6;return this[_0x462e97(0x11a)];}},'url':{'get':function(){var _0x2ef3b2=a423_0x45a5a6;return this[_0x2ef3b2(0xd2)]['getUrlComponent'](!![]);}},'batchTable':{'get':function(){return this['_batchTable'];}},'groupMetadata':{'get':function(){var _0x180c90=a423_0x45a5a6;return this[_0x180c90(0x11c)];},'set':function(_0x57f922){var _0x44d9c0=a423_0x45a5a6;this[_0x44d9c0(0x11c)]=_0x57f922;}}});function getBatchIdAttributeName(_0x50766a){var _0x7a5855=a423_0x45a5a6,_0x482166=a423_0x2618d6['getAttributeOrUniformBySemantic'](_0x50766a,_0x7a5855(0xcf));return!a423_0x5b651f(_0x482166)&&(_0x482166=a423_0x2618d6[_0x7a5855(0x124)](_0x50766a,_0x7a5855(0x10b)),a423_0x5b651f(_0x482166)&&Batched3DModel3DTileContent['_deprecationWarning'](_0x7a5855(0xf8),_0x7a5855(0x108))),_0x482166;}function getVertexShaderCallback(_0x4c9d1f){return function(_0x472674,_0x2c4df2){var _0x37e20f=a423_0xa415,_0x2b9ac=_0x4c9d1f[_0x37e20f(0xf2)],_0xea78f0=!a423_0x5b651f(_0x4c9d1f[_0x37e20f(0xf6)]),_0x36574d=_0x4c9d1f['_model'][_0x37e20f(0xea)];a423_0x5b651f(_0x36574d)&&(_0x4c9d1f[_0x37e20f(0x107)]=getBatchIdAttributeName(_0x36574d),_0x4c9d1f[_0x37e20f(0xe1)][_0x2c4df2]=a423_0x2618d6[_0x37e20f(0x113)](_0x36574d,_0x2c4df2));var _0x27019f=_0x2b9ac[_0x37e20f(0xee)](_0xea78f0,_0x4c9d1f[_0x37e20f(0x107)],_0x4c9d1f[_0x37e20f(0xe1)][_0x2c4df2]);return a423_0x5b651f(_0x27019f)?_0x27019f(_0x472674):_0x472674;};}function getFragmentShaderCallback(_0xd9b333){return function(_0x1474eb,_0x13e29c){var _0x7de9f3=a423_0xa415,_0x12241f=_0xd9b333[_0x7de9f3(0xf2)],_0x3696da=!a423_0x5b651f(_0xd9b333[_0x7de9f3(0xf6)]),_0x131741=_0xd9b333[_0x7de9f3(0xfd)]['gltf'];a423_0x5b651f(_0x131741)&&(_0xd9b333[_0x7de9f3(0xe1)][_0x13e29c]=a423_0x2618d6[_0x7de9f3(0x113)](_0x131741,_0x13e29c));var _0xdd354c=_0x12241f['getFragmentShaderCallback'](_0x3696da,_0xd9b333[_0x7de9f3(0xe1)][_0x13e29c],![]);return a423_0x5b651f(_0xdd354c)?_0xdd354c(_0x1474eb):_0x1474eb;};}function getPickIdCallback(_0x3e8e90){return function(){var _0x801be5=a423_0xa415;return _0x3e8e90[_0x801be5(0xf2)][_0x801be5(0xeb)]();};}function getClassificationFragmentShaderCallback(_0x5de2e4){return function(_0xbc86f2){var _0x4fabbc=a423_0xa415,_0x1bf55d=_0x5de2e4[_0x4fabbc(0xf2)],_0x5614ba=_0x1bf55d[_0x4fabbc(0x111)]();return a423_0x5b651f(_0x5614ba)?_0x5614ba(_0xbc86f2):_0xbc86f2;};}function createColorChangedCallback(_0x52b477){return function(_0xd236d3,_0x46a2c1){var _0x2c8d69=a423_0xa415;_0x52b477[_0x2c8d69(0xfd)][_0x2c8d69(0x101)](_0xd236d3,_0x46a2c1);};}function initialize(_0x32b402,_0x513d9a,_0x37105e){var _0x385991=a423_0x45a5a6,_0x3b10cb=_0x32b402[_0x385991(0x105)],_0x4a26e0=_0x32b402['_tile'],_0x16c7ce=_0x32b402[_0x385991(0xd2)],_0x361c6a=a423_0x49cf01[_0x385991(0xf1)](_0x513d9a,_0x37105e),_0x20b18a=_0x361c6a[_0x385991(0x106)],_0x35c70c=_0x361c6a[_0x385991(0xd1)],_0x530549=_0x361c6a[_0x385991(0x11d)],_0x4fa66a=new a423_0x24e6df(_0x35c70c,_0x530549);_0x20b18a=_0x4fa66a['getGlobalProperty'](_0x385991(0x10a)),_0x4fa66a[_0x385991(0xed)]=_0x20b18a;var _0x1d32c7=_0x361c6a[_0x385991(0x102)],_0x5af4f5=_0x361c6a[_0x385991(0xe0)],_0x5ab91e;a423_0x5b651f(_0x32b402[_0x385991(0xf6)])&&(_0x5ab91e=createColorChangedCallback(_0x32b402));var _0x1db252=new a423_0x5b38ae(_0x32b402,_0x20b18a,_0x1d32c7,_0x5af4f5,_0x5ab91e);_0x32b402['_batchTable']=_0x1db252;var _0x3a890c=_0x361c6a[_0x385991(0xea)],_0x50ffbf={'content':_0x32b402,'primitive':_0x3b10cb};_0x32b402[_0x385991(0x11e)]=a423_0x50e558[_0x385991(0xca)];var _0x3de452=_0x4fa66a[_0x385991(0xfa)]('RTC_CENTER',a423_0x447636[_0x385991(0xd9)],0x3);a423_0x5b651f(_0x3de452)&&(_0x32b402['_rtcCenterTransform']=a423_0x50e558[_0x385991(0xd3)](a423_0x1a9060['fromArray'](_0x3de452))),_0x32b402[_0x385991(0xec)]=a423_0x50e558['multiply'](_0x4a26e0[_0x385991(0xd8)],_0x32b402[_0x385991(0x11e)],new a423_0x50e558()),!a423_0x5b651f(_0x32b402[_0x385991(0xf6)])?(_0x32b402[_0x385991(0xfd)]=new a423_0x38292a({'gltf':_0x3a890c,'cull':![],'releaseGltfJson':!![],'opaquePass':a423_0x18e1bf[_0x385991(0xd0)],'basePath':_0x16c7ce,'requestType':a423_0x248925[_0x385991(0x121)],'modelMatrix':_0x32b402[_0x385991(0xec)],'upAxis':_0x3b10cb['_gltfUpAxis'],'forwardAxis':a423_0x658736['X'],'shadows':_0x3b10cb[_0x385991(0x114)],'debugWireframe':_0x3b10cb[_0x385991(0x10e)],'incrementallyLoadTextures':![],'vertexShaderLoaded':getVertexShaderCallback(_0x32b402),'fragmentShaderLoaded':getFragmentShaderCallback(_0x32b402),'uniformMapLoaded':_0x1db252[_0x385991(0xe5)](),'pickIdLoaded':getPickIdCallback(_0x32b402),'addBatchIdToGeneratedShaders':_0x20b18a>0x0,'pickObject':_0x50ffbf,'imageBasedLightingFactor':_0x3b10cb[_0x385991(0x123)],'lightColor':_0x3b10cb['lightColor'],'luminanceAtZenith':_0x3b10cb[_0x385991(0xe4)],'sphericalHarmonicCoefficients':_0x3b10cb[_0x385991(0xf9)],'specularEnvironmentMaps':_0x3b10cb[_0x385991(0x104)],'backFaceCulling':_0x3b10cb['backFaceCulling'],'showOutline':_0x3b10cb[_0x385991(0x115)]}),_0x32b402[_0x385991(0xfd)][_0x385991(0xdc)][_0x385991(0xdd)](function(_0x6e177){var _0x5ddf0f=_0x385991;_0x6e177['activeAnimations'][_0x5ddf0f(0xf5)]({'loop':a423_0xe5f225['REPEAT']});})):_0x32b402[_0x385991(0xfd)]=new a423_0x4c0e67({'gltf':_0x3a890c,'cull':![],'basePath':_0x16c7ce,'requestType':a423_0x248925['TILES3D'],'modelMatrix':_0x32b402[_0x385991(0xec)],'upAxis':_0x3b10cb[_0x385991(0x122)],'forwardAxis':a423_0x658736['X'],'debugWireframe':_0x3b10cb[_0x385991(0x10e)],'vertexShaderLoaded':getVertexShaderCallback(_0x32b402),'classificationShaderLoaded':getClassificationFragmentShaderCallback(_0x32b402),'uniformMapLoaded':_0x1db252[_0x385991(0xe5)](),'pickIdLoaded':getPickIdCallback(_0x32b402),'classificationType':_0x32b402[_0x385991(0xf6)],'batchTable':_0x1db252});}function createFeatures(_0x57e875){var _0x24b3e5=a423_0x45a5a6,_0xd6985a=_0x57e875['featuresLength'];if(!a423_0x5b651f(_0x57e875[_0x24b3e5(0x116)])&&_0xd6985a>0x0){var _0x3411f0=new Array(_0xd6985a);for(var _0x5614a4=0x0;_0x5614a4<_0xd6985a;++_0x5614a4){_0x3411f0[_0x5614a4]=new a423_0x5c5954(_0x57e875,_0x5614a4);}_0x57e875[_0x24b3e5(0x116)]=_0x3411f0;}}Batched3DModel3DTileContent['prototype']['hasProperty']=function(_0x419e99,_0x382655){var _0xf05985=a423_0x45a5a6;return this[_0xf05985(0xf2)]['hasProperty'](_0x419e99,_0x382655);},Batched3DModel3DTileContent[a423_0x45a5a6(0xcd)][a423_0x45a5a6(0xe8)]=function(_0x396602){var _0x4a532f=this['featuresLength'];if(!a423_0x5b651f(_0x396602)||_0x396602<0x0||_0x396602>=_0x4a532f)throw new a423_0x22c517('batchId\x20is\x20required\x20and\x20between\x20zero\x20and\x20featuresLength\x20-\x201\x20('+(_0x4a532f-0x1)+').');return createFeatures(this),this['_features'][_0x396602];},Batched3DModel3DTileContent[a423_0x45a5a6(0xcd)][a423_0x45a5a6(0xda)]=function(_0x50cc24,_0x3d472f){var _0x2e7cc1=a423_0x45a5a6;_0x3d472f=_0x50cc24?_0x3d472f:a423_0x2b8747[_0x2e7cc1(0x11b)],this[_0x2e7cc1(0xed)]===0x0?this[_0x2e7cc1(0xfd)][_0x2e7cc1(0x117)]=_0x3d472f:this[_0x2e7cc1(0xf2)][_0x2e7cc1(0x118)](_0x3d472f);},Batched3DModel3DTileContent[a423_0x45a5a6(0xcd)][a423_0x45a5a6(0xe6)]=function(_0x1c406d){var _0x12646e=a423_0x45a5a6;if(this[_0x12646e(0xed)]===0x0){var _0x2c214c=a423_0x5b651f(_0x1c406d)&&a423_0x5b651f(_0x1c406d[_0x12646e(0x117)]),_0x5a5fdb=a423_0x5b651f(_0x1c406d)&&a423_0x5b651f(_0x1c406d[_0x12646e(0xd4)]);this[_0x12646e(0xfd)]['color']=_0x2c214c?_0x1c406d[_0x12646e(0x117)][_0x12646e(0xe3)](undefined,this[_0x12646e(0xfd)][_0x12646e(0x117)]):a423_0x2b8747[_0x12646e(0xc9)](a423_0x2b8747[_0x12646e(0x11b)],this[_0x12646e(0xfd)][_0x12646e(0x117)]),this[_0x12646e(0xfd)][_0x12646e(0xd4)]=_0x5a5fdb?_0x1c406d[_0x12646e(0xd4)]['evaluate'](undefined):!![];}else this[_0x12646e(0xf2)]['applyStyle'](_0x1c406d);},Batched3DModel3DTileContent[a423_0x45a5a6(0xcd)]['update']=function(_0x2230b0,_0x59b6e0){var _0x4c7846=a423_0x45a5a6,_0x86a5f3=_0x59b6e0[_0x4c7846(0xdf)][_0x4c7846(0xce)],_0x1c93c5=this[_0x4c7846(0xfd)],_0x49cc4e=this[_0x4c7846(0x11a)],_0x68642d=this[_0x4c7846(0xf2)];_0x68642d[_0x4c7846(0x10f)](_0x2230b0,_0x59b6e0),this[_0x4c7846(0xec)]=a423_0x50e558[_0x4c7846(0xff)](_0x49cc4e[_0x4c7846(0xd8)],this[_0x4c7846(0x11e)],this[_0x4c7846(0xec)]),_0x1c93c5[_0x4c7846(0x10d)]=this[_0x4c7846(0xec)],_0x1c93c5['shadows']=_0x2230b0[_0x4c7846(0x114)],_0x1c93c5[_0x4c7846(0x123)]=_0x2230b0['imageBasedLightingFactor'],_0x1c93c5[_0x4c7846(0xcc)]=_0x2230b0['lightColor'],_0x1c93c5[_0x4c7846(0xe4)]=_0x2230b0['luminanceAtZenith'],_0x1c93c5[_0x4c7846(0xf9)]=_0x2230b0[_0x4c7846(0xf9)],_0x1c93c5[_0x4c7846(0x104)]=_0x2230b0[_0x4c7846(0x104)],_0x1c93c5[_0x4c7846(0x112)]=_0x2230b0['backFaceCulling'],_0x1c93c5[_0x4c7846(0x10e)]=_0x2230b0['debugWireframe'];var _0x8be56d=_0x2230b0[_0x4c7846(0x11f)];_0x1c93c5['referenceMatrix']=_0x2230b0[_0x4c7846(0xe9)];a423_0x5b651f(_0x8be56d)&&_0x49cc4e['clippingPlanesDirty']&&(_0x1c93c5[_0x4c7846(0xfb)]=_0x8be56d['enabled']&&_0x49cc4e[_0x4c7846(0xf3)]?_0x8be56d:undefined);a423_0x5b651f(_0x8be56d)&&a423_0x5b651f(_0x1c93c5['_clippingPlanes'])&&_0x1c93c5[_0x4c7846(0xfb)]!==_0x8be56d&&(_0x1c93c5['_clippingPlanes']=_0x8be56d);_0x1c93c5[_0x4c7846(0x10f)](_0x59b6e0);var _0x5ab1d4=_0x59b6e0['commandList']['length'];_0x86a5f3<_0x5ab1d4&&(_0x59b6e0[_0x4c7846(0xc8)]['render']||_0x59b6e0[_0x4c7846(0xc8)]['pick'])&&!a423_0x5b651f(this[_0x4c7846(0xf6)])&&_0x68642d[_0x4c7846(0x119)](_0x59b6e0,_0x86a5f3);},Batched3DModel3DTileContent['prototype'][a423_0x45a5a6(0xfc)]=function(){return![];},Batched3DModel3DTileContent[a423_0x45a5a6(0xcd)][a423_0x45a5a6(0xcb)]=function(){var _0x51316a=a423_0x45a5a6;return this['_model']=this[_0x51316a(0xfd)]&&this[_0x51316a(0xfd)][_0x51316a(0xcb)](),this[_0x51316a(0xf2)]=this[_0x51316a(0xf2)]&&this['_batchTable'][_0x51316a(0xcb)](),a423_0x28e0cc(this);};export default Batched3DModel3DTileContent;