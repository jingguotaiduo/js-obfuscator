function a964_0x1506(_0x2ba715,_0x37e854){var _0x5d78fc=a964_0x5d78();return a964_0x1506=function(_0x15063d,_0x12ca63){_0x15063d=_0x15063d-0x124;var _0x4b0dcd=_0x5d78fc[_0x15063d];return _0x4b0dcd;},a964_0x1506(_0x2ba715,_0x37e854);}var a964_0x1af71a=a964_0x1506;function a964_0x5d78(){var _0x4005b2=['precision\x20highp\x20float;\x0aczm_modelVertexOutput\x20defaultVertexOutput(vec3\x20positionMC)\x20{\x0aczm_modelVertexOutput\x20vsOutput;\x0avsOutput.positionMC\x20=\x20positionMC;\x0avsOutput.pointSize\x20=\x201.0;\x0areturn\x20vsOutput;\x0a}\x0avoid\x20main()\x0a{\x0aProcessedAttributes\x20attributes;\x0ainitializeAttributes(attributes);\x0a#ifdef\x20USE_DEQUANTIZATION\x0adequantizationStage(attributes);\x0a#endif\x0a#ifdef\x20HAS_INSTANCING\x0ainstancingStage(attributes.positionMC);\x0a#ifdef\x20USE_PICKING\x0av_pickColor\x20=\x20a_pickColor;\x0a#endif\x0a#endif\x0a#if\x20defined(HAS_FEATURES)\x20&&\x20defined(FEATURE_ID_ATTRIBUTE)\x0aFeature\x20feature;\x0afeatureStage(feature);\x0acpuStylingStage(attributes.positionMC,\x20feature);\x0aupdateFeatureStruct(feature);\x0a#endif\x0a#ifdef\x20HAS_CUSTOM_VERTEX_SHADER\x0aczm_modelVertexOutput\x20vsOutput\x20=\x20defaultVertexOutput(attributes.positionMC);\x0acustomShaderStage(vsOutput,\x20attributes);\x0a#endif\x0ageometryStage(attributes);\x0a#ifdef\x20PRIMITIVE_TYPE_POINTS\x0a#ifdef\x20HAS_CUSTOM_VERTEX_SHADER\x0agl_PointSize\x20=\x20vsOutput.pointSize;\x0a#else\x0agl_PointSize\x20=\x201.0;\x0a#endif\x0a#endif\x0a}\x0a','10cpPouY','1864fWxKvu','266jovYaX','344600kqfdrZ','1108AewlrG','2638945rGMNai','5241hiimLT','305556vBnEeB','19645344RsxPRU','4266955DUCVaG'];a964_0x5d78=function(){return _0x4005b2;};return a964_0x5d78();}(function(_0x3ea755,_0x32768d){var _0x2f41a9=a964_0x1506,_0x1d148b=_0x3ea755();while(!![]){try{var _0x3d04bf=-parseInt(_0x2f41a9(0x129))/0x1*(-parseInt(_0x2f41a9(0x12b))/0x2)+parseInt(_0x2f41a9(0x12d))/0x3*(-parseInt(_0x2f41a9(0x128))/0x4)+-parseInt(_0x2f41a9(0x12c))/0x5+parseInt(_0x2f41a9(0x12e))/0x6+-parseInt(_0x2f41a9(0x125))/0x7+parseInt(_0x2f41a9(0x12a))/0x8+parseInt(_0x2f41a9(0x124))/0x9*(parseInt(_0x2f41a9(0x127))/0xa);if(_0x3d04bf===_0x32768d)break;else _0x1d148b['push'](_0x1d148b['shift']());}catch(_0x114670){_0x1d148b['push'](_0x1d148b['shift']());}}}(a964_0x5d78,0x73695));export default a964_0x1af71a(0x126);