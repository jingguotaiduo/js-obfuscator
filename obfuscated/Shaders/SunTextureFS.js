function a1013_0xf4dd(_0xd249f5,_0xe80ff1){var _0x49bd5f=a1013_0x49bd();return a1013_0xf4dd=function(_0xf4dd20,_0x470315){_0xf4dd20=_0xf4dd20-0x16f;var _0x2c268d=_0x49bd5f[_0xf4dd20];return _0x2c268d;},a1013_0xf4dd(_0xd249f5,_0xe80ff1);}var a1013_0x1c440c=a1013_0xf4dd;(function(_0x58a9c7,_0x1b88f2){var _0x3cf6a9=a1013_0xf4dd,_0x4e8bfe=_0x58a9c7();while(!![]){try{var _0x322bd0=parseInt(_0x3cf6a9(0x178))/0x1*(parseInt(_0x3cf6a9(0x16f))/0x2)+-parseInt(_0x3cf6a9(0x172))/0x3+parseInt(_0x3cf6a9(0x175))/0x4*(-parseInt(_0x3cf6a9(0x176))/0x5)+-parseInt(_0x3cf6a9(0x174))/0x6+-parseInt(_0x3cf6a9(0x17a))/0x7*(-parseInt(_0x3cf6a9(0x179))/0x8)+parseInt(_0x3cf6a9(0x173))/0x9+parseInt(_0x3cf6a9(0x177))/0xa*(parseInt(_0x3cf6a9(0x170))/0xb);if(_0x322bd0===_0x1b88f2)break;else _0x4e8bfe['push'](_0x4e8bfe['shift']());}catch(_0x2102c6){_0x4e8bfe['push'](_0x4e8bfe['shift']());}}}(a1013_0x49bd,0x30bdf));export default a1013_0x1c440c(0x171);function a1013_0x49bd(){var _0x15dc03=['126354agRLxl','4400ktaNEM','uniform\x20float\x20u_radiusTS;\x0avarying\x20vec2\x20v_textureCoordinates;\x0avec2\x20rotate(vec2\x20p,\x20vec2\x20direction)\x0a{\x0areturn\x20vec2(p.x\x20*\x20direction.x\x20-\x20p.y\x20*\x20direction.y,\x20p.x\x20*\x20direction.y\x20+\x20p.y\x20*\x20direction.x);\x0a}\x0avec4\x20addBurst(vec2\x20position,\x20vec2\x20direction,\x20float\x20lengthScalar)\x0a{\x0avec2\x20rotatedPosition\x20=\x20rotate(position,\x20direction)\x20*\x20vec2(25.0,\x200.75);\x0afloat\x20radius\x20=\x20length(rotatedPosition)\x20*\x20lengthScalar;\x0afloat\x20burst\x20=\x201.0\x20-\x20smoothstep(0.0,\x200.55,\x20radius);\x0areturn\x20vec4(burst);\x0a}\x0avoid\x20main()\x0a{\x0afloat\x20lengthScalar\x20=\x202.0\x20/\x20sqrt(2.0);\x0avec2\x20position\x20=\x20v_textureCoordinates\x20-\x20vec2(0.5);\x0afloat\x20radius\x20=\x20length(position)\x20*\x20lengthScalar;\x0afloat\x20surface\x20=\x20step(radius,\x20u_radiusTS);\x0avec4\x20color\x20=\x20vec4(vec2(1.0),\x20surface\x20+\x200.2,\x20surface);\x0afloat\x20glow\x20=\x201.0\x20-\x20smoothstep(0.0,\x200.55,\x20radius);\x0acolor.ba\x20+=\x20mix(vec2(0.0),\x20vec2(1.0),\x20glow)\x20*\x200.75;\x0avec4\x20burst\x20=\x20vec4(0.0);\x0aburst\x20+=\x200.4\x20*\x20addBurst(position,\x20vec2(0.38942,\x20\x200.92106),\x20lengthScalar);\x0aburst\x20+=\x200.4\x20*\x20addBurst(position,\x20vec2(0.99235,\x20\x200.12348),\x20lengthScalar);\x0aburst\x20+=\x200.4\x20*\x20addBurst(position,\x20vec2(0.60327,\x20-0.79754),\x20lengthScalar);\x0aburst\x20+=\x200.3\x20*\x20addBurst(position,\x20vec2(0.31457,\x20\x200.94924),\x20lengthScalar);\x0aburst\x20+=\x200.3\x20*\x20addBurst(position,\x20vec2(0.97931,\x20\x200.20239),\x20lengthScalar);\x0aburst\x20+=\x200.3\x20*\x20addBurst(position,\x20vec2(0.66507,\x20-0.74678),\x20lengthScalar);\x0acolor\x20+=\x20clamp(burst,\x20vec4(0.0),\x20vec4(1.0))\x20*\x200.15;\x0agl_FragColor\x20=\x20clamp(color,\x20vec4(0.0),\x20vec4(1.0));\x0a}\x0a','739851tUVRUT','3103794MXvAPg','1543866YdTNqi','78712JWRwrL','100xgiMaA','3840lqiDpa','6MwrxHm','8tnhXED','1537249YelwbS'];a1013_0x49bd=function(){return _0x15dc03;};return a1013_0x49bd();}