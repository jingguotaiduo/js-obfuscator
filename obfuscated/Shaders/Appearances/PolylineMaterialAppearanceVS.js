(function(_0x40a620,_0x2ac274){var _0x589195=a788_0x3f00,_0xe7ae7a=_0x40a620();while(!![]){try{var _0x3ee681=parseInt(_0x589195(0xf2))/0x1+parseInt(_0x589195(0xeb))/0x2*(parseInt(_0x589195(0xec))/0x3)+-parseInt(_0x589195(0xf1))/0x4+parseInt(_0x589195(0xef))/0x5*(parseInt(_0x589195(0xed))/0x6)+parseInt(_0x589195(0xe9))/0x7+-parseInt(_0x589195(0xea))/0x8*(parseInt(_0x589195(0xe8))/0x9)+-parseInt(_0x589195(0xee))/0xa*(-parseInt(_0x589195(0xf0))/0xb);if(_0x3ee681===_0x2ac274)break;else _0xe7ae7a['push'](_0xe7ae7a['shift']());}catch(_0x3b9806){_0xe7ae7a['push'](_0xe7ae7a['shift']());}}}(a788_0xd2fb,0x7af23));function a788_0xd2fb(){var _0x5d6245=['514782MSprAX','10XzRDQF','10oeWxHQ','3413058vvmual','3744288sJaXDo','195314WZSCLD','6417162yrzfTA','5322793hIshTQ','8rUHLvd','4reEHvq','1072638LJldYr'];a788_0xd2fb=function(){return _0x5d6245;};return a788_0xd2fb();}function a788_0x3f00(_0x2722d5,_0xf45def){var _0xd2fbe1=a788_0xd2fb();return a788_0x3f00=function(_0x3f0026,_0x3343f4){_0x3f0026=_0x3f0026-0xe8;var _0x11e6e2=_0xd2fbe1[_0x3f0026];return _0x11e6e2;},a788_0x3f00(_0x2722d5,_0xf45def);}export default'attribute\x20vec3\x20position3DHigh;\x0aattribute\x20vec3\x20position3DLow;\x0aattribute\x20vec3\x20prevPosition3DHigh;\x0aattribute\x20vec3\x20prevPosition3DLow;\x0aattribute\x20vec3\x20nextPosition3DHigh;\x0aattribute\x20vec3\x20nextPosition3DLow;\x0aattribute\x20vec2\x20expandAndWidth;\x0aattribute\x20vec2\x20st;\x0aattribute\x20float\x20batchId;\x0avarying\x20float\x20v_width;\x0avarying\x20vec2\x20v_st;\x0avarying\x20float\x20v_polylineAngle;\x0avoid\x20main()\x0a{\x0afloat\x20expandDir\x20=\x20expandAndWidth.x;\x0afloat\x20width\x20=\x20abs(expandAndWidth.y)\x20+\x200.5;\x0abool\x20usePrev\x20=\x20expandAndWidth.y\x20<\x200.0;\x0avec4\x20p\x20=\x20czm_computePosition();\x0avec4\x20prev\x20=\x20czm_computePrevPosition();\x0avec4\x20next\x20=\x20czm_computeNextPosition();\x0afloat\x20angle;\x0avec4\x20positionWC\x20=\x20getPolylineWindowCoordinates(p,\x20prev,\x20next,\x20expandDir,\x20width,\x20usePrev,\x20angle);\x0agl_Position\x20=\x20czm_viewportOrthographic\x20*\x20positionWC;\x0av_width\x20=\x20width;\x0av_st.s\x20=\x20st.s;\x0av_st.t\x20=\x20czm_writeNonPerspective(st.t,\x20gl_Position.w);\x0av_polylineAngle\x20=\x20angle;\x0a}\x0a';