var a973_0x2c7e4a=a973_0x4caf;function a973_0x4caf(_0x550097,_0x98472b){var _0x5e9e5a=a973_0x5e9e();return a973_0x4caf=function(_0x4cafa5,_0x166fc9){_0x4cafa5=_0x4cafa5-0x83;var _0x2f7a9b=_0x5e9e5a[_0x4cafa5];return _0x2f7a9b;},a973_0x4caf(_0x550097,_0x98472b);}(function(_0x3103c0,_0x1dd446){var _0x2d4db8=a973_0x4caf,_0x41313e=_0x3103c0();while(!![]){try{var _0x57096c=-parseInt(_0x2d4db8(0x84))/0x1*(-parseInt(_0x2d4db8(0x8a))/0x2)+parseInt(_0x2d4db8(0x87))/0x3+parseInt(_0x2d4db8(0x86))/0x4+-parseInt(_0x2d4db8(0x85))/0x5+parseInt(_0x2d4db8(0x8b))/0x6+-parseInt(_0x2d4db8(0x88))/0x7+parseInt(_0x2d4db8(0x8c))/0x8*(-parseInt(_0x2d4db8(0x89))/0x9);if(_0x57096c===_0x1dd446)break;else _0x41313e['push'](_0x41313e['shift']());}catch(_0x185b2e){_0x41313e['push'](_0x41313e['shift']());}}}(a973_0x5e9e,0x6d917));function a973_0x5e9e(){var _0x1a523a=['52357HpfNpJ','1742015nLSAlH','1337460DFsmcT','1136004yfJRsk','721168UVaDTd','387dcdGqv','6MgbSTZ','2121618ilNxLK','60184NrxOgt','varying\x20vec3\x20v_forwardDirectionEC;\x0avarying\x20vec3\x20v_texcoordNormalizationAndHalfWidth;\x0avarying\x20float\x20v_batchId;\x0a#ifdef\x20PER_INSTANCE_COLOR\x0avarying\x20vec4\x20v_color;\x0a#else\x0avarying\x20vec2\x20v_alignedPlaneDistances;\x0avarying\x20float\x20v_texcoordT;\x0a#endif\x0afloat\x20rayPlaneDistanceUnsafe(vec3\x20origin,\x20vec3\x20direction,\x20vec3\x20planeNormal,\x20float\x20planeDistance)\x20{\x0areturn\x20(-planeDistance\x20-\x20dot(planeNormal,\x20origin))\x20/\x20dot(planeNormal,\x20direction);\x0a}\x0avoid\x20main(void)\x0a{\x0avec4\x20eyeCoordinate\x20=\x20gl_FragCoord;\x0aeyeCoordinate\x20/=\x20eyeCoordinate.w;\x0a#ifdef\x20PER_INSTANCE_COLOR\x0agl_FragColor\x20=\x20czm_gammaCorrect(v_color);\x0a#else\x20//\x20PER_INSTANCE_COLOR\x0afloat\x20distanceFromStart\x20=\x20rayPlaneDistanceUnsafe(eyeCoordinate.xyz,\x20-v_forwardDirectionEC,\x20v_forwardDirectionEC.xyz,\x20v_alignedPlaneDistances.x);\x0afloat\x20distanceFromEnd\x20=\x20rayPlaneDistanceUnsafe(eyeCoordinate.xyz,\x20v_forwardDirectionEC,\x20-v_forwardDirectionEC.xyz,\x20v_alignedPlaneDistances.y);\x0adistanceFromStart\x20=\x20max(0.0,\x20distanceFromStart);\x0adistanceFromEnd\x20=\x20max(0.0,\x20distanceFromEnd);\x0afloat\x20s\x20=\x20distanceFromStart\x20/\x20(distanceFromStart\x20+\x20distanceFromEnd);\x0as\x20=\x20(s\x20*\x20v_texcoordNormalizationAndHalfWidth.x)\x20+\x20v_texcoordNormalizationAndHalfWidth.y;\x0aczm_materialInput\x20materialInput;\x0amaterialInput.s\x20=\x20s;\x0amaterialInput.st\x20=\x20vec2(s,\x20v_texcoordT);\x0amaterialInput.str\x20=\x20vec3(s,\x20v_texcoordT,\x200.0);\x0aczm_material\x20material\x20=\x20czm_getMaterial(materialInput);\x0agl_FragColor\x20=\x20vec4(material.diffuse\x20+\x20material.emission,\x20material.alpha);\x0a#endif\x20//\x20PER_INSTANCE_COLOR\x0a}\x0a'];a973_0x5e9e=function(){return _0x1a523a;};return a973_0x5e9e();}export default a973_0x2c7e4a(0x83);