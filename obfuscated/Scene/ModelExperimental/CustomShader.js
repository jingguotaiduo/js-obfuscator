var a621_0x2f8b33=a621_0x5960;(function(_0x5badf7,_0x1e715c){var _0x347ce7=a621_0x5960,_0x4e4858=_0x5badf7();while(!![]){try{var _0x27d8ae=-parseInt(_0x347ce7(0x104))/0x1*(parseInt(_0x347ce7(0xce))/0x2)+parseInt(_0x347ce7(0xf3))/0x3*(-parseInt(_0x347ce7(0xcb))/0x4)+-parseInt(_0x347ce7(0xee))/0x5*(parseInt(_0x347ce7(0x10a))/0x6)+-parseInt(_0x347ce7(0xd6))/0x7*(parseInt(_0x347ce7(0x106))/0x8)+-parseInt(_0x347ce7(0xe2))/0x9+-parseInt(_0x347ce7(0xf1))/0xa*(parseInt(_0x347ce7(0xf0))/0xb)+-parseInt(_0x347ce7(0xf8))/0xc*(-parseInt(_0x347ce7(0xf9))/0xd);if(_0x27d8ae===_0x1e715c)break;else _0x4e4858['push'](_0x4e4858['shift']());}catch(_0x4b8ae6){_0x4e4858['push'](_0x4e4858['shift']());}}}(a621_0x519d,0xb36cb));import a621_0x21df19 from'../../Core/Check.js';import a621_0x2e0f3d from'../../Core/defaultValue.js';function a621_0x5960(_0x7aa3dd,_0x40b231){var _0x519d96=a621_0x519d();return a621_0x5960=function(_0x59605b,_0x36ea63){_0x59605b=_0x59605b-0xca;var _0x3bfd49=_0x519d96[_0x59605b];return _0x3bfd49;},a621_0x5960(_0x7aa3dd,_0x40b231);}import a621_0x7a7a12 from'../../Core/defined.js';import a621_0x402b2a from'../../Core/destroyObject.js';import a621_0x120e0b from'../../Core/DeveloperError.js';import a621_0x31476b from'./CustomShaderMode.js';import a621_0x3a8082 from'./UniformType.js';import a621_0x13a9c8 from'./TextureManager.js';export default function CustomShader(_0x3829e5){var _0x3d0e7a=a621_0x5960;_0x3829e5=a621_0x2e0f3d(_0x3829e5,a621_0x2e0f3d[_0x3d0e7a(0xcc)]),this[_0x3d0e7a(0xef)]=a621_0x2e0f3d(_0x3829e5[_0x3d0e7a(0xef)],a621_0x31476b[_0x3d0e7a(0xfe)]),this[_0x3d0e7a(0xeb)]=_0x3829e5[_0x3d0e7a(0xeb)],this[_0x3d0e7a(0xf5)]=a621_0x2e0f3d(_0x3829e5[_0x3d0e7a(0xf5)],a621_0x2e0f3d['EMPTY_OBJECT']),this[_0x3d0e7a(0xd5)]=a621_0x2e0f3d(_0x3829e5[_0x3d0e7a(0xd5)],a621_0x2e0f3d[_0x3d0e7a(0xcc)]),this[_0x3d0e7a(0xfa)]=_0x3829e5[_0x3d0e7a(0xfa)],this[_0x3d0e7a(0x10b)]=_0x3829e5[_0x3d0e7a(0x10b)],this[_0x3d0e7a(0xd2)]=a621_0x2e0f3d(_0x3829e5['isTranslucent'],![]),this[_0x3d0e7a(0xfd)]=new a621_0x13a9c8(),this[_0x3d0e7a(0xfb)]=undefined,this[_0x3d0e7a(0xd1)]=buildUniformMap(this),this[_0x3d0e7a(0xdf)]={'attributeSet':{}},this[_0x3d0e7a(0xea)]={'attributeSet':{},'materialSet':{}},findUsedVariables(this),validateBuiltinVariables(this);}function buildUniformMap(_0xdf78fd){var _0x3e20ac=a621_0x5960,_0x163090=_0xdf78fd['uniforms'],_0x159f22={};for(var _0x3633ff in _0x163090){if(_0x163090['hasOwnProperty'](_0x3633ff)){var _0x4a1a38=_0x163090[_0x3633ff],_0x20f85a=_0x4a1a38[_0x3e20ac(0xe8)];if(_0x20f85a===a621_0x3a8082[_0x3e20ac(0xdc)])throw new a621_0x120e0b(_0x3e20ac(0xec));_0x20f85a===a621_0x3a8082['SAMPLER_2D']?(_0xdf78fd[_0x3e20ac(0xfd)][_0x3e20ac(0xfc)](_0x3633ff,_0x4a1a38[_0x3e20ac(0xe3)]),_0x159f22[_0x3633ff]=createUniformTexture2DFunction(_0xdf78fd,_0x3633ff)):_0x159f22[_0x3633ff]=createUniformFunction(_0xdf78fd,_0x3633ff);}}return _0x159f22;}function createUniformTexture2DFunction(_0x4d4578,_0x32aa1f){return function(){var _0x1b8177=a621_0x5960;return a621_0x2e0f3d(_0x4d4578[_0x1b8177(0xfd)][_0x1b8177(0xf7)](_0x32aa1f),_0x4d4578[_0x1b8177(0xfb)]);};}function createUniformFunction(_0xdbc0ce,_0x365853){return function(){var _0x333d2d=a621_0x5960;return _0xdbc0ce[_0x333d2d(0xf5)][_0x365853][_0x333d2d(0xe3)];};}function getVariables(_0x26f57e,_0x4685fa,_0x2ca50d){var _0x2fa45f=a621_0x5960,_0x11cad5;while((_0x11cad5=_0x4685fa[_0x2fa45f(0x107)](_0x26f57e))!==null){var _0x18be35=_0x11cad5[0x1];_0x2ca50d[_0x18be35]=!![];}}function findUsedVariables(_0x425228){var _0x27bc8d=a621_0x5960,_0x4116ec=/[vf]sInput\.attributes\.(\w+)/g,_0x3ec20d,_0x547821=_0x425228[_0x27bc8d(0xfa)];a621_0x7a7a12(_0x547821)&&(_0x3ec20d=_0x425228[_0x27bc8d(0xdf)][_0x27bc8d(0xdb)],getVariables(_0x547821,_0x4116ec,_0x3ec20d));var _0x1bfeba=_0x425228[_0x27bc8d(0x10b)];if(a621_0x7a7a12(_0x1bfeba)){_0x3ec20d=_0x425228[_0x27bc8d(0xea)][_0x27bc8d(0xdb)],getVariables(_0x1bfeba,_0x4116ec,_0x3ec20d);var _0x4c1e54=/material\.(\w+)/g,_0x8906ad=_0x425228[_0x27bc8d(0xea)][_0x27bc8d(0x102)];getVariables(_0x1bfeba,_0x4c1e54,_0x8906ad);}}function expandCoordinateAbbreviations(_0x1ef94a){var _0x503e19=a621_0x5960,_0x5f5ac4=/^.*MC$/,_0x23953a=/^.*WC$/,_0x4df64c=/^.*EC$/;if(_0x5f5ac4[_0x503e19(0xed)](_0x1ef94a))return _0x1ef94a+_0x503e19(0x100);if(_0x23953a[_0x503e19(0xed)](_0x1ef94a))return _0x1ef94a+'\x20(Cartesian\x20world\x20coordinates)';if(_0x4df64c[_0x503e19(0xed)](_0x1ef94a))return _0x1ef94a+_0x503e19(0xe4);return _0x1ef94a;}function validateVariableUsage(_0x46ad0f,_0x478acd,_0x41d075,_0x325e94){var _0x1ac744=a621_0x5960;if(_0x46ad0f[_0x1ac744(0x101)](_0x478acd)){var _0x47bc3c=expandCoordinateAbbreviations(_0x478acd)+_0x1ac744(0xf2)+_0x325e94+'\x20shader.\x20Did\x20you\x20mean\x20'+expandCoordinateAbbreviations(_0x41d075)+_0x1ac744(0xe7);throw new a621_0x120e0b(_0x47bc3c);}}function a621_0x519d(){var _0x4f7299=['fragmentShaderText','\x20must\x20be\x20declared\x20in\x20the\x20CustomShader\x20constructor.','tangent','308XaJqaS','EMPTY_OBJECT','positionWC','14QiAZlO','bitangentEC','vertex','uniformMap','isTranslucent','defined','normal','varyings','7YcZeDR','setUniform','positionEC','position','SAMPLER_2D','attributeSet','SAMPLER_CUBE','defaultTexture','normalMC','usedVariablesVertex','bitangent','update','12174336LnIORS','value','\x20(eye\x20coordinates)','fragment','positionMC','\x20instead?','type','string','usedVariablesFragment','lightingModel','CustomShader\x20does\x20not\x20support\x20samplerCube\x20uniforms','test','4828135DIovXT','mode','15772152KiwOSJ','10XgnVSy','\x20is\x20not\x20available\x20in\x20the\x20','16776xZzzNn','tangentMC','uniforms','Uniform\x20','getTexture','239124WmbBIk','3913ulGVNw','vertexShaderText','_defaultTexture','loadTexture2D','_textureManager','MODIFY_MATERIAL','bitangentMC','\x20(model\x20coordinates)','hasOwnProperty','materialSet','destroy','97654GTsvtx','tangentEC','3174232ipRECL','exec','normalEC','prototype','6JjwuES'];a621_0x519d=function(){return _0x4f7299;};return a621_0x519d();}function validateBuiltinVariables(_0x3750d7){var _0x1a40b9=a621_0x5960,_0xadcf9e=_0x3750d7[_0x1a40b9(0xdf)]['attributeSet'];validateVariableUsage(_0xadcf9e,_0x1a40b9(0xd9),_0x1a40b9(0xe6),'vertex'),validateVariableUsage(_0xadcf9e,'normal',_0x1a40b9(0xde),_0x1a40b9(0xd0)),validateVariableUsage(_0xadcf9e,'tangent',_0x1a40b9(0xf4),_0x1a40b9(0xd0)),validateVariableUsage(_0xadcf9e,_0x1a40b9(0xe0),_0x1a40b9(0xff),_0x1a40b9(0xd0)),validateVariableUsage(_0xadcf9e,_0x1a40b9(0xcd),_0x1a40b9(0xe6),'vertex'),validateVariableUsage(_0xadcf9e,_0x1a40b9(0xd8),_0x1a40b9(0xe6),'vertex'),validateVariableUsage(_0xadcf9e,_0x1a40b9(0x108),_0x1a40b9(0xde),_0x1a40b9(0xd0)),validateVariableUsage(_0xadcf9e,'tangentEC',_0x1a40b9(0xf4),_0x1a40b9(0xd0)),validateVariableUsage(_0xadcf9e,_0x1a40b9(0xcf),'bitangentMC',_0x1a40b9(0xd0));var _0x5b008f=_0x3750d7[_0x1a40b9(0xea)]['attributeSet'];validateVariableUsage(_0x5b008f,_0x1a40b9(0xd9),_0x1a40b9(0xd8),_0x1a40b9(0xe5)),validateVariableUsage(_0x5b008f,_0x1a40b9(0xd4),'normalEC',_0x1a40b9(0xe5)),validateVariableUsage(_0x5b008f,_0x1a40b9(0xca),_0x1a40b9(0x105),_0x1a40b9(0xe5)),validateVariableUsage(_0x5b008f,_0x1a40b9(0xe0),_0x1a40b9(0xcf),_0x1a40b9(0xe5)),validateVariableUsage(_0x5b008f,_0x1a40b9(0xde),_0x1a40b9(0x108),_0x1a40b9(0xe5)),validateVariableUsage(_0x5b008f,'tangentMC','tangentEC',_0x1a40b9(0xe5)),validateVariableUsage(_0x5b008f,_0x1a40b9(0xff),_0x1a40b9(0xcf),_0x1a40b9(0xe5));}CustomShader[a621_0x2f8b33(0x109)][a621_0x2f8b33(0xd7)]=function(_0xc967b6,_0x145336){var _0xad28d8=a621_0x2f8b33;a621_0x21df19['typeOf'][_0xad28d8(0xe9)]('uniformName',_0xc967b6),a621_0x21df19[_0xad28d8(0xd3)](_0xad28d8(0xe3),_0x145336);if(!a621_0x7a7a12(this['uniforms'][_0xc967b6]))throw new a621_0x120e0b(_0xad28d8(0xf6)+_0xc967b6+_0xad28d8(0x10c));var _0x4f1e88=this[_0xad28d8(0xf5)][_0xc967b6];if(_0x4f1e88['type']===a621_0x3a8082[_0xad28d8(0xda)])this[_0xad28d8(0xfd)][_0xad28d8(0xfc)](_0xc967b6,_0x145336);else a621_0x7a7a12(_0x145336['clone'])?_0x4f1e88[_0xad28d8(0xe3)]=_0x145336['clone'](_0x4f1e88['value']):_0x4f1e88[_0xad28d8(0xe3)]=_0x145336;},CustomShader[a621_0x2f8b33(0x109)][a621_0x2f8b33(0xe1)]=function(_0x1f8566){var _0xdc6912=a621_0x2f8b33;this[_0xdc6912(0xfb)]=_0x1f8566['context'][_0xdc6912(0xdd)],this['_textureManager']['update'](_0x1f8566);},CustomShader[a621_0x2f8b33(0x109)]['isDestroyed']=function(){return![];},CustomShader[a621_0x2f8b33(0x109)][a621_0x2f8b33(0x103)]=function(){var _0x489e1e=a621_0x2f8b33;this[_0x489e1e(0xfd)]=this[_0x489e1e(0xfd)]&&this[_0x489e1e(0xfd)][_0x489e1e(0x103)](),a621_0x402b2a(this);};