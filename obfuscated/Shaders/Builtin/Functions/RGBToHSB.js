(function(_0x304354,_0x28b897){var _0x5d7dbc=a887_0x331e,_0x125014=_0x304354();while(!![]){try{var _0x2ec6af=parseInt(_0x5d7dbc(0x1cc))/0x1*(-parseInt(_0x5d7dbc(0x1c4))/0x2)+parseInt(_0x5d7dbc(0x1ce))/0x3*(parseInt(_0x5d7dbc(0x1cd))/0x4)+parseInt(_0x5d7dbc(0x1ca))/0x5+-parseInt(_0x5d7dbc(0x1c5))/0x6+-parseInt(_0x5d7dbc(0x1c9))/0x7*(parseInt(_0x5d7dbc(0x1c8))/0x8)+-parseInt(_0x5d7dbc(0x1c3))/0x9*(-parseInt(_0x5d7dbc(0x1cb))/0xa)+parseInt(_0x5d7dbc(0x1c6))/0xb*(parseInt(_0x5d7dbc(0x1c7))/0xc);if(_0x2ec6af===_0x28b897)break;else _0x125014['push'](_0x125014['shift']());}catch(_0x17eb7b){_0x125014['push'](_0x125014['shift']());}}}(a887_0xf070,0xe916c));function a887_0xf070(){var _0x40740c=['75cEkmsm','330228LUDtGU','225402eCvaEm','11422260gMFhFd','3135mvsPvq','85980qoUHUa','3375752omRxDO','21kHrRLd','4852155lwudXv','470tkYQEF','6oCjRHk','10172aBxHsg'];a887_0xf070=function(){return _0x40740c;};return a887_0xf070();}function a887_0x331e(_0x410b34,_0xc6559f){var _0xf07093=a887_0xf070();return a887_0x331e=function(_0x331e2b,_0x36f398){_0x331e2b=_0x331e2b-0x1c3;var _0x520c51=_0xf07093[_0x331e2b];return _0x520c51;},a887_0x331e(_0x410b34,_0xc6559f);}export default'const\x20vec4\x20K_RGB2HSB\x20=\x20vec4(0.0,\x20-1.0\x20/\x203.0,\x202.0\x20/\x203.0,\x20-1.0);\x0avec3\x20czm_RGBToHSB(vec3\x20rgb)\x0a{\x0avec4\x20p\x20=\x20mix(vec4(rgb.bg,\x20K_RGB2HSB.wz),\x20vec4(rgb.gb,\x20K_RGB2HSB.xy),\x20step(rgb.b,\x20rgb.g));\x0avec4\x20q\x20=\x20mix(vec4(p.xyw,\x20rgb.r),\x20vec4(rgb.r,\x20p.yzx),\x20step(p.x,\x20rgb.r));\x0afloat\x20d\x20=\x20q.x\x20-\x20min(q.w,\x20q.y);\x0areturn\x20vec3(abs(q.z\x20+\x20(q.w\x20-\x20q.y)\x20/\x20(6.0\x20*\x20d\x20+\x20czm_epsilon7)),\x20d\x20/\x20(q.x\x20+\x20czm_epsilon7),\x20q.x);\x0a}\x0a';