var a425_0x433ea6=a425_0x1d28;(function(_0x9afc84,_0xcb720f){var _0x277a20=a425_0x1d28,_0x303834=_0x9afc84();while(!![]){try{var _0x4693a5=-parseInt(_0x277a20(0x1b6))/0x1+parseInt(_0x277a20(0x1bb))/0x2*(-parseInt(_0x277a20(0x1dc))/0x3)+-parseInt(_0x277a20(0x1df))/0x4+parseInt(_0x277a20(0x1cf))/0x5*(-parseInt(_0x277a20(0x1bc))/0x6)+-parseInt(_0x277a20(0x1ba))/0x7+-parseInt(_0x277a20(0x1e6))/0x8+-parseInt(_0x277a20(0x1e1))/0x9*(-parseInt(_0x277a20(0x1dd))/0xa);if(_0x4693a5===_0xcb720f)break;else _0x303834['push'](_0x303834['shift']());}catch(_0x33fbb6){_0x303834['push'](_0x303834['shift']());}}}(a425_0x11ec,0x647d9));import a425_0x1f9949 from'../Core/arrayFill.js';import a425_0x5c96ac from'./AttributeType.js';import a425_0x4b5683 from'../Core/Check.js';import a425_0x312a7b from'../Core/clone.js';import a425_0x203e3f from'../Core/combine.js';import a425_0x3cc278 from'../Core/ComponentDatatype.js';import a425_0x57d14d from'../Core/defined.js';import a425_0x558a8b from'../Core/defaultValue.js';import a425_0x440e43 from'../Core/DeveloperError.js';import a425_0x1dce3a from'./getBinaryAccessor.js';import a425_0x231015 from'../Core/RuntimeError.js';export default function BatchTableHierarchy(_0x31d642){var _0x56a89e=a425_0x1d28;this[_0x56a89e(0x1c7)]=undefined,this['_classIds']=undefined,this[_0x56a89e(0x1f0)]=undefined,this['_parentCounts']=undefined,this[_0x56a89e(0x1c0)]=undefined,this[_0x56a89e(0x1ee)]=undefined,a425_0x4b5683[_0x56a89e(0x1be)][_0x56a89e(0x1d3)](_0x56a89e(0x1e3),_0x31d642['extension']),initialize(this,_0x31d642['extension'],_0x31d642[_0x56a89e(0x1d2)]),validateHierarchy(this);}function initialize(_0x2bcfa6,_0x10475a,_0x4f136d){var _0x13c297=a425_0x1d28,_0x105fe4,_0x2b7894,_0x3e135,_0x5504da=_0x10475a['instancesLength'],_0x3db96c=_0x10475a[_0x13c297(0x1c3)],_0x152e30=_0x10475a[_0x13c297(0x1e7)],_0x14614d=_0x10475a[_0x13c297(0x1c4)],_0x2f51ff=_0x10475a[_0x13c297(0x1d1)],_0x184337=_0x5504da;a425_0x57d14d(_0x152e30[_0x13c297(0x1d5)])&&(_0x152e30['componentType']=a425_0x558a8b(_0x152e30['componentType'],a425_0x3cc278[_0x13c297(0x1d8)]),_0x152e30[_0x13c297(0x1d0)]=a425_0x5c96ac[_0x13c297(0x1eb)],_0x3e135=a425_0x1dce3a(_0x152e30),_0x152e30=_0x3e135['createArrayBufferView'](_0x4f136d[_0x13c297(0x1db)],_0x4f136d[_0x13c297(0x1d5)]+_0x152e30['byteOffset'],_0x5504da));var _0x34688b;if(a425_0x57d14d(_0x14614d)){a425_0x57d14d(_0x14614d[_0x13c297(0x1d5)])&&(_0x14614d[_0x13c297(0x1c6)]=a425_0x558a8b(_0x14614d[_0x13c297(0x1c6)],a425_0x3cc278['UNSIGNED_SHORT']),_0x14614d[_0x13c297(0x1d0)]=a425_0x5c96ac[_0x13c297(0x1eb)],_0x3e135=a425_0x1dce3a(_0x14614d),_0x14614d=_0x3e135['createArrayBufferView'](_0x4f136d[_0x13c297(0x1db)],_0x4f136d['byteOffset']+_0x14614d[_0x13c297(0x1d5)],_0x5504da));_0x34688b=new Uint16Array(_0x5504da),_0x184337=0x0;for(_0x105fe4=0x0;_0x105fe4<_0x5504da;++_0x105fe4){_0x34688b[_0x105fe4]=_0x184337,_0x184337+=_0x14614d[_0x105fe4];}}a425_0x57d14d(_0x2f51ff)&&a425_0x57d14d(_0x2f51ff['byteOffset'])&&(_0x2f51ff[_0x13c297(0x1c6)]=a425_0x558a8b(_0x2f51ff[_0x13c297(0x1c6)],a425_0x3cc278[_0x13c297(0x1d8)]),_0x2f51ff['type']=a425_0x5c96ac[_0x13c297(0x1eb)],_0x3e135=a425_0x1dce3a(_0x2f51ff),_0x2f51ff=_0x3e135[_0x13c297(0x1d6)](_0x4f136d[_0x13c297(0x1db)],_0x4f136d[_0x13c297(0x1d5)]+_0x2f51ff[_0x13c297(0x1d5)],_0x184337));var _0x5163b9=_0x3db96c['length'];for(_0x105fe4=0x0;_0x105fe4<_0x5163b9;++_0x105fe4){var _0x37f741=_0x3db96c[_0x105fe4]['length'],_0x1e55b0=_0x3db96c[_0x105fe4][_0x13c297(0x1cb)],_0x3db096=getBinaryProperties(_0x37f741,_0x1e55b0,_0x4f136d);_0x3db96c[_0x105fe4][_0x13c297(0x1cb)]=a425_0x203e3f(_0x3db096,_0x1e55b0);}var _0x25de45=a425_0x1f9949(new Array(_0x5163b9),0x0),_0x4187b5=new Uint16Array(_0x5504da);for(_0x105fe4=0x0;_0x105fe4<_0x5504da;++_0x105fe4){_0x2b7894=_0x152e30[_0x105fe4],_0x4187b5[_0x105fe4]=_0x25de45[_0x2b7894],++_0x25de45[_0x2b7894];}_0x2bcfa6[_0x13c297(0x1c7)]=_0x3db96c,_0x2bcfa6['_classIds']=_0x152e30,_0x2bcfa6[_0x13c297(0x1f0)]=_0x4187b5,_0x2bcfa6[_0x13c297(0x1ce)]=_0x14614d,_0x2bcfa6['_parentIndexes']=_0x34688b,_0x2bcfa6[_0x13c297(0x1ee)]=_0x2f51ff;}function getBinaryProperties(_0x2bae4a,_0x4f474e,_0x322220){var _0x2b70a6=a425_0x1d28,_0xa5af46;for(var _0x5776f0 in _0x4f474e){if(_0x4f474e[_0x2b70a6(0x1d4)](_0x5776f0)){var _0x612d20=_0x4f474e[_0x5776f0],_0x4be1e0=_0x612d20[_0x2b70a6(0x1d5)];if(a425_0x57d14d(_0x4be1e0)){var _0x4d0e95=_0x612d20[_0x2b70a6(0x1c6)],_0x26ad7b=_0x612d20[_0x2b70a6(0x1d0)];if(!a425_0x57d14d(_0x4d0e95))throw new a425_0x231015(_0x2b70a6(0x1c1));if(!a425_0x57d14d(_0x26ad7b))throw new a425_0x231015(_0x2b70a6(0x1cd));if(!a425_0x57d14d(_0x322220))throw new a425_0x231015(_0x2b70a6(0x1ef)+_0x5776f0+_0x2b70a6(0x1e2));var _0x28b1f6=a425_0x1dce3a(_0x612d20),_0x5cdac7=_0x28b1f6['componentsPerAttribute'],_0x281012=_0x28b1f6['classType'],_0x16c7b9=_0x28b1f6[_0x2b70a6(0x1d6)](_0x322220['buffer'],_0x322220[_0x2b70a6(0x1d5)]+_0x4be1e0,_0x2bae4a);!a425_0x57d14d(_0xa5af46)&&(_0xa5af46={}),_0xa5af46[_0x5776f0]={'typedArray':_0x16c7b9,'componentCount':_0x5cdac7,'type':_0x281012};}}}return _0xa5af46;}var scratchValidateStack=[];function validateHierarchy(_0x2e5f04){var _0x1fbacd=a425_0x1d28,_0x3d67f7=scratchValidateStack;_0x3d67f7[_0x1fbacd(0x1e0)]=0x0;var _0x1de0b6=_0x2e5f04['_classIds'],_0x3f74ee=_0x1de0b6[_0x1fbacd(0x1e0)];for(var _0x46949d=0x0;_0x46949d<_0x3f74ee;++_0x46949d){validateInstance(_0x2e5f04,_0x46949d,_0x3d67f7);}}function validateInstance(_0xfcf758,_0x26e495,_0x46a97b){var _0x5d9ed5=a425_0x1d28,_0x40097b=_0xfcf758[_0x5d9ed5(0x1ce)],_0x146ab9=_0xfcf758['_parentIds'],_0x22ec1d=_0xfcf758[_0x5d9ed5(0x1c0)],_0x245d65=_0xfcf758[_0x5d9ed5(0x1e8)],_0x1a7137=_0x245d65[_0x5d9ed5(0x1e0)];if(!a425_0x57d14d(_0x146ab9))return;if(_0x26e495>=_0x1a7137)throw new a425_0x440e43(_0x5d9ed5(0x1c8)+_0x26e495+_0x5d9ed5(0x1b8)+_0x1a7137);if(_0x46a97b[_0x5d9ed5(0x1d7)](_0x26e495)>-0x1)throw new a425_0x440e43(_0x5d9ed5(0x1e4));_0x46a97b[_0x5d9ed5(0x1de)](_0x26e495);var _0x48b7c0=a425_0x57d14d(_0x40097b)?_0x40097b[_0x26e495]:0x1,_0x4b5c8a=a425_0x57d14d(_0x40097b)?_0x22ec1d[_0x26e495]:_0x26e495;for(var _0x5be587=0x0;_0x5be587<_0x48b7c0;++_0x5be587){var _0x147fc0=_0x146ab9[_0x4b5c8a+_0x5be587];_0x147fc0!==_0x26e495&&validateInstance(_0xfcf758,_0x147fc0,_0x46a97b);}_0x46a97b['pop'](_0x26e495);}var scratchVisited=[],scratchStack=[],marker=0x0;function traverseHierarchyMultipleParents(_0x2f60ca,_0xdd9ee5,_0x43c91b){var _0x1465d1=a425_0x1d28,_0x1464c9=_0x2f60ca[_0x1465d1(0x1e8)],_0x105edc=_0x2f60ca['_parentCounts'],_0x2616d9=_0x2f60ca[_0x1465d1(0x1ee)],_0x2ebb08=_0x2f60ca[_0x1465d1(0x1c0)],_0x5ac6b9=_0x1464c9['length'],_0x3c013d=scratchVisited;_0x3c013d[_0x1465d1(0x1e0)]=Math[_0x1465d1(0x1c2)](_0x3c013d[_0x1465d1(0x1e0)],_0x5ac6b9);var _0x51408a=++marker,_0x1c8ae3=scratchStack;_0x1c8ae3[_0x1465d1(0x1e0)]=0x0,_0x1c8ae3['push'](_0xdd9ee5);while(_0x1c8ae3['length']>0x0){_0xdd9ee5=_0x1c8ae3[_0x1465d1(0x1cc)]();if(_0x3c013d[_0xdd9ee5]===_0x51408a)continue;_0x3c013d[_0xdd9ee5]=_0x51408a;var _0x15e6e0=_0x43c91b(_0x2f60ca,_0xdd9ee5);if(a425_0x57d14d(_0x15e6e0))return _0x15e6e0;var _0x503334=_0x105edc[_0xdd9ee5],_0x248d3f=_0x2ebb08[_0xdd9ee5];for(var _0x3795a3=0x0;_0x3795a3<_0x503334;++_0x3795a3){var _0x1e900d=_0x2616d9[_0x248d3f+_0x3795a3];_0x1e900d!==_0xdd9ee5&&_0x1c8ae3[_0x1465d1(0x1de)](_0x1e900d);}}}function traverseHierarchySingleParent(_0x1f0c00,_0x8d85e0,_0x48e57d){var _0x2fdaad=a425_0x1d28,_0x46146a=!![];while(_0x46146a){var _0x4b6893=_0x48e57d(_0x1f0c00,_0x8d85e0);if(a425_0x57d14d(_0x4b6893))return _0x4b6893;var _0x33560a=_0x1f0c00[_0x2fdaad(0x1ee)][_0x8d85e0];_0x46146a=_0x33560a!==_0x8d85e0,_0x8d85e0=_0x33560a;}}function traverseHierarchy(_0x1c3183,_0xeefda4,_0x409237){var _0x3a5778=a425_0x1d28,_0xe69700=_0x1c3183['_parentCounts'],_0x26e7a4=_0x1c3183[_0x3a5778(0x1ee)];if(!a425_0x57d14d(_0x26e7a4))return _0x409237(_0x1c3183,_0xeefda4);else{if(a425_0x57d14d(_0xe69700))return traverseHierarchyMultipleParents(_0x1c3183,_0xeefda4,_0x409237);}return traverseHierarchySingleParent(_0x1c3183,_0xeefda4,_0x409237);}function a425_0x1d28(_0x3ae364,_0x96ba14){var _0x11ec57=a425_0x11ec();return a425_0x1d28=function(_0x1d2842,_0x41e682){_0x1d2842=_0x1d2842-0x1b6;var _0x90d228=_0x11ec57[_0x1d2842];return _0x90d228;},a425_0x1d28(_0x3ae364,_0x96ba14);}BatchTableHierarchy[a425_0x433ea6(0x1ed)][a425_0x433ea6(0x1bf)]=function(_0x36ef5f,_0x3e518b){var _0x3c0270=traverseHierarchy(this,_0x36ef5f,function(_0x1d90ef,_0x1f6166){var _0x15fa43=a425_0x1d28,_0x228a1d=_0x1d90ef[_0x15fa43(0x1e8)][_0x1f6166],_0x2b2b07=_0x1d90ef['_classes'][_0x228a1d][_0x15fa43(0x1cb)];if(a425_0x57d14d(_0x2b2b07[_0x3e518b]))return!![];});return a425_0x57d14d(_0x3c0270);},BatchTableHierarchy[a425_0x433ea6(0x1ed)][a425_0x433ea6(0x1bd)]=function(_0x34a387){var _0x453353=a425_0x433ea6,_0x998215=this[_0x453353(0x1c7)],_0x532356=_0x998215['length'];for(var _0x2ffc46=0x0;_0x2ffc46<_0x532356;++_0x2ffc46){var _0x1bbeca=_0x998215[_0x2ffc46][_0x453353(0x1cb)];if(a425_0x57d14d(_0x1bbeca[_0x34a387]))return!![];}return![];},BatchTableHierarchy[a425_0x433ea6(0x1ed)][a425_0x433ea6(0x1b9)]=function(_0x10824e,_0x15938a){return _0x15938a=a425_0x57d14d(_0x15938a)?_0x15938a:[],_0x15938a['length']=0x0,traverseHierarchy(this,_0x10824e,function(_0x52398c,_0x3231a4){var _0xffd635=a425_0x1d28,_0x359b82=_0x52398c[_0xffd635(0x1e8)][_0x3231a4],_0x2457ee=_0x52398c[_0xffd635(0x1c7)][_0x359b82][_0xffd635(0x1cb)];for(var _0x41c5d2 in _0x2457ee){_0x2457ee[_0xffd635(0x1d4)](_0x41c5d2)&&(_0x15938a[_0xffd635(0x1d7)](_0x41c5d2)===-0x1&&_0x15938a['push'](_0x41c5d2));}}),_0x15938a;},BatchTableHierarchy[a425_0x433ea6(0x1ed)][a425_0x433ea6(0x1e9)]=function(_0x2824ac,_0xf058a2){return traverseHierarchy(this,_0x2824ac,function(_0x1d39a6,_0x56718a){var _0x46d1e7=a425_0x1d28,_0x5c07ee=_0x1d39a6['_classIds'][_0x56718a],_0x3e1b58=_0x1d39a6['_classes'][_0x5c07ee],_0x3bea6c=_0x1d39a6['_classIndexes'][_0x56718a],_0xecbc9d=_0x3e1b58[_0x46d1e7(0x1cb)][_0xf058a2];if(a425_0x57d14d(_0xecbc9d)){if(a425_0x57d14d(_0xecbc9d[_0x46d1e7(0x1ca)]))return getBinaryProperty(_0xecbc9d,_0x3bea6c);return a425_0x312a7b(_0xecbc9d[_0x3bea6c],!![]);}});};function getBinaryProperty(_0x5924a4,_0x6e45d8){var _0x142d19=a425_0x433ea6,_0x530bf4=_0x5924a4['typedArray'],_0x297364=_0x5924a4[_0x142d19(0x1c5)];if(_0x297364===0x1)return _0x530bf4[_0x6e45d8];return _0x5924a4['type'][_0x142d19(0x1b7)](_0x530bf4,_0x6e45d8*_0x297364);}function a425_0x11ec(){var _0x38cbce=['parentCounts','componentCount','componentType','_classes','Parent\x20index\x20','\x22\x20is\x20read-only.','typedArray','instances','pop','type\x20is\x20required.','_parentCounts','43655mGWrdt','type','parentIds','binaryBody','object','hasOwnProperty','byteOffset','createArrayBufferView','indexOf','UNSIGNED_SHORT','name','pack','buffer','223785WXYpYn','21860IyXTso','push','2058256BFkxEM','length','12807fkrKci','\x20requires\x20a\x20batch\x20table\x20binary.','options.extension','Circular\x20dependency\x20detected\x20in\x20the\x20batch\x20table\x20hierarchy.','setProperty','2962280YNwCZi','classIds','_classIds','getProperty','getClassName','SCALAR','isClass','prototype','_parentIds','Property\x20','_classIndexes','701970zAcWZp','unpack','\x20exceeds\x20the\x20total\x20number\x20of\x20instances:\x20','getPropertyIds','758478CgGPkI','22lRAYIk','126AfLmNN','propertyExists','typeOf','hasProperty','_parentIndexes','componentType\x20is\x20required.','max','classes'];a425_0x11ec=function(){return _0x38cbce;};return a425_0x11ec();}BatchTableHierarchy[a425_0x433ea6(0x1ed)][a425_0x433ea6(0x1e5)]=function(_0x34ef04,_0x5055ed,_0x231f49){var _0xbdaf58=traverseHierarchy(this,_0x34ef04,function(_0x3ce463,_0x151914){var _0x430638=a425_0x1d28,_0x4b2bd9=_0x3ce463[_0x430638(0x1e8)][_0x151914],_0x105799=_0x3ce463[_0x430638(0x1c7)][_0x4b2bd9],_0x24f05d=_0x3ce463[_0x430638(0x1f0)][_0x151914],_0x12b45e=_0x105799[_0x430638(0x1cb)][_0x5055ed];if(a425_0x57d14d(_0x12b45e)){if(_0x151914!==_0x34ef04)throw new a425_0x440e43('Inherited\x20property\x20\x22'+_0x5055ed+_0x430638(0x1c9));return a425_0x57d14d(_0x12b45e[_0x430638(0x1ca)])?setBinaryProperty(_0x12b45e,_0x24f05d,_0x231f49):_0x12b45e[_0x24f05d]=a425_0x312a7b(_0x231f49,!![]),!![];}});return a425_0x57d14d(_0xbdaf58);};function setBinaryProperty(_0x397dc3,_0x39d85f,_0x3ce4c2){var _0x5f17e0=a425_0x433ea6,_0x2549a2=_0x397dc3[_0x5f17e0(0x1ca)],_0x1637ce=_0x397dc3['componentCount'];_0x1637ce===0x1?_0x2549a2[_0x39d85f]=_0x3ce4c2:_0x397dc3[_0x5f17e0(0x1d0)][_0x5f17e0(0x1da)](_0x3ce4c2,_0x2549a2,_0x39d85f*_0x1637ce);}BatchTableHierarchy[a425_0x433ea6(0x1ed)][a425_0x433ea6(0x1ec)]=function(_0x46d636,_0x315252){var _0x24a91b=traverseHierarchy(this,_0x46d636,function(_0x5755ea,_0x3a913a){var _0x2506e6=a425_0x1d28,_0x56efed=_0x5755ea[_0x2506e6(0x1e8)][_0x3a913a],_0x3b6735=_0x5755ea[_0x2506e6(0x1c7)][_0x56efed];if(_0x3b6735[_0x2506e6(0x1d9)]===_0x315252)return!![];});return a425_0x57d14d(_0x24a91b);},BatchTableHierarchy[a425_0x433ea6(0x1ed)][a425_0x433ea6(0x1ea)]=function(_0x3b6bc2){var _0x35cf58=a425_0x433ea6,_0x897260=this[_0x35cf58(0x1e8)][_0x3b6bc2],_0x32eac2=this['_classes'][_0x897260];return _0x32eac2[_0x35cf58(0x1d9)];};