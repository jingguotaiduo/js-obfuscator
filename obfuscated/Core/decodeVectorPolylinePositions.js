(function(_0x338243,_0x3e1bbc){var _0x3800a8=a55_0x540e,_0x396323=_0x338243();while(!![]){try{var _0x1d0ac2=parseInt(_0x3800a8(0xc9))/0x1*(parseInt(_0x3800a8(0xca))/0x2)+parseInt(_0x3800a8(0xd6))/0x3*(parseInt(_0x3800a8(0xcb))/0x4)+-parseInt(_0x3800a8(0xd4))/0x5*(parseInt(_0x3800a8(0xcf))/0x6)+parseInt(_0x3800a8(0xd2))/0x7*(parseInt(_0x3800a8(0xd1))/0x8)+-parseInt(_0x3800a8(0xd3))/0x9+-parseInt(_0x3800a8(0xd5))/0xa+-parseInt(_0x3800a8(0xcd))/0xb*(-parseInt(_0x3800a8(0xc5))/0xc);if(_0x1d0ac2===_0x3e1bbc)break;else _0x396323['push'](_0x396323['shift']());}catch(_0x335d04){_0x396323['push'](_0x396323['shift']());}}}(a55_0x3936,0x990f6));import a55_0x55c977 from'./AttributeCompression.js';import a55_0x5880df from'./Cartesian3.js';import a55_0x22ad5e from'./Cartographic.js';function a55_0x3936(){var _0x17dfb6=['length','1zPeyyI','1418606SnMjYn','244bvCwsT','zigZagDeltaDecode','1154021DMZVHU','lerp','36tKceVQ','fromRadians','8tXPKCg','1510565UciEhU','4354920ScBKbZ','76610lmIPRB','3354540DNxApr','24993zEpGPQ','subarray','cartographicToCartesian','north','12BJENPr','south','east'];a55_0x3936=function(){return _0x17dfb6;};return a55_0x3936();}import a55_0xb649e5 from'./Math.js';var maxShort=0x7fff,scratchBVCartographic=new a55_0x22ad5e(),scratchEncodedPosition=new a55_0x5880df();function a55_0x540e(_0x9fbf28,_0x2878fd){var _0x3936c7=a55_0x3936();return a55_0x540e=function(_0x540e14,_0x3f8ac9){_0x540e14=_0x540e14-0xc5;var _0x19f433=_0x3936c7[_0x540e14];return _0x19f433;},a55_0x540e(_0x9fbf28,_0x2878fd);}function decodeVectorPolylinePositions(_0x3d5d43,_0x4b6834,_0x2e772f,_0x4f86cc,_0x3d2d90){var _0x3a676e=a55_0x540e,_0x4d945c=_0x3d5d43[_0x3a676e(0xc8)]/0x3,_0x4867b6=_0x3d5d43[_0x3a676e(0xd7)](0x0,_0x4d945c),_0x4839b9=_0x3d5d43[_0x3a676e(0xd7)](_0x4d945c,0x2*_0x4d945c),_0x462f85=_0x3d5d43[_0x3a676e(0xd7)](0x2*_0x4d945c,0x3*_0x4d945c);a55_0x55c977[_0x3a676e(0xcc)](_0x4867b6,_0x4839b9,_0x462f85);var _0x47913e=new Float64Array(_0x3d5d43[_0x3a676e(0xc8)]);for(var _0x2de2fb=0x0;_0x2de2fb<_0x4d945c;++_0x2de2fb){var _0x12a9ec=_0x4867b6[_0x2de2fb],_0x4c2a2a=_0x4839b9[_0x2de2fb],_0x35dbae=_0x462f85[_0x2de2fb],_0x5eac1c=a55_0xb649e5[_0x3a676e(0xce)](_0x4b6834['west'],_0x4b6834[_0x3a676e(0xc7)],_0x12a9ec/maxShort),_0x556b84=a55_0xb649e5[_0x3a676e(0xce)](_0x4b6834[_0x3a676e(0xc6)],_0x4b6834[_0x3a676e(0xd9)],_0x4c2a2a/maxShort),_0x59585d=a55_0xb649e5[_0x3a676e(0xce)](_0x2e772f,_0x4f86cc,_0x35dbae/maxShort),_0x51fc7e=a55_0x22ad5e[_0x3a676e(0xd0)](_0x5eac1c,_0x556b84,_0x59585d,scratchBVCartographic),_0xbf8bbf=_0x3d2d90[_0x3a676e(0xd8)](_0x51fc7e,scratchEncodedPosition);a55_0x5880df['pack'](_0xbf8bbf,_0x47913e,_0x2de2fb*0x3);}return _0x47913e;}export default decodeVectorPolylinePositions;