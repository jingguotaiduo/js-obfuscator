var a662_0x4e9f24=a662_0x3f7a;(function(_0x36a54e,_0x49d18f){var _0x2628ae=a662_0x3f7a,_0x4fe173=_0x36a54e();while(!![]){try{var _0x57ed3d=-parseInt(_0x2628ae(0x192))/0x1+-parseInt(_0x2628ae(0x184))/0x2+parseInt(_0x2628ae(0x183))/0x3*(-parseInt(_0x2628ae(0x17b))/0x4)+parseInt(_0x2628ae(0x172))/0x5*(parseInt(_0x2628ae(0x168))/0x6)+parseInt(_0x2628ae(0x18d))/0x7*(-parseInt(_0x2628ae(0x171))/0x8)+-parseInt(_0x2628ae(0x18a))/0x9+parseInt(_0x2628ae(0x16e))/0xa;if(_0x57ed3d===_0x49d18f)break;else _0x4fe173['push'](_0x4fe173['shift']());}catch(_0x3eb0bf){_0x4fe173['push'](_0x4fe173['shift']());}}}(a662_0x5490,0x66231));import a662_0x42a820 from'../Core/Cartesian3.js';import a662_0x32e285 from'../Core/ComponentDatatype.js';import a662_0x18d3ef from'../Core/defined.js';import a662_0x47e16b from'../Core/destroyObject.js';import a662_0xdeafdf from'../Core/IndexDatatype.js';import a662_0xbfc595 from'../Core/loadKTX2.js';import a662_0x893c4a from'../Core/PixelFormat.js';import a662_0x2ba716 from'../Renderer/Buffer.js';import a662_0x96227e from'../Renderer/BufferUsage.js';import a662_0x2c06fc from'../Renderer/ComputeCommand.js';import a662_0x302056 from'../Renderer/CubeMap.js';import a662_0x57b437 from'../Renderer/PixelDatatype.js';import a662_0x4c3346 from'../Renderer/ShaderProgram.js';import a662_0x57dfb9 from'../Renderer/ShaderSource.js';import a662_0xdd6be0 from'../Renderer/Texture.js';import a662_0x1c048d from'../Renderer/VertexArray.js';function a662_0x3f7a(_0x2994c3,_0x4f84e2){var _0x5490f4=a662_0x5490();return a662_0x3f7a=function(_0x3f7a07,_0x536817){_0x3f7a07=_0x3f7a07-0x162;var _0x1fe817=_0x5490f4[_0x3f7a07];return _0x1fe817;},a662_0x3f7a(_0x2994c3,_0x4f84e2);}import a662_0x1799b5 from'../Shaders/OctahedralProjectionAtlasFS.js';import a662_0x4df68e from'../Shaders/OctahedralProjectionFS.js';import a662_0x46f925 from'../Shaders/OctahedralProjectionVS.js';import a662_0x4bbe61 from'../ThirdParty/when.js';function OctahedralProjectedCubeMap(_0x15c8e8){var _0x244149=a662_0x3f7a;this[_0x244149(0x170)]=_0x15c8e8,this[_0x244149(0x17f)]=undefined,this[_0x244149(0x166)]=undefined,this[_0x244149(0x180)]=undefined,this['_mipTextures']=undefined,this[_0x244149(0x17d)]=undefined,this[_0x244149(0x169)]=undefined,this[_0x244149(0x181)]=undefined,this[_0x244149(0x185)]=![],this[_0x244149(0x187)]=![],this[_0x244149(0x167)]=a662_0x4bbe61[_0x244149(0x17c)]();}function a662_0x5490(){var _0x45022f=['1083210EWAJpX','_sp','maximumMipmapLevel','positiveY','defineProperties','createVertexBuffer','22387170qIvujq','commandList','_url','1128536jaHXId','10JEfOMq','min','fromCache','textureCache','STATIC_DRAW','halfFloatingPointTexture','isSupported','_mipTextures','RGBA','48paytsk','defer','_va','width','_cubeMapBuffers','_texture','_maximumMipmapLevel','createIndexBuffer','189489zEnKdo','100116HsQsAD','_loading','prototype','_ready','isDestroyed','floatingPointTexture','3795885XBAHDK','colorBufferFloat','pack','7SpgQxJ','FLOAT','positiveX','push','destroy','810588KSfnvI','length','context','HALF_FLOAT','resolve','promise','negativeY','RGBA_NORMALIZED','UNSIGNED_SHORT','_cubeMaps','_readyPromise'];a662_0x5490=function(){return _0x45022f;};return a662_0x5490();}Object[a662_0x4e9f24(0x16c)](OctahedralProjectedCubeMap['prototype'],{'url':{'get':function(){var _0x24156c=a662_0x4e9f24;return this[_0x24156c(0x170)];}},'texture':{'get':function(){var _0x212073=a662_0x4e9f24;return this[_0x212073(0x180)];}},'maximumMipmapLevel':{'get':function(){var _0x173f91=a662_0x4e9f24;return this[_0x173f91(0x181)];}},'ready':{'get':function(){var _0x18588e=a662_0x4e9f24;return this[_0x18588e(0x187)];}},'readyPromise':{'get':function(){var _0x309e61=a662_0x4e9f24;return this[_0x309e61(0x167)][_0x309e61(0x162)];}}}),OctahedralProjectedCubeMap[a662_0x4e9f24(0x178)]=function(_0x3ce4c1){var _0x199618=a662_0x4e9f24;return _0x3ce4c1['colorBufferHalfFloat']&&_0x3ce4c1[_0x199618(0x177)]||_0x3ce4c1[_0x199618(0x189)]&&_0x3ce4c1[_0x199618(0x18b)];};var v1=new a662_0x42a820(0x1,0x0,0x0),v2=new a662_0x42a820(0x0,0x0,0x1),v3=new a662_0x42a820(-0x1,0x0,0x0),v4=new a662_0x42a820(0x0,0x0,-0x1),v5=new a662_0x42a820(0x0,0x1,0x0),v6=new a662_0x42a820(0x0,-0x1,0x0),cubeMapCoordinates=[v5,v3,v2,v6,v1,v5,v4,v5,v5],length=cubeMapCoordinates['length'],flatCubeMapCoordinates=new Float32Array(length*0x3),offset=0x0;for(var i=0x0;i<length;++i,offset+=0x3){a662_0x42a820[a662_0x4e9f24(0x18c)](cubeMapCoordinates[i],flatCubeMapCoordinates,offset);}var flatPositions=new Float32Array([-0x1,0x1,-0x1,0x0,0x0,0x1,0x0,0x0,0x1,0x0,0x1,0x1,0x0,-0x1,-0x1,-0x1,0x1,-0x1]),indices=new Uint16Array([0x0,0x1,0x2,0x2,0x3,0x1,0x7,0x6,0x1,0x3,0x6,0x1,0x2,0x5,0x4,0x3,0x4,0x2,0x4,0x8,0x6,0x3,0x4,0x6]);function createVertexArray(_0x46268f){var _0x17ddb7=a662_0x4e9f24,_0x52517b=a662_0x2ba716['createVertexBuffer']({'context':_0x46268f,'typedArray':flatPositions,'usage':a662_0x96227e[_0x17ddb7(0x176)]}),_0x2ba3c3=a662_0x2ba716[_0x17ddb7(0x16d)]({'context':_0x46268f,'typedArray':flatCubeMapCoordinates,'usage':a662_0x96227e[_0x17ddb7(0x176)]}),_0x3f15fa=a662_0x2ba716[_0x17ddb7(0x182)]({'context':_0x46268f,'typedArray':indices,'usage':a662_0x96227e['STATIC_DRAW'],'indexDatatype':a662_0xdeafdf[_0x17ddb7(0x165)]}),_0x15c831=[{'index':0x0,'vertexBuffer':_0x52517b,'componentsPerAttribute':0x2,'componentDatatype':a662_0x32e285[_0x17ddb7(0x18e)]},{'index':0x1,'vertexBuffer':_0x2ba3c3,'componentsPerAttribute':0x3,'componentDatatype':a662_0x32e285[_0x17ddb7(0x18e)]}];return new a662_0x1c048d({'context':_0x46268f,'attributes':_0x15c831,'indexBuffer':_0x3f15fa});}function createUniformTexture(_0x33e5d1){return function(){return _0x33e5d1;};}function cleanupResources(_0xb56bda){var _0xf8e4ba=a662_0x4e9f24;_0xb56bda['_va']=_0xb56bda[_0xf8e4ba(0x17d)]&&_0xb56bda['_va'][_0xf8e4ba(0x191)](),_0xb56bda[_0xf8e4ba(0x169)]=_0xb56bda['_sp']&&_0xb56bda[_0xf8e4ba(0x169)][_0xf8e4ba(0x191)]();var _0x569663,_0x24388b,_0xaec3d5=_0xb56bda[_0xf8e4ba(0x166)];if(a662_0x18d3ef(_0xaec3d5)){_0x24388b=_0xaec3d5[_0xf8e4ba(0x193)];for(_0x569663=0x0;_0x569663<_0x24388b;++_0x569663){_0xaec3d5[_0x569663][_0xf8e4ba(0x191)]();}}var _0x45051d=_0xb56bda[_0xf8e4ba(0x179)];if(a662_0x18d3ef(_0x45051d)){_0x24388b=_0x45051d['length'];for(_0x569663=0x0;_0x569663<_0x24388b;++_0x569663){_0x45051d[_0x569663]['destroy']();}}_0xb56bda['_va']=undefined,_0xb56bda[_0xf8e4ba(0x169)]=undefined,_0xb56bda[_0xf8e4ba(0x166)]=undefined,_0xb56bda[_0xf8e4ba(0x17f)]=undefined,_0xb56bda[_0xf8e4ba(0x179)]=undefined;}OctahedralProjectedCubeMap[a662_0x4e9f24(0x186)]['update']=function(_0x577f6e){var _0x103cac=a662_0x4e9f24,_0x5142fa=_0x577f6e[_0x103cac(0x194)];if(!OctahedralProjectedCubeMap[_0x103cac(0x178)](_0x5142fa))return;a662_0x18d3ef(this[_0x103cac(0x180)])&&a662_0x18d3ef(this['_va'])&&cleanupResources(this);if(a662_0x18d3ef(this[_0x103cac(0x180)]))return;if(!a662_0x18d3ef(this['_texture'])&&!this['_loading']){var _0x1ff7a5=_0x5142fa[_0x103cac(0x175)]['getTexture'](this[_0x103cac(0x170)]);if(a662_0x18d3ef(_0x1ff7a5)){cleanupResources(this),this[_0x103cac(0x180)]=_0x1ff7a5,this[_0x103cac(0x181)]=this[_0x103cac(0x180)][_0x103cac(0x16a)],this[_0x103cac(0x187)]=!![],this['_readyPromise']['resolve']();return;}}var _0xe2ba21=this['_cubeMapBuffers'];if(!a662_0x18d3ef(_0xe2ba21)&&!this[_0x103cac(0x185)]){var _0xd260e7=this;a662_0xbfc595(this[_0x103cac(0x170)])['then'](function(_0x30ac46){var _0x37285a=_0x103cac;_0xd260e7['_cubeMapBuffers']=_0x30ac46,_0xd260e7[_0x37285a(0x185)]=![];})['otherwise'](this[_0x103cac(0x167)]['reject']),this[_0x103cac(0x185)]=!![];}if(!a662_0x18d3ef(this['_cubeMapBuffers']))return;var _0x517deb=[],_0x2644b3=_0xe2ba21[0x0]['positiveX']['pixelDatatype'];!a662_0x18d3ef(_0x2644b3)?_0x2644b3=_0x5142fa[_0x103cac(0x177)]?a662_0x57b437[_0x103cac(0x195)]:a662_0x57b437[_0x103cac(0x18e)]:_0x517deb[_0x103cac(0x190)](_0x103cac(0x164));var _0x374e56=a662_0x893c4a[_0x103cac(0x17a)],_0x83944=new a662_0x57dfb9({'defines':_0x517deb,'sources':[a662_0x4df68e]});this['_va']=createVertexArray(_0x5142fa),this[_0x103cac(0x169)]=a662_0x4c3346[_0x103cac(0x174)]({'context':_0x5142fa,'vertexShaderSource':a662_0x46f925,'fragmentShaderSource':_0x83944,'attributeLocations':{'position':0x0,'cubeMapCoordinates':0x1}});var _0x1ae5e5=Math[_0x103cac(0x173)](_0xe2ba21['length'],0x6);this[_0x103cac(0x181)]=_0x1ae5e5-0x1;var _0x5b99fc=this[_0x103cac(0x166)]=new Array(_0x1ae5e5),_0x114e19=this[_0x103cac(0x179)]=new Array(_0x1ae5e5),_0x3ef4be=_0xe2ba21[0x0][_0x103cac(0x18f)][_0x103cac(0x17e)]*0x2,_0x5b8737={'originalSize':function(){return _0x3ef4be;}};for(var _0x4109b2=0x0;_0x4109b2<_0x1ae5e5;++_0x4109b2){var _0x2ef84a=_0xe2ba21[_0x4109b2]['positiveY'];_0xe2ba21[_0x4109b2][_0x103cac(0x16b)]=_0xe2ba21[_0x4109b2][_0x103cac(0x163)],_0xe2ba21[_0x4109b2][_0x103cac(0x163)]=_0x2ef84a;var _0xc24db5=_0x5b99fc[_0x4109b2]=new a662_0x302056({'context':_0x5142fa,'source':_0xe2ba21[_0x4109b2],'pixelDatatype':_0x2644b3}),_0x395459=_0x5b99fc[_0x4109b2]['width']*0x2,_0x18f7a7=_0x114e19[_0x4109b2]=new a662_0xdd6be0({'context':_0x5142fa,'width':_0x395459,'height':_0x395459,'pixelDatatype':_0x2644b3,'pixelFormat':_0x374e56}),_0x7dd0b0=new a662_0x2c06fc({'vertexArray':this[_0x103cac(0x17d)],'shaderProgram':this[_0x103cac(0x169)],'uniformMap':{'cubeMap':createUniformTexture(_0xc24db5)},'outputTexture':_0x18f7a7,'persists':!![],'owner':this});_0x577f6e[_0x103cac(0x16f)][_0x103cac(0x190)](_0x7dd0b0),_0x5b8737['texture'+_0x4109b2]=createUniformTexture(_0x18f7a7);}this[_0x103cac(0x180)]=new a662_0xdd6be0({'context':_0x5142fa,'width':_0x3ef4be*1.5+0x2,'height':_0x3ef4be,'pixelDatatype':_0x2644b3,'pixelFormat':_0x374e56}),this[_0x103cac(0x180)][_0x103cac(0x16a)]=this[_0x103cac(0x181)],_0x5142fa[_0x103cac(0x175)]['addTexture'](this[_0x103cac(0x170)],this[_0x103cac(0x180)]);var _0x50b5f5=new a662_0x2c06fc({'fragmentShaderSource':a662_0x1799b5,'uniformMap':_0x5b8737,'outputTexture':this[_0x103cac(0x180)],'persists':![],'owner':this});_0x577f6e['commandList'][_0x103cac(0x190)](_0x50b5f5),this['_ready']=!![],this['_readyPromise'][_0x103cac(0x196)]();},OctahedralProjectedCubeMap[a662_0x4e9f24(0x186)][a662_0x4e9f24(0x188)]=function(){return![];},OctahedralProjectedCubeMap[a662_0x4e9f24(0x186)][a662_0x4e9f24(0x191)]=function(){var _0x5e6e5d=a662_0x4e9f24;return cleanupResources(this),this['_texture']=this[_0x5e6e5d(0x180)]&&this[_0x5e6e5d(0x180)][_0x5e6e5d(0x191)](),a662_0x47e16b(this);};export default OctahedralProjectedCubeMap;