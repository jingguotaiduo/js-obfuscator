var a413_0x4358a0=a413_0x4f65;(function(_0x224f19,_0x5a656b){var _0x403f69=a413_0x4f65,_0x1ebd8e=_0x224f19();while(!![]){try{var _0x538240=parseInt(_0x403f69(0x13a))/0x1+-parseInt(_0x403f69(0x129))/0x2+parseInt(_0x403f69(0x14c))/0x3+parseInt(_0x403f69(0x1b0))/0x4+parseInt(_0x403f69(0x14b))/0x5+parseInt(_0x403f69(0x1c6))/0x6*(parseInt(_0x403f69(0x1be))/0x7)+-parseInt(_0x403f69(0x172))/0x8;if(_0x538240===_0x5a656b)break;else _0x1ebd8e['push'](_0x1ebd8e['shift']());}catch(_0x4de24d){_0x1ebd8e['push'](_0x1ebd8e['shift']());}}}(a413_0x2b8e,0x63e8b));import a413_0x1c43b5 from'../Core/BoundingRectangle.js';import a413_0x292f6f from'../Core/Cartesian2.js';import a413_0xa1ce06 from'../Core/Cartesian3.js';import a413_0x4c5cb8 from'../Core/Cartesian4.js';import a413_0x8f9ab9 from'../Core/Cartographic.js';import a413_0x399db9 from'../Core/Color.js';import a413_0x22c05b from'../Core/defaultValue.js';import a413_0x20cfb1 from'../Core/defined.js';import a413_0x231d05 from'../Core/Ellipsoid.js';import a413_0x129cc8 from'../Core/EncodedCartesian3.js';import a413_0x91093 from'../Core/Math.js';import a413_0x1a5341 from'../Core/Matrix3.js';import a413_0x4e9fbc from'../Core/Matrix4.js';import a413_0x5d9b28 from'../Core/OrthographicFrustum.js';import a413_0x53007d from'../Core/Simon1994PlanetaryPositions.js';import a413_0x5c0d95 from'../Core/Transforms.js';import a413_0x1b127c from'../Scene/SceneMode.js';import a413_0x3eaa3c from'../Scene/SunLight.js';function UniformState(){var _0x33ff47=a413_0x4f65;this[_0x33ff47(0x1b8)]=undefined,this[_0x33ff47(0x1a7)]=undefined,this[_0x33ff47(0x1e6)]=new a413_0x1c43b5(),this[_0x33ff47(0x1e3)]=new a413_0x4c5cb8(),this[_0x33ff47(0x17c)]=![],this[_0x33ff47(0x149)]=a413_0x4e9fbc['clone'](a413_0x4e9fbc['IDENTITY']),this[_0x33ff47(0x191)]=a413_0x4e9fbc[_0x33ff47(0x1df)](a413_0x4e9fbc[_0x33ff47(0x1ad)]),this[_0x33ff47(0x18d)]=a413_0x4e9fbc[_0x33ff47(0x1df)](a413_0x4e9fbc['IDENTITY']),this[_0x33ff47(0x1bd)]=a413_0x4e9fbc[_0x33ff47(0x1df)](a413_0x4e9fbc[_0x33ff47(0x1ad)]),this[_0x33ff47(0x189)]=a413_0x4e9fbc[_0x33ff47(0x1df)](a413_0x4e9fbc[_0x33ff47(0x1ad)]),this[_0x33ff47(0x182)]=a413_0x4e9fbc[_0x33ff47(0x1df)](a413_0x4e9fbc[_0x33ff47(0x1ad)]),this['_infiniteProjection']=a413_0x4e9fbc[_0x33ff47(0x1df)](a413_0x4e9fbc[_0x33ff47(0x1ad)]),this['_entireFrustum']=new a413_0x292f6f(),this[_0x33ff47(0x1c1)]=new a413_0x292f6f(),this['_frustumPlanes']=new a413_0x4c5cb8(),this[_0x33ff47(0x12e)]=undefined,this[_0x33ff47(0x1e4)]=undefined,this[_0x33ff47(0x135)]=undefined,this[_0x33ff47(0x1d6)]=undefined,this[_0x33ff47(0x1a5)]=a413_0x1a5341[_0x33ff47(0x1df)](a413_0x4e9fbc[_0x33ff47(0x1ad)]),this['_view3DDirty']=!![],this[_0x33ff47(0x1d7)]=new a413_0x4e9fbc(),this['_inverseView3DDirty']=!![],this[_0x33ff47(0x147)]=new a413_0x4e9fbc(),this[_0x33ff47(0x16d)]=!![],this[_0x33ff47(0x1d8)]=new a413_0x4e9fbc(),this[_0x33ff47(0x137)]=!![],this[_0x33ff47(0x13f)]=new a413_0x1a5341(),this[_0x33ff47(0x1ca)]=new a413_0x1a5341(),this[_0x33ff47(0x188)]=new a413_0x1a5341(),this['_viewRotation3D']=new a413_0x1a5341(),this[_0x33ff47(0x1aa)]=new a413_0x1a5341(),this[_0x33ff47(0x199)]=!![],this[_0x33ff47(0x15d)]=new a413_0x4e9fbc(),this[_0x33ff47(0x193)]=!![],this[_0x33ff47(0x1ba)]=new a413_0x4e9fbc(),this[_0x33ff47(0x1b7)]=!![],this['_modelView3D']=new a413_0x4e9fbc(),this[_0x33ff47(0x181)]=!![],this[_0x33ff47(0x19b)]=new a413_0x4e9fbc(),this[_0x33ff47(0x16c)]=!![],this['_inverseModelView']=new a413_0x4e9fbc(),this[_0x33ff47(0x13e)]=!![],this['_inverseModelView3D']=new a413_0x4e9fbc(),this[_0x33ff47(0x1c2)]=!![],this[_0x33ff47(0x1e0)]=new a413_0x4e9fbc(),this[_0x33ff47(0x1e1)]=!![],this[_0x33ff47(0x1ea)]=new a413_0x4e9fbc(),this[_0x33ff47(0x1d9)]=!![],this[_0x33ff47(0x15f)]=new a413_0x4e9fbc(),this['_inverseModelViewProjectionDirty']=!![],this['_inverseModelViewProjection']=new a413_0x4e9fbc(),this[_0x33ff47(0x175)]=!![],this[_0x33ff47(0x13c)]=new a413_0x4e9fbc(),this[_0x33ff47(0x183)]=!![],this[_0x33ff47(0x168)]=new a413_0x4e9fbc(),this[_0x33ff47(0x197)]=!![],this[_0x33ff47(0x1c3)]=new a413_0x1a5341(),this[_0x33ff47(0x136)]=!![],this[_0x33ff47(0x1f3)]=new a413_0x1a5341(),this[_0x33ff47(0x14e)]=!![],this[_0x33ff47(0x145)]=new a413_0x1a5341(),this[_0x33ff47(0x167)]=!![],this[_0x33ff47(0x159)]=new a413_0x1a5341(),this[_0x33ff47(0x17e)]=!![],this[_0x33ff47(0x180)]=new a413_0x129cc8(),this[_0x33ff47(0x14d)]=new a413_0xa1ce06(),this[_0x33ff47(0x1f7)]=new a413_0xa1ce06(),this[_0x33ff47(0x1b1)]=new a413_0xa1ce06(),this['_sunDirectionWC']=new a413_0xa1ce06(),this[_0x33ff47(0x14f)]=new a413_0xa1ce06(),this[_0x33ff47(0x15b)]=new a413_0xa1ce06(),this[_0x33ff47(0x13d)]=new a413_0xa1ce06(),this[_0x33ff47(0x170)]=new a413_0xa1ce06(),this[_0x33ff47(0x142)]=new a413_0xa1ce06(),this[_0x33ff47(0x1cc)]=new a413_0xa1ce06(),this[_0x33ff47(0x1da)]=undefined,this[_0x33ff47(0x1b6)]=undefined,this[_0x33ff47(0x177)]=undefined,this['_ellipsoid']=undefined,this['_cameraDirection']=new a413_0xa1ce06(),this[_0x33ff47(0x1b2)]=new a413_0xa1ce06(),this['_cameraUp']=new a413_0xa1ce06(),this[_0x33ff47(0x1a3)]=0x0,this[_0x33ff47(0x156)]=0x0,this['_eyeHeight2D']=new a413_0x292f6f(),this['_pixelRatio']=0x1,this[_0x33ff47(0x18f)]=![],this['_backgroundColor']=new a413_0x399db9(),this[_0x33ff47(0x162)]=undefined,this[_0x33ff47(0x1d2)]=undefined,this['_sphericalHarmonicCoefficients']=undefined,this[_0x33ff47(0x1ed)]=undefined,this[_0x33ff47(0x18b)]=new a413_0x292f6f(),this['_specularEnvironmentMapsMaximumLOD']=undefined,this[_0x33ff47(0x1a0)]=undefined,this[_0x33ff47(0x1a1)]=undefined,this[_0x33ff47(0x1b5)]=0x0,this[_0x33ff47(0x1f5)]=undefined,this[_0x33ff47(0x15c)]=undefined,this['_minimumDisableDepthTestDistance']=undefined;}Object['defineProperties'](UniformState[a413_0x4358a0(0x138)],{'frameState':{'get':function(){var _0x5b3df5=a413_0x4358a0;return this[_0x5b3df5(0x1d6)];}},'viewport':{'get':function(){var _0x1ed499=a413_0x4358a0;return this[_0x1ed499(0x1e6)];},'set':function(_0x3d1184){var _0x2bbc2a=a413_0x4358a0;if(!a413_0x1c43b5['equals'](_0x3d1184,this[_0x2bbc2a(0x1e6)])){a413_0x1c43b5[_0x2bbc2a(0x1df)](_0x3d1184,this['_viewport']);var _0x377df8=this[_0x2bbc2a(0x1e6)],_0x120c0a=this[_0x2bbc2a(0x1e3)];_0x120c0a['x']=_0x377df8['x'],_0x120c0a['y']=_0x377df8['y'],_0x120c0a['z']=_0x377df8[_0x2bbc2a(0x18c)],_0x120c0a['w']=_0x377df8['height'],this[_0x2bbc2a(0x17c)]=!![];}}},'viewportCartesian4':{'get':function(){var _0x5ea54c=a413_0x4358a0;return this[_0x5ea54c(0x1e3)];}},'viewportOrthographic':{'get':function(){var _0x324349=a413_0x4358a0;return cleanViewport(this),this[_0x324349(0x149)];}},'viewportTransformation':{'get':function(){var _0x480c6a=a413_0x4358a0;return cleanViewport(this),this[_0x480c6a(0x191)];}},'model':{'get':function(){var _0x4bc525=a413_0x4358a0;return this[_0x4bc525(0x18d)];},'set':function(_0x437d15){var _0x588ccc=a413_0x4358a0;a413_0x4e9fbc[_0x588ccc(0x1df)](_0x437d15,this[_0x588ccc(0x18d)]),this[_0x588ccc(0x1b7)]=!![],this[_0x588ccc(0x13e)]=!![],this['_inverseModelDirty']=!![],this[_0x588ccc(0x137)]=!![],this['_modelViewDirty']=!![],this[_0x588ccc(0x16c)]=!![],this[_0x588ccc(0x181)]=!![],this[_0x588ccc(0x16c)]=!![],this['_modelViewProjectionDirty']=!![],this[_0x588ccc(0x1e2)]=!![],this[_0x588ccc(0x175)]=!![],this[_0x588ccc(0x183)]=!![],this[_0x588ccc(0x197)]=!![],this[_0x588ccc(0x14e)]=!![],this['_normal3DDirty']=!![],this[_0x588ccc(0x167)]=!![],this[_0x588ccc(0x17e)]=!![];}},'inverseModel':{'get':function(){var _0x231699=a413_0x4358a0;return this[_0x231699(0x16d)]&&(this[_0x231699(0x16d)]=![],a413_0x4e9fbc[_0x231699(0x179)](this[_0x231699(0x18d)],this[_0x231699(0x1d8)])),this[_0x231699(0x1d8)];}},'inverseTransposeModel':{'get':function(){var _0x45acde=a413_0x4358a0,_0xab3b91=this['_inverseTransposeModel'];return this[_0x45acde(0x137)]&&(this[_0x45acde(0x137)]=![],a413_0x4e9fbc['getMatrix3'](this[_0x45acde(0x160)],_0xab3b91),a413_0x1a5341[_0x45acde(0x1dd)](_0xab3b91,_0xab3b91)),_0xab3b91;}},'view':{'get':function(){var _0x20ae7d=a413_0x4358a0;return this[_0x20ae7d(0x1bd)];}},'view3D':{'get':function(){var _0x59e669=a413_0x4358a0;return updateView3D(this),this[_0x59e669(0x1d7)];}},'viewRotation':{'get':function(){return updateView3D(this),this['_viewRotation'];}},'viewRotation3D':{'get':function(){var _0x106c8a=a413_0x4358a0;return updateView3D(this),this[_0x106c8a(0x17f)];}},'inverseView':{'get':function(){var _0x4f6ba9=a413_0x4358a0;return this[_0x4f6ba9(0x189)];}},'inverseView3D':{'get':function(){var _0x209de9=a413_0x4358a0;return updateInverseView3D(this),this[_0x209de9(0x147)];}},'inverseViewRotation':{'get':function(){var _0x121155=a413_0x4358a0;return this[_0x121155(0x188)];}},'inverseViewRotation3D':{'get':function(){var _0x431d46=a413_0x4358a0;return updateInverseView3D(this),this[_0x431d46(0x1aa)];}},'projection':{'get':function(){var _0x375604=a413_0x4358a0;return this[_0x375604(0x182)];}},'inverseProjection':{'get':function(){var _0x4f63a8=a413_0x4358a0;return cleanInverseProjection(this),this[_0x4f63a8(0x15d)];}},'infiniteProjection':{'get':function(){var _0x41c95b=a413_0x4358a0;return this[_0x41c95b(0x163)];}},'modelView':{'get':function(){return cleanModelView(this),this['_modelView'];}},'modelView3D':{'get':function(){return cleanModelView3D(this),this['_modelView3D'];}},'modelViewRelativeToEye':{'get':function(){var _0x52ddcc=a413_0x4358a0;return cleanModelViewRelativeToEye(this),this[_0x52ddcc(0x19b)];}},'inverseModelView':{'get':function(){var _0x180edd=a413_0x4358a0;return cleanInverseModelView(this),this[_0x180edd(0x171)];}},'inverseModelView3D':{'get':function(){return cleanInverseModelView3D(this),this['_inverseModelView3D'];}},'viewProjection':{'get':function(){var _0x2f56b1=a413_0x4358a0;return cleanViewProjection(this),this[_0x2f56b1(0x1e0)];}},'inverseViewProjection':{'get':function(){var _0x51e803=a413_0x4358a0;return cleanInverseViewProjection(this),this[_0x51e803(0x1ea)];}},'modelViewProjection':{'get':function(){var _0x22294d=a413_0x4358a0;return cleanModelViewProjection(this),this[_0x22294d(0x15f)];}},'inverseModelViewProjection':{'get':function(){var _0x2a0c3e=a413_0x4358a0;return cleanInverseModelViewProjection(this),this[_0x2a0c3e(0x17d)];}},'modelViewProjectionRelativeToEye':{'get':function(){var _0x2707e3=a413_0x4358a0;return cleanModelViewProjectionRelativeToEye(this),this[_0x2707e3(0x13c)];}},'modelViewInfiniteProjection':{'get':function(){var _0x1c7bbd=a413_0x4358a0;return cleanModelViewInfiniteProjection(this),this[_0x1c7bbd(0x168)];}},'normal':{'get':function(){var _0x109532=a413_0x4358a0;return cleanNormal(this),this[_0x109532(0x1c3)];}},'normal3D':{'get':function(){return cleanNormal3D(this),this['_normal3D'];}},'inverseNormal':{'get':function(){var _0x3346ab=a413_0x4358a0;return cleanInverseNormal(this),this[_0x3346ab(0x145)];}},'inverseNormal3D':{'get':function(){return cleanInverseNormal3D(this),this['_inverseNormal3D'];}},'entireFrustum':{'get':function(){var _0x5547a2=a413_0x4358a0;return this[_0x5547a2(0x14a)];}},'currentFrustum':{'get':function(){return this['_currentFrustum'];}},'frustumPlanes':{'get':function(){return this['_frustumPlanes'];}},'farDepthFromNearPlusOne':{'get':function(){return this['_farDepthFromNearPlusOne'];}},'log2FarDepthFromNearPlusOne':{'get':function(){var _0x20a87a=a413_0x4358a0;return this[_0x20a87a(0x1e4)];}},'oneOverLog2FarDepthFromNearPlusOne':{'get':function(){var _0x2f8c3a=a413_0x4358a0;return this[_0x2f8c3a(0x135)];}},'eyeHeight':{'get':function(){var _0x4168c5=a413_0x4358a0;return this[_0x4168c5(0x156)];}},'eyeHeight2D':{'get':function(){var _0x1f318d=a413_0x4358a0;return this[_0x1f318d(0x12b)];}},'sunPositionWC':{'get':function(){return this['_sunPositionWC'];}},'sunPositionColumbusView':{'get':function(){var _0x1515a4=a413_0x4358a0;return this[_0x1515a4(0x1b1)];}},'sunDirectionWC':{'get':function(){return this['_sunDirectionWC'];}},'sunDirectionEC':{'get':function(){var _0x4dd16a=a413_0x4358a0;return this[_0x4dd16a(0x14f)];}},'moonDirectionEC':{'get':function(){return this['_moonDirectionEC'];}},'lightDirectionWC':{'get':function(){var _0x3eb407=a413_0x4358a0;return this[_0x3eb407(0x13d)];}},'lightDirectionEC':{'get':function(){var _0x3ed0b7=a413_0x4358a0;return this[_0x3ed0b7(0x170)];}},'lightColor':{'get':function(){var _0x417ea5=a413_0x4358a0;return this[_0x417ea5(0x142)];}},'lightColorHdr':{'get':function(){var _0x37d193=a413_0x4358a0;return this[_0x37d193(0x1cc)];}},'encodedCameraPositionMCHigh':{'get':function(){var _0x476390=a413_0x4358a0;return cleanEncodedCameraPositionMC(this),this[_0x476390(0x180)]['high'];}},'encodedCameraPositionMCLow':{'get':function(){var _0x47ba03=a413_0x4358a0;return cleanEncodedCameraPositionMC(this),this[_0x47ba03(0x180)]['low'];}},'temeToPseudoFixedMatrix':{'get':function(){var _0x4df217=a413_0x4358a0;return this[_0x4df217(0x1a5)];}},'pixelRatio':{'get':function(){return this['_pixelRatio'];}},'fogDensity':{'get':function(){var _0x25739b=a413_0x4358a0;return this[_0x25739b(0x1a0)];}},'geometricToleranceOverMeter':{'get':function(){var _0x1ded53=a413_0x4358a0;return this[_0x1ded53(0x15c)];}},'pass':{'get':function(){var _0xa311b5=a413_0x4358a0;return this[_0xa311b5(0x1da)];}},'backgroundColor':{'get':function(){var _0x4b7c65=a413_0x4358a0;return this[_0x4b7c65(0x1ab)];}},'brdfLut':{'get':function(){return this['_brdfLut'];}},'environmentMap':{'get':function(){var _0x1ff136=a413_0x4358a0;return this[_0x1ff136(0x1d2)];}},'sphericalHarmonicCoefficients':{'get':function(){var _0x3a61d2=a413_0x4358a0;return this[_0x3a61d2(0x132)];}},'specularEnvironmentMaps':{'get':function(){var _0x52eeac=a413_0x4358a0;return this[_0x52eeac(0x1ed)];}},'specularEnvironmentMapsDimensions':{'get':function(){return this['_specularEnvironmentMapsDimensions'];}},'specularEnvironmentMapsMaximumLOD':{'get':function(){var _0x205e19=a413_0x4358a0;return this[_0x205e19(0x12d)];}},'imagerySplitPosition':{'get':function(){var _0xf22270=a413_0x4358a0;return this[_0xf22270(0x1b5)];}},'minimumDisableDepthTestDistance':{'get':function(){var _0x1e92e5=a413_0x4358a0;return this[_0x1e92e5(0x178)];}},'invertClassificationColor':{'get':function(){var _0x2d82d7=a413_0x4358a0;return this[_0x2d82d7(0x1a1)];}},'orthographicIn3D':{'get':function(){var _0x32a075=a413_0x4358a0;return this[_0x32a075(0x18f)];}},'ellipsoid':{'get':function(){var _0x1f0e62=a413_0x4358a0;return a413_0x22c05b(this[_0x1f0e62(0x19d)],a413_0x231d05[_0x1f0e62(0x16b)]);}}});function setView(_0x4b7350,_0x49c5b2){var _0x45f6f8=a413_0x4358a0;a413_0x4e9fbc['clone'](_0x49c5b2,_0x4b7350[_0x45f6f8(0x1bd)]),a413_0x4e9fbc[_0x45f6f8(0x1c4)](_0x49c5b2,_0x4b7350['_viewRotation']),_0x4b7350['_view3DDirty']=!![],_0x4b7350[_0x45f6f8(0x192)]=!![],_0x4b7350[_0x45f6f8(0x193)]=!![],_0x4b7350[_0x45f6f8(0x1b7)]=!![],_0x4b7350[_0x45f6f8(0x181)]=!![],_0x4b7350['_inverseModelViewDirty']=!![],_0x4b7350[_0x45f6f8(0x13e)]=!![],_0x4b7350[_0x45f6f8(0x1c2)]=!![],_0x4b7350[_0x45f6f8(0x1e1)]=!![],_0x4b7350[_0x45f6f8(0x1d9)]=!![],_0x4b7350[_0x45f6f8(0x175)]=!![],_0x4b7350[_0x45f6f8(0x183)]=!![],_0x4b7350['_normalDirty']=!![],_0x4b7350[_0x45f6f8(0x14e)]=!![],_0x4b7350[_0x45f6f8(0x136)]=!![],_0x4b7350[_0x45f6f8(0x167)]=!![];}function setInverseView(_0x2b3a29,_0x3d0d15){var _0x4fd8fe=a413_0x4358a0;a413_0x4e9fbc['clone'](_0x3d0d15,_0x2b3a29['_inverseView']),a413_0x4e9fbc[_0x4fd8fe(0x1c4)](_0x3d0d15,_0x2b3a29[_0x4fd8fe(0x188)]);}function setProjection(_0x37b71e,_0x532bfa){var _0x379cd6=a413_0x4358a0;a413_0x4e9fbc[_0x379cd6(0x1df)](_0x532bfa,_0x37b71e['_projection']),_0x37b71e[_0x379cd6(0x199)]=!![],_0x37b71e[_0x379cd6(0x1c2)]=!![],_0x37b71e['_inverseViewProjectionDirty']=!![],_0x37b71e[_0x379cd6(0x1d9)]=!![],_0x37b71e['_modelViewProjectionRelativeToEyeDirty']=!![];}function setInfiniteProjection(_0x1bc493,_0x504996){var _0x6d554d=a413_0x4358a0;a413_0x4e9fbc[_0x6d554d(0x1df)](_0x504996,_0x1bc493[_0x6d554d(0x163)]),_0x1bc493[_0x6d554d(0x183)]=!![];}function setCamera(_0x108399,_0x5d02c8){var _0x433ee7=a413_0x4358a0;a413_0xa1ce06['clone'](_0x5d02c8[_0x433ee7(0x17a)],_0x108399[_0x433ee7(0x14d)]),a413_0xa1ce06['clone'](_0x5d02c8[_0x433ee7(0x194)],_0x108399[_0x433ee7(0x169)]),a413_0xa1ce06[_0x433ee7(0x1df)](_0x5d02c8['rightWC'],_0x108399[_0x433ee7(0x1b2)]),a413_0xa1ce06[_0x433ee7(0x1df)](_0x5d02c8[_0x433ee7(0x157)],_0x108399[_0x433ee7(0x1d0)]);var _0x1fb8bc=_0x5d02c8[_0x433ee7(0x1ee)];!a413_0x20cfb1(_0x1fb8bc)?_0x108399[_0x433ee7(0x156)]=-_0x108399['_ellipsoid'][_0x433ee7(0x198)]:_0x108399['_eyeHeight']=_0x1fb8bc[_0x433ee7(0x1f0)],_0x108399[_0x433ee7(0x17e)]=!![];}function a413_0x2b8e(){var _0x26252b=['_viewportTransformation','_inverseView3DDirty','_modelViewDirty','directionWC','inverseModelView3D','unproject','_normalDirty','maximumRadius','_inverseProjectionDirty','mode','_modelViewRelativeToEye','ZERO','_ellipsoid','_sunDirectionWC','negate','_fogDensity','_invertClassificationColor','computeIcrfToFixedMatrix','_frustum2DWidth','minimumDisableDepthTestDistance','_temeToPseudoFixed','camera','gamma','cartographicToCartesian','_modelView3D','_inverseViewRotation3D','_backgroundColor','right','IDENTITY','projectionMatrix','light','228000HsUomM','_sunPositionColumbusView','_cameraRight','green','SCENE2D','_imagerySplitPosition','_mode','_modelView3DDirty','globeDepthTexture','multiplyTransformation','_modelView','_offCenterFrustum','fov','_view','8071CMGTub','inverseModelView','updateFrustum','_currentFrustum','_viewProjectionDirty','_normal','getMatrix3','specularEnvironmentMaps','1482CgpLLP','fromElements','multiplyByScalar','density','_viewRotation','max','_lightColorHdr','tan','viewProjection','multiply','_cameraUp','invertClassificationColor','_environmentMap','dimensions','longitude','ellipsoid','_frameState','_view3D','_inverseModel','_modelViewProjectionDirty','_pass','update','view3D','transpose','inverseTransformation','clone','_viewProjection','_inverseViewProjectionDirty','_inverseModelViewProjectionDirty','_viewportCartesian4','_log2FarDepthFromNearPlusOne','viewMatrix','_viewport','bottom','maximumScreenSpaceError','mapProjection','_inverseViewProjection','backgroundColor','computeSunPositionInEarthInertialFrame','_specularEnvironmentMaps','positionCartographic','defaultCubeMap','height','SCENE3D','intensity','_normal3D','infiniteProjectionMatrix','_pixelSizePerMeter','cartesianToCartographic','_sunPositionWC','dot','blue','PI_OVER_TWO','1104896dYzmXf','modelViewProjection','_eyeHeight2D','modelViewRelativeToEye','_specularEnvironmentMapsMaximumLOD','_farDepthFromNearPlusOne','context','direction','modelView3D','_sphericalHarmonicCoefficients','imagerySplitPosition','near','_oneOverLog2FarDepthFromNearPlusOne','_normal3DDirty','_inverseTransposeModelDirty','prototype','computeMoonPositionInEarthInertialFrame','682614GaVZUb','multiplyByPointAsVector','_modelViewProjectionRelativeToEye','_lightDirectionWC','_inverseModelView3DDirty','_inverseTransposeModel','updatePass','normalize','_lightColor','pixelRatio','red','_inverseNormal','viewRotation3D','_inverseView3D','computeViewportTransformation','_viewportOrthographicMatrix','_entireFrustum','1706375AWaTnJ','2266773ECcJIz','_cameraPosition','_inverseNormalDirty','_sunDirectionEC','eastNorthUpToFixedFrame','brdfLutGenerator','POSITIVE_INFINITY','multiplyByPoint','updateCamera','drawingBufferWidth','_eyeHeight','upWC','getRotation','_inverseNormal3D','maximumComponent','_moonDirectionEC','_geometricToleranceOverMeter','_inverseProjection','_inverseModelView3D','_modelViewProjection','inverseModel','log2','_brdfLut','_infiniteProjection','clamp','frustum','multiplyByVector','_inverseNormal3DDirty','_modelViewInfiniteProjection','_cameraDirection','modelView','WGS84','_inverseModelViewDirty','_inverseModelDirty','latitude','inverseViewMatrix','_lightDirectionEC','_inverseModelView','9276768huVBcH','top','left','_modelViewProjectionRelativeToEyeDirty','far','_mapProjection','_minimumDisableDepthTestDistance','inverse','positionWC','colorTexture','_viewportDirty','_inverseModelViewProjection','_encodedCameraPositionMCDirty','_viewRotation3D','_encodedCameraPositionMC','_modelViewRelativeToEyeDirty','_projection','_modelViewInfiniteProjectionDirty','fromCartesian','_view3DDirty','_frustumPlanes','sphericalHarmonicCoefficients','_inverseViewRotation','_inverseView','computeTemeToPseudoFixedMatrix','_specularEnvironmentMapsDimensions','width','_model','specularEnvironmentMapsMaximumLOD','_orthographicIn3D','time'];a413_0x2b8e=function(){return _0x26252b;};return a413_0x2b8e();}var transformMatrix=new a413_0x1a5341(),sunCartographicScratch=new a413_0x8f9ab9();function setSunAndMoonDirections(_0x101935,_0x14467d){var _0x140a62=a413_0x4358a0;!a413_0x20cfb1(a413_0x5c0d95[_0x140a62(0x1a2)](_0x14467d['time'],transformMatrix))&&(transformMatrix=a413_0x5c0d95['computeTemeToPseudoFixedMatrix'](_0x14467d[_0x140a62(0x190)],transformMatrix));var _0xf8066b=a413_0x53007d[_0x140a62(0x1ec)](_0x14467d[_0x140a62(0x190)],_0x101935[_0x140a62(0x1f7)]);a413_0x1a5341[_0x140a62(0x166)](transformMatrix,_0xf8066b,_0xf8066b),a413_0xa1ce06[_0x140a62(0x141)](_0xf8066b,_0x101935[_0x140a62(0x19e)]),_0xf8066b=a413_0x1a5341[_0x140a62(0x166)](_0x101935[_0x140a62(0x146)],_0xf8066b,_0x101935[_0x140a62(0x14f)]),a413_0xa1ce06[_0x140a62(0x141)](_0xf8066b,_0xf8066b),_0xf8066b=a413_0x53007d[_0x140a62(0x139)](_0x14467d[_0x140a62(0x190)],_0x101935[_0x140a62(0x15b)]),a413_0x1a5341[_0x140a62(0x166)](transformMatrix,_0xf8066b,_0xf8066b),a413_0x1a5341['multiplyByVector'](_0x101935[_0x140a62(0x146)],_0xf8066b,_0xf8066b),a413_0xa1ce06[_0x140a62(0x141)](_0xf8066b,_0xf8066b);var _0x1879de=_0x14467d[_0x140a62(0x1e9)],_0x1900c4=_0x1879de['ellipsoid'],_0x496c31=_0x1900c4[_0x140a62(0x1f6)](_0x101935[_0x140a62(0x1f7)],sunCartographicScratch);_0x1879de['project'](_0x496c31,_0x101935[_0x140a62(0x1b1)]);}UniformState[a413_0x4358a0(0x138)][a413_0x4358a0(0x154)]=function(_0x3009a9){var _0x4c06be=a413_0x4358a0;setView(this,_0x3009a9[_0x4c06be(0x1e5)]),setInverseView(this,_0x3009a9[_0x4c06be(0x16f)]),setCamera(this,_0x3009a9),this[_0x4c06be(0x14a)]['x']=_0x3009a9[_0x4c06be(0x165)][_0x4c06be(0x134)],this['_entireFrustum']['y']=_0x3009a9[_0x4c06be(0x165)][_0x4c06be(0x176)],this[_0x4c06be(0x1c0)](_0x3009a9[_0x4c06be(0x165)]),this['_orthographicIn3D']=this[_0x4c06be(0x1b6)]!==a413_0x1b127c[_0x4c06be(0x1b4)]&&_0x3009a9[_0x4c06be(0x165)]instanceof a413_0x5d9b28;},UniformState[a413_0x4358a0(0x138)][a413_0x4358a0(0x1c0)]=function(_0x464fa3){var _0x42d08b=a413_0x4358a0;setProjection(this,_0x464fa3[_0x42d08b(0x1ae)]),a413_0x20cfb1(_0x464fa3[_0x42d08b(0x1f4)])&&setInfiniteProjection(this,_0x464fa3['infiniteProjectionMatrix']),this['_currentFrustum']['x']=_0x464fa3[_0x42d08b(0x134)],this[_0x42d08b(0x1c1)]['y']=_0x464fa3[_0x42d08b(0x176)],this['_farDepthFromNearPlusOne']=_0x464fa3[_0x42d08b(0x176)]-_0x464fa3['near']+0x1,this[_0x42d08b(0x1e4)]=a413_0x91093[_0x42d08b(0x161)](this[_0x42d08b(0x12e)]),this['_oneOverLog2FarDepthFromNearPlusOne']=0x1/this[_0x42d08b(0x1e4)],a413_0x20cfb1(_0x464fa3[_0x42d08b(0x1bb)])&&(_0x464fa3=_0x464fa3['_offCenterFrustum']),this[_0x42d08b(0x186)]['x']=_0x464fa3[_0x42d08b(0x173)],this[_0x42d08b(0x186)]['y']=_0x464fa3[_0x42d08b(0x1e7)],this[_0x42d08b(0x186)]['z']=_0x464fa3[_0x42d08b(0x174)],this[_0x42d08b(0x186)]['w']=_0x464fa3[_0x42d08b(0x1ac)];},UniformState[a413_0x4358a0(0x138)][a413_0x4358a0(0x140)]=function(_0x237a10){var _0x8d638e=a413_0x4358a0;this[_0x8d638e(0x1da)]=_0x237a10;};var EMPTY_ARRAY=[],defaultLight=new a413_0x3eaa3c();function a413_0x4f65(_0x56ea95,_0x1693d6){var _0x2b8e49=a413_0x2b8e();return a413_0x4f65=function(_0x4f6517,_0x2eb344){_0x4f6517=_0x4f6517-0x126;var _0x390c5e=_0x2b8e49[_0x4f6517];return _0x390c5e;},a413_0x4f65(_0x56ea95,_0x1693d6);}UniformState[a413_0x4358a0(0x138)][a413_0x4358a0(0x1db)]=function(_0x27615b){var _0x24bdf4=a413_0x4358a0;this[_0x24bdf4(0x1b6)]=_0x27615b[_0x24bdf4(0x19a)],this[_0x24bdf4(0x177)]=_0x27615b[_0x24bdf4(0x1e9)],this['_ellipsoid']=_0x27615b[_0x24bdf4(0x1e9)][_0x24bdf4(0x1d5)],this['_pixelRatio']=_0x27615b[_0x24bdf4(0x143)];var _0x295558=_0x27615b[_0x24bdf4(0x1a6)];this[_0x24bdf4(0x154)](_0x295558);_0x27615b[_0x24bdf4(0x19a)]===a413_0x1b127c['SCENE2D']?(this[_0x24bdf4(0x1a3)]=_0x295558[_0x24bdf4(0x165)]['right']-_0x295558[_0x24bdf4(0x165)][_0x24bdf4(0x174)],this[_0x24bdf4(0x12b)]['x']=this['_frustum2DWidth']*0.5,this['_eyeHeight2D']['y']=this[_0x24bdf4(0x12b)]['x']*this[_0x24bdf4(0x12b)]['x']):(this[_0x24bdf4(0x1a3)]=0x0,this[_0x24bdf4(0x12b)]['x']=0x0,this['_eyeHeight2D']['y']=0x0);setSunAndMoonDirections(this,_0x27615b);var _0x2bd816=a413_0x22c05b(_0x27615b[_0x24bdf4(0x1af)],defaultLight);_0x2bd816 instanceof a413_0x3eaa3c?(this[_0x24bdf4(0x13d)]=a413_0xa1ce06['clone'](this[_0x24bdf4(0x19e)],this[_0x24bdf4(0x13d)]),this[_0x24bdf4(0x170)]=a413_0xa1ce06[_0x24bdf4(0x1df)](this[_0x24bdf4(0x14f)],this[_0x24bdf4(0x170)])):(this[_0x24bdf4(0x13d)]=a413_0xa1ce06['normalize'](a413_0xa1ce06[_0x24bdf4(0x19f)](_0x2bd816[_0x24bdf4(0x130)],this[_0x24bdf4(0x13d)]),this[_0x24bdf4(0x13d)]),this[_0x24bdf4(0x170)]=a413_0x1a5341[_0x24bdf4(0x166)](this[_0x24bdf4(0x146)],this[_0x24bdf4(0x13d)],this['_lightDirectionEC']));var _0x421401=_0x2bd816['color'],_0x34fe98=a413_0xa1ce06[_0x24bdf4(0x1c7)](_0x421401[_0x24bdf4(0x144)],_0x421401[_0x24bdf4(0x1b3)],_0x421401[_0x24bdf4(0x127)],this[_0x24bdf4(0x1cc)]);_0x34fe98=a413_0xa1ce06[_0x24bdf4(0x1c8)](_0x34fe98,_0x2bd816[_0x24bdf4(0x1f2)],_0x34fe98);var _0x1bbdec=a413_0xa1ce06[_0x24bdf4(0x15a)](_0x34fe98);_0x1bbdec>0x1?a413_0xa1ce06['divideByScalar'](_0x34fe98,_0x1bbdec,this[_0x24bdf4(0x142)]):a413_0xa1ce06[_0x24bdf4(0x1df)](_0x34fe98,this['_lightColor']);var _0x52b696=_0x27615b[_0x24bdf4(0x151)],_0x247a77=a413_0x20cfb1(_0x52b696)?_0x52b696[_0x24bdf4(0x17b)]:undefined;this[_0x24bdf4(0x162)]=_0x247a77,this[_0x24bdf4(0x1d2)]=a413_0x22c05b(_0x27615b['environmentMap'],_0x27615b[_0x24bdf4(0x12f)][_0x24bdf4(0x1ef)]),this[_0x24bdf4(0x132)]=a413_0x22c05b(_0x27615b[_0x24bdf4(0x187)],EMPTY_ARRAY),this[_0x24bdf4(0x1ed)]=_0x27615b[_0x24bdf4(0x1c5)],this['_specularEnvironmentMapsMaximumLOD']=_0x27615b[_0x24bdf4(0x18e)];a413_0x20cfb1(this[_0x24bdf4(0x1ed)])&&a413_0x292f6f[_0x24bdf4(0x1df)](this[_0x24bdf4(0x1ed)][_0x24bdf4(0x1d3)],this[_0x24bdf4(0x18b)]);this['_fogDensity']=_0x27615b['fog'][_0x24bdf4(0x1c9)],this['_invertClassificationColor']=_0x27615b[_0x24bdf4(0x1d1)],this[_0x24bdf4(0x1d6)]=_0x27615b,this[_0x24bdf4(0x1a5)]=a413_0x5c0d95[_0x24bdf4(0x18a)](_0x27615b[_0x24bdf4(0x190)],this[_0x24bdf4(0x1a5)]),this[_0x24bdf4(0x1b5)]=_0x27615b[_0x24bdf4(0x133)]*_0x27615b[_0x24bdf4(0x12f)][_0x24bdf4(0x155)];var _0x17c6c9=_0x295558[_0x24bdf4(0x165)][_0x24bdf4(0x1bc)],_0x13c9ef=this['_viewport'],_0x40cc6d;a413_0x20cfb1(_0x17c6c9)?_0x13c9ef[_0x24bdf4(0x1f0)]>_0x13c9ef[_0x24bdf4(0x18c)]?_0x40cc6d=Math['tan'](0.5*_0x17c6c9)*0x2/_0x13c9ef['height']:_0x40cc6d=Math[_0x24bdf4(0x1cd)](0.5*_0x17c6c9)*0x2/_0x13c9ef['width']:_0x40cc6d=0x1/Math[_0x24bdf4(0x1cb)](_0x13c9ef[_0x24bdf4(0x18c)],_0x13c9ef[_0x24bdf4(0x1f0)]),this['_geometricToleranceOverMeter']=_0x40cc6d*_0x27615b[_0x24bdf4(0x1e8)],a413_0x399db9['clone'](_0x27615b[_0x24bdf4(0x1eb)],this[_0x24bdf4(0x1ab)]),this['_minimumDisableDepthTestDistance']=_0x27615b[_0x24bdf4(0x1a4)],this[_0x24bdf4(0x178)]*=this[_0x24bdf4(0x178)],this[_0x24bdf4(0x178)]===Number[_0x24bdf4(0x152)]&&(this[_0x24bdf4(0x178)]=-0x1);};function cleanViewport(_0x5910d4){var _0x4f2c44=a413_0x4358a0;if(_0x5910d4[_0x4f2c44(0x17c)]){var _0x43b4ac=_0x5910d4['_viewport'];a413_0x4e9fbc['computeOrthographicOffCenter'](_0x43b4ac['x'],_0x43b4ac['x']+_0x43b4ac[_0x4f2c44(0x18c)],_0x43b4ac['y'],_0x43b4ac['y']+_0x43b4ac['height'],0x0,0x1,_0x5910d4['_viewportOrthographicMatrix']),a413_0x4e9fbc[_0x4f2c44(0x148)](_0x43b4ac,0x0,0x1,_0x5910d4[_0x4f2c44(0x191)]),_0x5910d4['_viewportDirty']=![];}}function cleanInverseProjection(_0x4083e5){var _0x56a294=a413_0x4358a0;_0x4083e5[_0x56a294(0x199)]&&(_0x4083e5[_0x56a294(0x199)]=![],_0x4083e5['_mode']!==a413_0x1b127c['SCENE2D']&&_0x4083e5[_0x56a294(0x1b6)]!==a413_0x1b127c['MORPHING']&&!_0x4083e5['_orthographicIn3D']?a413_0x4e9fbc['inverse'](_0x4083e5[_0x56a294(0x182)],_0x4083e5[_0x56a294(0x15d)]):a413_0x4e9fbc[_0x56a294(0x1df)](a413_0x4e9fbc[_0x56a294(0x19c)],_0x4083e5[_0x56a294(0x15d)]));}function cleanModelView(_0x1df036){var _0x4abbf4=a413_0x4358a0;_0x1df036[_0x4abbf4(0x193)]&&(_0x1df036[_0x4abbf4(0x193)]=![],a413_0x4e9fbc['multiplyTransformation'](_0x1df036[_0x4abbf4(0x1bd)],_0x1df036[_0x4abbf4(0x18d)],_0x1df036[_0x4abbf4(0x1ba)]));}function cleanModelView3D(_0x414919){var _0x5bb874=a413_0x4358a0;_0x414919[_0x5bb874(0x1b7)]&&(_0x414919[_0x5bb874(0x1b7)]=![],a413_0x4e9fbc[_0x5bb874(0x1b9)](_0x414919[_0x5bb874(0x1dc)],_0x414919[_0x5bb874(0x18d)],_0x414919[_0x5bb874(0x1a9)]));}function cleanInverseModelView(_0x502fee){var _0x5be345=a413_0x4358a0;_0x502fee[_0x5be345(0x16c)]&&(_0x502fee[_0x5be345(0x16c)]=![],a413_0x4e9fbc['inverse'](_0x502fee[_0x5be345(0x16a)],_0x502fee[_0x5be345(0x171)]));}function cleanInverseModelView3D(_0x1339e9){var _0x2c35fe=a413_0x4358a0;_0x1339e9[_0x2c35fe(0x13e)]&&(_0x1339e9[_0x2c35fe(0x13e)]=![],a413_0x4e9fbc[_0x2c35fe(0x179)](_0x1339e9[_0x2c35fe(0x131)],_0x1339e9[_0x2c35fe(0x15e)]));}function cleanViewProjection(_0x121e62){var _0x47d2b0=a413_0x4358a0;_0x121e62[_0x47d2b0(0x1c2)]&&(_0x121e62[_0x47d2b0(0x1c2)]=![],a413_0x4e9fbc[_0x47d2b0(0x1cf)](_0x121e62['_projection'],_0x121e62[_0x47d2b0(0x1bd)],_0x121e62[_0x47d2b0(0x1e0)]));}function cleanInverseViewProjection(_0xe06cf2){var _0x10f925=a413_0x4358a0;_0xe06cf2[_0x10f925(0x1e1)]&&(_0xe06cf2[_0x10f925(0x1e1)]=![],a413_0x4e9fbc[_0x10f925(0x179)](_0xe06cf2[_0x10f925(0x1ce)],_0xe06cf2['_inverseViewProjection']));}function cleanModelViewProjection(_0x594212){var _0x442c9b=a413_0x4358a0;_0x594212[_0x442c9b(0x1d9)]&&(_0x594212['_modelViewProjectionDirty']=![],a413_0x4e9fbc[_0x442c9b(0x1cf)](_0x594212[_0x442c9b(0x182)],_0x594212[_0x442c9b(0x16a)],_0x594212[_0x442c9b(0x15f)]));}function cleanModelViewRelativeToEye(_0x396eab){var _0x4a1cc6=a413_0x4358a0;if(_0x396eab[_0x4a1cc6(0x181)]){_0x396eab[_0x4a1cc6(0x181)]=![];var _0x2d3bb0=_0x396eab[_0x4a1cc6(0x16a)],_0x5ed438=_0x396eab['_modelViewRelativeToEye'];_0x5ed438[0x0]=_0x2d3bb0[0x0],_0x5ed438[0x1]=_0x2d3bb0[0x1],_0x5ed438[0x2]=_0x2d3bb0[0x2],_0x5ed438[0x3]=_0x2d3bb0[0x3],_0x5ed438[0x4]=_0x2d3bb0[0x4],_0x5ed438[0x5]=_0x2d3bb0[0x5],_0x5ed438[0x6]=_0x2d3bb0[0x6],_0x5ed438[0x7]=_0x2d3bb0[0x7],_0x5ed438[0x8]=_0x2d3bb0[0x8],_0x5ed438[0x9]=_0x2d3bb0[0x9],_0x5ed438[0xa]=_0x2d3bb0[0xa],_0x5ed438[0xb]=_0x2d3bb0[0xb],_0x5ed438[0xc]=0x0,_0x5ed438[0xd]=0x0,_0x5ed438[0xe]=0x0,_0x5ed438[0xf]=_0x2d3bb0[0xf];}}function cleanInverseModelViewProjection(_0x88a8d0){var _0x4eb544=a413_0x4358a0;_0x88a8d0['_inverseModelViewProjectionDirty']&&(_0x88a8d0[_0x4eb544(0x1e2)]=![],a413_0x4e9fbc[_0x4eb544(0x179)](_0x88a8d0[_0x4eb544(0x12a)],_0x88a8d0[_0x4eb544(0x17d)]));}function cleanModelViewProjectionRelativeToEye(_0x473f22){var _0x190e2e=a413_0x4358a0;_0x473f22[_0x190e2e(0x175)]&&(_0x473f22[_0x190e2e(0x175)]=![],a413_0x4e9fbc['multiply'](_0x473f22[_0x190e2e(0x182)],_0x473f22[_0x190e2e(0x12c)],_0x473f22['_modelViewProjectionRelativeToEye']));}function cleanModelViewInfiniteProjection(_0x12a254){var _0x29e982=a413_0x4358a0;_0x12a254['_modelViewInfiniteProjectionDirty']&&(_0x12a254[_0x29e982(0x183)]=![],a413_0x4e9fbc[_0x29e982(0x1cf)](_0x12a254[_0x29e982(0x163)],_0x12a254[_0x29e982(0x16a)],_0x12a254[_0x29e982(0x168)]));}function cleanNormal(_0x535923){var _0x2f8abc=a413_0x4358a0;if(_0x535923[_0x2f8abc(0x197)]){_0x535923[_0x2f8abc(0x197)]=![];var _0x5805aa=_0x535923[_0x2f8abc(0x1c3)];a413_0x4e9fbc[_0x2f8abc(0x1c4)](_0x535923[_0x2f8abc(0x1bf)],_0x5805aa),a413_0x1a5341[_0x2f8abc(0x158)](_0x5805aa,_0x5805aa),a413_0x1a5341['transpose'](_0x5805aa,_0x5805aa);}}function cleanNormal3D(_0x59ac4b){var _0x430446=a413_0x4358a0;if(_0x59ac4b[_0x430446(0x136)]){_0x59ac4b[_0x430446(0x136)]=![];var _0x2f901e=_0x59ac4b['_normal3D'];a413_0x4e9fbc[_0x430446(0x1c4)](_0x59ac4b[_0x430446(0x195)],_0x2f901e),a413_0x1a5341['getRotation'](_0x2f901e,_0x2f901e),a413_0x1a5341[_0x430446(0x1dd)](_0x2f901e,_0x2f901e);}}function cleanInverseNormal(_0xec181e){var _0x5079fe=a413_0x4358a0;_0xec181e[_0x5079fe(0x14e)]&&(_0xec181e[_0x5079fe(0x14e)]=![],a413_0x4e9fbc[_0x5079fe(0x1c4)](_0xec181e[_0x5079fe(0x1bf)],_0xec181e[_0x5079fe(0x145)]),a413_0x1a5341[_0x5079fe(0x158)](_0xec181e[_0x5079fe(0x145)],_0xec181e[_0x5079fe(0x145)]));}function cleanInverseNormal3D(_0x4cb2f1){var _0x36b806=a413_0x4358a0;_0x4cb2f1[_0x36b806(0x167)]&&(_0x4cb2f1['_inverseNormal3DDirty']=![],a413_0x4e9fbc['getMatrix3'](_0x4cb2f1[_0x36b806(0x195)],_0x4cb2f1['_inverseNormal3D']),a413_0x1a5341[_0x36b806(0x158)](_0x4cb2f1['_inverseNormal3D'],_0x4cb2f1[_0x36b806(0x159)]));}var cameraPositionMC=new a413_0xa1ce06();function cleanEncodedCameraPositionMC(_0x524ac1){var _0x1988de=a413_0x4358a0;_0x524ac1['_encodedCameraPositionMCDirty']&&(_0x524ac1[_0x1988de(0x17e)]=![],a413_0x4e9fbc[_0x1988de(0x153)](_0x524ac1[_0x1988de(0x160)],_0x524ac1['_cameraPosition'],cameraPositionMC),a413_0x129cc8[_0x1988de(0x184)](cameraPositionMC,_0x524ac1[_0x1988de(0x180)]));}var view2Dto3DPScratch=new a413_0xa1ce06(),view2Dto3DRScratch=new a413_0xa1ce06(),view2Dto3DUScratch=new a413_0xa1ce06(),view2Dto3DDScratch=new a413_0xa1ce06(),view2Dto3DCartographicScratch=new a413_0x8f9ab9(),view2Dto3DCartesian3Scratch=new a413_0xa1ce06(),view2Dto3DMatrix4Scratch=new a413_0x4e9fbc();function view2Dto3D(_0x53b34c,_0x482d9a,_0x3c0028,_0x58a570,_0x3e51dd,_0x54d8c4,_0x5e51be,_0x1e32d7){var _0x47fe76=a413_0x4358a0,_0x2d152f=view2Dto3DPScratch;_0x2d152f['x']=_0x53b34c['y'],_0x2d152f['y']=_0x53b34c['z'],_0x2d152f['z']=_0x53b34c['x'];var _0x5bfae4=view2Dto3DRScratch;_0x5bfae4['x']=_0x3c0028['y'],_0x5bfae4['y']=_0x3c0028['z'],_0x5bfae4['z']=_0x3c0028['x'];var _0x283933=view2Dto3DUScratch;_0x283933['x']=_0x58a570['y'],_0x283933['y']=_0x58a570['z'],_0x283933['z']=_0x58a570['x'];var _0x4596ba=view2Dto3DDScratch;_0x4596ba['x']=_0x482d9a['y'],_0x4596ba['y']=_0x482d9a['z'],_0x4596ba['z']=_0x482d9a['x'];_0x54d8c4===a413_0x1b127c[_0x47fe76(0x1b4)]&&(_0x2d152f['z']=_0x3e51dd*0.5);var _0x7d0415=_0x5e51be[_0x47fe76(0x196)](_0x2d152f,view2Dto3DCartographicScratch);_0x7d0415[_0x47fe76(0x1d4)]=a413_0x91093[_0x47fe76(0x164)](_0x7d0415[_0x47fe76(0x1d4)],-Math['PI'],Math['PI']),_0x7d0415[_0x47fe76(0x16e)]=a413_0x91093['clamp'](_0x7d0415[_0x47fe76(0x16e)],-a413_0x91093[_0x47fe76(0x128)],a413_0x91093[_0x47fe76(0x128)]);var _0x1deb9e=_0x5e51be[_0x47fe76(0x1d5)],_0x442729=_0x1deb9e[_0x47fe76(0x1a8)](_0x7d0415,view2Dto3DCartesian3Scratch),_0x3ca0d9=a413_0x5c0d95[_0x47fe76(0x150)](_0x442729,_0x1deb9e,view2Dto3DMatrix4Scratch);return a413_0x4e9fbc['multiplyByPointAsVector'](_0x3ca0d9,_0x5bfae4,_0x5bfae4),a413_0x4e9fbc[_0x47fe76(0x13b)](_0x3ca0d9,_0x283933,_0x283933),a413_0x4e9fbc['multiplyByPointAsVector'](_0x3ca0d9,_0x4596ba,_0x4596ba),!a413_0x20cfb1(_0x1e32d7)&&(_0x1e32d7=new a413_0x4e9fbc()),_0x1e32d7[0x0]=_0x5bfae4['x'],_0x1e32d7[0x1]=_0x283933['x'],_0x1e32d7[0x2]=-_0x4596ba['x'],_0x1e32d7[0x3]=0x0,_0x1e32d7[0x4]=_0x5bfae4['y'],_0x1e32d7[0x5]=_0x283933['y'],_0x1e32d7[0x6]=-_0x4596ba['y'],_0x1e32d7[0x7]=0x0,_0x1e32d7[0x8]=_0x5bfae4['z'],_0x1e32d7[0x9]=_0x283933['z'],_0x1e32d7[0xa]=-_0x4596ba['z'],_0x1e32d7[0xb]=0x0,_0x1e32d7[0xc]=-a413_0xa1ce06[_0x47fe76(0x126)](_0x5bfae4,_0x442729),_0x1e32d7[0xd]=-a413_0xa1ce06[_0x47fe76(0x126)](_0x283933,_0x442729),_0x1e32d7[0xe]=a413_0xa1ce06[_0x47fe76(0x126)](_0x4596ba,_0x442729),_0x1e32d7[0xf]=0x1,_0x1e32d7;}function updateView3D(_0x463bbf){var _0x32c54b=a413_0x4358a0;_0x463bbf[_0x32c54b(0x185)]&&(_0x463bbf[_0x32c54b(0x1b6)]===a413_0x1b127c[_0x32c54b(0x1f1)]?a413_0x4e9fbc[_0x32c54b(0x1df)](_0x463bbf[_0x32c54b(0x1bd)],_0x463bbf['_view3D']):view2Dto3D(_0x463bbf['_cameraPosition'],_0x463bbf['_cameraDirection'],_0x463bbf[_0x32c54b(0x1b2)],_0x463bbf[_0x32c54b(0x1d0)],_0x463bbf[_0x32c54b(0x1a3)],_0x463bbf[_0x32c54b(0x1b6)],_0x463bbf[_0x32c54b(0x177)],_0x463bbf[_0x32c54b(0x1d7)]),a413_0x4e9fbc[_0x32c54b(0x1c4)](_0x463bbf[_0x32c54b(0x1d7)],_0x463bbf[_0x32c54b(0x17f)]),_0x463bbf[_0x32c54b(0x185)]=![]);}function updateInverseView3D(_0x2ffef9){var _0x5342de=a413_0x4358a0;_0x2ffef9[_0x5342de(0x192)]&&(a413_0x4e9fbc[_0x5342de(0x1de)](_0x2ffef9[_0x5342de(0x1dc)],_0x2ffef9[_0x5342de(0x147)]),a413_0x4e9fbc['getMatrix3'](_0x2ffef9[_0x5342de(0x147)],_0x2ffef9[_0x5342de(0x1aa)]),_0x2ffef9['_inverseView3DDirty']=![]);}export default UniformState;