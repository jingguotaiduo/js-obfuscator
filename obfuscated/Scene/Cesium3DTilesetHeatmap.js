var a459_0x4f547c=a459_0x5247;(function(_0x9d15ec,_0x56cfb3){var _0x35a651=a459_0x5247,_0x5a440c=_0x9d15ec();while(!![]){try{var _0x73dc26=-parseInt(_0x35a651(0x162))/0x1*(parseInt(_0x35a651(0x168))/0x2)+-parseInt(_0x35a651(0x160))/0x3+parseInt(_0x35a651(0x17f))/0x4+-parseInt(_0x35a651(0x165))/0x5*(-parseInt(_0x35a651(0x171))/0x6)+-parseInt(_0x35a651(0x176))/0x7+parseInt(_0x35a651(0x16a))/0x8*(-parseInt(_0x35a651(0x17e))/0x9)+parseInt(_0x35a651(0x182))/0xa;if(_0x73dc26===_0x56cfb3)break;else _0x5a440c['push'](_0x5a440c['shift']());}catch(_0x308dea){_0x5a440c['push'](_0x5a440c['shift']());}}}(a459_0x325e,0xb2e1e));import a459_0x18d82b from'../Core/Color.js';import a459_0x399406 from'../Core/defined.js';function a459_0x325e(){var _0x433ce8=['_previousMinimum','setReferenceMinimumMaximum','19750930ecYOqw','3216192PpsKZd','_previousMaximum','83852lyUokZ','green','frameNumber','120wpjBta','contentAvailable','_referenceMaximum','32PPLzls','ceil','2792dBcnSU','getTime','_maximum','lerp','min','_debugColor','red','148062sNfuQq','_referenceMinimum','tilePropertyName','prototype','colorize','1963591GbjbAw','_minimum','EPSILON7','MAX_VALUE','length','_selectedFrame','resetMinimumMaximum','WHITE','5634tllGtk','4312176aGLroA'];a459_0x325e=function(){return _0x433ce8;};return a459_0x325e();}import a459_0x323673 from'../Core/JulianDate.js';import a459_0x358f3f from'../Core/Math.js';function Cesium3DTilesetHeatmap(_0x4b80fb){var _0x3c2e1f=a459_0x5247;this[_0x3c2e1f(0x173)]=_0x4b80fb,this['_minimum']=Number[_0x3c2e1f(0x179)],this[_0x3c2e1f(0x16c)]=-Number[_0x3c2e1f(0x179)],this[_0x3c2e1f(0x180)]=Number['MAX_VALUE'],this[_0x3c2e1f(0x161)]=-Number['MAX_VALUE'],this[_0x3c2e1f(0x172)]={},this[_0x3c2e1f(0x167)]={};}function getHeatmapValue(_0x51506c,_0x5cd69a){var _0x4aeeb6=a459_0x5247,_0x4c8b61;return _0x5cd69a==='_loadTimestamp'?_0x4c8b61=a459_0x323673['toDate'](_0x51506c)[_0x4aeeb6(0x16b)]():_0x4c8b61=_0x51506c,_0x4c8b61;}function a459_0x5247(_0x2bee53,_0xd56792){var _0x325e04=a459_0x325e();return a459_0x5247=function(_0x5247b9,_0x534f49){_0x5247b9=_0x5247b9-0x160;var _0x57a992=_0x325e04[_0x5247b9];return _0x57a992;},a459_0x5247(_0x2bee53,_0xd56792);}Cesium3DTilesetHeatmap[a459_0x4f547c(0x174)][a459_0x4f547c(0x181)]=function(_0x157799,_0x83cd5a,_0x2f2db1){var _0x1f7129=a459_0x4f547c;this[_0x1f7129(0x172)][_0x2f2db1]=getHeatmapValue(_0x157799,_0x2f2db1),this['_referenceMaximum'][_0x2f2db1]=getHeatmapValue(_0x83cd5a,_0x2f2db1);};function getHeatmapValueAndUpdateMinimumMaximum(_0x250c20,_0x2ad880){var _0x28ea4d=a459_0x4f547c,_0x567f5c=_0x250c20[_0x28ea4d(0x173)];if(a459_0x399406(_0x567f5c)){var _0x314b49=getHeatmapValue(_0x2ad880[_0x567f5c],_0x567f5c);if(!a459_0x399406(_0x314b49))return _0x250c20[_0x28ea4d(0x173)]=undefined,_0x314b49;return _0x250c20[_0x28ea4d(0x16c)]=Math['max'](_0x314b49,_0x250c20['_maximum']),_0x250c20[_0x28ea4d(0x177)]=Math[_0x28ea4d(0x16e)](_0x314b49,_0x250c20[_0x28ea4d(0x177)]),_0x314b49;}}var heatmapColors=[new a459_0x18d82b(0.1,0.1,0.1,0x1),new a459_0x18d82b(0.153,0.278,0.878,0x1),new a459_0x18d82b(0.827,0.231,0.49,0x1),new a459_0x18d82b(0.827,0.188,0.22,0x1),new a459_0x18d82b(0x1,0.592,0.259,0x1),new a459_0x18d82b(0x1,0.843,0x0,0x1)];Cesium3DTilesetHeatmap[a459_0x4f547c(0x174)][a459_0x4f547c(0x175)]=function(_0x151f4c,_0x1fab38){var _0x5de117=a459_0x4f547c,_0x3530f6=this['tilePropertyName'];if(!a459_0x399406(_0x3530f6)||!_0x151f4c[_0x5de117(0x166)]||_0x151f4c[_0x5de117(0x17b)]!==_0x1fab38[_0x5de117(0x164)])return;var _0x458ab3=getHeatmapValueAndUpdateMinimumMaximum(this,_0x151f4c),_0x207a53=this[_0x5de117(0x180)],_0x4818d1=this[_0x5de117(0x161)];if(_0x207a53===Number[_0x5de117(0x179)]||_0x4818d1===-Number['MAX_VALUE'])return;var _0x4e345c=_0x4818d1-_0x207a53+a459_0x358f3f[_0x5de117(0x178)],_0x6b38ea=a459_0x358f3f['clamp'](_0x458ab3-_0x207a53,0x0,_0x4e345c),_0x3f16bf=_0x6b38ea/_0x4e345c,_0x57dfcb=heatmapColors[_0x5de117(0x17a)]-0x1,_0x30a65d=_0x3f16bf*_0x57dfcb,_0x780416=Math['floor'](_0x30a65d),_0x39a733=Math[_0x5de117(0x169)](_0x30a65d),_0x1d9087=_0x30a65d-_0x780416,_0x3bf12f=heatmapColors[_0x780416],_0xa01880=heatmapColors[_0x39a733],_0xcf3f04=a459_0x18d82b['clone'](a459_0x18d82b[_0x5de117(0x17d)]);_0xcf3f04['red']=a459_0x358f3f[_0x5de117(0x16d)](_0x3bf12f[_0x5de117(0x170)],_0xa01880[_0x5de117(0x170)],_0x1d9087),_0xcf3f04[_0x5de117(0x163)]=a459_0x358f3f[_0x5de117(0x16d)](_0x3bf12f[_0x5de117(0x163)],_0xa01880[_0x5de117(0x163)],_0x1d9087),_0xcf3f04['blue']=a459_0x358f3f[_0x5de117(0x16d)](_0x3bf12f['blue'],_0xa01880['blue'],_0x1d9087),_0x151f4c[_0x5de117(0x16f)]=_0xcf3f04;},Cesium3DTilesetHeatmap['prototype'][a459_0x4f547c(0x17c)]=function(){var _0x10e4fc=a459_0x4f547c,_0x1d7b12=this[_0x10e4fc(0x173)];if(a459_0x399406(_0x1d7b12)){var _0x1ee402=this[_0x10e4fc(0x172)][_0x1d7b12],_0x2bc36e=this[_0x10e4fc(0x167)][_0x1d7b12],_0x34f702=a459_0x399406(_0x1ee402)&&a459_0x399406(_0x2bc36e);this[_0x10e4fc(0x180)]=_0x34f702?_0x1ee402:this[_0x10e4fc(0x177)],this[_0x10e4fc(0x161)]=_0x34f702?_0x2bc36e:this[_0x10e4fc(0x16c)],this[_0x10e4fc(0x177)]=Number[_0x10e4fc(0x179)],this['_maximum']=-Number['MAX_VALUE'];}};export default Cesium3DTilesetHeatmap;