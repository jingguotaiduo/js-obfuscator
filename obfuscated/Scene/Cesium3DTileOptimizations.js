function a452_0x25d8(_0x2c6729,_0x58d655){var _0x49f862=a452_0x49f8();return a452_0x25d8=function(_0x25d8ea,_0x4f55d4){_0x25d8ea=_0x25d8ea-0xf2;var _0x1a170c=_0x49f862[_0x25d8ea];return _0x1a170c;},a452_0x25d8(_0x2c6729,_0x58d655);}var a452_0x5ce3c3=a452_0x25d8;(function(_0x1a4c4d,_0x4dad7c){var _0x41ce5b=a452_0x25d8,_0x22cdf1=_0x1a4c4d();while(!![]){try{var _0x56f3f2=-parseInt(_0x41ce5b(0xfd))/0x1+parseInt(_0x41ce5b(0x107))/0x2+parseInt(_0x41ce5b(0x104))/0x3*(-parseInt(_0x41ce5b(0xf7))/0x4)+parseInt(_0x41ce5b(0xf4))/0x5*(-parseInt(_0x41ce5b(0xf2))/0x6)+-parseInt(_0x41ce5b(0xfa))/0x7+-parseInt(_0x41ce5b(0x105))/0x8+-parseInt(_0x41ce5b(0xff))/0x9*(-parseInt(_0x41ce5b(0xf8))/0xa);if(_0x56f3f2===_0x4dad7c)break;else _0x22cdf1['push'](_0x22cdf1['shift']());}catch(_0x30e65c){_0x22cdf1['push'](_0x22cdf1['shift']());}}}(a452_0x49f8,0xe2aec));import a452_0x3b2e19 from'../Core/Cartesian3.js';import a452_0x4ff035 from'../Core/Check.js';import a452_0xd03580 from'./Cesium3DTileOptimizationHint.js';import a452_0x3fa25f from'./TileBoundingRegion.js';import a452_0x38840c from'./TileOrientedBoundingBox.js';var Cesium3DTileOptimizations={},scratchAxis=new a452_0x3b2e19();Cesium3DTileOptimizations[a452_0x5ce3c3(0x102)]=function(_0x21e40b){var _0x414a7b=a452_0x5ce3c3;a452_0x4ff035['typeOf'][_0x414a7b(0xf6)](_0x414a7b(0xfe),_0x21e40b);var _0x385281=_0x21e40b[_0x414a7b(0xf3)],_0x20b5fb=_0x385281[_0x414a7b(0x101)],_0x21e15d=_0x21e40b[_0x414a7b(0x100)];if(_0x21e15d instanceof a452_0x38840c||_0x21e15d instanceof a452_0x3fa25f){var _0x155ae1=_0x21e15d[_0x414a7b(0x108)];_0x21e40b[_0x414a7b(0xf9)]=a452_0xd03580[_0x414a7b(0x103)];for(var _0x53072e=0x0;_0x53072e<_0x20b5fb;++_0x53072e){var _0x43eb5d=_0x385281[_0x53072e],_0x5447ea=_0x43eb5d['boundingVolume'];if(!(_0x5447ea instanceof a452_0x38840c||_0x5447ea instanceof a452_0x3fa25f)){_0x21e40b[_0x414a7b(0xf9)]=a452_0xd03580['SKIP_OPTIMIZATION'];break;}var _0x5e289d=_0x5447ea[_0x414a7b(0x108)],_0x3bce15=a452_0x3b2e19[_0x414a7b(0x106)](_0x5e289d['center'],_0x155ae1[_0x414a7b(0xf5)],scratchAxis),_0x4830f1=a452_0x3b2e19['magnitude'](_0x3bce15);a452_0x3b2e19['divideByScalar'](_0x3bce15,_0x4830f1,_0x3bce15);var _0x3d5af5=Math[_0x414a7b(0xfb)](_0x155ae1[_0x414a7b(0xfc)][0x0]*_0x3bce15['x'])+Math[_0x414a7b(0xfb)](_0x155ae1[_0x414a7b(0xfc)][0x1]*_0x3bce15['y'])+Math['abs'](_0x155ae1[_0x414a7b(0xfc)][0x2]*_0x3bce15['z'])+Math['abs'](_0x155ae1[_0x414a7b(0xfc)][0x3]*_0x3bce15['x'])+Math['abs'](_0x155ae1[_0x414a7b(0xfc)][0x4]*_0x3bce15['y'])+Math[_0x414a7b(0xfb)](_0x155ae1[_0x414a7b(0xfc)][0x5]*_0x3bce15['z'])+Math[_0x414a7b(0xfb)](_0x155ae1[_0x414a7b(0xfc)][0x6]*_0x3bce15['x'])+Math[_0x414a7b(0xfb)](_0x155ae1[_0x414a7b(0xfc)][0x7]*_0x3bce15['y'])+Math[_0x414a7b(0xfb)](_0x155ae1[_0x414a7b(0xfc)][0x8]*_0x3bce15['z']),_0x3f862a=Math[_0x414a7b(0xfb)](_0x5e289d['halfAxes'][0x0]*_0x3bce15['x'])+Math[_0x414a7b(0xfb)](_0x5e289d['halfAxes'][0x1]*_0x3bce15['y'])+Math[_0x414a7b(0xfb)](_0x5e289d[_0x414a7b(0xfc)][0x2]*_0x3bce15['z'])+Math['abs'](_0x5e289d['halfAxes'][0x3]*_0x3bce15['x'])+Math['abs'](_0x5e289d[_0x414a7b(0xfc)][0x4]*_0x3bce15['y'])+Math[_0x414a7b(0xfb)](_0x5e289d['halfAxes'][0x5]*_0x3bce15['z'])+Math[_0x414a7b(0xfb)](_0x5e289d['halfAxes'][0x6]*_0x3bce15['x'])+Math[_0x414a7b(0xfb)](_0x5e289d['halfAxes'][0x7]*_0x3bce15['y'])+Math['abs'](_0x5e289d[_0x414a7b(0xfc)][0x8]*_0x3bce15['z']);if(_0x3d5af5<=_0x3f862a+_0x4830f1){_0x21e40b['_optimChildrenWithinParent']=a452_0xd03580[_0x414a7b(0x109)];break;}}}return _0x21e40b[_0x414a7b(0xf9)]===a452_0xd03580[_0x414a7b(0x103)];};export default Cesium3DTileOptimizations;function a452_0x49f8(){var _0x12ae19=['815POawDp','center','object','1180052rHnTvY','4072310ygCQtp','_optimChildrenWithinParent','2055760iAHOCF','abs','halfAxes','1188228bUVuzA','tile','99NtMPxT','boundingVolume','length','checkChildrenWithinParent','USE_OPTIMIZATION','3qVPQCh','10190632QgRolt','subtract','2493470SDDgKp','_orientedBoundingBox','SKIP_OPTIMIZATION','64308YXLpWZ','children'];a452_0x49f8=function(){return _0x12ae19;};return a452_0x49f8();}