function a943_0x1411(){var _0x2465c4=['2GGCmYa','6196059BaWbui','379148ENbqYS','45562KXiRHU','852nMySuD','8EwOKht','uniform\x20vec4\x20color;\x0auniform\x20vec4\x20gapColor;\x0auniform\x20float\x20dashLength;\x0auniform\x20float\x20dashPattern;\x0avarying\x20float\x20v_polylineAngle;\x0aconst\x20float\x20maskLength\x20=\x2016.0;\x0amat2\x20rotate(float\x20rad)\x20{\x0afloat\x20c\x20=\x20cos(rad);\x0afloat\x20s\x20=\x20sin(rad);\x0areturn\x20mat2(\x0ac,\x20s,\x0a-s,\x20c\x0a);\x0a}\x0aczm_material\x20czm_getMaterial(czm_materialInput\x20materialInput)\x0a{\x0aczm_material\x20material\x20=\x20czm_getDefaultMaterial(materialInput);\x0avec2\x20pos\x20=\x20rotate(v_polylineAngle)\x20*\x20gl_FragCoord.xy;\x0afloat\x20dashPosition\x20=\x20fract(pos.x\x20/\x20(dashLength\x20*\x20czm_pixelRatio));\x0afloat\x20maskIndex\x20=\x20floor(dashPosition\x20*\x20maskLength);\x0afloat\x20maskTest\x20=\x20floor(dashPattern\x20/\x20pow(2.0,\x20maskIndex));\x0avec4\x20fragColor\x20=\x20(mod(maskTest,\x202.0)\x20<\x201.0)\x20?\x20gapColor\x20:\x20color;\x0aif\x20(fragColor.a\x20<\x200.005)\x20{\x0adiscard;\x0a}\x0afragColor\x20=\x20czm_gammaCorrect(fragColor);\x0amaterial.emission\x20=\x20fragColor.rgb;\x0amaterial.alpha\x20=\x20fragColor.a;\x0areturn\x20material;\x0a}\x0a','7864990sDLuQV','7eJXZGh','64065nRjnRI','25zZMFVs','295117BTKEYO','2632236LTExZd'];a943_0x1411=function(){return _0x2465c4;};return a943_0x1411();}var a943_0x21edca=a943_0x21c6;(function(_0x436ada,_0xa7d866){var _0x465091=a943_0x21c6,_0x226f11=_0x436ada();while(!![]){try{var _0x98c13d=-parseInt(_0x465091(0xdd))/0x1*(-parseInt(_0x465091(0xdf))/0x2)+-parseInt(_0x465091(0xdb))/0x3+-parseInt(_0x465091(0xe1))/0x4*(parseInt(_0x465091(0xdc))/0x5)+-parseInt(_0x465091(0xde))/0x6*(-parseInt(_0x465091(0xda))/0x7)+parseInt(_0x465091(0xd7))/0x8*(parseInt(_0x465091(0xe0))/0x9)+-parseInt(_0x465091(0xd9))/0xa+parseInt(_0x465091(0xe2))/0xb*(parseInt(_0x465091(0xd6))/0xc);if(_0x98c13d===_0xa7d866)break;else _0x226f11['push'](_0x226f11['shift']());}catch(_0x8baa1c){_0x226f11['push'](_0x226f11['shift']());}}}(a943_0x1411,0x6a187));function a943_0x21c6(_0xdf0971,_0x3db706){var _0x14117b=a943_0x1411();return a943_0x21c6=function(_0x21c63b,_0x1dabaf){_0x21c63b=_0x21c63b-0xd6;var _0xb96ed=_0x14117b[_0x21c63b];return _0xb96ed;},a943_0x21c6(_0xdf0971,_0x3db706);}export default a943_0x21edca(0xd8);