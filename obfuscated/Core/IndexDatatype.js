var a132_0x4fe936=a132_0x5943;(function(_0x4de108,_0x45d8be){var _0x55735e=a132_0x5943,_0x3b29e6=_0x4de108();while(!![]){try{var _0x4e2484=-parseInt(_0x55735e(0x173))/0x1+parseInt(_0x55735e(0x165))/0x2*(parseInt(_0x55735e(0x176))/0x3)+-parseInt(_0x55735e(0x177))/0x4*(parseInt(_0x55735e(0x168))/0x5)+-parseInt(_0x55735e(0x16c))/0x6*(parseInt(_0x55735e(0x16a))/0x7)+-parseInt(_0x55735e(0x167))/0x8+parseInt(_0x55735e(0x16f))/0x9*(-parseInt(_0x55735e(0x174))/0xa)+-parseInt(_0x55735e(0x172))/0xb*(-parseInt(_0x55735e(0x179))/0xc);if(_0x4e2484===_0x45d8be)break;else _0x3b29e6['push'](_0x3b29e6['shift']());}catch(_0x3de515){_0x3b29e6['push'](_0x3b29e6['shift']());}}}(a132_0x400e,0x64658));import a132_0x15291f from'./defined.js';function a132_0x400e(){var _0x58b0a0=['UNSIGNED_SHORT','64339mKxTLa','476029iCdmkn','2290bfJtAQ','indexDatatype\x20is\x20required\x20and\x20must\x20be\x20a\x20valid\x20IndexDatatype\x20constant.','3AbIWiq','8PHcYEw','numberOfVertices\x20is\x20required.','5460RzXzvy','BYTES_PER_ELEMENT','freeze','213804izhxPv','SIXTY_FOUR_KILOBYTES','5732216MuBApi','481100dhbkvp','getSizeInBytes','333725AdjPqN','byteOffset\x20is\x20required.','78rYrllt','UNSIGNED_INT','UNSIGNED_BYTE','13842gXDonU','fromSizeInBytes'];a132_0x400e=function(){return _0x58b0a0;};return a132_0x400e();}import a132_0x4e8b9f from'./DeveloperError.js';import a132_0x38c1b0 from'./Math.js';import a132_0x5bd885 from'./WebGLConstants.js';var IndexDatatype={'UNSIGNED_BYTE':a132_0x5bd885[a132_0x4fe936(0x16e)],'UNSIGNED_SHORT':a132_0x5bd885['UNSIGNED_SHORT'],'UNSIGNED_INT':a132_0x5bd885[a132_0x4fe936(0x16d)]};function a132_0x5943(_0x4f2d73,_0x49e91b){var _0x400ece=a132_0x400e();return a132_0x5943=function(_0x5943f3,_0x256f19){_0x5943f3=_0x5943f3-0x164;var _0x276ede=_0x400ece[_0x5943f3];return _0x276ede;},a132_0x5943(_0x4f2d73,_0x49e91b);}IndexDatatype[a132_0x4fe936(0x169)]=function(_0x1dc250){var _0xe3f8ce=a132_0x4fe936;switch(_0x1dc250){case IndexDatatype[_0xe3f8ce(0x16e)]:return Uint8Array[_0xe3f8ce(0x17a)];case IndexDatatype[_0xe3f8ce(0x171)]:return Uint16Array[_0xe3f8ce(0x17a)];case IndexDatatype[_0xe3f8ce(0x16d)]:return Uint32Array[_0xe3f8ce(0x17a)];}throw new a132_0x4e8b9f(_0xe3f8ce(0x175));},IndexDatatype[a132_0x4fe936(0x170)]=function(_0x9ed439){var _0x3782ca=a132_0x4fe936;switch(_0x9ed439){case 0x2:return IndexDatatype[_0x3782ca(0x171)];case 0x4:return IndexDatatype['UNSIGNED_INT'];case 0x1:return IndexDatatype['UNSIGNED_BYTE'];default:throw new a132_0x4e8b9f('Size\x20in\x20bytes\x20cannot\x20be\x20mapped\x20to\x20an\x20IndexDatatype');}},IndexDatatype['validate']=function(_0x2a3e16){var _0x515691=a132_0x4fe936;return a132_0x15291f(_0x2a3e16)&&(_0x2a3e16===IndexDatatype[_0x515691(0x16e)]||_0x2a3e16===IndexDatatype['UNSIGNED_SHORT']||_0x2a3e16===IndexDatatype[_0x515691(0x16d)]);},IndexDatatype['createTypedArray']=function(_0x4ead05,_0xa7f833){var _0x3e1e34=a132_0x4fe936;if(!a132_0x15291f(_0x4ead05))throw new a132_0x4e8b9f(_0x3e1e34(0x178));if(_0x4ead05>=a132_0x38c1b0[_0x3e1e34(0x166)])return new Uint32Array(_0xa7f833);return new Uint16Array(_0xa7f833);},IndexDatatype['createTypedArrayFromArrayBuffer']=function(_0x2d8840,_0x289c5c,_0x49b303,_0x1bc340){var _0x1447e3=a132_0x4fe936;if(!a132_0x15291f(_0x2d8840))throw new a132_0x4e8b9f(_0x1447e3(0x178));if(!a132_0x15291f(_0x289c5c))throw new a132_0x4e8b9f('sourceArray\x20is\x20required.');if(!a132_0x15291f(_0x49b303))throw new a132_0x4e8b9f(_0x1447e3(0x16b));if(_0x2d8840>=a132_0x38c1b0[_0x1447e3(0x166)])return new Uint32Array(_0x289c5c,_0x49b303,_0x1bc340);return new Uint16Array(_0x289c5c,_0x49b303,_0x1bc340);};export default Object[a132_0x4fe936(0x164)](IndexDatatype);