(function(_0x2aad58,_0x45f162){var _0xf3c3d2=a948_0x3245,_0x1366b4=_0x2aad58();while(!![]){try{var _0x4998f4=-parseInt(_0xf3c3d2(0x1c7))/0x1*(parseInt(_0xf3c3d2(0x1c2))/0x2)+-parseInt(_0xf3c3d2(0x1c5))/0x3+-parseInt(_0xf3c3d2(0x1c1))/0x4+parseInt(_0xf3c3d2(0x1c4))/0x5*(parseInt(_0xf3c3d2(0x1c9))/0x6)+parseInt(_0xf3c3d2(0x1c0))/0x7*(-parseInt(_0xf3c3d2(0x1c8))/0x8)+parseInt(_0xf3c3d2(0x1c6))/0x9+parseInt(_0xf3c3d2(0x1c3))/0xa;if(_0x4998f4===_0x45f162)break;else _0x1366b4['push'](_0x1366b4['shift']());}catch(_0x5f2357){_0x1366b4['push'](_0x1366b4['shift']());}}}(a948_0x253f,0xb24c5));export default'uniform\x20vec4\x20evenColor;\x0auniform\x20vec4\x20oddColor;\x0auniform\x20float\x20offset;\x0auniform\x20float\x20repeat;\x0auniform\x20bool\x20horizontal;\x0aczm_material\x20czm_getMaterial(czm_materialInput\x20materialInput)\x0a{\x0aczm_material\x20material\x20=\x20czm_getDefaultMaterial(materialInput);\x0afloat\x20coord\x20=\x20mix(materialInput.st.s,\x20materialInput.st.t,\x20float(horizontal));\x0afloat\x20value\x20=\x20fract((coord\x20-\x20offset)\x20*\x20(repeat\x20*\x200.5));\x0afloat\x20dist\x20=\x20min(value,\x20min(abs(value\x20-\x200.5),\x201.0\x20-\x20value));\x0avec4\x20currentColor\x20=\x20mix(evenColor,\x20oddColor,\x20step(0.5,\x20value));\x0avec4\x20color\x20=\x20czm_antialias(evenColor,\x20oddColor,\x20currentColor,\x20dist);\x0acolor\x20=\x20czm_gammaCorrect(color);\x0amaterial.diffuse\x20=\x20color.rgb;\x0amaterial.alpha\x20=\x20color.a;\x0areturn\x20material;\x0a}\x0a';function a948_0x3245(_0x4ab63f,_0x4da580){var _0x253f1c=a948_0x253f();return a948_0x3245=function(_0x324594,_0x9a6ccb){_0x324594=_0x324594-0x1c0;var _0x48bb29=_0x253f1c[_0x324594];return _0x48bb29;},a948_0x3245(_0x4ab63f,_0x4da580);}function a948_0x253f(){var _0x242835=['6oHxdJQ','3286234DpbtrO','3510992uqJLBD','122102YtAGKa','14925440GRQTuR','6077470YMDGjc','2830401dLFqhK','9959499CFIcce','13ZBgXYB','8XCbRJA'];a948_0x253f=function(){return _0x242835;};return a948_0x253f();}