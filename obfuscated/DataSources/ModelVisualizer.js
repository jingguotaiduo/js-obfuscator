function a327_0x96f5(_0x41370f,_0x19410b){var _0x20c3b8=a327_0x20c3();return a327_0x96f5=function(_0x96f54c,_0x321d75){_0x96f54c=_0x96f54c-0x8f;var _0x34fd57=_0x20c3b8[_0x96f54c];return _0x34fd57;},a327_0x96f5(_0x41370f,_0x19410b);}var a327_0x882128=a327_0x96f5;(function(_0x7f0070,_0x193d25){var _0x43146d=a327_0x96f5,_0x14eace=_0x7f0070();while(!![]){try{var _0x4c6869=-parseInt(_0x43146d(0xaf))/0x1*(-parseInt(_0x43146d(0x8f))/0x2)+parseInt(_0x43146d(0xab))/0x3*(parseInt(_0x43146d(0xb1))/0x4)+parseInt(_0x43146d(0xe4))/0x5*(parseInt(_0x43146d(0xc8))/0x6)+-parseInt(_0x43146d(0xc9))/0x7*(-parseInt(_0x43146d(0x90))/0x8)+-parseInt(_0x43146d(0xd0))/0x9+-parseInt(_0x43146d(0xe1))/0xa*(-parseInt(_0x43146d(0xae))/0xb)+-parseInt(_0x43146d(0xa1))/0xc;if(_0x4c6869===_0x193d25)break;else _0x14eace['push'](_0x14eace['shift']());}catch(_0x35ff88){_0x14eace['push'](_0x14eace['shift']());}}}(a327_0x20c3,0x52537));import a327_0x100dee from'../Core/AssociativeArray.js';import a327_0x32ac29 from'../Core/BoundingSphere.js';import a327_0x171e23 from'../Core/Cartesian2.js';import a327_0x10e8b5 from'../Core/Color.js';import a327_0x2a8b33 from'../Core/defined.js';import a327_0x3e48cd from'../Core/destroyObject.js';import a327_0x27f612 from'../Core/DeveloperError.js';import a327_0x59a73f from'../Core/Matrix4.js';import a327_0x1d6bfb from'../Core/Resource.js';import a327_0x261696 from'../Scene/ColorBlendMode.js';import a327_0x4ae8e4 from'../Scene/HeightReference.js';import a327_0x47084c from'../Scene/Model.js';import a327_0x3490cc from'../Scene/ModelAnimationLoop.js';import a327_0x23d283 from'../Scene/ShadowMode.js';import a327_0x3e3da8 from'./BoundingSphereState.js';import a327_0x221eb3 from'./Property.js';var defaultScale=0x1,defaultMinimumPixelSize=0x0,defaultIncrementallyLoadTextures=!![],defaultClampAnimations=!![],defaultShadows=a327_0x23d283[a327_0x882128(0xb2)],defaultHeightReference=a327_0x4ae8e4[a327_0x882128(0xda)],defaultSilhouetteColor=a327_0x10e8b5['RED'],defaultSilhouetteSize=0x0,defaultColor=a327_0x10e8b5['WHITE'],defaultColorBlendMode=a327_0x261696[a327_0x882128(0xc4)],defaultColorBlendAmount=0.5,defaultImageBasedLightingFactor=new a327_0x171e23(0x1,0x1),modelMatrixScratch=new a327_0x59a73f(),nodeMatrixScratch=new a327_0x59a73f();function ModelVisualizer(_0x5cc02c,_0x1e0c33){var _0x608497=a327_0x882128;if(!a327_0x2a8b33(_0x5cc02c))throw new a327_0x27f612(_0x608497(0xd7));if(!a327_0x2a8b33(_0x1e0c33))throw new a327_0x27f612('entityCollection\x20is\x20required.');_0x1e0c33[_0x608497(0xc7)][_0x608497(0xcb)](ModelVisualizer[_0x608497(0xef)]['_onCollectionChanged'],this),this[_0x608497(0xa8)]=_0x5cc02c,this[_0x608497(0xba)]=_0x5cc02c[_0x608497(0xd2)],this[_0x608497(0xb5)]=_0x1e0c33,this[_0x608497(0x9c)]={},this['_entitiesToVisualize']=new a327_0x100dee(),this['_onCollectionChanged'](_0x1e0c33,_0x1e0c33[_0x608497(0xe8)],[],[]);}ModelVisualizer[a327_0x882128(0xef)][a327_0x882128(0xb7)]=function(_0x3f8c16){var _0x3a0a8d=a327_0x882128;if(!a327_0x2a8b33(_0x3f8c16))throw new a327_0x27f612(_0x3a0a8d(0xd1));var _0x5a1621=this[_0x3a0a8d(0xea)][_0x3a0a8d(0xe8)],_0x4a083b=this['_modelHash'],_0x3b8da0=this[_0x3a0a8d(0xba)];for(var _0x442c61=0x0,_0x1c3267=_0x5a1621[_0x3a0a8d(0xec)];_0x442c61<_0x1c3267;_0x442c61++){var _0xc018b5=_0x5a1621[_0x442c61],_0x33cbf8=_0xc018b5[_0x3a0a8d(0x91)],_0x580b7d,_0x57f06e=_0x4a083b[_0xc018b5['id']],_0x4a33e3=_0xc018b5[_0x3a0a8d(0xbd)]&&_0xc018b5['isAvailable'](_0x3f8c16)&&a327_0x221eb3['getValueOrDefault'](_0x33cbf8[_0x3a0a8d(0xe6)],_0x3f8c16,!![]),_0x253ea4;_0x4a33e3&&(_0x253ea4=_0xc018b5[_0x3a0a8d(0x92)](_0x3f8c16,modelMatrixScratch),_0x580b7d=a327_0x1d6bfb[_0x3a0a8d(0xb8)](a327_0x221eb3[_0x3a0a8d(0xa6)](_0x33cbf8[_0x3a0a8d(0xbb)],_0x3f8c16)),_0x4a33e3=a327_0x2a8b33(_0x253ea4)&&a327_0x2a8b33(_0x580b7d));if(!_0x4a33e3){a327_0x2a8b33(_0x57f06e)&&(_0x57f06e[_0x3a0a8d(0xc6)]['show']=![]);continue;}var _0xe2986b=a327_0x2a8b33(_0x57f06e)?_0x57f06e[_0x3a0a8d(0xc6)]:undefined;(!a327_0x2a8b33(_0xe2986b)||_0x580b7d[_0x3a0a8d(0xaa)]!==_0x57f06e[_0x3a0a8d(0xaa)])&&(a327_0x2a8b33(_0xe2986b)&&(_0x3b8da0[_0x3a0a8d(0xad)](_0xe2986b),delete _0x4a083b[_0xc018b5['id']]),_0xe2986b=a327_0x47084c[_0x3a0a8d(0xdd)]({'url':_0x580b7d,'incrementallyLoadTextures':a327_0x221eb3['getValueOrDefault'](_0x33cbf8[_0x3a0a8d(0xe0)],_0x3f8c16,defaultIncrementallyLoadTextures),'scene':this['_scene']}),_0xe2986b['id']=_0xc018b5,_0x3b8da0[_0x3a0a8d(0xdb)](_0xe2986b),_0x57f06e={'modelPrimitive':_0xe2986b,'url':_0x580b7d[_0x3a0a8d(0xaa)],'animationsRunning':![],'nodeTransformationsScratch':{},'articulationsScratch':{},'loadFail':![]},_0x4a083b[_0xc018b5['id']]=_0x57f06e,checkModelLoad(_0xe2986b,_0xc018b5,_0x4a083b));_0xe2986b[_0x3a0a8d(0xdc)]=!![],_0xe2986b['scale']=a327_0x221eb3[_0x3a0a8d(0xb3)](_0x33cbf8[_0x3a0a8d(0xce)],_0x3f8c16,defaultScale),_0xe2986b[_0x3a0a8d(0xe7)]=a327_0x221eb3[_0x3a0a8d(0xb3)](_0x33cbf8[_0x3a0a8d(0x99)],_0x3f8c16,defaultMinimumPixelSize),_0xe2986b[_0x3a0a8d(0x9a)]=a327_0x221eb3[_0x3a0a8d(0xa6)](_0x33cbf8[_0x3a0a8d(0xe5)],_0x3f8c16),_0xe2986b[_0x3a0a8d(0xa7)]=a327_0x59a73f['clone'](_0x253ea4,_0xe2986b['modelMatrix']),_0xe2986b[_0x3a0a8d(0x98)]=a327_0x221eb3[_0x3a0a8d(0xb3)](_0x33cbf8['_shadows'],_0x3f8c16,defaultShadows),_0xe2986b['heightReference']=a327_0x221eb3['getValueOrDefault'](_0x33cbf8[_0x3a0a8d(0xb9)],_0x3f8c16,defaultHeightReference),_0xe2986b[_0x3a0a8d(0xb0)]=a327_0x221eb3[_0x3a0a8d(0xa6)](_0x33cbf8[_0x3a0a8d(0xe9)],_0x3f8c16),_0xe2986b['silhouetteColor']=a327_0x221eb3['getValueOrDefault'](_0x33cbf8[_0x3a0a8d(0xde)],_0x3f8c16,defaultSilhouetteColor,_0xe2986b[_0x3a0a8d(0xde)]),_0xe2986b[_0x3a0a8d(0xeb)]=a327_0x221eb3['getValueOrDefault'](_0x33cbf8[_0x3a0a8d(0xbc)],_0x3f8c16,defaultSilhouetteSize),_0xe2986b['color']=a327_0x221eb3['getValueOrDefault'](_0x33cbf8['_color'],_0x3f8c16,defaultColor,_0xe2986b[_0x3a0a8d(0x93)]),_0xe2986b[_0x3a0a8d(0xa2)]=a327_0x221eb3[_0x3a0a8d(0xb3)](_0x33cbf8[_0x3a0a8d(0x97)],_0x3f8c16,defaultColorBlendMode),_0xe2986b[_0x3a0a8d(0x9f)]=a327_0x221eb3[_0x3a0a8d(0xb3)](_0x33cbf8['_colorBlendAmount'],_0x3f8c16,defaultColorBlendAmount),_0xe2986b[_0x3a0a8d(0xbf)]=a327_0x221eb3['getValueOrUndefined'](_0x33cbf8[_0x3a0a8d(0xd8)],_0x3f8c16),_0xe2986b[_0x3a0a8d(0x95)]=a327_0x221eb3['getValueOrDefault'](_0x33cbf8[_0x3a0a8d(0xb6)],_0x3f8c16,defaultClampAnimations),_0xe2986b[_0x3a0a8d(0xcf)]=a327_0x221eb3[_0x3a0a8d(0xb3)](_0x33cbf8[_0x3a0a8d(0xc1)],_0x3f8c16,defaultImageBasedLightingFactor),_0xe2986b[_0x3a0a8d(0xcc)]=a327_0x221eb3['getValueOrUndefined'](_0x33cbf8['_lightColor'],_0x3f8c16);if(_0xe2986b['ready']){var _0x1d9de3=a327_0x221eb3[_0x3a0a8d(0xb3)](_0x33cbf8[_0x3a0a8d(0x94)],_0x3f8c16,!![]);_0x57f06e[_0x3a0a8d(0x9b)]!==_0x1d9de3&&(_0x1d9de3?_0xe2986b['activeAnimations'][_0x3a0a8d(0xdf)]({'loop':a327_0x3490cc[_0x3a0a8d(0xca)]}):_0xe2986b['activeAnimations']['removeAll'](),_0x57f06e[_0x3a0a8d(0x9b)]=_0x1d9de3);var _0x29f340=a327_0x221eb3[_0x3a0a8d(0xa6)](_0x33cbf8['_nodeTransformations'],_0x3f8c16,_0x57f06e[_0x3a0a8d(0xc2)]);if(a327_0x2a8b33(_0x29f340)){var _0x818bfc=Object[_0x3a0a8d(0x9e)](_0x29f340);for(var _0x188075=0x0,_0x57c2b0=_0x818bfc[_0x3a0a8d(0xec)];_0x188075<_0x57c2b0;++_0x188075){var _0x22637c=_0x818bfc[_0x188075],_0x34bc9c=_0x29f340[_0x22637c];if(!a327_0x2a8b33(_0x34bc9c))continue;var _0x4acf7b=_0xe2986b['getNode'](_0x22637c);if(!a327_0x2a8b33(_0x4acf7b))continue;var _0x1b845e=a327_0x59a73f[_0x3a0a8d(0xc0)](_0x34bc9c,nodeMatrixScratch);_0x4acf7b[_0x3a0a8d(0xa4)]=a327_0x59a73f[_0x3a0a8d(0xb4)](_0x4acf7b[_0x3a0a8d(0x9d)],_0x1b845e,_0x1b845e);}}var _0x395ef7=![],_0x569cba=a327_0x221eb3['getValueOrUndefined'](_0x33cbf8[_0x3a0a8d(0xee)],_0x3f8c16,_0x57f06e[_0x3a0a8d(0xd4)]);if(a327_0x2a8b33(_0x569cba)){var _0x19bb2f=Object[_0x3a0a8d(0x9e)](_0x569cba);for(var _0x558f68=0x0,_0x562d3e=_0x19bb2f[_0x3a0a8d(0xec)];_0x558f68<_0x562d3e;++_0x558f68){var _0x5e8817=_0x19bb2f[_0x558f68],_0x909d73=_0x569cba[_0x5e8817];if(!a327_0x2a8b33(_0x909d73))continue;_0x395ef7=!![],_0xe2986b[_0x3a0a8d(0xa3)](_0x5e8817,_0x909d73);}}_0x395ef7&&_0xe2986b['applyArticulations']();}}return!![];},ModelVisualizer[a327_0x882128(0xef)]['isDestroyed']=function(){return![];},ModelVisualizer[a327_0x882128(0xef)][a327_0x882128(0x96)]=function(){var _0xb23356=a327_0x882128;this[_0xb23356(0xb5)][_0xb23356(0xc7)]['removeEventListener'](ModelVisualizer[_0xb23356(0xef)]['_onCollectionChanged'],this);var _0x273a77=this[_0xb23356(0xea)][_0xb23356(0xe8)],_0x214177=this[_0xb23356(0x9c)],_0x39fb21=this[_0xb23356(0xba)];for(var _0x191d91=_0x273a77[_0xb23356(0xec)]-0x1;_0x191d91>-0x1;_0x191d91--){removeModel(this,_0x273a77[_0x191d91],_0x214177,_0x39fb21);}return a327_0x3e48cd(this);},ModelVisualizer[a327_0x882128(0xef)][a327_0x882128(0xd5)]=function(_0x53ed29,_0x496e30){var _0x14d301=a327_0x882128;if(!a327_0x2a8b33(_0x53ed29))throw new a327_0x27f612('entity\x20is\x20required.');if(!a327_0x2a8b33(_0x496e30))throw new a327_0x27f612(_0x14d301(0xac));var _0x34ed96=this[_0x14d301(0x9c)][_0x53ed29['id']];if(!a327_0x2a8b33(_0x34ed96)||_0x34ed96[_0x14d301(0xe3)])return a327_0x3e3da8[_0x14d301(0xbe)];var _0x51e961=_0x34ed96[_0x14d301(0xc6)];if(!a327_0x2a8b33(_0x51e961)||!_0x51e961['show'])return a327_0x3e3da8[_0x14d301(0xbe)];if(!_0x51e961['ready'])return a327_0x3e3da8[_0x14d301(0xd6)];if(_0x51e961[_0x14d301(0xcd)]===a327_0x4ae8e4[_0x14d301(0xda)])a327_0x32ac29[_0x14d301(0xd3)](_0x51e961['boundingSphere'],_0x51e961[_0x14d301(0xa7)],_0x496e30);else{if(!a327_0x2a8b33(_0x51e961[_0x14d301(0xc3)]))return a327_0x3e3da8[_0x14d301(0xd6)];a327_0x32ac29[_0x14d301(0xd3)](_0x51e961['boundingSphere'],_0x51e961[_0x14d301(0xc3)],_0x496e30);}return a327_0x3e3da8[_0x14d301(0xa5)];},ModelVisualizer[a327_0x882128(0xef)][a327_0x882128(0xa0)]=function(_0x2ba0c4,_0x13b921,_0x2132d7,_0xc1ee09){var _0x3a1978=a327_0x882128,_0x6bcd27,_0x33c81a,_0x22d9a4=this[_0x3a1978(0xea)],_0x1f9744=this[_0x3a1978(0x9c)],_0x4822ce=this[_0x3a1978(0xba)];for(_0x6bcd27=_0x13b921[_0x3a1978(0xec)]-0x1;_0x6bcd27>-0x1;_0x6bcd27--){_0x33c81a=_0x13b921[_0x6bcd27],a327_0x2a8b33(_0x33c81a[_0x3a1978(0x91)])&&a327_0x2a8b33(_0x33c81a[_0x3a1978(0xd9)])&&_0x22d9a4[_0x3a1978(0xe2)](_0x33c81a['id'],_0x33c81a);}for(_0x6bcd27=_0xc1ee09[_0x3a1978(0xec)]-0x1;_0x6bcd27>-0x1;_0x6bcd27--){_0x33c81a=_0xc1ee09[_0x6bcd27],a327_0x2a8b33(_0x33c81a[_0x3a1978(0x91)])&&a327_0x2a8b33(_0x33c81a[_0x3a1978(0xd9)])?(clearNodeTransformationsArticulationsScratch(_0x33c81a,_0x1f9744),_0x22d9a4['set'](_0x33c81a['id'],_0x33c81a)):(removeModel(this,_0x33c81a,_0x1f9744,_0x4822ce),_0x22d9a4[_0x3a1978(0xc5)](_0x33c81a['id']));}for(_0x6bcd27=_0x2132d7[_0x3a1978(0xec)]-0x1;_0x6bcd27>-0x1;_0x6bcd27--){_0x33c81a=_0x2132d7[_0x6bcd27],removeModel(this,_0x33c81a,_0x1f9744,_0x4822ce),_0x22d9a4[_0x3a1978(0xc5)](_0x33c81a['id']);}};function removeModel(_0xf3c5ad,_0x1939f3,_0x5333f1,_0x32ea57){var _0x5a0a4c=a327_0x882128,_0x597d53=_0x5333f1[_0x1939f3['id']];a327_0x2a8b33(_0x597d53)&&(_0x32ea57[_0x5a0a4c(0xad)](_0x597d53['modelPrimitive']),delete _0x5333f1[_0x1939f3['id']]);}function a327_0x20c3(){var _0x40eee6=['_incrementallyLoadTextures','1610IDmdoT','set','loadFail','2845AtGQNW','_maximumScale','_show','minimumPixelSize','values','_distanceDisplayCondition','_entitiesToVisualize','silhouetteSize','length','error','_articulations','prototype','2fjUYil','14328sIrCEi','_model','computeModelMatrix','_color','_runAnimations','clampAnimations','destroy','_colorBlendMode','shadows','_minimumPixelSize','maximumScale','animationsRunning','_modelHash','originalMatrix','keys','colorBlendAmount','_onCollectionChanged','9367512oAzZBp','colorBlendMode','setArticulationStage','matrix','DONE','getValueOrUndefined','modelMatrix','_scene','otherwise','url','3mZcavn','result\x20is\x20required.','removeAndDestroy','2959lftVnX','233641GxNYvO','distanceDisplayCondition','2288828YcUMTn','ENABLED','getValueOrDefault','multiply','_entityCollection','_clampAnimations','update','createIfNeeded','_heightReference','_primitives','_uri','_silhouetteSize','isShowing','FAILED','clippingPlanes','fromTranslationRotationScale','_imageBasedLightingFactor','nodeTransformationsScratch','_clampedModelMatrix','HIGHLIGHT','remove','modelPrimitive','collectionChanged','4062LQNBkI','1281zXjKeI','REPEAT','addEventListener','lightColor','heightReference','_scale','imageBasedLightingFactor','3998610aGqTDs','time\x20is\x20required.','primitives','transform','articulationsScratch','getBoundingSphere','PENDING','scene\x20is\x20required.','_clippingPlanes','_position','NONE','add','show','fromGltf','_silhouetteColor','addAll'];a327_0x20c3=function(){return _0x40eee6;};return a327_0x20c3();}function clearNodeTransformationsArticulationsScratch(_0x37e836,_0x59c03b){var _0x45d754=a327_0x882128,_0xb5cb90=_0x59c03b[_0x37e836['id']];a327_0x2a8b33(_0xb5cb90)&&(_0xb5cb90[_0x45d754(0xc2)]={},_0xb5cb90[_0x45d754(0xd4)]={});}function checkModelLoad(_0x487fd2,_0x144b43,_0x4d500b){var _0x3fa64b=a327_0x882128;_0x487fd2['readyPromise'][_0x3fa64b(0xa9)](function(_0x146f39){var _0x1982fd=_0x3fa64b;console[_0x1982fd(0xed)](_0x146f39),_0x4d500b[_0x144b43['id']][_0x1982fd(0xe3)]=!![];});}export default ModelVisualizer;