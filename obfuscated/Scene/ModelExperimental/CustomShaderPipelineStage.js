var a623_0x5a9382=a623_0x3074;(function(_0x11efd0,_0x310471){var _0xba7871=a623_0x3074,_0x23391f=_0x11efd0();while(!![]){try{var _0x6d35a=parseInt(_0xba7871(0xf1))/0x1+-parseInt(_0xba7871(0xca))/0x2*(-parseInt(_0xba7871(0xdb))/0x3)+parseInt(_0xba7871(0xd6))/0x4+-parseInt(_0xba7871(0xce))/0x5*(parseInt(_0xba7871(0xed))/0x6)+-parseInt(_0xba7871(0x113))/0x7*(-parseInt(_0xba7871(0xc6))/0x8)+parseInt(_0xba7871(0x117))/0x9+-parseInt(_0xba7871(0xe1))/0xa*(parseInt(_0xba7871(0xdc))/0xb);if(_0x6d35a===_0x310471)break;else _0x23391f['push'](_0x23391f['shift']());}catch(_0x206581){_0x23391f['push'](_0x23391f['shift']());}}}(a623_0x3083,0x27f88));import a623_0x2e73f5 from'../../Core/combine.js';import a623_0x12f87f from'../../Core/defined.js';function a623_0x3083(){var _0x11a4e6=['push','pass','STRUCT_ID_FRAGMENT_INPUT','shouldComputePositionWC','COMPUTE_POSITION_WC','getDefineName','type','varyings','FRAGMENT','376mrfdAa','TRANSLUCENT','vec4','initializeInputStructFS','6XHnnpH','enabled',',\x20disabling\x20custom\x20fragment\x20shader.','addStruct','428790XnhUMh','addDefine','variableName','uniforms',',\x20disabling\x20custom\x20vertex\x20shader','positionWC','hasOwnProperty','fsInput.attributes.positionWC\x20=\x20attributes.positionWC;','1256900slkMzQ','CustomShaderPipelineStage','fsInput.attributes.positionEC\x20=\x20attributes.positionEC;','tangentEC','vec3','63996KbxxXh','55RheDBT','addStructField','vertexShaderText','_oneTimeWarning','FragmentInput','686730bqpUVn','alphaMode','glslType','vec2(0.0)','value','initializationLines','AttributesVS','vsInput.attributes.','fsInput.attributes.','Primitive\x20is\x20missing\x20attribute\x20','vec4(1.0)','addVertexLines','12jjYTYq','addToShader','customShaderEnabled','\x20=\x20attributes.','46180TzvZes','#line\x200','replace','vec3(0.0)','STRUCT_NAME_FRAGMENT_INPUT','STRUCT_ID_VERTEX_INPUT','addVarying','addFunctionLines','CustomShaderPipelineStage.incompatiblePrimitiveVS','lightingModel','attributeFields','FUNCTION_SIGNATURE_INITIALIZE_INPUT_STRUCT_VS','customShader','BOTH','usedVariablesFragment','normalMC','Attributes','tangentMC','BLEND','FUNCTION_SIGNATURE_INITIALIZE_INPUT_STRUCT_FS','addUniform','model','void\x20initializeInputStruct(out\x20VertexInput\x20vsInput,\x20ProcessedAttributes\x20attributes)','vec3(0.0,\x201.0,\x200.0)','addFragmentLines','fragmentShaderText','concat','usedVariablesVertex','getAttributeInfo','missingAttributes','length','attributes','positionEC','attributeSet','33719JQBRHN','vertexLines','VERTEX','vec3(0.0,\x200.0,\x201.0)','250209hmoZfL','FUNCTION_ID_INITIALIZE_INPUT_STRUCT_FS','STRUCT_ID_ATTRIBUTES_FS','normalEC','VertexInput','FUNCTION_ID_INITIALIZE_INPUT_STRUCT_VS','uniformMap','STRUCT_NAME_VERTEX_INPUT','addFunction','\x20=\x20','process','shaderBuilder','initializeInputStructVS','STRUCT_NAME_ATTRIBUTES'];a623_0x3083=function(){return _0x11a4e6;};return a623_0x3083();}import a623_0x3e9abd from'../../Core/oneTimeWarning.js';import a623_0x3af12a from'../../Renderer/ShaderDestination.js';import a623_0x301312 from'../../Renderer/Pass.js';import a623_0x17faf0 from'../../Shaders/ModelExperimental/CustomShaderStageVS.js';import a623_0x50e76d from'../../Shaders/ModelExperimental/CustomShaderStageFS.js';import a623_0x245b4d from'../AlphaMode.js';import a623_0x1ec842 from'./CustomShaderMode.js';import a623_0x18ab4b from'./ModelExperimentalUtility.js';var CustomShaderPipelineStage={};CustomShaderPipelineStage['name']=a623_0x5a9382(0xd7),CustomShaderPipelineStage['STRUCT_ID_ATTRIBUTES_VS']=a623_0x5a9382(0xe7),CustomShaderPipelineStage[a623_0x5a9382(0x119)]='AttributesFS',CustomShaderPipelineStage[a623_0x5a9382(0x124)]=a623_0x5a9382(0x101),CustomShaderPipelineStage[a623_0x5a9382(0xf6)]=a623_0x5a9382(0x11b),CustomShaderPipelineStage['STRUCT_NAME_VERTEX_INPUT']=a623_0x5a9382(0x11b),CustomShaderPipelineStage[a623_0x5a9382(0x127)]=a623_0x5a9382(0xe0),CustomShaderPipelineStage[a623_0x5a9382(0xf5)]='FragmentInput',CustomShaderPipelineStage[a623_0x5a9382(0x11c)]=a623_0x5a9382(0x123),CustomShaderPipelineStage[a623_0x5a9382(0xfc)]=a623_0x5a9382(0x107),CustomShaderPipelineStage[a623_0x5a9382(0x118)]=a623_0x5a9382(0xc9),CustomShaderPipelineStage[a623_0x5a9382(0x104)]='void\x20initializeInputStruct(out\x20FragmentInput\x20fsInput,\x20ProcessedAttributes\x20attributes)',CustomShaderPipelineStage[a623_0x5a9382(0x121)]=function(_0x32802c,_0x8768b3,_0x5b3a09){var _0x1d4add=a623_0x5a9382,_0x2cb8a1=_0x32802c[_0x1d4add(0x122)],_0x5d1aad=_0x32802c[_0x1d4add(0x106)][_0x1d4add(0xfd)],_0x1ed562=generateShaderLines(_0x5d1aad,_0x8768b3);if(!_0x1ed562[_0x1d4add(0xef)])return;addLinesToShader(_0x2cb8a1,_0x5d1aad,_0x1ed562);_0x1ed562[_0x1d4add(0x128)]&&_0x2cb8a1[_0x1d4add(0xcf)](_0x1d4add(0x129),undefined,a623_0x3af12a[_0x1d4add(0xfe)]);a623_0x12f87f(_0x5d1aad[_0x1d4add(0xde)])&&_0x2cb8a1[_0x1d4add(0xcf)]('HAS_CUSTOM_VERTEX_SHADER',undefined,a623_0x3af12a[_0x1d4add(0x115)]);if(a623_0x12f87f(_0x5d1aad[_0x1d4add(0x10a)])){_0x2cb8a1[_0x1d4add(0xcf)]('HAS_CUSTOM_FRAGMENT_SHADER',undefined,a623_0x3af12a[_0x1d4add(0xc5)]);var _0x4042ee=a623_0x1ec842[_0x1d4add(0x12a)](_0x5d1aad['mode']);_0x2cb8a1[_0x1d4add(0xcf)](_0x4042ee,undefined,a623_0x3af12a[_0x1d4add(0xc5)]);}var _0x4235dd=_0x5d1aad[_0x1d4add(0xd1)];for(var _0x41031a in _0x4235dd){if(_0x4235dd[_0x1d4add(0xd4)](_0x41031a)){var _0x238085=_0x4235dd[_0x41031a];_0x2cb8a1[_0x1d4add(0x105)](_0x238085[_0x1d4add(0xc3)],_0x41031a);}}var _0x52bd8e=_0x5d1aad[_0x1d4add(0xc4)];for(var _0x355113 in _0x52bd8e){if(_0x52bd8e[_0x1d4add(0xd4)](_0x355113)){var _0x444328=_0x52bd8e[_0x355113];_0x2cb8a1[_0x1d4add(0xf7)](_0x444328,_0x355113);}}a623_0x12f87f(_0x5d1aad[_0x1d4add(0xfa)])&&(_0x32802c['lightingOptions'][_0x1d4add(0xfa)]=_0x5d1aad['lightingModel']);var _0x2308d5=_0x32802c['alphaOptions'];_0x5d1aad['isTranslucent']?(_0x2308d5[_0x1d4add(0x126)]=a623_0x301312[_0x1d4add(0xc7)],_0x2308d5[_0x1d4add(0xe2)]=a623_0x245b4d[_0x1d4add(0x103)]):(_0x2308d5[_0x1d4add(0x126)]=undefined,_0x2308d5[_0x1d4add(0xe2)]=a623_0x245b4d['OPAQUE']),_0x32802c[_0x1d4add(0x11d)]=a623_0x2e73f5(_0x32802c[_0x1d4add(0x11d)],_0x5d1aad['uniformMap']);};function getAttributesByName(_0x64b542){var _0x431dac=a623_0x5a9382,_0x5e6755={};for(var _0x3c5066=0x0;_0x3c5066<_0x64b542['length'];_0x3c5066++){var _0x3406e3=_0x64b542[_0x3c5066],_0xf6a773=a623_0x18ab4b[_0x431dac(0x10d)](_0x3406e3);_0x5e6755[_0xf6a773[_0x431dac(0xd0)]]=_0xf6a773;}return _0x5e6755;}var attributeTypeLUT={'position':a623_0x5a9382(0xda),'normal':a623_0x5a9382(0xda),'tangent':a623_0x5a9382(0xda),'bitangent':'vec3','texCoord':'vec2','color':'vec4','joints':'ivec4','weights':a623_0x5a9382(0xc8)},attributeDefaultValueLUT={'position':a623_0x5a9382(0xf4),'normal':a623_0x5a9382(0x116),'tangent':'vec3(1.0,\x200.0,\x200.0)','bitangent':a623_0x5a9382(0x108),'texCoord':a623_0x5a9382(0xe4),'color':a623_0x5a9382(0xeb),'joints':'ivec4(0)','weights':'vec4(0.0)'};function inferAttributeDefaults(_0x486fa4){var _0x1b8f95=a623_0x5a9382,_0x40f71d=_0x486fa4[_0x1b8f95(0xf3)](/_[0-9]+$/,'');_0x40f71d=_0x40f71d[_0x1b8f95(0xf3)](/(MC|EC)$/,'');var _0x530bdd=attributeTypeLUT[_0x40f71d],_0x414307=attributeDefaultValueLUT[_0x40f71d];if(!a623_0x12f87f(_0x530bdd))return undefined;return{'attributeField':[_0x530bdd,_0x486fa4],'value':_0x414307};}function generateVertexShaderLines(_0x560e55,_0x504b81,_0x3b1ca9){var _0x5d5faa=a623_0x5a9382,_0x3a23c9=partitionAttributes(_0x504b81,_0x560e55[_0x5d5faa(0x10c)]['attributeSet'],![]),_0x3643d9=_0x3a23c9[_0x5d5faa(0xee)],_0xff4f0b=_0x3a23c9['missingAttributes'],_0x34256d,_0x2c6422,_0x578b14=[],_0x1d512c=[];for(_0x34256d in _0x3643d9){if(_0x3643d9[_0x5d5faa(0xd4)](_0x34256d)){var _0x3a74ae=_0x3643d9[_0x34256d],_0x48319b=[_0x3a74ae[_0x5d5faa(0xe3)],_0x34256d];_0x578b14['push'](_0x48319b),_0x2c6422='vsInput.attributes.'+_0x34256d+_0x5d5faa(0xf0)+_0x34256d+';',_0x1d512c['push'](_0x2c6422);}}for(var _0x5eb01a=0x0;_0x5eb01a<_0xff4f0b[_0x5d5faa(0x10f)];_0x5eb01a++){_0x34256d=_0xff4f0b[_0x5eb01a];var _0x128f80=inferAttributeDefaults(_0x34256d);if(!a623_0x12f87f(_0x128f80)){CustomShaderPipelineStage[_0x5d5faa(0xdf)](_0x5d5faa(0xf9),_0x5d5faa(0xea)+_0x34256d+_0x5d5faa(0xd2));return;}_0x578b14[_0x5d5faa(0x125)](_0x128f80['attributeField']),_0x2c6422=_0x5d5faa(0xe8)+_0x34256d+_0x5d5faa(0x120)+_0x128f80[_0x5d5faa(0xe5)]+';',_0x1d512c[_0x5d5faa(0x125)](_0x2c6422);}_0x3b1ca9[_0x5d5faa(0xcb)]=!![],_0x3b1ca9[_0x5d5faa(0xfb)]=_0x578b14,_0x3b1ca9['initializationLines']=_0x1d512c;}function generatePositionBuiltins(_0x20cbe9){var _0x11d4e8=a623_0x5a9382,_0x5af6f8=[],_0x5d0081=[],_0x4cdcb8=_0x20cbe9[_0x11d4e8(0xff)][_0x11d4e8(0x112)];return _0x4cdcb8[_0x11d4e8(0xd4)](_0x11d4e8(0xd3))&&(_0x5af6f8[_0x11d4e8(0x125)]([_0x11d4e8(0xda),'positionWC']),_0x5d0081[_0x11d4e8(0x125)](_0x11d4e8(0xd5))),_0x4cdcb8[_0x11d4e8(0xd4)](_0x11d4e8(0x111))&&(_0x5af6f8[_0x11d4e8(0x125)]([_0x11d4e8(0xda),'positionEC']),_0x5d0081[_0x11d4e8(0x125)](_0x11d4e8(0xd8))),{'attributeFields':_0x5af6f8,'initializationLines':_0x5d0081};}function generateFragmentShaderLines(_0x23acde,_0x199a93,_0x1b2623){var _0x32e669=a623_0x5a9382,_0x1d3863=partitionAttributes(_0x199a93,_0x23acde['usedVariablesFragment'][_0x32e669(0x112)],!![]),_0x51b3a6=_0x1d3863['addToShader'],_0x124121=_0x1d3863[_0x32e669(0x10e)],_0x2be45f,_0xa9d0dd,_0x99cf9=[],_0x3658eb=[];for(_0x2be45f in _0x51b3a6){if(_0x51b3a6[_0x32e669(0xd4)](_0x2be45f)){var _0x13a3b4=_0x51b3a6[_0x2be45f],_0x3159fc=[_0x13a3b4[_0x32e669(0xe3)],_0x2be45f];_0x99cf9[_0x32e669(0x125)](_0x3159fc),_0xa9d0dd=_0x32e669(0xe9)+_0x2be45f+_0x32e669(0xf0)+_0x2be45f+';',_0x3658eb[_0x32e669(0x125)](_0xa9d0dd);}}for(var _0x1d6a52=0x0;_0x1d6a52<_0x124121[_0x32e669(0x10f)];_0x1d6a52++){_0x2be45f=_0x124121[_0x1d6a52];var _0xd80757=inferAttributeDefaults(_0x2be45f);if(!a623_0x12f87f(_0xd80757)){CustomShaderPipelineStage[_0x32e669(0xdf)]('CustomShaderPipelineStage.incompatiblePrimitiveFS',_0x32e669(0xea)+_0x2be45f+_0x32e669(0xcc));return;}_0x99cf9['push'](_0xd80757['attributeField']),_0xa9d0dd=_0x32e669(0xe9)+_0x2be45f+_0x32e669(0x120)+_0xd80757['value']+';',_0x3658eb[_0x32e669(0x125)](_0xa9d0dd);}var _0x3393c5=generatePositionBuiltins(_0x23acde);_0x1b2623['enabled']=!![],_0x1b2623[_0x32e669(0xfb)]=_0x99cf9['concat'](_0x3393c5[_0x32e669(0xfb)]),_0x1b2623[_0x32e669(0xe6)]=_0x3393c5[_0x32e669(0xe6)][_0x32e669(0x10b)](_0x3658eb);}var builtinAttributes={'positionWC':!![],'positionEC':!![]};function partitionAttributes(_0x48fe53,_0x4fc181,_0xd5c7a2){var _0x189977=a623_0x5a9382,_0x47b0c5,_0x288595,_0x219938={};for(_0x288595 in _0x48fe53){if(_0x48fe53[_0x189977(0xd4)](_0x288595)){var _0x106f51=_0x48fe53[_0x288595];_0x47b0c5=_0x288595;if(_0xd5c7a2&&_0x288595===_0x189977(0x100))_0x47b0c5=_0x189977(0x11a);else _0xd5c7a2&&_0x288595==='tangentMC'&&(_0x47b0c5=_0x189977(0xd9));_0x4fc181['hasOwnProperty'](_0x47b0c5)&&(_0x219938[_0x47b0c5]=_0x106f51);}}var _0x4dc9ae=[];for(_0x288595 in _0x4fc181){if(_0x4fc181[_0x189977(0xd4)](_0x288595)){if(builtinAttributes[_0x189977(0xd4)](_0x288595))continue;_0x47b0c5=_0x288595;if(_0xd5c7a2&&_0x288595===_0x189977(0x11a))_0x47b0c5='normalMC';else _0xd5c7a2&&_0x288595==='tangentEC'&&(_0x47b0c5=_0x189977(0x102));!_0x48fe53[_0x189977(0xd4)](_0x47b0c5)&&_0x4dc9ae[_0x189977(0x125)](_0x288595);}}return{'addToShader':_0x219938,'missingAttributes':_0x4dc9ae};}function generateShaderLines(_0x21613f,_0xea026a){var _0x229e37=a623_0x5a9382,_0xa19a32={'enabled':![]},_0x4c8640={'enabled':![]},_0x50fac8=getAttributesByName(_0xea026a[_0x229e37(0x110)]);a623_0x12f87f(_0x21613f['vertexShaderText'])&&generateVertexShaderLines(_0x21613f,_0x50fac8,_0xa19a32);a623_0x12f87f(_0x21613f['fragmentShaderText'])&&generateFragmentShaderLines(_0x21613f,_0x50fac8,_0x4c8640);var _0x3a7326=_0x21613f[_0x229e37(0xff)][_0x229e37(0x112)],_0xe77804=_0x3a7326[_0x229e37(0xd4)](_0x229e37(0xd3))&&_0x4c8640[_0x229e37(0xcb)];return{'vertexLines':_0xa19a32,'fragmentLines':_0x4c8640,'vertexLinesEnabled':_0xa19a32['enabled'],'fragmentLinesEnabled':_0x4c8640[_0x229e37(0xcb)],'customShaderEnabled':_0xa19a32[_0x229e37(0xcb)]||_0x4c8640['enabled'],'shouldComputePositionWC':_0xe77804};}function addVertexLinesToShader(_0x3ac11,_0x10a7d4){var _0x5aa8a9=a623_0x5a9382,_0x86afa7,_0x5bdca8=CustomShaderPipelineStage['STRUCT_ID_ATTRIBUTES_VS'];_0x3ac11['addStruct'](_0x5bdca8,CustomShaderPipelineStage[_0x5aa8a9(0x124)],a623_0x3af12a[_0x5aa8a9(0x115)]);var _0x145612=_0x10a7d4[_0x5aa8a9(0xfb)];for(_0x86afa7=0x0;_0x86afa7<_0x145612[_0x5aa8a9(0x10f)];_0x86afa7++){var _0x352138=_0x145612[_0x86afa7],_0x4bc247=_0x352138[0x0],_0x4b9660=_0x352138[0x1];_0x3ac11[_0x5aa8a9(0xdd)](_0x5bdca8,_0x4bc247,_0x4b9660);}_0x5bdca8=CustomShaderPipelineStage[_0x5aa8a9(0xf6)],_0x3ac11[_0x5aa8a9(0xcd)](_0x5bdca8,CustomShaderPipelineStage[_0x5aa8a9(0x11e)],a623_0x3af12a[_0x5aa8a9(0x115)]),_0x3ac11[_0x5aa8a9(0xdd)](_0x5bdca8,CustomShaderPipelineStage[_0x5aa8a9(0x124)],_0x5aa8a9(0x110));var _0x720cc0=CustomShaderPipelineStage[_0x5aa8a9(0x11c)];_0x3ac11['addFunction'](_0x720cc0,CustomShaderPipelineStage[_0x5aa8a9(0xfc)],a623_0x3af12a['VERTEX']);var _0x22ba2e=_0x10a7d4[_0x5aa8a9(0xe6)];_0x3ac11[_0x5aa8a9(0xf8)](_0x720cc0,_0x22ba2e);}function addFragmentLinesToShader(_0x2d2781,_0x2893ea){var _0x1e1b9c=a623_0x5a9382,_0x74d385,_0x1d7f40=CustomShaderPipelineStage[_0x1e1b9c(0x119)];_0x2d2781[_0x1e1b9c(0xcd)](_0x1d7f40,CustomShaderPipelineStage['STRUCT_NAME_ATTRIBUTES'],a623_0x3af12a[_0x1e1b9c(0xc5)]);var _0x1f8f97,_0x450afc,_0x354056,_0x4d0d14=_0x2893ea[_0x1e1b9c(0xfb)];for(_0x74d385=0x0;_0x74d385<_0x4d0d14[_0x1e1b9c(0x10f)];_0x74d385++){_0x1f8f97=_0x4d0d14[_0x74d385],_0x450afc=_0x1f8f97[0x0],_0x354056=_0x1f8f97[0x1],_0x2d2781[_0x1e1b9c(0xdd)](_0x1d7f40,_0x450afc,_0x354056);}_0x1d7f40=CustomShaderPipelineStage[_0x1e1b9c(0x127)],_0x2d2781[_0x1e1b9c(0xcd)](_0x1d7f40,CustomShaderPipelineStage['STRUCT_NAME_FRAGMENT_INPUT'],a623_0x3af12a['FRAGMENT']),_0x2d2781[_0x1e1b9c(0xdd)](_0x1d7f40,CustomShaderPipelineStage['STRUCT_NAME_ATTRIBUTES'],_0x1e1b9c(0x110));var _0xdf1890=CustomShaderPipelineStage[_0x1e1b9c(0x118)];_0x2d2781[_0x1e1b9c(0x11f)](_0xdf1890,CustomShaderPipelineStage[_0x1e1b9c(0x104)],a623_0x3af12a['FRAGMENT']);var _0x16fb38=_0x2893ea['initializationLines'];_0x2d2781[_0x1e1b9c(0xf8)](_0xdf1890,_0x16fb38);}function a623_0x3074(_0x244a4c,_0x43d913){var _0x3083ec=a623_0x3083();return a623_0x3074=function(_0x3074b8,_0x4889b0){_0x3074b8=_0x3074b8-0xc3;var _0x44c0a=_0x3083ec[_0x3074b8];return _0x44c0a;},a623_0x3074(_0x244a4c,_0x43d913);}function addLinesToShader(_0x3d0a59,_0x8ed680,_0xe8f61){var _0x5695bb=a623_0x5a9382,_0x101877=_0xe8f61[_0x5695bb(0x114)];_0x101877['enabled']&&(addVertexLinesToShader(_0x3d0a59,_0x101877),_0x3d0a59[_0x5695bb(0xec)]([_0x5695bb(0xf2),_0x8ed680[_0x5695bb(0xde)],a623_0x17faf0]));var _0x123e6e=_0xe8f61['fragmentLines'];_0x123e6e['enabled']&&(addFragmentLinesToShader(_0x3d0a59,_0x123e6e),_0x3d0a59[_0x5695bb(0x109)]([_0x5695bb(0xf2),_0x8ed680[_0x5695bb(0x10a)],a623_0x50e76d]));}CustomShaderPipelineStage[a623_0x5a9382(0xdf)]=a623_0x3e9abd;export default CustomShaderPipelineStage;