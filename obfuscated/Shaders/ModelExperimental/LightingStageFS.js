var a960_0x2bcfe1=a960_0x8649;function a960_0x8649(_0x49ae4e,_0x3736a3){var _0x23c4cb=a960_0x23c4();return a960_0x8649=function(_0x8649e9,_0x29235b){_0x8649e9=_0x8649e9-0x155;var _0x49d6f1=_0x23c4cb[_0x8649e9];return _0x49d6f1;},a960_0x8649(_0x49ae4e,_0x3736a3);}function a960_0x23c4(){var _0xf66146=['362oohaeL','4561tXniKx','5HMTImg','5558622XKEiFc','4013320WgHVNG','vec3\x20LINEARtoSRGB(vec3\x20linearIn)\x0a{\x0a#ifndef\x20HDR\x0areturn\x20pow(linearIn,\x20vec3(1.0/2.2));\x0a#else\x0areturn\x20linearIn;\x0a#endif\x0a}\x0a#ifdef\x20LIGHTING_PBR\x0avec3\x20applyTonemapping(vec3\x20linearIn)\x0a{\x0a#ifndef\x20HDR\x0areturn\x20czm_acesTonemapping(linearIn);\x0a#else\x0areturn\x20linearIn;\x0a#endif\x0a}\x0avec3\x20computePbrLighting(czm_modelMaterial\x20inputMaterial)\x0a{\x0aczm_pbrParameters\x20pbrParameters;\x0apbrParameters.diffuseColor\x20=\x20inputMaterial.diffuse;\x0apbrParameters.f0\x20=\x20inputMaterial.specular;\x0apbrParameters.roughness\x20=\x20inputMaterial.roughness;\x0avec3\x20lightColorHdr\x20=\x20czm_lightColorHdr;\x0avec3\x20color\x20=\x20inputMaterial.diffuse;\x0a#ifdef\x20HAS_NORMALS\x0acolor\x20=\x20czm_pbrLighting(\x0av_positionEC,\x0ainputMaterial.normalEC,\x0aczm_lightDirectionEC,\x0alightColorHdr,\x0apbrParameters\x0a);\x0a#endif\x0acolor\x20*=\x20inputMaterial.occlusion;\x0acolor\x20+=\x20inputMaterial.emissive;\x0acolor\x20=\x20applyTonemapping(color);\x0areturn\x20color;\x0a}\x0a#endif\x0avoid\x20lightingStage(inout\x20czm_modelMaterial\x20material)\x0a{\x0avec3\x20color\x20=\x20vec3(0.0);\x0a#ifdef\x20LIGHTING_PBR\x0acolor\x20=\x20computePbrLighting(material);\x0a#else\x20//\x20unlit\x0acolor\x20=\x20material.diffuse;\x0a#endif\x0acolor\x20=\x20LINEARtoSRGB(color);\x0amaterial.diffuse\x20=\x20color;\x0a}\x0a','539483LSEeSG','508626UElwqD','5584527YtYMuJ','3570950ewYwfo','88ujfhfF'];a960_0x23c4=function(){return _0xf66146;};return a960_0x23c4();}(function(_0x293390,_0x1b1049){var _0x260d90=a960_0x8649,_0x574238=_0x293390();while(!![]){try{var _0x375fbc=parseInt(_0x260d90(0x159))/0x1*(parseInt(_0x260d90(0x158))/0x2)+-parseInt(_0x260d90(0x15f))/0x3+-parseInt(_0x260d90(0x15c))/0x4*(parseInt(_0x260d90(0x15a))/0x5)+parseInt(_0x260d90(0x15b))/0x6+parseInt(_0x260d90(0x15e))/0x7*(-parseInt(_0x260d90(0x157))/0x8)+parseInt(_0x260d90(0x155))/0x9+parseInt(_0x260d90(0x156))/0xa;if(_0x375fbc===_0x1b1049)break;else _0x574238['push'](_0x574238['shift']());}catch(_0x3aaddf){_0x574238['push'](_0x574238['shift']());}}}(a960_0x23c4,0xad151));export default a960_0x2bcfe1(0x15d);