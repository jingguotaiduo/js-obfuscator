(function(_0x9e2e57,_0x33f940){var _0x5eae57=a446_0x319a,_0x344e1e=_0x9e2e57();while(!![]){try{var _0x52e862=parseInt(_0x5eae57(0x13b))/0x1+parseInt(_0x5eae57(0x132))/0x2*(-parseInt(_0x5eae57(0x13a))/0x3)+parseInt(_0x5eae57(0x136))/0x4+parseInt(_0x5eae57(0x135))/0x5+parseInt(_0x5eae57(0x13d))/0x6+-parseInt(_0x5eae57(0x139))/0x7+-parseInt(_0x5eae57(0x13c))/0x8;if(_0x52e862===_0x33f940)break;else _0x344e1e['push'](_0x344e1e['shift']());}catch(_0x3ed153){_0x344e1e['push'](_0x344e1e['shift']());}}}(a446_0x6d65,0x9100d));import a446_0x37180f from'./Batched3DModel3DTileContent.js';function a446_0x319a(_0x166bcf,_0x4df0ed){var _0x6d65aa=a446_0x6d65();return a446_0x319a=function(_0x319ac8,_0x86a169){_0x319ac8=_0x319ac8-0x132;var _0x28a476=_0x6d65aa[_0x319ac8];return _0x28a476;},a446_0x319a(_0x166bcf,_0x4df0ed);}import a446_0x33c48b from'./Composite3DTileContent.js';import a446_0x35b272 from'./Geometry3DTileContent.js';import a446_0x5e71d2 from'./Gltf3DTileContent.js';import a446_0x59ace1 from'./Implicit3DTileContent.js';function a446_0x6d65(){var _0x352621=['5143775wKxXJE','2665748ogNfce','enableModelExperimental','fromB3dm','493374dhKzpN','453PXUioV','521197xvxmBo','10695288fOaEkB','846876guHOVI','getUint32','4718vpnilZ','byteLength','fromGltf'];a446_0x6d65=function(){return _0x352621;};return a446_0x6d65();}import a446_0x4a40d9 from'./Instanced3DModel3DTileContent.js';import a446_0x522205 from'./PointCloud3DTileContent.js';import a446_0x1c69e0 from'./Tileset3DTileContent.js';import a446_0x42ebe1 from'./Vector3DTileContent.js';import a446_0x362e28 from'../Core/RuntimeError.js';import a446_0x358111 from'./ModelExperimental/ModelExperimental3DTileContent.js';var Cesium3DTileContentFactory={'b3dm':function(_0x54cef2,_0x464d45,_0x553e8e,_0x438ba9,_0x334ffc){var _0x3cc227=a446_0x319a;if(_0x54cef2[_0x3cc227(0x137)])return a446_0x358111[_0x3cc227(0x138)](_0x54cef2,_0x464d45,_0x553e8e,_0x438ba9,_0x334ffc);return new a446_0x37180f(_0x54cef2,_0x464d45,_0x553e8e,_0x438ba9,_0x334ffc);},'pnts':function(_0x3895c1,_0xe06ff,_0x84f55c,_0x4d0720,_0xc931ee){return new a446_0x522205(_0x3895c1,_0xe06ff,_0x84f55c,_0x4d0720,_0xc931ee);},'i3dm':function(_0x20e10e,_0x57e3cc,_0x24e154,_0x47c99b,_0x3980ce){return new a446_0x4a40d9(_0x20e10e,_0x57e3cc,_0x24e154,_0x47c99b,_0x3980ce);},'cmpt':function(_0x1b26f0,_0x2a8adc,_0x531fb5,_0x249856,_0x2c4c4e){return new a446_0x33c48b(_0x1b26f0,_0x2a8adc,_0x531fb5,_0x249856,_0x2c4c4e,Cesium3DTileContentFactory);},'externalTileset':function(_0x204852,_0x21364a,_0x2260bf,_0x2dcb8e){return new a446_0x1c69e0(_0x204852,_0x21364a,_0x2260bf,_0x2dcb8e);},'geom':function(_0x40a9de,_0x2e9735,_0x1e5008,_0x995890,_0x3b6e9e){return new a446_0x35b272(_0x40a9de,_0x2e9735,_0x1e5008,_0x995890,_0x3b6e9e);},'vctr':function(_0x9c4307,_0x3ebe3c,_0x173f43,_0x5ad733,_0x474b2f){return new a446_0x42ebe1(_0x9c4307,_0x3ebe3c,_0x173f43,_0x5ad733,_0x474b2f);},'subt':function(_0x403a74,_0x33f0fd,_0x1f7d54,_0x44d59b,_0x38f199){return new a446_0x59ace1(_0x403a74,_0x33f0fd,_0x1f7d54,_0x44d59b,_0x38f199);},'glb':function(_0x419f42,_0x4869cd,_0x197c97,_0x1e7f7f,_0x58127c){var _0x5167be=a446_0x319a,_0x59dd36=_0x1e7f7f[_0x5167be(0x133)];if(_0x59dd36<0xc)throw new a446_0x362e28('Invalid\x20glb\x20content');var _0x1d45de=new DataView(_0x1e7f7f,_0x58127c),_0x1a3ced=_0x1d45de[_0x5167be(0x13e)](0x8,!![]),_0x2e55fc=new Uint8Array(_0x1e7f7f,_0x58127c,_0x1a3ced);if(_0x419f42[_0x5167be(0x137)])return a446_0x358111[_0x5167be(0x134)](_0x419f42,_0x4869cd,_0x197c97,_0x2e55fc);return new a446_0x5e71d2(_0x419f42,_0x4869cd,_0x197c97,_0x2e55fc);},'gltf':function(_0x3cb3d9,_0x5667ee,_0x50f0d3,_0x5044d4){var _0x54ae10=a446_0x319a;if(_0x3cb3d9[_0x54ae10(0x137)])return a446_0x358111[_0x54ae10(0x134)](_0x3cb3d9,_0x5667ee,_0x50f0d3,_0x5044d4);return new a446_0x5e71d2(_0x3cb3d9,_0x5667ee,_0x50f0d3,_0x5044d4);}};export default Cesium3DTileContentFactory;