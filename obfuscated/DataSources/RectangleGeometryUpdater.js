var a351_0x330a1a=a351_0x917b;(function(_0x5db965,_0x4441de){var _0x3f4786=a351_0x917b,_0xe69610=_0x5db965();while(!![]){try{var _0x3222e6=-parseInt(_0x3f4786(0x1dc))/0x1+parseInt(_0x3f4786(0x1b0))/0x2+parseInt(_0x3f4786(0x1aa))/0x3*(parseInt(_0x3f4786(0x1cd))/0x4)+-parseInt(_0x3f4786(0x1d7))/0x5+-parseInt(_0x3f4786(0x1cb))/0x6*(parseInt(_0x3f4786(0x1ad))/0x7)+parseInt(_0x3f4786(0x1a7))/0x8+parseInt(_0x3f4786(0x1db))/0x9;if(_0x3222e6===_0x4441de)break;else _0xe69610['push'](_0xe69610['shift']());}catch(_0x32475f){_0xe69610['push'](_0xe69610['shift']());}}}(a351_0x53c0,0xb6fa0));import a351_0x558b13 from'../Core/ApproximateTerrainHeights.js';import a351_0x481b39 from'../Core/Cartesian3.js';import a351_0x5516d3 from'../Core/Cartographic.js';import a351_0x3df385 from'../Core/Check.js';import a351_0xb3b1c from'../Core/Color.js';import a351_0x159469 from'../Core/ColorGeometryInstanceAttribute.js';function a351_0x53c0(){var _0x4acaf5=['coordinates','fromColor','_entity','constructor','getValue','5464565ZTHPEw','_onEntityPropertyChanged','fromDistanceDisplayCondition','_outlineEnabled','14843358wTqplN','1123245wLKBNW','fromCartesian3','rotation','extrudedHeightReference','_setStaticOptions','getGeometryExtrudedHeight','height','offset','center','computeRectangle','_options','WHITE','getValueOrUndefined','toCartesian','time','_terrainOffsetProperty','zIndex','CLAMP_TO_GROUND','WGS84','11963312GarVDX','offsetAttribute','stRotation','8367jdNBpp','vertexFormat','color','49QmDSNc','_showProperty','_onTerrain','2123884CyPfpB','create','getGeometryHeight','createOutlineGeometryInstance','isShowing','rectangle','createFillGeometryInstance','isAvailable','prototype','call','extrudedHeight','isConstant','MINIMUM_VALUE','This\x20instance\x20does\x20not\x20represent\x20an\x20outlined\x20geometry.','_setOptions','defined','getMinimumMaximumHeights','granularity','VERTEX_FORMAT','_materialProperty','heightReference','_showOutlineProperty','NONE','_isHidden','DynamicGeometryUpdater','getValueOrDefault','_computeCenter','1080438bGBSOP','minimumTerrainHeight','28sDGhrO','_outlineColorProperty','ZERO','computeGeometryOffsetAttribute','_fillEnabled'];a351_0x53c0=function(){return _0x4acaf5;};return a351_0x53c0();}import a351_0x2c4a18 from'../Core/defined.js';import a351_0x349fa4 from'../Core/DeveloperError.js';import a351_0x1d0018 from'../Core/DistanceDisplayConditionGeometryInstanceAttribute.js';function a351_0x917b(_0x3e30c6,_0x4b3785){var _0x53c046=a351_0x53c0();return a351_0x917b=function(_0x917b82,_0x40f1f4){_0x917b82=_0x917b82-0x1a5;var _0x4d3441=_0x53c046[_0x917b82];return _0x4d3441;},a351_0x917b(_0x3e30c6,_0x4b3785);}import a351_0x5744e7 from'../Core/Ellipsoid.js';import a351_0x486e39 from'../Core/GeometryInstance.js';import a351_0x27dcba from'../Core/Iso8601.js';import a351_0x540a1c from'../Core/OffsetGeometryInstanceAttribute.js';import a351_0x35f243 from'../Core/Rectangle.js';import a351_0x38b9ad from'../Core/RectangleGeometry.js';import a351_0x4d1bbc from'../Core/RectangleOutlineGeometry.js';import a351_0x4d8899 from'../Core/ShowGeometryInstanceAttribute.js';import a351_0x2115af from'../Scene/HeightReference.js';import a351_0x3bdbb4 from'../Scene/MaterialAppearance.js';import a351_0x9a3d48 from'../Scene/PerInstanceColorAppearance.js';import a351_0x37079e from'./ColorMaterialProperty.js';import a351_0x3b938b from'./DynamicGeometryUpdater.js';import a351_0x48ad28 from'./GeometryUpdater.js';import a351_0x116a03 from'./GroundGeometryUpdater.js';import a351_0x515d79 from'./Property.js';var scratchColor=new a351_0xb3b1c(),defaultOffset=a351_0x481b39[a351_0x330a1a(0x1cf)],offsetScratch=new a351_0x481b39(),scratchRectangle=new a351_0x35f243(),scratchCenterRect=new a351_0x35f243(),scratchCarto=new a351_0x5516d3();function RectangleGeometryOptions(_0x5b1adf){var _0x23d335=a351_0x330a1a;this['id']=_0x5b1adf,this[_0x23d335(0x1ab)]=undefined,this['rectangle']=undefined,this[_0x23d335(0x1e2)]=undefined,this[_0x23d335(0x1ba)]=undefined,this[_0x23d335(0x1c1)]=undefined,this[_0x23d335(0x1a9)]=undefined,this[_0x23d335(0x1de)]=undefined,this[_0x23d335(0x1a8)]=undefined;}function RectangleGeometryUpdater(_0xa7d80d,_0xa6beb){var _0x59eb69=a351_0x330a1a;a351_0x116a03['call'](this,{'entity':_0xa7d80d,'scene':_0xa6beb,'geometryOptions':new RectangleGeometryOptions(_0xa7d80d),'geometryPropertyName':_0x59eb69(0x1b5),'observedPropertyNames':['availability',_0x59eb69(0x1b5)]}),this[_0x59eb69(0x1d8)](_0xa7d80d,_0x59eb69(0x1b5),_0xa7d80d[_0x59eb69(0x1b5)],undefined);}a351_0x2c4a18(Object['create'])&&(RectangleGeometryUpdater['prototype']=Object['create'](a351_0x116a03[a351_0x330a1a(0x1b8)]),RectangleGeometryUpdater[a351_0x330a1a(0x1b8)][a351_0x330a1a(0x1d5)]=RectangleGeometryUpdater);RectangleGeometryUpdater[a351_0x330a1a(0x1b8)][a351_0x330a1a(0x1b6)]=function(_0x1684d8){var _0x24ce9f=a351_0x330a1a;a351_0x3df385[_0x24ce9f(0x1bf)](_0x24ce9f(0x1ea),_0x1684d8);if(!this[_0x24ce9f(0x1d1)])throw new a351_0x349fa4('This\x20instance\x20does\x20not\x20represent\x20a\x20filled\x20geometry.');var _0x9737a6=this['_entity'],_0x6df48d=_0x9737a6['isAvailable'](_0x1684d8),_0x4ae313={'show':new a351_0x4d8899(_0x6df48d&&_0x9737a6[_0x24ce9f(0x1b4)]&&this[_0x24ce9f(0x1ae)]['getValue'](_0x1684d8)&&this['_fillProperty'][_0x24ce9f(0x1d6)](_0x1684d8)),'distanceDisplayCondition':a351_0x1d0018[_0x24ce9f(0x1d9)](this['_distanceDisplayConditionProperty']['getValue'](_0x1684d8)),'offset':undefined,'color':undefined};if(this[_0x24ce9f(0x1c3)]instanceof a351_0x37079e){var _0xeefec4;a351_0x2c4a18(this[_0x24ce9f(0x1c3)][_0x24ce9f(0x1ac)])&&(this[_0x24ce9f(0x1c3)][_0x24ce9f(0x1ac)][_0x24ce9f(0x1bb)]||_0x6df48d)&&(_0xeefec4=this['_materialProperty']['color']['getValue'](_0x1684d8,scratchColor)),!a351_0x2c4a18(_0xeefec4)&&(_0xeefec4=a351_0xb3b1c[_0x24ce9f(0x1e7)]),_0x4ae313[_0x24ce9f(0x1ac)]=a351_0x159469[_0x24ce9f(0x1d3)](_0xeefec4);}return a351_0x2c4a18(this[_0x24ce9f(0x1e6)][_0x24ce9f(0x1a8)])&&(_0x4ae313[_0x24ce9f(0x1e3)]=a351_0x540a1c[_0x24ce9f(0x1dd)](a351_0x515d79[_0x24ce9f(0x1c9)](this[_0x24ce9f(0x1eb)],_0x1684d8,defaultOffset,offsetScratch))),new a351_0x486e39({'id':_0x9737a6,'geometry':new a351_0x38b9ad(this[_0x24ce9f(0x1e6)]),'attributes':_0x4ae313});},RectangleGeometryUpdater[a351_0x330a1a(0x1b8)][a351_0x330a1a(0x1b3)]=function(_0x43bff7){var _0x36c430=a351_0x330a1a;a351_0x3df385[_0x36c430(0x1bf)](_0x36c430(0x1ea),_0x43bff7);if(!this[_0x36c430(0x1da)])throw new a351_0x349fa4(_0x36c430(0x1bd));var _0x1ca455=this[_0x36c430(0x1d4)],_0x4cd788=_0x1ca455[_0x36c430(0x1b7)](_0x43bff7),_0x5d8c44=a351_0x515d79[_0x36c430(0x1c9)](this[_0x36c430(0x1ce)],_0x43bff7,a351_0xb3b1c['BLACK'],scratchColor),_0x4637a2=this['_distanceDisplayConditionProperty'][_0x36c430(0x1d6)](_0x43bff7),_0x375f83={'show':new a351_0x4d8899(_0x4cd788&&_0x1ca455[_0x36c430(0x1b4)]&&this[_0x36c430(0x1ae)]['getValue'](_0x43bff7)&&this[_0x36c430(0x1c5)][_0x36c430(0x1d6)](_0x43bff7)),'color':a351_0x159469[_0x36c430(0x1d3)](_0x5d8c44),'distanceDisplayCondition':a351_0x1d0018['fromDistanceDisplayCondition'](_0x4637a2),'offset':undefined};return a351_0x2c4a18(this[_0x36c430(0x1e6)][_0x36c430(0x1a8)])&&(_0x375f83[_0x36c430(0x1e3)]=a351_0x540a1c['fromCartesian3'](a351_0x515d79[_0x36c430(0x1c9)](this[_0x36c430(0x1eb)],_0x43bff7,defaultOffset,offsetScratch))),new a351_0x486e39({'id':_0x1ca455,'geometry':new a351_0x4d1bbc(this[_0x36c430(0x1e6)]),'attributes':_0x375f83});},RectangleGeometryUpdater[a351_0x330a1a(0x1b8)][a351_0x330a1a(0x1ca)]=function(_0x4cd019,_0x482070){var _0x39fb37=a351_0x330a1a,_0x1b7138=a351_0x515d79[_0x39fb37(0x1e8)](this[_0x39fb37(0x1d4)][_0x39fb37(0x1b5)][_0x39fb37(0x1d2)],_0x4cd019,scratchCenterRect);if(!a351_0x2c4a18(_0x1b7138))return;var _0x4aff9b=a351_0x35f243[_0x39fb37(0x1e4)](_0x1b7138,scratchCarto);return a351_0x5516d3[_0x39fb37(0x1e9)](_0x4aff9b,a351_0x5744e7[_0x39fb37(0x1a6)],_0x482070);},RectangleGeometryUpdater[a351_0x330a1a(0x1b8)]['_isHidden']=function(_0x272dd9,_0x409f0f){var _0x31fd50=a351_0x330a1a;return!a351_0x2c4a18(_0x409f0f['coordinates'])||a351_0x48ad28[_0x31fd50(0x1b8)][_0x31fd50(0x1c7)][_0x31fd50(0x1b9)](this,_0x272dd9,_0x409f0f);},RectangleGeometryUpdater[a351_0x330a1a(0x1b8)]['_isDynamic']=function(_0x360dd0,_0x3f76c8){var _0x5d5f99=a351_0x330a1a;return!_0x3f76c8['coordinates']['isConstant']||!a351_0x515d79[_0x5d5f99(0x1bb)](_0x3f76c8[_0x5d5f99(0x1e2)])||!a351_0x515d79['isConstant'](_0x3f76c8[_0x5d5f99(0x1ba)])||!a351_0x515d79[_0x5d5f99(0x1bb)](_0x3f76c8[_0x5d5f99(0x1c1)])||!a351_0x515d79[_0x5d5f99(0x1bb)](_0x3f76c8[_0x5d5f99(0x1a9)])||!a351_0x515d79[_0x5d5f99(0x1bb)](_0x3f76c8[_0x5d5f99(0x1de)])||!a351_0x515d79[_0x5d5f99(0x1bb)](_0x3f76c8['outlineWidth'])||!a351_0x515d79[_0x5d5f99(0x1bb)](_0x3f76c8[_0x5d5f99(0x1ec)])||this[_0x5d5f99(0x1af)]&&!a351_0x515d79['isConstant'](this[_0x5d5f99(0x1c3)])&&!(this[_0x5d5f99(0x1c3)]instanceof a351_0x37079e);},RectangleGeometryUpdater[a351_0x330a1a(0x1b8)][a351_0x330a1a(0x1e0)]=function(_0x332fcb,_0x540984){var _0xe75bec=a351_0x330a1a,_0x4a0176=this[_0xe75bec(0x1c3)]instanceof a351_0x37079e,_0x2cc22c=a351_0x515d79['getValueOrUndefined'](_0x540984[_0xe75bec(0x1e2)],a351_0x27dcba[_0xe75bec(0x1bc)]),_0x3f6e4c=a351_0x515d79[_0xe75bec(0x1c9)](_0x540984[_0xe75bec(0x1c4)],a351_0x27dcba[_0xe75bec(0x1bc)],a351_0x2115af[_0xe75bec(0x1c6)]),_0x4a2dbf=a351_0x515d79['getValueOrUndefined'](_0x540984[_0xe75bec(0x1ba)],a351_0x27dcba[_0xe75bec(0x1bc)]),_0x10a308=a351_0x515d79[_0xe75bec(0x1c9)](_0x540984[_0xe75bec(0x1df)],a351_0x27dcba[_0xe75bec(0x1bc)],a351_0x2115af[_0xe75bec(0x1c6)]);a351_0x2c4a18(_0x4a2dbf)&&!a351_0x2c4a18(_0x2cc22c)&&(_0x2cc22c=0x0);var _0x3476e5=this[_0xe75bec(0x1e6)];_0x3476e5[_0xe75bec(0x1ab)]=_0x4a0176?a351_0x9a3d48[_0xe75bec(0x1c2)]:a351_0x3bdbb4['MaterialSupport']['TEXTURED']['vertexFormat'],_0x3476e5[_0xe75bec(0x1b5)]=_0x540984[_0xe75bec(0x1d2)]['getValue'](a351_0x27dcba[_0xe75bec(0x1bc)],_0x3476e5[_0xe75bec(0x1b5)]),_0x3476e5[_0xe75bec(0x1c1)]=a351_0x515d79[_0xe75bec(0x1e8)](_0x540984[_0xe75bec(0x1c1)],a351_0x27dcba['MINIMUM_VALUE']),_0x3476e5[_0xe75bec(0x1a9)]=a351_0x515d79['getValueOrUndefined'](_0x540984[_0xe75bec(0x1a9)],a351_0x27dcba[_0xe75bec(0x1bc)]),_0x3476e5['rotation']=a351_0x515d79[_0xe75bec(0x1e8)](_0x540984[_0xe75bec(0x1de)],a351_0x27dcba['MINIMUM_VALUE']),_0x3476e5['offsetAttribute']=a351_0x116a03[_0xe75bec(0x1d0)](_0x2cc22c,_0x3f6e4c,_0x4a2dbf,_0x10a308),_0x3476e5[_0xe75bec(0x1e2)]=a351_0x116a03[_0xe75bec(0x1b2)](_0x2cc22c,_0x3f6e4c),_0x4a2dbf=a351_0x116a03['getGeometryExtrudedHeight'](_0x4a2dbf,_0x10a308),_0x4a2dbf===a351_0x116a03[_0xe75bec(0x1a5)]&&(_0x4a2dbf=a351_0x558b13[_0xe75bec(0x1c0)](a351_0x38b9ad[_0xe75bec(0x1e5)](_0x3476e5,scratchRectangle))[_0xe75bec(0x1cc)]),_0x3476e5[_0xe75bec(0x1ba)]=_0x4a2dbf;},RectangleGeometryUpdater[a351_0x330a1a(0x1c8)]=DynamicRectangleGeometryUpdater;function DynamicRectangleGeometryUpdater(_0x59926c,_0x298c6a,_0x2b98d3){var _0x78e7bf=a351_0x330a1a;a351_0x3b938b[_0x78e7bf(0x1b9)](this,_0x59926c,_0x298c6a,_0x2b98d3);}a351_0x2c4a18(Object[a351_0x330a1a(0x1b1)])&&(DynamicRectangleGeometryUpdater['prototype']=Object[a351_0x330a1a(0x1b1)](a351_0x3b938b[a351_0x330a1a(0x1b8)]),DynamicRectangleGeometryUpdater[a351_0x330a1a(0x1b8)][a351_0x330a1a(0x1d5)]=DynamicRectangleGeometryUpdater);DynamicRectangleGeometryUpdater['prototype'][a351_0x330a1a(0x1c7)]=function(_0x34de0d,_0x3dde5f,_0x167db3){var _0x1d841=a351_0x330a1a;return!a351_0x2c4a18(this[_0x1d841(0x1e6)][_0x1d841(0x1b5)])||a351_0x3b938b[_0x1d841(0x1b8)][_0x1d841(0x1c7)]['call'](this,_0x34de0d,_0x3dde5f,_0x167db3);},DynamicRectangleGeometryUpdater[a351_0x330a1a(0x1b8)][a351_0x330a1a(0x1be)]=function(_0x38b5ee,_0x1a7049,_0x4b9426){var _0xdd5112=a351_0x330a1a,_0x4fc5df=this[_0xdd5112(0x1e6)],_0x2036ad=a351_0x515d79[_0xdd5112(0x1e8)](_0x1a7049[_0xdd5112(0x1e2)],_0x4b9426),_0xc88dba=a351_0x515d79[_0xdd5112(0x1c9)](_0x1a7049['heightReference'],_0x4b9426,a351_0x2115af[_0xdd5112(0x1c6)]),_0x19d8f6=a351_0x515d79[_0xdd5112(0x1e8)](_0x1a7049['extrudedHeight'],_0x4b9426),_0x3ec1ab=a351_0x515d79[_0xdd5112(0x1c9)](_0x1a7049['extrudedHeightReference'],_0x4b9426,a351_0x2115af['NONE']);a351_0x2c4a18(_0x19d8f6)&&!a351_0x2c4a18(_0x2036ad)&&(_0x2036ad=0x0),_0x4fc5df[_0xdd5112(0x1b5)]=a351_0x515d79[_0xdd5112(0x1e8)](_0x1a7049[_0xdd5112(0x1d2)],_0x4b9426,_0x4fc5df[_0xdd5112(0x1b5)]),_0x4fc5df[_0xdd5112(0x1c1)]=a351_0x515d79[_0xdd5112(0x1e8)](_0x1a7049[_0xdd5112(0x1c1)],_0x4b9426),_0x4fc5df[_0xdd5112(0x1a9)]=a351_0x515d79['getValueOrUndefined'](_0x1a7049[_0xdd5112(0x1a9)],_0x4b9426),_0x4fc5df['rotation']=a351_0x515d79[_0xdd5112(0x1e8)](_0x1a7049[_0xdd5112(0x1de)],_0x4b9426),_0x4fc5df['offsetAttribute']=a351_0x116a03['computeGeometryOffsetAttribute'](_0x2036ad,_0xc88dba,_0x19d8f6,_0x3ec1ab),_0x4fc5df[_0xdd5112(0x1e2)]=a351_0x116a03[_0xdd5112(0x1b2)](_0x2036ad,_0xc88dba),_0x19d8f6=a351_0x116a03[_0xdd5112(0x1e1)](_0x19d8f6,_0x3ec1ab),_0x19d8f6===a351_0x116a03[_0xdd5112(0x1a5)]&&(_0x19d8f6=a351_0x558b13['getMinimumMaximumHeights'](a351_0x38b9ad['computeRectangle'](_0x4fc5df,scratchRectangle))['minimumTerrainHeight']),_0x4fc5df[_0xdd5112(0x1ba)]=_0x19d8f6;};export default RectangleGeometryUpdater;