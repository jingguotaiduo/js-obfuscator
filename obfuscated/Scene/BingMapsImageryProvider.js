var a429_0x1f18b5=a429_0x2517;(function(_0x175193,_0x2d297e){var _0xc71bfa=a429_0x2517,_0x1c1525=_0x175193();while(!![]){try{var _0x3c8cc3=-parseInt(_0xc71bfa(0x12c))/0x1+-parseInt(_0xc71bfa(0x145))/0x2+parseInt(_0xc71bfa(0x187))/0x3*(-parseInt(_0xc71bfa(0x179))/0x4)+parseInt(_0xc71bfa(0x154))/0x5+parseInt(_0xc71bfa(0x134))/0x6*(parseInt(_0xc71bfa(0x160))/0x7)+parseInt(_0xc71bfa(0x15b))/0x8+-parseInt(_0xc71bfa(0x129))/0x9*(-parseInt(_0xc71bfa(0x16c))/0xa);if(_0x3c8cc3===_0x2d297e)break;else _0x1c1525['push'](_0x1c1525['shift']());}catch(_0x17deef){_0x1c1525['push'](_0x1c1525['shift']());}}}(a429_0x5921,0x37a9d));import a429_0x2b2954 from'../Core/buildModuleUrl.js';import a429_0x5a5bc8 from'../Core/Check.js';import a429_0x2a6934 from'../Core/Credit.js';import a429_0x5cc353 from'../Core/defaultValue.js';import a429_0x25f992 from'../Core/defined.js';import a429_0x1d8921 from'../Core/DeveloperError.js';import a429_0x47b76a from'../Core/Event.js';import a429_0x2a6ade from'../Core/Math.js';import a429_0x2dc77d from'../Core/Rectangle.js';import a429_0x495939 from'../Core/Resource.js';import a429_0x16a3c3 from'../Core/RuntimeError.js';import a429_0x1bbfc5 from'../Core/TileProviderError.js';import a429_0x33cccf from'../Core/WebMercatorTilingScheme.js';import a429_0x3020ad from'../ThirdParty/when.js';function a429_0x2517(_0x4da677,_0x220ed1){var _0x59212d=a429_0x5921();return a429_0x2517=function(_0x251710,_0x48ff54){_0x251710=_0x251710-0x123;var _0x3658fe=_0x59212d[_0x251710];return _0x3658fe;},a429_0x2517(_0x4da677,_0x220ed1);}import a429_0x57c235 from'./BingMapsStyle.js';import a429_0x92ef5c from'./DiscardEmptyTileImagePolicy.js';function a429_0x5921(){var _0x320b42=['\x22\x20title=\x22Bing\x20Imagery\x22/></a>','imageUrl','prototype','tileXYToRectangle','AERIAL','options.key\x20is\x20required.','http','171980uYpTJi','_proxy','getDerivedResource','zoomMax','defaultGamma','tileDiscardPolicy\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.','handleSuccess','_mapStyle','fetchJsonp','then','imageHeight','_tileWidth','imageryProviders','4ekqTvu','REST/v1/Imagery/Metadata/','imageUrlSubdomains','getTileCredits','tileProtocol','push','_imageUrlSubdomains','_tilingScheme','_logoUrl','length','zoomMin','getTileCredits\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.','_imageUrlTemplate','Assets/Images/bing_maps_credit.png','37857VrIinp','rectangle','protocol','http:','_maximumLevel','An\x20error\x20occurred\x20while\x20accessing\x20','value','defined','_culture','imageWidth','_ready','45RDVLJQ','_key','size','290182sCFIwL','defineProperties','_attributionList','_credit','defaultNightAlpha','_errorEvent','requestImage\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.','ImageryProviders','6CmyuMi','jsonp','EMPTY_OBJECT','defaultMagnificationFilter','proxy','ellipsoid','tileWidth\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.','toRadians','options.url\x20is\x20required.','coverageAreas','defaultBrightness','defaultSaturation','minimumLevel\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.','substr','rectangle\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.','culture','pickFeatures','760978VTiOYy','otherwise','promise','blob','_tileHeight','bbox','_readyPromise','appendForwardSlash','tileHeight\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.','tilingScheme\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.','_resource','attribution','_metadataCache','EMPTY_IMAGE','url','2171735ZBqiGo','intersection','tileDiscardPolicy','mapStyle','_tileProtocol','tileXYToQuadKey','_tileDiscardPolicy','265448rlrAxN','logoUrl','defaultMinificationFilter','quadKeyToTileXY','resourceSets','2504383rlJdzw','requestImage','maximumLevel\x20must\x20not\x20be\x20called\x20before\x20the\x20imagery\x20provider\x20is\x20ready.','credit','reject'];a429_0x5921=function(){return _0x320b42;};return a429_0x5921();}import a429_0x14ae3c from'./ImageryProvider.js';function BingMapsImageryProvider(_0x202685){var _0xfbef05=a429_0x2517;_0x202685=a429_0x5cc353(_0x202685,a429_0x5cc353[_0xfbef05(0x136)]);var _0x26cc92=_0x202685['key'];if(!a429_0x25f992(_0x202685[_0xfbef05(0x153)]))throw new a429_0x1d8921(_0xfbef05(0x13c));if(!a429_0x25f992(_0x26cc92))throw new a429_0x1d8921(_0xfbef05(0x16a));this['defaultAlpha']=undefined,this[_0xfbef05(0x130)]=undefined,this['defaultDayAlpha']=undefined,this[_0xfbef05(0x13e)]=undefined,this['defaultContrast']=undefined,this['defaultHue']=undefined,this[_0xfbef05(0x13f)]=undefined,this[_0xfbef05(0x170)]=0x1,this[_0xfbef05(0x15d)]=undefined,this[_0xfbef05(0x137)]=undefined,this['_key']=_0x26cc92,this['_resource']=a429_0x495939['createIfNeeded'](_0x202685[_0xfbef05(0x153)]),this['_resource'][_0xfbef05(0x14c)](),this[_0xfbef05(0x158)]=_0x202685[_0xfbef05(0x17d)],this[_0xfbef05(0x173)]=a429_0x5cc353(_0x202685[_0xfbef05(0x157)],a429_0x57c235[_0xfbef05(0x169)]),this['_culture']=a429_0x5cc353(_0x202685[_0xfbef05(0x143)],''),this['_tileDiscardPolicy']=_0x202685[_0xfbef05(0x156)];!a429_0x25f992(this[_0xfbef05(0x15a)])&&(this[_0xfbef05(0x15a)]=new a429_0x92ef5c());this[_0xfbef05(0x16d)]=_0x202685[_0xfbef05(0x138)],this[_0xfbef05(0x12f)]=new a429_0x2a6934('<a\x20href=\x22http://www.bing.com\x22><img\x20src=\x22'+BingMapsImageryProvider[_0xfbef05(0x15c)]+_0xfbef05(0x165)),this[_0xfbef05(0x180)]=new a429_0x33cccf({'numberOfLevelZeroTilesX':0x2,'numberOfLevelZeroTilesY':0x2,'ellipsoid':_0x202685[_0xfbef05(0x139)]}),this[_0xfbef05(0x177)]=undefined,this[_0xfbef05(0x149)]=undefined,this[_0xfbef05(0x18b)]=undefined,this[_0xfbef05(0x185)]=undefined,this[_0xfbef05(0x17f)]=undefined,this[_0xfbef05(0x131)]=new a429_0x47b76a(),this[_0xfbef05(0x128)]=![],this[_0xfbef05(0x14b)]=a429_0x3020ad['defer']();var _0x37f370=this[_0xfbef05(0x158)];if(a429_0x25f992(_0x37f370))_0x37f370[_0xfbef05(0x182)]>0x0&&_0x37f370[_0x37f370['length']-0x1]===':'&&(_0x37f370=_0x37f370[_0xfbef05(0x141)](0x0,_0x37f370[_0xfbef05(0x182)]-0x1));else{var _0x33bfd8=document['location'][_0xfbef05(0x189)];_0x37f370=_0x33bfd8===_0xfbef05(0x18a)?_0xfbef05(0x16b):'https';}var _0x58cb1b=this[_0xfbef05(0x14f)][_0xfbef05(0x16e)]({'url':_0xfbef05(0x17a)+this[_0xfbef05(0x173)],'queryParameters':{'incl':_0xfbef05(0x133),'key':this['_key'],'uriScheme':_0x37f370}}),_0x318be8=this,_0x3c9c3d;function _0xfc9af5(_0x37bf76){var _0x1533bc=_0xfbef05;if(_0x37bf76['resourceSets'][_0x1533bc(0x182)]!==0x1){_0x5e45da();return;}var _0x100d2a=_0x37bf76[_0x1533bc(0x15f)][0x0]['resources'][0x0];_0x318be8[_0x1533bc(0x177)]=_0x100d2a[_0x1533bc(0x127)],_0x318be8[_0x1533bc(0x149)]=_0x100d2a[_0x1533bc(0x176)],_0x318be8[_0x1533bc(0x18b)]=_0x100d2a[_0x1533bc(0x16f)]-0x1,_0x318be8[_0x1533bc(0x17f)]=_0x100d2a[_0x1533bc(0x17b)],_0x318be8[_0x1533bc(0x185)]=_0x100d2a[_0x1533bc(0x166)];var _0x1727b9=_0x318be8[_0x1533bc(0x12e)]=_0x100d2a[_0x1533bc(0x178)];!_0x1727b9&&(_0x1727b9=_0x318be8[_0x1533bc(0x12e)]=[]);for(var _0x12c74d=0x0,_0x25c2dd=_0x1727b9[_0x1533bc(0x182)];_0x12c74d<_0x25c2dd;++_0x12c74d){var _0x49c388=_0x1727b9[_0x12c74d];if(_0x49c388[_0x1533bc(0x163)]instanceof a429_0x2a6934)break;_0x49c388[_0x1533bc(0x163)]=new a429_0x2a6934(_0x49c388[_0x1533bc(0x150)]);var _0x40d419=_0x49c388[_0x1533bc(0x13d)];for(var _0xfa6a88=0x0,_0x216201=_0x49c388[_0x1533bc(0x13d)][_0x1533bc(0x182)];_0xfa6a88<_0x216201;++_0xfa6a88){var _0x164842=_0x40d419[_0xfa6a88],_0x53fcd7=_0x164842[_0x1533bc(0x14a)];_0x164842[_0x1533bc(0x14a)]=new a429_0x2dc77d(a429_0x2a6ade[_0x1533bc(0x13b)](_0x53fcd7[0x1]),a429_0x2a6ade[_0x1533bc(0x13b)](_0x53fcd7[0x0]),a429_0x2a6ade[_0x1533bc(0x13b)](_0x53fcd7[0x3]),a429_0x2a6ade['toRadians'](_0x53fcd7[0x2]));}}_0x318be8[_0x1533bc(0x128)]=!![],_0x318be8[_0x1533bc(0x14b)]['resolve'](!![]),a429_0x1bbfc5[_0x1533bc(0x172)](_0x3c9c3d);}function _0x5e45da(_0x145b6a){var _0x45cd2f=_0xfbef05,_0x4d216e=_0x45cd2f(0x123)+_0x58cb1b[_0x45cd2f(0x153)]+'.';_0x3c9c3d=a429_0x1bbfc5['handleError'](_0x3c9c3d,_0x318be8,_0x318be8[_0x45cd2f(0x131)],_0x4d216e,undefined,undefined,undefined,_0x40bd91),_0x318be8[_0x45cd2f(0x14b)]['reject'](new a429_0x16a3c3(_0x4d216e));}var _0x45b76b=_0x58cb1b['url'];function _0x40bd91(){var _0x49d0e0=_0xfbef05,_0x1a734c=_0x58cb1b[_0x49d0e0(0x174)](_0x49d0e0(0x135));BingMapsImageryProvider[_0x49d0e0(0x151)][_0x45b76b]=_0x1a734c,_0x1a734c[_0x49d0e0(0x175)](_0xfc9af5)[_0x49d0e0(0x146)](_0x5e45da);}var _0x3150d1=BingMapsImageryProvider[_0xfbef05(0x151)][_0x45b76b];a429_0x25f992(_0x3150d1)?_0x3150d1[_0xfbef05(0x175)](_0xfc9af5)[_0xfbef05(0x146)](_0x5e45da):_0x40bd91();}Object[a429_0x1f18b5(0x12d)](BingMapsImageryProvider[a429_0x1f18b5(0x167)],{'url':{'get':function(){var _0x24f7e6=a429_0x1f18b5;return this['_resource'][_0x24f7e6(0x153)];}},'proxy':{'get':function(){var _0x3616a3=a429_0x1f18b5;return this['_resource'][_0x3616a3(0x138)];}},'key':{'get':function(){var _0x2f0458=a429_0x1f18b5;return this[_0x2f0458(0x12a)];}},'mapStyle':{'get':function(){var _0x2048b0=a429_0x1f18b5;return this[_0x2048b0(0x173)];}},'culture':{'get':function(){var _0x12b928=a429_0x1f18b5;return this[_0x12b928(0x126)];}},'tileWidth':{'get':function(){var _0x41c58e=a429_0x1f18b5;if(!this[_0x41c58e(0x128)])throw new a429_0x1d8921(_0x41c58e(0x13a));return this['_tileWidth'];}},'tileHeight':{'get':function(){var _0x5d916f=a429_0x1f18b5;if(!this['_ready'])throw new a429_0x1d8921(_0x5d916f(0x14d));return this['_tileHeight'];}},'maximumLevel':{'get':function(){var _0x5b6698=a429_0x1f18b5;if(!this['_ready'])throw new a429_0x1d8921(_0x5b6698(0x162));return this['_maximumLevel'];}},'minimumLevel':{'get':function(){var _0x13187e=a429_0x1f18b5;if(!this[_0x13187e(0x128)])throw new a429_0x1d8921(_0x13187e(0x140));return 0x0;}},'tilingScheme':{'get':function(){var _0x4cd825=a429_0x1f18b5;if(!this['_ready'])throw new a429_0x1d8921(_0x4cd825(0x14e));return this[_0x4cd825(0x180)];}},'rectangle':{'get':function(){var _0x1ffe20=a429_0x1f18b5;if(!this['_ready'])throw new a429_0x1d8921(_0x1ffe20(0x142));return this[_0x1ffe20(0x180)][_0x1ffe20(0x188)];}},'tileDiscardPolicy':{'get':function(){var _0x47c094=a429_0x1f18b5;if(!this[_0x47c094(0x128)])throw new a429_0x1d8921(_0x47c094(0x171));return this['_tileDiscardPolicy'];}},'errorEvent':{'get':function(){var _0x2278af=a429_0x1f18b5;return this[_0x2278af(0x131)];}},'ready':{'get':function(){var _0x1cfe01=a429_0x1f18b5;return this[_0x1cfe01(0x128)];}},'readyPromise':{'get':function(){var _0x3c88c6=a429_0x1f18b5;return this[_0x3c88c6(0x14b)][_0x3c88c6(0x147)];}},'credit':{'get':function(){return this['_credit'];}},'hasAlphaChannel':{'get':function(){return![];}}});var rectangleScratch=new a429_0x2dc77d();BingMapsImageryProvider['prototype'][a429_0x1f18b5(0x17c)]=function(_0xea28eb,_0x20efea,_0x1ce897){var _0x3117bf=a429_0x1f18b5;if(!this[_0x3117bf(0x128)])throw new a429_0x1d8921(_0x3117bf(0x184));var _0x1fd092=this['_tilingScheme'][_0x3117bf(0x168)](_0xea28eb,_0x20efea,_0x1ce897,rectangleScratch),_0xc79898=getRectangleAttribution(this[_0x3117bf(0x12e)],_0x1ce897,_0x1fd092);return _0xc79898;},BingMapsImageryProvider['prototype'][a429_0x1f18b5(0x161)]=function(_0x646d69,_0x3ed88c,_0x2c151c,_0x575ab8){var _0x184ac8=a429_0x1f18b5;if(!this[_0x184ac8(0x128)])throw new a429_0x1d8921(_0x184ac8(0x132));var _0x42c90e=a429_0x14ae3c['loadImage'](this,buildImageResource(this,_0x646d69,_0x3ed88c,_0x2c151c,_0x575ab8));if(a429_0x25f992(_0x42c90e))return _0x42c90e[_0x184ac8(0x146)](function(_0x4425a2){var _0x8da02f=_0x184ac8;if(a429_0x25f992(_0x4425a2[_0x8da02f(0x148)])&&_0x4425a2['blob'][_0x8da02f(0x12b)]===0x0)return a429_0x92ef5c[_0x8da02f(0x152)];return a429_0x3020ad[_0x8da02f(0x164)](_0x4425a2);});return undefined;},BingMapsImageryProvider[a429_0x1f18b5(0x167)][a429_0x1f18b5(0x144)]=function(_0x25757c,_0x735851,_0x2df5d5,_0x1c16ec,_0x555d4a){return undefined;},BingMapsImageryProvider[a429_0x1f18b5(0x159)]=function(_0x28b8cb,_0x25c53d,_0x410fc9){var _0x378d45='';for(var _0x1dcaac=_0x410fc9;_0x1dcaac>=0x0;--_0x1dcaac){var _0x173a35=0x1<<_0x1dcaac,_0x1b1e4c=0x0;(_0x28b8cb&_0x173a35)!==0x0&&(_0x1b1e4c|=0x1),(_0x25c53d&_0x173a35)!==0x0&&(_0x1b1e4c|=0x2),_0x378d45+=_0x1b1e4c;}return _0x378d45;},BingMapsImageryProvider[a429_0x1f18b5(0x15e)]=function(_0x40a4d3){var _0x2fe029=a429_0x1f18b5,_0x5a1c6f=0x0,_0xc0e33c=0x0,_0xf27572=_0x40a4d3[_0x2fe029(0x182)]-0x1;for(var _0x20d768=_0xf27572;_0x20d768>=0x0;--_0x20d768){var _0x5e3fc5=0x1<<_0x20d768,_0x3e4577=+_0x40a4d3[_0xf27572-_0x20d768];(_0x3e4577&0x1)!==0x0&&(_0x5a1c6f|=_0x5e3fc5),(_0x3e4577&0x2)!==0x0&&(_0xc0e33c|=_0x5e3fc5);}return{'x':_0x5a1c6f,'y':_0xc0e33c,'level':_0xf27572};},BingMapsImageryProvider[a429_0x1f18b5(0x181)]=undefined,Object[a429_0x1f18b5(0x12d)](BingMapsImageryProvider,{'logoUrl':{'get':function(){var _0x12079a=a429_0x1f18b5;return!a429_0x25f992(BingMapsImageryProvider[_0x12079a(0x181)])&&(BingMapsImageryProvider['_logoUrl']=a429_0x2b2954(_0x12079a(0x186))),BingMapsImageryProvider['_logoUrl'];},'set':function(_0x2dd260){var _0x454148=a429_0x1f18b5;a429_0x5a5bc8[_0x454148(0x125)](_0x454148(0x124),_0x2dd260),BingMapsImageryProvider[_0x454148(0x181)]=_0x2dd260;}}});function buildImageResource(_0x35961d,_0x56f6bf,_0x421762,_0x2a354f,_0xfb1831){var _0x341f47=a429_0x1f18b5,_0x4aa8b3=_0x35961d[_0x341f47(0x185)],_0x35de27=_0x35961d[_0x341f47(0x17f)],_0x57c941=(_0x56f6bf+_0x421762+_0x2a354f)%_0x35de27[_0x341f47(0x182)];return _0x35961d[_0x341f47(0x14f)]['getDerivedResource']({'url':_0x4aa8b3,'request':_0xfb1831,'templateValues':{'quadkey':BingMapsImageryProvider[_0x341f47(0x159)](_0x56f6bf,_0x421762,_0x2a354f),'subdomain':_0x35de27[_0x57c941],'culture':_0x35961d[_0x341f47(0x126)]},'queryParameters':{'n':'z'}});}var intersectionScratch=new a429_0x2dc77d();function getRectangleAttribution(_0x2f7f65,_0x5d7bc9,_0x57d63d){var _0x16457f=a429_0x1f18b5;++_0x5d7bc9;var _0xe06862=[];for(var _0x29e168=0x0,_0x58c8e4=_0x2f7f65[_0x16457f(0x182)];_0x29e168<_0x58c8e4;++_0x29e168){var _0x31b411=_0x2f7f65[_0x29e168],_0x15088f=_0x31b411[_0x16457f(0x13d)],_0x1677b7=![];for(var _0x5470ea=0x0,_0x3eed72=_0x31b411[_0x16457f(0x13d)][_0x16457f(0x182)];!_0x1677b7&&_0x5470ea<_0x3eed72;++_0x5470ea){var _0x45d95a=_0x15088f[_0x5470ea];if(_0x5d7bc9>=_0x45d95a[_0x16457f(0x183)]&&_0x5d7bc9<=_0x45d95a[_0x16457f(0x16f)]){var _0x21b419=a429_0x2dc77d[_0x16457f(0x155)](_0x57d63d,_0x45d95a[_0x16457f(0x14a)],intersectionScratch);a429_0x25f992(_0x21b419)&&(_0x1677b7=!![]);}}_0x1677b7&&_0xe06862[_0x16457f(0x17e)](_0x31b411['credit']);}return _0xe06862;}BingMapsImageryProvider['_metadataCache']={};export default BingMapsImageryProvider;