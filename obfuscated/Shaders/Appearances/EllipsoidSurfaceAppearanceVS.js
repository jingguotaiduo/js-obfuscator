(function(_0x2dbb72,_0x171117){var _0x41ab67=a782_0x4577,_0x414ae4=_0x2dbb72();while(!![]){try{var _0x187a98=-parseInt(_0x41ab67(0x140))/0x1+-parseInt(_0x41ab67(0x13c))/0x2+-parseInt(_0x41ab67(0x13f))/0x3*(parseInt(_0x41ab67(0x144))/0x4)+parseInt(_0x41ab67(0x13d))/0x5*(-parseInt(_0x41ab67(0x145))/0x6)+-parseInt(_0x41ab67(0x142))/0x7+-parseInt(_0x41ab67(0x13e))/0x8*(-parseInt(_0x41ab67(0x143))/0x9)+parseInt(_0x41ab67(0x141))/0xa;if(_0x187a98===_0x171117)break;else _0x414ae4['push'](_0x414ae4['shift']());}catch(_0x39be99){_0x414ae4['push'](_0x414ae4['shift']());}}}(a782_0x2e8b,0x5cb90));function a782_0x4577(_0x4191c2,_0x22ddcb){var _0x2e8bfd=a782_0x2e8b();return a782_0x4577=function(_0x4577ae,_0x223cef){_0x4577ae=_0x4577ae-0x13c;var _0x5854ee=_0x2e8bfd[_0x4577ae];return _0x5854ee;},a782_0x4577(_0x4191c2,_0x22ddcb);}function a782_0x2e8b(){var _0x2f1a4a=['414VvSlMa','735432alAZrl','174OeTFOt','1141352RgTOPN','125440HhJuWK','68808RnJQqi','6MthZhS','628144gUMSBy','29090010sWvpjV','4415369NNLpWD'];a782_0x2e8b=function(){return _0x2f1a4a;};return a782_0x2e8b();}export default'attribute\x20vec3\x20position3DHigh;\x0aattribute\x20vec3\x20position3DLow;\x0aattribute\x20vec2\x20st;\x0aattribute\x20float\x20batchId;\x0avarying\x20vec3\x20v_positionMC;\x0avarying\x20vec3\x20v_positionEC;\x0avarying\x20vec2\x20v_st;\x0avoid\x20main()\x0a{\x0avec4\x20p\x20=\x20czm_computePosition();\x0av_positionMC\x20=\x20position3DHigh\x20+\x20position3DLow;\x0av_positionEC\x20=\x20(czm_modelViewRelativeToEye\x20*\x20p).xyz;\x0av_st\x20=\x20st;\x0agl_Position\x20=\x20czm_modelViewProjectionRelativeToEye\x20*\x20p;\x0a}\x0a';