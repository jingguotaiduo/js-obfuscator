var a707_0x2b7ecc=a707_0x5407;(function(_0xa70517,_0x113f1c){var _0x4b27fb=a707_0x5407,_0x2bb652=_0xa70517();while(!![]){try{var _0x40bd9f=parseInt(_0x4b27fb(0x1d4))/0x1+parseInt(_0x4b27fb(0x253))/0x2*(-parseInt(_0x4b27fb(0x1ea))/0x3)+-parseInt(_0x4b27fb(0x21d))/0x4+-parseInt(_0x4b27fb(0x1f2))/0x5+parseInt(_0x4b27fb(0x1e4))/0x6+-parseInt(_0x4b27fb(0x1de))/0x7*(-parseInt(_0x4b27fb(0x248))/0x8)+parseInt(_0x4b27fb(0x1f7))/0x9*(-parseInt(_0x4b27fb(0x1e2))/0xa);if(_0x40bd9f===_0x113f1c)break;else _0x2bb652['push'](_0x2bb652['shift']());}catch(_0x2b50bd){_0x2bb652['push'](_0x2bb652['shift']());}}}(a707_0x4eb6,0x233a5));import a707_0x5fe178 from'../Core/Cartesian3.js';import a707_0x2d7fea from'../Core/Cartographic.js';import a707_0x3143a5 from'../Core/defaultValue.js';import a707_0x180005 from'../Core/defined.js';import a707_0x362384 from'../Core/DeveloperError.js';import a707_0x3d636c from'../Core/Event.js';import a707_0x13d8c4 from'../Core/getTimestamp.js';import a707_0x2b84b4 from'../Core/Math.js';import a707_0x227cbe from'../Core/Matrix4.js';import a707_0x18aae0 from'../Core/OrthographicFrustum.js';import a707_0x134f6c from'../Core/OrthographicOffCenterFrustum.js';import a707_0x4ab7d4 from'../Core/Ray.js';import a707_0xbc3823 from'../Core/Rectangle.js';import a707_0x14650f from'../Core/Visibility.js';import a707_0x3aefe3 from'./QuadtreeOccluders.js';import a707_0x4a29ea from'./QuadtreeTile.js';import a707_0x57e2b4 from'./QuadtreeTileLoadState.js';import a707_0xfd4383 from'./SceneMode.js';import a707_0x5b5c0e from'./TileReplacementQueue.js';import a707_0x4e59fa from'./TileSelectionResult.js';function QuadtreePrimitive(_0x3bd3e4){var _0x401ec0=a707_0x5407;if(!a707_0x180005(_0x3bd3e4)||!a707_0x180005(_0x3bd3e4['tileProvider']))throw new a707_0x362384(_0x401ec0(0x265));if(a707_0x180005(_0x3bd3e4[_0x401ec0(0x234)]['quadtree']))throw new a707_0x362384(_0x401ec0(0x23c));this[_0x401ec0(0x26a)]=_0x3bd3e4['tileProvider'],this[_0x401ec0(0x26a)]['quadtree']=this,this[_0x401ec0(0x26b)]={'enableDebugOutput':![],'maxDepth':0x0,'maxDepthVisited':0x0,'tilesVisited':0x0,'tilesCulled':0x0,'tilesRendered':0x0,'tilesWaitingForChildren':0x0,'lastMaxDepth':-0x1,'lastMaxDepthVisited':-0x1,'lastTilesVisited':-0x1,'lastTilesCulled':-0x1,'lastTilesRendered':-0x1,'lastTilesWaitingForChildren':-0x1,'suspendLodUpdate':![]};var _0x19eb1f=this[_0x401ec0(0x26a)][_0x401ec0(0x246)],_0x4451e7=_0x19eb1f[_0x401ec0(0x1cd)];this[_0x401ec0(0x208)]=[],this['_tileLoadQueueHigh']=[],this[_0x401ec0(0x272)]=[],this[_0x401ec0(0x21b)]=[],this['_tileReplacementQueue']=new a707_0x5b5c0e(),this[_0x401ec0(0x238)]=undefined,this['_loadQueueTimeSlice']=0x5,this['_tilesInvalidated']=![],this['_addHeightCallbacks']=[],this[_0x401ec0(0x1f4)]=[],this[_0x401ec0(0x1cc)]=[],this[_0x401ec0(0x273)]=0x0,this[_0x401ec0(0x1f5)]=0x2,this['_cameraPositionCartographic']=undefined,this[_0x401ec0(0x225)]=undefined,this[_0x401ec0(0x1d6)]=a707_0x3143a5(_0x3bd3e4[_0x401ec0(0x1d6)],0x2),this['tileCacheSize']=a707_0x3143a5(_0x3bd3e4['tileCacheSize'],0x64),this['loadingDescendantLimit']=0x14,this['preloadAncestors']=!![],this[_0x401ec0(0x245)]=![],this[_0x401ec0(0x229)]=new a707_0x3aefe3({'ellipsoid':_0x4451e7}),this[_0x401ec0(0x24f)]=new a707_0x3d636c(),this[_0x401ec0(0x267)]=0x0,this[_0x401ec0(0x207)]=undefined;}Object[a707_0x2b7ecc(0x1f1)](QuadtreePrimitive[a707_0x2b7ecc(0x25d)],{'tileProvider':{'get':function(){var _0x152ce7=a707_0x2b7ecc;return this[_0x152ce7(0x26a)];}},'tileLoadProgressEvent':{'get':function(){return this['_tileLoadProgressEvent'];}},'occluders':{'get':function(){return this['_occluders'];}}}),QuadtreePrimitive[a707_0x2b7ecc(0x25d)][a707_0x2b7ecc(0x220)]=function(){var _0x38055d=a707_0x2b7ecc;this[_0x38055d(0x228)]=!![];};function invalidateAllTiles(_0x16bdb2){var _0x480e1b=a707_0x2b7ecc,_0x33ffcf=_0x16bdb2[_0x480e1b(0x1fc)];_0x33ffcf[_0x480e1b(0x233)]=undefined,_0x33ffcf[_0x480e1b(0x1d5)]=undefined,_0x33ffcf[_0x480e1b(0x262)]=0x0,clearTileLoadQueue(_0x16bdb2);var _0x34a9cf=_0x16bdb2[_0x480e1b(0x238)];if(a707_0x180005(_0x34a9cf))for(var _0x28c833=0x0;_0x28c833<_0x34a9cf[_0x480e1b(0x1e7)];++_0x28c833){var _0x43a8e3=_0x34a9cf[_0x28c833],_0x225c4d=_0x43a8e3[_0x480e1b(0x1fd)],_0x40c98d=_0x225c4d[_0x480e1b(0x1e7)];for(var _0x1c30bb=0x0;_0x1c30bb<_0x40c98d;++_0x1c30bb){var _0x4bd0be=_0x225c4d[_0x1c30bb];_0x4bd0be[_0x480e1b(0x1db)]=0x0,_0x16bdb2['_addHeightCallbacks'][_0x480e1b(0x26c)](_0x4bd0be);}_0x34a9cf[_0x28c833]['freeResources']();}_0x16bdb2[_0x480e1b(0x238)]=undefined,_0x16bdb2['_tileProvider']['cancelReprojections']();}QuadtreePrimitive['prototype']['forEachLoadedTile']=function(_0x1bae07){var _0x38517d=a707_0x2b7ecc,_0x567599=this[_0x38517d(0x1fc)][_0x38517d(0x233)];while(a707_0x180005(_0x567599)){_0x567599[_0x38517d(0x261)]!==a707_0x57e2b4[_0x38517d(0x1d0)]&&_0x1bae07(_0x567599),_0x567599=_0x567599[_0x38517d(0x214)];}},QuadtreePrimitive['prototype'][a707_0x2b7ecc(0x20e)]=function(_0x10459f){var _0x3264e8=a707_0x2b7ecc,_0x21650b=this[_0x3264e8(0x208)];for(var _0x2e4ef3=0x0,_0x437a5f=_0x21650b[_0x3264e8(0x1e7)];_0x2e4ef3<_0x437a5f;++_0x2e4ef3){_0x10459f(_0x21650b[_0x2e4ef3]);}},QuadtreePrimitive[a707_0x2b7ecc(0x25d)][a707_0x2b7ecc(0x249)]=function(_0x5beabe,_0x474c12){var _0x286a7c=a707_0x2b7ecc,_0x4c0f88=this,_0x5c9904={'positionOnEllipsoidSurface':undefined,'positionCartographic':_0x5beabe,'level':-0x1,'callback':_0x474c12};return _0x5c9904[_0x286a7c(0x260)]=function(){var _0x18c99e=_0x286a7c,_0x86e94e=_0x4c0f88['_addHeightCallbacks'],_0x416d03=_0x86e94e['length'];for(var _0xbaa0cc=0x0;_0xbaa0cc<_0x416d03;++_0xbaa0cc){if(_0x86e94e[_0xbaa0cc]===_0x5c9904){_0x86e94e[_0x18c99e(0x254)](_0xbaa0cc,0x1);break;}}_0x4c0f88[_0x18c99e(0x1f4)][_0x18c99e(0x26c)](_0x5c9904);},_0x4c0f88[_0x286a7c(0x1e0)]['push'](_0x5c9904),_0x5c9904['removeFunc'];},QuadtreePrimitive[a707_0x2b7ecc(0x25d)][a707_0x2b7ecc(0x270)]=function(_0x3a8b0d){var _0x56d7f2=a707_0x2b7ecc;a707_0x180005(this[_0x56d7f2(0x26a)][_0x56d7f2(0x270)])&&this[_0x56d7f2(0x26a)][_0x56d7f2(0x270)](_0x3a8b0d);};function clearTileLoadQueue(_0xa51b32){var _0x59f569=a707_0x2b7ecc,_0x4cc6dd=_0xa51b32[_0x59f569(0x26b)];_0x4cc6dd[_0x59f569(0x1c7)]=0x0,_0x4cc6dd['maxDepthVisited']=0x0,_0x4cc6dd[_0x59f569(0x1d7)]=0x0,_0x4cc6dd[_0x59f569(0x25b)]=0x0,_0x4cc6dd['tilesRendered']=0x0,_0x4cc6dd[_0x59f569(0x22a)]=0x0,_0xa51b32[_0x59f569(0x1fb)]['length']=0x0,_0xa51b32[_0x59f569(0x272)][_0x59f569(0x1e7)]=0x0,_0xa51b32['_tileLoadQueueLow'][_0x59f569(0x1e7)]=0x0;}QuadtreePrimitive['prototype']['beginFrame']=function(_0x5ef713){var _0x23fc10=a707_0x2b7ecc,_0x14e7f4=_0x5ef713['passes'];if(!_0x14e7f4[_0x23fc10(0x24d)])return;this[_0x23fc10(0x228)]&&(invalidateAllTiles(this),this[_0x23fc10(0x228)]=![]);this[_0x23fc10(0x26a)][_0x23fc10(0x24e)](_0x5ef713),clearTileLoadQueue(this);if(this[_0x23fc10(0x26b)][_0x23fc10(0x263)])return;this['_tileReplacementQueue']['markStartOfRenderFrame']();},QuadtreePrimitive[a707_0x2b7ecc(0x25d)][a707_0x2b7ecc(0x24d)]=function(_0x40492e){var _0x28f6d1=a707_0x2b7ecc,_0x39b7c3=_0x40492e[_0x28f6d1(0x24b)],_0x1fbf7e=this[_0x28f6d1(0x26a)];_0x39b7c3[_0x28f6d1(0x24d)]&&(_0x1fbf7e[_0x28f6d1(0x1f0)](_0x40492e),selectTilesForRendering(this,_0x40492e),createRenderCommandsForSelectedTiles(this,_0x40492e),_0x1fbf7e[_0x28f6d1(0x200)](_0x40492e)),_0x39b7c3['pick']&&this[_0x28f6d1(0x208)][_0x28f6d1(0x1e7)]>0x0&&_0x1fbf7e['updateForPick'](_0x40492e);};function updateTileLoadProgress(_0x21eca4,_0x474790){var _0x4c0a7a=a707_0x2b7ecc,_0x4d3e99=_0x21eca4[_0x4c0a7a(0x1fb)]['length']+_0x21eca4[_0x4c0a7a(0x272)]['length']+_0x21eca4[_0x4c0a7a(0x21b)][_0x4c0a7a(0x1e7)];(_0x4d3e99!==_0x21eca4[_0x4c0a7a(0x267)]||_0x21eca4[_0x4c0a7a(0x228)])&&(_0x474790[_0x4c0a7a(0x240)]['push'](a707_0x3d636c[_0x4c0a7a(0x25d)][_0x4c0a7a(0x222)][_0x4c0a7a(0x1c9)](_0x21eca4[_0x4c0a7a(0x24f)],_0x4d3e99)),_0x21eca4['_lastTileLoadQueueLength']=_0x4d3e99);var _0x5e1038=_0x21eca4[_0x4c0a7a(0x26b)];_0x5e1038['enableDebugOutput']&&!_0x5e1038[_0x4c0a7a(0x263)]&&(_0x5e1038[_0x4c0a7a(0x1c7)]=_0x21eca4['_tilesToRender']['reduce'](function(_0x285e01,_0x3afad){var _0x4ef518=_0x4c0a7a;return Math[_0x4ef518(0x1d3)](_0x285e01,_0x3afad['level']);},-0x1),_0x5e1038[_0x4c0a7a(0x22c)]=_0x21eca4[_0x4c0a7a(0x208)][_0x4c0a7a(0x1e7)],(_0x5e1038[_0x4c0a7a(0x1d7)]!==_0x5e1038[_0x4c0a7a(0x218)]||_0x5e1038[_0x4c0a7a(0x22c)]!==_0x5e1038[_0x4c0a7a(0x244)]||_0x5e1038[_0x4c0a7a(0x25b)]!==_0x5e1038[_0x4c0a7a(0x21e)]||_0x5e1038['maxDepth']!==_0x5e1038[_0x4c0a7a(0x215)]||_0x5e1038[_0x4c0a7a(0x22a)]!==_0x5e1038[_0x4c0a7a(0x250)]||_0x5e1038[_0x4c0a7a(0x252)]!==_0x5e1038['lastMaxDepthVisited'])&&(console[_0x4c0a7a(0x230)](_0x4c0a7a(0x1e3)+_0x5e1038[_0x4c0a7a(0x1d7)]+_0x4c0a7a(0x23a)+_0x5e1038[_0x4c0a7a(0x22c)]+_0x4c0a7a(0x21c)+_0x5e1038['tilesCulled']+_0x4c0a7a(0x223)+_0x5e1038[_0x4c0a7a(0x1c7)]+_0x4c0a7a(0x216)+_0x5e1038[_0x4c0a7a(0x252)]+_0x4c0a7a(0x1c4)+_0x5e1038[_0x4c0a7a(0x22a)]),_0x5e1038[_0x4c0a7a(0x218)]=_0x5e1038[_0x4c0a7a(0x1d7)],_0x5e1038['lastTilesRendered']=_0x5e1038['tilesRendered'],_0x5e1038['lastTilesCulled']=_0x5e1038[_0x4c0a7a(0x25b)],_0x5e1038[_0x4c0a7a(0x215)]=_0x5e1038[_0x4c0a7a(0x1c7)],_0x5e1038['lastTilesWaitingForChildren']=_0x5e1038[_0x4c0a7a(0x22a)],_0x5e1038[_0x4c0a7a(0x26d)]=_0x5e1038['maxDepthVisited']));}function a707_0x5407(_0x1e4da4,_0x2bf507){var _0x4eb635=a707_0x4eb6();return a707_0x5407=function(_0x540760,_0x56908c){_0x540760=_0x540760-0x1c4;var _0x106373=_0x4eb635[_0x540760];return _0x106373;},a707_0x5407(_0x1e4da4,_0x2bf507);}QuadtreePrimitive[a707_0x2b7ecc(0x25d)]['endFrame']=function(_0x36d5b4){var _0x4ef097=a707_0x2b7ecc,_0x2d0a03=_0x36d5b4['passes'];if(!_0x2d0a03['render']||_0x36d5b4[_0x4ef097(0x22b)]===a707_0xfd4383['MORPHING'])return;processTileLoadQueue(this,_0x36d5b4),updateHeights(this,_0x36d5b4),updateTileLoadProgress(this,_0x36d5b4);},QuadtreePrimitive[a707_0x2b7ecc(0x25d)][a707_0x2b7ecc(0x1ec)]=function(){return![];},QuadtreePrimitive['prototype'][a707_0x2b7ecc(0x1c5)]=function(){var _0x3b5cf1=a707_0x2b7ecc;this[_0x3b5cf1(0x26a)]=this[_0x3b5cf1(0x26a)]&&this[_0x3b5cf1(0x26a)]['destroy']();};var comparisonPoint,centerScratch=new a707_0x2d7fea();function compareDistanceToPoint(_0x478714,_0x4236ba){var _0x24dc9e=a707_0x2b7ecc,_0x784f1c=a707_0xbc3823[_0x24dc9e(0x204)](_0x478714[_0x24dc9e(0x224)],centerScratch),_0x496266=_0x784f1c[_0x24dc9e(0x1cb)]-comparisonPoint['longitude'],_0x2ba905=_0x784f1c['latitude']-comparisonPoint['latitude'];_0x784f1c=a707_0xbc3823[_0x24dc9e(0x204)](_0x4236ba[_0x24dc9e(0x224)],centerScratch);var _0x2e634=_0x784f1c[_0x24dc9e(0x1cb)]-comparisonPoint[_0x24dc9e(0x1cb)],_0x299e8d=_0x784f1c[_0x24dc9e(0x256)]-comparisonPoint[_0x24dc9e(0x256)];return _0x496266*_0x496266+_0x2ba905*_0x2ba905-(_0x2e634*_0x2e634+_0x299e8d*_0x299e8d);}var cameraOriginScratch=new a707_0x5fe178(),rootTraversalDetails=[];function selectTilesForRendering(_0x17e8d5,_0x126bd7){var _0x21c966=a707_0x2b7ecc,_0x681f86=_0x17e8d5[_0x21c966(0x26b)];if(_0x681f86['suspendLodUpdate'])return;var _0x279ab5=_0x17e8d5[_0x21c966(0x208)];_0x279ab5[_0x21c966(0x1e7)]=0x0;var _0x34f075,_0x72efcb=_0x17e8d5[_0x21c966(0x26a)];if(!a707_0x180005(_0x17e8d5[_0x21c966(0x238)])){if(_0x72efcb[_0x21c966(0x22f)]){var _0x47ba33=_0x72efcb['tilingScheme'];_0x17e8d5[_0x21c966(0x238)]=a707_0x4a29ea[_0x21c966(0x268)](_0x47ba33);var _0x4dbc50=_0x17e8d5[_0x21c966(0x238)]['length'];if(rootTraversalDetails[_0x21c966(0x1e7)]<_0x4dbc50){rootTraversalDetails=new Array(_0x4dbc50);for(_0x34f075=0x0;_0x34f075<_0x4dbc50;++_0x34f075){rootTraversalDetails[_0x34f075]===undefined&&(rootTraversalDetails[_0x34f075]=new TraversalDetails());}}}else return;}_0x17e8d5['_occluders']['ellipsoid'][_0x21c966(0x1da)]=_0x126bd7['camera'][_0x21c966(0x23d)];var _0x455fe4,_0x99840=_0x17e8d5['_levelZeroTiles'],_0x3e29f5=_0x99840[_0x21c966(0x1e7)]>0x1?_0x17e8d5[_0x21c966(0x229)]:undefined;comparisonPoint=_0x126bd7[_0x21c966(0x259)][_0x21c966(0x266)],_0x99840[_0x21c966(0x24c)](compareDistanceToPoint);var _0x3fbc57=_0x17e8d5['_addHeightCallbacks'],_0x460ecf=_0x17e8d5[_0x21c966(0x1f4)],_0x34d0a9=_0x126bd7['frameNumber'],_0x15ad58;if(_0x3fbc57[_0x21c966(0x1e7)]>0x0||_0x460ecf[_0x21c966(0x1e7)]>0x0){for(_0x34f075=0x0,_0x15ad58=_0x99840[_0x21c966(0x1e7)];_0x34f075<_0x15ad58;++_0x34f075){_0x455fe4=_0x99840[_0x34f075],_0x455fe4['_updateCustomData'](_0x34d0a9,_0x3fbc57,_0x460ecf);}_0x3fbc57[_0x21c966(0x1e7)]=0x0,_0x460ecf[_0x21c966(0x1e7)]=0x0;}var _0x480cb7=_0x126bd7[_0x21c966(0x259)];_0x17e8d5[_0x21c966(0x1e9)]=_0x480cb7[_0x21c966(0x266)];var _0x4edf07=a707_0x227cbe['getTranslation'](_0x480cb7[_0x21c966(0x20c)],cameraOriginScratch);_0x17e8d5[_0x21c966(0x225)]=_0x17e8d5[_0x21c966(0x234)][_0x21c966(0x246)][_0x21c966(0x1cd)][_0x21c966(0x1c8)](_0x4edf07,_0x17e8d5[_0x21c966(0x225)]);for(_0x34f075=0x0,_0x15ad58=_0x99840['length'];_0x34f075<_0x15ad58;++_0x34f075){_0x455fe4=_0x99840[_0x34f075],_0x17e8d5[_0x21c966(0x1fc)][_0x21c966(0x264)](_0x455fe4),!_0x455fe4['renderable']?(queueTileLoad(_0x17e8d5,_0x17e8d5['_tileLoadQueueHigh'],_0x455fe4,_0x126bd7),++_0x681f86[_0x21c966(0x22a)]):visitIfVisible(_0x17e8d5,_0x455fe4,_0x72efcb,_0x126bd7,_0x3e29f5,![],rootTraversalDetails[_0x34f075]);}_0x17e8d5[_0x21c966(0x207)]=_0x34d0a9;}function queueTileLoad(_0x19feb1,_0x2fa702,_0x52b3b8,_0x13035c){var _0x7410b3=a707_0x2b7ecc;if(!_0x52b3b8[_0x7410b3(0x1e6)])return;_0x19feb1[_0x7410b3(0x234)][_0x7410b3(0x1e5)]!==undefined&&(_0x52b3b8[_0x7410b3(0x26f)]=_0x19feb1[_0x7410b3(0x234)]['computeTileLoadPriority'](_0x52b3b8,_0x13035c)),_0x2fa702[_0x7410b3(0x26c)](_0x52b3b8);}function a707_0x4eb6(){var _0x3a25af=['lastTilesCulled','RENDERED','invalidateAllTiles','originalResult','raiseEvent',',\x20Max\x20Depth\x20Rendered:\x20','rectangle','_cameraReferenceFrameOriginCartographic','data','anyWereRenderedLastFrame','_tilesInvalidated','_occluders','tilesWaitingForChildren','mode','tilesRendered','north','direction','ready','log','trimTiles','southeastChild','head','tileProvider','renderable','origin','NONE','_levelZeroTiles','fromElements',',\x20Rendered:\x20','callback','A\x20QuadtreeTileProvider\x20can\x20only\x20be\x20used\x20with\x20a\x20single\x20QuadtreePrimitive','positionWC','southeast','min','afterRender','density','fromRadians','northeast','lastTilesRendered','preloadSiblings','tilingScheme','frustum','16kPmRJL','updateHeight','mapProjection','passes','sort','render','initialize','_tileLoadProgressEvent','lastTilesWaitingForChildren','tileBoundingRegion','maxDepthVisited','30ZUJekS','splice','parent','latitude','_distance','clone','camera','CULLED','tilesCulled','computeTileVisibility','prototype','context','SCENE3D','removeFunc','state','count','suspendLodUpdate','markTileRendered','options.tileProvider\x20is\x20required.','positionCartographic','_lastTileLoadQueueLength','createLevelZeroTiles','upsampledFromParent','_tileProvider','_debug','push','lastMaxDepthVisited','drawingBufferWidth','_loadPriority','update','frameNumber','_tileLoadQueueMedium','_lastTileIndex','terrainData','CULLED_BUT_NEEDED','southwest',',\x20Waiting\x20for\x20children:\x20','destroy','multiplyByScalar','maxDepth','cartesianToCartographic','bind','geodeticSurfaceNormal','longitude','_tileToUpdateHeights','ellipsoid','top','canRenderWithoutLosingDetail','START','southwestChild','shift','max','202596LjOvLC','tail','maximumScreenSpaceError','tilesVisited','showTileThisFrame','allAreRenderable','cameraPosition','level','loadTile','_offCenterFrustum','225659ybYBOA','subtract','_addHeightCallbacks','_lastSelectionResult','56560XibGVC','Visited\x20','1516998ISusWW','computeTileLoadPriority','needsLoading','length','mesh','_cameraPositionCartographic','16041mLhFPG','canRefine','isDestroyed','combine','fog','SCENE2D','beginUpdate','defineProperties','341825IdHZeM','sse','_removeHeightCallbacks','_updateHeightsTimeSlice','sseDenominator','27kMZGxI','notYetRenderableCount','enabled','KICKED','_tileLoadQueueHigh','_tileReplacementQueue','customData','getLevelMaximumGeometricError','_lastSelectionResultFrame','endUpdate','right','pixelRatio','minimumHeight','center','contains','left','_lastSelectionFrameNumber','_tilesToRender','tileCacheSize','height','bottom','transform','_updateCustomData','forEachRenderedTile','positionOnEllipsoidSurface','east','pick','wasCreatedByUpsampling','REFINED','replacementNext','lastMaxDepth',',\x20Max\x20Depth\x20Visited:\x20','preloadAncestors','lastTilesVisited','drawingBufferHeight','UNIT_X','_tileLoadQueueLow',',\x20Culled:\x20','840288hvcIPE'];a707_0x4eb6=function(){return _0x3a25af;};return a707_0x4eb6();}function TraversalDetails(){var _0x36fea7=a707_0x2b7ecc;this[_0x36fea7(0x1d9)]=!![],this[_0x36fea7(0x227)]=![],this[_0x36fea7(0x1f8)]=0x0;}function TraversalQuadDetails(){var _0x3160c1=a707_0x2b7ecc;this[_0x3160c1(0x276)]=new TraversalDetails(),this[_0x3160c1(0x23e)]=new TraversalDetails(),this['northwest']=new TraversalDetails(),this[_0x3160c1(0x243)]=new TraversalDetails();}TraversalQuadDetails[a707_0x2b7ecc(0x25d)]['combine']=function(_0x103f7a){var _0x464a0a=a707_0x2b7ecc,_0xd632ce=this[_0x464a0a(0x276)],_0x3d6a87=this[_0x464a0a(0x23e)],_0x145067=this['northwest'],_0x2ec825=this[_0x464a0a(0x243)];_0x103f7a[_0x464a0a(0x1d9)]=_0xd632ce['allAreRenderable']&&_0x3d6a87[_0x464a0a(0x1d9)]&&_0x145067['allAreRenderable']&&_0x2ec825[_0x464a0a(0x1d9)],_0x103f7a[_0x464a0a(0x227)]=_0xd632ce[_0x464a0a(0x227)]||_0x3d6a87[_0x464a0a(0x227)]||_0x145067[_0x464a0a(0x227)]||_0x2ec825[_0x464a0a(0x227)],_0x103f7a[_0x464a0a(0x1f8)]=_0xd632ce['notYetRenderableCount']+_0x3d6a87[_0x464a0a(0x1f8)]+_0x145067['notYetRenderableCount']+_0x2ec825[_0x464a0a(0x1f8)];};var traversalQuadsByLevel=new Array(0x1f);for(var i=0x0;i<traversalQuadsByLevel[a707_0x2b7ecc(0x1e7)];++i){traversalQuadsByLevel[i]=new TraversalQuadDetails();}function visitTile(_0x3118ce,_0x4986fd,_0x1030c1,_0x3003a0,_0x32d859){var _0x39dfcf=a707_0x2b7ecc,_0x52117d=_0x3118ce['_debug'];++_0x52117d[_0x39dfcf(0x1d7)],_0x3118ce[_0x39dfcf(0x1fc)][_0x39dfcf(0x264)](_0x1030c1),_0x1030c1[_0x39dfcf(0x20d)](_0x4986fd[_0x39dfcf(0x271)]);_0x1030c1[_0x39dfcf(0x1db)]>_0x52117d[_0x39dfcf(0x252)]&&(_0x52117d['maxDepthVisited']=_0x1030c1[_0x39dfcf(0x1db)]);var _0x3c505b=screenSpaceError(_0x3118ce,_0x4986fd,_0x1030c1)<_0x3118ce[_0x39dfcf(0x1d6)],_0x361e1b=_0x1030c1[_0x39dfcf(0x1d1)],_0x102de9=_0x1030c1[_0x39dfcf(0x232)],_0x30e13c=_0x1030c1['northwestChild'],_0x26c5a1=_0x1030c1['northeastChild'],_0x517876=_0x3118ce[_0x39dfcf(0x207)],_0x18aa06=_0x1030c1[_0x39dfcf(0x1ff)]===_0x517876?_0x1030c1[_0x39dfcf(0x1e1)]:a707_0x4e59fa['NONE'],_0x48a794=_0x3118ce[_0x39dfcf(0x234)];if(_0x3c505b||_0x3003a0){var _0x3bb5ec=a707_0x4e59fa[_0x39dfcf(0x221)](_0x18aa06)===a707_0x4e59fa[_0x39dfcf(0x21f)],_0xc8ba12=a707_0x4e59fa[_0x39dfcf(0x221)](_0x18aa06)===a707_0x4e59fa['CULLED']||_0x18aa06===a707_0x4e59fa[_0x39dfcf(0x237)],_0x21229c=_0x1030c1[_0x39dfcf(0x261)]===a707_0x57e2b4['DONE'],_0x478f1a=_0x3bb5ec||_0xc8ba12||_0x21229c;!_0x478f1a&&(a707_0x180005(_0x48a794[_0x39dfcf(0x1cf)])&&(_0x478f1a=_0x48a794['canRenderWithoutLosingDetail'](_0x1030c1)));if(_0x478f1a){_0x3c505b&&queueTileLoad(_0x3118ce,_0x3118ce[_0x39dfcf(0x272)],_0x1030c1,_0x4986fd);addTileToRenderList(_0x3118ce,_0x1030c1),_0x32d859[_0x39dfcf(0x1d9)]=_0x1030c1[_0x39dfcf(0x235)],_0x32d859[_0x39dfcf(0x227)]=_0x18aa06===a707_0x4e59fa['RENDERED'],_0x32d859[_0x39dfcf(0x1f8)]=_0x1030c1['renderable']?0x0:0x1,_0x1030c1[_0x39dfcf(0x1ff)]=_0x4986fd[_0x39dfcf(0x271)],_0x1030c1[_0x39dfcf(0x1e1)]=a707_0x4e59fa['RENDERED'];!_0x32d859[_0x39dfcf(0x227)]&&_0x3118ce[_0x39dfcf(0x1cc)][_0x39dfcf(0x26c)](_0x1030c1);return;}_0x3003a0=!![],_0x3c505b&&queueTileLoad(_0x3118ce,_0x3118ce[_0x39dfcf(0x1fb)],_0x1030c1,_0x4986fd);}if(_0x48a794[_0x39dfcf(0x1eb)](_0x1030c1)){var _0x2f24fc=_0x361e1b[_0x39dfcf(0x269)]&&_0x102de9[_0x39dfcf(0x269)]&&_0x30e13c[_0x39dfcf(0x269)]&&_0x26c5a1[_0x39dfcf(0x269)];if(_0x2f24fc){addTileToRenderList(_0x3118ce,_0x1030c1),queueTileLoad(_0x3118ce,_0x3118ce[_0x39dfcf(0x272)],_0x1030c1,_0x4986fd),_0x3118ce[_0x39dfcf(0x1fc)]['markTileRendered'](_0x361e1b),_0x3118ce[_0x39dfcf(0x1fc)][_0x39dfcf(0x264)](_0x102de9),_0x3118ce[_0x39dfcf(0x1fc)][_0x39dfcf(0x264)](_0x30e13c),_0x3118ce[_0x39dfcf(0x1fc)][_0x39dfcf(0x264)](_0x26c5a1),_0x32d859['allAreRenderable']=_0x1030c1[_0x39dfcf(0x235)],_0x32d859[_0x39dfcf(0x227)]=_0x18aa06===a707_0x4e59fa[_0x39dfcf(0x21f)],_0x32d859[_0x39dfcf(0x1f8)]=_0x1030c1[_0x39dfcf(0x235)]?0x0:0x1,_0x1030c1['_lastSelectionResultFrame']=_0x4986fd[_0x39dfcf(0x271)],_0x1030c1[_0x39dfcf(0x1e1)]=a707_0x4e59fa[_0x39dfcf(0x21f)];!_0x32d859[_0x39dfcf(0x227)]&&_0x3118ce[_0x39dfcf(0x1cc)][_0x39dfcf(0x26c)](_0x1030c1);return;}_0x1030c1['_lastSelectionResultFrame']=_0x4986fd['frameNumber'],_0x1030c1['_lastSelectionResult']=a707_0x4e59fa[_0x39dfcf(0x213)];var _0x3055de=_0x3118ce[_0x39dfcf(0x208)][_0x39dfcf(0x1e7)],_0x4a0787=_0x3118ce[_0x39dfcf(0x21b)][_0x39dfcf(0x1e7)],_0x1bea15=_0x3118ce[_0x39dfcf(0x272)][_0x39dfcf(0x1e7)],_0x2978ef=_0x3118ce[_0x39dfcf(0x1fb)][_0x39dfcf(0x1e7)],_0x5a6157=_0x3118ce['_tileToUpdateHeights'][_0x39dfcf(0x1e7)];visitVisibleChildrenNearToFar(_0x3118ce,_0x361e1b,_0x102de9,_0x30e13c,_0x26c5a1,_0x4986fd,_0x3003a0,_0x32d859);if(_0x3055de!==_0x3118ce[_0x39dfcf(0x208)]['length']){var _0x371650=_0x32d859[_0x39dfcf(0x1d9)],_0x5c8fed=_0x32d859['anyWereRenderedLastFrame'],_0x11d27e=_0x32d859['notYetRenderableCount'],_0x5e6002=![];if(!_0x371650&&!_0x5c8fed){var _0x3e9b6f=_0x3118ce[_0x39dfcf(0x208)];for(var _0x1f5d3a=_0x3055de;_0x1f5d3a<_0x3e9b6f['length'];++_0x1f5d3a){var _0x1e9297=_0x3e9b6f[_0x1f5d3a];while(_0x1e9297!==undefined&&_0x1e9297[_0x39dfcf(0x1e1)]!==a707_0x4e59fa[_0x39dfcf(0x1fa)]&&_0x1e9297!==_0x1030c1){_0x1e9297[_0x39dfcf(0x1e1)]=a707_0x4e59fa['kick'](_0x1e9297['_lastSelectionResult']),_0x1e9297=_0x1e9297[_0x39dfcf(0x255)];}}_0x3118ce['_tilesToRender'][_0x39dfcf(0x1e7)]=_0x3055de,_0x3118ce[_0x39dfcf(0x1cc)][_0x39dfcf(0x1e7)]=_0x5a6157,addTileToRenderList(_0x3118ce,_0x1030c1),_0x1030c1['_lastSelectionResult']=a707_0x4e59fa[_0x39dfcf(0x21f)];var _0x40f9a2=_0x18aa06===a707_0x4e59fa[_0x39dfcf(0x21f)];!_0x40f9a2&&_0x11d27e>_0x3118ce['loadingDescendantLimit']&&(_0x3118ce[_0x39dfcf(0x21b)][_0x39dfcf(0x1e7)]=_0x4a0787,_0x3118ce[_0x39dfcf(0x272)][_0x39dfcf(0x1e7)]=_0x1bea15,_0x3118ce[_0x39dfcf(0x1fb)]['length']=_0x2978ef,queueTileLoad(_0x3118ce,_0x3118ce['_tileLoadQueueMedium'],_0x1030c1,_0x4986fd),_0x32d859[_0x39dfcf(0x1f8)]=_0x1030c1[_0x39dfcf(0x235)]?0x0:0x1,_0x5e6002=!![]),_0x32d859[_0x39dfcf(0x1d9)]=_0x1030c1[_0x39dfcf(0x235)],_0x32d859[_0x39dfcf(0x227)]=_0x40f9a2,!_0x40f9a2&&_0x3118ce[_0x39dfcf(0x1cc)]['push'](_0x1030c1),++_0x52117d['tilesWaitingForChildren'];}_0x3118ce[_0x39dfcf(0x217)]&&!_0x5e6002&&queueTileLoad(_0x3118ce,_0x3118ce[_0x39dfcf(0x21b)],_0x1030c1,_0x4986fd);}return;}_0x1030c1['_lastSelectionResultFrame']=_0x4986fd[_0x39dfcf(0x271)],_0x1030c1['_lastSelectionResult']=a707_0x4e59fa[_0x39dfcf(0x21f)],addTileToRenderList(_0x3118ce,_0x1030c1),queueTileLoad(_0x3118ce,_0x3118ce['_tileLoadQueueHigh'],_0x1030c1,_0x4986fd),_0x32d859['allAreRenderable']=_0x1030c1[_0x39dfcf(0x235)],_0x32d859[_0x39dfcf(0x227)]=_0x18aa06===a707_0x4e59fa['RENDERED'],_0x32d859[_0x39dfcf(0x1f8)]=_0x1030c1[_0x39dfcf(0x235)]?0x0:0x1;}function visitVisibleChildrenNearToFar(_0x2b81e2,_0x27a478,_0x57b88d,_0x3d8823,_0x4f333f,_0x3c6d88,_0x3690a2,_0x51a9c9){var _0xf11ae7=a707_0x2b7ecc,_0x5e024f=_0x3c6d88['camera'][_0xf11ae7(0x266)],_0x17feb4=_0x2b81e2[_0xf11ae7(0x26a)],_0x317224=_0x2b81e2[_0xf11ae7(0x229)],_0x160a37=traversalQuadsByLevel[_0x27a478[_0xf11ae7(0x1db)]],_0x4ba5a6=_0x160a37['southwest'],_0x3f8f05=_0x160a37[_0xf11ae7(0x23e)],_0x5e1c2a=_0x160a37['northwest'],_0xdc67f6=_0x160a37[_0xf11ae7(0x243)];if(_0x5e024f[_0xf11ae7(0x1cb)]<_0x27a478['rectangle'][_0xf11ae7(0x210)])_0x5e024f[_0xf11ae7(0x256)]<_0x27a478[_0xf11ae7(0x224)][_0xf11ae7(0x22d)]?(visitIfVisible(_0x2b81e2,_0x27a478,_0x17feb4,_0x3c6d88,_0x317224,_0x3690a2,_0x4ba5a6),visitIfVisible(_0x2b81e2,_0x57b88d,_0x17feb4,_0x3c6d88,_0x317224,_0x3690a2,_0x3f8f05),visitIfVisible(_0x2b81e2,_0x3d8823,_0x17feb4,_0x3c6d88,_0x317224,_0x3690a2,_0x5e1c2a),visitIfVisible(_0x2b81e2,_0x4f333f,_0x17feb4,_0x3c6d88,_0x317224,_0x3690a2,_0xdc67f6)):(visitIfVisible(_0x2b81e2,_0x3d8823,_0x17feb4,_0x3c6d88,_0x317224,_0x3690a2,_0x5e1c2a),visitIfVisible(_0x2b81e2,_0x27a478,_0x17feb4,_0x3c6d88,_0x317224,_0x3690a2,_0x4ba5a6),visitIfVisible(_0x2b81e2,_0x4f333f,_0x17feb4,_0x3c6d88,_0x317224,_0x3690a2,_0xdc67f6),visitIfVisible(_0x2b81e2,_0x57b88d,_0x17feb4,_0x3c6d88,_0x317224,_0x3690a2,_0x3f8f05));else _0x5e024f['latitude']<_0x27a478[_0xf11ae7(0x224)][_0xf11ae7(0x22d)]?(visitIfVisible(_0x2b81e2,_0x57b88d,_0x17feb4,_0x3c6d88,_0x317224,_0x3690a2,_0x3f8f05),visitIfVisible(_0x2b81e2,_0x27a478,_0x17feb4,_0x3c6d88,_0x317224,_0x3690a2,_0x4ba5a6),visitIfVisible(_0x2b81e2,_0x4f333f,_0x17feb4,_0x3c6d88,_0x317224,_0x3690a2,_0xdc67f6),visitIfVisible(_0x2b81e2,_0x3d8823,_0x17feb4,_0x3c6d88,_0x317224,_0x3690a2,_0x5e1c2a)):(visitIfVisible(_0x2b81e2,_0x4f333f,_0x17feb4,_0x3c6d88,_0x317224,_0x3690a2,_0xdc67f6),visitIfVisible(_0x2b81e2,_0x3d8823,_0x17feb4,_0x3c6d88,_0x317224,_0x3690a2,_0x5e1c2a),visitIfVisible(_0x2b81e2,_0x57b88d,_0x17feb4,_0x3c6d88,_0x317224,_0x3690a2,_0x3f8f05),visitIfVisible(_0x2b81e2,_0x27a478,_0x17feb4,_0x3c6d88,_0x317224,_0x3690a2,_0x4ba5a6));_0x160a37[_0xf11ae7(0x1ed)](_0x51a9c9);}function containsNeededPosition(_0x4ea0a4,_0x3fb551){var _0x4f5d5e=a707_0x2b7ecc,_0x541876=_0x3fb551[_0x4f5d5e(0x224)];return a707_0x180005(_0x4ea0a4[_0x4f5d5e(0x1e9)])&&a707_0xbc3823['contains'](_0x541876,_0x4ea0a4[_0x4f5d5e(0x1e9)])||a707_0x180005(_0x4ea0a4[_0x4f5d5e(0x225)])&&a707_0xbc3823[_0x4f5d5e(0x205)](_0x541876,_0x4ea0a4[_0x4f5d5e(0x225)]);}function visitIfVisible(_0xccc4cc,_0x3587d2,_0x4cd405,_0x40d220,_0x20d0c5,_0x1bcb12,_0x541592){var _0x2f8f7a=a707_0x2b7ecc;if(_0x4cd405[_0x2f8f7a(0x25c)](_0x3587d2,_0x40d220,_0x20d0c5)!==a707_0x14650f[_0x2f8f7a(0x237)])return visitTile(_0xccc4cc,_0x40d220,_0x3587d2,_0x1bcb12,_0x541592);++_0xccc4cc[_0x2f8f7a(0x26b)][_0x2f8f7a(0x25b)],_0xccc4cc[_0x2f8f7a(0x1fc)][_0x2f8f7a(0x264)](_0x3587d2),_0x541592[_0x2f8f7a(0x1d9)]=!![],_0x541592['anyWereRenderedLastFrame']=![],_0x541592[_0x2f8f7a(0x1f8)]=0x0;if(containsNeededPosition(_0xccc4cc,_0x3587d2)){(!a707_0x180005(_0x3587d2[_0x2f8f7a(0x226)])||!a707_0x180005(_0x3587d2[_0x2f8f7a(0x226)]['vertexArray']))&&queueTileLoad(_0xccc4cc,_0xccc4cc[_0x2f8f7a(0x272)],_0x3587d2,_0x40d220);var _0x557c2c=_0xccc4cc['_lastSelectionFrameNumber'],_0x32f3da=_0x3587d2[_0x2f8f7a(0x1ff)]===_0x557c2c?_0x3587d2[_0x2f8f7a(0x1e1)]:a707_0x4e59fa[_0x2f8f7a(0x237)];_0x32f3da!==a707_0x4e59fa['CULLED_BUT_NEEDED']&&_0x32f3da!==a707_0x4e59fa['RENDERED']&&_0xccc4cc[_0x2f8f7a(0x1cc)][_0x2f8f7a(0x26c)](_0x3587d2),_0x3587d2['_lastSelectionResult']=a707_0x4e59fa[_0x2f8f7a(0x275)];}else _0xccc4cc[_0x2f8f7a(0x245)]||_0x3587d2['level']===0x0?(queueTileLoad(_0xccc4cc,_0xccc4cc[_0x2f8f7a(0x21b)],_0x3587d2,_0x40d220),_0x3587d2[_0x2f8f7a(0x1e1)]=a707_0x4e59fa['CULLED']):_0x3587d2[_0x2f8f7a(0x1e1)]=a707_0x4e59fa[_0x2f8f7a(0x25a)];_0x3587d2[_0x2f8f7a(0x1ff)]=_0x40d220[_0x2f8f7a(0x271)];}function screenSpaceError(_0x4a9d93,_0x50f4ea,_0x267deb){var _0x1cc2c9=a707_0x2b7ecc;if(_0x50f4ea['mode']===a707_0xfd4383[_0x1cc2c9(0x1ef)]||_0x50f4ea[_0x1cc2c9(0x259)][_0x1cc2c9(0x247)]instanceof a707_0x18aae0||_0x50f4ea[_0x1cc2c9(0x259)][_0x1cc2c9(0x247)]instanceof a707_0x134f6c)return screenSpaceError2D(_0x4a9d93,_0x50f4ea,_0x267deb);var _0x19e5e7=_0x4a9d93[_0x1cc2c9(0x26a)]['getLevelMaximumGeometricError'](_0x267deb[_0x1cc2c9(0x1db)]),_0x278f0a=_0x267deb[_0x1cc2c9(0x257)],_0x4a4e22=_0x50f4ea[_0x1cc2c9(0x25e)][_0x1cc2c9(0x219)],_0x1ae9ee=_0x50f4ea[_0x1cc2c9(0x259)]['frustum'][_0x1cc2c9(0x1f6)],_0x1769bd=_0x19e5e7*_0x4a4e22/(_0x278f0a*_0x1ae9ee);return _0x50f4ea[_0x1cc2c9(0x1ee)][_0x1cc2c9(0x1f9)]&&(_0x1769bd-=a707_0x2b84b4[_0x1cc2c9(0x1ee)](_0x278f0a,_0x50f4ea[_0x1cc2c9(0x1ee)]['density'])*_0x50f4ea[_0x1cc2c9(0x1ee)][_0x1cc2c9(0x1f3)]),_0x1769bd/=_0x50f4ea[_0x1cc2c9(0x202)],_0x1769bd;}function screenSpaceError2D(_0x397387,_0x4e9a7b,_0x4bbe21){var _0x23c0b9=a707_0x2b7ecc,_0x2903e7=_0x4e9a7b['camera'],_0x20a958=_0x2903e7[_0x23c0b9(0x247)];a707_0x180005(_0x20a958['_offCenterFrustum'])&&(_0x20a958=_0x20a958[_0x23c0b9(0x1dd)]);var _0xcce706=_0x4e9a7b[_0x23c0b9(0x25e)],_0x18e3ce=_0xcce706[_0x23c0b9(0x26e)],_0xb190cc=_0xcce706[_0x23c0b9(0x219)],_0x81d26b=_0x397387[_0x23c0b9(0x26a)][_0x23c0b9(0x1fe)](_0x4bbe21[_0x23c0b9(0x1db)]),_0xa73602=Math[_0x23c0b9(0x1d3)](_0x20a958[_0x23c0b9(0x1ce)]-_0x20a958[_0x23c0b9(0x20b)],_0x20a958[_0x23c0b9(0x201)]-_0x20a958[_0x23c0b9(0x206)])/Math[_0x23c0b9(0x1d3)](_0x18e3ce,_0xb190cc),_0x51c96b=_0x81d26b/_0xa73602;return _0x4e9a7b[_0x23c0b9(0x1ee)][_0x23c0b9(0x1f9)]&&_0x4e9a7b['mode']!==a707_0xfd4383[_0x23c0b9(0x1ef)]&&(_0x51c96b-=a707_0x2b84b4['fog'](_0x4bbe21[_0x23c0b9(0x257)],_0x4e9a7b[_0x23c0b9(0x1ee)][_0x23c0b9(0x241)])*_0x4e9a7b[_0x23c0b9(0x1ee)]['sse']),_0x51c96b/=_0x4e9a7b[_0x23c0b9(0x202)],_0x51c96b;}function addTileToRenderList(_0x3e87c8,_0x1abefe){var _0x3f2060=a707_0x2b7ecc;_0x3e87c8['_tilesToRender'][_0x3f2060(0x26c)](_0x1abefe);}function processTileLoadQueue(_0x24a43a,_0x4d0409){var _0x4f0798=a707_0x2b7ecc,_0x19771c=_0x24a43a['_tileLoadQueueHigh'],_0x205ce8=_0x24a43a['_tileLoadQueueMedium'],_0x5859f1=_0x24a43a['_tileLoadQueueLow'];if(_0x19771c[_0x4f0798(0x1e7)]===0x0&&_0x205ce8[_0x4f0798(0x1e7)]===0x0&&_0x5859f1[_0x4f0798(0x1e7)]===0x0)return;_0x24a43a['_tileReplacementQueue'][_0x4f0798(0x231)](_0x24a43a[_0x4f0798(0x209)]);var _0x5e1b27=a707_0x13d8c4()+_0x24a43a['_loadQueueTimeSlice'],_0x2c6f8a=_0x24a43a[_0x4f0798(0x26a)],_0x4d734b=processSinglePriorityLoadQueue(_0x24a43a,_0x4d0409,_0x2c6f8a,_0x5e1b27,_0x19771c,![]);_0x4d734b=processSinglePriorityLoadQueue(_0x24a43a,_0x4d0409,_0x2c6f8a,_0x5e1b27,_0x205ce8,_0x4d734b),processSinglePriorityLoadQueue(_0x24a43a,_0x4d0409,_0x2c6f8a,_0x5e1b27,_0x5859f1,_0x4d734b);}function sortByLoadPriority(_0x491513,_0x5b06aa){var _0x1a6f0c=a707_0x2b7ecc;return _0x491513[_0x1a6f0c(0x26f)]-_0x5b06aa['_loadPriority'];}function processSinglePriorityLoadQueue(_0x16320d,_0x11ed4e,_0x590472,_0x15b1f3,_0x12e6c4,_0x2659e5){var _0x39d193=a707_0x2b7ecc;_0x590472[_0x39d193(0x1e5)]!==undefined&&_0x12e6c4[_0x39d193(0x24c)](sortByLoadPriority);for(var _0x2e1f04=0x0,_0x1dde37=_0x12e6c4[_0x39d193(0x1e7)];_0x2e1f04<_0x1dde37&&(a707_0x13d8c4()<_0x15b1f3||!_0x2659e5);++_0x2e1f04){var _0x5d3c76=_0x12e6c4[_0x2e1f04];_0x16320d['_tileReplacementQueue'][_0x39d193(0x264)](_0x5d3c76),_0x590472[_0x39d193(0x1dc)](_0x11ed4e,_0x5d3c76),_0x2659e5=!![];}return _0x2659e5;}var scratchRay=new a707_0x4ab7d4(),scratchCartographic=new a707_0x2d7fea(),scratchPosition=new a707_0x5fe178(),scratchArray=[];function updateHeights(_0x2faea7,_0x2a9437){var _0x266596=a707_0x2b7ecc;if(!_0x2faea7[_0x266596(0x234)][_0x266596(0x22f)])return;var _0x4d9764=scratchArray;_0x4d9764[_0x266596(0x1e7)]=0x0;var _0xd10554=_0x2faea7[_0x266596(0x1cc)],_0x5e9b40=a707_0x13d8c4(),_0x491ea2=_0x2faea7[_0x266596(0x1f5)],_0x28d855=_0x5e9b40+_0x491ea2,_0x573cc0=_0x2a9437[_0x266596(0x22b)],_0x257fe3=_0x2a9437[_0x266596(0x24a)],_0x503b7a=_0x2faea7[_0x266596(0x234)][_0x266596(0x246)][_0x266596(0x1cd)],_0x16123e;while(_0xd10554['length']>0x0){var _0x393443=_0xd10554[0x0];if(!a707_0x180005(_0x393443[_0x266596(0x226)])||!a707_0x180005(_0x393443['data'][_0x266596(0x1e8)])){var _0x44b50d=_0x393443[_0x266596(0x1ff)]===_0x2faea7['_lastSelectionFrameNumber']?_0x393443[_0x266596(0x1e1)]:a707_0x4e59fa[_0x266596(0x237)];(_0x44b50d===a707_0x4e59fa['RENDERED']||_0x44b50d===a707_0x4e59fa['CULLED_BUT_NEEDED'])&&_0x4d9764[_0x266596(0x26c)](_0x393443);_0xd10554[_0x266596(0x1d2)](),_0x2faea7[_0x266596(0x273)]=0x0;continue;}var _0x335371=_0x393443[_0x266596(0x1fd)],_0x16ab5b=_0x335371['length'],_0x52403c=![];for(_0x16123e=_0x2faea7[_0x266596(0x273)];_0x16123e<_0x16ab5b;++_0x16123e){var _0x3f4471=_0x335371[_0x16123e],_0xe5018e=_0x393443['data'][_0x266596(0x274)],_0x441fff=a707_0x180005(_0xe5018e)&&_0xe5018e[_0x266596(0x212)]();if(_0x393443['level']>_0x3f4471[_0x266596(0x1db)]&&!_0x441fff){!a707_0x180005(_0x3f4471['positionOnEllipsoidSurface'])&&(_0x3f4471[_0x266596(0x20f)]=a707_0x5fe178[_0x266596(0x242)](_0x3f4471[_0x266596(0x266)][_0x266596(0x1cb)],_0x3f4471['positionCartographic'][_0x266596(0x256)],0x0,_0x503b7a));if(_0x573cc0===a707_0xfd4383[_0x266596(0x25f)]){var _0x30038d=_0x503b7a[_0x266596(0x1ca)](_0x3f4471[_0x266596(0x20f)],scratchRay[_0x266596(0x22e)]),_0x959b4b=_0x503b7a['getSurfaceNormalIntersectionWithZAxis'](_0x3f4471[_0x266596(0x20f)],0x2cec,scratchRay[_0x266596(0x236)]);if(!a707_0x180005(_0x959b4b)){var _0x5df38f;a707_0x180005(_0x393443[_0x266596(0x226)][_0x266596(0x251)])&&(_0x5df38f=_0x393443[_0x266596(0x226)][_0x266596(0x251)][_0x266596(0x203)]);var _0x27ef32=Math[_0x266596(0x23f)](a707_0x3143a5(_0x5df38f,0x0),-0x2cec),_0x30c7c2=a707_0x5fe178[_0x266596(0x1c6)](_0x30038d,Math['abs'](_0x27ef32)+0x1,scratchPosition);a707_0x5fe178[_0x266596(0x1df)](_0x3f4471['positionOnEllipsoidSurface'],_0x30c7c2,scratchRay[_0x266596(0x236)]);}}else a707_0x2d7fea[_0x266596(0x258)](_0x3f4471[_0x266596(0x266)],scratchCartographic),scratchCartographic[_0x266596(0x20a)]=-0x2cec,_0x257fe3['project'](scratchCartographic,scratchPosition),a707_0x5fe178[_0x266596(0x239)](scratchPosition['z'],scratchPosition['x'],scratchPosition['y'],scratchPosition),a707_0x5fe178[_0x266596(0x258)](scratchPosition,scratchRay[_0x266596(0x236)]),a707_0x5fe178[_0x266596(0x258)](a707_0x5fe178[_0x266596(0x21a)],scratchRay[_0x266596(0x22e)]);var _0x4a9f90=_0x393443['data'][_0x266596(0x211)](scratchRay,_0x573cc0,_0x257fe3,![],scratchPosition);a707_0x180005(_0x4a9f90)&&(_0x3f4471[_0x266596(0x23b)](_0x4a9f90),_0x3f4471[_0x266596(0x1db)]=_0x393443['level']);}if(a707_0x13d8c4()>=_0x28d855){_0x52403c=!![];break;}}if(_0x52403c){_0x2faea7['_lastTileIndex']=_0x16123e;break;}else _0x2faea7[_0x266596(0x273)]=0x0,_0xd10554[_0x266596(0x1d2)]();}for(_0x16123e=0x0;_0x16123e<_0x4d9764[_0x266596(0x1e7)];_0x16123e++){_0xd10554[_0x266596(0x26c)](_0x4d9764[_0x16123e]);}}function createRenderCommandsForSelectedTiles(_0x5199c0,_0x5fd2fe){var _0x429315=a707_0x2b7ecc,_0x22d1bc=_0x5199c0[_0x429315(0x26a)],_0x35a85f=_0x5199c0[_0x429315(0x208)];for(var _0x433585=0x0,_0x265547=_0x35a85f['length'];_0x433585<_0x265547;++_0x433585){var _0x40aaec=_0x35a85f[_0x433585];_0x22d1bc[_0x429315(0x1d8)](_0x40aaec,_0x5fd2fe);}}export default QuadtreePrimitive;