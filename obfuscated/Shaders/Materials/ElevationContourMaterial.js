var a937_0x20bc57=a937_0x402d;function a937_0x402d(_0x3e77d1,_0x14e5f9){var _0x32b83b=a937_0x32b8();return a937_0x402d=function(_0x402d8e,_0x5e385d){_0x402d8e=_0x402d8e-0xaf;var _0x2bbd06=_0x32b83b[_0x402d8e];return _0x2bbd06;},a937_0x402d(_0x3e77d1,_0x14e5f9);}function a937_0x32b8(){var _0x2a424f=['10CAIgxf','2955407ACMTse','1028672gHCuVq','1472829csBRzp','827905JKqogr','#ifdef\x20GL_OES_standard_derivatives\x0a#extension\x20GL_OES_standard_derivatives\x20:\x20enable\x0a#endif\x0auniform\x20vec4\x20color;\x0auniform\x20float\x20spacing;\x0auniform\x20float\x20width;\x0aczm_material\x20czm_getMaterial(czm_materialInput\x20materialInput)\x0a{\x0aczm_material\x20material\x20=\x20czm_getDefaultMaterial(materialInput);\x0afloat\x20distanceToContour\x20=\x20mod(materialInput.height,\x20spacing);\x0a#ifdef\x20GL_OES_standard_derivatives\x0afloat\x20dxc\x20=\x20abs(dFdx(materialInput.height));\x0afloat\x20dyc\x20=\x20abs(dFdy(materialInput.height));\x0afloat\x20dF\x20=\x20max(dxc,\x20dyc)\x20*\x20czm_pixelRatio\x20*\x20width;\x0afloat\x20alpha\x20=\x20(distanceToContour\x20<\x20dF)\x20?\x201.0\x20:\x200.0;\x0a#else\x0afloat\x20alpha\x20=\x20(distanceToContour\x20<\x20(czm_pixelRatio\x20*\x20width))\x20?\x201.0\x20:\x200.0;\x0a#endif\x0avec4\x20outColor\x20=\x20czm_gammaCorrect(vec4(color.rgb,\x20alpha\x20*\x20color.a));\x0amaterial.diffuse\x20=\x20outColor.rgb;\x0amaterial.alpha\x20=\x20outColor.a;\x0areturn\x20material;\x0a}\x0a','1565684YpoKNr','762288ezIyhe','21838aqgZXv'];a937_0x32b8=function(){return _0x2a424f;};return a937_0x32b8();}(function(_0x2783f8,_0x436bac){var _0x59684d=a937_0x402d,_0x2ed2fd=_0x2783f8();while(!![]){try{var _0x46026c=parseInt(_0x59684d(0xb3))/0x1+-parseInt(_0x59684d(0xb7))/0x2+-parseInt(_0x59684d(0xb2))/0x3+parseInt(_0x59684d(0xb5))/0x4+-parseInt(_0x59684d(0xaf))/0x5*(-parseInt(_0x59684d(0xb6))/0x6)+-parseInt(_0x59684d(0xb0))/0x7+-parseInt(_0x59684d(0xb1))/0x8;if(_0x46026c===_0x436bac)break;else _0x2ed2fd['push'](_0x2ed2fd['shift']());}catch(_0x561984){_0x2ed2fd['push'](_0x2ed2fd['shift']());}}}(a937_0x32b8,0x66ba7));export default a937_0x20bc57(0xb4);