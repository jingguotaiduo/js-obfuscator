var a72_0x3c5f5=a72_0x4184;(function(_0x3d1fa7,_0x2a4b8c){var _0x72a324=a72_0x4184,_0x29ac5f=_0x3d1fa7();while(!![]){try{var _0x561f6a=-parseInt(_0x72a324(0x1bc))/0x1+-parseInt(_0x72a324(0x16c))/0x2+-parseInt(_0x72a324(0x1b4))/0x3*(parseInt(_0x72a324(0x17f))/0x4)+parseInt(_0x72a324(0x171))/0x5*(-parseInt(_0x72a324(0x1a8))/0x6)+-parseInt(_0x72a324(0x178))/0x7*(-parseInt(_0x72a324(0x17a))/0x8)+-parseInt(_0x72a324(0x1a6))/0x9+parseInt(_0x72a324(0x16b))/0xa*(parseInt(_0x72a324(0x1ac))/0xb);if(_0x561f6a===_0x2a4b8c)break;else _0x29ac5f['push'](_0x29ac5f['shift']());}catch(_0xe8cfa2){_0x29ac5f['push'](_0x29ac5f['shift']());}}}(a72_0x2ef1,0x24f76));function a72_0x2ef1(){var _0x1af507=['cartographicArrayToCartesianArray','cartographics','add','equals','64125nJgMEB','EPSILON1','217266GrfIbk','multiplyByScalar','array','min','110PqVzuU','defineProperties','_radiiSquared','getSurfaceNormalIntersectionWithZAxis','position','clone','transformPositionFromScaledSpace','prototype','7827lwFhgF','cartographicToCartesian','length','surfaceArea','cartesianToCartographic','_minimumRadius','func','greaterThan','173914wEqmAJ','LUNAR_RADIUS','unpack','normalize','601760PPNBTS','104030sJxarS','scaleToGeodeticSurface','max','equalsEpsilon','geodeticSurfaceNormal','25FHoLjb','cartesians','greaterThanOrEquals','_oneOverRadiiSquared','rectangle','transformPositionToScaledSpace','_squaredXOverSquaredZ','329vAclpz','_radiiToTheFourth','14704mhRAvE','defined','object','height','toString','188MpDTqa','cartographic','number','_maximumRadius','magnitude','atan2','sign','divideByScalar','scaleToGeocentricSurface','subtract','west','_radii','TWO_PI','freeze','WGS84','cos','geocentricSurfaceNormal','longitude','sin','Ellipsoid.radii.z','asin','MOON','fromCartesian3','typeOf','_oneOverRadii','multiplyComponents','sqrt','geodeticSurfaceNormalCartographic','north','pack','_centerToleranceSquared','east','dot','EPSILON15','Ellipsoid\x20must\x20be\x20an\x20ellipsoid\x20of\x20revolution\x20(radii.x\x20==\x20radii.y)'];a72_0x2ef1=function(){return _0x1af507;};return a72_0x2ef1();}import a72_0x37804e from'./Cartesian3.js';import a72_0x306752 from'./Cartographic.js';import a72_0x57efc6 from'./Check.js';import a72_0x421769 from'./defaultValue.js';import a72_0x497cd4 from'./defined.js';import a72_0x3913a9 from'./DeveloperError.js';import a72_0x2fa4da from'./Math.js';import a72_0x6e7db9 from'./scaleToGeodeticSurface.js';function initialize(_0x42b23a,_0x809ecd,_0x5a9509,_0x53c1e9){var _0x1eccb8=a72_0x4184;_0x809ecd=a72_0x421769(_0x809ecd,0x0),_0x5a9509=a72_0x421769(_0x5a9509,0x0),_0x53c1e9=a72_0x421769(_0x53c1e9,0x0),a72_0x57efc6[_0x1eccb8(0x196)]['number']['greaterThanOrEquals']('x',_0x809ecd,0x0),a72_0x57efc6[_0x1eccb8(0x196)]['number'][_0x1eccb8(0x173)]('y',_0x5a9509,0x0),a72_0x57efc6[_0x1eccb8(0x196)]['number']['greaterThanOrEquals']('z',_0x53c1e9,0x0),_0x42b23a['_radii']=new a72_0x37804e(_0x809ecd,_0x5a9509,_0x53c1e9),_0x42b23a['_radiiSquared']=new a72_0x37804e(_0x809ecd*_0x809ecd,_0x5a9509*_0x5a9509,_0x53c1e9*_0x53c1e9),_0x42b23a[_0x1eccb8(0x179)]=new a72_0x37804e(_0x809ecd*_0x809ecd*_0x809ecd*_0x809ecd,_0x5a9509*_0x5a9509*_0x5a9509*_0x5a9509,_0x53c1e9*_0x53c1e9*_0x53c1e9*_0x53c1e9),_0x42b23a[_0x1eccb8(0x197)]=new a72_0x37804e(_0x809ecd===0x0?0x0:0x1/_0x809ecd,_0x5a9509===0x0?0x0:0x1/_0x5a9509,_0x53c1e9===0x0?0x0:0x1/_0x53c1e9),_0x42b23a[_0x1eccb8(0x174)]=new a72_0x37804e(_0x809ecd===0x0?0x0:0x1/(_0x809ecd*_0x809ecd),_0x5a9509===0x0?0x0:0x1/(_0x5a9509*_0x5a9509),_0x53c1e9===0x0?0x0:0x1/(_0x53c1e9*_0x53c1e9)),_0x42b23a[_0x1eccb8(0x1b9)]=Math[_0x1eccb8(0x1ab)](_0x809ecd,_0x5a9509,_0x53c1e9),_0x42b23a[_0x1eccb8(0x182)]=Math[_0x1eccb8(0x16e)](_0x809ecd,_0x5a9509,_0x53c1e9),_0x42b23a[_0x1eccb8(0x19d)]=a72_0x2fa4da[_0x1eccb8(0x1a7)],_0x42b23a[_0x1eccb8(0x1ae)]['z']!==0x0&&(_0x42b23a['_squaredXOverSquaredZ']=_0x42b23a[_0x1eccb8(0x1ae)]['x']/_0x42b23a[_0x1eccb8(0x1ae)]['z']);}function Ellipsoid(_0x11651e,_0x2dc338,_0x2f2fd7){var _0x6cbf3a=a72_0x4184;this[_0x6cbf3a(0x18a)]=undefined,this[_0x6cbf3a(0x1ae)]=undefined,this['_radiiToTheFourth']=undefined,this[_0x6cbf3a(0x197)]=undefined,this[_0x6cbf3a(0x174)]=undefined,this[_0x6cbf3a(0x1b9)]=undefined,this['_maximumRadius']=undefined,this[_0x6cbf3a(0x19d)]=undefined,this[_0x6cbf3a(0x177)]=undefined,initialize(this,_0x11651e,_0x2dc338,_0x2f2fd7);}Object[a72_0x3c5f5(0x1ad)](Ellipsoid[a72_0x3c5f5(0x1b3)],{'radii':{'get':function(){var _0x3814cf=a72_0x3c5f5;return this[_0x3814cf(0x18a)];}},'radiiSquared':{'get':function(){return this['_radiiSquared'];}},'radiiToTheFourth':{'get':function(){return this['_radiiToTheFourth'];}},'oneOverRadii':{'get':function(){var _0x1a0278=a72_0x3c5f5;return this[_0x1a0278(0x197)];}},'oneOverRadiiSquared':{'get':function(){var _0x390296=a72_0x3c5f5;return this[_0x390296(0x174)];}},'minimumRadius':{'get':function(){var _0x37a504=a72_0x3c5f5;return this[_0x37a504(0x1b9)];}},'maximumRadius':{'get':function(){var _0x62eea0=a72_0x3c5f5;return this[_0x62eea0(0x182)];}}}),Ellipsoid[a72_0x3c5f5(0x1b1)]=function(_0x42fd64,_0x52bcfd){var _0x3ad1cc=a72_0x3c5f5;if(!a72_0x497cd4(_0x42fd64))return undefined;var _0x33d3b3=_0x42fd64[_0x3ad1cc(0x18a)];if(!a72_0x497cd4(_0x52bcfd))return new Ellipsoid(_0x33d3b3['x'],_0x33d3b3['y'],_0x33d3b3['z']);return a72_0x37804e[_0x3ad1cc(0x1b1)](_0x33d3b3,_0x52bcfd['_radii']),a72_0x37804e[_0x3ad1cc(0x1b1)](_0x42fd64[_0x3ad1cc(0x1ae)],_0x52bcfd[_0x3ad1cc(0x1ae)]),a72_0x37804e[_0x3ad1cc(0x1b1)](_0x42fd64['_radiiToTheFourth'],_0x52bcfd['_radiiToTheFourth']),a72_0x37804e[_0x3ad1cc(0x1b1)](_0x42fd64[_0x3ad1cc(0x197)],_0x52bcfd[_0x3ad1cc(0x197)]),a72_0x37804e[_0x3ad1cc(0x1b1)](_0x42fd64[_0x3ad1cc(0x174)],_0x52bcfd['_oneOverRadiiSquared']),_0x52bcfd[_0x3ad1cc(0x1b9)]=_0x42fd64[_0x3ad1cc(0x1b9)],_0x52bcfd['_maximumRadius']=_0x42fd64['_maximumRadius'],_0x52bcfd[_0x3ad1cc(0x19d)]=_0x42fd64[_0x3ad1cc(0x19d)],_0x52bcfd;},Ellipsoid[a72_0x3c5f5(0x195)]=function(_0x5158f5,_0xb818ee){!a72_0x497cd4(_0xb818ee)&&(_0xb818ee=new Ellipsoid());if(!a72_0x497cd4(_0x5158f5))return _0xb818ee;return initialize(_0xb818ee,_0x5158f5['x'],_0x5158f5['y'],_0x5158f5['z']),_0xb818ee;},Ellipsoid[a72_0x3c5f5(0x18d)]=Object[a72_0x3c5f5(0x18c)](new Ellipsoid(0x615299,0x615299,6356752.314245179)),Ellipsoid['UNIT_SPHERE']=Object['freeze'](new Ellipsoid(0x1,0x1,0x1)),Ellipsoid[a72_0x3c5f5(0x194)]=Object[a72_0x3c5f5(0x18c)](new Ellipsoid(a72_0x2fa4da[a72_0x3c5f5(0x168)],a72_0x2fa4da[a72_0x3c5f5(0x168)],a72_0x2fa4da[a72_0x3c5f5(0x168)])),Ellipsoid['prototype']['clone']=function(_0x5e200a){var _0x5e4800=a72_0x3c5f5;return Ellipsoid[_0x5e4800(0x1b1)](this,_0x5e200a);},Ellipsoid['packedLength']=a72_0x37804e['packedLength'],Ellipsoid[a72_0x3c5f5(0x19c)]=function(_0x26a347,_0x121c9d,_0x432201){var _0xb284f0=a72_0x3c5f5;return a72_0x57efc6[_0xb284f0(0x196)]['object']('value',_0x26a347),a72_0x57efc6[_0xb284f0(0x17b)](_0xb284f0(0x1aa),_0x121c9d),_0x432201=a72_0x421769(_0x432201,0x0),a72_0x37804e[_0xb284f0(0x19c)](_0x26a347[_0xb284f0(0x18a)],_0x121c9d,_0x432201),_0x121c9d;},Ellipsoid['unpack']=function(_0x5b02b3,_0xea09b,_0x3e93f5){var _0x567cf7=a72_0x3c5f5;a72_0x57efc6[_0x567cf7(0x17b)]('array',_0x5b02b3),_0xea09b=a72_0x421769(_0xea09b,0x0);var _0x4dcb01=a72_0x37804e[_0x567cf7(0x169)](_0x5b02b3,_0xea09b);return Ellipsoid['fromCartesian3'](_0x4dcb01,_0x3e93f5);},Ellipsoid[a72_0x3c5f5(0x1b3)][a72_0x3c5f5(0x18f)]=a72_0x37804e[a72_0x3c5f5(0x16a)],Ellipsoid[a72_0x3c5f5(0x1b3)][a72_0x3c5f5(0x19a)]=function(_0x4e6d51,_0x27ee0c){var _0x5c28b6=a72_0x3c5f5;a72_0x57efc6['typeOf']['object'](_0x5c28b6(0x180),_0x4e6d51);var _0x39a65f=_0x4e6d51[_0x5c28b6(0x190)],_0x2f6b78=_0x4e6d51['latitude'],_0x2a7f6e=Math['cos'](_0x2f6b78),_0x556d9d=_0x2a7f6e*Math[_0x5c28b6(0x18e)](_0x39a65f),_0x7bec79=_0x2a7f6e*Math[_0x5c28b6(0x191)](_0x39a65f),_0xc69261=Math[_0x5c28b6(0x191)](_0x2f6b78);return!a72_0x497cd4(_0x27ee0c)&&(_0x27ee0c=new a72_0x37804e()),_0x27ee0c['x']=_0x556d9d,_0x27ee0c['y']=_0x7bec79,_0x27ee0c['z']=_0xc69261,a72_0x37804e[_0x5c28b6(0x16a)](_0x27ee0c,_0x27ee0c);},Ellipsoid[a72_0x3c5f5(0x1b3)][a72_0x3c5f5(0x170)]=function(_0x819d8e,_0x55585){var _0x22471f=a72_0x3c5f5;if(a72_0x37804e[_0x22471f(0x16f)](_0x819d8e,a72_0x37804e['ZERO'],a72_0x2fa4da['EPSILON14']))return undefined;return!a72_0x497cd4(_0x55585)&&(_0x55585=new a72_0x37804e()),_0x55585=a72_0x37804e[_0x22471f(0x198)](_0x819d8e,this[_0x22471f(0x174)],_0x55585),a72_0x37804e[_0x22471f(0x16a)](_0x55585,_0x55585);};var cartographicToCartesianNormal=new a72_0x37804e(),cartographicToCartesianK=new a72_0x37804e();Ellipsoid[a72_0x3c5f5(0x1b3)]['cartographicToCartesian']=function(_0x3f40cd,_0x43f4ae){var _0x3b88ee=a72_0x3c5f5,_0x2ccdef=cartographicToCartesianNormal,_0x40dcfd=cartographicToCartesianK;this[_0x3b88ee(0x19a)](_0x3f40cd,_0x2ccdef),a72_0x37804e[_0x3b88ee(0x198)](this[_0x3b88ee(0x1ae)],_0x2ccdef,_0x40dcfd);var _0x53b132=Math[_0x3b88ee(0x199)](a72_0x37804e[_0x3b88ee(0x19f)](_0x2ccdef,_0x40dcfd));return a72_0x37804e[_0x3b88ee(0x186)](_0x40dcfd,_0x53b132,_0x40dcfd),a72_0x37804e[_0x3b88ee(0x1a9)](_0x2ccdef,_0x3f40cd[_0x3b88ee(0x17d)],_0x2ccdef),!a72_0x497cd4(_0x43f4ae)&&(_0x43f4ae=new a72_0x37804e()),a72_0x37804e[_0x3b88ee(0x1a4)](_0x40dcfd,_0x2ccdef,_0x43f4ae);},Ellipsoid[a72_0x3c5f5(0x1b3)][a72_0x3c5f5(0x1a2)]=function(_0x4706f3,_0x570db5){var _0x3f2337=a72_0x3c5f5;a72_0x57efc6[_0x3f2337(0x17b)](_0x3f2337(0x1a3),_0x4706f3);var _0x3c726e=_0x4706f3[_0x3f2337(0x1b6)];!a72_0x497cd4(_0x570db5)?_0x570db5=new Array(_0x3c726e):_0x570db5[_0x3f2337(0x1b6)]=_0x3c726e;for(var _0x56c86d=0x0;_0x56c86d<_0x3c726e;_0x56c86d++){_0x570db5[_0x56c86d]=this[_0x3f2337(0x1b5)](_0x4706f3[_0x56c86d],_0x570db5[_0x56c86d]);}return _0x570db5;};var cartesianToCartographicN=new a72_0x37804e(),cartesianToCartographicP=new a72_0x37804e(),cartesianToCartographicH=new a72_0x37804e();Ellipsoid['prototype'][a72_0x3c5f5(0x1b8)]=function(_0x57eaa1,_0x25a53c){var _0x221e42=a72_0x3c5f5,_0x48ab5d=this[_0x221e42(0x16d)](_0x57eaa1,cartesianToCartographicP);if(!a72_0x497cd4(_0x48ab5d))return undefined;var _0x1493f6=this[_0x221e42(0x170)](_0x48ab5d,cartesianToCartographicN),_0x4bec31=a72_0x37804e[_0x221e42(0x188)](_0x57eaa1,_0x48ab5d,cartesianToCartographicH),_0x5a5203=Math[_0x221e42(0x184)](_0x1493f6['y'],_0x1493f6['x']),_0x406e33=Math[_0x221e42(0x193)](_0x1493f6['z']),_0x5331db=a72_0x2fa4da[_0x221e42(0x185)](a72_0x37804e[_0x221e42(0x19f)](_0x4bec31,_0x57eaa1))*a72_0x37804e[_0x221e42(0x183)](_0x4bec31);if(!a72_0x497cd4(_0x25a53c))return new a72_0x306752(_0x5a5203,_0x406e33,_0x5331db);return _0x25a53c[_0x221e42(0x190)]=_0x5a5203,_0x25a53c['latitude']=_0x406e33,_0x25a53c[_0x221e42(0x17d)]=_0x5331db,_0x25a53c;},Ellipsoid[a72_0x3c5f5(0x1b3)]['cartesianArrayToCartographicArray']=function(_0x5713cd,_0x5a3d97){var _0x555a83=a72_0x3c5f5;a72_0x57efc6[_0x555a83(0x17b)](_0x555a83(0x172),_0x5713cd);var _0x458d18=_0x5713cd[_0x555a83(0x1b6)];!a72_0x497cd4(_0x5a3d97)?_0x5a3d97=new Array(_0x458d18):_0x5a3d97[_0x555a83(0x1b6)]=_0x458d18;for(var _0x58ff08=0x0;_0x58ff08<_0x458d18;++_0x58ff08){_0x5a3d97[_0x58ff08]=this[_0x555a83(0x1b8)](_0x5713cd[_0x58ff08],_0x5a3d97[_0x58ff08]);}return _0x5a3d97;},Ellipsoid[a72_0x3c5f5(0x1b3)][a72_0x3c5f5(0x16d)]=function(_0x19880c,_0x8d8c2b){var _0x15d1a8=a72_0x3c5f5;return a72_0x6e7db9(_0x19880c,this[_0x15d1a8(0x197)],this[_0x15d1a8(0x174)],this[_0x15d1a8(0x19d)],_0x8d8c2b);},Ellipsoid[a72_0x3c5f5(0x1b3)][a72_0x3c5f5(0x187)]=function(_0x3d67b7,_0x415b7b){var _0x2024ed=a72_0x3c5f5;a72_0x57efc6['typeOf'][_0x2024ed(0x17c)]('cartesian',_0x3d67b7);!a72_0x497cd4(_0x415b7b)&&(_0x415b7b=new a72_0x37804e());var _0xda0b48=_0x3d67b7['x'],_0x526df3=_0x3d67b7['y'],_0x1b5873=_0x3d67b7['z'],_0x2f4788=this[_0x2024ed(0x174)],_0x562d96=0x1/Math[_0x2024ed(0x199)](_0xda0b48*_0xda0b48*_0x2f4788['x']+_0x526df3*_0x526df3*_0x2f4788['y']+_0x1b5873*_0x1b5873*_0x2f4788['z']);return a72_0x37804e[_0x2024ed(0x1a9)](_0x3d67b7,_0x562d96,_0x415b7b);},Ellipsoid[a72_0x3c5f5(0x1b3)][a72_0x3c5f5(0x176)]=function(_0x14ce74,_0x4ceb18){var _0x14b8b1=a72_0x3c5f5;return!a72_0x497cd4(_0x4ceb18)&&(_0x4ceb18=new a72_0x37804e()),a72_0x37804e['multiplyComponents'](_0x14ce74,this[_0x14b8b1(0x197)],_0x4ceb18);},Ellipsoid[a72_0x3c5f5(0x1b3)][a72_0x3c5f5(0x1b2)]=function(_0x265d62,_0xa6d3f1){var _0x2a7fe9=a72_0x3c5f5;return!a72_0x497cd4(_0xa6d3f1)&&(_0xa6d3f1=new a72_0x37804e()),a72_0x37804e[_0x2a7fe9(0x198)](_0x265d62,this['_radii'],_0xa6d3f1);},Ellipsoid[a72_0x3c5f5(0x1b3)]['equals']=function(_0x29c325){var _0x45a7ad=a72_0x3c5f5;return this===_0x29c325||a72_0x497cd4(_0x29c325)&&a72_0x37804e[_0x45a7ad(0x1a5)](this[_0x45a7ad(0x18a)],_0x29c325['_radii']);},Ellipsoid[a72_0x3c5f5(0x1b3)][a72_0x3c5f5(0x17e)]=function(){var _0xca4df9=a72_0x3c5f5;return this[_0xca4df9(0x18a)][_0xca4df9(0x17e)]();},Ellipsoid[a72_0x3c5f5(0x1b3)][a72_0x3c5f5(0x1af)]=function(_0x322259,_0xbe8071,_0x4961e4){var _0x24384b=a72_0x3c5f5;a72_0x57efc6[_0x24384b(0x196)][_0x24384b(0x17c)](_0x24384b(0x1b0),_0x322259);if(!a72_0x2fa4da['equalsEpsilon'](this[_0x24384b(0x18a)]['x'],this['_radii']['y'],a72_0x2fa4da[_0x24384b(0x1a0)]))throw new a72_0x3913a9(_0x24384b(0x1a1));a72_0x57efc6[_0x24384b(0x196)][_0x24384b(0x181)][_0x24384b(0x1bb)](_0x24384b(0x192),this[_0x24384b(0x18a)]['z'],0x0),_0xbe8071=a72_0x421769(_0xbe8071,0x0);var _0x46fe0b=this[_0x24384b(0x177)];!a72_0x497cd4(_0x4961e4)&&(_0x4961e4=new a72_0x37804e());_0x4961e4['x']=0x0,_0x4961e4['y']=0x0,_0x4961e4['z']=_0x322259['z']*(0x1-_0x46fe0b);if(Math['abs'](_0x4961e4['z'])>=this['_radii']['z']-_0xbe8071)return undefined;return _0x4961e4;};function a72_0x4184(_0x531941,_0x2a6eb0){var _0x2ef1ce=a72_0x2ef1();return a72_0x4184=function(_0x41844a,_0x75f23){_0x41844a=_0x41844a-0x168;var _0x269f25=_0x2ef1ce[_0x41844a];return _0x269f25;},a72_0x4184(_0x531941,_0x2a6eb0);}var abscissas=[0.14887433898163,0.43339539412925,0.67940956829902,0.86506336668898,0.97390652851717,0x0],weights=[0.29552422471475,0.26926671930999,0.21908636251598,0.14945134915058,0.066671344308684,0x0];function gaussLegendreQuadrature(_0x2b4ad5,_0x4c4512,_0x216419){var _0xabb03f=a72_0x3c5f5;a72_0x57efc6[_0xabb03f(0x196)][_0xabb03f(0x181)]('a',_0x2b4ad5),a72_0x57efc6[_0xabb03f(0x196)]['number']('b',_0x4c4512),a72_0x57efc6[_0xabb03f(0x196)][_0xabb03f(0x1ba)](_0xabb03f(0x1ba),_0x216419);var _0x4d410c=0.5*(_0x4c4512+_0x2b4ad5),_0x3fb88f=0.5*(_0x4c4512-_0x2b4ad5),_0x382399=0x0;for(var _0x3e2d6a=0x0;_0x3e2d6a<0x5;_0x3e2d6a++){var _0x482f69=_0x3fb88f*abscissas[_0x3e2d6a];_0x382399+=weights[_0x3e2d6a]*(_0x216419(_0x4d410c+_0x482f69)+_0x216419(_0x4d410c-_0x482f69));}return _0x382399*=_0x3fb88f,_0x382399;}Ellipsoid[a72_0x3c5f5(0x1b3)][a72_0x3c5f5(0x1b7)]=function(_0x5ee711){var _0x259fa7=a72_0x3c5f5;a72_0x57efc6[_0x259fa7(0x196)][_0x259fa7(0x17c)](_0x259fa7(0x175),_0x5ee711);var _0x5de800=_0x5ee711[_0x259fa7(0x189)],_0x314e5d=_0x5ee711[_0x259fa7(0x19e)],_0x556814=_0x5ee711['south'],_0x21b773=_0x5ee711[_0x259fa7(0x19b)];while(_0x314e5d<_0x5de800){_0x314e5d+=a72_0x2fa4da[_0x259fa7(0x18b)];}var _0x13d9ed=this[_0x259fa7(0x1ae)],_0x4e01d1=_0x13d9ed['x'],_0x1296dd=_0x13d9ed['y'],_0x30a0e7=_0x13d9ed['z'],_0x8bf577=_0x4e01d1*_0x1296dd;return gaussLegendreQuadrature(_0x556814,_0x21b773,function(_0x26cc8f){var _0x5400e9=_0x259fa7,_0x499636=Math[_0x5400e9(0x18e)](_0x26cc8f),_0x25997b=Math['sin'](_0x26cc8f);return Math['cos'](_0x26cc8f)*gaussLegendreQuadrature(_0x5de800,_0x314e5d,function(_0xbf153){var _0x3e71cd=_0x5400e9,_0x3b6fb5=Math[_0x3e71cd(0x18e)](_0xbf153),_0x291726=Math[_0x3e71cd(0x191)](_0xbf153);return Math['sqrt'](_0x8bf577*_0x25997b*_0x25997b+_0x30a0e7*(_0x1296dd*_0x3b6fb5*_0x3b6fb5+_0x4e01d1*_0x291726*_0x291726)*_0x499636*_0x499636);});});};export default Ellipsoid;