function a679_0x3774(){var _0x37f827=['then','get','promise','pick','defaultView','Ray\x20intersections\x20are\x20only\x20supported\x20in\x203D\x20mode.','defined','slice','updateFrustum','top','add','sampleHeightSupported','mostOrthogonalAxis','updateMostDetailedRayPicks','end','origin','transformWindowToDrawingBuffer','renderTranslucentDepthForPick','clampToHeightSupported','transform','camera','pickDepths','bottom','multiplyByScalar','pickTranslucentDepth','pickPosition','PICK','resolve','ready','splice','getPickDepth','resolveFramebuffers','cross','uniformState','2331072BvFZzS','769389uGZarM','viewport','length','postRender','clampToHeight','tilesets','_setTransform','_mostDetailedRayPicks','prototype','updateFrameState','endFrame','fromCartesian','updateAndExecuteCommands','pickPositionWorldCoordinates','toString','max','clone','sampleHeight','ellipsoid','frustum','tilesetPassState','contains','pickFramebuffer','clampToHeightMostDetailed\x20is\x20only\x20supported\x20in\x203D\x20mode.','primitives','256003duwUyr','1721152VmJMnh','defer','map','invertClassification','aspectRatio','destroy','updateEnvironment','windowPosition\x20is\x20undefined.','hasOwnProperty','clampToHeightMostDetailed','show','toCartesian','ray','clearPasses','passState','depth','sampleHeight\x20requires\x20depth\x20texture\x20support.\x20Check\x20sampleHeightSupported.','14512cEDWPe','right','geodeticSurfaceNormalCartographic','computeCullingVolume','434VuqTIb','pickFromRay','object','addEventListener','upWC','drillPick','deferred','cartographicToCartesian','_offCenterFrustum','position','drawingBufferWidth','update','opaqueFrustumNearOffset','mode','3582756quPSLO','begin','primitive','direction','environmentState','cullingVolume','negate','clampToHeightMostDetailed\x20requires\x20depth\x20texture\x20support.\x20Check\x20clampToHeightSupported.','18053946onQeVS','getDepth','frustumCommandsList','far','5GZaYUP','getPixelDimensions','disableThisFrame','passes','exclude','fov','getPoint','height','indexOf','positions','drawingBufferToWgs84Coordinates','SCENE2D','view','fovy','mapProjection','_pickPositionCache','requestRender','pickFromRayMostDetailed','all','toValue','_pickPositionCacheDirty','globe','MOST_DETAILED_PRELOAD','directionWC','drawingBufferHeight','clampToHeight\x20requires\x20depth\x20texture\x20support.\x20Check\x20clampToHeightSupported.','fromElements','sampleHeightMostDetailed','width','MOST_DETAILED_PICK','frameState','jobScheduler','getGeometryInstanceAttributes','_defaultMaxTerrainHeight','_pickOffscreenView','positionWC','offscreen','reject','Picking\x20from\x20the\x20depth\x20buffer\x20is\x20not\x20supported.\x20Check\x20pickPositionSupported.','sampleHeightMostDetailed\x20is\x20only\x20supported\x20in\x203D\x20mode.','depthTexture','push','context','near','drillPickFromRay','tan','pickDepthFramebuffer','SCENE3D','left'];a679_0x3774=function(){return _0x37f827;};return a679_0x3774();}var a679_0x29547a=a679_0x47f4;(function(_0x1be405,_0x13d5b0){var _0xf6e4a0=a679_0x47f4,_0x15241d=_0x1be405();while(!![]){try{var _0x55fe53=parseInt(_0xf6e4a0(0x197))/0x1+parseInt(_0xf6e4a0(0x198))/0x2+parseInt(_0xf6e4a0(0x17e))/0x3+parseInt(_0xf6e4a0(0x17d))/0x4+parseInt(_0xf6e4a0(0x1c7))/0x5*(parseInt(_0xf6e4a0(0x1bb))/0x6)+-parseInt(_0xf6e4a0(0x1ad))/0x7*(parseInt(_0xf6e4a0(0x1a9))/0x8)+-parseInt(_0xf6e4a0(0x1c3))/0x9;if(_0x55fe53===_0x13d5b0)break;else _0x15241d['push'](_0x15241d['shift']());}catch(_0x330485){_0x15241d['push'](_0x15241d['shift']());}}}(a679_0x3774,0x6a12a));import a679_0x4fc237 from'../Core/ApproximateTerrainHeights.js';import a679_0x1974a2 from'../Core/BoundingRectangle.js';import a679_0x59b5f3 from'../Core/Cartesian2.js';import a679_0x52c906 from'../Core/Cartesian3.js';import a679_0x176eaa from'../Core/Cartographic.js';import a679_0x4c6011 from'../Core/Check.js';import a679_0xb62423 from'../Core/Color.js';import a679_0x1ea251 from'../Core/defaultValue.js';import a679_0x50043a from'../Core/defined.js';import a679_0x4f8e03 from'../Core/DeveloperError.js';import a679_0x10c441 from'../Core/Matrix4.js';import a679_0x385b0b from'../Core/OrthographicFrustum.js';import a679_0xba9b3a from'../Core/OrthographicOffCenterFrustum.js';import a679_0xd551d from'../Core/PerspectiveFrustum.js';import a679_0x34d6f3 from'../Core/PerspectiveOffCenterFrustum.js';import a679_0x109c3d from'../Core/Ray.js';import a679_0xd0eaa5 from'../Core/ShowGeometryInstanceAttribute.js';import a679_0x270d36 from'../ThirdParty/when.js';import a679_0x23ad31 from'./Camera.js';import a679_0x48c322 from'./Cesium3DTileFeature.js';import a679_0x1c7166 from'./Cesium3DTilePass.js';import a679_0x549def from'./Cesium3DTilePassState.js';import a679_0x28cec7 from'./PickDepth.js';import a679_0x5c38e7 from'./PrimitiveCollection.js';import a679_0x2dc089 from'./SceneMode.js';import a679_0x5efa11 from'./SceneTransforms.js';import a679_0x180903 from'./View.js';var offscreenDefaultWidth=0.1,mostDetailedPreloadTilesetPassState=new a679_0x549def({'pass':a679_0x1c7166[a679_0x29547a(0x1dd)]}),mostDetailedPickTilesetPassState=new a679_0x549def({'pass':a679_0x1c7166[a679_0x29547a(0x1e4)]}),pickTilesetPassState=new a679_0x549def({'pass':a679_0x1c7166[a679_0x29547a(0x175)]});function Picking(_0x565080){var _0x31f16a=a679_0x29547a;this['_mostDetailedRayPicks']=[],this['pickRenderStateCache']={},this['_pickPositionCache']={},this['_pickPositionCacheDirty']=![];var _0x15f380=new a679_0x1974a2(0x0,0x0,0x1,0x1),_0x4cc346=new a679_0x23ad31(_0x565080);_0x4cc346[_0x31f16a(0x191)]=new a679_0x385b0b({'width':offscreenDefaultWidth,'aspectRatio':0x1,'near':0.1}),this['_pickOffscreenView']=new a679_0x180903(_0x565080,_0x4cc346,_0x15f380);}Picking[a679_0x29547a(0x186)][a679_0x29547a(0x1b8)]=function(){var _0x3f0e05=a679_0x29547a;this[_0x3f0e05(0x1db)]=!![];},Picking[a679_0x29547a(0x186)]['getPickDepth']=function(_0x11e731,_0x3198c9){var _0x937201=a679_0x29547a,_0xf5a02a=_0x11e731[_0x937201(0x1d3)][_0x937201(0x170)],_0xff3bd7=_0xf5a02a[_0x3198c9];return!a679_0x50043a(_0xff3bd7)&&(_0xff3bd7=new a679_0x28cec7(),_0xf5a02a[_0x3198c9]=_0xff3bd7),_0xff3bd7;};var scratchOrthoPickingFrustum=new a679_0xba9b3a(),scratchOrthoOrigin=new a679_0x52c906(),scratchOrthoDirection=new a679_0x52c906(),scratchOrthoPixelSize=new a679_0x59b5f3(),scratchOrthoPickVolumeMatrix4=new a679_0x10c441();function getPickOrthographicCullingVolume(_0x1d01c5,_0x1da739,_0x101e7e,_0x51e2da,_0x5e22ab){var _0x41cdab=a679_0x29547a,_0x11189a=_0x1d01c5['camera'],_0x259283=_0x11189a[_0x41cdab(0x191)];a679_0x50043a(_0x259283[_0x41cdab(0x1b5)])&&(_0x259283=_0x259283['_offCenterFrustum']);var _0xab1845=0x2*(_0x1da739['x']-_0x5e22ab['x'])/_0x5e22ab[_0x41cdab(0x1e3)]-0x1;_0xab1845*=(_0x259283['right']-_0x259283['left'])*0.5;var _0x3f4dfa=0x2*(_0x5e22ab[_0x41cdab(0x1ce)]-_0x1da739['y']-_0x5e22ab['y'])/_0x5e22ab['height']-0x1;_0x3f4dfa*=(_0x259283[_0x41cdab(0x164)]-_0x259283[_0x41cdab(0x171)])*0.5;var _0x5c375f=a679_0x10c441['clone'](_0x11189a[_0x41cdab(0x16e)],scratchOrthoPickVolumeMatrix4);_0x11189a['_setTransform'](a679_0x10c441['IDENTITY']);var _0x2d2453=a679_0x52c906['clone'](_0x11189a[_0x41cdab(0x1b6)],scratchOrthoOrigin);a679_0x52c906[_0x41cdab(0x172)](_0x11189a['right'],_0xab1845,scratchOrthoDirection),a679_0x52c906[_0x41cdab(0x165)](scratchOrthoDirection,_0x2d2453,_0x2d2453),a679_0x52c906['multiplyByScalar'](_0x11189a['up'],_0x3f4dfa,scratchOrthoDirection),a679_0x52c906[_0x41cdab(0x165)](scratchOrthoDirection,_0x2d2453,_0x2d2453),_0x11189a[_0x41cdab(0x184)](_0x5c375f);_0x1d01c5[_0x41cdab(0x1ba)]===a679_0x2dc089[_0x41cdab(0x1d2)]&&a679_0x52c906['fromElements'](_0x2d2453['z'],_0x2d2453['x'],_0x2d2453['y'],_0x2d2453);var _0x3dc9b7=_0x259283[_0x41cdab(0x1c8)](_0x5e22ab[_0x41cdab(0x1e3)],_0x5e22ab['height'],0x1,0x1,scratchOrthoPixelSize),_0x22bede=scratchOrthoPickingFrustum;return _0x22bede['right']=_0x3dc9b7['x']*0.5,_0x22bede[_0x41cdab(0x15a)]=-_0x22bede[_0x41cdab(0x1aa)],_0x22bede[_0x41cdab(0x164)]=_0x3dc9b7['y']*0.5,_0x22bede[_0x41cdab(0x171)]=-_0x22bede[_0x41cdab(0x164)],_0x22bede[_0x41cdab(0x155)]=_0x259283[_0x41cdab(0x155)],_0x22bede[_0x41cdab(0x1c6)]=_0x259283['far'],_0x22bede[_0x41cdab(0x1ac)](_0x2d2453,_0x11189a[_0x41cdab(0x1de)],_0x11189a[_0x41cdab(0x1b1)]);}var scratchPerspPickingFrustum=new a679_0x34d6f3(),scratchPerspPixelSize=new a679_0x59b5f3();function getPickPerspectiveCullingVolume(_0x507ff2,_0xb0b81c,_0x313e54,_0x4ec946,_0x46a6cf){var _0x24d349=a679_0x29547a,_0x1faa02=_0x507ff2[_0x24d349(0x16f)],_0x1076b4=_0x1faa02['frustum'],_0x24b882=_0x1076b4[_0x24d349(0x155)],_0xdb32f=Math[_0x24d349(0x157)](_0x1076b4[_0x24d349(0x1d4)]*0.5),_0x24cadf=_0x1076b4[_0x24d349(0x19c)]*_0xdb32f,_0x59c519=0x2*(_0xb0b81c['x']-_0x46a6cf['x'])/_0x46a6cf[_0x24d349(0x1e3)]-0x1,_0x2ff812=0x2*(_0x46a6cf[_0x24d349(0x1ce)]-_0xb0b81c['y']-_0x46a6cf['y'])/_0x46a6cf['height']-0x1,_0x11f9bd=_0x59c519*_0x24b882*_0x24cadf,_0x2b228b=_0x2ff812*_0x24b882*_0xdb32f,_0x4e49a3=_0x1076b4[_0x24d349(0x1c8)](_0x46a6cf[_0x24d349(0x1e3)],_0x46a6cf[_0x24d349(0x1ce)],0x1,0x1,scratchPerspPixelSize),_0x290859=_0x4e49a3['x']*_0x313e54*0.5,_0x2f21d6=_0x4e49a3['y']*_0x4ec946*0.5,_0x5f147a=scratchPerspPickingFrustum;return _0x5f147a[_0x24d349(0x164)]=_0x2b228b+_0x2f21d6,_0x5f147a['bottom']=_0x2b228b-_0x2f21d6,_0x5f147a['right']=_0x11f9bd+_0x290859,_0x5f147a[_0x24d349(0x15a)]=_0x11f9bd-_0x290859,_0x5f147a[_0x24d349(0x155)]=_0x24b882,_0x5f147a['far']=_0x1076b4[_0x24d349(0x1c6)],_0x5f147a[_0x24d349(0x1ac)](_0x1faa02['positionWC'],_0x1faa02[_0x24d349(0x1de)],_0x1faa02[_0x24d349(0x1b1)]);}function getPickCullingVolume(_0x152bb8,_0xf084f7,_0x5b92e5,_0xa7506f,_0x1f0781){var _0x396c71=a679_0x29547a,_0x2b6c9f=_0x152bb8['camera'][_0x396c71(0x191)];if(_0x2b6c9f instanceof a679_0x385b0b||_0x2b6c9f instanceof a679_0xba9b3a)return getPickOrthographicCullingVolume(_0x152bb8,_0xf084f7,_0x5b92e5,_0xa7506f,_0x1f0781);return getPickPerspectiveCullingVolume(_0x152bb8,_0xf084f7,_0x5b92e5,_0xa7506f,_0x1f0781);}var scratchRectangleWidth=0x3,scratchRectangleHeight=0x3,scratchRectangle=new a679_0x1974a2(0x0,0x0,scratchRectangleWidth,scratchRectangleHeight),scratchPosition=new a679_0x59b5f3(),scratchColorZero=new a679_0xb62423(0x0,0x0,0x0,0x0);Picking['prototype']['pick']=function(_0xd55092,_0x179b85,_0x3c33c5,_0x11c253){var _0x31b55e=a679_0x29547a;if(!a679_0x50043a(_0x179b85))throw new a679_0x4f8e03(_0x31b55e(0x19f));scratchRectangleWidth=a679_0x1ea251(_0x3c33c5,0x3),scratchRectangleHeight=a679_0x1ea251(_0x11c253,scratchRectangleWidth);var _0x571db0=_0xd55092['context'],_0x29f3ae=_0x571db0['uniformState'],_0xcaa14b=_0xd55092[_0x31b55e(0x1e5)],_0x3fd8ca=_0xd55092[_0x31b55e(0x15f)];_0xd55092[_0x31b55e(0x1d3)]=_0x3fd8ca;var _0x1c2d20=_0x3fd8ca['viewport'];_0x1c2d20['x']=0x0,_0x1c2d20['y']=0x0,_0x1c2d20[_0x31b55e(0x1e3)]=_0x571db0[_0x31b55e(0x1b7)],_0x1c2d20[_0x31b55e(0x1ce)]=_0x571db0[_0x31b55e(0x1df)];var _0x2c7073=_0x3fd8ca[_0x31b55e(0x1a6)];_0x2c7073['viewport']=a679_0x1974a2[_0x31b55e(0x18e)](_0x1c2d20,_0x2c7073[_0x31b55e(0x17f)]);var _0x24dca4=a679_0x5efa11[_0x31b55e(0x16b)](_0xd55092,_0x179b85,scratchPosition);_0xd55092[_0x31b55e(0x1e6)][_0x31b55e(0x1c9)](),_0xd55092['updateFrameState'](),_0xcaa14b[_0x31b55e(0x1c0)]=getPickCullingVolume(_0xd55092,_0x24dca4,scratchRectangleWidth,scratchRectangleHeight,_0x1c2d20),_0xcaa14b[_0x31b55e(0x19b)]=![],_0xcaa14b[_0x31b55e(0x1ca)][_0x31b55e(0x15e)]=!![],_0xcaa14b[_0x31b55e(0x192)]=pickTilesetPassState,_0x29f3ae[_0x31b55e(0x1b8)](_0xcaa14b),_0xd55092[_0x31b55e(0x19e)](),scratchRectangle['x']=_0x24dca4['x']-(scratchRectangleWidth-0x1)*0.5,scratchRectangle['y']=_0xd55092[_0x31b55e(0x1df)]-_0x24dca4['y']-(scratchRectangleHeight-0x1)*0.5,scratchRectangle[_0x31b55e(0x1e3)]=scratchRectangleWidth,scratchRectangle[_0x31b55e(0x1ce)]=scratchRectangleHeight,_0x2c7073=_0x3fd8ca[_0x31b55e(0x194)][_0x31b55e(0x1bc)](scratchRectangle,_0x3fd8ca[_0x31b55e(0x17f)]),_0xd55092['updateAndExecuteCommands'](_0x2c7073,scratchColorZero),_0xd55092[_0x31b55e(0x17a)](_0x2c7073);var _0x534c6f=_0x3fd8ca['pickFramebuffer']['end'](scratchRectangle);return _0x571db0[_0x31b55e(0x188)](),_0x534c6f;};function renderTranslucentDepthForPick(_0x3f8361,_0x35f4b0){var _0x49a221=a679_0x29547a,_0xcb5d8c=_0x3f8361[_0x49a221(0x154)],_0x12d95d=_0x3f8361[_0x49a221(0x1e5)],_0x19c83f=_0x3f8361[_0x49a221(0x1bf)],_0x52a0b2=_0x3f8361['defaultView'];_0x3f8361[_0x49a221(0x1d3)]=_0x52a0b2;var _0x3165d8=_0x52a0b2[_0x49a221(0x17f)];_0x3165d8['x']=0x0,_0x3165d8['y']=0x0,_0x3165d8[_0x49a221(0x1e3)]=_0xcb5d8c['drawingBufferWidth'],_0x3165d8[_0x49a221(0x1ce)]=_0xcb5d8c[_0x49a221(0x1df)];var _0x1f63c2=_0x52a0b2[_0x49a221(0x1a6)];_0x1f63c2[_0x49a221(0x17f)]=a679_0x1974a2[_0x49a221(0x18e)](_0x3165d8,_0x1f63c2[_0x49a221(0x17f)]),_0x3f8361[_0x49a221(0x1a5)](_0x12d95d[_0x49a221(0x1ca)]),_0x12d95d['passes'][_0x49a221(0x15e)]=!![],_0x12d95d[_0x49a221(0x1ca)][_0x49a221(0x1a7)]=!![],_0x12d95d[_0x49a221(0x1c0)]=getPickCullingVolume(_0x3f8361,_0x35f4b0,0x1,0x1,_0x3165d8),_0x12d95d[_0x49a221(0x192)]=pickTilesetPassState,_0x3f8361['updateEnvironment'](),_0x19c83f[_0x49a221(0x16c)]=!![],_0x1f63c2=_0x52a0b2[_0x49a221(0x158)][_0x49a221(0x1b8)](_0xcb5d8c,_0x35f4b0,_0x3165d8),_0x3f8361[_0x49a221(0x18a)](_0x1f63c2,scratchColorZero),_0x3f8361[_0x49a221(0x17a)](_0x1f63c2),_0xcb5d8c[_0x49a221(0x188)]();}var scratchPerspectiveFrustum=new a679_0xd551d(),scratchPerspectiveOffCenterFrustum=new a679_0x34d6f3(),scratchOrthographicFrustum=new a679_0x385b0b(),scratchOrthographicOffCenterFrustum=new a679_0xba9b3a();Picking[a679_0x29547a(0x186)][a679_0x29547a(0x18b)]=function(_0x31ffd6,_0x33663d,_0x5bb531){var _0x44be48=a679_0x29547a;if(!_0x31ffd6['useDepthPicking'])return undefined;if(!a679_0x50043a(_0x33663d))throw new a679_0x4f8e03(_0x44be48(0x19f));if(!_0x31ffd6[_0x44be48(0x154)][_0x44be48(0x152)])throw new a679_0x4f8e03(_0x44be48(0x150));var _0x35658e=_0x33663d[_0x44be48(0x18c)]();if(this['_pickPositionCacheDirty'])this[_0x44be48(0x1d6)]={},this['_pickPositionCacheDirty']=![];else{if(this[_0x44be48(0x1d6)][_0x44be48(0x1a0)](_0x35658e))return a679_0x52c906['clone'](this[_0x44be48(0x1d6)][_0x35658e],_0x5bb531);}var _0x33e6f4=_0x31ffd6[_0x44be48(0x1e5)],_0x1b01ba=_0x31ffd6[_0x44be48(0x154)],_0x1cba91=_0x1b01ba['uniformState'],_0x4d7c52=_0x31ffd6['defaultView'];_0x31ffd6[_0x44be48(0x1d3)]=_0x4d7c52;var _0x502859=a679_0x5efa11[_0x44be48(0x16b)](_0x31ffd6,_0x33663d,scratchPosition);_0x31ffd6[_0x44be48(0x173)]?renderTranslucentDepthForPick(_0x31ffd6,_0x502859):(_0x31ffd6['updateFrameState'](),_0x1cba91['update'](_0x33e6f4),_0x31ffd6[_0x44be48(0x19e)]());_0x502859['y']=_0x31ffd6[_0x44be48(0x1df)]-_0x502859['y'];var _0x498315=_0x31ffd6[_0x44be48(0x16f)],_0x504873;if(a679_0x50043a(_0x498315[_0x44be48(0x191)][_0x44be48(0x1cc)]))_0x504873=_0x498315['frustum'][_0x44be48(0x18e)](scratchPerspectiveFrustum);else{if(a679_0x50043a(_0x498315[_0x44be48(0x191)]['infiniteProjectionMatrix']))_0x504873=_0x498315[_0x44be48(0x191)]['clone'](scratchPerspectiveOffCenterFrustum);else a679_0x50043a(_0x498315[_0x44be48(0x191)]['width'])?_0x504873=_0x498315[_0x44be48(0x191)][_0x44be48(0x18e)](scratchOrthographicFrustum):_0x504873=_0x498315[_0x44be48(0x191)]['clone'](scratchOrthographicOffCenterFrustum);}var _0x569cf9=_0x4d7c52[_0x44be48(0x1c5)],_0x353adb=_0x569cf9[_0x44be48(0x180)];for(var _0x3299b9=0x0;_0x3299b9<_0x353adb;++_0x3299b9){var _0x22417f=this[_0x44be48(0x179)](_0x31ffd6,_0x3299b9),_0x1028d2=_0x22417f['getDepth'](_0x1b01ba,_0x502859['x'],_0x502859['y']);if(!a679_0x50043a(_0x1028d2))continue;if(_0x1028d2>0x0&&_0x1028d2<0x1){var _0xae9522=_0x569cf9[_0x3299b9],_0x3ec30d;return _0x31ffd6[_0x44be48(0x1ba)]===a679_0x2dc089[_0x44be48(0x1d2)]?(_0x3ec30d=_0x498315[_0x44be48(0x1b6)]['z'],_0x498315[_0x44be48(0x1b6)]['z']=_0x3ec30d-_0xae9522[_0x44be48(0x155)]+0x1,_0x504873[_0x44be48(0x1c6)]=Math[_0x44be48(0x18d)](0x1,_0xae9522[_0x44be48(0x1c6)]-_0xae9522[_0x44be48(0x155)]),_0x504873['near']=0x1,_0x1cba91[_0x44be48(0x1b8)](_0x33e6f4),_0x1cba91[_0x44be48(0x163)](_0x504873)):(_0x504873[_0x44be48(0x155)]=_0xae9522[_0x44be48(0x155)]*(_0x3299b9!==0x0?_0x31ffd6[_0x44be48(0x1b9)]:0x1),_0x504873[_0x44be48(0x1c6)]=_0xae9522[_0x44be48(0x1c6)],_0x1cba91['updateFrustum'](_0x504873)),_0x5bb531=a679_0x5efa11[_0x44be48(0x1d1)](_0x31ffd6,_0x502859,_0x1028d2,_0x5bb531),_0x31ffd6[_0x44be48(0x1ba)]===a679_0x2dc089[_0x44be48(0x1d2)]&&(_0x498315[_0x44be48(0x1b6)]['z']=_0x3ec30d,_0x1cba91[_0x44be48(0x1b8)](_0x33e6f4)),this[_0x44be48(0x1d6)][_0x35658e]=a679_0x52c906[_0x44be48(0x18e)](_0x5bb531),_0x5bb531;}}return this['_pickPositionCache'][_0x35658e]=undefined,undefined;};var scratchPickPositionCartographic=new a679_0x176eaa();Picking[a679_0x29547a(0x186)][a679_0x29547a(0x174)]=function(_0x3975e7,_0x1bed52,_0x9ed7f0){var _0x4f7090=a679_0x29547a;_0x9ed7f0=this[_0x4f7090(0x18b)](_0x3975e7,_0x1bed52,_0x9ed7f0);if(a679_0x50043a(_0x9ed7f0)&&_0x3975e7['mode']!==a679_0x2dc089[_0x4f7090(0x159)]){a679_0x52c906[_0x4f7090(0x1e1)](_0x9ed7f0['y'],_0x9ed7f0['z'],_0x9ed7f0['x'],_0x9ed7f0);var _0x493492=_0x3975e7[_0x4f7090(0x1d5)],_0x307fb0=_0x493492[_0x4f7090(0x190)],_0x5418a7=_0x493492['unproject'](_0x9ed7f0,scratchPickPositionCartographic);_0x307fb0[_0x4f7090(0x1b4)](_0x5418a7,_0x9ed7f0);}return _0x9ed7f0;};function drillPick(_0x52700e,_0x3e7e63){var _0x3d1d50=a679_0x29547a,_0xa03cbb,_0x55aaab,_0x49f75c=[],_0x366907=[],_0x3b62bd=[],_0xb24353=[];!a679_0x50043a(_0x52700e)&&(_0x52700e=Number['MAX_VALUE']);var _0x9df2=_0x3e7e63();while(a679_0x50043a(_0x9df2)){var _0x5a8f5e=_0x9df2['object'],_0x56e746=_0x9df2[_0x3d1d50(0x1b6)],_0x354e32=_0x9df2[_0x3d1d50(0x1cb)];if(a679_0x50043a(_0x56e746)&&!a679_0x50043a(_0x5a8f5e)){_0x49f75c[_0x3d1d50(0x153)](_0x9df2);break;}if(!a679_0x50043a(_0x5a8f5e)||!a679_0x50043a(_0x5a8f5e[_0x3d1d50(0x1bd)]))break;if(!_0x354e32){_0x49f75c['push'](_0x9df2);if(0x0>=--_0x52700e)break;}var _0x3efece=_0x5a8f5e[_0x3d1d50(0x1bd)],_0x4a39df=![];typeof _0x3efece[_0x3d1d50(0x1e7)]==='function'&&(a679_0x50043a(_0x5a8f5e['id'])&&(_0x55aaab=_0x3efece['getGeometryInstanceAttributes'](_0x5a8f5e['id']),a679_0x50043a(_0x55aaab)&&a679_0x50043a(_0x55aaab[_0x3d1d50(0x1a2)])&&(_0x4a39df=!![],_0x55aaab[_0x3d1d50(0x1a2)]=a679_0xd0eaa5[_0x3d1d50(0x1da)](![],_0x55aaab['show']),_0x3b62bd['push'](_0x55aaab)))),_0x5a8f5e instanceof a679_0x48c322&&(_0x4a39df=!![],_0x5a8f5e[_0x3d1d50(0x1a2)]=![],_0xb24353[_0x3d1d50(0x153)](_0x5a8f5e)),!_0x4a39df&&(_0x3efece[_0x3d1d50(0x1a2)]=![],_0x366907['push'](_0x3efece)),_0x9df2=_0x3e7e63();}for(_0xa03cbb=0x0;_0xa03cbb<_0x366907[_0x3d1d50(0x180)];++_0xa03cbb){_0x366907[_0xa03cbb][_0x3d1d50(0x1a2)]=!![];}for(_0xa03cbb=0x0;_0xa03cbb<_0x3b62bd['length'];++_0xa03cbb){_0x55aaab=_0x3b62bd[_0xa03cbb],_0x55aaab['show']=a679_0xd0eaa5['toValue'](!![],_0x55aaab[_0x3d1d50(0x1a2)]);}for(_0xa03cbb=0x0;_0xa03cbb<_0xb24353[_0x3d1d50(0x180)];++_0xa03cbb){_0xb24353[_0xa03cbb]['show']=!![];}return _0x49f75c;}Picking['prototype'][a679_0x29547a(0x1b2)]=function(_0x464423,_0x2b19ec,_0x46ca6b,_0x4ef823,_0x1bbf99){var _0x5af3e3=a679_0x29547a,_0x412b67=this,_0x48bc03=function(){var _0xba0777=_0x412b67['pick'](_0x464423,_0x2b19ec,_0x4ef823,_0x1bbf99);if(a679_0x50043a(_0xba0777))return{'object':_0xba0777,'position':undefined,'exclude':![]};},_0x11a20d=drillPick(_0x46ca6b,_0x48bc03);return _0x11a20d[_0x5af3e3(0x19a)](function(_0x2ce068){var _0x592a90=_0x5af3e3;return _0x2ce068[_0x592a90(0x1af)];});};var scratchRight=new a679_0x52c906(),scratchUp=new a679_0x52c906();function MostDetailedRayPick(_0x11dc8b,_0x31f3fe,_0x17db97){var _0x8af9c5=a679_0x29547a;this[_0x8af9c5(0x1a4)]=_0x11dc8b,this[_0x8af9c5(0x1e3)]=_0x31f3fe,this[_0x8af9c5(0x183)]=_0x17db97,this[_0x8af9c5(0x177)]=![],this['deferred']=a679_0x270d36[_0x8af9c5(0x199)](),this[_0x8af9c5(0x15d)]=this[_0x8af9c5(0x1b3)][_0x8af9c5(0x15d)];}function updateOffscreenCameraFromRay(_0x4431ca,_0xda36d1,_0x49b6ef,_0x5df702){var _0x3becba=a679_0x29547a,_0x5d3e45=_0xda36d1['direction'],_0x3387b0=a679_0x52c906[_0x3becba(0x167)](_0x5d3e45,scratchRight),_0x3c41b3=a679_0x52c906[_0x3becba(0x17b)](_0x5d3e45,_0x3387b0,scratchRight),_0x7d2279=a679_0x52c906[_0x3becba(0x17b)](_0x5d3e45,_0x3c41b3,scratchUp);return _0x5df702[_0x3becba(0x1b6)]=_0xda36d1[_0x3becba(0x16a)],_0x5df702[_0x3becba(0x1be)]=_0x5d3e45,_0x5df702['up']=_0x7d2279,_0x5df702['right']=_0x3c41b3,_0x5df702[_0x3becba(0x191)]['width']=a679_0x1ea251(_0x49b6ef,offscreenDefaultWidth),_0x5df702[_0x3becba(0x191)][_0x3becba(0x1ac)](_0x5df702[_0x3becba(0x14d)],_0x5df702[_0x3becba(0x1de)],_0x5df702[_0x3becba(0x1b1)]);}function updateMostDetailedRayPick(_0xfd711b,_0x204989,_0x28eb7d){var _0x15a05e=a679_0x29547a,_0x3fdd17=_0x204989[_0x15a05e(0x1e5)],_0x2ec4e6=_0x28eb7d[_0x15a05e(0x1a4)],_0x2d75c4=_0x28eb7d[_0x15a05e(0x1e3)],_0x2b6ea7=_0x28eb7d[_0x15a05e(0x183)],_0x5e8709=_0xfd711b['_pickOffscreenView'][_0x15a05e(0x16f)],_0x12ab6c=updateOffscreenCameraFromRay(_0xfd711b,_0x2ec4e6,_0x2d75c4,_0x5e8709),_0x27d886=mostDetailedPreloadTilesetPassState;_0x27d886[_0x15a05e(0x16f)]=_0x5e8709,_0x27d886[_0x15a05e(0x1c0)]=_0x12ab6c;var _0x2dfcff=!![],_0x41843f=_0x2b6ea7[_0x15a05e(0x180)];for(var _0x3eb850=0x0;_0x3eb850<_0x41843f;++_0x3eb850){var _0x2f7f33=_0x2b6ea7[_0x3eb850];_0x2f7f33['show']&&_0x204989['primitives'][_0x15a05e(0x193)](_0x2f7f33)&&(_0x2f7f33['updateForPass'](_0x3fdd17,_0x27d886),_0x2dfcff=_0x2dfcff&&_0x27d886['ready']);}return _0x2dfcff&&_0x28eb7d[_0x15a05e(0x1b3)]['resolve'](),_0x2dfcff;}Picking[a679_0x29547a(0x186)][a679_0x29547a(0x168)]=function(_0x1b27a8){var _0x14f4fc=a679_0x29547a,_0xacccb1=this['_mostDetailedRayPicks'];for(var _0x482729=0x0;_0x482729<_0xacccb1[_0x14f4fc(0x180)];++_0x482729){updateMostDetailedRayPick(this,_0x1b27a8,_0xacccb1[_0x482729])&&_0xacccb1[_0x14f4fc(0x178)](_0x482729--,0x1);}};function getTilesets(_0x19bac3,_0x5ea853,_0x40d9e5){var _0x2035cf=a679_0x29547a,_0x133b1d=_0x19bac3[_0x2035cf(0x180)];for(var _0x299e69=0x0;_0x299e69<_0x133b1d;++_0x299e69){var _0x192d29=_0x19bac3[_0x2035cf(0x15c)](_0x299e69);if(_0x192d29['show']){if(a679_0x50043a(_0x192d29['isCesium3DTileset']))(!a679_0x50043a(_0x5ea853)||_0x5ea853[_0x2035cf(0x1cf)](_0x192d29)===-0x1)&&_0x40d9e5[_0x2035cf(0x153)](_0x192d29);else _0x192d29 instanceof a679_0x5c38e7&&getTilesets(_0x192d29,_0x5ea853,_0x40d9e5);}}}function launchMostDetailedRayPick(_0x4a308c,_0x120f64,_0x1446e8,_0x4e0e45,_0x190a5a,_0x5f5dec){var _0x2ec89c=a679_0x29547a,_0x23ef3c=[];getTilesets(_0x120f64[_0x2ec89c(0x196)],_0x4e0e45,_0x23ef3c);if(_0x23ef3c['length']===0x0)return a679_0x270d36['resolve'](_0x5f5dec());var _0x21d286=new MostDetailedRayPick(_0x1446e8,_0x190a5a,_0x23ef3c);return _0x4a308c[_0x2ec89c(0x185)][_0x2ec89c(0x153)](_0x21d286),_0x21d286[_0x2ec89c(0x15d)][_0x2ec89c(0x15b)](function(){return _0x5f5dec();});}function isExcluded(_0xd87c9f,_0x54cd30){var _0x518d2b=a679_0x29547a;if(!a679_0x50043a(_0xd87c9f)||!a679_0x50043a(_0x54cd30)||_0x54cd30[_0x518d2b(0x180)]===0x0)return![];return _0x54cd30[_0x518d2b(0x1cf)](_0xd87c9f)>-0x1||_0x54cd30['indexOf'](_0xd87c9f[_0x518d2b(0x1bd)])>-0x1||_0x54cd30[_0x518d2b(0x1cf)](_0xd87c9f['id'])>-0x1;}function getRayIntersection(_0x5e5c92,_0x246e19,_0x3da7c7,_0x388252,_0x366dda,_0x512496,_0x2ec68f){var _0x127eae=a679_0x29547a,_0xddc2ed=_0x246e19[_0x127eae(0x154)],_0x311ca3=_0xddc2ed[_0x127eae(0x17c)],_0x3cb434=_0x246e19[_0x127eae(0x1e5)],_0x34decd=_0x5e5c92[_0x127eae(0x14c)];_0x246e19[_0x127eae(0x1d3)]=_0x34decd,updateOffscreenCameraFromRay(_0x5e5c92,_0x3da7c7,_0x366dda,_0x34decd[_0x127eae(0x16f)]),scratchRectangle=a679_0x1974a2[_0x127eae(0x18e)](_0x34decd[_0x127eae(0x17f)],scratchRectangle);var _0x273dc8=_0x34decd[_0x127eae(0x194)]['begin'](scratchRectangle,_0x34decd['viewport']);_0x246e19[_0x127eae(0x1e6)][_0x127eae(0x1c9)](),_0x246e19[_0x127eae(0x187)](),_0x3cb434['invertClassification']=![],_0x3cb434[_0x127eae(0x1ca)]['pick']=!![],_0x3cb434[_0x127eae(0x1ca)][_0x127eae(0x14e)]=!![];_0x2ec68f?_0x3cb434[_0x127eae(0x192)]=mostDetailedPickTilesetPassState:_0x3cb434['tilesetPassState']=pickTilesetPassState;_0x311ca3[_0x127eae(0x1b8)](_0x3cb434),_0x246e19['updateEnvironment'](),_0x246e19[_0x127eae(0x18a)](_0x273dc8,scratchColorZero),_0x246e19['resolveFramebuffers'](_0x273dc8);var _0x212f8c,_0x2280b2=_0x34decd['pickFramebuffer'][_0x127eae(0x169)](scratchRectangle);if(_0x246e19[_0x127eae(0x154)]['depthTexture']){var _0x46370f=_0x34decd[_0x127eae(0x1c5)][_0x127eae(0x180)];for(var _0xb472ea=0x0;_0xb472ea<_0x46370f;++_0xb472ea){var _0x532bf0=_0x5e5c92[_0x127eae(0x179)](_0x246e19,_0xb472ea),_0xcdd7d8=_0x532bf0[_0x127eae(0x1c4)](_0xddc2ed,0x0,0x0);if(!a679_0x50043a(_0xcdd7d8))continue;if(_0xcdd7d8>0x0&&_0xcdd7d8<0x1){var _0x34615b=_0x34decd[_0x127eae(0x1c5)][_0xb472ea],_0x3d6ffc=_0x34615b[_0x127eae(0x155)]*(_0xb472ea!==0x0?_0x246e19['opaqueFrustumNearOffset']:0x1),_0x44af30=_0x34615b[_0x127eae(0x1c6)],_0x2f4045=_0x3d6ffc+_0xcdd7d8*(_0x44af30-_0x3d6ffc);_0x212f8c=a679_0x109c3d[_0x127eae(0x1cd)](_0x3da7c7,_0x2f4045);break;}}}_0x246e19[_0x127eae(0x1d3)]=_0x246e19[_0x127eae(0x15f)],_0xddc2ed[_0x127eae(0x188)]();if(a679_0x50043a(_0x2280b2)||a679_0x50043a(_0x212f8c))return{'object':_0x2280b2,'position':_0x212f8c,'exclude':!a679_0x50043a(_0x212f8c)&&_0x512496||isExcluded(_0x2280b2,_0x388252)};}function getRayIntersections(_0x5ed6f1,_0x249d75,_0x4b0ca8,_0x2e6fe3,_0x27d4ce,_0x471324,_0x1867c4,_0x1fda1f){var _0xf3fd32=function(){return getRayIntersection(_0x5ed6f1,_0x249d75,_0x4b0ca8,_0x27d4ce,_0x471324,_0x1867c4,_0x1fda1f);};return drillPick(_0x2e6fe3,_0xf3fd32);}function pickFromRay(_0x36ddb1,_0x41faa0,_0x3c7ba0,_0x346a5a,_0x17942c,_0x4e060e,_0x5e36ae){var _0x21b780=getRayIntersections(_0x36ddb1,_0x41faa0,_0x3c7ba0,0x1,_0x346a5a,_0x17942c,_0x4e060e,_0x5e36ae);if(_0x21b780['length']>0x0)return _0x21b780[0x0];}function a679_0x47f4(_0x622326,_0x418730){var _0x37747f=a679_0x3774();return a679_0x47f4=function(_0x47f43e,_0x31d629){_0x47f43e=_0x47f43e-0x14b;var _0x339c33=_0x37747f[_0x47f43e];return _0x339c33;},a679_0x47f4(_0x622326,_0x418730);}function drillPickFromRay(_0x3fd819,_0x103fce,_0xd642b8,_0x4b4a39,_0x186136,_0x485cad,_0x4bb124,_0x2be6b2){return getRayIntersections(_0x3fd819,_0x103fce,_0xd642b8,_0x4b4a39,_0x186136,_0x485cad,_0x4bb124,_0x2be6b2);}function deferPromiseUntilPostRender(_0x5af97a,_0x2363b2){var _0xeedbb1=a679_0x29547a,_0x2d92f4=a679_0x270d36[_0xeedbb1(0x199)]();return _0x2363b2['then'](function(_0x4d172e){var _0x598e9c=_0xeedbb1,_0x1b9557=_0x5af97a[_0x598e9c(0x181)][_0x598e9c(0x1b0)](function(){var _0x565606=_0x598e9c;_0x2d92f4[_0x565606(0x176)](_0x4d172e),_0x1b9557();});_0x5af97a[_0x598e9c(0x1d7)]();})['otherwise'](function(_0x2601ed){var _0x807f1e=_0xeedbb1;_0x2d92f4[_0x807f1e(0x14f)](_0x2601ed);}),_0x2d92f4[_0xeedbb1(0x15d)];}Picking['prototype'][a679_0x29547a(0x1ae)]=function(_0x354070,_0x1b92ba,_0x2561c2,_0x32df0d){var _0x51778c=a679_0x29547a;a679_0x4c6011[_0x51778c(0x161)]('ray',_0x1b92ba);if(_0x354070[_0x51778c(0x1ba)]!==a679_0x2dc089['SCENE3D'])throw new a679_0x4f8e03('Ray\x20intersections\x20are\x20only\x20supported\x20in\x203D\x20mode.');return pickFromRay(this,_0x354070,_0x1b92ba,_0x2561c2,_0x32df0d,![],![]);},Picking[a679_0x29547a(0x186)][a679_0x29547a(0x156)]=function(_0x594b6a,_0x49e884,_0xbfb8e6,_0x5867a8,_0x216570){var _0x37de6f=a679_0x29547a;a679_0x4c6011[_0x37de6f(0x161)](_0x37de6f(0x1a4),_0x49e884);if(_0x594b6a[_0x37de6f(0x1ba)]!==a679_0x2dc089[_0x37de6f(0x159)])throw new a679_0x4f8e03(_0x37de6f(0x160));return drillPickFromRay(this,_0x594b6a,_0x49e884,_0xbfb8e6,_0x5867a8,_0x216570,![],![]);},Picking[a679_0x29547a(0x186)][a679_0x29547a(0x1d8)]=function(_0x14e3ad,_0x5f2b99,_0x42fb87,_0x39af67){var _0x2ae08c=a679_0x29547a;a679_0x4c6011[_0x2ae08c(0x161)](_0x2ae08c(0x1a4),_0x5f2b99);if(_0x14e3ad[_0x2ae08c(0x1ba)]!==a679_0x2dc089['SCENE3D'])throw new a679_0x4f8e03(_0x2ae08c(0x160));var _0x4b5664=this;return _0x5f2b99=a679_0x109c3d[_0x2ae08c(0x18e)](_0x5f2b99),_0x42fb87=a679_0x50043a(_0x42fb87)?_0x42fb87[_0x2ae08c(0x162)]():_0x42fb87,deferPromiseUntilPostRender(_0x14e3ad,launchMostDetailedRayPick(_0x4b5664,_0x14e3ad,_0x5f2b99,_0x42fb87,_0x39af67,function(){return pickFromRay(_0x4b5664,_0x14e3ad,_0x5f2b99,_0x42fb87,_0x39af67,![],!![]);}));},Picking[a679_0x29547a(0x186)]['drillPickFromRayMostDetailed']=function(_0x54592c,_0x44519f,_0x52d27a,_0xd21041,_0x12a5f0){var _0x37bf01=a679_0x29547a;a679_0x4c6011['defined'](_0x37bf01(0x1a4),_0x44519f);if(_0x54592c['mode']!==a679_0x2dc089[_0x37bf01(0x159)])throw new a679_0x4f8e03(_0x37bf01(0x160));var _0x1b6578=this;return _0x44519f=a679_0x109c3d[_0x37bf01(0x18e)](_0x44519f),_0xd21041=a679_0x50043a(_0xd21041)?_0xd21041[_0x37bf01(0x162)]():_0xd21041,deferPromiseUntilPostRender(_0x54592c,launchMostDetailedRayPick(_0x1b6578,_0x54592c,_0x44519f,_0xd21041,_0x12a5f0,function(){return drillPickFromRay(_0x1b6578,_0x54592c,_0x44519f,_0x52d27a,_0xd21041,_0x12a5f0,![],!![]);}));};var scratchSurfacePosition=new a679_0x52c906(),scratchSurfaceNormal=new a679_0x52c906(),scratchSurfaceRay=new a679_0x109c3d(),scratchCartographic=new a679_0x176eaa();function getRayForSampleHeight(_0x59b312,_0x2d4485){var _0x12ed0b=a679_0x29547a,_0x3a8f58=_0x59b312['globe'],_0x51453d=a679_0x50043a(_0x3a8f58)?_0x3a8f58[_0x12ed0b(0x190)]:_0x59b312[_0x12ed0b(0x1d5)][_0x12ed0b(0x190)],_0x52cbb0=a679_0x4fc237[_0x12ed0b(0x14b)],_0x1d7d82=_0x51453d[_0x12ed0b(0x1ab)](_0x2d4485,scratchSurfaceNormal),_0x26dc81=a679_0x176eaa[_0x12ed0b(0x1a3)](_0x2d4485,_0x51453d,scratchSurfacePosition),_0x43d35c=scratchSurfaceRay;_0x43d35c[_0x12ed0b(0x16a)]=_0x26dc81,_0x43d35c['direction']=_0x1d7d82;var _0x275f4e=new a679_0x109c3d();return a679_0x109c3d[_0x12ed0b(0x1cd)](_0x43d35c,_0x52cbb0,_0x275f4e[_0x12ed0b(0x16a)]),a679_0x52c906[_0x12ed0b(0x1c1)](_0x1d7d82,_0x275f4e[_0x12ed0b(0x1be)]),_0x275f4e;}function getRayForClampToHeight(_0x26c6d8,_0x564a65){var _0x5e413e=a679_0x29547a,_0x5d5f40=_0x26c6d8[_0x5e413e(0x1dc)],_0x2ebfc0=a679_0x50043a(_0x5d5f40)?_0x5d5f40[_0x5e413e(0x190)]:_0x26c6d8[_0x5e413e(0x1d5)][_0x5e413e(0x190)],_0x523b23=a679_0x176eaa[_0x5e413e(0x189)](_0x564a65,_0x2ebfc0,scratchCartographic);return getRayForSampleHeight(_0x26c6d8,_0x523b23);}function getHeightFromCartesian(_0x574b17,_0x459d61){var _0x36ad67=a679_0x29547a,_0x505b03=_0x574b17[_0x36ad67(0x1dc)],_0xc4e9ee=a679_0x50043a(_0x505b03)?_0x505b03['ellipsoid']:_0x574b17[_0x36ad67(0x1d5)][_0x36ad67(0x190)],_0x42f28c=a679_0x176eaa[_0x36ad67(0x189)](_0x459d61,_0xc4e9ee,scratchCartographic);return _0x42f28c[_0x36ad67(0x1ce)];}function sampleHeightMostDetailed(_0x3199a3,_0x1374dc,_0x4f5f0c,_0x3c19a8,_0x35d66b){var _0x39a73e=getRayForSampleHeight(_0x1374dc,_0x4f5f0c);return launchMostDetailedRayPick(_0x3199a3,_0x1374dc,_0x39a73e,_0x3c19a8,_0x35d66b,function(){var _0x101915=a679_0x47f4,_0x34b9e6=pickFromRay(_0x3199a3,_0x1374dc,_0x39a73e,_0x3c19a8,_0x35d66b,!![],!![]);if(a679_0x50043a(_0x34b9e6))return getHeightFromCartesian(_0x1374dc,_0x34b9e6[_0x101915(0x1b6)]);});}function clampToHeightMostDetailed(_0x49f29a,_0x4aa1eb,_0x3039d,_0x13c25f,_0x173772,_0x4b9164){var _0x7cefbe=getRayForClampToHeight(_0x4aa1eb,_0x3039d);return launchMostDetailedRayPick(_0x49f29a,_0x4aa1eb,_0x7cefbe,_0x13c25f,_0x173772,function(){var _0x115d27=a679_0x47f4,_0x31642d=pickFromRay(_0x49f29a,_0x4aa1eb,_0x7cefbe,_0x13c25f,_0x173772,!![],!![]);if(a679_0x50043a(_0x31642d))return a679_0x52c906[_0x115d27(0x18e)](_0x31642d[_0x115d27(0x1b6)],_0x4b9164);});}Picking[a679_0x29547a(0x186)][a679_0x29547a(0x18f)]=function(_0x4f8b50,_0x4dd094,_0x22525d,_0x4609dc){var _0x305ae7=a679_0x29547a;a679_0x4c6011[_0x305ae7(0x161)](_0x305ae7(0x1b6),_0x4dd094);if(_0x4f8b50[_0x305ae7(0x1ba)]!==a679_0x2dc089[_0x305ae7(0x159)])throw new a679_0x4f8e03('sampleHeight\x20is\x20only\x20supported\x20in\x203D\x20mode.');if(!_0x4f8b50['sampleHeightSupported'])throw new a679_0x4f8e03(_0x305ae7(0x1a8));var _0xc69e65=getRayForSampleHeight(_0x4f8b50,_0x4dd094),_0x4ebae8=pickFromRay(this,_0x4f8b50,_0xc69e65,_0x22525d,_0x4609dc,!![],![]);if(a679_0x50043a(_0x4ebae8))return getHeightFromCartesian(_0x4f8b50,_0x4ebae8[_0x305ae7(0x1b6)]);},Picking[a679_0x29547a(0x186)][a679_0x29547a(0x182)]=function(_0x9a07b4,_0x890694,_0x3c1bf8,_0x105c61,_0x4d278d){var _0x3652ba=a679_0x29547a;a679_0x4c6011[_0x3652ba(0x161)]('cartesian',_0x890694);if(_0x9a07b4[_0x3652ba(0x1ba)]!==a679_0x2dc089[_0x3652ba(0x159)])throw new a679_0x4f8e03('clampToHeight\x20is\x20only\x20supported\x20in\x203D\x20mode.');if(!_0x9a07b4[_0x3652ba(0x16d)])throw new a679_0x4f8e03(_0x3652ba(0x1e0));var _0xcfab74=getRayForClampToHeight(_0x9a07b4,_0x890694),_0x5e2b15=pickFromRay(this,_0x9a07b4,_0xcfab74,_0x3c1bf8,_0x105c61,!![],![]);if(a679_0x50043a(_0x5e2b15))return a679_0x52c906['clone'](_0x5e2b15['position'],_0x4d278d);},Picking[a679_0x29547a(0x186)][a679_0x29547a(0x1e2)]=function(_0x21a767,_0x482f9d,_0x41184b,_0xf0097c){var _0x59a8e3=a679_0x29547a;a679_0x4c6011['defined'](_0x59a8e3(0x1d0),_0x482f9d);if(_0x21a767['mode']!==a679_0x2dc089[_0x59a8e3(0x159)])throw new a679_0x4f8e03(_0x59a8e3(0x151));if(!_0x21a767[_0x59a8e3(0x166)])throw new a679_0x4f8e03('sampleHeightMostDetailed\x20requires\x20depth\x20texture\x20support.\x20Check\x20sampleHeightSupported.');_0x41184b=a679_0x50043a(_0x41184b)?_0x41184b['slice']():_0x41184b;var _0x54e72c=_0x482f9d[_0x59a8e3(0x180)],_0x4c87fe=new Array(_0x54e72c);for(var _0x4f90cd=0x0;_0x4f90cd<_0x54e72c;++_0x4f90cd){_0x4c87fe[_0x4f90cd]=sampleHeightMostDetailed(this,_0x21a767,_0x482f9d[_0x4f90cd],_0x41184b,_0xf0097c);}return deferPromiseUntilPostRender(_0x21a767,a679_0x270d36[_0x59a8e3(0x1d9)](_0x4c87fe)['then'](function(_0x3ae4a0){var _0x2bee60=_0x59a8e3,_0x55bb37=_0x3ae4a0['length'];for(var _0x2682e5=0x0;_0x2682e5<_0x55bb37;++_0x2682e5){_0x482f9d[_0x2682e5][_0x2bee60(0x1ce)]=_0x3ae4a0[_0x2682e5];}return _0x482f9d;}));},Picking['prototype'][a679_0x29547a(0x1a1)]=function(_0x4273f7,_0x286f58,_0x59262f,_0x42cf41){var _0x6d6fa7=a679_0x29547a;a679_0x4c6011['defined']('cartesians',_0x286f58);if(_0x4273f7[_0x6d6fa7(0x1ba)]!==a679_0x2dc089['SCENE3D'])throw new a679_0x4f8e03(_0x6d6fa7(0x195));if(!_0x4273f7[_0x6d6fa7(0x16d)])throw new a679_0x4f8e03(_0x6d6fa7(0x1c2));_0x59262f=a679_0x50043a(_0x59262f)?_0x59262f[_0x6d6fa7(0x162)]():_0x59262f;var _0x422414=_0x286f58[_0x6d6fa7(0x180)],_0x2c9851=new Array(_0x422414);for(var _0x9c70ca=0x0;_0x9c70ca<_0x422414;++_0x9c70ca){_0x2c9851[_0x9c70ca]=clampToHeightMostDetailed(this,_0x4273f7,_0x286f58[_0x9c70ca],_0x59262f,_0x42cf41,_0x286f58[_0x9c70ca]);}return deferPromiseUntilPostRender(_0x4273f7,a679_0x270d36[_0x6d6fa7(0x1d9)](_0x2c9851)['then'](function(_0x788ff5){var _0x4e61a3=_0x6d6fa7,_0x3d1cfe=_0x788ff5[_0x4e61a3(0x180)];for(var _0x176bd2=0x0;_0x176bd2<_0x3d1cfe;++_0x176bd2){_0x286f58[_0x176bd2]=_0x788ff5[_0x176bd2];}return _0x286f58;}));},Picking['prototype'][a679_0x29547a(0x19d)]=function(){var _0x51627b=a679_0x29547a;this[_0x51627b(0x14c)]=this['_pickOffscreenView']&&this[_0x51627b(0x14c)]['destroy']();};export default Picking;