(function(_0x578fca,_0x148276){var _0x2bb178=a889_0x5b52,_0x39a1bf=_0x578fca();while(!![]){try{var _0x2fb3c4=parseInt(_0x2bb178(0x1e7))/0x1+-parseInt(_0x2bb178(0x1e8))/0x2+-parseInt(_0x2bb178(0x1ef))/0x3*(-parseInt(_0x2bb178(0x1ea))/0x4)+-parseInt(_0x2bb178(0x1e6))/0x5*(parseInt(_0x2bb178(0x1eb))/0x6)+parseInt(_0x2bb178(0x1ec))/0x7+parseInt(_0x2bb178(0x1e9))/0x8+parseInt(_0x2bb178(0x1ed))/0x9*(-parseInt(_0x2bb178(0x1ee))/0xa);if(_0x2fb3c4===_0x148276)break;else _0x39a1bf['push'](_0x39a1bf['shift']());}catch(_0x41ae84){_0x39a1bf['push'](_0x39a1bf['shift']());}}}(a889_0x3682,0x5a86b));function a889_0x5b52(_0x14c3a7,_0x2c09e0){var _0x3682e7=a889_0x3682();return a889_0x5b52=function(_0x5b5297,_0x5e6c75){_0x5b5297=_0x5b5297-0x1e6;var _0x1f5244=_0x3682e7[_0x5b5297];return _0x1f5244;},a889_0x5b52(_0x14c3a7,_0x2c09e0);}function a889_0x3682(){var _0x23c490=['9iJUMeX','12044400ZINoRw','1656363zRwCLz','535KbBaqD','563292bdfLOO','18294vQidZt','4632584QneKnX','4eSlLiJ','29886RmpQQr','2960041KkTnix'];a889_0x3682=function(){return _0x23c490;};return a889_0x3682();}export default'vec3\x20czm_RGBToXYZ(vec3\x20rgb)\x0a{\x0aconst\x20mat3\x20RGB2XYZ\x20=\x20mat3(0.4124,\x200.2126,\x200.0193,\x0a0.3576,\x200.7152,\x200.1192,\x0a0.1805,\x200.0722,\x200.9505);\x0avec3\x20xyz\x20=\x20RGB2XYZ\x20*\x20rgb;\x0avec3\x20Yxy;\x0aYxy.r\x20=\x20xyz.g;\x0afloat\x20temp\x20=\x20dot(vec3(1.0),\x20xyz);\x0aYxy.gb\x20=\x20xyz.rg\x20/\x20temp;\x0areturn\x20Yxy;\x0a}\x0a';