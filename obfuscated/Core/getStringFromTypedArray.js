var a110_0x3c91a2=a110_0x4bbb;(function(_0x5d74da,_0x497459){var _0x1f832b=a110_0x4bbb,_0x5bc13e=_0x5d74da();while(!![]){try{var _0xe8c366=parseInt(_0x1f832b(0x1cd))/0x1+-parseInt(_0x1f832b(0x1c3))/0x2*(-parseInt(_0x1f832b(0x1be))/0x3)+parseInt(_0x1f832b(0x1bb))/0x4+parseInt(_0x1f832b(0x1c8))/0x5*(-parseInt(_0x1f832b(0x1b8))/0x6)+parseInt(_0x1f832b(0x1bd))/0x7*(parseInt(_0x1f832b(0x1c5))/0x8)+parseInt(_0x1f832b(0x1c4))/0x9+-parseInt(_0x1f832b(0x1cc))/0xa;if(_0xe8c366===_0x497459)break;else _0x5bc13e['push'](_0x5bc13e['shift']());}catch(_0x549bf3){_0x5bc13e['push'](_0x5bc13e['shift']());}}}(a110_0x5925,0xa2102));import a110_0x406154 from'./defaultValue.js';import a110_0x3f1569 from'./defined.js';import a110_0x3e48f4 from'./DeveloperError.js';import a110_0x590ae5 from'./RuntimeError.js';function getStringFromTypedArray(_0x4d8db8,_0x5233e4,_0x14f89d){var _0x2d556e=a110_0x4bbb;if(!a110_0x3f1569(_0x4d8db8))throw new a110_0x3e48f4(_0x2d556e(0x1c1));if(_0x5233e4<0x0)throw new a110_0x3e48f4(_0x2d556e(0x1c0));if(_0x14f89d<0x0)throw new a110_0x3e48f4(_0x2d556e(0x1b9));if(_0x5233e4+_0x14f89d>_0x4d8db8['byteLength'])throw new a110_0x3e48f4('sub-region\x20exceeds\x20array\x20bounds.');return _0x5233e4=a110_0x406154(_0x5233e4,0x0),_0x14f89d=a110_0x406154(_0x14f89d,_0x4d8db8[_0x2d556e(0x1c6)]-_0x5233e4),_0x4d8db8=_0x4d8db8['subarray'](_0x5233e4,_0x5233e4+_0x14f89d),getStringFromTypedArray[_0x2d556e(0x1c7)](_0x4d8db8);}function a110_0x5925(){var _0x4a492c=['396867zeONLv','fromCharCode','byteOffset\x20cannot\x20be\x20negative.','uint8Array\x20is\x20required.','push','18OuZSvk','4710339szcpTA','2226200CFFnat','byteLength','decode','5KzXnHY','decodeWithTextDecoder','String\x20decoding\x20failed.','length','22530640TdPyZL','446727TCuiYo','4804386vEfkgk','byteLength\x20cannot\x20be\x20negative.','undefined','1775224LaPXjf','decodeWithFromCharCode','28XdFGMd'];a110_0x5925=function(){return _0x4a492c;};return a110_0x5925();}getStringFromTypedArray[a110_0x3c91a2(0x1c9)]=function(_0xbaa59a){var _0x25b329=new TextDecoder('utf-8');return _0x25b329['decode'](_0xbaa59a);},getStringFromTypedArray[a110_0x3c91a2(0x1bc)]=function(_0x2d6310){var _0x278089=a110_0x3c91a2,_0x1a622b='',_0x5587a5=utf8Handler(_0x2d6310),_0x3b4bce=_0x5587a5[_0x278089(0x1cb)];for(var _0x172b6b=0x0;_0x172b6b<_0x3b4bce;++_0x172b6b){var _0x3c90ac=_0x5587a5[_0x172b6b];_0x3c90ac<=0xffff?_0x1a622b+=String[_0x278089(0x1bf)](_0x3c90ac):(_0x3c90ac-=0x10000,_0x1a622b+=String[_0x278089(0x1bf)]((_0x3c90ac>>0xa)+0xd800,(_0x3c90ac&0x3ff)+0xdc00));}return _0x1a622b;};function inRange(_0x755ee8,_0x476d83,_0x581a86){return _0x476d83<=_0x755ee8&&_0x755ee8<=_0x581a86;}function a110_0x4bbb(_0x20ffeb,_0xdb223e){var _0x592580=a110_0x5925();return a110_0x4bbb=function(_0x4bbb93,_0x4e44ba){_0x4bbb93=_0x4bbb93-0x1b8;var _0x5415c5=_0x592580[_0x4bbb93];return _0x5415c5;},a110_0x4bbb(_0x20ffeb,_0xdb223e);}function utf8Handler(_0x358c97){var _0x365a7f=a110_0x3c91a2,_0x439fe1=0x0,_0x464ace=0x0,_0x1a924c=0x0,_0x28b5c9=0x80,_0x445114=0xbf,_0x39da14=[],_0x44004f=_0x358c97[_0x365a7f(0x1cb)];for(var _0x3635d2=0x0;_0x3635d2<_0x44004f;++_0x3635d2){var _0x2c9b9a=_0x358c97[_0x3635d2];if(_0x1a924c===0x0){if(inRange(_0x2c9b9a,0x0,0x7f)){_0x39da14[_0x365a7f(0x1c2)](_0x2c9b9a);continue;}if(inRange(_0x2c9b9a,0xc2,0xdf)){_0x1a924c=0x1,_0x439fe1=_0x2c9b9a&0x1f;continue;}if(inRange(_0x2c9b9a,0xe0,0xef)){_0x2c9b9a===0xe0&&(_0x28b5c9=0xa0);_0x2c9b9a===0xed&&(_0x445114=0x9f);_0x1a924c=0x2,_0x439fe1=_0x2c9b9a&0xf;continue;}if(inRange(_0x2c9b9a,0xf0,0xf4)){_0x2c9b9a===0xf0&&(_0x28b5c9=0x90);_0x2c9b9a===0xf4&&(_0x445114=0x8f);_0x1a924c=0x3,_0x439fe1=_0x2c9b9a&0x7;continue;}throw new a110_0x590ae5(_0x365a7f(0x1ca));}if(!inRange(_0x2c9b9a,_0x28b5c9,_0x445114)){_0x439fe1=_0x1a924c=_0x464ace=0x0,_0x28b5c9=0x80,_0x445114=0xbf,--_0x3635d2;continue;}_0x28b5c9=0x80,_0x445114=0xbf,_0x439fe1=_0x439fe1<<0x6|_0x2c9b9a&0x3f,++_0x464ace,_0x464ace===_0x1a924c&&(_0x39da14['push'](_0x439fe1),_0x439fe1=_0x1a924c=_0x464ace=0x0);}return _0x39da14;}typeof TextDecoder!==a110_0x3c91a2(0x1ba)?getStringFromTypedArray[a110_0x3c91a2(0x1c7)]=getStringFromTypedArray[a110_0x3c91a2(0x1c9)]:getStringFromTypedArray[a110_0x3c91a2(0x1c7)]=getStringFromTypedArray[a110_0x3c91a2(0x1bc)];export default getStringFromTypedArray;