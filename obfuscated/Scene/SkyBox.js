var a728_0x4d828f=a728_0x2335;function a728_0x5b32(){var _0x1ec218=['show','context','MORPHING','negativeZ','string','1356YYzldv','2792500btgeOM','15004070DWrmbd','_sources','mode','renderState','POSITION_ONLY','positiveY','6190080bcpCKq','this.sources\x20is\x20required\x20and\x20must\x20have\x20positiveX,\x20negativeX,\x20positiveY,\x20negativeY,\x20positiveZ,\x20and\x20negativeZ\x20properties.','_attributeLocations','fromGeometry','_command','passes','vertexArray','shaderProgram','clone','prototype','fromCache','negativeX','_useHdr','ALPHA_BLEND','IDENTITY','createGeometry','fromDimensions','sources','positiveZ','9053532YktFiD','_cubeMap','update','uniformMap','HDR','18877lqAYEZ','positiveX','negativeY','render','8dWyjQM','317475mhjoXE','13909aFYdun','34uiqusU','this.sources\x20properties\x20must\x20all\x20be\x20the\x20same\x20type.','destroy'];a728_0x5b32=function(){return _0x1ec218;};return a728_0x5b32();}(function(_0x29cd7b,_0x2e4cab){var _0x4f77d7=a728_0x2335,_0x2d163b=_0x29cd7b();while(!![]){try{var _0x2b17f2=parseInt(_0x4f77d7(0x18f))/0x1*(parseInt(_0x4f77d7(0x196))/0x2)+parseInt(_0x4f77d7(0x194))/0x3+parseInt(_0x4f77d7(0x193))/0x4*(-parseInt(_0x4f77d7(0x19f))/0x5)+parseInt(_0x4f77d7(0x19e))/0x6*(-parseInt(_0x4f77d7(0x195))/0x7)+-parseInt(_0x4f77d7(0x1a6))/0x8+parseInt(_0x4f77d7(0x1b9))/0x9+parseInt(_0x4f77d7(0x1a0))/0xa;if(_0x2b17f2===_0x2e4cab)break;else _0x2d163b['push'](_0x2d163b['shift']());}catch(_0x3ccec1){_0x2d163b['push'](_0x2d163b['shift']());}}}(a728_0x5b32,0x90d73));import a728_0x308a3b from'../Core/BoxGeometry.js';import a728_0x3426f3 from'../Core/Cartesian3.js';import a728_0x5cb296 from'../Core/defaultValue.js';function a728_0x2335(_0x4237d9,_0x1487e3){var _0x5b320a=a728_0x5b32();return a728_0x2335=function(_0x233542,_0x2c9eb0){_0x233542=_0x233542-0x18e;var _0x1993a1=_0x5b320a[_0x233542];return _0x1993a1;},a728_0x2335(_0x4237d9,_0x1487e3);}import a728_0x4e1cd4 from'../Core/defined.js';import a728_0x1f5914 from'../Core/destroyObject.js';import a728_0x586aca from'../Core/DeveloperError.js';import a728_0x40d2cd from'../Core/GeometryPipeline.js';import a728_0x341ffd from'../Core/Matrix4.js';import a728_0x2155fb from'../Core/VertexFormat.js';import a728_0x507a26 from'../Renderer/BufferUsage.js';import a728_0x3b6589 from'../Renderer/CubeMap.js';import a728_0x52a4d0 from'../Renderer/DrawCommand.js';import a728_0x651ffc from'../Renderer/loadCubeMap.js';import a728_0xa1ed07 from'../Renderer/RenderState.js';import a728_0x432313 from'../Renderer/ShaderProgram.js';import a728_0x551519 from'../Renderer/ShaderSource.js';import a728_0xf2faa3 from'../Renderer/VertexArray.js';import a728_0x8c39a8 from'../Shaders/SkyBoxFS.js';import a728_0x2505b6 from'../Shaders/SkyBoxVS.js';import a728_0x180a90 from'./BlendingState.js';import a728_0x187a62 from'./SceneMode.js';function SkyBox(_0x2387af){var _0x43173d=a728_0x2335;this[_0x43173d(0x1b7)]=_0x2387af['sources'],this[_0x43173d(0x1a1)]=undefined,this[_0x43173d(0x199)]=a728_0x5cb296(_0x2387af[_0x43173d(0x199)],!![]),this['_command']=new a728_0x52a4d0({'modelMatrix':a728_0x341ffd[_0x43173d(0x1ae)](a728_0x341ffd[_0x43173d(0x1b4)]),'owner':this}),this['_cubeMap']=undefined,this[_0x43173d(0x1a8)]=undefined,this['_useHdr']=undefined;}SkyBox[a728_0x4d828f(0x1af)][a728_0x4d828f(0x1bb)]=function(_0x3650b1,_0x1aeee7){var _0x2f2548=a728_0x4d828f,_0x4a134e=this;if(!this[_0x2f2548(0x199)])return undefined;if(_0x3650b1[_0x2f2548(0x1a2)]!==a728_0x187a62['SCENE3D']&&_0x3650b1[_0x2f2548(0x1a2)]!==a728_0x187a62[_0x2f2548(0x19b)])return undefined;if(!_0x3650b1[_0x2f2548(0x1ab)][_0x2f2548(0x192)])return undefined;var _0x21c1a0=_0x3650b1[_0x2f2548(0x19a)];if(this[_0x2f2548(0x1a1)]!==this['sources']){this[_0x2f2548(0x1a1)]=this['sources'];var _0x2988db=this[_0x2f2548(0x1b7)];if(!a728_0x4e1cd4(_0x2988db[_0x2f2548(0x190)])||!a728_0x4e1cd4(_0x2988db[_0x2f2548(0x1b1)])||!a728_0x4e1cd4(_0x2988db[_0x2f2548(0x1a5)])||!a728_0x4e1cd4(_0x2988db['negativeY'])||!a728_0x4e1cd4(_0x2988db[_0x2f2548(0x1b8)])||!a728_0x4e1cd4(_0x2988db[_0x2f2548(0x19c)]))throw new a728_0x586aca(_0x2f2548(0x1a7));if(typeof _0x2988db['positiveX']!==typeof _0x2988db[_0x2f2548(0x1b1)]||typeof _0x2988db[_0x2f2548(0x190)]!==typeof _0x2988db['positiveY']||typeof _0x2988db[_0x2f2548(0x190)]!==typeof _0x2988db[_0x2f2548(0x191)]||typeof _0x2988db[_0x2f2548(0x190)]!==typeof _0x2988db['positiveZ']||typeof _0x2988db['positiveX']!==typeof _0x2988db[_0x2f2548(0x19c)])throw new a728_0x586aca(_0x2f2548(0x197));typeof _0x2988db[_0x2f2548(0x190)]===_0x2f2548(0x19d)?a728_0x651ffc(_0x21c1a0,this[_0x2f2548(0x1a1)])['then'](function(_0x5014ef){var _0x4d5ce6=_0x2f2548;_0x4a134e[_0x4d5ce6(0x1ba)]=_0x4a134e['_cubeMap']&&_0x4a134e[_0x4d5ce6(0x1ba)][_0x4d5ce6(0x198)](),_0x4a134e[_0x4d5ce6(0x1ba)]=_0x5014ef;}):(this[_0x2f2548(0x1ba)]=this[_0x2f2548(0x1ba)]&&this[_0x2f2548(0x1ba)]['destroy'](),this[_0x2f2548(0x1ba)]=new a728_0x3b6589({'context':_0x21c1a0,'source':_0x2988db}));}var _0x5f0943=this[_0x2f2548(0x1aa)];if(!a728_0x4e1cd4(_0x5f0943[_0x2f2548(0x1ac)])){_0x5f0943[_0x2f2548(0x1bc)]={'u_cubeMap':function(){var _0x5c8f40=_0x2f2548;return _0x4a134e[_0x5c8f40(0x1ba)];}};var _0x154779=a728_0x308a3b[_0x2f2548(0x1b5)](a728_0x308a3b[_0x2f2548(0x1b6)]({'dimensions':new a728_0x3426f3(0x2,0x2,0x2),'vertexFormat':a728_0x2155fb[_0x2f2548(0x1a4)]})),_0x2f98af=this[_0x2f2548(0x1a8)]=a728_0x40d2cd['createAttributeLocations'](_0x154779);_0x5f0943[_0x2f2548(0x1ac)]=a728_0xf2faa3[_0x2f2548(0x1a9)]({'context':_0x21c1a0,'geometry':_0x154779,'attributeLocations':_0x2f98af,'bufferUsage':a728_0x507a26['STATIC_DRAW']}),_0x5f0943[_0x2f2548(0x1a3)]=a728_0xa1ed07[_0x2f2548(0x1b0)]({'blending':a728_0x180a90[_0x2f2548(0x1b3)]});}if(!a728_0x4e1cd4(_0x5f0943[_0x2f2548(0x1ad)])||this[_0x2f2548(0x1b2)]!==_0x1aeee7){var _0x2549b8=new a728_0x551519({'defines':[_0x1aeee7?_0x2f2548(0x18e):''],'sources':[a728_0x8c39a8]});_0x5f0943[_0x2f2548(0x1ad)]=a728_0x432313[_0x2f2548(0x1b0)]({'context':_0x21c1a0,'vertexShaderSource':a728_0x2505b6,'fragmentShaderSource':_0x2549b8,'attributeLocations':this[_0x2f2548(0x1a8)]}),this['_useHdr']=_0x1aeee7;}if(!a728_0x4e1cd4(this[_0x2f2548(0x1ba)]))return undefined;return _0x5f0943;},SkyBox['prototype']['isDestroyed']=function(){return![];},SkyBox[a728_0x4d828f(0x1af)][a728_0x4d828f(0x198)]=function(){var _0x4a8fec=a728_0x4d828f,_0x500cfc=this[_0x4a8fec(0x1aa)];return _0x500cfc[_0x4a8fec(0x1ac)]=_0x500cfc[_0x4a8fec(0x1ac)]&&_0x500cfc[_0x4a8fec(0x1ac)][_0x4a8fec(0x198)](),_0x500cfc[_0x4a8fec(0x1ad)]=_0x500cfc['shaderProgram']&&_0x500cfc['shaderProgram'][_0x4a8fec(0x198)](),this[_0x4a8fec(0x1ba)]=this[_0x4a8fec(0x1ba)]&&this[_0x4a8fec(0x1ba)][_0x4a8fec(0x198)](),a728_0x1f5914(this);};export default SkyBox;