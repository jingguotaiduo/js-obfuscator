var a359_0x1fc37d=a359_0xb026;(function(_0x48c41f,_0x4f5eff){var _0x27b09b=a359_0xb026,_0x1a7427=_0x48c41f();while(!![]){try{var _0x53d3bc=parseInt(_0x27b09b(0xb2))/0x1*(-parseInt(_0x27b09b(0xb3))/0x2)+parseInt(_0x27b09b(0xbe))/0x3*(parseInt(_0x27b09b(0xd1))/0x4)+parseInt(_0x27b09b(0xaa))/0x5*(-parseInt(_0x27b09b(0xc8))/0x6)+-parseInt(_0x27b09b(0x8a))/0x7*(parseInt(_0x27b09b(0xc0))/0x8)+parseInt(_0x27b09b(0x8c))/0x9*(-parseInt(_0x27b09b(0x94))/0xa)+-parseInt(_0x27b09b(0xdd))/0xb*(-parseInt(_0x27b09b(0x95))/0xc)+-parseInt(_0x27b09b(0xe1))/0xd*(-parseInt(_0x27b09b(0xb9))/0xe);if(_0x53d3bc===_0x4f5eff)break;else _0x1a7427['push'](_0x1a7427['shift']());}catch(_0x577ccf){_0x1a7427['push'](_0x1a7427['shift']());}}}(a359_0x4fd4,0xa4f9d));import a359_0x23ac0c from'../Core/AssociativeArray.js';import a359_0x391eb7 from'../Core/Cartesian3.js';import a359_0xcc7f7a from'../Core/Color.js';import a359_0x388344 from'../Core/ColorGeometryInstanceAttribute.js';import a359_0x354072 from'../Core/defined.js';import a359_0x1d6973 from'../Core/DistanceDisplayCondition.js';import a359_0x88206c from'../Core/DistanceDisplayConditionGeometryInstanceAttribute.js';import a359_0x4dc40d from'../Core/OffsetGeometryInstanceAttribute.js';function a359_0x4fd4(){var _0x124f3c=['updatersWithAttributes','values','removeAllPrimitives','_items','boundingSphere','attributes','entity','shadows','invalidated','clone','isShowing','toValue','splice','length','showsUpdated','geometry','primitives','fillMaterialProperty','createFillGeometryInstance','48570VSwJkS','material','ZERO','depthFailMaterial','isTranslucent','primitive','get','_closed','388789fQVjPH','4iUYvpi','materialProperty','closed','_primitives','_lastOffset','getValue','42soutjj','getBoundingSphere','destroy','subscriptions','depthFailAppearanceType','3063IPOhJF','prototype','237928HJPHYC','_lastDistanceDisplayCondition','add','offset','ready','appearanceType','createPrimitive','DONE','450ixWCKx','FAILED','hasConstantFill','depthFailMaterialProperty','_appearanceType','appearance','value','isConstant','addEventListener','780IubLFc','updateShows','updaters','_shadows','definitionChanged','oldPrimitive','set','depthFailColor','_depthFailAppearanceType','distanceDisplayConditionProperty','distanceDisplayCondition','getGeometryInstanceAttributes','9669VhAfZe','removeAll','WHITE','getValueOrDefault','8170760EkJPXp','color','isMaterial','154IQhtpp','_lastDepthFailColor','941670izcCYY','show','onMaterialChanged','terrainOffsetProperty','equals','remove','update','removeMaterialSubscription','10wFpGVr','11688IbcvMo','contains'];a359_0x4fd4=function(){return _0x124f3c;};return a359_0x4fd4();}function a359_0xb026(_0x568d7e,_0x4fc6b3){var _0x4fd4d4=a359_0x4fd4();return a359_0xb026=function(_0xb02616,_0x15fa19){_0xb02616=_0xb02616-0x8a;var _0x5ea18b=_0x4fd4d4[_0xb02616];return _0x5ea18b;},a359_0xb026(_0x568d7e,_0x4fc6b3);}import a359_0x7a9411 from'../Core/ShowGeometryInstanceAttribute.js';import a359_0x54e6d9 from'../Scene/Primitive.js';import a359_0x39084c from'./BoundingSphereState.js';import a359_0x511caa from'./ColorMaterialProperty.js';import a359_0x514b09 from'./MaterialProperty.js';import a359_0x4788d2 from'./Property.js';var distanceDisplayConditionScratch=new a359_0x1d6973(),defaultDistanceDisplayCondition=new a359_0x1d6973(),defaultOffset=a359_0x391eb7[a359_0x1fc37d(0xac)],offsetScratch=new a359_0x391eb7();function Batch(_0x2b53ed,_0x34f867,_0x4937de,_0xf38744,_0x583b99,_0x82294a,_0xa0227d){var _0x57ef68=a359_0x1fc37d;this[_0x57ef68(0xa7)]=_0x2b53ed,this[_0x57ef68(0xc5)]=_0x34f867,this[_0x57ef68(0xb4)]=_0x4937de,this[_0x57ef68(0xbd)]=_0xf38744,this[_0x57ef68(0xcb)]=_0x583b99,this[_0x57ef68(0xb5)]=_0x82294a,this['shadows']=_0xa0227d,this['updaters']=new a359_0x23ac0c(),this[_0x57ef68(0xc6)]=!![],this[_0x57ef68(0xaf)]=undefined,this[_0x57ef68(0xd6)]=undefined,this['geometry']=new a359_0x23ac0c(),this[_0x57ef68(0xab)]=undefined,this['depthFailMaterial']=undefined,this['updatersWithAttributes']=new a359_0x23ac0c(),this[_0x57ef68(0x9c)]=new a359_0x23ac0c(),this['invalidated']=![],this[_0x57ef68(0x93)]=_0x4937de[_0x57ef68(0xd5)][_0x57ef68(0xd0)](Batch[_0x57ef68(0xbf)][_0x57ef68(0x8e)],this),this[_0x57ef68(0xbc)]=new a359_0x23ac0c(),this[_0x57ef68(0xa5)]=new a359_0x23ac0c();}Batch[a359_0x1fc37d(0xbf)][a359_0x1fc37d(0x8e)]=function(){var _0x63a9d8=a359_0x1fc37d;this[_0x63a9d8(0x9f)]=!![];},Batch['prototype'][a359_0x1fc37d(0xe3)]=function(_0x3b42db){var _0x37000f=a359_0x1fc37d,_0x5c62f3=this['materialProperty'],_0x28c61b=_0x3b42db['fillMaterialProperty'],_0x269aab=this[_0x37000f(0xcb)],_0x378044=_0x3b42db[_0x37000f(0xcb)];if(_0x28c61b===_0x5c62f3&&_0x378044===_0x269aab)return!![];var _0x783c68=a359_0x354072(_0x5c62f3)&&_0x5c62f3[_0x37000f(0x90)](_0x28c61b);return _0x783c68=(!a359_0x354072(_0x269aab)&&!a359_0x354072(_0x378044)||a359_0x354072(_0x269aab)&&_0x269aab[_0x37000f(0x90)](_0x378044))&&_0x783c68,_0x783c68;},Batch[a359_0x1fc37d(0xbf)]['add']=function(_0x56b1ae,_0x109b22){var _0xa7a884=a359_0x1fc37d,_0x36dfc5=_0x109b22['id'];this[_0xa7a884(0xd3)][_0xa7a884(0xd7)](_0x36dfc5,_0x109b22),this['geometry'][_0xa7a884(0xd7)](_0x36dfc5,_0x109b22[_0xa7a884(0xa9)](_0x56b1ae));if(!_0x109b22[_0xa7a884(0xca)]||!_0x109b22[_0xa7a884(0xa8)]['isConstant']||!a359_0x4788d2['isConstant'](_0x109b22['distanceDisplayConditionProperty'])||!a359_0x4788d2[_0xa7a884(0xcf)](_0x109b22[_0xa7a884(0x8f)]))this['updatersWithAttributes'][_0xa7a884(0xd7)](_0x36dfc5,_0x109b22);else{var _0xd521a3=this;this[_0xa7a884(0xbc)][_0xa7a884(0xd7)](_0x36dfc5,_0x109b22[_0xa7a884(0x9d)][_0xa7a884(0xd5)][_0xa7a884(0xd0)](function(_0x141011,_0x1d7ae2,_0x3e16df,_0x3f9835){var _0x376133=_0xa7a884;_0x1d7ae2===_0x376133(0xa1)&&_0xd521a3[_0x376133(0xa5)][_0x376133(0xd7)](_0x109b22['id'],_0x109b22);}));}this[_0xa7a884(0xc6)]=!![];},Batch[a359_0x1fc37d(0xbf)][a359_0x1fc37d(0x91)]=function(_0x5a7150){var _0x57718a=a359_0x1fc37d,_0x448e63=_0x5a7150['id'];this[_0x57718a(0xc6)]=this['geometry'][_0x57718a(0x91)](_0x448e63)||this['createPrimitive'];if(this['updaters'][_0x57718a(0x91)](_0x448e63)){this[_0x57718a(0x97)][_0x57718a(0x91)](_0x448e63);var _0x546118=this[_0x57718a(0xbc)][_0x57718a(0xb0)](_0x448e63);return a359_0x354072(_0x546118)&&(_0x546118(),this[_0x57718a(0xbc)][_0x57718a(0x91)](_0x448e63),this[_0x57718a(0xa5)][_0x57718a(0x91)](_0x448e63)),!![];}return![];};var colorScratch=new a359_0xcc7f7a();Batch[a359_0x1fc37d(0xbf)]['update']=function(_0x47f169){var _0x468c7c=a359_0x1fc37d,_0x1b41a9=!![],_0x443f5e=this[_0x468c7c(0xaf)],_0x33b703=this['primitives'],_0x3f3b8a=this[_0x468c7c(0xa6)][_0x468c7c(0x98)],_0x3ac093;if(this[_0x468c7c(0xc6)]){var _0x39e679=_0x3f3b8a[_0x468c7c(0xa4)];if(_0x39e679>0x0){a359_0x354072(_0x443f5e)&&(!a359_0x354072(this[_0x468c7c(0xd6)])?this[_0x468c7c(0xd6)]=_0x443f5e:_0x33b703[_0x468c7c(0x91)](_0x443f5e));this[_0x468c7c(0xab)]=a359_0x514b09['getValue'](_0x47f169,this[_0x468c7c(0xb4)],this['material']);var _0x7d977;a359_0x354072(this[_0x468c7c(0xcb)])&&(this[_0x468c7c(0xad)]=a359_0x514b09[_0x468c7c(0xb8)](_0x47f169,this[_0x468c7c(0xcb)],this['depthFailMaterial']),_0x7d977=new this[(_0x468c7c(0xbd))]({'material':this[_0x468c7c(0xad)],'translucent':this[_0x468c7c(0xad)][_0x468c7c(0xae)](),'closed':this[_0x468c7c(0xb5)]})),_0x443f5e=new a359_0x54e6d9({'show':![],'asynchronous':!![],'geometryInstances':_0x3f3b8a['slice'](),'appearance':new this['appearanceType']({'material':this[_0x468c7c(0xab)],'translucent':this[_0x468c7c(0xab)][_0x468c7c(0xae)](),'closed':this[_0x468c7c(0xb5)]}),'depthFailAppearance':_0x7d977,'shadows':this[_0x468c7c(0x9e)]}),_0x33b703['add'](_0x443f5e),_0x1b41a9=![];}else{a359_0x354072(_0x443f5e)&&(_0x33b703[_0x468c7c(0x91)](_0x443f5e),_0x443f5e=undefined);var _0x56d902=this[_0x468c7c(0xd6)];a359_0x354072(_0x56d902)&&(_0x33b703[_0x468c7c(0x91)](_0x56d902),this['oldPrimitive']=undefined);}this['attributes'][_0x468c7c(0xde)](),this[_0x468c7c(0xaf)]=_0x443f5e,this['createPrimitive']=![];}else{if(a359_0x354072(_0x443f5e)&&_0x443f5e[_0x468c7c(0xc4)]){_0x443f5e[_0x468c7c(0x8d)]=!![];a359_0x354072(this['oldPrimitive'])&&(_0x33b703[_0x468c7c(0x91)](this[_0x468c7c(0xd6)]),this[_0x468c7c(0xd6)]=undefined);this[_0x468c7c(0xab)]=a359_0x514b09[_0x468c7c(0xb8)](_0x47f169,this[_0x468c7c(0xb4)],this[_0x468c7c(0xab)]),this[_0x468c7c(0xaf)][_0x468c7c(0xcd)][_0x468c7c(0xab)]=this['material'];a359_0x354072(this[_0x468c7c(0xbd)])&&!(this['depthFailMaterialProperty']instanceof a359_0x511caa)&&(this['depthFailMaterial']=a359_0x514b09[_0x468c7c(0xb8)](_0x47f169,this['depthFailMaterialProperty'],this[_0x468c7c(0xad)]),this[_0x468c7c(0xaf)]['depthFailAppearance']['material']=this[_0x468c7c(0xad)]);var _0x38593f=this[_0x468c7c(0x97)]['values'],_0x21506c=_0x38593f[_0x468c7c(0xa4)];for(_0x3ac093=0x0;_0x3ac093<_0x21506c;_0x3ac093++){var _0x5d8d44=_0x38593f[_0x3ac093],_0x5999ae=_0x5d8d44[_0x468c7c(0x9d)],_0x4e7fab=this[_0x468c7c(0xa6)]['get'](_0x5d8d44['id']),_0x1f8077=this[_0x468c7c(0x9c)][_0x468c7c(0xb0)](_0x4e7fab['id']['id']);!a359_0x354072(_0x1f8077)&&(_0x1f8077=_0x443f5e[_0x468c7c(0xdc)](_0x4e7fab['id']),this[_0x468c7c(0x9c)][_0x468c7c(0xd7)](_0x4e7fab['id']['id'],_0x1f8077));if(a359_0x354072(this['depthFailAppearanceType'])&&this['depthFailMaterialProperty']instanceof a359_0x511caa&&!_0x5d8d44['depthFailMaterialProperty'][_0x468c7c(0xcf)]){var _0x45b603=_0x5d8d44[_0x468c7c(0xcb)][_0x468c7c(0xe2)],_0x11d479=a359_0x4788d2[_0x468c7c(0xe0)](_0x45b603,_0x47f169,a359_0xcc7f7a[_0x468c7c(0xdf)],colorScratch);!a359_0xcc7f7a[_0x468c7c(0x90)](_0x1f8077[_0x468c7c(0x8b)],_0x11d479)&&(_0x1f8077[_0x468c7c(0x8b)]=a359_0xcc7f7a[_0x468c7c(0xa0)](_0x11d479,_0x1f8077[_0x468c7c(0x8b)]),_0x1f8077[_0x468c7c(0xd8)]=a359_0x388344['toValue'](_0x11d479,_0x1f8077[_0x468c7c(0xd8)]));}var _0x29034a=_0x5999ae[_0x468c7c(0xa1)]&&(_0x5d8d44[_0x468c7c(0xca)]||_0x5d8d44['isFilled'](_0x47f169)),_0x1486d8=_0x1f8077[_0x468c7c(0x8d)][0x0]===0x1;_0x29034a!==_0x1486d8&&(_0x1f8077[_0x468c7c(0x8d)]=a359_0x7a9411[_0x468c7c(0xa2)](_0x29034a,_0x1f8077[_0x468c7c(0x8d)]));var _0x37fe74=_0x5d8d44[_0x468c7c(0xda)];if(!a359_0x4788d2[_0x468c7c(0xcf)](_0x37fe74)){var _0xeeac1f=a359_0x4788d2[_0x468c7c(0xe0)](_0x37fe74,_0x47f169,defaultDistanceDisplayCondition,distanceDisplayConditionScratch);!a359_0x1d6973[_0x468c7c(0x90)](_0xeeac1f,_0x1f8077[_0x468c7c(0xc1)])&&(_0x1f8077[_0x468c7c(0xc1)]=a359_0x1d6973[_0x468c7c(0xa0)](_0xeeac1f,_0x1f8077[_0x468c7c(0xc1)]),_0x1f8077['distanceDisplayCondition']=a359_0x88206c['toValue'](_0xeeac1f,_0x1f8077[_0x468c7c(0xdb)]));}var _0x36e6df=_0x5d8d44[_0x468c7c(0x8f)];if(!a359_0x4788d2['isConstant'](_0x36e6df)){var _0x11e31d=a359_0x4788d2[_0x468c7c(0xe0)](_0x36e6df,_0x47f169,defaultOffset,offsetScratch);!a359_0x391eb7[_0x468c7c(0x90)](_0x11e31d,_0x1f8077['_lastOffset'])&&(_0x1f8077[_0x468c7c(0xb7)]=a359_0x391eb7['clone'](_0x11e31d,_0x1f8077[_0x468c7c(0xb7)]),_0x1f8077['offset']=a359_0x4dc40d[_0x468c7c(0xa2)](_0x11e31d,_0x1f8077[_0x468c7c(0xc3)]));}}this[_0x468c7c(0xd2)](_0x443f5e);}else a359_0x354072(_0x443f5e)&&!_0x443f5e[_0x468c7c(0xc4)]&&(_0x1b41a9=![]);}return _0x1b41a9;},Batch[a359_0x1fc37d(0xbf)][a359_0x1fc37d(0xd2)]=function(_0x3c74fc){var _0xbfa45=a359_0x1fc37d,_0x2ad715=this[_0xbfa45(0xa5)]['values'],_0x1b084e=_0x2ad715[_0xbfa45(0xa4)];for(var _0xebb770=0x0;_0xebb770<_0x1b084e;_0xebb770++){var _0x4790a4=_0x2ad715[_0xebb770],_0xc04839=_0x4790a4[_0xbfa45(0x9d)],_0x114aa6=this[_0xbfa45(0xa6)][_0xbfa45(0xb0)](_0x4790a4['id']),_0x45f7a5=this['attributes']['get'](_0x114aa6['id']['id']);!a359_0x354072(_0x45f7a5)&&(_0x45f7a5=_0x3c74fc[_0xbfa45(0xdc)](_0x114aa6['id']),this[_0xbfa45(0x9c)][_0xbfa45(0xd7)](_0x114aa6['id']['id'],_0x45f7a5));var _0x43d8b9=_0xc04839[_0xbfa45(0xa1)],_0x5f0e9d=_0x45f7a5[_0xbfa45(0x8d)][0x0]===0x1;_0x43d8b9!==_0x5f0e9d&&(_0x45f7a5[_0xbfa45(0x8d)]=a359_0x7a9411[_0xbfa45(0xa2)](_0x43d8b9,_0x45f7a5[_0xbfa45(0x8d)]),_0x114aa6[_0xbfa45(0x9c)]['show'][_0xbfa45(0xce)][0x0]=_0x45f7a5[_0xbfa45(0x8d)][0x0]);}this['showsUpdated']['removeAll']();},Batch['prototype']['contains']=function(_0x3cc019){var _0x23396d=a359_0x1fc37d;return this['updaters'][_0x23396d(0x96)](_0x3cc019['id']);},Batch['prototype'][a359_0x1fc37d(0xba)]=function(_0x3dbc0b,_0x3002cf){var _0x4bd629=a359_0x1fc37d,_0x139596=this[_0x4bd629(0xaf)];if(!_0x139596[_0x4bd629(0xc4)])return a359_0x39084c['PENDING'];var _0xe9681b=_0x139596[_0x4bd629(0xdc)](_0x3dbc0b[_0x4bd629(0x9d)]);if(!a359_0x354072(_0xe9681b)||!a359_0x354072(_0xe9681b[_0x4bd629(0x9b)])||a359_0x354072(_0xe9681b[_0x4bd629(0x8d)])&&_0xe9681b['show'][0x0]===0x0)return a359_0x39084c[_0x4bd629(0xc9)];return _0xe9681b[_0x4bd629(0x9b)]['clone'](_0x3002cf),a359_0x39084c[_0x4bd629(0xc7)];},Batch[a359_0x1fc37d(0xbf)]['destroy']=function(){var _0x2bd8a9=a359_0x1fc37d,_0x3f4ed3=this['primitive'],_0x409c93=this[_0x2bd8a9(0xa7)];a359_0x354072(_0x3f4ed3)&&_0x409c93[_0x2bd8a9(0x91)](_0x3f4ed3);var _0x2bd13b=this[_0x2bd8a9(0xd6)];a359_0x354072(_0x2bd13b)&&_0x409c93[_0x2bd8a9(0x91)](_0x2bd13b),this[_0x2bd8a9(0x93)]();};function StaticGeometryPerMaterialBatch(_0x1cb601,_0xd64a0d,_0x123243,_0x3c420d,_0x3d95a9){var _0x49c6ea=a359_0x1fc37d;this[_0x49c6ea(0x9a)]=[],this['_primitives']=_0x1cb601,this['_appearanceType']=_0xd64a0d,this[_0x49c6ea(0xd9)]=_0x123243,this[_0x49c6ea(0xb1)]=_0x3c420d,this[_0x49c6ea(0xd4)]=_0x3d95a9;}StaticGeometryPerMaterialBatch[a359_0x1fc37d(0xbf)][a359_0x1fc37d(0xc2)]=function(_0x4111af,_0x52c2fc){var _0x51c646=a359_0x1fc37d,_0x191c4=this[_0x51c646(0x9a)],_0x3a854b=_0x191c4[_0x51c646(0xa4)];for(var _0x27f07c=0x0;_0x27f07c<_0x3a854b;_0x27f07c++){var _0x180977=_0x191c4[_0x27f07c];if(_0x180977['isMaterial'](_0x52c2fc)){_0x180977[_0x51c646(0xc2)](_0x4111af,_0x52c2fc);return;}}var _0x503a01=new Batch(this[_0x51c646(0xb6)],this[_0x51c646(0xcc)],_0x52c2fc['fillMaterialProperty'],this[_0x51c646(0xd9)],_0x52c2fc[_0x51c646(0xcb)],this[_0x51c646(0xb1)],this[_0x51c646(0xd4)]);_0x503a01[_0x51c646(0xc2)](_0x4111af,_0x52c2fc),_0x191c4['push'](_0x503a01);},StaticGeometryPerMaterialBatch[a359_0x1fc37d(0xbf)][a359_0x1fc37d(0x91)]=function(_0x1f091f){var _0x4a572f=a359_0x1fc37d,_0x1d7c54=this['_items'],_0x10e1d7=_0x1d7c54[_0x4a572f(0xa4)];for(var _0x207f72=_0x10e1d7-0x1;_0x207f72>=0x0;_0x207f72--){var _0x4b2168=_0x1d7c54[_0x207f72];if(_0x4b2168[_0x4a572f(0x91)](_0x1f091f)){_0x4b2168['updaters'][_0x4a572f(0xa4)]===0x0&&(_0x1d7c54[_0x4a572f(0xa3)](_0x207f72,0x1),_0x4b2168['destroy']());break;}}},StaticGeometryPerMaterialBatch[a359_0x1fc37d(0xbf)][a359_0x1fc37d(0x92)]=function(_0x224444){var _0x353a85=a359_0x1fc37d,_0x136e73,_0x456bdd=this[_0x353a85(0x9a)],_0x39e65c=_0x456bdd[_0x353a85(0xa4)];for(_0x136e73=_0x39e65c-0x1;_0x136e73>=0x0;_0x136e73--){var _0x769133=_0x456bdd[_0x136e73];if(_0x769133[_0x353a85(0x9f)]){_0x456bdd[_0x353a85(0xa3)](_0x136e73,0x1);var _0x163067=_0x769133['updaters'][_0x353a85(0x98)],_0x517085=_0x163067[_0x353a85(0xa4)];for(var _0x27d055=0x0;_0x27d055<_0x517085;_0x27d055++){this[_0x353a85(0xc2)](_0x224444,_0x163067[_0x27d055]);}_0x769133[_0x353a85(0xbb)]();}}var _0x1ca8fd=!![];for(_0x136e73=0x0;_0x136e73<_0x456bdd[_0x353a85(0xa4)];_0x136e73++){_0x1ca8fd=_0x456bdd[_0x136e73][_0x353a85(0x92)](_0x224444)&&_0x1ca8fd;}return _0x1ca8fd;},StaticGeometryPerMaterialBatch[a359_0x1fc37d(0xbf)][a359_0x1fc37d(0xba)]=function(_0x55d96e,_0x2b1991){var _0x2dafc0=a359_0x1fc37d,_0x559ed1=this['_items'],_0x139dac=_0x559ed1[_0x2dafc0(0xa4)];for(var _0x24d43c=0x0;_0x24d43c<_0x139dac;_0x24d43c++){var _0x54dda6=_0x559ed1[_0x24d43c];if(_0x54dda6['contains'](_0x55d96e))return _0x54dda6[_0x2dafc0(0xba)](_0x55d96e,_0x2b1991);}return a359_0x39084c[_0x2dafc0(0xc9)];},StaticGeometryPerMaterialBatch[a359_0x1fc37d(0xbf)][a359_0x1fc37d(0x99)]=function(){var _0x3d2867=a359_0x1fc37d,_0x43fa00=this[_0x3d2867(0x9a)],_0x246a08=_0x43fa00[_0x3d2867(0xa4)];for(var _0x4c6731=0x0;_0x4c6731<_0x246a08;_0x4c6731++){_0x43fa00[_0x4c6731]['destroy']();}this[_0x3d2867(0x9a)][_0x3d2867(0xa4)]=0x0;};export default StaticGeometryPerMaterialBatch;