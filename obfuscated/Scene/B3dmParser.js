var a422_0x5ed58d=a422_0x480c;(function(_0x6f2ac,_0x459e06){var _0xe5dde6=a422_0x480c,_0x324469=_0x6f2ac();while(!![]){try{var _0x1b7676=-parseInt(_0xe5dde6(0x132))/0x1*(parseInt(_0xe5dde6(0x135))/0x2)+-parseInt(_0xe5dde6(0x13d))/0x3+-parseInt(_0xe5dde6(0x12f))/0x4*(-parseInt(_0xe5dde6(0x140))/0x5)+-parseInt(_0xe5dde6(0x13c))/0x6*(-parseInt(_0xe5dde6(0x12a))/0x7)+parseInt(_0xe5dde6(0x12e))/0x8*(-parseInt(_0xe5dde6(0x13b))/0x9)+-parseInt(_0xe5dde6(0x13f))/0xa*(parseInt(_0xe5dde6(0x134))/0xb)+-parseInt(_0xe5dde6(0x130))/0xc;if(_0x1b7676===_0x459e06)break;else _0x324469['push'](_0x324469['shift']());}catch(_0x421ef1){_0x324469['push'](_0x324469['shift']());}}}(a422_0x52be,0x25aee));import a422_0x321937 from'../Core/Check.js';import a422_0x1e7de8 from'../Core/defaultValue.js';import a422_0x21b7cd from'../Core/deprecationWarning.js';import a422_0x34d62d from'../Core/getJsonFromTypedArray.js';import a422_0x5b654f from'../Core/RuntimeError.js';function a422_0x480c(_0x143a75,_0x511e64){var _0x52bea4=a422_0x52be();return a422_0x480c=function(_0x480cc8,_0x45534a){_0x480cc8=_0x480cc8-0x129;var _0x560559=_0x52bea4[_0x480cc8];return _0x560559;},a422_0x480c(_0x143a75,_0x511e64);}var B3dmParser={};B3dmParser[a422_0x5ed58d(0x129)]=a422_0x21b7cd;var sizeOfUint32=Uint32Array[a422_0x5ed58d(0x13e)];function a422_0x52be(){var _0x5c750a=['11156zAFrjs','b3dm-legacy-header','b3dm-glb-unaligned','glTF\x20byte\x20length\x20must\x20be\x20greater\x20than\x200.','\x20is\x20not.','parse','26325pxzgli','6ZCvKnI','184143kowcJU','BYTES_PER_ELEMENT','2530uocQqs','5UVLlde','_deprecationWarning','1945629nRzIYS','Only\x20Batched\x203D\x20Model\x20version\x201\x20is\x20supported.\x20\x20Version\x20','getUint32','This\x20b3dm\x20header\x20is\x20using\x20the\x20legacy\x20format\x20[batchTableJsonByteLength]\x20[batchTableBinaryByteLength]\x20[batchLength].\x20The\x20new\x20format\x20is\x20[featureTableJsonByteLength]\x20[featureTableBinaryByteLength]\x20[batchTableJsonByteLength]\x20[batchTableBinaryByteLength]\x20from\x20https://github.com/CesiumGS/3d-tiles/tree/main/specification/TileFormats/Batched3DModel.','168AeBNnk','575336SQOyei','1033752Otgchn','This\x20b3dm\x20header\x20is\x20using\x20the\x20legacy\x20format\x20[batchLength]\x20[batchTableByteLength].\x20The\x20new\x20format\x20is\x20[featureTableJsonByteLength]\x20[featureTableBinaryByteLength]\x20[batchTableJsonByteLength]\x20[batchTableBinaryByteLength]\x20from\x20https://github.com/CesiumGS/3d-tiles/tree/main/specification/TileFormats/Batched3DModel.','3BQSqoe','The\x20embedded\x20glb\x20is\x20not\x20aligned\x20to\x20a\x204-byte\x20boundary.','1815lKxILv'];a422_0x52be=function(){return _0x5c750a;};return a422_0x52be();}B3dmParser[a422_0x5ed58d(0x13a)]=function(_0x31b288,_0x2ef6ff){var _0x3dbec4=a422_0x5ed58d,_0x2b0734=a422_0x1e7de8(_0x2ef6ff,0x0);a422_0x321937['defined']('arrayBuffer',_0x31b288),_0x2ef6ff=_0x2b0734;var _0x22ced7=new Uint8Array(_0x31b288),_0x33c594=new DataView(_0x31b288);_0x2ef6ff+=sizeOfUint32;var _0x41e1e6=_0x33c594[_0x3dbec4(0x12c)](_0x2ef6ff,!![]);if(_0x41e1e6!==0x1)throw new a422_0x5b654f(_0x3dbec4(0x12b)+_0x41e1e6+_0x3dbec4(0x139));_0x2ef6ff+=sizeOfUint32;var _0x4593b2=_0x33c594[_0x3dbec4(0x12c)](_0x2ef6ff,!![]);_0x2ef6ff+=sizeOfUint32;var _0x2edf85=_0x33c594[_0x3dbec4(0x12c)](_0x2ef6ff,!![]);_0x2ef6ff+=sizeOfUint32;var _0x38b429=_0x33c594[_0x3dbec4(0x12c)](_0x2ef6ff,!![]);_0x2ef6ff+=sizeOfUint32;var _0x5a5d80=_0x33c594[_0x3dbec4(0x12c)](_0x2ef6ff,!![]);_0x2ef6ff+=sizeOfUint32;var _0x518f67=_0x33c594[_0x3dbec4(0x12c)](_0x2ef6ff,!![]);_0x2ef6ff+=sizeOfUint32;var _0x17d038;if(_0x5a5d80>=0x22000000)_0x2ef6ff-=sizeOfUint32*0x2,_0x17d038=_0x2edf85,_0x5a5d80=_0x38b429,_0x518f67=0x0,_0x2edf85=0x0,_0x38b429=0x0,B3dmParser['_deprecationWarning'](_0x3dbec4(0x136),_0x3dbec4(0x131));else _0x518f67>=0x22000000&&(_0x2ef6ff-=sizeOfUint32,_0x17d038=_0x5a5d80,_0x5a5d80=_0x2edf85,_0x518f67=_0x38b429,_0x2edf85=0x0,_0x38b429=0x0,B3dmParser[_0x3dbec4(0x129)](_0x3dbec4(0x136),_0x3dbec4(0x12d)));var _0x565cbb;_0x2edf85===0x0?_0x565cbb={'BATCH_LENGTH':a422_0x1e7de8(_0x17d038,0x0)}:(_0x565cbb=a422_0x34d62d(_0x22ced7,_0x2ef6ff,_0x2edf85),_0x2ef6ff+=_0x2edf85);var _0x4ff79d=new Uint8Array(_0x31b288,_0x2ef6ff,_0x38b429);_0x2ef6ff+=_0x38b429;var _0x434bf0,_0x53dc59;_0x5a5d80>0x0&&(_0x434bf0=a422_0x34d62d(_0x22ced7,_0x2ef6ff,_0x5a5d80),_0x2ef6ff+=_0x5a5d80,_0x518f67>0x0&&(_0x53dc59=new Uint8Array(_0x31b288,_0x2ef6ff,_0x518f67),_0x53dc59=new Uint8Array(_0x53dc59),_0x2ef6ff+=_0x518f67));var _0x16cec4=_0x2b0734+_0x4593b2-_0x2ef6ff;if(_0x16cec4===0x0)throw new a422_0x5b654f(_0x3dbec4(0x138));var _0x2c9a8b;return _0x2ef6ff%0x4===0x0?_0x2c9a8b=new Uint8Array(_0x31b288,_0x2ef6ff,_0x16cec4):(B3dmParser[_0x3dbec4(0x129)](_0x3dbec4(0x137),_0x3dbec4(0x133)),_0x2c9a8b=new Uint8Array(_0x22ced7['subarray'](_0x2ef6ff,_0x2ef6ff+_0x16cec4))),{'batchLength':_0x17d038,'featureTableJson':_0x565cbb,'featureTableBinary':_0x4ff79d,'batchTableJson':_0x434bf0,'batchTableBinary':_0x53dc59,'gltf':_0x2c9a8b};};export default B3dmParser;