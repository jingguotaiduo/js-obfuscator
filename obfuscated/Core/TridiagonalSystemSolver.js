var a252_0x46f1ce=a252_0x504a;(function(_0x5a65b7,_0x1a7a9a){var _0x4907f3=a252_0x504a,_0x468420=_0x5a65b7();while(!![]){try{var _0x2036c1=-parseInt(_0x4907f3(0x1dd))/0x1+-parseInt(_0x4907f3(0x1db))/0x2+-parseInt(_0x4907f3(0x1e4))/0x3+parseInt(_0x4907f3(0x1e0))/0x4*(-parseInt(_0x4907f3(0x1d9))/0x5)+-parseInt(_0x4907f3(0x1de))/0x6*(parseInt(_0x4907f3(0x1e1))/0x7)+-parseInt(_0x4907f3(0x1dc))/0x8+parseInt(_0x4907f3(0x1da))/0x9*(parseInt(_0x4907f3(0x1d6))/0xa);if(_0x2036c1===_0x1a7a9a)break;else _0x468420['push'](_0x468420['shift']());}catch(_0x116884){_0x468420['push'](_0x468420['shift']());}}}(a252_0x1e74,0xc0444));import a252_0x4d7871 from'./Cartesian3.js';import a252_0x14e411 from'./defined.js';import a252_0x49bb2f from'./DeveloperError.js';var TridiagonalSystemSolver={};function a252_0x504a(_0x182b0c,_0x5f2513){var _0x1e743b=a252_0x1e74();return a252_0x504a=function(_0x504a9b,_0x6a311d){_0x504a9b=_0x504a9b-0x1d1;var _0x313ca8=_0x1e743b[_0x504a9b];return _0x313ca8;},a252_0x504a(_0x182b0c,_0x5f2513);}function a252_0x1e74(){var _0x3d84e5=['The\x20array\x20upper\x20is\x20required.','2596911WzorOo','The\x20array\x20right\x20is\x20required.','solve','multiplyByScalar','The\x20array\x20lower\x20is\x20required.','lower\x20and\x20upper\x20must\x20have\x20the\x20same\x20lengths.','length','20rDPyiH','The\x20array\x20diagonal\x20is\x20required.','diagonal\x20and\x20right\x20must\x20have\x20the\x20same\x20lengths.','2085LHFCUW','34557021VXPron','3103916rkYryZ','7969832UgyYzw','1095567PwrQlD','8028ZusOWs','lower\x20and\x20upper\x20must\x20be\x20one\x20less\x20than\x20the\x20length\x20of\x20diagonal.','14164nsknps','4739VjNjxF','subtract'];a252_0x1e74=function(){return _0x3d84e5;};return a252_0x1e74();}TridiagonalSystemSolver[a252_0x46f1ce(0x1d1)]=function(_0x26d0ea,_0x1e76c3,_0x35c2eb,_0x283725){var _0x4a285b=a252_0x46f1ce;if(!a252_0x14e411(_0x26d0ea)||!(_0x26d0ea instanceof Array))throw new a252_0x49bb2f(_0x4a285b(0x1d3));if(!a252_0x14e411(_0x1e76c3)||!(_0x1e76c3 instanceof Array))throw new a252_0x49bb2f(_0x4a285b(0x1d7));if(!a252_0x14e411(_0x35c2eb)||!(_0x35c2eb instanceof Array))throw new a252_0x49bb2f(_0x4a285b(0x1e3));if(!a252_0x14e411(_0x283725)||!(_0x283725 instanceof Array))throw new a252_0x49bb2f(_0x4a285b(0x1e5));if(_0x1e76c3[_0x4a285b(0x1d5)]!==_0x283725[_0x4a285b(0x1d5)])throw new a252_0x49bb2f(_0x4a285b(0x1d8));if(_0x26d0ea[_0x4a285b(0x1d5)]!==_0x35c2eb[_0x4a285b(0x1d5)])throw new a252_0x49bb2f(_0x4a285b(0x1d4));else{if(_0x26d0ea[_0x4a285b(0x1d5)]!==_0x1e76c3[_0x4a285b(0x1d5)]-0x1)throw new a252_0x49bb2f(_0x4a285b(0x1df));}var _0x38179a=new Array(_0x35c2eb[_0x4a285b(0x1d5)]),_0xdb82ab=new Array(_0x283725[_0x4a285b(0x1d5)]),_0x45ad54=new Array(_0x283725[_0x4a285b(0x1d5)]),_0x68e95f;for(_0x68e95f=0x0;_0x68e95f<_0xdb82ab[_0x4a285b(0x1d5)];_0x68e95f++){_0xdb82ab[_0x68e95f]=new a252_0x4d7871(),_0x45ad54[_0x68e95f]=new a252_0x4d7871();}_0x38179a[0x0]=_0x35c2eb[0x0]/_0x1e76c3[0x0],_0xdb82ab[0x0]=a252_0x4d7871[_0x4a285b(0x1d2)](_0x283725[0x0],0x1/_0x1e76c3[0x0],_0xdb82ab[0x0]);var _0x3ce38b;for(_0x68e95f=0x1;_0x68e95f<_0x38179a['length'];++_0x68e95f){_0x3ce38b=0x1/(_0x1e76c3[_0x68e95f]-_0x38179a[_0x68e95f-0x1]*_0x26d0ea[_0x68e95f-0x1]),_0x38179a[_0x68e95f]=_0x35c2eb[_0x68e95f]*_0x3ce38b,_0xdb82ab[_0x68e95f]=a252_0x4d7871['subtract'](_0x283725[_0x68e95f],a252_0x4d7871[_0x4a285b(0x1d2)](_0xdb82ab[_0x68e95f-0x1],_0x26d0ea[_0x68e95f-0x1],_0xdb82ab[_0x68e95f]),_0xdb82ab[_0x68e95f]),_0xdb82ab[_0x68e95f]=a252_0x4d7871[_0x4a285b(0x1d2)](_0xdb82ab[_0x68e95f],_0x3ce38b,_0xdb82ab[_0x68e95f]);}_0x3ce38b=0x1/(_0x1e76c3[_0x68e95f]-_0x38179a[_0x68e95f-0x1]*_0x26d0ea[_0x68e95f-0x1]),_0xdb82ab[_0x68e95f]=a252_0x4d7871['subtract'](_0x283725[_0x68e95f],a252_0x4d7871[_0x4a285b(0x1d2)](_0xdb82ab[_0x68e95f-0x1],_0x26d0ea[_0x68e95f-0x1],_0xdb82ab[_0x68e95f]),_0xdb82ab[_0x68e95f]),_0xdb82ab[_0x68e95f]=a252_0x4d7871['multiplyByScalar'](_0xdb82ab[_0x68e95f],_0x3ce38b,_0xdb82ab[_0x68e95f]),_0x45ad54[_0x45ad54[_0x4a285b(0x1d5)]-0x1]=_0xdb82ab[_0xdb82ab[_0x4a285b(0x1d5)]-0x1];for(_0x68e95f=_0x45ad54[_0x4a285b(0x1d5)]-0x2;_0x68e95f>=0x0;--_0x68e95f){_0x45ad54[_0x68e95f]=a252_0x4d7871[_0x4a285b(0x1e2)](_0xdb82ab[_0x68e95f],a252_0x4d7871[_0x4a285b(0x1d2)](_0x45ad54[_0x68e95f+0x1],_0x38179a[_0x68e95f],_0x45ad54[_0x68e95f]),_0x45ad54[_0x68e95f]);}return _0x45ad54;};export default TridiagonalSystemSolver;