var a493_0x4a466e=a493_0x3539;(function(_0x3bd639,_0x4c741e){var _0x2dfea6=a493_0x3539,_0x179a3a=_0x3bd639();while(!![]){try{var _0x1be32c=parseInt(_0x2dfea6(0x18d))/0x1+-parseInt(_0x2dfea6(0x199))/0x2+parseInt(_0x2dfea6(0x1af))/0x3+-parseInt(_0x2dfea6(0x193))/0x4+-parseInt(_0x2dfea6(0x196))/0x5+parseInt(_0x2dfea6(0x1ac))/0x6+parseInt(_0x2dfea6(0x1b8))/0x7;if(_0x1be32c===_0x4c741e)break;else _0x179a3a['push'](_0x179a3a['shift']());}catch(_0x531b2e){_0x179a3a['push'](_0x179a3a['shift']());}}}(a493_0x3be5,0xa38d7));import a493_0x520096 from'../Core/defined.js';import a493_0x2d9223 from'../Renderer/DrawCommand.js';import a493_0x434d99 from'../Renderer/RenderState.js';import a493_0x4cc463 from'../Renderer/ShaderSource.js';function DerivedCommand(){}var fragDepthRegex=/\bgl_FragDepthEXT\b/,discardRegex=/\bdiscard\b/;function getDepthOnlyShaderProgram(_0x188748,_0x4ee2a5){var _0xfe5ad9=a493_0x3539,_0x20e5a4=_0x188748[_0xfe5ad9(0x1b9)][_0xfe5ad9(0x18f)](_0x4ee2a5,'depthOnly');if(!a493_0x520096(_0x20e5a4)){var _0x756f8f=_0x4ee2a5[_0xfe5ad9(0x194)],_0x5b3be7=_0x4ee2a5[_0xfe5ad9(0x186)],_0x194fe1,_0x30e285=![],_0x288b31=_0x5b3be7[_0xfe5ad9(0x19f)],_0x36b07a=_0x288b31[_0xfe5ad9(0x19a)];for(_0x194fe1=0x0;_0x194fe1<_0x36b07a;++_0x194fe1){if(fragDepthRegex[_0xfe5ad9(0x1ae)](_0x288b31[_0x194fe1])||discardRegex[_0xfe5ad9(0x1ae)](_0x288b31[_0x194fe1])){_0x30e285=!![];break;}}var _0x18eec8=![],_0x39afdb=_0x5b3be7['defines'];_0x36b07a=_0x39afdb[_0xfe5ad9(0x19a)];for(_0x194fe1=0x0;_0x194fe1<_0x36b07a;++_0x194fe1){if(_0x39afdb[_0x194fe1]===_0xfe5ad9(0x1b1)){_0x18eec8=!![];break;}}var _0x431bbd;if(!_0x30e285&&!_0x18eec8)_0x431bbd='void\x20main()\x20\x0a'+_0xfe5ad9(0x1b2)+_0xfe5ad9(0x1aa)+'}\x20\x0a',_0x5b3be7=new a493_0x4cc463({'sources':[_0x431bbd]});else!_0x30e285&&_0x18eec8&&(_0x431bbd=_0xfe5ad9(0x1ab)+'#extension\x20GL_EXT_frag_depth\x20:\x20enable\x20\x0a'+_0xfe5ad9(0x187)+_0xfe5ad9(0x19d)+'{\x20\x0a'+_0xfe5ad9(0x1aa)+_0xfe5ad9(0x188)+_0xfe5ad9(0x197),_0x5b3be7=new a493_0x4cc463({'defines':[_0xfe5ad9(0x1b1)],'sources':[_0x431bbd]}));_0x20e5a4=_0x188748['shaderCache'][_0xfe5ad9(0x1c0)](_0x4ee2a5,'depthOnly',{'vertexShaderSource':_0x4ee2a5['vertexShaderSource'],'fragmentShaderSource':_0x5b3be7,'attributeLocations':_0x756f8f});}return _0x20e5a4;}function getDepthOnlyRenderState(_0x4b9846,_0x43f537){var _0x38b79c=a493_0x3539,_0x55fbf7=_0x4b9846[_0x38b79c(0x19b)],_0x1b62d1=_0x55fbf7[_0x43f537['id']];if(!a493_0x520096(_0x1b62d1)){var _0x193cb1=a493_0x434d99[_0x38b79c(0x19e)](_0x43f537);_0x193cb1[_0x38b79c(0x189)]=!![],_0x193cb1[_0x38b79c(0x1a1)]={'red':![],'green':![],'blue':![],'alpha':![]},_0x1b62d1=a493_0x434d99[_0x38b79c(0x1bb)](_0x193cb1),_0x55fbf7[_0x43f537['id']]=_0x1b62d1;}return _0x1b62d1;}DerivedCommand[a493_0x4a466e(0x1b0)]=function(_0x55118b,_0x20af30,_0x11907e,_0x2930b9){var _0x117df8=a493_0x4a466e;!a493_0x520096(_0x2930b9)&&(_0x2930b9={});var _0x2edab7,_0x189deb;return a493_0x520096(_0x2930b9[_0x117df8(0x1b6)])&&(_0x2edab7=_0x2930b9['depthOnlyCommand'][_0x117df8(0x19c)],_0x189deb=_0x2930b9[_0x117df8(0x1b6)][_0x117df8(0x1b7)]),_0x2930b9[_0x117df8(0x1b6)]=a493_0x2d9223[_0x117df8(0x192)](_0x20af30,_0x2930b9[_0x117df8(0x1b6)]),!a493_0x520096(_0x2edab7)||_0x2930b9['shaderProgramId']!==_0x20af30[_0x117df8(0x19c)]['id']?(_0x2930b9[_0x117df8(0x1b6)]['shaderProgram']=getDepthOnlyShaderProgram(_0x11907e,_0x20af30[_0x117df8(0x19c)]),_0x2930b9['depthOnlyCommand'][_0x117df8(0x1b7)]=getDepthOnlyRenderState(_0x55118b,_0x20af30[_0x117df8(0x1b7)]),_0x2930b9[_0x117df8(0x1a6)]=_0x20af30[_0x117df8(0x19c)]['id']):(_0x2930b9[_0x117df8(0x1b6)]['shaderProgram']=_0x2edab7,_0x2930b9[_0x117df8(0x1b6)][_0x117df8(0x1b7)]=_0x189deb),_0x2930b9;};function a493_0x3539(_0x29dfcb,_0x236d3f){var _0x3be570=a493_0x3be5();return a493_0x3539=function(_0x3539c3,_0x1578d9){_0x3539c3=_0x3539c3-0x186;var _0x218271=_0x3be570[_0x3539c3];return _0x218271;},a493_0x3539(_0x29dfcb,_0x236d3f);}var writeLogDepthRegex=/\s+czm_writeLogDepth\(/,vertexlogDepthRegex=/\s+czm_vertexLogDepth\(/,extensionRegex=/\s*#extension\s+GL_EXT_frag_depth\s*:\s*enable/;function a493_0x3be5(){var _0x4afcbc=['HDR','indexOf','czm_log_depth_main','createDerivedShaderProgram',';\x20\x0a','#extension\x20GL_EXT_frag_depth\x20:\x20enable\x20\x0a','fragmentShaderSource','#endif\x20\x0a\x0a','\x20\x20\x20\x20czm_writeLogDepth();\x20\x0a','depthMask','czm_non_pick_main','\x20\x20\x20\x20\x20\x20\x20\x20discard;\x20\x0a','createPickDerivedCommand','601067eElfXl','push','getDerivedShaderProgram','\x20\x20\x20\x20czm_log_depth_main();\x20\x0a','logDepth','shallowClone','1447040rGljdO','_attributeLocations','command','6368445VqCILb','}\x20\x0a','picking','734522tomsMm','length','_depthOnlyRenderStateCache','shaderProgram','void\x20main()\x20\x0a','getState','sources','\x20\x20\x20\x20if\x20(gl_FragColor.a\x20==\x200.0)\x20{\x20\x0a','colorMask','createLogDepthCommand','defines','createHdrCommand','\x20\x20\x20\x20gl_FragColor\x20=\x20','shaderProgramId','\x20\x20\x20\x20czm_vertexLogDepth();\x20\x0a','slice','LOG_DEPTH_WRITE','\x20\x20\x20\x20gl_FragColor\x20=\x20vec4(1.0);\x20\x0a','#ifdef\x20GL_EXT_frag_depth\x20\x0a','2991120AtEovm','clone','test','3089457WjAFPU','createDepthOnlyDerivedCommand','LOG_DEPTH','{\x20\x0a','pickCommand','vertexShaderSource','pick','depthOnlyCommand','renderState','3802505JiCPmo','shaderCache','replaceMain','fromCache','pickRenderStateCache'];a493_0x3be5=function(){return _0x4afcbc;};return a493_0x3be5();}function getLogDepthShaderProgram(_0x1115ca,_0x4de764){var _0x52d761=a493_0x4a466e,_0x45344b=_0x1115ca['shaderCache'][_0x52d761(0x18f)](_0x4de764,_0x52d761(0x191));if(!a493_0x520096(_0x45344b)){var _0x33e4cb=_0x4de764[_0x52d761(0x194)],_0x1450f1=_0x4de764[_0x52d761(0x1b4)][_0x52d761(0x1ad)](),_0x34e19d=_0x4de764[_0x52d761(0x186)]['clone']();_0x1450f1['defines']=a493_0x520096(_0x1450f1[_0x52d761(0x1a3)])?_0x1450f1[_0x52d761(0x1a3)][_0x52d761(0x1a8)](0x0):[],_0x1450f1[_0x52d761(0x1a3)]['push'](_0x52d761(0x1b1)),_0x34e19d[_0x52d761(0x1a3)]=a493_0x520096(_0x34e19d[_0x52d761(0x1a3)])?_0x34e19d[_0x52d761(0x1a3)][_0x52d761(0x1a8)](0x0):[],_0x34e19d['defines'][_0x52d761(0x18e)]('LOG_DEPTH');var _0x1fead9,_0x1bfefd,_0x104965=![],_0x396d5e=_0x1450f1[_0x52d761(0x19f)],_0x2bf557=_0x396d5e[_0x52d761(0x19a)];for(_0x1fead9=0x0;_0x1fead9<_0x2bf557;++_0x1fead9){if(vertexlogDepthRegex['test'](_0x396d5e[_0x1fead9])){_0x104965=!![];break;}}if(!_0x104965){for(_0x1fead9=0x0;_0x1fead9<_0x2bf557;++_0x1fead9){_0x396d5e[_0x1fead9]=a493_0x4cc463[_0x52d761(0x1ba)](_0x396d5e[_0x1fead9],_0x52d761(0x1bf));}_0x1bfefd='\x0a\x0a'+'void\x20main()\x20\x0a'+_0x52d761(0x1b2)+_0x52d761(0x190)+_0x52d761(0x1a7)+_0x52d761(0x197),_0x396d5e[_0x52d761(0x18e)](_0x1bfefd);}_0x396d5e=_0x34e19d[_0x52d761(0x19f)],_0x2bf557=_0x396d5e[_0x52d761(0x19a)],_0x104965=![];for(_0x1fead9=0x0;_0x1fead9<_0x2bf557;++_0x1fead9){writeLogDepthRegex[_0x52d761(0x1ae)](_0x396d5e[_0x1fead9])&&(_0x104965=!![]);}_0x34e19d['defines'][_0x52d761(0x1be)](_0x52d761(0x1a9))!==-0x1&&(_0x104965=!![]);var _0x1803a9=!![];for(_0x1fead9=0x0;_0x1fead9<_0x2bf557;++_0x1fead9){extensionRegex[_0x52d761(0x1ae)](_0x396d5e[_0x1fead9])&&(_0x1803a9=![]);}var _0x52a759='';_0x1803a9&&(_0x52a759+='#ifdef\x20GL_EXT_frag_depth\x20\x0a'+_0x52d761(0x1c2)+'#endif\x20\x0a\x0a');if(!_0x104965){for(_0x1fead9=0x0;_0x1fead9<_0x2bf557;_0x1fead9++){_0x396d5e[_0x1fead9]=a493_0x4cc463[_0x52d761(0x1ba)](_0x396d5e[_0x1fead9],_0x52d761(0x1bf));}_0x52a759+='\x0a'+'void\x20main()\x20\x0a'+_0x52d761(0x1b2)+_0x52d761(0x190)+'\x20\x20\x20\x20czm_writeLogDepth();\x20\x0a'+_0x52d761(0x197);}_0x396d5e[_0x52d761(0x18e)](_0x52a759),_0x45344b=_0x1115ca['shaderCache'][_0x52d761(0x1c0)](_0x4de764,_0x52d761(0x191),{'vertexShaderSource':_0x1450f1,'fragmentShaderSource':_0x34e19d,'attributeLocations':_0x33e4cb});}return _0x45344b;}DerivedCommand[a493_0x4a466e(0x1a2)]=function(_0xb4bbe0,_0x45baa2,_0x549bd7){var _0x19a220=a493_0x4a466e;!a493_0x520096(_0x549bd7)&&(_0x549bd7={});var _0x5a275d;return a493_0x520096(_0x549bd7[_0x19a220(0x195)])&&(_0x5a275d=_0x549bd7[_0x19a220(0x195)][_0x19a220(0x19c)]),_0x549bd7[_0x19a220(0x195)]=a493_0x2d9223[_0x19a220(0x192)](_0xb4bbe0,_0x549bd7[_0x19a220(0x195)]),!a493_0x520096(_0x5a275d)||_0x549bd7[_0x19a220(0x1a6)]!==_0xb4bbe0[_0x19a220(0x19c)]['id']?(_0x549bd7[_0x19a220(0x195)][_0x19a220(0x19c)]=getLogDepthShaderProgram(_0x45baa2,_0xb4bbe0[_0x19a220(0x19c)]),_0x549bd7[_0x19a220(0x1a6)]=_0xb4bbe0[_0x19a220(0x19c)]['id']):_0x549bd7[_0x19a220(0x195)][_0x19a220(0x19c)]=_0x5a275d,_0x549bd7;};function getPickShaderProgram(_0x5534a3,_0x4c0b0c,_0x2ae1d0){var _0x1df40e=a493_0x4a466e,_0x3c68f3=_0x5534a3[_0x1df40e(0x1b9)][_0x1df40e(0x18f)](_0x4c0b0c,_0x1df40e(0x1b5));if(!a493_0x520096(_0x3c68f3)){var _0x54c6b4=_0x4c0b0c[_0x1df40e(0x194)],_0x550f78=_0x4c0b0c[_0x1df40e(0x186)],_0x18618b=_0x550f78[_0x1df40e(0x19f)],_0x4a4464=_0x18618b[_0x1df40e(0x19a)],_0x368b92=_0x1df40e(0x19d)+_0x1df40e(0x1b2)+'\x20\x20\x20\x20czm_non_pick_main();\x20\x0a'+_0x1df40e(0x1a0)+_0x1df40e(0x18b)+'\x20\x20\x20\x20}\x20\x0a'+_0x1df40e(0x1a5)+_0x2ae1d0+_0x1df40e(0x1c1)+_0x1df40e(0x197),_0x55bf35=new Array(_0x4a4464+0x1);for(var _0x294c38=0x0;_0x294c38<_0x4a4464;++_0x294c38){_0x55bf35[_0x294c38]=a493_0x4cc463['replaceMain'](_0x18618b[_0x294c38],_0x1df40e(0x18a));}_0x55bf35[_0x4a4464]=_0x368b92,_0x550f78=new a493_0x4cc463({'sources':_0x55bf35,'defines':_0x550f78[_0x1df40e(0x1a3)]}),_0x3c68f3=_0x5534a3[_0x1df40e(0x1b9)][_0x1df40e(0x1c0)](_0x4c0b0c,_0x1df40e(0x1b5),{'vertexShaderSource':_0x4c0b0c['vertexShaderSource'],'fragmentShaderSource':_0x550f78,'attributeLocations':_0x54c6b4});}return _0x3c68f3;}function getPickRenderState(_0x4c35ff,_0x464488){var _0x233cc0=a493_0x4a466e,_0x17862b=_0x4c35ff[_0x233cc0(0x198)][_0x233cc0(0x1bc)],_0x10d875=_0x17862b[_0x464488['id']];if(!a493_0x520096(_0x10d875)){var _0x1d75ba=a493_0x434d99['getState'](_0x464488);_0x1d75ba['blending']['enabled']=![],_0x1d75ba[_0x233cc0(0x189)]=!![],_0x10d875=a493_0x434d99[_0x233cc0(0x1bb)](_0x1d75ba),_0x17862b[_0x464488['id']]=_0x10d875;}return _0x10d875;}DerivedCommand[a493_0x4a466e(0x18c)]=function(_0x4c6b5b,_0x5ac683,_0x5bee07,_0x5d2235){var _0x11c433=a493_0x4a466e;!a493_0x520096(_0x5d2235)&&(_0x5d2235={});var _0x451351,_0xadd47a;return a493_0x520096(_0x5d2235[_0x11c433(0x1b3)])&&(_0x451351=_0x5d2235[_0x11c433(0x1b3)][_0x11c433(0x19c)],_0xadd47a=_0x5d2235[_0x11c433(0x1b3)]['renderState']),_0x5d2235[_0x11c433(0x1b3)]=a493_0x2d9223[_0x11c433(0x192)](_0x5ac683,_0x5d2235[_0x11c433(0x1b3)]),!a493_0x520096(_0x451351)||_0x5d2235[_0x11c433(0x1a6)]!==_0x5ac683[_0x11c433(0x19c)]['id']?(_0x5d2235[_0x11c433(0x1b3)][_0x11c433(0x19c)]=getPickShaderProgram(_0x5bee07,_0x5ac683[_0x11c433(0x19c)],_0x5ac683['pickId']),_0x5d2235[_0x11c433(0x1b3)][_0x11c433(0x1b7)]=getPickRenderState(_0x4c6b5b,_0x5ac683[_0x11c433(0x1b7)]),_0x5d2235[_0x11c433(0x1a6)]=_0x5ac683[_0x11c433(0x19c)]['id']):(_0x5d2235['pickCommand']['shaderProgram']=_0x451351,_0x5d2235[_0x11c433(0x1b3)]['renderState']=_0xadd47a),_0x5d2235;};function getHdrShaderProgram(_0x1d1da8,_0xe91083){var _0x5cc453=a493_0x4a466e,_0x38a050=_0x1d1da8[_0x5cc453(0x1b9)]['getDerivedShaderProgram'](_0xe91083,_0x5cc453(0x1bd));if(!a493_0x520096(_0x38a050)){var _0xb09107=_0xe91083[_0x5cc453(0x194)],_0x6fc63f=_0xe91083[_0x5cc453(0x1b4)][_0x5cc453(0x1ad)](),_0x2aa48e=_0xe91083['fragmentShaderSource']['clone']();_0x6fc63f[_0x5cc453(0x1a3)]=a493_0x520096(_0x6fc63f['defines'])?_0x6fc63f['defines'][_0x5cc453(0x1a8)](0x0):[],_0x6fc63f[_0x5cc453(0x1a3)][_0x5cc453(0x18e)](_0x5cc453(0x1bd)),_0x2aa48e[_0x5cc453(0x1a3)]=a493_0x520096(_0x2aa48e[_0x5cc453(0x1a3)])?_0x2aa48e['defines']['slice'](0x0):[],_0x2aa48e[_0x5cc453(0x1a3)][_0x5cc453(0x18e)](_0x5cc453(0x1bd)),_0x38a050=_0x1d1da8[_0x5cc453(0x1b9)][_0x5cc453(0x1c0)](_0xe91083,_0x5cc453(0x1bd),{'vertexShaderSource':_0x6fc63f,'fragmentShaderSource':_0x2aa48e,'attributeLocations':_0xb09107});}return _0x38a050;}DerivedCommand[a493_0x4a466e(0x1a4)]=function(_0x5522e0,_0x4b995c,_0x507a3b){var _0x503aa8=a493_0x4a466e;!a493_0x520096(_0x507a3b)&&(_0x507a3b={});var _0x49afe1;return a493_0x520096(_0x507a3b[_0x503aa8(0x195)])&&(_0x49afe1=_0x507a3b[_0x503aa8(0x195)][_0x503aa8(0x19c)]),_0x507a3b[_0x503aa8(0x195)]=a493_0x2d9223[_0x503aa8(0x192)](_0x5522e0,_0x507a3b[_0x503aa8(0x195)]),!a493_0x520096(_0x49afe1)||_0x507a3b['shaderProgramId']!==_0x5522e0['shaderProgram']['id']?(_0x507a3b['command'][_0x503aa8(0x19c)]=getHdrShaderProgram(_0x4b995c,_0x5522e0['shaderProgram']),_0x507a3b[_0x503aa8(0x1a6)]=_0x5522e0[_0x503aa8(0x19c)]['id']):_0x507a3b[_0x503aa8(0x195)][_0x503aa8(0x19c)]=_0x49afe1,_0x507a3b;};export default DerivedCommand;