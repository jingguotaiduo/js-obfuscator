var a301_0x106aee=a301_0x4995;(function(_0x372c5f,_0x1cc2be){var _0x57e35d=a301_0x4995,_0x442f52=_0x372c5f();while(!![]){try{var _0x1dd9cd=-parseInt(_0x57e35d(0x1d8))/0x1+parseInt(_0x57e35d(0x1ff))/0x2*(parseInt(_0x57e35d(0x207))/0x3)+-parseInt(_0x57e35d(0x1d7))/0x4+parseInt(_0x57e35d(0x208))/0x5+-parseInt(_0x57e35d(0x220))/0x6*(parseInt(_0x57e35d(0x20f))/0x7)+-parseInt(_0x57e35d(0x222))/0x8*(-parseInt(_0x57e35d(0x1f6))/0x9)+-parseInt(_0x57e35d(0x21d))/0xa*(parseInt(_0x57e35d(0x1e4))/0xb);if(_0x1dd9cd===_0x1cc2be)break;else _0x442f52['push'](_0x442f52['shift']());}catch(_0x36cecc){_0x442f52['push'](_0x442f52['shift']());}}}(a301_0x29e3,0x36aab));import a301_0x5306e7 from'../Core/ApproximateTerrainHeights.js';import a301_0xe6864f from'../Core/Cartesian3.js';import a301_0x26f78e from'../Core/Check.js';import a301_0x73b162 from'../Core/Color.js';import a301_0x33c0af from'../Core/ColorGeometryInstanceAttribute.js';import a301_0x26fdcc from'../Core/defined.js';import a301_0x3860be from'../Core/DeveloperError.js';import a301_0x55adc9 from'../Core/DistanceDisplayConditionGeometryInstanceAttribute.js';function a301_0x29e3(){var _0x200711=['330lsTQCz','_entity','numberOfVerticalLines','computeGeometryOffsetAttribute','_outlineColorProperty','BLACK','getValue','_setStaticOptions','rotation','offsetAttribute','getValueOrDefault','minimumTerrainHeight','_isDynamic','extrudedHeight','getValueOrUndefined','ZERO','This\x20instance\x20does\x20not\x20represent\x20an\x20outlined\x20geometry.','defined','1380942kNwgji','semiMajorAxis','call','_showOutlineProperty','center','VERTEX_FORMAT','WHITE','outlineWidth','computeRectangle','14iAEEKL','vertexFormat','_terrainOffsetProperty','TEXTURED','stRotation','_computeCenter','fromCartesian3','_materialProperty','180624BbjhBq','2140465QKmzHC','zIndex','granularity','prototype','constructor','fromDistanceDisplayCondition','ellipse','7MVvDls','_onTerrain','_isHidden','isAvailable','getGeometryExtrudedHeight','_options','_showProperty','NONE','getMinimumMaximumHeights','offset','MINIMUM_VALUE','_distanceDisplayConditionProperty','create','position','91610BUHHMP','isShowing','CLAMP_TO_GROUND','1566780zTnHWn','extrudedHeightReference','8bMedoO','797012NiQtJK','43859SDTqsG','fromColor','height','heightReference','isConstant','_setOptions','createFillGeometryInstance','getGeometryHeight','color','time','semiMinorAxis','DynamicGeometryUpdater'];a301_0x29e3=function(){return _0x200711;};return a301_0x29e3();}import a301_0x539fdb from'../Core/EllipseGeometry.js';import a301_0x6aefb1 from'../Core/EllipseOutlineGeometry.js';import a301_0x4f6a1e from'../Core/GeometryInstance.js';import a301_0x1ee2b6 from'../Core/Iso8601.js';import a301_0x2ebbbc from'../Core/OffsetGeometryInstanceAttribute.js';import a301_0x54cc49 from'../Core/Rectangle.js';import a301_0x24d35c from'../Core/ShowGeometryInstanceAttribute.js';import a301_0x3cc2d9 from'../Scene/HeightReference.js';import a301_0x2126da from'../Scene/MaterialAppearance.js';import a301_0x37cd01 from'../Scene/PerInstanceColorAppearance.js';import a301_0x115ac0 from'./ColorMaterialProperty.js';import a301_0x3070a9 from'./DynamicGeometryUpdater.js';import a301_0x1f0b94 from'./GeometryUpdater.js';import a301_0x72c69a from'./GroundGeometryUpdater.js';import a301_0x1c0156 from'./Property.js';var scratchColor=new a301_0x73b162(),defaultOffset=a301_0xe6864f[a301_0x106aee(0x1f3)],offsetScratch=new a301_0xe6864f(),scratchRectangle=new a301_0x54cc49();function EllipseGeometryOptions(_0x11ce53){var _0x451df9=a301_0x106aee;this['id']=_0x11ce53,this[_0x451df9(0x200)]=undefined,this[_0x451df9(0x1fa)]=undefined,this[_0x451df9(0x1f7)]=undefined,this['semiMinorAxis']=undefined,this[_0x451df9(0x1ec)]=undefined,this[_0x451df9(0x1da)]=undefined,this[_0x451df9(0x1f1)]=undefined,this[_0x451df9(0x20a)]=undefined,this['stRotation']=undefined,this['numberOfVerticalLines']=undefined,this[_0x451df9(0x1ed)]=undefined;}function EllipseGeometryUpdater(_0x401578,_0xf9b312){var _0x4d1d5e=a301_0x106aee;a301_0x72c69a['call'](this,{'entity':_0x401578,'scene':_0xf9b312,'geometryOptions':new EllipseGeometryOptions(_0x401578),'geometryPropertyName':'ellipse','observedPropertyNames':['availability',_0x4d1d5e(0x21c),_0x4d1d5e(0x20e)]}),this['_onEntityPropertyChanged'](_0x401578,_0x4d1d5e(0x20e),_0x401578[_0x4d1d5e(0x20e)],undefined);}a301_0x26fdcc(Object[a301_0x106aee(0x21b)])&&(EllipseGeometryUpdater[a301_0x106aee(0x20b)]=Object[a301_0x106aee(0x21b)](a301_0x72c69a['prototype']),EllipseGeometryUpdater[a301_0x106aee(0x20b)][a301_0x106aee(0x20c)]=EllipseGeometryUpdater);EllipseGeometryUpdater[a301_0x106aee(0x20b)][a301_0x106aee(0x1de)]=function(_0x49e3cf){var _0x36b0c1=a301_0x106aee;a301_0x26f78e[_0x36b0c1(0x1f5)](_0x36b0c1(0x1e1),_0x49e3cf);if(!this['_fillEnabled'])throw new a301_0x3860be('This\x20instance\x20does\x20not\x20represent\x20a\x20filled\x20geometry.');var _0x130d09=this[_0x36b0c1(0x1e5)],_0x3a575a=_0x130d09[_0x36b0c1(0x212)](_0x49e3cf),_0x4f55fd={'show':new a301_0x24d35c(_0x3a575a&&_0x130d09[_0x36b0c1(0x21e)]&&this[_0x36b0c1(0x215)][_0x36b0c1(0x1ea)](_0x49e3cf)&&this['_fillProperty']['getValue'](_0x49e3cf)),'distanceDisplayCondition':a301_0x55adc9['fromDistanceDisplayCondition'](this[_0x36b0c1(0x21a)]['getValue'](_0x49e3cf)),'offset':undefined,'color':undefined};if(this['_materialProperty']instanceof a301_0x115ac0){var _0x364235;a301_0x26fdcc(this[_0x36b0c1(0x206)]['color'])&&(this[_0x36b0c1(0x206)][_0x36b0c1(0x1e0)][_0x36b0c1(0x1dc)]||_0x3a575a)&&(_0x364235=this[_0x36b0c1(0x206)][_0x36b0c1(0x1e0)][_0x36b0c1(0x1ea)](_0x49e3cf,scratchColor)),!a301_0x26fdcc(_0x364235)&&(_0x364235=a301_0x73b162[_0x36b0c1(0x1fc)]),_0x4f55fd[_0x36b0c1(0x1e0)]=a301_0x33c0af[_0x36b0c1(0x1d9)](_0x364235);}return a301_0x26fdcc(this[_0x36b0c1(0x214)]['offsetAttribute'])&&(_0x4f55fd['offset']=a301_0x2ebbbc[_0x36b0c1(0x205)](a301_0x1c0156[_0x36b0c1(0x1ee)](this[_0x36b0c1(0x201)],_0x49e3cf,defaultOffset,offsetScratch))),new a301_0x4f6a1e({'id':_0x130d09,'geometry':new a301_0x539fdb(this['_options']),'attributes':_0x4f55fd});},EllipseGeometryUpdater[a301_0x106aee(0x20b)]['createOutlineGeometryInstance']=function(_0x3d608b){var _0x1ebc81=a301_0x106aee;a301_0x26f78e['defined'](_0x1ebc81(0x1e1),_0x3d608b);if(!this['_outlineEnabled'])throw new a301_0x3860be(_0x1ebc81(0x1f4));var _0x5a0fdf=this[_0x1ebc81(0x1e5)],_0x21e61a=_0x5a0fdf[_0x1ebc81(0x212)](_0x3d608b),_0x1c0d66=a301_0x1c0156['getValueOrDefault'](this[_0x1ebc81(0x1e8)],_0x3d608b,a301_0x73b162[_0x1ebc81(0x1e9)],scratchColor),_0x26a154=this[_0x1ebc81(0x21a)][_0x1ebc81(0x1ea)](_0x3d608b),_0x1f8b54={'show':new a301_0x24d35c(_0x21e61a&&_0x5a0fdf[_0x1ebc81(0x21e)]&&this[_0x1ebc81(0x215)][_0x1ebc81(0x1ea)](_0x3d608b)&&this[_0x1ebc81(0x1f9)][_0x1ebc81(0x1ea)](_0x3d608b)),'color':a301_0x33c0af[_0x1ebc81(0x1d9)](_0x1c0d66),'distanceDisplayCondition':a301_0x55adc9[_0x1ebc81(0x20d)](_0x26a154),'offset':undefined};return a301_0x26fdcc(this[_0x1ebc81(0x214)][_0x1ebc81(0x1ed)])&&(_0x1f8b54[_0x1ebc81(0x218)]=a301_0x2ebbbc[_0x1ebc81(0x205)](a301_0x1c0156[_0x1ebc81(0x1ee)](this[_0x1ebc81(0x201)],_0x3d608b,defaultOffset,offsetScratch))),new a301_0x4f6a1e({'id':_0x5a0fdf,'geometry':new a301_0x6aefb1(this['_options']),'attributes':_0x1f8b54});},EllipseGeometryUpdater['prototype'][a301_0x106aee(0x204)]=function(_0x44069a,_0x1c7219){var _0xaef76b=a301_0x106aee;return a301_0x1c0156[_0xaef76b(0x1f2)](this[_0xaef76b(0x1e5)][_0xaef76b(0x21c)],_0x44069a,_0x1c7219);},EllipseGeometryUpdater[a301_0x106aee(0x20b)][a301_0x106aee(0x211)]=function(_0x374a81,_0x15cf67){var _0x25d56e=a301_0x106aee,_0xf29c9b=_0x374a81[_0x25d56e(0x21c)];return!a301_0x26fdcc(_0xf29c9b)||!a301_0x26fdcc(_0x15cf67[_0x25d56e(0x1f7)])||!a301_0x26fdcc(_0x15cf67[_0x25d56e(0x1e2)])||a301_0x1f0b94['prototype'][_0x25d56e(0x211)][_0x25d56e(0x1f8)](this,_0x374a81,_0x15cf67);},EllipseGeometryUpdater[a301_0x106aee(0x20b)][a301_0x106aee(0x1f0)]=function(_0x3ce8e3,_0x12e183){var _0x10c04d=a301_0x106aee;return!_0x3ce8e3[_0x10c04d(0x21c)]['isConstant']||!_0x12e183[_0x10c04d(0x1f7)][_0x10c04d(0x1dc)]||!_0x12e183[_0x10c04d(0x1e2)][_0x10c04d(0x1dc)]||!a301_0x1c0156['isConstant'](_0x12e183['rotation'])||!a301_0x1c0156[_0x10c04d(0x1dc)](_0x12e183[_0x10c04d(0x1da)])||!a301_0x1c0156[_0x10c04d(0x1dc)](_0x12e183[_0x10c04d(0x1f1)])||!a301_0x1c0156['isConstant'](_0x12e183[_0x10c04d(0x20a)])||!a301_0x1c0156[_0x10c04d(0x1dc)](_0x12e183[_0x10c04d(0x203)])||!a301_0x1c0156['isConstant'](_0x12e183[_0x10c04d(0x1fd)])||!a301_0x1c0156[_0x10c04d(0x1dc)](_0x12e183[_0x10c04d(0x1e6)])||!a301_0x1c0156[_0x10c04d(0x1dc)](_0x12e183[_0x10c04d(0x209)])||this[_0x10c04d(0x210)]&&!a301_0x1c0156[_0x10c04d(0x1dc)](this[_0x10c04d(0x206)])&&!(this['_materialProperty']instanceof a301_0x115ac0);},EllipseGeometryUpdater[a301_0x106aee(0x20b)][a301_0x106aee(0x1eb)]=function(_0xba6dfb,_0x23d1ac){var _0x291670=a301_0x106aee,_0x204eeb=a301_0x1c0156['getValueOrUndefined'](_0x23d1ac[_0x291670(0x1da)],a301_0x1ee2b6[_0x291670(0x219)]),_0x217a03=a301_0x1c0156['getValueOrDefault'](_0x23d1ac['heightReference'],a301_0x1ee2b6[_0x291670(0x219)],a301_0x3cc2d9[_0x291670(0x216)]),_0x4ef06a=a301_0x1c0156[_0x291670(0x1f2)](_0x23d1ac[_0x291670(0x1f1)],a301_0x1ee2b6[_0x291670(0x219)]),_0x580a19=a301_0x1c0156[_0x291670(0x1ee)](_0x23d1ac['extrudedHeightReference'],a301_0x1ee2b6[_0x291670(0x219)],a301_0x3cc2d9[_0x291670(0x216)]);a301_0x26fdcc(_0x4ef06a)&&!a301_0x26fdcc(_0x204eeb)&&(_0x204eeb=0x0);var _0x13e445=this[_0x291670(0x214)];_0x13e445[_0x291670(0x200)]=this[_0x291670(0x206)]instanceof a301_0x115ac0?a301_0x37cd01[_0x291670(0x1fb)]:a301_0x2126da['MaterialSupport'][_0x291670(0x202)][_0x291670(0x200)],_0x13e445[_0x291670(0x1fa)]=_0xba6dfb['position'][_0x291670(0x1ea)](a301_0x1ee2b6[_0x291670(0x219)],_0x13e445['center']),_0x13e445[_0x291670(0x1f7)]=_0x23d1ac[_0x291670(0x1f7)][_0x291670(0x1ea)](a301_0x1ee2b6[_0x291670(0x219)],_0x13e445['semiMajorAxis']),_0x13e445[_0x291670(0x1e2)]=_0x23d1ac[_0x291670(0x1e2)][_0x291670(0x1ea)](a301_0x1ee2b6[_0x291670(0x219)],_0x13e445['semiMinorAxis']),_0x13e445[_0x291670(0x1ec)]=a301_0x1c0156[_0x291670(0x1f2)](_0x23d1ac[_0x291670(0x1ec)],a301_0x1ee2b6[_0x291670(0x219)]),_0x13e445['granularity']=a301_0x1c0156[_0x291670(0x1f2)](_0x23d1ac[_0x291670(0x20a)],a301_0x1ee2b6[_0x291670(0x219)]),_0x13e445[_0x291670(0x203)]=a301_0x1c0156[_0x291670(0x1f2)](_0x23d1ac[_0x291670(0x203)],a301_0x1ee2b6[_0x291670(0x219)]),_0x13e445[_0x291670(0x1e6)]=a301_0x1c0156[_0x291670(0x1f2)](_0x23d1ac[_0x291670(0x1e6)],a301_0x1ee2b6['MINIMUM_VALUE']),_0x13e445[_0x291670(0x1ed)]=a301_0x72c69a[_0x291670(0x1e7)](_0x204eeb,_0x217a03,_0x4ef06a,_0x580a19),_0x13e445[_0x291670(0x1da)]=a301_0x72c69a['getGeometryHeight'](_0x204eeb,_0x217a03),_0x4ef06a=a301_0x72c69a[_0x291670(0x213)](_0x4ef06a,_0x580a19),_0x4ef06a===a301_0x72c69a[_0x291670(0x21f)]&&(_0x4ef06a=a301_0x5306e7[_0x291670(0x217)](a301_0x539fdb[_0x291670(0x1fe)](_0x13e445,scratchRectangle))[_0x291670(0x1ef)]),_0x13e445[_0x291670(0x1f1)]=_0x4ef06a;},EllipseGeometryUpdater[a301_0x106aee(0x1e3)]=DynamicEllipseGeometryUpdater;function DynamicEllipseGeometryUpdater(_0x162bb2,_0x2e2e74,_0x53047f){var _0x593ea8=a301_0x106aee;a301_0x3070a9[_0x593ea8(0x1f8)](this,_0x162bb2,_0x2e2e74,_0x53047f);}function a301_0x4995(_0x2761bd,_0x22f318){var _0x29e3aa=a301_0x29e3();return a301_0x4995=function(_0x499553,_0x3f2a7e){_0x499553=_0x499553-0x1d7;var _0x4b0aab=_0x29e3aa[_0x499553];return _0x4b0aab;},a301_0x4995(_0x2761bd,_0x22f318);}a301_0x26fdcc(Object[a301_0x106aee(0x21b)])&&(DynamicEllipseGeometryUpdater['prototype']=Object[a301_0x106aee(0x21b)](a301_0x3070a9['prototype']),DynamicEllipseGeometryUpdater[a301_0x106aee(0x20b)][a301_0x106aee(0x20c)]=DynamicEllipseGeometryUpdater);DynamicEllipseGeometryUpdater[a301_0x106aee(0x20b)][a301_0x106aee(0x211)]=function(_0x180e8a,_0x6fbcc7,_0xb5b190){var _0x1a11ee=a301_0x106aee,_0x52941=this[_0x1a11ee(0x214)];return!a301_0x26fdcc(_0x52941[_0x1a11ee(0x1fa)])||!a301_0x26fdcc(_0x52941['semiMajorAxis'])||!a301_0x26fdcc(_0x52941[_0x1a11ee(0x1e2)])||a301_0x3070a9[_0x1a11ee(0x20b)][_0x1a11ee(0x211)]['call'](this,_0x180e8a,_0x6fbcc7,_0xb5b190);},DynamicEllipseGeometryUpdater[a301_0x106aee(0x20b)][a301_0x106aee(0x1dd)]=function(_0x557e8e,_0x263060,_0x25372b){var _0x3f6179=a301_0x106aee,_0x20233e=this[_0x3f6179(0x214)],_0xaf3002=a301_0x1c0156['getValueOrUndefined'](_0x263060[_0x3f6179(0x1da)],_0x25372b),_0x32a149=a301_0x1c0156[_0x3f6179(0x1ee)](_0x263060[_0x3f6179(0x1db)],_0x25372b,a301_0x3cc2d9['NONE']),_0x29c7d5=a301_0x1c0156['getValueOrUndefined'](_0x263060[_0x3f6179(0x1f1)],_0x25372b),_0x5319cf=a301_0x1c0156[_0x3f6179(0x1ee)](_0x263060[_0x3f6179(0x221)],_0x25372b,a301_0x3cc2d9[_0x3f6179(0x216)]);a301_0x26fdcc(_0x29c7d5)&&!a301_0x26fdcc(_0xaf3002)&&(_0xaf3002=0x0),_0x20233e['center']=a301_0x1c0156[_0x3f6179(0x1f2)](_0x557e8e[_0x3f6179(0x21c)],_0x25372b,_0x20233e[_0x3f6179(0x1fa)]),_0x20233e['semiMajorAxis']=a301_0x1c0156[_0x3f6179(0x1f2)](_0x263060[_0x3f6179(0x1f7)],_0x25372b),_0x20233e[_0x3f6179(0x1e2)]=a301_0x1c0156[_0x3f6179(0x1f2)](_0x263060[_0x3f6179(0x1e2)],_0x25372b),_0x20233e[_0x3f6179(0x1ec)]=a301_0x1c0156[_0x3f6179(0x1f2)](_0x263060['rotation'],_0x25372b),_0x20233e[_0x3f6179(0x20a)]=a301_0x1c0156[_0x3f6179(0x1f2)](_0x263060[_0x3f6179(0x20a)],_0x25372b),_0x20233e['stRotation']=a301_0x1c0156[_0x3f6179(0x1f2)](_0x263060['stRotation'],_0x25372b),_0x20233e[_0x3f6179(0x1e6)]=a301_0x1c0156[_0x3f6179(0x1f2)](_0x263060[_0x3f6179(0x1e6)],_0x25372b),_0x20233e[_0x3f6179(0x1ed)]=a301_0x72c69a['computeGeometryOffsetAttribute'](_0xaf3002,_0x32a149,_0x29c7d5,_0x5319cf),_0x20233e[_0x3f6179(0x1da)]=a301_0x72c69a[_0x3f6179(0x1df)](_0xaf3002,_0x32a149),_0x29c7d5=a301_0x72c69a[_0x3f6179(0x213)](_0x29c7d5,_0x5319cf),_0x29c7d5===a301_0x72c69a[_0x3f6179(0x21f)]&&(_0x29c7d5=a301_0x5306e7['getMinimumMaximumHeights'](a301_0x539fdb[_0x3f6179(0x1fe)](_0x20233e,scratchRectangle))[_0x3f6179(0x1ef)]),_0x20233e['extrudedHeight']=_0x29c7d5;};export default EllipseGeometryUpdater;