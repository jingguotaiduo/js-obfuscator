var a435_0x38abee=a435_0xf041;(function(_0xa76a99,_0x4756a5){var _0x114e99=a435_0xf041,_0x12eed5=_0xa76a99();while(!![]){try{var _0x431aea=-parseInt(_0x114e99(0x88))/0x1+-parseInt(_0x114e99(0xa3))/0x2*(-parseInt(_0x114e99(0x92))/0x3)+parseInt(_0x114e99(0x9e))/0x4+parseInt(_0x114e99(0x9a))/0x5*(-parseInt(_0x114e99(0x89))/0x6)+parseInt(_0x114e99(0xa4))/0x7+parseInt(_0x114e99(0xa5))/0x8*(parseInt(_0x114e99(0x9d))/0x9)+-parseInt(_0x114e99(0x8a))/0xa*(parseInt(_0x114e99(0x9b))/0xb);if(_0x431aea===_0x4756a5)break;else _0x12eed5['push'](_0x12eed5['shift']());}catch(_0x5b4a58){_0x12eed5['push'](_0x12eed5['shift']());}}}(a435_0x50ca,0x48219));import a435_0x2ba983 from'../Core/Cartesian3.js';import a435_0x1fb6b4 from'../Core/Check.js';import a435_0x19bc2e from'../Core/defaultValue.js';import a435_0x42c894 from'../Core/Math.js';function a435_0xf041(_0x32a51f,_0x2fbc1b){var _0x50ca6b=a435_0x50ca();return a435_0xf041=function(_0xf04119,_0x4d86eb){_0xf04119=_0xf04119-0x87;var _0x26448f=_0x50ca6b[_0xf04119];return _0x26448f;},a435_0xf041(_0x32a51f,_0x2fbc1b);}var defaultDimensions=new a435_0x2ba983(0x1,0x1,0x1);function a435_0x50ca(){var _0x46fe51=['typeOf','emit','value.x','dimensions','988WyRZvR','2223144lrnPOO','8KDrTyF','clone','240259IvSQuF','6lXfkCi','6350brAgvu','position','velocity','value','normalize','multiplyByScalar','defineProperties','prototype','3414QZAXco','dimensions.y','greaterThanOrEquals','value.z','fromElements','defined','randomBetween','_dimensions','2641035ZEjbRI','6446gGPbZj','number','4532364iMHqYZ','210660zVXsEp'];a435_0x50ca=function(){return _0x46fe51;};return a435_0x50ca();}function BoxEmitter(_0x500feb){var _0x268e71=a435_0xf041;_0x500feb=a435_0x19bc2e(_0x500feb,defaultDimensions),a435_0x1fb6b4[_0x268e71(0x97)](_0x268e71(0xa2),_0x500feb),a435_0x1fb6b4[_0x268e71(0x9f)][_0x268e71(0x9c)]['greaterThanOrEquals']('dimensions.x',_0x500feb['x'],0x0),a435_0x1fb6b4[_0x268e71(0x9f)][_0x268e71(0x9c)][_0x268e71(0x94)](_0x268e71(0x93),_0x500feb['y'],0x0),a435_0x1fb6b4[_0x268e71(0x9f)][_0x268e71(0x9c)][_0x268e71(0x94)]('dimensions.z',_0x500feb['z'],0x0),this['_dimensions']=a435_0x2ba983[_0x268e71(0x87)](_0x500feb);}Object[a435_0x38abee(0x90)](BoxEmitter['prototype'],{'dimensions':{'get':function(){var _0x1c7db1=a435_0x38abee;return this[_0x1c7db1(0x99)];},'set':function(_0x3bcb5a){var _0x1dcd1a=a435_0x38abee;a435_0x1fb6b4[_0x1dcd1a(0x97)](_0x1dcd1a(0x8d),_0x3bcb5a),a435_0x1fb6b4[_0x1dcd1a(0x9f)][_0x1dcd1a(0x9c)]['greaterThanOrEquals'](_0x1dcd1a(0xa1),_0x3bcb5a['x'],0x0),a435_0x1fb6b4[_0x1dcd1a(0x9f)][_0x1dcd1a(0x9c)][_0x1dcd1a(0x94)]('value.y',_0x3bcb5a['y'],0x0),a435_0x1fb6b4['typeOf'][_0x1dcd1a(0x9c)][_0x1dcd1a(0x94)](_0x1dcd1a(0x95),_0x3bcb5a['z'],0x0),a435_0x2ba983['clone'](_0x3bcb5a,this[_0x1dcd1a(0x99)]);}}});var scratchHalfDim=new a435_0x2ba983();BoxEmitter[a435_0x38abee(0x91)][a435_0x38abee(0xa0)]=function(_0x203b97){var _0x538f72=a435_0x38abee,_0x545ae3=this[_0x538f72(0x99)],_0x43fda2=a435_0x2ba983[_0x538f72(0x8f)](_0x545ae3,0.5,scratchHalfDim),_0x2562cc=a435_0x42c894[_0x538f72(0x98)](-_0x43fda2['x'],_0x43fda2['x']),_0x4aed51=a435_0x42c894[_0x538f72(0x98)](-_0x43fda2['y'],_0x43fda2['y']),_0x5166b5=a435_0x42c894[_0x538f72(0x98)](-_0x43fda2['z'],_0x43fda2['z']);_0x203b97['position']=a435_0x2ba983[_0x538f72(0x96)](_0x2562cc,_0x4aed51,_0x5166b5,_0x203b97[_0x538f72(0x8b)]),_0x203b97[_0x538f72(0x8c)]=a435_0x2ba983[_0x538f72(0x8e)](_0x203b97[_0x538f72(0x8b)],_0x203b97[_0x538f72(0x8c)]);};export default BoxEmitter;