var a455_0x16a11c=a455_0x4d5b;(function(_0x237947,_0x5d4d16){var _0xf248ae=a455_0x4d5b,_0x26ec02=_0x237947();while(!![]){try{var _0x19073e=-parseInt(_0xf248ae(0xe7))/0x1+parseInt(_0xf248ae(0x114))/0x2*(parseInt(_0xf248ae(0x112))/0x3)+-parseInt(_0xf248ae(0x101))/0x4*(-parseInt(_0xf248ae(0xfb))/0x5)+-parseInt(_0xf248ae(0x106))/0x6+-parseInt(_0xf248ae(0x10d))/0x7*(parseInt(_0xf248ae(0xe6))/0x8)+parseInt(_0xf248ae(0xec))/0x9*(parseInt(_0xf248ae(0x117))/0xa)+-parseInt(_0xf248ae(0x126))/0xb*(-parseInt(_0xf248ae(0x10c))/0xc);if(_0x19073e===_0x5d4d16)break;else _0x26ec02['push'](_0x26ec02['shift']());}catch(_0x3b2699){_0x26ec02['push'](_0x26ec02['shift']());}}}(a455_0x27b3,0x2987b));import a455_0x259edd from'../Core/Cartographic.js';import a455_0x5398fb from'../Core/Color.js';function a455_0x27b3(){var _0x3a56ed=['_pointSize','style','_heightOffset','pickId','1510512nlxAMb','_color','positions','horizontalOrigin','_billboardSize','scaleByDistance','162444eDPPdB','1585171jsbfNN','height','color','uniforms','defaultColor','3165FfLxCI','showBackground','326TOYHfs','defaultPointOutlineColor','getExactClassName','610pMairB','tileset','_batchId','_billboardImage','isClass','defaultPointSize','verticalOrigin','getPropertyNames','cartesianToCartographic','_billboard','material','toCssColorString','fillColor','getPropertyInherited','clone','77OgErcD','cartographicToCartesian','distanceDisplayCondition','_pickIds','font','disableDepthTestDistance','_pointOutlineWidth','WHITE','prototype','show','position','8XUMkMP','59538bmmjcH','_billboardOutlineWidth','_content','text','hasProperty','23391zVsBcz','backgroundPadding','defaultPointOutlineWidth','defineProperties','isExactClass','getProperty','image','_polyline','_label','backgroundColor','translucencyByDistance','alpha','_pointOutlineColor','ellipsoid','outlineWidth','695CwGlpV','equals','_billboardOutlineColor','setImage','batchTable','_billboardColor','8132eTISSJ'];a455_0x27b3=function(){return _0x3a56ed;};return a455_0x27b3();}import a455_0x313a31 from'../Core/defaultValue.js';import a455_0x3a461d from'../Core/defined.js';function a455_0x4d5b(_0x246266,_0x46d0fa){var _0x27b3aa=a455_0x27b3();return a455_0x4d5b=function(_0x4d5b47,_0x35af44){_0x4d5b47=_0x4d5b47-0xe3;var _0x5ae543=_0x27b3aa[_0x4d5b47];return _0x5ae543;},a455_0x4d5b(_0x246266,_0x46d0fa);}import a455_0x269fb6 from'./Cesium3DTileFeature.js';import a455_0x4ba42a from'./createBillboardPointCallback.js';function Cesium3DTilePointFeature(_0x56c985,_0x3345fe,_0x3c63b2,_0x393105,_0x1a3416){var _0x523673=a455_0x4d5b;this[_0x523673(0xe9)]=_0x56c985,this[_0x523673(0x120)]=_0x3c63b2,this[_0x523673(0xf4)]=_0x393105,this[_0x523673(0xf3)]=_0x1a3416,this[_0x523673(0x119)]=_0x3345fe,this[_0x523673(0x11a)]=undefined,this[_0x523673(0x100)]=undefined,this[_0x523673(0xfd)]=undefined,this[_0x523673(0xe8)]=undefined,this['_billboardSize']=undefined,this['_pointSize']=undefined,this[_0x523673(0x107)]=undefined,this[_0x523673(0x102)]=undefined,this['_pointOutlineColor']=undefined,this[_0x523673(0x12c)]=undefined,this['_heightOffset']=undefined,this[_0x523673(0x129)]=new Array(0x3),setBillboardImage(this);}var scratchCartographic=new a455_0x259edd();Object[a455_0x16a11c(0xef)](Cesium3DTilePointFeature['prototype'],{'show':{'get':function(){var _0x33b29d=a455_0x16a11c;return this[_0x33b29d(0xf4)][_0x33b29d(0xe4)];},'set':function(_0x3e5f0c){var _0x42b2eb=a455_0x16a11c;this[_0x42b2eb(0xf4)]['show']=_0x3e5f0c,this[_0x42b2eb(0x120)]['show']=_0x3e5f0c,this[_0x42b2eb(0xf3)][_0x42b2eb(0xe4)]=_0x3e5f0c;}},'color':{'get':function(){var _0x5a39a4=a455_0x16a11c;return this[_0x5a39a4(0x107)];},'set':function(_0x3b3e64){var _0x5612c9=a455_0x16a11c;this[_0x5612c9(0x107)]=a455_0x5398fb['clone'](_0x3b3e64,this[_0x5612c9(0x107)]),setBillboardImage(this);}},'pointSize':{'get':function(){var _0x535eb8=a455_0x16a11c;return this[_0x535eb8(0x102)];},'set':function(_0x15a5be){this['_pointSize']=_0x15a5be,setBillboardImage(this);}},'pointOutlineColor':{'get':function(){return this['_pointOutlineColor'];},'set':function(_0x5cf831){var _0x523629=a455_0x16a11c;this['_pointOutlineColor']=a455_0x5398fb['clone'](_0x5cf831,this[_0x523629(0xf8)]),setBillboardImage(this);}},'pointOutlineWidth':{'get':function(){var _0x5d1871=a455_0x16a11c;return this[_0x5d1871(0x12c)];},'set':function(_0x3f36bb){var _0x292e9d=a455_0x16a11c;this[_0x292e9d(0x12c)]=_0x3f36bb,setBillboardImage(this);}},'labelColor':{'get':function(){var _0x4e8cda=a455_0x16a11c;return this[_0x4e8cda(0xf4)][_0x4e8cda(0x123)];},'set':function(_0x1624b1){var _0x3e7990=a455_0x16a11c;this['_label']['fillColor']=_0x1624b1,this[_0x3e7990(0xf3)][_0x3e7990(0xe4)]=this[_0x3e7990(0xf4)][_0x3e7990(0xe4)]&&_0x1624b1[_0x3e7990(0xf7)]>0x0;}},'labelOutlineColor':{'get':function(){var _0x173174=a455_0x16a11c;return this[_0x173174(0xf4)]['outlineColor'];},'set':function(_0x1d0c58){var _0x11bfb4=a455_0x16a11c;this[_0x11bfb4(0xf4)]['outlineColor']=_0x1d0c58;}},'labelOutlineWidth':{'get':function(){return this['_label']['outlineWidth'];},'set':function(_0x59e0a2){var _0x3cf397=a455_0x16a11c;this[_0x3cf397(0xf4)][_0x3cf397(0xfa)]=_0x59e0a2;}},'font':{'get':function(){var _0x251582=a455_0x16a11c;return this[_0x251582(0xf4)][_0x251582(0x12a)];},'set':function(_0x97dcc4){var _0x6a3c93=a455_0x16a11c;this[_0x6a3c93(0xf4)][_0x6a3c93(0x12a)]=_0x97dcc4;}},'labelStyle':{'get':function(){var _0x12a3aa=a455_0x16a11c;return this['_label'][_0x12a3aa(0x103)];},'set':function(_0x628419){var _0x3fb3a5=a455_0x16a11c;this[_0x3fb3a5(0xf4)]['style']=_0x628419;}},'labelText':{'get':function(){var _0x1bfa5e=a455_0x16a11c;return this[_0x1bfa5e(0xf4)][_0x1bfa5e(0xea)];},'set':function(_0x39aaf9){var _0x38bd18=a455_0x16a11c;!a455_0x3a461d(_0x39aaf9)&&(_0x39aaf9=''),this[_0x38bd18(0xf4)][_0x38bd18(0xea)]=_0x39aaf9;}},'backgroundColor':{'get':function(){var _0x2e3234=a455_0x16a11c;return this[_0x2e3234(0xf4)][_0x2e3234(0xf5)];},'set':function(_0xb05d58){var _0x4210b4=a455_0x16a11c;this[_0x4210b4(0xf4)][_0x4210b4(0xf5)]=_0xb05d58;}},'backgroundPadding':{'get':function(){var _0x5e38ae=a455_0x16a11c;return this['_label'][_0x5e38ae(0xed)];},'set':function(_0x4cf9dd){var _0x3f2fb2=a455_0x16a11c;this[_0x3f2fb2(0xf4)]['backgroundPadding']=_0x4cf9dd;}},'backgroundEnabled':{'get':function(){var _0x5a91ce=a455_0x16a11c;return this['_label'][_0x5a91ce(0x113)];},'set':function(_0x2bd976){var _0x57cb33=a455_0x16a11c;this['_label'][_0x57cb33(0x113)]=_0x2bd976;}},'scaleByDistance':{'get':function(){var _0x132977=a455_0x16a11c;return this[_0x132977(0xf4)][_0x132977(0x10b)];},'set':function(_0x20b7a4){var _0x2357ba=a455_0x16a11c;this['_label'][_0x2357ba(0x10b)]=_0x20b7a4,this[_0x2357ba(0x120)][_0x2357ba(0x10b)]=_0x20b7a4;}},'translucencyByDistance':{'get':function(){var _0x5e7f7e=a455_0x16a11c;return this['_label'][_0x5e7f7e(0xf6)];},'set':function(_0x3baf36){var _0x5f4eea=a455_0x16a11c;this['_label'][_0x5f4eea(0xf6)]=_0x3baf36,this[_0x5f4eea(0x120)][_0x5f4eea(0xf6)]=_0x3baf36;}},'distanceDisplayCondition':{'get':function(){var _0x55bc9e=a455_0x16a11c;return this[_0x55bc9e(0xf4)][_0x55bc9e(0x128)];},'set':function(_0x99641f){var _0x4a94c2=a455_0x16a11c;this[_0x4a94c2(0xf4)][_0x4a94c2(0x128)]=_0x99641f,this[_0x4a94c2(0xf3)][_0x4a94c2(0x128)]=_0x99641f,this[_0x4a94c2(0x120)]['distanceDisplayCondition']=_0x99641f;}},'heightOffset':{'get':function(){var _0x26880b=a455_0x16a11c;return this[_0x26880b(0x104)];},'set':function(_0x42d0ba){var _0x342c5d=a455_0x16a11c,_0x397991=a455_0x313a31(this[_0x342c5d(0x104)],0x0),_0x37814c=this['_content'][_0x342c5d(0x118)][_0x342c5d(0xf9)],_0x3f4082=_0x37814c[_0x342c5d(0x11f)](this['_billboard']['position'],scratchCartographic);_0x3f4082[_0x342c5d(0x10e)]=_0x3f4082[_0x342c5d(0x10e)]-_0x397991+_0x42d0ba;var _0x52c5b2=_0x37814c[_0x342c5d(0x127)](_0x3f4082);this[_0x342c5d(0x120)]['position']=_0x52c5b2,this[_0x342c5d(0xf4)][_0x342c5d(0xe5)]=this[_0x342c5d(0x120)][_0x342c5d(0xe5)],this[_0x342c5d(0xf3)][_0x342c5d(0x108)]=[this[_0x342c5d(0xf3)]['positions'][0x0],_0x52c5b2],this[_0x342c5d(0x104)]=_0x42d0ba;}},'anchorLineEnabled':{'get':function(){var _0x5d2583=a455_0x16a11c;return this[_0x5d2583(0xf3)][_0x5d2583(0xe4)];},'set':function(_0x8e0525){var _0x39f03f=a455_0x16a11c;this[_0x39f03f(0xf3)][_0x39f03f(0xe4)]=_0x8e0525;}},'anchorLineColor':{'get':function(){var _0x15b125=a455_0x16a11c;return this[_0x15b125(0xf3)][_0x15b125(0x121)][_0x15b125(0x110)][_0x15b125(0x10f)];},'set':function(_0x8adac2){var _0xd3a0de=a455_0x16a11c;this[_0xd3a0de(0xf3)][_0xd3a0de(0x121)]['uniforms'][_0xd3a0de(0x10f)]=a455_0x5398fb[_0xd3a0de(0x125)](_0x8adac2,this[_0xd3a0de(0xf3)]['material'][_0xd3a0de(0x110)][_0xd3a0de(0x10f)]);}},'image':{'get':function(){var _0x1c59b9=a455_0x16a11c;return this[_0x1c59b9(0x11a)];},'set':function(_0x3bf955){var _0x156081=a455_0x16a11c,_0x29f76d=this[_0x156081(0x11a)]!==_0x3bf955;this['_billboardImage']=_0x3bf955,_0x29f76d&&setBillboardImage(this);}},'disableDepthTestDistance':{'get':function(){var _0x50545e=a455_0x16a11c;return this['_label'][_0x50545e(0x12b)];},'set':function(_0x2a07a6){var _0x6b7568=a455_0x16a11c;this[_0x6b7568(0xf4)][_0x6b7568(0x12b)]=_0x2a07a6,this['_billboard']['disableDepthTestDistance']=_0x2a07a6;}},'horizontalOrigin':{'get':function(){var _0x2af2e7=a455_0x16a11c;return this['_billboard'][_0x2af2e7(0x109)];},'set':function(_0x1a526e){var _0x43798b=a455_0x16a11c;this['_billboard'][_0x43798b(0x109)]=_0x1a526e;}},'verticalOrigin':{'get':function(){var _0x4d2d42=a455_0x16a11c;return this[_0x4d2d42(0x120)][_0x4d2d42(0x11d)];},'set':function(_0x212f9a){var _0x5affbc=a455_0x16a11c;this[_0x5affbc(0x120)][_0x5affbc(0x11d)]=_0x212f9a;}},'labelHorizontalOrigin':{'get':function(){var _0x239c1a=a455_0x16a11c;return this['_label'][_0x239c1a(0x109)];},'set':function(_0x33017f){var _0x5c9547=a455_0x16a11c;this['_label'][_0x5c9547(0x109)]=_0x33017f;}},'labelVerticalOrigin':{'get':function(){var _0x4d9f7d=a455_0x16a11c;return this[_0x4d9f7d(0xf4)]['verticalOrigin'];},'set':function(_0xeb7d45){var _0x58f2fc=a455_0x16a11c;this[_0x58f2fc(0xf4)][_0x58f2fc(0x11d)]=_0xeb7d45;}},'content':{'get':function(){var _0x712f2=a455_0x16a11c;return this[_0x712f2(0xe9)];}},'tileset':{'get':function(){var _0x319c97=a455_0x16a11c;return this[_0x319c97(0xe9)][_0x319c97(0x118)];}},'primitive':{'get':function(){var _0x3c3a5d=a455_0x16a11c;return this[_0x3c3a5d(0xe9)][_0x3c3a5d(0x118)];}},'pickIds':{'get':function(){var _0x11799f=a455_0x16a11c,_0xc2e0b=this['_pickIds'];return _0xc2e0b[0x0]=this[_0x11799f(0x120)]['pickId'],_0xc2e0b[0x1]=this[_0x11799f(0xf4)][_0x11799f(0x105)],_0xc2e0b[0x2]=this[_0x11799f(0xf3)][_0x11799f(0x105)],_0xc2e0b;}}}),Cesium3DTilePointFeature['defaultColor']=a455_0x5398fb[a455_0x16a11c(0x12d)],Cesium3DTilePointFeature[a455_0x16a11c(0x115)]=a455_0x5398fb['BLACK'],Cesium3DTilePointFeature[a455_0x16a11c(0xee)]=0x0,Cesium3DTilePointFeature['defaultPointSize']=0x8;function setBillboardImage(_0x3d32e7){var _0x47e190=a455_0x16a11c,_0x14f178=_0x3d32e7[_0x47e190(0x120)];if(a455_0x3a461d(_0x3d32e7[_0x47e190(0x11a)])&&_0x3d32e7[_0x47e190(0x11a)]!==_0x14f178[_0x47e190(0xf2)]){_0x14f178[_0x47e190(0xf2)]=_0x3d32e7[_0x47e190(0x11a)];return;}if(a455_0x3a461d(_0x3d32e7[_0x47e190(0x11a)]))return;var _0x2f5ea2=a455_0x313a31(_0x3d32e7['_color'],Cesium3DTilePointFeature[_0x47e190(0x111)]),_0x2feb45=a455_0x313a31(_0x3d32e7[_0x47e190(0xf8)],Cesium3DTilePointFeature['defaultPointOutlineColor']),_0x46afc4=a455_0x313a31(_0x3d32e7[_0x47e190(0x12c)],Cesium3DTilePointFeature['defaultPointOutlineWidth']),_0x476eda=a455_0x313a31(_0x3d32e7[_0x47e190(0x102)],Cesium3DTilePointFeature[_0x47e190(0x11c)]),_0x181cbe=_0x3d32e7[_0x47e190(0x100)],_0xa7828a=_0x3d32e7['_billboardOutlineColor'],_0x506b4b=_0x3d32e7[_0x47e190(0xe8)],_0x5a0ed8=_0x3d32e7['_billboardSize'];if(a455_0x5398fb[_0x47e190(0xfc)](_0x2f5ea2,_0x181cbe)&&a455_0x5398fb[_0x47e190(0xfc)](_0x2feb45,_0xa7828a)&&_0x46afc4===_0x506b4b&&_0x476eda===_0x5a0ed8)return;_0x3d32e7[_0x47e190(0x100)]=a455_0x5398fb[_0x47e190(0x125)](_0x2f5ea2,_0x3d32e7[_0x47e190(0x100)]),_0x3d32e7['_billboardOutlineColor']=a455_0x5398fb['clone'](_0x2feb45,_0x3d32e7[_0x47e190(0xfd)]),_0x3d32e7[_0x47e190(0xe8)]=_0x46afc4,_0x3d32e7[_0x47e190(0x10a)]=_0x476eda;var _0x31ca93=_0x2f5ea2[_0x47e190(0xf7)],_0x460a3f=_0x2f5ea2['toCssColorString'](),_0x398648=_0x2feb45[_0x47e190(0x122)](),_0x5e2f65=JSON['stringify']([_0x460a3f,_0x476eda,_0x398648,_0x46afc4]);_0x14f178[_0x47e190(0xfe)](_0x5e2f65,a455_0x4ba42a(_0x31ca93,_0x460a3f,_0x398648,_0x46afc4,_0x476eda));}Cesium3DTilePointFeature[a455_0x16a11c(0xe3)]['hasProperty']=function(_0x5d156e){var _0x5372cf=a455_0x16a11c;return this[_0x5372cf(0xe9)][_0x5372cf(0xff)][_0x5372cf(0xeb)](this['_batchId'],_0x5d156e);},Cesium3DTilePointFeature[a455_0x16a11c(0xe3)][a455_0x16a11c(0x11e)]=function(_0x38416b){var _0x54eeb6=a455_0x16a11c;return this[_0x54eeb6(0xe9)][_0x54eeb6(0xff)]['getPropertyNames'](this[_0x54eeb6(0x119)],_0x38416b);},Cesium3DTilePointFeature[a455_0x16a11c(0xe3)][a455_0x16a11c(0xf1)]=function(_0x58ff3d){var _0x3b7a45=a455_0x16a11c;return this[_0x3b7a45(0xe9)]['batchTable'][_0x3b7a45(0xf1)](this[_0x3b7a45(0x119)],_0x58ff3d);},Cesium3DTilePointFeature['prototype'][a455_0x16a11c(0x124)]=function(_0x28d4dc){var _0xf6e44e=a455_0x16a11c;return a455_0x269fb6[_0xf6e44e(0x124)](this[_0xf6e44e(0xe9)],this[_0xf6e44e(0x119)],_0x28d4dc);},Cesium3DTilePointFeature[a455_0x16a11c(0xe3)]['setProperty']=function(_0x1f9d30,_0x27b0b3){var _0x165623=a455_0x16a11c;this['_content'][_0x165623(0xff)]['setProperty'](this['_batchId'],_0x1f9d30,_0x27b0b3),this[_0x165623(0xe9)]['featurePropertiesDirty']=!![];},Cesium3DTilePointFeature['prototype'][a455_0x16a11c(0xf0)]=function(_0x292cf9){var _0x2852d5=a455_0x16a11c;return this[_0x2852d5(0xe9)][_0x2852d5(0xff)]['isExactClass'](this[_0x2852d5(0x119)],_0x292cf9);},Cesium3DTilePointFeature[a455_0x16a11c(0xe3)][a455_0x16a11c(0x11b)]=function(_0x3f6afa){var _0x2c2dbc=a455_0x16a11c;return this[_0x2c2dbc(0xe9)][_0x2c2dbc(0xff)]['isClass'](this[_0x2c2dbc(0x119)],_0x3f6afa);},Cesium3DTilePointFeature[a455_0x16a11c(0xe3)][a455_0x16a11c(0x116)]=function(){var _0x1c9613=a455_0x16a11c;return this[_0x1c9613(0xe9)][_0x1c9613(0xff)]['getExactClassName'](this['_batchId']);};export default Cesium3DTilePointFeature;