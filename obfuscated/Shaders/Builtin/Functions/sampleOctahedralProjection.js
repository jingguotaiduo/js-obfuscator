var a890_0x40f39f=a890_0x1bdd;(function(_0x35a05b,_0x363e84){var _0x5d9baf=a890_0x1bdd,_0x563235=_0x35a05b();while(!![]){try{var _0x48e843=parseInt(_0x5d9baf(0x13f))/0x1*(-parseInt(_0x5d9baf(0x13c))/0x2)+-parseInt(_0x5d9baf(0x13d))/0x3+parseInt(_0x5d9baf(0x140))/0x4*(parseInt(_0x5d9baf(0x138))/0x5)+parseInt(_0x5d9baf(0x13a))/0x6+-parseInt(_0x5d9baf(0x137))/0x7*(parseInt(_0x5d9baf(0x142))/0x8)+-parseInt(_0x5d9baf(0x141))/0x9*(parseInt(_0x5d9baf(0x13e))/0xa)+parseInt(_0x5d9baf(0x143))/0xb*(parseInt(_0x5d9baf(0x13b))/0xc);if(_0x48e843===_0x363e84)break;else _0x563235['push'](_0x563235['shift']());}catch(_0x1a6378){_0x563235['push'](_0x563235['shift']());}}}(a890_0x1661,0x7f255));function a890_0x1661(){var _0x29cf6e=['4433712AltPHh','600yUZLlW','274MfYUgd','1195032RiAJxi','20lhJlOK','149EWFyFd','8kSkHSo','444051OPxGGZ','460432DTAvaA','147895arvCNw','112zrMhRW','1369715dmCOfB','vec3\x20czm_sampleOctahedralProjectionWithFiltering(sampler2D\x20projectedMap,\x20vec2\x20textureSize,\x20vec3\x20direction,\x20float\x20lod)\x0a{\x0adirection\x20/=\x20dot(vec3(1.0),\x20abs(direction));\x0avec2\x20rev\x20=\x20abs(direction.zx)\x20-\x20vec2(1.0);\x0avec2\x20neg\x20=\x20vec2(direction.x\x20<\x200.0\x20?\x20rev.x\x20:\x20-rev.x,\x0adirection.z\x20<\x200.0\x20?\x20rev.y\x20:\x20-rev.y);\x0avec2\x20uv\x20=\x20direction.y\x20<\x200.0\x20?\x20neg\x20:\x20direction.xz;\x0avec2\x20coord\x20=\x200.5\x20*\x20uv\x20+\x20vec2(0.5);\x0avec2\x20pixel\x20=\x201.0\x20/\x20textureSize;\x0aif\x20(lod\x20>\x200.0)\x0a{\x0afloat\x20scale\x20=\x201.0\x20/\x20pow(2.0,\x20lod);\x0afloat\x20offset\x20=\x20((textureSize.y\x20+\x201.0)\x20/\x20textureSize.x);\x0acoord.x\x20*=\x20offset;\x0acoord\x20*=\x20scale;\x0acoord.x\x20+=\x20offset\x20+\x20pixel.x;\x0acoord.y\x20+=\x20(1.0\x20-\x20(1.0\x20/\x20pow(2.0,\x20lod\x20-\x201.0)))\x20+\x20pixel.y\x20*\x20(lod\x20-\x201.0)\x20*\x202.0;\x0a}\x0aelse\x0a{\x0acoord.x\x20*=\x20(textureSize.y\x20/\x20textureSize.x);\x0a}\x0a#ifndef\x20OES_texture_float_linear\x0avec3\x20color1\x20=\x20texture2D(projectedMap,\x20coord\x20+\x20vec2(0.0,\x20pixel.y)).rgb;\x0avec3\x20color2\x20=\x20texture2D(projectedMap,\x20coord\x20+\x20vec2(pixel.x,\x200.0)).rgb;\x0avec3\x20color3\x20=\x20texture2D(projectedMap,\x20coord\x20+\x20pixel).rgb;\x0avec3\x20color4\x20=\x20texture2D(projectedMap,\x20coord).rgb;\x0avec2\x20texturePosition\x20=\x20coord\x20*\x20textureSize;\x0afloat\x20fu\x20=\x20fract(texturePosition.x);\x0afloat\x20fv\x20=\x20fract(texturePosition.y);\x0avec3\x20average1\x20=\x20mix(color4,\x20color2,\x20fu);\x0avec3\x20average2\x20=\x20mix(color1,\x20color3,\x20fu);\x0avec3\x20color\x20=\x20mix(average1,\x20average2,\x20fv);\x0a#else\x0avec3\x20color\x20=\x20texture2D(projectedMap,\x20coord).rgb;\x0a#endif\x0areturn\x20color;\x0a}\x0avec3\x20czm_sampleOctahedralProjection(sampler2D\x20projectedMap,\x20vec2\x20textureSize,\x20vec3\x20direction,\x20float\x20lod,\x20float\x20maxLod)\x20{\x0afloat\x20currentLod\x20=\x20floor(lod\x20+\x200.5);\x0afloat\x20nextLod\x20=\x20min(currentLod\x20+\x201.0,\x20maxLod);\x0avec3\x20colorCurrentLod\x20=\x20czm_sampleOctahedralProjectionWithFiltering(projectedMap,\x20textureSize,\x20direction,\x20currentLod);\x0avec3\x20colorNextLod\x20=\x20czm_sampleOctahedralProjectionWithFiltering(projectedMap,\x20textureSize,\x20direction,\x20nextLod);\x0areturn\x20mix(colorNextLod,\x20colorCurrentLod,\x20nextLod\x20-\x20lod);\x0a}\x0a'];a890_0x1661=function(){return _0x29cf6e;};return a890_0x1661();}function a890_0x1bdd(_0x111e55,_0x3b84fe){var _0x166171=a890_0x1661();return a890_0x1bdd=function(_0x1bddda,_0x325ceb){_0x1bddda=_0x1bddda-0x137;var _0x16346f=_0x166171[_0x1bddda];return _0x16346f;},a890_0x1bdd(_0x111e55,_0x3b84fe);}export default a890_0x40f39f(0x139);