function a877_0x183c(_0x4ef86a,_0x1686db){var _0x375a78=a877_0x375a();return a877_0x183c=function(_0x183c99,_0x2004d5){_0x183c99=_0x183c99-0x189;var _0x12a87b=_0x375a78[_0x183c99];return _0x12a87b;},a877_0x183c(_0x4ef86a,_0x1686db);}var a877_0x250d49=a877_0x183c;(function(_0x5d14d8,_0xec4771){var _0x170476=a877_0x183c,_0x4b1ab7=_0x5d14d8();while(!![]){try{var _0x50904b=parseInt(_0x170476(0x189))/0x1*(-parseInt(_0x170476(0x18b))/0x2)+parseInt(_0x170476(0x190))/0x3+-parseInt(_0x170476(0x18e))/0x4*(-parseInt(_0x170476(0x18c))/0x5)+-parseInt(_0x170476(0x195))/0x6*(-parseInt(_0x170476(0x18a))/0x7)+parseInt(_0x170476(0x192))/0x8*(parseInt(_0x170476(0x194))/0x9)+-parseInt(_0x170476(0x191))/0xa+parseInt(_0x170476(0x193))/0xb*(-parseInt(_0x170476(0x18d))/0xc);if(_0x50904b===_0xec4771)break;else _0x4b1ab7['push'](_0x4b1ab7['shift']());}catch(_0x5b309e){_0x4b1ab7['push'](_0x4b1ab7['shift']());}}}(a877_0x375a,0x1d127));export default a877_0x250d49(0x18f);function a877_0x375a(){var _0x39446e=['1212NMUCKa','216wuPASq','vec3\x20lambertianDiffuse(vec3\x20diffuseColor)\x0a{\x0areturn\x20diffuseColor\x20/\x20czm_pi;\x0a}\x0avec3\x20fresnelSchlick2(vec3\x20f0,\x20vec3\x20f90,\x20float\x20VdotH)\x0a{\x0areturn\x20f0\x20+\x20(f90\x20-\x20f0)\x20*\x20pow(clamp(1.0\x20-\x20VdotH,\x200.0,\x201.0),\x205.0);\x0a}\x0afloat\x20smithVisibilityG1(float\x20NdotV,\x20float\x20roughness)\x0a{\x0afloat\x20k\x20=\x20(roughness\x20+\x201.0)\x20*\x20(roughness\x20+\x201.0)\x20/\x208.0;\x0areturn\x20NdotV\x20/\x20(NdotV\x20*\x20(1.0\x20-\x20k)\x20+\x20k);\x0a}\x0afloat\x20smithVisibilityGGX(float\x20roughness,\x20float\x20NdotL,\x20float\x20NdotV)\x0a{\x0areturn\x20(\x0asmithVisibilityG1(NdotL,\x20roughness)\x20*\x0asmithVisibilityG1(NdotV,\x20roughness)\x0a);\x0a}\x0afloat\x20GGX(float\x20roughness,\x20float\x20NdotH)\x0a{\x0afloat\x20roughnessSquared\x20=\x20roughness\x20*\x20roughness;\x0afloat\x20f\x20=\x20(NdotH\x20*\x20roughnessSquared\x20-\x20NdotH)\x20*\x20NdotH\x20+\x201.0;\x0areturn\x20roughnessSquared\x20/\x20(czm_pi\x20*\x20f\x20*\x20f);\x0a}\x0avec3\x20czm_pbrLighting(\x0avec3\x20positionEC,\x0avec3\x20normalEC,\x0avec3\x20lightDirectionEC,\x0avec3\x20lightColorHdr,\x0aczm_pbrParameters\x20pbrParameters\x0a)\x0a{\x0avec3\x20v\x20=\x20-normalize(positionEC);\x0avec3\x20l\x20=\x20normalize(lightDirectionEC);\x0avec3\x20h\x20=\x20normalize(v\x20+\x20l);\x0avec3\x20n\x20=\x20normalEC;\x0afloat\x20NdotL\x20=\x20clamp(dot(n,\x20l),\x200.001,\x201.0);\x0afloat\x20NdotV\x20=\x20abs(dot(n,\x20v))\x20+\x200.001;\x0afloat\x20NdotH\x20=\x20clamp(dot(n,\x20h),\x200.0,\x201.0);\x0afloat\x20LdotH\x20=\x20clamp(dot(l,\x20h),\x200.0,\x201.0);\x0afloat\x20VdotH\x20=\x20clamp(dot(v,\x20h),\x200.0,\x201.0);\x0avec3\x20f0\x20=\x20pbrParameters.f0;\x0afloat\x20reflectance\x20=\x20max(max(f0.r,\x20f0.g),\x20f0.b);\x0avec3\x20f90\x20=\x20vec3(clamp(reflectance\x20*\x2025.0,\x200.0,\x201.0));\x0avec3\x20F\x20=\x20fresnelSchlick2(f0,\x20f90,\x20VdotH);\x0afloat\x20alpha\x20=\x20pbrParameters.roughness;\x0afloat\x20G\x20=\x20smithVisibilityGGX(alpha,\x20NdotL,\x20NdotV);\x0afloat\x20D\x20=\x20GGX(alpha,\x20NdotH);\x0avec3\x20specularContribution\x20=\x20F\x20*\x20G\x20*\x20D\x20/\x20(4.0\x20*\x20NdotL\x20*\x20NdotV);\x0avec3\x20diffuseColor\x20=\x20pbrParameters.diffuseColor;\x0avec3\x20diffuseContribution\x20=\x20(1.0\x20-\x20F)\x20*\x20lambertianDiffuse(diffuseColor);\x0areturn\x20(diffuseContribution\x20+\x20specularContribution)\x20*\x20NdotL\x20*\x20lightColorHdr;\x0a}\x0a','112815EIbxeh','170620hVerxP','10456aghlpq','23320DknUKa','639tKltXS','6312UPwKzD','19SKEqzE','1008NPQTRT','8986gmhhMb','14235oIvTBw'];a877_0x375a=function(){return _0x39446e;};return a877_0x375a();}