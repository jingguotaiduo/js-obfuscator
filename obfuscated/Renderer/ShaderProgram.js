function a405_0x314d(_0x5687fd,_0x498b0a){var _0x3c876e=a405_0x3c87();return a405_0x314d=function(_0x314d3e,_0x5c8e7d){_0x314d3e=_0x314d3e-0x15a;var _0x5ae532=_0x3c876e[_0x314d3e];return _0x5ae532;},a405_0x314d(_0x5687fd,_0x498b0a);}var a405_0x338ab4=a405_0x314d;(function(_0xb13e1a,_0x329d78){var _0x40968a=a405_0x314d,_0x3f3d5b=_0xb13e1a();while(!![]){try{var _0x4b4f88=-parseInt(_0x40968a(0x178))/0x1+-parseInt(_0x40968a(0x164))/0x2+-parseInt(_0x40968a(0x18f))/0x3*(parseInt(_0x40968a(0x1c8))/0x4)+parseInt(_0x40968a(0x189))/0x5+parseInt(_0x40968a(0x1c6))/0x6+parseInt(_0x40968a(0x162))/0x7*(parseInt(_0x40968a(0x18c))/0x8)+parseInt(_0x40968a(0x182))/0x9*(parseInt(_0x40968a(0x18d))/0xa);if(_0x4b4f88===_0x329d78)break;else _0x3f3d5b['push'](_0x3f3d5b['shift']());}catch(_0x5089ef){_0x3f3d5b['push'](_0x3f3d5b['shift']());}}}(a405_0x3c87,0xd143e));import a405_0x1e67c8 from'../Core/Check.js';import a405_0xf653ba from'../Core/defaultValue.js';import a405_0x2ae1c8 from'../Core/defined.js';import a405_0x601351 from'../Core/destroyObject.js';import a405_0x3d171a from'../Core/DeveloperError.js';import a405_0x393925 from'../Core/RuntimeError.js';import a405_0x34ad09 from'./AutomaticUniforms.js';import a405_0x178b8a from'./ContextLimits.js';import a405_0x3c4198 from'./createUniform.js';import a405_0x512d89 from'./createUniformArray.js';function a405_0x3c87(){var _0x4bd5c6=['validateProgram','getShaderInfoLog','[Cesium\x20WebGL]\x20','duplicateUniformNames','_vertexAttributes','4746318wOaGOA','samplerUniforms','14668YThPqJ','replaceShaderProgram','getActiveUniform','Translated\x20vertex\x20shader\x20source:\x0a','useProgram','ACTIVE_ATTRIBUTES','undefined','_logShaderCompilation','deleteProgram','logShaderCompilation','maximumTextureUnitIndex','\x20!=\x20','uniforms','COMPILE_STATUS','533218WDZzkt','lastIndexOf','571290IEYdJU','name','getUniform','message','replace','highpIntSupported','_setUniforms','_fragmentShaderText','shaderSource','[0]','attachShader','_manualUniforms','value','log','_duplicateUniformNames','LINK_STATUS','getTranslatedShaderSource','getProgramParameter','shaderCache','Program\x20failed\x20to\x20link.\x20\x20Link\x20log:\x20','85624RaCSzA','getValue','getShaderParameter','attributeLocations','_numberOfVertexAttributes','//#line','createShader','_gl','linkProgram','uniformsByName','225gzrVBS','getAttribLocation','size','destroy','indexOf','Vertex\x20shader\x20failed\x20to\x20compile.\x20\x20Compile\x20log:\x20','_uniformsByName','3362890dLLFFO','getProgramInfoLog','_fragmentShaderSource','48lrNKxt','152870yeRNHm','Vertex\x20shader\x20compile\x20log:\x20','879hbWKkG','Fragment\x20shader\x20compile\x20log:\x20','context','EMPTY_OBJECT','hasOwnProperty','fragmentShaderText','getUniformLocation','_debugShaders','options.context','Translated\x20fragment\x20shader\x20source:\x0a','trim','cache','defineProperties','Fragment\x20shader\x20translation\x20failed.','defined','__SPECTOR_rebuildProgram','gl_','_attributeLocations','length','_automaticUniforms','_locations','slice','type','deleteShader','releaseShaderProgram','vertexShaderSource','automaticUniforms','VALIDATE_STATUS','czm_mediump_','prototype','fromCache','Fragment\x20shader\x20failed\x20to\x20compile.\x20\x20Compile\x20log:\x20','_cachedShader','FRAGMENT_SHADER','_uniforms','compileShader','debugShaders','vertexShaderText','replaceCache','_program','Program\x20validation\x20failed.\x20\x20Program\x20info\x20log:\x20','uniform','push','getActiveAttrib','error','_vertexShaderSource','isDestroyed','Shader\x20program\x20link\x20log:\x20','VERTEX_SHADER','_vertexShaderText'];a405_0x3c87=function(){return _0x4bd5c6;};return a405_0x3c87();}var nextShaderProgramId=0x0;function ShaderProgram(_0x53ac36){var _0x40c538=a405_0x314d,_0x3dcc2c=_0x53ac36[_0x40c538(0x1b4)],_0x3e41e9=_0x53ac36[_0x40c538(0x194)];typeof spector!==_0x40c538(0x15a)&&(_0x3dcc2c=_0x3dcc2c['replace'](/^#line/gm,'//#line'),_0x3e41e9=_0x3e41e9[_0x40c538(0x168)](/^#line/gm,_0x40c538(0x17d)));var _0x128d9a=handleUniformPrecisionMismatches(_0x3dcc2c,_0x3e41e9);this[_0x40c538(0x17f)]=_0x53ac36['gl'],this[_0x40c538(0x15b)]=_0x53ac36[_0x40c538(0x15d)],this[_0x40c538(0x196)]=_0x53ac36[_0x40c538(0x1b3)],this[_0x40c538(0x1a0)]=_0x53ac36[_0x40c538(0x17b)],this[_0x40c538(0x1b6)]=undefined,this[_0x40c538(0x17c)]=undefined,this[_0x40c538(0x1c5)]=undefined,this[_0x40c538(0x188)]=undefined,this[_0x40c538(0x1b1)]=undefined,this['_automaticUniforms']=undefined,this[_0x40c538(0x16f)]=undefined,this['_duplicateUniformNames']=_0x128d9a[_0x40c538(0x1c4)],this[_0x40c538(0x1af)]=undefined,this[_0x40c538(0x15e)]=undefined,this['_vertexShaderSource']=_0x53ac36[_0x40c538(0x1a8)],this[_0x40c538(0x1c0)]=_0x53ac36['vertexShaderText'],this[_0x40c538(0x18b)]=_0x53ac36['fragmentShaderSource'],this[_0x40c538(0x16b)]=_0x128d9a[_0x40c538(0x194)],this['id']=nextShaderProgramId++;}ShaderProgram[a405_0x338ab4(0x1ad)]=function(_0x3ee2bc){var _0x3231c1=a405_0x338ab4;return _0x3ee2bc=a405_0xf653ba(_0x3ee2bc,a405_0xf653ba[_0x3231c1(0x192)]),a405_0x1e67c8[_0x3231c1(0x19d)](_0x3231c1(0x197),_0x3ee2bc[_0x3231c1(0x191)]),_0x3ee2bc['context'][_0x3231c1(0x176)]['getShaderProgram'](_0x3ee2bc);},ShaderProgram[a405_0x338ab4(0x1b5)]=function(_0x10e949){var _0x5e450c=a405_0x338ab4;return _0x10e949=a405_0xf653ba(_0x10e949,a405_0xf653ba[_0x5e450c(0x192)]),a405_0x1e67c8[_0x5e450c(0x19d)](_0x5e450c(0x197),_0x10e949['context']),_0x10e949[_0x5e450c(0x191)]['shaderCache'][_0x5e450c(0x1c9)](_0x10e949);},Object[a405_0x338ab4(0x19b)](ShaderProgram[a405_0x338ab4(0x1ac)],{'vertexShaderSource':{'get':function(){var _0x15a826=a405_0x338ab4;return this[_0x15a826(0x1bc)];}},'fragmentShaderSource':{'get':function(){return this['_fragmentShaderSource'];}},'vertexAttributes':{'get':function(){var _0x28d4ad=a405_0x338ab4;return initialize(this),this[_0x28d4ad(0x1c5)];}},'numberOfVertexAttributes':{'get':function(){var _0x10b31b=a405_0x338ab4;return initialize(this),this[_0x10b31b(0x17c)];}},'allUniforms':{'get':function(){var _0x584f06=a405_0x338ab4;return initialize(this),this[_0x584f06(0x188)];}}});function extractUniforms(_0x47cd09){var _0x75d13c=a405_0x338ab4,_0x412b11=[],_0x320d28=_0x47cd09['match'](/uniform.*?(?![^{]*})(?=[=\[;])/g);if(a405_0x2ae1c8(_0x320d28)){var _0x13e7fc=_0x320d28['length'];for(var _0x2568cc=0x0;_0x2568cc<_0x13e7fc;_0x2568cc++){var _0x226811=_0x320d28[_0x2568cc][_0x75d13c(0x199)](),_0x2fcc74=_0x226811[_0x75d13c(0x1a4)](_0x226811[_0x75d13c(0x163)]('\x20')+0x1);_0x412b11[_0x75d13c(0x1b9)](_0x2fcc74);}}return _0x412b11;}function handleUniformPrecisionMismatches(_0x5c56be,_0x591140){var _0x39e94d=a405_0x338ab4,_0x49b2f4={};if(!a405_0x178b8a['highpFloatSupported']||!a405_0x178b8a[_0x39e94d(0x169)]){var _0x36f0db,_0x4da220,_0x210023,_0x1782e9,_0x4d2cfd=extractUniforms(_0x5c56be),_0x48a65a=extractUniforms(_0x591140),_0x28c4b0=_0x4d2cfd[_0x39e94d(0x1a1)],_0x18a513=_0x48a65a[_0x39e94d(0x1a1)];for(_0x36f0db=0x0;_0x36f0db<_0x28c4b0;_0x36f0db++){for(_0x4da220=0x0;_0x4da220<_0x18a513;_0x4da220++){if(_0x4d2cfd[_0x36f0db]===_0x48a65a[_0x4da220]){_0x210023=_0x4d2cfd[_0x36f0db],_0x1782e9=_0x39e94d(0x1ab)+_0x210023;var _0x24768c=new RegExp(_0x210023+'\x5cb','g');_0x591140=_0x591140['replace'](_0x24768c,_0x1782e9),_0x49b2f4[_0x1782e9]=_0x210023;}}}}return{'fragmentShaderText':_0x591140,'duplicateUniformNames':_0x49b2f4};}var consolePrefix=a405_0x338ab4(0x1c3);function createAndLinkProgram(_0x54fda4,_0x545422){var _0x391edd=a405_0x338ab4,_0x32f3c4=_0x545422[_0x391edd(0x1c0)],_0x57f1dc=_0x545422[_0x391edd(0x16b)],_0x73b30d=_0x54fda4['createShader'](_0x54fda4[_0x391edd(0x1bf)]);_0x54fda4[_0x391edd(0x16c)](_0x73b30d,_0x32f3c4),_0x54fda4['compileShader'](_0x73b30d);var _0x40f46c=_0x54fda4[_0x391edd(0x17e)](_0x54fda4[_0x391edd(0x1b0)]);_0x54fda4['shaderSource'](_0x40f46c,_0x57f1dc),_0x54fda4[_0x391edd(0x1b2)](_0x40f46c);var _0x2aa78e=_0x54fda4['createProgram']();_0x54fda4[_0x391edd(0x16e)](_0x2aa78e,_0x73b30d),_0x54fda4[_0x391edd(0x16e)](_0x2aa78e,_0x40f46c),_0x54fda4[_0x391edd(0x1a6)](_0x73b30d),_0x54fda4[_0x391edd(0x1a6)](_0x40f46c);var _0x17abbd=_0x545422[_0x391edd(0x1a0)];if(a405_0x2ae1c8(_0x17abbd))for(var _0x418b4e in _0x17abbd){_0x17abbd[_0x391edd(0x193)](_0x418b4e)&&_0x54fda4['bindAttribLocation'](_0x2aa78e,_0x17abbd[_0x418b4e],_0x418b4e);}_0x54fda4[_0x391edd(0x180)](_0x2aa78e);var _0x21599d;if(!_0x54fda4[_0x391edd(0x175)](_0x2aa78e,_0x54fda4[_0x391edd(0x173)])){var _0xc6ca40=_0x545422[_0x391edd(0x196)];if(!_0x54fda4[_0x391edd(0x17a)](_0x40f46c,_0x54fda4[_0x391edd(0x161)])){_0x21599d=_0x54fda4[_0x391edd(0x1c2)](_0x40f46c),console['error'](consolePrefix+'Fragment\x20shader\x20compile\x20log:\x20'+_0x21599d);if(a405_0x2ae1c8(_0xc6ca40)){var _0x16be14=_0xc6ca40[_0x391edd(0x174)](_0x40f46c);_0x16be14!==''?console[_0x391edd(0x1bb)](consolePrefix+_0x391edd(0x198)+_0x16be14):console[_0x391edd(0x1bb)](consolePrefix+_0x391edd(0x19c));}_0x54fda4[_0x391edd(0x15c)](_0x2aa78e);throw new a405_0x393925(_0x391edd(0x1ae)+_0x21599d);}if(!_0x54fda4[_0x391edd(0x17a)](_0x73b30d,_0x54fda4[_0x391edd(0x161)])){_0x21599d=_0x54fda4['getShaderInfoLog'](_0x73b30d),console['error'](consolePrefix+'Vertex\x20shader\x20compile\x20log:\x20'+_0x21599d);if(a405_0x2ae1c8(_0xc6ca40)){var _0x324322=_0xc6ca40[_0x391edd(0x174)](_0x73b30d);_0x324322!==''?console[_0x391edd(0x1bb)](consolePrefix+_0x391edd(0x1cb)+_0x324322):console['error'](consolePrefix+'Vertex\x20shader\x20translation\x20failed.');}_0x54fda4[_0x391edd(0x15c)](_0x2aa78e);throw new a405_0x393925(_0x391edd(0x187)+_0x21599d);}_0x21599d=_0x54fda4[_0x391edd(0x18a)](_0x2aa78e),console['error'](consolePrefix+_0x391edd(0x1be)+_0x21599d);a405_0x2ae1c8(_0xc6ca40)&&(console[_0x391edd(0x1bb)](consolePrefix+_0x391edd(0x1cb)+_0xc6ca40[_0x391edd(0x174)](_0x73b30d)),console['error'](consolePrefix+_0x391edd(0x198)+_0xc6ca40['getTranslatedShaderSource'](_0x40f46c)));_0x54fda4['deleteProgram'](_0x2aa78e);throw new a405_0x393925(_0x391edd(0x177)+_0x21599d);}var _0x2d84ef=_0x545422['_logShaderCompilation'];return _0x2d84ef&&(_0x21599d=_0x54fda4[_0x391edd(0x1c2)](_0x73b30d),a405_0x2ae1c8(_0x21599d)&&_0x21599d[_0x391edd(0x1a1)]>0x0&&console['log'](consolePrefix+_0x391edd(0x18e)+_0x21599d)),_0x2d84ef&&(_0x21599d=_0x54fda4[_0x391edd(0x1c2)](_0x40f46c),a405_0x2ae1c8(_0x21599d)&&_0x21599d['length']>0x0&&console[_0x391edd(0x171)](consolePrefix+_0x391edd(0x190)+_0x21599d)),_0x2d84ef&&(_0x21599d=_0x54fda4[_0x391edd(0x18a)](_0x2aa78e),a405_0x2ae1c8(_0x21599d)&&_0x21599d[_0x391edd(0x1a1)]>0x0&&console[_0x391edd(0x171)](consolePrefix+_0x391edd(0x1be)+_0x21599d)),_0x2aa78e;}function findVertexAttributes(_0x174a82,_0x2b9e76,_0x26b7a0){var _0xea424b=a405_0x338ab4,_0x44d4a6={};for(var _0x59f8db=0x0;_0x59f8db<_0x26b7a0;++_0x59f8db){var _0x20e775=_0x174a82[_0xea424b(0x1ba)](_0x2b9e76,_0x59f8db),_0x4a5cac=_0x174a82[_0xea424b(0x183)](_0x2b9e76,_0x20e775[_0xea424b(0x165)]);_0x44d4a6[_0x20e775['name']]={'name':_0x20e775[_0xea424b(0x165)],'type':_0x20e775[_0xea424b(0x1a5)],'index':_0x4a5cac};}return _0x44d4a6;}function findUniforms(_0x2f6696,_0x22e7ed){var _0x466af7=a405_0x338ab4,_0x20def2={},_0x4f890a=[],_0x4c947d=[],_0x47c4d2=_0x2f6696[_0x466af7(0x175)](_0x22e7ed,_0x2f6696['ACTIVE_UNIFORMS']);for(var _0xbf9cf7=0x0;_0xbf9cf7<_0x47c4d2;++_0xbf9cf7){var _0x432339=_0x2f6696[_0x466af7(0x1ca)](_0x22e7ed,_0xbf9cf7),_0x3ed41f=_0x466af7(0x16d),_0xe47073=_0x432339['name']['indexOf'](_0x3ed41f,_0x432339[_0x466af7(0x165)][_0x466af7(0x1a1)]-_0x3ed41f[_0x466af7(0x1a1)])!==-0x1?_0x432339[_0x466af7(0x165)][_0x466af7(0x1a4)](0x0,_0x432339['name']['length']-0x3):_0x432339[_0x466af7(0x165)];if(_0xe47073['indexOf'](_0x466af7(0x19f))!==0x0){if(_0x432339['name']['indexOf']('[')<0x0){var _0x5c78cf=_0x2f6696['getUniformLocation'](_0x22e7ed,_0xe47073);if(_0x5c78cf!==null){var _0x337d18=a405_0x3c4198(_0x2f6696,_0x432339,_0xe47073,_0x5c78cf);_0x20def2[_0xe47073]=_0x337d18,_0x4f890a['push'](_0x337d18),_0x337d18['_setSampler']&&_0x4c947d[_0x466af7(0x1b9)](_0x337d18);}}else{var _0x4d63e8,_0xa5d555,_0x5d0b9e,_0x37207d,_0x4eaa1d=_0xe47073[_0x466af7(0x186)]('[');if(_0x4eaa1d>=0x0){_0x4d63e8=_0x20def2[_0xe47073[_0x466af7(0x1a4)](0x0,_0x4eaa1d)];if(!a405_0x2ae1c8(_0x4d63e8))continue;_0xa5d555=_0x4d63e8[_0x466af7(0x1a3)],_0xa5d555[_0x466af7(0x1a1)]<=0x1&&(_0x5d0b9e=_0x4d63e8[_0x466af7(0x170)],_0x37207d=_0x2f6696[_0x466af7(0x195)](_0x22e7ed,_0xe47073),_0x37207d!==null&&(_0xa5d555[_0x466af7(0x1b9)](_0x37207d),_0x5d0b9e[_0x466af7(0x1b9)](_0x2f6696[_0x466af7(0x166)](_0x22e7ed,_0x37207d))));}else{_0xa5d555=[];for(var _0x4465d5=0x0;_0x4465d5<_0x432339[_0x466af7(0x184)];++_0x4465d5){_0x37207d=_0x2f6696['getUniformLocation'](_0x22e7ed,_0xe47073+'['+_0x4465d5+']'),_0x37207d!==null&&_0xa5d555[_0x466af7(0x1b9)](_0x37207d);}_0x4d63e8=a405_0x512d89(_0x2f6696,_0x432339,_0xe47073,_0xa5d555),_0x20def2[_0xe47073]=_0x4d63e8,_0x4f890a['push'](_0x4d63e8),_0x4d63e8['_setSampler']&&_0x4c947d[_0x466af7(0x1b9)](_0x4d63e8);}}}}return{'uniformsByName':_0x20def2,'uniforms':_0x4f890a,'samplerUniforms':_0x4c947d};}function partitionUniforms(_0x3dd668,_0x205126){var _0x2975d7=a405_0x338ab4,_0x37172d=[],_0x5c5e57=[];for(var _0x222bdc in _0x205126){if(_0x205126['hasOwnProperty'](_0x222bdc)){var _0x2d7de3=_0x205126[_0x222bdc],_0x496309=_0x222bdc,_0x17c732=_0x3dd668[_0x2975d7(0x172)][_0x496309];a405_0x2ae1c8(_0x17c732)&&(_0x2d7de3[_0x2975d7(0x165)]=_0x17c732,_0x496309=_0x17c732);var _0x5ded66=a405_0x34ad09[_0x496309];a405_0x2ae1c8(_0x5ded66)?_0x37172d[_0x2975d7(0x1b9)]({'uniform':_0x2d7de3,'automaticUniform':_0x5ded66}):_0x5c5e57[_0x2975d7(0x1b9)](_0x2d7de3);}}return{'automaticUniforms':_0x37172d,'manualUniforms':_0x5c5e57};}function setSamplerUniforms(_0x2215e3,_0x461b39,_0x452885){var _0x58dd44=a405_0x338ab4;_0x2215e3[_0x58dd44(0x1cc)](_0x461b39);var _0x73890e=0x0,_0x360072=_0x452885['length'];for(var _0x3696fb=0x0;_0x3696fb<_0x360072;++_0x3696fb){_0x73890e=_0x452885[_0x3696fb]['_setSampler'](_0x73890e);}return _0x2215e3['useProgram'](null),_0x73890e;}function initialize(_0x6e049){if(a405_0x2ae1c8(_0x6e049['_program']))return;reinitialize(_0x6e049);}function reinitialize(_0x394e92){var _0x4aaf1c=a405_0x338ab4,_0x162a48=_0x394e92[_0x4aaf1c(0x1b6)],_0x4fc3b6=_0x394e92['_gl'],_0x346211=createAndLinkProgram(_0x4fc3b6,_0x394e92,_0x394e92[_0x4aaf1c(0x196)]),_0x2f5e38=_0x4fc3b6[_0x4aaf1c(0x175)](_0x346211,_0x4fc3b6[_0x4aaf1c(0x1cd)]),_0x46590e=findUniforms(_0x4fc3b6,_0x346211),_0x2a0b6b=partitionUniforms(_0x394e92,_0x46590e[_0x4aaf1c(0x181)]);_0x394e92[_0x4aaf1c(0x1b6)]=_0x346211,_0x394e92[_0x4aaf1c(0x17c)]=_0x2f5e38,_0x394e92[_0x4aaf1c(0x1c5)]=findVertexAttributes(_0x4fc3b6,_0x346211,_0x2f5e38),_0x394e92[_0x4aaf1c(0x188)]=_0x46590e[_0x4aaf1c(0x181)],_0x394e92[_0x4aaf1c(0x1b1)]=_0x46590e[_0x4aaf1c(0x160)],_0x394e92[_0x4aaf1c(0x1a2)]=_0x2a0b6b[_0x4aaf1c(0x1a9)],_0x394e92[_0x4aaf1c(0x16f)]=_0x2a0b6b['manualUniforms'],_0x394e92[_0x4aaf1c(0x15e)]=setSamplerUniforms(_0x4fc3b6,_0x346211,_0x46590e[_0x4aaf1c(0x1c7)]),_0x162a48&&_0x394e92['_gl'][_0x4aaf1c(0x15c)](_0x162a48),typeof spector!==_0x4aaf1c(0x15a)&&(_0x394e92['_program'][_0x4aaf1c(0x19e)]=function(_0x371d14,_0x5330ee,_0x140355,_0x5d5862){var _0x36a89f=_0x4aaf1c,_0x4310d3=_0x394e92['_vertexShaderText'],_0x396286=_0x394e92[_0x36a89f(0x16b)],_0x2a442a=/ ! = /g;_0x394e92['_vertexShaderText']=_0x371d14[_0x36a89f(0x168)](_0x2a442a,_0x36a89f(0x15f)),_0x394e92['_fragmentShaderText']=_0x5330ee[_0x36a89f(0x168)](_0x2a442a,_0x36a89f(0x15f));try{reinitialize(_0x394e92),_0x140355(_0x394e92[_0x36a89f(0x1b6)]);}catch(_0x238445){_0x394e92['_vertexShaderText']=_0x4310d3,_0x394e92[_0x36a89f(0x16b)]=_0x396286;var _0x38979d=/(?:Compile|Link) error: ([^]*)/,_0x46f930=_0x38979d['exec'](_0x238445['message']);_0x46f930?_0x5d5862(_0x46f930[0x1]):_0x5d5862(_0x238445[_0x36a89f(0x167)]);}});}ShaderProgram[a405_0x338ab4(0x1ac)]['_bind']=function(){var _0x4aecc6=a405_0x338ab4;initialize(this),this['_gl'][_0x4aecc6(0x1cc)](this[_0x4aecc6(0x1b6)]);},ShaderProgram['prototype'][a405_0x338ab4(0x16a)]=function(_0x5a2e9f,_0x3a504f,_0x3237fa){var _0x151ce4=a405_0x338ab4,_0xf514c7,_0x25c188;if(a405_0x2ae1c8(_0x5a2e9f)){var _0x536333=this[_0x151ce4(0x16f)];_0xf514c7=_0x536333['length'];for(_0x25c188=0x0;_0x25c188<_0xf514c7;++_0x25c188){var _0x523346=_0x536333[_0x25c188];_0x523346['value']=_0x5a2e9f[_0x523346[_0x151ce4(0x165)]]();}}var _0x2b9a45=this[_0x151ce4(0x1a2)];_0xf514c7=_0x2b9a45[_0x151ce4(0x1a1)];for(_0x25c188=0x0;_0x25c188<_0xf514c7;++_0x25c188){var _0x1564b6=_0x2b9a45[_0x25c188];_0x1564b6[_0x151ce4(0x1b8)][_0x151ce4(0x170)]=_0x1564b6['automaticUniform'][_0x151ce4(0x179)](_0x3a504f);}var _0xadd493=this['_uniforms'];_0xf514c7=_0xadd493[_0x151ce4(0x1a1)];for(_0x25c188=0x0;_0x25c188<_0xf514c7;++_0x25c188){_0xadd493[_0x25c188]['set']();}if(_0x3237fa){var _0x1ed16b=this[_0x151ce4(0x17f)],_0x2a6aa5=this[_0x151ce4(0x1b6)];_0x1ed16b[_0x151ce4(0x1c1)](_0x2a6aa5);if(!_0x1ed16b[_0x151ce4(0x175)](_0x2a6aa5,_0x1ed16b[_0x151ce4(0x1aa)]))throw new a405_0x3d171a(_0x151ce4(0x1b7)+_0x1ed16b[_0x151ce4(0x18a)](_0x2a6aa5));}},ShaderProgram[a405_0x338ab4(0x1ac)][a405_0x338ab4(0x1bd)]=function(){return![];},ShaderProgram[a405_0x338ab4(0x1ac)][a405_0x338ab4(0x185)]=function(){var _0x220e32=a405_0x338ab4;return this['_cachedShader'][_0x220e32(0x19a)][_0x220e32(0x1a7)](this),undefined;},ShaderProgram[a405_0x338ab4(0x1ac)]['finalDestroy']=function(){var _0x211954=a405_0x338ab4;return this[_0x211954(0x17f)]['deleteProgram'](this[_0x211954(0x1b6)]),a405_0x601351(this);};export default ShaderProgram;