var a463_0x4613a7=a463_0x104c;(function(_0x5ca5a7,_0x597988){var _0x16614f=a463_0x104c,_0x368415=_0x5ca5a7();while(!![]){try{var _0x2780db=parseInt(_0x16614f(0x1a0))/0x1+parseInt(_0x16614f(0x162))/0x2+-parseInt(_0x16614f(0x191))/0x3+-parseInt(_0x16614f(0x1a1))/0x4+-parseInt(_0x16614f(0x1ac))/0x5+parseInt(_0x16614f(0x19f))/0x6+parseInt(_0x16614f(0x18e))/0x7*(parseInt(_0x16614f(0x15b))/0x8);if(_0x2780db===_0x597988)break;else _0x368415['push'](_0x368415['shift']());}catch(_0x622d16){_0x368415['push'](_0x368415['shift']());}}}(a463_0x4c3b,0x5e79e));import a463_0x170c39 from'../Core/defined.js';import a463_0x1fa338 from'../Core/Intersect.js';function a463_0x4c3b(){var _0x4a22bd=['push','_wasMinPriorityChild','_priorityProgressiveResolutionScreenSpaceErrorLeaf','_foveatedFactor','parent','immediatelyLoadDesiredLevelOfDetail','distance','getScreenSpaceError','contentExpired','_ancestorWithContentAvailable','length','REPLACE','hasEmptyContent','contentUnloaded','_distanceToCamera','pop','children','_cullRequestsWhileMoving','boundingSphere','_skipLevelOfDetail','_depth','positionWCDeltaMagnitude','priorityDeferred','skipScreenSpaceErrorFactor','debugFreezeFrame','_updatedVisibilityFrame','_requestedFrame','min','OUTSIDE','_minimumPriority','_selectedFrame','foveatedTimeDelay','root','updateVisibility','depth','_maximumScreenSpaceError','124642AoLTra','stack','_shouldSelect','800178iUcSYF','ancestorStack','_maximumPriority','stackMaximumLength','_screenSpaceError','baseScreenSpaceError','foveatedFactor','touch','refine','USE_OPTIMIZATION','_emptyTiles','_requestedTiles','featurePropertiesDirty','hasImplicitContent','3422778DLSGZU','6122NjGlfn','694200BXFmZC','ADD','_visitedFrame','_cache','_centerZDepth','cullRequestsWhileMovingMultiplier','_priorityHolder','_optimChildrenWithinParent','positionWCDeltaMagnitudeLastFrame','camera','visited','3144405pbhnDl','maximumScreenSpaceError','_selectedTilesToStyle','contentVisibility','updatePriority','frameNumber','_hasMixedContent','_selectionDepth','MAX_VALUE','_priorityReverseScreenSpaceError','peek','reverseScreenSpaceError','timeSinceMoved','_stackLength','trim','352aoThXN','sort','contentAvailable','_visible','_refines','_ancestorWithContent','selectTiles','192164EpqMYN','_selectedTiles','hasTilesetContent','ancestorStackMaximumLength','radius','max','updateExpiration','_touchedFrame'];a463_0x4c3b=function(){return _0x4a22bd;};return a463_0x4c3b();}import a463_0x315cb9 from'../Core/ManagedArray.js';import a463_0x22dd58 from'./Cesium3DTileOptimizationHint.js';import a463_0x173844 from'./Cesium3DTileRefine.js';function Cesium3DTilesetTraversal(){}function isVisible(_0x4bca00){return _0x4bca00['_visible']&&_0x4bca00['_inRequestVolume'];}var traversal={'stack':new a463_0x315cb9(),'stackMaximumLength':0x0},emptyTraversal={'stack':new a463_0x315cb9(),'stackMaximumLength':0x0},descendantTraversal={'stack':new a463_0x315cb9(),'stackMaximumLength':0x0},selectionTraversal={'stack':new a463_0x315cb9(),'stackMaximumLength':0x0,'ancestorStack':new a463_0x315cb9(),'ancestorStackMaximumLength':0x0},descendantSelectionDepth=0x2;function a463_0x104c(_0x1c6c09,_0x18732f){var _0x4c3bbe=a463_0x4c3b();return a463_0x104c=function(_0x104cd8,_0x471daa){_0x104cd8=_0x104cd8-0x156;var _0x53ca46=_0x4c3bbe[_0x104cd8];return _0x53ca46;},a463_0x104c(_0x1c6c09,_0x18732f);}Cesium3DTilesetTraversal[a463_0x4613a7(0x161)]=function(_0x4429e9,_0x2a2ed5){var _0xb538ef=a463_0x4613a7;_0x4429e9[_0xb538ef(0x19c)][_0xb538ef(0x174)]=0x0;if(_0x4429e9[_0xb538ef(0x182)])return;_0x4429e9[_0xb538ef(0x163)]['length']=0x0,_0x4429e9[_0xb538ef(0x1ae)]['length']=0x0,_0x4429e9[_0xb538ef(0x19b)]['length']=0x0,_0x4429e9[_0xb538ef(0x1b2)]=![];var _0xf9b05b=_0x4429e9[_0xb538ef(0x18a)];updateTile(_0x4429e9,_0xf9b05b,_0x2a2ed5);if(!isVisible(_0xf9b05b))return;if(_0xf9b05b[_0xb538ef(0x171)](_0x2a2ed5,!![])<=_0x4429e9[_0xb538ef(0x18d)])return;if(!skipLevelOfDetail(_0x4429e9))executeBaseTraversal(_0x4429e9,_0xf9b05b,_0x2a2ed5);else _0x4429e9['immediatelyLoadDesiredLevelOfDetail']?executeSkipTraversal(_0x4429e9,_0xf9b05b,_0x2a2ed5):executeBaseAndSkipTraversal(_0x4429e9,_0xf9b05b,_0x2a2ed5);traversal[_0xb538ef(0x18f)]['trim'](traversal[_0xb538ef(0x194)]),emptyTraversal[_0xb538ef(0x18f)][_0xb538ef(0x15a)](emptyTraversal[_0xb538ef(0x194)]),descendantTraversal[_0xb538ef(0x18f)][_0xb538ef(0x15a)](descendantTraversal[_0xb538ef(0x194)]),selectionTraversal[_0xb538ef(0x18f)][_0xb538ef(0x15a)](selectionTraversal['stackMaximumLength']),selectionTraversal[_0xb538ef(0x192)][_0xb538ef(0x15a)](selectionTraversal['ancestorStackMaximumLength']);var _0x26db9e=_0x4429e9[_0xb538ef(0x19c)],_0x126fb9=_0x26db9e['length'];for(var _0x560dff=0x0;_0x560dff<_0x126fb9;++_0x560dff){_0x26db9e[_0x560dff][_0xb538ef(0x1b0)]();}};function executeBaseTraversal(_0x4a079b,_0x35c0bc,_0x3fe410){var _0x35c20d=a463_0x4613a7,_0x3e921b=_0x4a079b[_0x35c20d(0x18d)],_0x3b54dd=_0x4a079b[_0x35c20d(0x18d)];executeTraversal(_0x4a079b,_0x35c0bc,_0x3e921b,_0x3b54dd,_0x3fe410);}function executeSkipTraversal(_0x2dac1b,_0x24efbd,_0x87496){var _0x4f3a23=a463_0x4613a7,_0xe89495=Number['MAX_VALUE'],_0x45fd69=_0x2dac1b[_0x4f3a23(0x18d)];executeTraversal(_0x2dac1b,_0x24efbd,_0xe89495,_0x45fd69,_0x87496),traverseAndSelect(_0x2dac1b,_0x24efbd,_0x87496);}function executeBaseAndSkipTraversal(_0x1f3a6f,_0x3473fd,_0x156cac){var _0x16dc8f=a463_0x4613a7,_0x57c78d=Math['max'](_0x1f3a6f[_0x16dc8f(0x196)],_0x1f3a6f['maximumScreenSpaceError']),_0x2559e6=_0x1f3a6f[_0x16dc8f(0x1ad)];executeTraversal(_0x1f3a6f,_0x3473fd,_0x57c78d,_0x2559e6,_0x156cac),traverseAndSelect(_0x1f3a6f,_0x3473fd,_0x156cac);}function skipLevelOfDetail(_0x4d654e){var _0x301791=a463_0x4613a7;return _0x4d654e[_0x301791(0x17d)];}function addEmptyTile(_0x34ae40,_0x5129ea){_0x34ae40['_emptyTiles']['push'](_0x5129ea);}function selectTile(_0x509b17,_0x2581b8,_0x44a260){var _0x451f4f=a463_0x4613a7;if(_0x2581b8[_0x451f4f(0x1af)](_0x44a260)!==a463_0x1fa338[_0x451f4f(0x186)]){var _0x59e1dd=_0x2581b8['content'];if(_0x59e1dd[_0x451f4f(0x19d)])_0x59e1dd[_0x451f4f(0x19d)]=![],_0x2581b8['lastStyleTime']=0x0,_0x509b17['_selectedTilesToStyle']['push'](_0x2581b8);else _0x2581b8[_0x451f4f(0x188)]<_0x44a260[_0x451f4f(0x1b1)]-0x1&&_0x509b17[_0x451f4f(0x1ae)][_0x451f4f(0x16a)](_0x2581b8);_0x2581b8[_0x451f4f(0x188)]=_0x44a260[_0x451f4f(0x1b1)],_0x509b17[_0x451f4f(0x163)]['push'](_0x2581b8);}}function selectDescendants(_0x3640fd,_0x412169,_0x4b0025){var _0x5f514f=a463_0x4613a7,_0x4a89e5=descendantTraversal[_0x5f514f(0x18f)];_0x4a89e5[_0x5f514f(0x16a)](_0x412169);while(_0x4a89e5[_0x5f514f(0x174)]>0x0){descendantTraversal[_0x5f514f(0x194)]=Math['max'](descendantTraversal[_0x5f514f(0x194)],_0x4a89e5[_0x5f514f(0x174)]);var _0x436ae1=_0x4a89e5[_0x5f514f(0x179)](),_0x123f71=_0x436ae1[_0x5f514f(0x17a)],_0x42a86c=_0x123f71['length'];for(var _0x1c5efe=0x0;_0x1c5efe<_0x42a86c;++_0x1c5efe){var _0x3205aa=_0x123f71[_0x1c5efe];if(isVisible(_0x3205aa)){if(_0x3205aa[_0x5f514f(0x15d)])updateTile(_0x3640fd,_0x3205aa,_0x4b0025),touchTile(_0x3640fd,_0x3205aa,_0x4b0025),selectTile(_0x3640fd,_0x3205aa,_0x4b0025);else _0x3205aa[_0x5f514f(0x17e)]-_0x412169[_0x5f514f(0x17e)]<descendantSelectionDepth&&_0x4a89e5[_0x5f514f(0x16a)](_0x3205aa);}}}}function selectDesiredTile(_0x2bd522,_0x224f87,_0x38faa3){var _0x230d22=a463_0x4613a7;if(!skipLevelOfDetail(_0x2bd522)){_0x224f87[_0x230d22(0x15d)]&&selectTile(_0x2bd522,_0x224f87,_0x38faa3);return;}var _0x4ae8bb=_0x224f87[_0x230d22(0x15d)]?_0x224f87:_0x224f87['_ancestorWithContentAvailable'];a463_0x170c39(_0x4ae8bb)?_0x4ae8bb[_0x230d22(0x190)]=!![]:selectDescendants(_0x2bd522,_0x224f87,_0x38faa3);}function visitTile(_0x5b44db,_0x2b07ae,_0x12a531){var _0x42a607=a463_0x4613a7;++_0x5b44db['_statistics'][_0x42a607(0x1ab)],_0x2b07ae[_0x42a607(0x1a3)]=_0x12a531['frameNumber'];}function touchTile(_0x2fabf9,_0x2e01bb,_0x2181b0){var _0x21b7ec=a463_0x4613a7;if(_0x2e01bb[_0x21b7ec(0x169)]===_0x2181b0['frameNumber'])return;_0x2fabf9[_0x21b7ec(0x1a4)][_0x21b7ec(0x198)](_0x2e01bb),_0x2e01bb['_touchedFrame']=_0x2181b0[_0x21b7ec(0x1b1)];}function updateMinimumMaximumPriority(_0xcd85f8,_0x167297){var _0x4ca2f4=a463_0x4613a7;_0xcd85f8[_0x4ca2f4(0x193)]['distance']=Math['max'](_0x167297[_0x4ca2f4(0x1a7)][_0x4ca2f4(0x178)],_0xcd85f8[_0x4ca2f4(0x193)]['distance']),_0xcd85f8[_0x4ca2f4(0x187)][_0x4ca2f4(0x170)]=Math[_0x4ca2f4(0x185)](_0x167297['_priorityHolder'][_0x4ca2f4(0x178)],_0xcd85f8['_minimumPriority'][_0x4ca2f4(0x170)]),_0xcd85f8['_maximumPriority'][_0x4ca2f4(0x18c)]=Math[_0x4ca2f4(0x167)](_0x167297[_0x4ca2f4(0x17e)],_0xcd85f8['_maximumPriority'][_0x4ca2f4(0x18c)]),_0xcd85f8['_minimumPriority']['depth']=Math[_0x4ca2f4(0x185)](_0x167297[_0x4ca2f4(0x17e)],_0xcd85f8[_0x4ca2f4(0x187)]['depth']),_0xcd85f8[_0x4ca2f4(0x193)][_0x4ca2f4(0x197)]=Math['max'](_0x167297[_0x4ca2f4(0x1a7)]['_foveatedFactor'],_0xcd85f8['_maximumPriority'][_0x4ca2f4(0x197)]),_0xcd85f8['_minimumPriority']['foveatedFactor']=Math[_0x4ca2f4(0x185)](_0x167297['_priorityHolder']['_foveatedFactor'],_0xcd85f8[_0x4ca2f4(0x187)][_0x4ca2f4(0x197)]),_0xcd85f8[_0x4ca2f4(0x193)][_0x4ca2f4(0x157)]=Math[_0x4ca2f4(0x167)](_0x167297[_0x4ca2f4(0x1b5)],_0xcd85f8[_0x4ca2f4(0x193)]['reverseScreenSpaceError']),_0xcd85f8[_0x4ca2f4(0x187)][_0x4ca2f4(0x157)]=Math['min'](_0x167297[_0x4ca2f4(0x1b5)],_0xcd85f8[_0x4ca2f4(0x187)][_0x4ca2f4(0x157)]);}function isOnScreenLongEnough(_0x4921cf,_0x5d526c,_0x409d96){var _0x586148=a463_0x4613a7;if(!_0x4921cf[_0x586148(0x17b)])return!![];var _0x34b8c1=_0x5d526c[_0x586148(0x17c)],_0x260450=Math[_0x586148(0x167)](_0x34b8c1[_0x586148(0x166)]*0x2,0x1),_0x46f848=_0x409d96['camera'],_0x3df2c8=_0x46f848['positionWCDeltaMagnitude']!==0x0?_0x46f848[_0x586148(0x17f)]:_0x46f848[_0x586148(0x1a9)],_0x41d7b9=_0x4921cf[_0x586148(0x1a6)]*_0x3df2c8/_0x260450;return _0x41d7b9<0x1;}function loadTile(_0x5b7761,_0x4f0e8a,_0xb2d668){var _0x5bcebb=a463_0x4613a7;if(_0x4f0e8a[_0x5bcebb(0x184)]===_0xb2d668[_0x5bcebb(0x1b1)]||!hasUnloadedContent(_0x4f0e8a)&&!_0x4f0e8a[_0x5bcebb(0x172)])return;if(!isOnScreenLongEnough(_0x5b7761,_0x4f0e8a,_0xb2d668))return;var _0x1500cf=_0xb2d668[_0x5bcebb(0x1aa)][_0x5bcebb(0x158)]<_0x5b7761[_0x5bcebb(0x189)];if(_0x4f0e8a[_0x5bcebb(0x180)]&&_0x1500cf)return;_0x4f0e8a[_0x5bcebb(0x184)]=_0xb2d668['frameNumber'],_0x5b7761[_0x5bcebb(0x19c)][_0x5bcebb(0x16a)](_0x4f0e8a);}function updateVisibility(_0x4b2753,_0x120a66,_0xd4a236){var _0x5b1de0=a463_0x4613a7;if(_0x120a66[_0x5b1de0(0x183)]===_0x4b2753[_0x5b1de0(0x183)])return;_0x120a66[_0x5b1de0(0x18b)](_0xd4a236),_0x120a66[_0x5b1de0(0x183)]=_0x4b2753[_0x5b1de0(0x183)];}function anyChildrenVisible(_0x331cf8,_0x146d29,_0x1290e2){var _0x524142=a463_0x4613a7,_0x5239da=![],_0x4a3d1a=_0x146d29[_0x524142(0x17a)],_0x3aa86b=_0x4a3d1a['length'];for(var _0x196e68=0x0;_0x196e68<_0x3aa86b;++_0x196e68){var _0x5719e1=_0x4a3d1a[_0x196e68];updateVisibility(_0x331cf8,_0x5719e1,_0x1290e2),_0x5239da=_0x5239da||isVisible(_0x5719e1);}return _0x5239da;}function meetsScreenSpaceErrorEarly(_0xe17224,_0xce6c15,_0x1eea8c){var _0x524c63=a463_0x4613a7,_0x3f4555=_0xce6c15['parent'];if(!a463_0x170c39(_0x3f4555)||_0x3f4555['hasTilesetContent']||_0x3f4555[_0x524c63(0x19e)]||_0x3f4555['refine']!==a463_0x173844[_0x524c63(0x1a2)])return![];return _0xce6c15[_0x524c63(0x171)](_0x1eea8c,!![])<=_0xe17224[_0x524c63(0x18d)];}function updateTileVisibility(_0x26c952,_0x41f774,_0x2f9ddd){var _0x57535c=a463_0x4613a7;updateVisibility(_0x26c952,_0x41f774,_0x2f9ddd);if(!isVisible(_0x41f774))return;var _0x82f551=_0x41f774[_0x57535c(0x17a)][_0x57535c(0x174)]>0x0;if((_0x41f774[_0x57535c(0x164)]||_0x41f774[_0x57535c(0x19e)])&&_0x82f551){var _0x174f22=_0x41f774[_0x57535c(0x17a)][0x0];updateTileVisibility(_0x26c952,_0x174f22,_0x2f9ddd),_0x41f774['_visible']=_0x174f22[_0x57535c(0x15e)];return;}if(meetsScreenSpaceErrorEarly(_0x26c952,_0x41f774,_0x2f9ddd)){_0x41f774[_0x57535c(0x15e)]=![];return;}var _0x5e3e14=_0x41f774[_0x57535c(0x199)]===a463_0x173844[_0x57535c(0x175)],_0x1ff015=_0x41f774[_0x57535c(0x1a8)]===a463_0x22dd58[_0x57535c(0x19a)];if(_0x5e3e14&&_0x1ff015&&_0x82f551){if(!anyChildrenVisible(_0x26c952,_0x41f774,_0x2f9ddd)){++_0x26c952['_statistics']['numberOfTilesCulledWithChildrenUnion'],_0x41f774[_0x57535c(0x15e)]=![];return;}}}function updateTile(_0xca63ba,_0x2ffc35,_0x4e2b00){var _0x59bdda=a463_0x4613a7;updateTileVisibility(_0xca63ba,_0x2ffc35,_0x4e2b00),_0x2ffc35[_0x59bdda(0x168)](),_0x2ffc35[_0x59bdda(0x16b)]=![],_0x2ffc35['_priorityHolder']=_0x2ffc35,updateMinimumMaximumPriority(_0xca63ba,_0x2ffc35),_0x2ffc35[_0x59bdda(0x190)]=![],_0x2ffc35['_finalResolution']=!![];}function updateTileAncestorContentLinks(_0x73950a,_0x21ff1d){var _0x48db31=a463_0x4613a7;_0x73950a[_0x48db31(0x160)]=undefined,_0x73950a['_ancestorWithContentAvailable']=undefined;var _0x3f3efc=_0x73950a['parent'];if(a463_0x170c39(_0x3f3efc)){var _0x270ce7=!hasUnloadedContent(_0x3f3efc)||_0x3f3efc[_0x48db31(0x184)]===_0x21ff1d[_0x48db31(0x1b1)];_0x73950a['_ancestorWithContent']=_0x270ce7?_0x3f3efc:_0x3f3efc['_ancestorWithContent'],_0x73950a[_0x48db31(0x173)]=_0x3f3efc[_0x48db31(0x15d)]?_0x3f3efc:_0x3f3efc[_0x48db31(0x173)];}}function hasEmptyContent(_0x56d15d){var _0x5d996a=a463_0x4613a7;return _0x56d15d[_0x5d996a(0x176)]||_0x56d15d[_0x5d996a(0x164)]||_0x56d15d[_0x5d996a(0x19e)];}function hasUnloadedContent(_0x51e016){var _0xd0d07d=a463_0x4613a7;return!hasEmptyContent(_0x51e016)&&_0x51e016[_0xd0d07d(0x177)];}function reachedSkippingThreshold(_0x4b79ab,_0x5ea7f6){var _0x284a24=a463_0x4613a7,_0x1ac6e4=_0x5ea7f6[_0x284a24(0x160)];return!_0x4b79ab[_0x284a24(0x16f)]&&(_0x5ea7f6[_0x284a24(0x16c)]||a463_0x170c39(_0x1ac6e4)&&_0x5ea7f6[_0x284a24(0x195)]<_0x1ac6e4['_screenSpaceError']/_0x4b79ab[_0x284a24(0x181)]&&_0x5ea7f6[_0x284a24(0x17e)]>_0x1ac6e4[_0x284a24(0x17e)]+_0x4b79ab['skipLevels']);}function sortChildrenByDistanceToCamera(_0x3e1ea0,_0x14af0d){var _0x292e95=a463_0x4613a7;if(_0x14af0d[_0x292e95(0x178)]===0x0&&_0x3e1ea0[_0x292e95(0x178)]===0x0)return _0x14af0d[_0x292e95(0x1a5)]-_0x3e1ea0[_0x292e95(0x1a5)];return _0x14af0d[_0x292e95(0x178)]-_0x3e1ea0['_distanceToCamera'];}function updateAndPushChildren(_0xbe0e21,_0x3bab5b,_0xe01cd7,_0x3d6a92){var _0x348f58=a463_0x4613a7,_0x4f834e,_0x2dc68b=_0x3bab5b[_0x348f58(0x199)]===a463_0x173844['REPLACE'],_0x37173f=_0x3bab5b[_0x348f58(0x17a)],_0x3b557e=_0x37173f[_0x348f58(0x174)];for(_0x4f834e=0x0;_0x4f834e<_0x3b557e;++_0x4f834e){updateTile(_0xbe0e21,_0x37173f[_0x4f834e],_0x3d6a92);}_0x37173f[_0x348f58(0x15c)](sortChildrenByDistanceToCamera);var _0x193683=!skipLevelOfDetail(_0xbe0e21)&&_0x2dc68b&&!hasEmptyContent(_0x3bab5b),_0x1748c2=!![],_0x362aa7=![],_0x35a61a=-0x1,_0x5c5f0a=Number[_0x348f58(0x1b4)],_0x16ba61;for(_0x4f834e=0x0;_0x4f834e<_0x3b557e;++_0x4f834e){_0x16ba61=_0x37173f[_0x4f834e];if(isVisible(_0x16ba61))_0xe01cd7[_0x348f58(0x16a)](_0x16ba61),_0x16ba61[_0x348f58(0x16d)]<_0x5c5f0a&&(_0x35a61a=_0x4f834e,_0x5c5f0a=_0x16ba61[_0x348f58(0x16d)]),_0x362aa7=!![];else(_0x193683||_0xbe0e21['loadSiblings'])&&(_0x16ba61[_0x348f58(0x16d)]<_0x5c5f0a&&(_0x35a61a=_0x4f834e,_0x5c5f0a=_0x16ba61['_foveatedFactor']),loadTile(_0xbe0e21,_0x16ba61,_0x3d6a92),touchTile(_0xbe0e21,_0x16ba61,_0x3d6a92));if(_0x193683){var _0x54c311;if(!_0x16ba61['_inRequestVolume'])_0x54c311=![];else hasEmptyContent(_0x16ba61)?_0x54c311=executeEmptyTraversal(_0xbe0e21,_0x16ba61,_0x3d6a92):_0x54c311=_0x16ba61[_0x348f58(0x15d)];_0x1748c2=_0x1748c2&&_0x54c311;}}!_0x362aa7&&(_0x1748c2=![]);if(_0x35a61a!==-0x1&&!skipLevelOfDetail(_0xbe0e21)&&_0x2dc68b){var _0xa2553e=_0x37173f[_0x35a61a];_0xa2553e[_0x348f58(0x16b)]=!![];var _0x5b0940=(_0x3bab5b[_0x348f58(0x16b)]||_0x3bab5b===_0xbe0e21[_0x348f58(0x18a)])&&_0x5c5f0a<=_0x3bab5b[_0x348f58(0x1a7)][_0x348f58(0x16d)]?_0x3bab5b[_0x348f58(0x1a7)]:_0x3bab5b;_0x5b0940[_0x348f58(0x16d)]=Math[_0x348f58(0x185)](_0xa2553e[_0x348f58(0x16d)],_0x5b0940[_0x348f58(0x16d)]),_0x5b0940[_0x348f58(0x178)]=Math[_0x348f58(0x185)](_0xa2553e[_0x348f58(0x178)],_0x5b0940['_distanceToCamera']);for(_0x4f834e=0x0;_0x4f834e<_0x3b557e;++_0x4f834e){_0x16ba61=_0x37173f[_0x4f834e],_0x16ba61[_0x348f58(0x1a7)]=_0x5b0940;}}return _0x1748c2;}function inBaseTraversal(_0x10414e,_0xfec334,_0x207c14){var _0xf9b649=a463_0x4613a7;if(!skipLevelOfDetail(_0x10414e))return!![];if(_0x10414e[_0xf9b649(0x16f)])return![];if(!a463_0x170c39(_0xfec334[_0xf9b649(0x160)]))return!![];if(_0xfec334['_screenSpaceError']===0x0)return _0xfec334[_0xf9b649(0x16e)][_0xf9b649(0x195)]>_0x207c14;return _0xfec334[_0xf9b649(0x195)]>_0x207c14;}function canTraverse(_0x445c2c,_0x48fa0e){var _0x4f9a4a=a463_0x4613a7;if(_0x48fa0e['children'][_0x4f9a4a(0x174)]===0x0)return![];if(_0x48fa0e['hasTilesetContent']||_0x48fa0e[_0x4f9a4a(0x19e)])return!_0x48fa0e[_0x4f9a4a(0x172)];return _0x48fa0e[_0x4f9a4a(0x195)]>_0x445c2c[_0x4f9a4a(0x18d)];}function executeTraversal(_0x168a62,_0x17c3bf,_0x38432c,_0x2d400c,_0x326f0d){var _0x42e08d=a463_0x4613a7,_0xbc6731=traversal[_0x42e08d(0x18f)];_0xbc6731['push'](_0x17c3bf);while(_0xbc6731[_0x42e08d(0x174)]>0x0){traversal['stackMaximumLength']=Math[_0x42e08d(0x167)](traversal[_0x42e08d(0x194)],_0xbc6731['length']);var _0x2149c6=_0xbc6731['pop']();updateTileAncestorContentLinks(_0x2149c6,_0x326f0d);var _0x38dbb4=inBaseTraversal(_0x168a62,_0x2149c6,_0x38432c),_0x2ac0bf=_0x2149c6[_0x42e08d(0x199)]===a463_0x173844[_0x42e08d(0x1a2)],_0x28a762=_0x2149c6[_0x42e08d(0x199)]===a463_0x173844['REPLACE'],_0xc5693b=_0x2149c6[_0x42e08d(0x16e)],_0x2fed50=!a463_0x170c39(_0xc5693b)||_0xc5693b['_refines'],_0x8551ea=![];canTraverse(_0x168a62,_0x2149c6)&&(_0x8551ea=updateAndPushChildren(_0x168a62,_0x2149c6,_0xbc6731,_0x326f0d)&&_0x2fed50);var _0x4ef5e3=!_0x8551ea&&_0x2fed50;if(hasEmptyContent(_0x2149c6))addEmptyTile(_0x168a62,_0x2149c6,_0x326f0d),loadTile(_0x168a62,_0x2149c6,_0x326f0d),_0x4ef5e3&&selectDesiredTile(_0x168a62,_0x2149c6,_0x326f0d);else{if(_0x2ac0bf)selectDesiredTile(_0x168a62,_0x2149c6,_0x326f0d),loadTile(_0x168a62,_0x2149c6,_0x326f0d);else{if(_0x28a762){if(_0x38dbb4)loadTile(_0x168a62,_0x2149c6,_0x326f0d),_0x4ef5e3&&selectDesiredTile(_0x168a62,_0x2149c6,_0x326f0d);else{if(_0x4ef5e3)selectDesiredTile(_0x168a62,_0x2149c6,_0x326f0d),loadTile(_0x168a62,_0x2149c6,_0x326f0d);else reachedSkippingThreshold(_0x168a62,_0x2149c6)&&loadTile(_0x168a62,_0x2149c6,_0x326f0d);}}}}visitTile(_0x168a62,_0x2149c6,_0x326f0d),touchTile(_0x168a62,_0x2149c6,_0x326f0d),_0x2149c6[_0x42e08d(0x15f)]=_0x8551ea;}}function executeEmptyTraversal(_0x4114a2,_0x48e283,_0xe768af){var _0x5a9983=a463_0x4613a7,_0xcde90a=!![],_0x1c8950=emptyTraversal[_0x5a9983(0x18f)];_0x1c8950[_0x5a9983(0x16a)](_0x48e283);while(_0x1c8950[_0x5a9983(0x174)]>0x0){emptyTraversal[_0x5a9983(0x194)]=Math[_0x5a9983(0x167)](emptyTraversal[_0x5a9983(0x194)],_0x1c8950[_0x5a9983(0x174)]);var _0x2dca23=_0x1c8950['pop'](),_0x48f118=_0x2dca23[_0x5a9983(0x17a)],_0x4ed562=_0x48f118['length'],_0x214e56=hasEmptyContent(_0x2dca23),_0x1416ca=_0x214e56&&canTraverse(_0x4114a2,_0x2dca23),_0x2c4cd0=_0x214e56&&_0x2dca23[_0x5a9983(0x17a)][_0x5a9983(0x174)]===0x0;!_0x1416ca&&!_0x2dca23[_0x5a9983(0x15d)]&&!_0x2c4cd0&&(_0xcde90a=![]);updateTile(_0x4114a2,_0x2dca23,_0xe768af);!isVisible(_0x2dca23)&&(loadTile(_0x4114a2,_0x2dca23,_0xe768af),touchTile(_0x4114a2,_0x2dca23,_0xe768af));if(_0x1416ca)for(var _0x3b2b56=0x0;_0x3b2b56<_0x4ed562;++_0x3b2b56){var _0x14e56b=_0x48f118[_0x3b2b56];_0x1c8950[_0x5a9983(0x16a)](_0x14e56b);}}return _0xcde90a;}function traverseAndSelect(_0x26cc94,_0x487422,_0x42f489){var _0x318572=a463_0x4613a7,_0x23ca33=selectionTraversal[_0x318572(0x18f)],_0x10613c=selectionTraversal[_0x318572(0x192)],_0x485c46;_0x23ca33[_0x318572(0x16a)](_0x487422);while(_0x23ca33['length']>0x0||_0x10613c[_0x318572(0x174)]>0x0){selectionTraversal['stackMaximumLength']=Math[_0x318572(0x167)](selectionTraversal[_0x318572(0x194)],_0x23ca33['length']),selectionTraversal[_0x318572(0x165)]=Math['max'](selectionTraversal[_0x318572(0x165)],_0x10613c[_0x318572(0x174)]);if(_0x10613c[_0x318572(0x174)]>0x0){var _0x1d2d48=_0x10613c[_0x318572(0x156)]();if(_0x1d2d48[_0x318572(0x159)]===_0x23ca33[_0x318572(0x174)]){_0x10613c[_0x318572(0x179)]();_0x1d2d48!==_0x485c46&&(_0x1d2d48['_finalResolution']=![]);selectTile(_0x26cc94,_0x1d2d48,_0x42f489);continue;}}var _0x52c517=_0x23ca33[_0x318572(0x179)]();if(!a463_0x170c39(_0x52c517))continue;var _0x394f4d=_0x52c517['refine']===a463_0x173844[_0x318572(0x1a2)],_0x46496a=_0x52c517[_0x318572(0x190)],_0x14131a=_0x52c517[_0x318572(0x17a)],_0x31fa60=_0x14131a[_0x318572(0x174)],_0x394992=canTraverse(_0x26cc94,_0x52c517);if(_0x46496a){if(_0x394f4d)selectTile(_0x26cc94,_0x52c517,_0x42f489);else{_0x52c517[_0x318572(0x1b3)]=_0x10613c[_0x318572(0x174)];_0x52c517['_selectionDepth']>0x0&&(_0x26cc94[_0x318572(0x1b2)]=!![]);_0x485c46=_0x52c517;if(!_0x394992){selectTile(_0x26cc94,_0x52c517,_0x42f489);continue;}_0x10613c[_0x318572(0x16a)](_0x52c517),_0x52c517[_0x318572(0x159)]=_0x23ca33[_0x318572(0x174)];}}if(_0x394992)for(var _0x6987da=0x0;_0x6987da<_0x31fa60;++_0x6987da){var _0x5bc1c5=_0x14131a[_0x6987da];isVisible(_0x5bc1c5)&&_0x23ca33['push'](_0x5bc1c5);}}}export default Cesium3DTilesetTraversal;