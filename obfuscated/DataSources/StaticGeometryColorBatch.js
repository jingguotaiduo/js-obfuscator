var a358_0x2e24bf=a358_0x9ae7;(function(_0x71baf,_0x34d75b){var _0xe0113a=a358_0x9ae7,_0x1ed008=_0x71baf();while(!![]){try{var _0x42d441=parseInt(_0xe0113a(0x140))/0x1+parseInt(_0xe0113a(0x14a))/0x2+-parseInt(_0xe0113a(0x148))/0x3*(-parseInt(_0xe0113a(0x15d))/0x4)+-parseInt(_0xe0113a(0x130))/0x5*(-parseInt(_0xe0113a(0x153))/0x6)+-parseInt(_0xe0113a(0x139))/0x7+-parseInt(_0xe0113a(0x150))/0x8+parseInt(_0xe0113a(0x149))/0x9;if(_0x42d441===_0x34d75b)break;else _0x1ed008['push'](_0x1ed008['shift']());}catch(_0x5ba528){_0x1ed008['push'](_0x1ed008['shift']());}}}(a358_0x54d4,0x4ea4f));import a358_0x534c94 from'../Core/AssociativeArray.js';import a358_0x3e9b57 from'../Core/Cartesian3.js';import a358_0x29db81 from'../Core/Color.js';import a358_0x1fadef from'../Core/ColorGeometryInstanceAttribute.js';import a358_0x31d2c3 from'../Core/defined.js';import a358_0x25d9e1 from'../Core/DistanceDisplayCondition.js';import a358_0x5b33df from'../Core/DistanceDisplayConditionGeometryInstanceAttribute.js';import a358_0x320814 from'../Core/OffsetGeometryInstanceAttribute.js';import a358_0x3e85de from'../Core/ShowGeometryInstanceAttribute.js';import a358_0x2e631c from'../Scene/Primitive.js';import a358_0x4d45b3 from'./BoundingSphereState.js';import a358_0x147875 from'./ColorMaterialProperty.js';import a358_0x59b62f from'./MaterialProperty.js';import a358_0x4371b2 from'./Property.js';var colorScratch=new a358_0x29db81(),distanceDisplayConditionScratch=new a358_0x25d9e1(),defaultDistanceDisplayCondition=new a358_0x25d9e1(),defaultOffset=a358_0x3e9b57[a358_0x2e24bf(0x17b)],offsetScratch=new a358_0x3e9b57();function Batch(_0x8c99ed,_0x3db4ae,_0x4d8f40,_0x28b4e6,_0x346a7d,_0x35ed49,_0x76c471){var _0x4a7c1c=a358_0x2e24bf;this[_0x4a7c1c(0x176)]=_0x3db4ae,this[_0x4a7c1c(0x151)]=_0x4d8f40,this[_0x4a7c1c(0x15f)]=_0x28b4e6,this[_0x4a7c1c(0x137)]=_0x346a7d,this[_0x4a7c1c(0x12e)]=undefined,this[_0x4a7c1c(0x14e)]=_0x35ed49,this[_0x4a7c1c(0x13d)]=_0x76c471,this[_0x4a7c1c(0x135)]=_0x8c99ed,this[_0x4a7c1c(0x17d)]=![],this['waitingOnCreate']=![],this[_0x4a7c1c(0x177)]=undefined,this[_0x4a7c1c(0x174)]=undefined,this['geometry']=new a358_0x534c94(),this['updaters']=new a358_0x534c94(),this[_0x4a7c1c(0x141)]=new a358_0x534c94(),this[_0x4a7c1c(0x165)]=new a358_0x534c94(),this[_0x4a7c1c(0x142)]=new a358_0x534c94(),this[_0x4a7c1c(0x132)]=new a358_0x534c94(),this[_0x4a7c1c(0x160)]=[],this[_0x4a7c1c(0x16e)]=![];var _0x2afc75;a358_0x31d2c3(_0x346a7d)&&(_0x2afc75=_0x346a7d['definitionChanged'][_0x4a7c1c(0x15e)](Batch[_0x4a7c1c(0x131)][_0x4a7c1c(0x173)],this)),this[_0x4a7c1c(0x13b)]=_0x2afc75;}Batch[a358_0x2e24bf(0x131)]['onMaterialChanged']=function(){var _0x1a5679=a358_0x2e24bf;this[_0x1a5679(0x16e)]=!![];},Batch[a358_0x2e24bf(0x131)][a358_0x2e24bf(0x16c)]=function(_0x590db5){var _0xe345e2=a358_0x2e24bf,_0x557e96=this['depthFailMaterialProperty'],_0x3726d8=_0x590db5['depthFailMaterialProperty'];if(_0x3726d8===_0x557e96)return!![];if(a358_0x31d2c3(_0x557e96))return _0x557e96[_0xe345e2(0x175)](_0x3726d8);return![];},Batch[a358_0x2e24bf(0x131)][a358_0x2e24bf(0x166)]=function(_0x1d820c,_0xb65d22){var _0x19558c=a358_0x2e24bf,_0x30d0ed=_0x1d820c['id'];this[_0x19558c(0x17d)]=!![],this['geometry'][_0x19558c(0x163)](_0x30d0ed,_0xb65d22),this[_0x19558c(0x159)][_0x19558c(0x163)](_0x30d0ed,_0x1d820c);if(!_0x1d820c['hasConstantFill']||!_0x1d820c[_0x19558c(0x134)][_0x19558c(0x17e)]||!a358_0x4371b2[_0x19558c(0x17e)](_0x1d820c[_0x19558c(0x17c)])||!a358_0x4371b2[_0x19558c(0x17e)](_0x1d820c[_0x19558c(0x17a)]))this[_0x19558c(0x141)]['set'](_0x30d0ed,_0x1d820c);else{var _0x3f8179=this;this['subscriptions'][_0x19558c(0x163)](_0x30d0ed,_0x1d820c[_0x19558c(0x16d)][_0x19558c(0x15a)]['addEventListener'](function(_0xf61ae7,_0x2a83cb,_0x141df1,_0x5aa3d8){var _0x37e67d=_0x19558c;_0x2a83cb===_0x37e67d(0x171)&&_0x3f8179['showsUpdated'][_0x37e67d(0x163)](_0x1d820c['id'],_0x1d820c);}));}},Batch[a358_0x2e24bf(0x131)][a358_0x2e24bf(0x15c)]=function(_0x43ea0c){var _0x325af2=a358_0x2e24bf,_0x11b779=_0x43ea0c['id'];this[_0x325af2(0x17d)]=this[_0x325af2(0x161)]['remove'](_0x11b779)||this['createPrimitive'];if(this[_0x325af2(0x159)][_0x325af2(0x15c)](_0x11b779)){this[_0x325af2(0x141)][_0x325af2(0x15c)](_0x11b779);var _0x22a222=this[_0x325af2(0x142)][_0x325af2(0x172)](_0x11b779);return a358_0x31d2c3(_0x22a222)&&(_0x22a222(),this[_0x325af2(0x142)][_0x325af2(0x15c)](_0x11b779),this[_0x325af2(0x132)][_0x325af2(0x15c)](_0x11b779)),!![];}return![];},Batch[a358_0x2e24bf(0x131)][a358_0x2e24bf(0x16b)]=function(_0x3945f0){var _0x4ecffe=a358_0x2e24bf,_0x301f9d=!![],_0x371357=0x0,_0x55d412=this[_0x4ecffe(0x177)],_0x5e1772=this[_0x4ecffe(0x135)],_0x3180e3;if(this[_0x4ecffe(0x17d)]){var _0x3975e6=this[_0x4ecffe(0x161)][_0x4ecffe(0x15b)],_0x4a5aa3=_0x3975e6[_0x4ecffe(0x13f)];if(_0x4a5aa3>0x0){a358_0x31d2c3(_0x55d412)&&(!a358_0x31d2c3(this[_0x4ecffe(0x174)])?this[_0x4ecffe(0x174)]=_0x55d412:_0x5e1772[_0x4ecffe(0x15c)](_0x55d412));var _0x4ad4cb;a358_0x31d2c3(this[_0x4ecffe(0x15f)])&&(a358_0x31d2c3(this[_0x4ecffe(0x137)])&&(this[_0x4ecffe(0x12e)]=a358_0x59b62f[_0x4ecffe(0x12f)](_0x3945f0,this[_0x4ecffe(0x137)],this[_0x4ecffe(0x12e)])),_0x4ad4cb=new this['depthFailAppearanceType']({'material':this[_0x4ecffe(0x12e)],'translucent':this['translucent'],'closed':this[_0x4ecffe(0x14e)]})),_0x55d412=new a358_0x2e631c({'show':![],'asynchronous':!![],'geometryInstances':_0x3975e6['slice'](),'appearance':new this[(_0x4ecffe(0x151))]({'translucent':this[_0x4ecffe(0x176)],'closed':this[_0x4ecffe(0x14e)]}),'depthFailAppearance':_0x4ad4cb,'shadows':this['shadows']}),_0x5e1772['add'](_0x55d412),_0x301f9d=![];}else{a358_0x31d2c3(_0x55d412)&&(_0x5e1772[_0x4ecffe(0x15c)](_0x55d412),_0x55d412=undefined);var _0x112338=this[_0x4ecffe(0x174)];a358_0x31d2c3(_0x112338)&&(_0x5e1772[_0x4ecffe(0x15c)](_0x112338),this[_0x4ecffe(0x174)]=undefined);}this[_0x4ecffe(0x165)][_0x4ecffe(0x167)](),this[_0x4ecffe(0x177)]=_0x55d412,this[_0x4ecffe(0x17d)]=![],this['waitingOnCreate']=!![];}else{if(a358_0x31d2c3(_0x55d412)&&_0x55d412[_0x4ecffe(0x16f)]){_0x55d412[_0x4ecffe(0x152)]=!![];a358_0x31d2c3(this[_0x4ecffe(0x174)])&&(_0x5e1772[_0x4ecffe(0x15c)](this[_0x4ecffe(0x174)]),this[_0x4ecffe(0x174)]=undefined);a358_0x31d2c3(this[_0x4ecffe(0x15f)])&&!(this['depthFailMaterialProperty']instanceof a358_0x147875)&&(this[_0x4ecffe(0x12e)]=a358_0x59b62f[_0x4ecffe(0x12f)](_0x3945f0,this['depthFailMaterialProperty'],this[_0x4ecffe(0x12e)]),this[_0x4ecffe(0x177)][_0x4ecffe(0x13c)][_0x4ecffe(0x181)]=this[_0x4ecffe(0x12e)]);var _0x31e5bb=this['updatersWithAttributes'][_0x4ecffe(0x15b)],_0x3daeaf=_0x31e5bb[_0x4ecffe(0x13f)],_0x1b79d9=this[_0x4ecffe(0x178)];for(_0x3180e3=0x0;_0x3180e3<_0x3daeaf;_0x3180e3++){var _0x93fd2e=_0x31e5bb[_0x3180e3],_0x3b43c4=this[_0x4ecffe(0x161)]['get'](_0x93fd2e['id']),_0x49d367=this[_0x4ecffe(0x165)]['get'](_0x3b43c4['id']['id']);!a358_0x31d2c3(_0x49d367)&&(_0x49d367=_0x55d412[_0x4ecffe(0x170)](_0x3b43c4['id']),this[_0x4ecffe(0x165)]['set'](_0x3b43c4['id']['id'],_0x49d367));if(!_0x93fd2e[_0x4ecffe(0x134)]['isConstant']||_0x1b79d9){var _0x46e0fb=_0x93fd2e[_0x4ecffe(0x134)]['color'],_0xcb91=a358_0x4371b2['getValueOrDefault'](_0x46e0fb,_0x3945f0,a358_0x29db81[_0x4ecffe(0x14b)],colorScratch);!a358_0x29db81[_0x4ecffe(0x175)](_0x49d367[_0x4ecffe(0x13e)],_0xcb91)&&(_0x49d367[_0x4ecffe(0x13e)]=a358_0x29db81[_0x4ecffe(0x168)](_0xcb91,_0x49d367['_lastColor']),_0x49d367['color']=a358_0x1fadef[_0x4ecffe(0x162)](_0xcb91,_0x49d367[_0x4ecffe(0x156)]),(this['translucent']&&_0x49d367[_0x4ecffe(0x156)][0x3]===0xff||!this[_0x4ecffe(0x176)]&&_0x49d367[_0x4ecffe(0x156)][0x3]!==0xff)&&(this[_0x4ecffe(0x160)][_0x371357++]=_0x93fd2e));}if(a358_0x31d2c3(this[_0x4ecffe(0x15f)])&&_0x93fd2e[_0x4ecffe(0x137)]instanceof a358_0x147875&&(!_0x93fd2e['depthFailMaterialProperty'][_0x4ecffe(0x17e)]||_0x1b79d9)){var _0x3b0316=_0x93fd2e[_0x4ecffe(0x137)][_0x4ecffe(0x156)],_0x338a7f=a358_0x4371b2['getValueOrDefault'](_0x3b0316,_0x3945f0,a358_0x29db81[_0x4ecffe(0x14b)],colorScratch);!a358_0x29db81[_0x4ecffe(0x175)](_0x49d367[_0x4ecffe(0x145)],_0x338a7f)&&(_0x49d367[_0x4ecffe(0x145)]=a358_0x29db81[_0x4ecffe(0x168)](_0x338a7f,_0x49d367[_0x4ecffe(0x145)]),_0x49d367[_0x4ecffe(0x13a)]=a358_0x1fadef[_0x4ecffe(0x162)](_0x338a7f,_0x49d367[_0x4ecffe(0x13a)]));}var _0x3e652e=_0x93fd2e[_0x4ecffe(0x16d)][_0x4ecffe(0x171)]&&(_0x93fd2e[_0x4ecffe(0x164)]||_0x93fd2e['isFilled'](_0x3945f0)),_0x2a3a8a=_0x49d367['show'][0x0]===0x1;_0x3e652e!==_0x2a3a8a&&(_0x49d367[_0x4ecffe(0x152)]=a358_0x3e85de[_0x4ecffe(0x162)](_0x3e652e,_0x49d367[_0x4ecffe(0x152)]));var _0x273e4e=_0x93fd2e[_0x4ecffe(0x17c)];if(!a358_0x4371b2[_0x4ecffe(0x17e)](_0x273e4e)){var _0x8b3137=a358_0x4371b2[_0x4ecffe(0x14c)](_0x273e4e,_0x3945f0,defaultDistanceDisplayCondition,distanceDisplayConditionScratch);!a358_0x25d9e1['equals'](_0x8b3137,_0x49d367['_lastDistanceDisplayCondition'])&&(_0x49d367['_lastDistanceDisplayCondition']=a358_0x25d9e1[_0x4ecffe(0x168)](_0x8b3137,_0x49d367['_lastDistanceDisplayCondition']),_0x49d367[_0x4ecffe(0x14d)]=a358_0x5b33df[_0x4ecffe(0x162)](_0x8b3137,_0x49d367['distanceDisplayCondition']));}var _0x50670b=_0x93fd2e['terrainOffsetProperty'];if(!a358_0x4371b2['isConstant'](_0x50670b)){var _0x7653c6=a358_0x4371b2[_0x4ecffe(0x14c)](_0x50670b,_0x3945f0,defaultOffset,offsetScratch);!a358_0x3e9b57[_0x4ecffe(0x175)](_0x7653c6,_0x49d367[_0x4ecffe(0x144)])&&(_0x49d367['_lastOffset']=a358_0x3e9b57[_0x4ecffe(0x168)](_0x7653c6,_0x49d367['_lastOffset']),_0x49d367[_0x4ecffe(0x133)]=a358_0x320814[_0x4ecffe(0x162)](_0x7653c6,_0x49d367[_0x4ecffe(0x133)]));}}this[_0x4ecffe(0x17f)](_0x55d412),this[_0x4ecffe(0x178)]=![];}else a358_0x31d2c3(_0x55d412)&&!_0x55d412['ready']&&(_0x301f9d=![]);}return this[_0x4ecffe(0x160)][_0x4ecffe(0x13f)]=_0x371357,_0x301f9d;},Batch[a358_0x2e24bf(0x131)][a358_0x2e24bf(0x17f)]=function(_0x5ec623){var _0x412a40=a358_0x2e24bf,_0x5891cc=this[_0x412a40(0x132)][_0x412a40(0x15b)],_0x20a8ce=_0x5891cc[_0x412a40(0x13f)];for(var _0x150ac7=0x0;_0x150ac7<_0x20a8ce;_0x150ac7++){var _0x5d161b=_0x5891cc[_0x150ac7],_0x58d700=this[_0x412a40(0x161)]['get'](_0x5d161b['id']),_0x20fb33=this[_0x412a40(0x165)][_0x412a40(0x172)](_0x58d700['id']['id']);!a358_0x31d2c3(_0x20fb33)&&(_0x20fb33=_0x5ec623[_0x412a40(0x170)](_0x58d700['id']),this[_0x412a40(0x165)]['set'](_0x58d700['id']['id'],_0x20fb33));var _0xa2765=_0x5d161b[_0x412a40(0x16d)]['isShowing'],_0x2777cf=_0x20fb33['show'][0x0]===0x1;_0xa2765!==_0x2777cf&&(_0x20fb33[_0x412a40(0x152)]=a358_0x3e85de[_0x412a40(0x162)](_0xa2765,_0x20fb33[_0x412a40(0x152)]),_0x58d700[_0x412a40(0x165)]['show']['value'][0x0]=_0x20fb33[_0x412a40(0x152)][0x0]);}this[_0x412a40(0x132)]['removeAll']();},Batch[a358_0x2e24bf(0x131)][a358_0x2e24bf(0x12d)]=function(_0x4e1a2b){var _0x4e0e0c=a358_0x2e24bf;return this[_0x4e0e0c(0x159)][_0x4e0e0c(0x12d)](_0x4e1a2b['id']);},Batch[a358_0x2e24bf(0x131)][a358_0x2e24bf(0x14f)]=function(_0x5cbf78,_0x5f38bb){var _0x498f00=a358_0x2e24bf,_0x3f1b82=this[_0x498f00(0x177)];if(!_0x3f1b82[_0x498f00(0x16f)])return a358_0x4d45b3[_0x498f00(0x138)];var _0x269791=_0x3f1b82[_0x498f00(0x170)](_0x5cbf78[_0x498f00(0x16d)]);if(!a358_0x31d2c3(_0x269791)||!a358_0x31d2c3(_0x269791[_0x498f00(0x12b)])||a358_0x31d2c3(_0x269791[_0x498f00(0x152)])&&_0x269791[_0x498f00(0x152)][0x0]===0x0)return a358_0x4d45b3[_0x498f00(0x154)];return _0x269791['boundingSphere'][_0x498f00(0x168)](_0x5f38bb),a358_0x4d45b3[_0x498f00(0x136)];},Batch['prototype'][a358_0x2e24bf(0x146)]=function(){var _0x1ffebe=a358_0x2e24bf,_0x29b34e=this[_0x1ffebe(0x177)],_0x596383=this['primitives'];a358_0x31d2c3(_0x29b34e)&&_0x596383[_0x1ffebe(0x15c)](_0x29b34e);var _0x2ae195=this[_0x1ffebe(0x174)];a358_0x31d2c3(_0x2ae195)&&_0x596383[_0x1ffebe(0x15c)](_0x2ae195),a358_0x31d2c3(this[_0x1ffebe(0x13b)])&&this['removeMaterialSubscription']();};function StaticGeometryColorBatch(_0x425dc9,_0x39706f,_0x341354,_0x3447d1,_0x36a2c6){var _0x17c55a=a358_0x2e24bf;this['_solidItems']=[],this[_0x17c55a(0x169)]=[],this[_0x17c55a(0x155)]=_0x425dc9,this[_0x17c55a(0x12a)]=_0x39706f,this[_0x17c55a(0x143)]=_0x341354,this[_0x17c55a(0x180)]=_0x3447d1,this[_0x17c55a(0x147)]=_0x36a2c6;}function a358_0x9ae7(_0x5e5510,_0x50d963){var _0x54d400=a358_0x54d4();return a358_0x9ae7=function(_0x9ae7c,_0x371f2e){_0x9ae7c=_0x9ae7c-0x12a;var _0xfaef6e=_0x54d400[_0x9ae7c];return _0xfaef6e;},a358_0x9ae7(_0x5e5510,_0x50d963);}StaticGeometryColorBatch[a358_0x2e24bf(0x131)]['add']=function(_0x271ecb,_0x10eca0){var _0x42253a=a358_0x2e24bf,_0x4cae15,_0x3ec4ac,_0x1810c5=_0x10eca0['createFillGeometryInstance'](_0x271ecb);_0x1810c5[_0x42253a(0x165)][_0x42253a(0x156)][_0x42253a(0x179)][0x3]===0xff?(_0x4cae15=this[_0x42253a(0x158)],_0x3ec4ac=![]):(_0x4cae15=this[_0x42253a(0x169)],_0x3ec4ac=!![]);var _0x33dec9=_0x4cae15['length'];for(var _0x1f3b83=0x0;_0x1f3b83<_0x33dec9;_0x1f3b83++){var _0x11447b=_0x4cae15[_0x1f3b83];if(_0x11447b[_0x42253a(0x16c)](_0x10eca0)){_0x11447b[_0x42253a(0x166)](_0x10eca0,_0x1810c5);return;}}var _0x3f2e10=new Batch(this[_0x42253a(0x155)],_0x3ec4ac,this[_0x42253a(0x12a)],this['_depthFailAppearanceType'],_0x10eca0[_0x42253a(0x137)],this[_0x42253a(0x180)],this['_shadows']);_0x3f2e10[_0x42253a(0x166)](_0x10eca0,_0x1810c5),_0x4cae15[_0x42253a(0x16a)](_0x3f2e10);};function removeItem(_0x5ad71f,_0x58200a){var _0x1807ae=a358_0x2e24bf,_0x2d23=_0x5ad71f[_0x1807ae(0x13f)];for(var _0x2066f4=_0x2d23-0x1;_0x2066f4>=0x0;_0x2066f4--){var _0x126571=_0x5ad71f[_0x2066f4];if(_0x126571[_0x1807ae(0x15c)](_0x58200a))return _0x126571[_0x1807ae(0x159)][_0x1807ae(0x13f)]===0x0&&(_0x5ad71f[_0x1807ae(0x12c)](_0x2066f4,0x1),_0x126571['destroy']()),!![];}return![];}StaticGeometryColorBatch[a358_0x2e24bf(0x131)][a358_0x2e24bf(0x15c)]=function(_0x86af9a){!removeItem(this['_solidItems'],_0x86af9a)&&removeItem(this['_translucentItems'],_0x86af9a);};function moveItems(_0x293e8e,_0x41841e,_0xda9a35){var _0x178e4a=a358_0x2e24bf,_0x1d20d7=![],_0x317523=_0x41841e[_0x178e4a(0x13f)];for(var _0x1ac5f1=0x0;_0x1ac5f1<_0x317523;++_0x1ac5f1){var _0x408714=_0x41841e[_0x1ac5f1],_0xe71636=_0x408714[_0x178e4a(0x160)],_0x1196f5=_0xe71636[_0x178e4a(0x13f)];if(_0x1196f5>0x0)for(_0x1ac5f1=0x0;_0x1ac5f1<_0x1196f5;_0x1ac5f1++){var _0x4985f7=_0xe71636[_0x1ac5f1];_0x408714['remove'](_0x4985f7),_0x293e8e['add'](_0xda9a35,_0x4985f7),_0x1d20d7=!![];}}return _0x1d20d7;}function updateItems(_0x4496be,_0x3256b0,_0x22492b,_0xf2b7d6){var _0x5bf8be=a358_0x2e24bf,_0x54ccb7=_0x3256b0[_0x5bf8be(0x13f)],_0x467dc8;for(_0x467dc8=_0x54ccb7-0x1;_0x467dc8>=0x0;_0x467dc8--){var _0xec2bf2=_0x3256b0[_0x467dc8];if(_0xec2bf2[_0x5bf8be(0x16e)]){_0x3256b0['splice'](_0x467dc8,0x1);var _0x51cbc4=_0xec2bf2[_0x5bf8be(0x159)][_0x5bf8be(0x15b)],_0x48ef63=_0x51cbc4[_0x5bf8be(0x13f)];for(var _0x380ab6=0x0;_0x380ab6<_0x48ef63;_0x380ab6++){_0x4496be['add'](_0x22492b,_0x51cbc4[_0x380ab6]);}_0xec2bf2[_0x5bf8be(0x146)]();}}_0x54ccb7=_0x3256b0['length'];for(_0x467dc8=0x0;_0x467dc8<_0x54ccb7;++_0x467dc8){_0xf2b7d6=_0x3256b0[_0x467dc8][_0x5bf8be(0x16b)](_0x22492b)&&_0xf2b7d6;}return _0xf2b7d6;}StaticGeometryColorBatch['prototype'][a358_0x2e24bf(0x16b)]=function(_0x2bf996){var _0x1f1fe7=a358_0x2e24bf,_0x12f01d=updateItems(this,this[_0x1f1fe7(0x158)],_0x2bf996,!![]);_0x12f01d=updateItems(this,this['_translucentItems'],_0x2bf996,_0x12f01d)&&_0x12f01d;var _0x49652d=moveItems(this,this[_0x1f1fe7(0x158)],_0x2bf996),_0x3b8a71=moveItems(this,this[_0x1f1fe7(0x169)],_0x2bf996);return(_0x49652d||_0x3b8a71)&&(_0x12f01d=updateItems(this,this['_solidItems'],_0x2bf996,_0x12f01d)&&_0x12f01d,_0x12f01d=updateItems(this,this['_translucentItems'],_0x2bf996,_0x12f01d)&&_0x12f01d),_0x12f01d;};function getBoundingSphere(_0x490174,_0x1b6ff2,_0x5944c6){var _0x25df4d=a358_0x2e24bf,_0xe0e58f=_0x490174[_0x25df4d(0x13f)];for(var _0x3b70ea=0x0;_0x3b70ea<_0xe0e58f;_0x3b70ea++){var _0x58235f=_0x490174[_0x3b70ea];if(_0x58235f[_0x25df4d(0x12d)](_0x1b6ff2))return _0x58235f[_0x25df4d(0x14f)](_0x1b6ff2,_0x5944c6);}return a358_0x4d45b3[_0x25df4d(0x154)];}StaticGeometryColorBatch[a358_0x2e24bf(0x131)][a358_0x2e24bf(0x14f)]=function(_0xef76bc,_0x4e5b8c){var _0x39e1bb=a358_0x2e24bf,_0x2e326c=getBoundingSphere(this[_0x39e1bb(0x158)],_0xef76bc,_0x4e5b8c);if(_0x2e326c===a358_0x4d45b3[_0x39e1bb(0x154)])return getBoundingSphere(this[_0x39e1bb(0x169)],_0xef76bc,_0x4e5b8c);return _0x2e326c;};function removeAllPrimitives(_0x316f3e){var _0x5bf396=a358_0x2e24bf,_0x64bdef=_0x316f3e['length'];for(var _0x4b85f0=0x0;_0x4b85f0<_0x64bdef;_0x4b85f0++){_0x316f3e[_0x4b85f0][_0x5bf396(0x146)]();}_0x316f3e[_0x5bf396(0x13f)]=0x0;}StaticGeometryColorBatch[a358_0x2e24bf(0x131)][a358_0x2e24bf(0x157)]=function(){var _0x306024=a358_0x2e24bf;removeAllPrimitives(this[_0x306024(0x158)]),removeAllPrimitives(this[_0x306024(0x169)]);};export default StaticGeometryColorBatch;function a358_0x54d4(){var _0x37dd09=['12000lhrKeX','prototype','showsUpdated','offset','fillMaterialProperty','primitives','DONE','depthFailMaterialProperty','PENDING','3299989CvOonX','depthFailColor','removeMaterialSubscription','depthFailAppearance','shadows','_lastColor','length','143793cjJbYf','updatersWithAttributes','subscriptions','_depthFailAppearanceType','_lastOffset','_lastDepthFailColor','destroy','_shadows','1225617lAqJia','1782090qVzCcs','481994QlKKFu','WHITE','getValueOrDefault','distanceDisplayCondition','closed','getBoundingSphere','3214280gCvChr','appearanceType','show','510ivOyIZ','FAILED','_primitives','color','removeAllPrimitives','_solidItems','updaters','definitionChanged','values','remove','4JVxkhX','addEventListener','depthFailAppearanceType','itemsToRemove','geometry','toValue','set','hasConstantFill','attributes','add','removeAll','clone','_translucentItems','push','update','isMaterial','entity','invalidated','ready','getGeometryInstanceAttributes','isShowing','get','onMaterialChanged','oldPrimitive','equals','translucent','primitive','waitingOnCreate','value','terrainOffsetProperty','ZERO','distanceDisplayConditionProperty','createPrimitive','isConstant','updateShows','_closed','material','_appearanceType','boundingSphere','splice','contains','depthFailMaterial','getValue'];a358_0x54d4=function(){return _0x37dd09;};return a358_0x54d4();}