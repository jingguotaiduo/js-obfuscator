(function(_0x2298f2,_0x170275){var _0x4739b2=a920_0x1267,_0x54f3cc=_0x2298f2();while(!![]){try{var _0x485c8f=parseInt(_0x4739b2(0x192))/0x1*(parseInt(_0x4739b2(0x18f))/0x2)+parseInt(_0x4739b2(0x190))/0x3+parseInt(_0x4739b2(0x193))/0x4+parseInt(_0x4739b2(0x18d))/0x5+parseInt(_0x4739b2(0x195))/0x6*(-parseInt(_0x4739b2(0x194))/0x7)+parseInt(_0x4739b2(0x191))/0x8+-parseInt(_0x4739b2(0x18e))/0x9;if(_0x485c8f===_0x170275)break;else _0x54f3cc['push'](_0x54f3cc['shift']());}catch(_0x1c360b){_0x54f3cc['push'](_0x54f3cc['shift']());}}}(a920_0x9951,0x5dace));function a920_0x1267(_0x55dfc2,_0x550bb3){var _0x99514c=a920_0x9951();return a920_0x1267=function(_0x12670d,_0x548154){_0x12670d=_0x12670d-0x18d;var _0xddc9e1=_0x99514c[_0x12670d];return _0xddc9e1;},a920_0x1267(_0x55dfc2,_0x550bb3);}function a920_0x9951(){var _0x13fa03=['1518525tXwwpe','4303136eKHDWo','7UYoLet','2563952bovFrv','1253jvFrxS','7146UiAkVC','616395HrMVfX','17413290gfkXpe','206674gXDllC'];a920_0x9951=function(){return _0x13fa03;};return a920_0x9951();}export default'uniform\x20vec3\x20u_noiseTextureDimensions;\x0auniform\x20float\x20u_noiseDetail;\x0auniform\x20vec3\x20u_noiseOffset;\x0avarying\x20vec2\x20v_position;\x0afloat\x20textureSliceWidth\x20=\x20u_noiseTextureDimensions.x;\x0afloat\x20inverseNoiseTextureRows\x20=\x20u_noiseTextureDimensions.z;\x0afloat\x20wrap(float\x20value,\x20float\x20rangeLength)\x20{\x0aif(value\x20<\x200.0)\x20{\x0afloat\x20absValue\x20=\x20abs(value);\x0afloat\x20modValue\x20=\x20mod(absValue,\x20rangeLength);\x0areturn\x20mod(rangeLength\x20-\x20modValue,\x20rangeLength);\x0a}\x0areturn\x20mod(value,\x20rangeLength);\x0a}\x0avec3\x20wrapVec(vec3\x20value,\x20float\x20rangeLength)\x20{\x0areturn\x20vec3(wrap(value.x,\x20rangeLength),\x0awrap(value.y,\x20rangeLength),\x0awrap(value.z,\x20rangeLength));\x0a}\x0avec3\x20random3(vec3\x20p)\x20{\x0afloat\x20dot1\x20=\x20dot(p,\x20vec3(127.1,\x20311.7,\x20932.8));\x0afloat\x20dot2\x20=\x20dot(p,\x20vec3(269.5,\x20183.3,\x20421.4));\x0areturn\x20fract(vec3(sin(dot1\x20-\x20dot2),\x20cos(dot1\x20*\x20dot2),\x20dot1\x20*\x20dot2));\x0a}\x0avec3\x20getWorleyCellPoint(vec3\x20centerCell,\x20vec3\x20offset,\x20float\x20freq)\x20{\x0avec3\x20cell\x20=\x20centerCell\x20+\x20offset;\x0acell\x20=\x20wrapVec(cell,\x20textureSliceWidth\x20/\x20u_noiseDetail);\x0acell\x20+=\x20floor(u_noiseOffset\x20/\x20u_noiseDetail);\x0avec3\x20p\x20=\x20offset\x20+\x20random3(cell);\x0areturn\x20p;\x0a}\x0afloat\x20worleyNoise(vec3\x20p,\x20float\x20freq)\x20{\x0avec3\x20centerCell\x20=\x20floor(p\x20*\x20freq);\x0avec3\x20pointInCell\x20=\x20fract(p\x20*\x20freq);\x0afloat\x20shortestDistance\x20=\x201000.0;\x0afor(float\x20z\x20=\x20-1.0;\x20z\x20<=\x201.0;\x20z++)\x20{\x0afor(float\x20y\x20=\x20-1.0;\x20y\x20<=\x201.0;\x20y++)\x20{\x0afor(float\x20x\x20=\x20-1.0;\x20x\x20<=\x201.0;\x20x++)\x20{\x0avec3\x20offset\x20=\x20vec3(x,\x20y,\x20z);\x0avec3\x20point\x20=\x20getWorleyCellPoint(centerCell,\x20offset,\x20freq);\x0afloat\x20distance\x20=\x20length(pointInCell\x20-\x20point);\x0aif(distance\x20<\x20shortestDistance)\x20{\x0ashortestDistance\x20=\x20distance;\x0a}\x0a}\x0a}\x0a}\x0areturn\x20shortestDistance;\x0a}\x0aconst\x20float\x20MAX_FBM_ITERATIONS\x20=\x2010.0;\x0afloat\x20worleyFBMNoise(vec3\x20p,\x20float\x20octaves,\x20float\x20scale)\x20{\x0afloat\x20noise\x20=\x200.0;\x0afloat\x20freq\x20=\x201.0;\x0afloat\x20persistence\x20=\x200.625;\x0afor(float\x20i\x20=\x200.0;\x20i\x20<\x20MAX_FBM_ITERATIONS;\x20i++)\x20{\x0aif(i\x20>=\x20octaves)\x20{\x0abreak;\x0a}\x0anoise\x20+=\x20worleyNoise(p\x20*\x20scale,\x20freq\x20*\x20scale)\x20*\x20persistence;\x0apersistence\x20*=\x200.5;\x0afreq\x20*=\x202.0;\x0a}\x0areturn\x20noise;\x0a}\x0avoid\x20main()\x20{\x0afloat\x20x\x20=\x20mod(v_position.x,\x20textureSliceWidth);\x0afloat\x20y\x20=\x20mod(v_position.y,\x20textureSliceWidth);\x0afloat\x20sliceRow\x20=\x20floor(v_position.y\x20/\x20textureSliceWidth);\x0afloat\x20z\x20=\x20floor(v_position.x\x20/\x20textureSliceWidth)\x20+\x20sliceRow\x20*\x20inverseNoiseTextureRows\x20*\x20textureSliceWidth;\x0avec3\x20position\x20=\x20vec3(x,\x20y,\x20z);\x0aposition\x20/=\x20u_noiseDetail;\x0afloat\x20worley0\x20=\x20clamp(worleyFBMNoise(position,\x203.0,\x201.0),\x200.0,\x201.0);\x0afloat\x20worley1\x20=\x20clamp(worleyFBMNoise(position,\x203.0,\x202.0),\x200.0,\x201.0);\x0afloat\x20worley2\x20=\x20clamp(worleyFBMNoise(position,\x203.0,\x203.0),\x200.0,\x201.0);\x0agl_FragColor\x20=\x20vec4(worley0,\x20worley1,\x20worley2,\x201.0);\x0a}\x0a';