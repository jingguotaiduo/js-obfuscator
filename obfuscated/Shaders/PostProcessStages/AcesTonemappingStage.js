var a977_0x37df4c=a977_0x27fb;(function(_0x2306f7,_0x340e92){var _0x42a80d=a977_0x27fb,_0x19e141=_0x2306f7();while(!![]){try{var _0x57813a=parseInt(_0x42a80d(0x14c))/0x1+-parseInt(_0x42a80d(0x147))/0x2+-parseInt(_0x42a80d(0x14a))/0x3*(parseInt(_0x42a80d(0x14d))/0x4)+parseInt(_0x42a80d(0x148))/0x5*(-parseInt(_0x42a80d(0x150))/0x6)+parseInt(_0x42a80d(0x14b))/0x7*(parseInt(_0x42a80d(0x149))/0x8)+-parseInt(_0x42a80d(0x14f))/0x9*(-parseInt(_0x42a80d(0x14e))/0xa)+-parseInt(_0x42a80d(0x146))/0xb;if(_0x57813a===_0x340e92)break;else _0x19e141['push'](_0x19e141['shift']());}catch(_0x14130e){_0x19e141['push'](_0x19e141['shift']());}}}(a977_0x2022,0x85b9b));function a977_0x27fb(_0x2267f4,_0x168829){var _0x2022c8=a977_0x2022();return a977_0x27fb=function(_0x27fb7b,_0xf9b788){_0x27fb7b=_0x27fb7b-0x146;var _0x2a9613=_0x2022c8[_0x27fb7b];return _0x2a9613;},a977_0x27fb(_0x2267f4,_0x168829);}function a977_0x2022(){var _0x13135e=['uniform\x20sampler2D\x20colorTexture;\x0avarying\x20vec2\x20v_textureCoordinates;\x0a#ifdef\x20AUTO_EXPOSURE\x0auniform\x20sampler2D\x20autoExposure;\x0a#endif\x0avoid\x20main()\x0a{\x0avec4\x20fragmentColor\x20=\x20texture2D(colorTexture,\x20v_textureCoordinates);\x0avec3\x20color\x20=\x20fragmentColor.rgb;\x0a#ifdef\x20AUTO_EXPOSURE\x0acolor\x20/=\x20texture2D(autoExposure,\x20vec2(0.5)).r;\x0a#endif\x0acolor\x20=\x20czm_acesTonemapping(color);\x0acolor\x20=\x20czm_inverseGamma(color);\x0agl_FragColor\x20=\x20vec4(color,\x20fragmentColor.a);\x0a}\x0a','4525301BOqlSU','1882962WRSUMB','783905TxTfvF','8457304gktgGS','22233WYPYKy','7CpYtMF','400961DlIOgB','40hAiBOM','6733780mhTklP','9zUjwze','6OAYfgp'];a977_0x2022=function(){return _0x13135e;};return a977_0x2022();}export default a977_0x37df4c(0x151);