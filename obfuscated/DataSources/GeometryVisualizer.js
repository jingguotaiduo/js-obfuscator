var a312_0x5a0b77=a312_0x1833;(function(_0x3121f0,_0x5a95d5){var _0x2d4244=a312_0x1833,_0x4293a1=_0x3121f0();while(!![]){try{var _0x1d9317=-parseInt(_0x2d4244(0x1a3))/0x1+parseInt(_0x2d4244(0x195))/0x2+parseInt(_0x2d4244(0x1a2))/0x3*(parseInt(_0x2d4244(0x189))/0x4)+-parseInt(_0x2d4244(0x196))/0x5*(parseInt(_0x2d4244(0x1a5))/0x6)+-parseInt(_0x2d4244(0x15f))/0x7+-parseInt(_0x2d4244(0x16e))/0x8*(-parseInt(_0x2d4244(0x18e))/0x9)+-parseInt(_0x2d4244(0x1a6))/0xa*(-parseInt(_0x2d4244(0x175))/0xb);if(_0x1d9317===_0x5a95d5)break;else _0x4293a1['push'](_0x4293a1['shift']());}catch(_0x34757e){_0x4293a1['push'](_0x4293a1['shift']());}}}(a312_0x4eca,0xc0fd3));import a312_0x4ff22b from'../Core/AssociativeArray.js';import a312_0xbe963e from'../Core/BoundingSphere.js';import a312_0x2b7fce from'../Core/Check.js';import a312_0x5a1daf from'../Core/defaultValue.js';import a312_0x84af1d from'../Core/defined.js';import a312_0x56b15a from'../Core/destroyObject.js';import a312_0xcf4253 from'../Core/Event.js';import a312_0xdc3cb1 from'../Core/EventHelper.js';import a312_0xb9c73c from'../Scene/ClassificationType.js';import a312_0x43b861 from'../Scene/MaterialAppearance.js';import a312_0x2ed566 from'../Scene/PerInstanceColorAppearance.js';import a312_0x587534 from'../Scene/ShadowMode.js';import a312_0x2b7d56 from'./BoundingSphereState.js';import a312_0x17d9c6 from'./BoxGeometryUpdater.js';import a312_0x577b48 from'./ColorMaterialProperty.js';import a312_0x27c5f7 from'./CorridorGeometryUpdater.js';import a312_0x18f0bb from'./CylinderGeometryUpdater.js';import a312_0x4d6852 from'./DynamicGeometryBatch.js';import a312_0x5bae1a from'./EllipseGeometryUpdater.js';import a312_0x5439e9 from'./EllipsoidGeometryUpdater.js';import a312_0x16249d from'./Entity.js';import a312_0x115b15 from'./PlaneGeometryUpdater.js';import a312_0xb6640 from'./PolygonGeometryUpdater.js';import a312_0x2a519c from'./PolylineVolumeGeometryUpdater.js';import a312_0x12cea6 from'./RectangleGeometryUpdater.js';import a312_0x1c084a from'./StaticGeometryColorBatch.js';import a312_0x255a4c from'./StaticGeometryPerMaterialBatch.js';import a312_0x467ed8 from'./StaticGroundGeometryColorBatch.js';import a312_0x4feb4c from'./StaticGroundGeometryPerMaterialBatch.js';import a312_0x492374 from'./StaticOutlineGeometryBatch.js';import a312_0x36bbda from'./WallGeometryUpdater.js';var emptyArray=[],geometryUpdaters=[a312_0x17d9c6,a312_0x18f0bb,a312_0x27c5f7,a312_0x5bae1a,a312_0x5439e9,a312_0x115b15,a312_0xb6640,a312_0x2a519c,a312_0x12cea6,a312_0x36bbda];function GeometryUpdaterSet(_0x405857,_0x56d95b){var _0x59d3a5=a312_0x1833;this[_0x59d3a5(0x161)]=_0x405857,this[_0x59d3a5(0x194)]=_0x56d95b;var _0x1af45d=new Array(geometryUpdaters[_0x59d3a5(0x173)]),_0x272b47=new a312_0xcf4253();function _0x17ffa4(_0x3210aa){var _0x199d35=_0x59d3a5;_0x272b47[_0x199d35(0x1a9)](_0x3210aa);}var _0x952f71=new a312_0xdc3cb1();for(var _0xdda78f=0x0;_0xdda78f<_0x1af45d[_0x59d3a5(0x173)];_0xdda78f++){var _0x319490=new geometryUpdaters[_0xdda78f](_0x405857,_0x56d95b);_0x952f71['add'](_0x319490[_0x59d3a5(0x19f)],_0x17ffa4),_0x1af45d[_0xdda78f]=_0x319490;}this['updaters']=_0x1af45d,this['geometryChanged']=_0x272b47,this[_0x59d3a5(0x170)]=_0x952f71,this[_0x59d3a5(0x167)]=_0x405857[_0x59d3a5(0x168)][_0x59d3a5(0x16f)](GeometryUpdaterSet['prototype'][_0x59d3a5(0x185)],this);}GeometryUpdaterSet[a312_0x5a0b77(0x16c)]['_onEntityPropertyChanged']=function(_0xd4c975,_0x585b70,_0x8e872,_0x49a7f6){var _0x681a90=a312_0x5a0b77,_0x38232b=this[_0x681a90(0x17f)];for(var _0x5c4d3a=0x0;_0x5c4d3a<_0x38232b[_0x681a90(0x173)];_0x5c4d3a++){_0x38232b[_0x5c4d3a]['_onEntityPropertyChanged'](_0xd4c975,_0x585b70,_0x8e872,_0x49a7f6);}},GeometryUpdaterSet[a312_0x5a0b77(0x16c)][a312_0x5a0b77(0x193)]=function(_0x439e9e){var _0x4785c=a312_0x5a0b77,_0x493f6b=this[_0x4785c(0x17f)];for(var _0x1f10f2=0x0;_0x1f10f2<_0x493f6b[_0x4785c(0x173)];_0x1f10f2++){_0x439e9e(_0x493f6b[_0x1f10f2]);}},GeometryUpdaterSet[a312_0x5a0b77(0x16c)][a312_0x5a0b77(0x180)]=function(){var _0x168b9a=a312_0x5a0b77;this[_0x168b9a(0x170)][_0x168b9a(0x17c)]();var _0x5a7579=this['updaters'];for(var _0x20b477=0x0;_0x20b477<_0x5a7579[_0x168b9a(0x173)];_0x20b477++){_0x5a7579[_0x20b477]['destroy']();}this[_0x168b9a(0x167)](),a312_0x56b15a(this);};function GeometryVisualizer(_0x295a26,_0x52dd4c,_0x438d52,_0x5a5dc1){var _0x3dc48a=a312_0x5a0b77;a312_0x2b7fce[_0x3dc48a(0x19d)]('scene',_0x295a26),a312_0x2b7fce['defined'](_0x3dc48a(0x179),_0x52dd4c),_0x438d52=a312_0x5a1daf(_0x438d52,_0x295a26[_0x3dc48a(0x176)]),_0x5a5dc1=a312_0x5a1daf(_0x5a5dc1,_0x295a26['groundPrimitives']),this['_scene']=_0x295a26,this[_0x3dc48a(0x18c)]=_0x438d52,this[_0x3dc48a(0x1ac)]=_0x5a5dc1,this[_0x3dc48a(0x191)]=undefined,this[_0x3dc48a(0x1a1)]=new a312_0x4ff22b(),this[_0x3dc48a(0x18d)]=new a312_0x4ff22b(),this[_0x3dc48a(0x18f)]=new a312_0x4ff22b();var _0x50a644=a312_0x587534['NUMBER_OF_SHADOW_MODES'];this[_0x3dc48a(0x163)]=new Array(_0x50a644*0x2),this['_closedColorBatches']=new Array(_0x50a644*0x2),this[_0x3dc48a(0x174)]=new Array(_0x50a644*0x2),this['_openColorBatches']=new Array(_0x50a644*0x2),this['_openMaterialBatches']=new Array(_0x50a644*0x2);var _0x8022d5=a312_0x16249d['supportsMaterialsforEntitiesOnTerrain'](_0x295a26);this[_0x3dc48a(0x1b0)]=_0x8022d5;var _0x351488;for(_0x351488=0x0;_0x351488<_0x50a644;++_0x351488){this['_outlineBatches'][_0x351488]=new a312_0x492374(_0x438d52,_0x295a26,_0x351488,![]),this['_outlineBatches'][_0x50a644+_0x351488]=new a312_0x492374(_0x438d52,_0x295a26,_0x351488,!![]),this[_0x3dc48a(0x199)][_0x351488]=new a312_0x1c084a(_0x438d52,a312_0x2ed566,undefined,!![],_0x351488,!![]),this[_0x3dc48a(0x199)][_0x50a644+_0x351488]=new a312_0x1c084a(_0x438d52,a312_0x2ed566,undefined,!![],_0x351488,![]),this['_closedMaterialBatches'][_0x351488]=new a312_0x255a4c(_0x438d52,a312_0x43b861,undefined,!![],_0x351488,!![]),this[_0x3dc48a(0x174)][_0x50a644+_0x351488]=new a312_0x255a4c(_0x438d52,a312_0x43b861,undefined,!![],_0x351488,![]),this['_openColorBatches'][_0x351488]=new a312_0x1c084a(_0x438d52,a312_0x2ed566,undefined,![],_0x351488,!![]),this['_openColorBatches'][_0x50a644+_0x351488]=new a312_0x1c084a(_0x438d52,a312_0x2ed566,undefined,![],_0x351488,![]),this['_openMaterialBatches'][_0x351488]=new a312_0x255a4c(_0x438d52,a312_0x43b861,undefined,![],_0x351488,!![]),this[_0x3dc48a(0x160)][_0x50a644+_0x351488]=new a312_0x255a4c(_0x438d52,a312_0x43b861,undefined,![],_0x351488,![]);}var _0x43f6e7=a312_0xb9c73c[_0x3dc48a(0x182)],_0x742653=new Array(_0x43f6e7),_0x171835=[];if(_0x8022d5)for(_0x351488=0x0;_0x351488<_0x43f6e7;++_0x351488){_0x171835['push'](new a312_0x4feb4c(_0x5a5dc1,_0x351488,a312_0x43b861)),_0x742653[_0x351488]=new a312_0x467ed8(_0x5a5dc1,_0x351488);}else for(_0x351488=0x0;_0x351488<_0x43f6e7;++_0x351488){_0x742653[_0x351488]=new a312_0x467ed8(_0x5a5dc1,_0x351488);}this['_groundColorBatches']=_0x742653,this['_groundMaterialBatches']=_0x171835,this[_0x3dc48a(0x166)]=new a312_0x4d6852(_0x438d52,_0x5a5dc1),this[_0x3dc48a(0x16a)]=this[_0x3dc48a(0x163)][_0x3dc48a(0x164)](this[_0x3dc48a(0x199)],this[_0x3dc48a(0x174)],this['_openColorBatches'],this[_0x3dc48a(0x160)],this[_0x3dc48a(0x187)],this[_0x3dc48a(0x162)],this[_0x3dc48a(0x166)]),this[_0x3dc48a(0x186)]=new a312_0x4ff22b(),this['_updaterSets']=new a312_0x4ff22b(),this[_0x3dc48a(0x191)]=_0x52dd4c,_0x52dd4c[_0x3dc48a(0x19c)][_0x3dc48a(0x16f)](GeometryVisualizer[_0x3dc48a(0x16c)]['_onCollectionChanged'],this),this[_0x3dc48a(0x192)](_0x52dd4c,_0x52dd4c['values'],emptyArray);}function a312_0x1833(_0x59a492,_0x47181a){var _0x4ecae5=a312_0x4eca();return a312_0x1833=function(_0x18330b,_0x2d78a9){_0x18330b=_0x18330b-0x15e;var _0x1bc47b=_0x4ecae5[_0x18330b];return _0x1bc47b;},a312_0x1833(_0x59a492,_0x47181a);}function a312_0x4eca(){var _0xe6d079=['add','_supportsMaterialsforEntitiesOnTerrain','getValue','649187hSTSUv','_openMaterialBatches','entity','_groundMaterialBatches','_outlineBatches','concat','shadowsProperty','_dynamicBatch','_removeEntitySubscription','definitionChanged','bind','_batches','isClosed','prototype','isDestroyed','12664BcoVef','addEventListener','eventHelper','outlineEnabled','set','length','_closedMaterialBatches','8594311crTvOx','primitives','isDynamic','_openColorBatches','entityCollection','getBoundingSphere','removeEventListener','removeAll','_removeUpdater','_updaterSets','updaters','destroy','_insertUpdaterIntoBatch','NUMBER_OF_CLASSIFICATION_TYPES','classificationTypeProperty','result','_onEntityPropertyChanged','_subscriptions','_groundColorBatches','terrainOffsetProperty','40WWonBv','onTerrain','FAILED','_primitives','_removedObjects','2007aKJAQD','_changedObjects','update','_entityCollection','_onCollectionChanged','forEach','scene','1336146SmwSZX','435tdNSYv','NUMBER_OF_SHADOW_MODES','removeAllPrimitives','_closedColorBatches','_scene','fillMaterialProperty','collectionChanged','defined','DONE','geometryChanged','push','_addedObjects','297312LaUUhg','606852HbssGP','clone','89886tMsGkz','10KekHni','get','PENDING','raiseEvent','values','fillEnabled','_groundPrimitives','time','remove'];a312_0x4eca=function(){return _0xe6d079;};return a312_0x4eca();}GeometryVisualizer['prototype']['update']=function(_0x1b6f1a){var _0x41b518=a312_0x5a0b77;a312_0x2b7fce[_0x41b518(0x19d)](_0x41b518(0x1ad),_0x1b6f1a);var _0x392eba=this[_0x41b518(0x1a1)],_0x2c7212=_0x392eba[_0x41b518(0x1aa)],_0x37a16d=this[_0x41b518(0x18d)],_0x2c5448=_0x37a16d[_0x41b518(0x1aa)],_0x1ab639=this[_0x41b518(0x18f)],_0xbd3aac=_0x1ab639[_0x41b518(0x1aa)],_0x577bea,_0x4a5f7b,_0x278959,_0x32529c,_0x853536=this;for(_0x577bea=_0xbd3aac[_0x41b518(0x173)]-0x1;_0x577bea>-0x1;_0x577bea--){_0x4a5f7b=_0xbd3aac[_0x577bea],_0x278959=_0x4a5f7b['id'],_0x32529c=this[_0x41b518(0x17e)][_0x41b518(0x1a7)](_0x278959),_0x32529c['entity']===_0x4a5f7b?_0x32529c[_0x41b518(0x193)](function(_0x43563b){var _0x2bacc9=_0x41b518;_0x853536[_0x2bacc9(0x17d)](_0x43563b),_0x853536[_0x2bacc9(0x181)](_0x1b6f1a,_0x43563b);}):(_0x2c5448['push'](_0x4a5f7b),_0x2c7212[_0x41b518(0x1a0)](_0x4a5f7b));}for(_0x577bea=_0x2c5448[_0x41b518(0x173)]-0x1;_0x577bea>-0x1;_0x577bea--){_0x4a5f7b=_0x2c5448[_0x577bea],_0x278959=_0x4a5f7b['id'],_0x32529c=this[_0x41b518(0x17e)]['get'](_0x278959),_0x32529c[_0x41b518(0x193)](this[_0x41b518(0x17d)][_0x41b518(0x169)](this)),_0x32529c[_0x41b518(0x180)](),this['_updaterSets'][_0x41b518(0x1ae)](_0x278959),this[_0x41b518(0x186)][_0x41b518(0x1a7)](_0x278959)(),this['_subscriptions'][_0x41b518(0x1ae)](_0x278959);}for(_0x577bea=_0x2c7212['length']-0x1;_0x577bea>-0x1;_0x577bea--){_0x4a5f7b=_0x2c7212[_0x577bea],_0x278959=_0x4a5f7b['id'],_0x32529c=new GeometryUpdaterSet(_0x4a5f7b,this[_0x41b518(0x19a)]),this['_updaterSets'][_0x41b518(0x172)](_0x278959,_0x32529c),_0x32529c[_0x41b518(0x193)](function(_0x265272){_0x853536['_insertUpdaterIntoBatch'](_0x1b6f1a,_0x265272);}),this[_0x41b518(0x186)][_0x41b518(0x172)](_0x278959,_0x32529c['geometryChanged'][_0x41b518(0x16f)](GeometryVisualizer['_onGeometryChanged'],this));}_0x392eba[_0x41b518(0x17c)](),_0x37a16d[_0x41b518(0x17c)](),_0x1ab639['removeAll']();var _0x4ea48f=!![],_0x4dc14f=this[_0x41b518(0x16a)],_0xef23eb=_0x4dc14f['length'];for(_0x577bea=0x0;_0x577bea<_0xef23eb;_0x577bea++){_0x4ea48f=_0x4dc14f[_0x577bea][_0x41b518(0x190)](_0x1b6f1a)&&_0x4ea48f;}return _0x4ea48f;};var getBoundingSphereArrayScratch=[],getBoundingSphereBoundingSphereScratch=new a312_0xbe963e();GeometryVisualizer[a312_0x5a0b77(0x16c)][a312_0x5a0b77(0x17a)]=function(_0x586fc9,_0x32add6){var _0x505584=a312_0x5a0b77;a312_0x2b7fce['defined']('entity',_0x586fc9),a312_0x2b7fce['defined'](_0x505584(0x184),_0x32add6);var _0x4964bc=getBoundingSphereArrayScratch,_0x1c9f18=getBoundingSphereBoundingSphereScratch,_0x587b82=0x0,_0x1b52ea=a312_0x2b7d56[_0x505584(0x19e)],_0x4fb7da=this[_0x505584(0x16a)],_0x349c2a=_0x4fb7da[_0x505584(0x173)],_0x2e1b2d=_0x586fc9['id'],_0x1c185e=this[_0x505584(0x17e)][_0x505584(0x1a7)](_0x2e1b2d)[_0x505584(0x17f)];for(var _0x25b5e6=0x0;_0x25b5e6<_0x1c185e[_0x505584(0x173)];_0x25b5e6++){var _0x52a160=_0x1c185e[_0x25b5e6];for(var _0x303fd5=0x0;_0x303fd5<_0x349c2a;_0x303fd5++){_0x1b52ea=_0x4fb7da[_0x303fd5][_0x505584(0x17a)](_0x52a160,_0x1c9f18);if(_0x1b52ea===a312_0x2b7d56['PENDING'])return a312_0x2b7d56[_0x505584(0x1a8)];else _0x1b52ea===a312_0x2b7d56['DONE']&&(_0x4964bc[_0x587b82]=a312_0xbe963e[_0x505584(0x1a4)](_0x1c9f18,_0x4964bc[_0x587b82]),_0x587b82++);}}if(_0x587b82===0x0)return a312_0x2b7d56[_0x505584(0x18b)];return _0x4964bc[_0x505584(0x173)]=_0x587b82,a312_0xbe963e['fromBoundingSpheres'](_0x4964bc,_0x32add6),a312_0x2b7d56[_0x505584(0x19e)];},GeometryVisualizer['prototype'][a312_0x5a0b77(0x16d)]=function(){return![];},GeometryVisualizer[a312_0x5a0b77(0x16c)][a312_0x5a0b77(0x180)]=function(){var _0x1ca61b=a312_0x5a0b77;this[_0x1ca61b(0x191)][_0x1ca61b(0x19c)][_0x1ca61b(0x17b)](GeometryVisualizer[_0x1ca61b(0x16c)]['_onCollectionChanged'],this),this[_0x1ca61b(0x1a1)][_0x1ca61b(0x17c)](),this[_0x1ca61b(0x18d)][_0x1ca61b(0x17c)]();var _0x2fd475,_0x5a47d9=this[_0x1ca61b(0x16a)],_0x5b0046=_0x5a47d9[_0x1ca61b(0x173)];for(_0x2fd475=0x0;_0x2fd475<_0x5b0046;_0x2fd475++){_0x5a47d9[_0x2fd475][_0x1ca61b(0x198)]();}var _0x225154=this[_0x1ca61b(0x186)][_0x1ca61b(0x1aa)];_0x5b0046=_0x225154['length'];for(_0x2fd475=0x0;_0x2fd475<_0x5b0046;_0x2fd475++){_0x225154[_0x2fd475]();}this[_0x1ca61b(0x186)]['removeAll']();var _0x16c55d=this['_updaterSets']['values'];_0x5b0046=_0x16c55d['length'];for(_0x2fd475=0x0;_0x2fd475<_0x5b0046;_0x2fd475++){_0x16c55d[_0x2fd475][_0x1ca61b(0x180)]();}return this[_0x1ca61b(0x17e)][_0x1ca61b(0x17c)](),a312_0x56b15a(this);},GeometryVisualizer[a312_0x5a0b77(0x16c)][a312_0x5a0b77(0x17d)]=function(_0x5bd8a6){var _0x335638=a312_0x5a0b77,_0x2e8ce2=this['_batches'],_0x9d9bd8=_0x2e8ce2['length'];for(var _0x2cb91d=0x0;_0x2cb91d<_0x9d9bd8;_0x2cb91d++){_0x2e8ce2[_0x2cb91d][_0x335638(0x1ae)](_0x5bd8a6);}},GeometryVisualizer[a312_0x5a0b77(0x16c)]['_insertUpdaterIntoBatch']=function(_0xa2b47c,_0x1f9669){var _0x1ed04e=a312_0x5a0b77;if(_0x1f9669[_0x1ed04e(0x177)]){this['_dynamicBatch']['add'](_0xa2b47c,_0x1f9669);return;}var _0x24bacd;(_0x1f9669[_0x1ed04e(0x171)]||_0x1f9669[_0x1ed04e(0x1ab)])&&(_0x24bacd=_0x1f9669[_0x1ed04e(0x165)][_0x1ed04e(0x15e)](_0xa2b47c));var _0x4988f0=a312_0x587534[_0x1ed04e(0x197)];_0x1f9669['outlineEnabled']&&(a312_0x84af1d(_0x1f9669[_0x1ed04e(0x188)])?this['_outlineBatches'][_0x4988f0+_0x24bacd][_0x1ed04e(0x1af)](_0xa2b47c,_0x1f9669):this['_outlineBatches'][_0x24bacd][_0x1ed04e(0x1af)](_0xa2b47c,_0x1f9669));if(_0x1f9669[_0x1ed04e(0x1ab)]){if(_0x1f9669[_0x1ed04e(0x18a)]){var _0x90e74b=_0x1f9669[_0x1ed04e(0x183)][_0x1ed04e(0x15e)](_0xa2b47c);_0x1f9669[_0x1ed04e(0x19b)]instanceof a312_0x577b48?this['_groundColorBatches'][_0x90e74b][_0x1ed04e(0x1af)](_0xa2b47c,_0x1f9669):this[_0x1ed04e(0x162)][_0x90e74b][_0x1ed04e(0x1af)](_0xa2b47c,_0x1f9669);}else{if(_0x1f9669[_0x1ed04e(0x16b)]){if(_0x1f9669['fillMaterialProperty']instanceof a312_0x577b48)a312_0x84af1d(_0x1f9669['terrainOffsetProperty'])?this[_0x1ed04e(0x199)][_0x4988f0+_0x24bacd][_0x1ed04e(0x1af)](_0xa2b47c,_0x1f9669):this[_0x1ed04e(0x199)][_0x24bacd][_0x1ed04e(0x1af)](_0xa2b47c,_0x1f9669);else a312_0x84af1d(_0x1f9669[_0x1ed04e(0x188)])?this[_0x1ed04e(0x174)][_0x4988f0+_0x24bacd][_0x1ed04e(0x1af)](_0xa2b47c,_0x1f9669):this[_0x1ed04e(0x174)][_0x24bacd][_0x1ed04e(0x1af)](_0xa2b47c,_0x1f9669);}else{if(_0x1f9669[_0x1ed04e(0x19b)]instanceof a312_0x577b48)a312_0x84af1d(_0x1f9669[_0x1ed04e(0x188)])?this[_0x1ed04e(0x178)][_0x4988f0+_0x24bacd][_0x1ed04e(0x1af)](_0xa2b47c,_0x1f9669):this['_openColorBatches'][_0x24bacd][_0x1ed04e(0x1af)](_0xa2b47c,_0x1f9669);else a312_0x84af1d(_0x1f9669[_0x1ed04e(0x188)])?this[_0x1ed04e(0x160)][_0x4988f0+_0x24bacd][_0x1ed04e(0x1af)](_0xa2b47c,_0x1f9669):this['_openMaterialBatches'][_0x24bacd][_0x1ed04e(0x1af)](_0xa2b47c,_0x1f9669);}}}},GeometryVisualizer['_onGeometryChanged']=function(_0x411d7f){var _0x6bee53=a312_0x5a0b77,_0x50b9d2=this[_0x6bee53(0x18d)],_0x2c666b=this[_0x6bee53(0x18f)],_0x10829d=_0x411d7f[_0x6bee53(0x161)],_0x12797d=_0x10829d['id'];!a312_0x84af1d(_0x50b9d2[_0x6bee53(0x1a7)](_0x12797d))&&!a312_0x84af1d(_0x2c666b[_0x6bee53(0x1a7)](_0x12797d))&&_0x2c666b[_0x6bee53(0x172)](_0x12797d,_0x10829d);},GeometryVisualizer['prototype'][a312_0x5a0b77(0x192)]=function(_0x4a6854,_0x12b6ff,_0x581420){var _0x215e19=a312_0x5a0b77,_0x32193d=this[_0x215e19(0x1a1)],_0x1e0364=this[_0x215e19(0x18d)],_0x413ea5=this[_0x215e19(0x18f)],_0xf7895d,_0x8e984,_0x194e31;for(_0xf7895d=_0x581420[_0x215e19(0x173)]-0x1;_0xf7895d>-0x1;_0xf7895d--){_0x194e31=_0x581420[_0xf7895d],_0x8e984=_0x194e31['id'],!_0x32193d[_0x215e19(0x1ae)](_0x8e984)&&(_0x1e0364[_0x215e19(0x172)](_0x8e984,_0x194e31),_0x413ea5[_0x215e19(0x1ae)](_0x8e984));}for(_0xf7895d=_0x12b6ff[_0x215e19(0x173)]-0x1;_0xf7895d>-0x1;_0xf7895d--){_0x194e31=_0x12b6ff[_0xf7895d],_0x8e984=_0x194e31['id'],_0x1e0364[_0x215e19(0x1ae)](_0x8e984)?_0x413ea5[_0x215e19(0x172)](_0x8e984,_0x194e31):_0x32193d[_0x215e19(0x172)](_0x8e984,_0x194e31);}};export default GeometryVisualizer;