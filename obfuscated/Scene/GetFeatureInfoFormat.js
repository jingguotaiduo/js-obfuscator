var a514_0x384fa5=a514_0x84a3;(function(_0x29e0ff,_0x11eedf){var _0x390a9b=a514_0x84a3,_0x1304ce=_0x29e0ff();while(!![]){try{var _0x5b4e9d=parseInt(_0x390a9b(0xa1))/0x1+parseInt(_0x390a9b(0x85))/0x2*(-parseInt(_0x390a9b(0x7a))/0x3)+parseInt(_0x390a9b(0x84))/0x4+-parseInt(_0x390a9b(0x88))/0x5*(-parseInt(_0x390a9b(0x6f))/0x6)+-parseInt(_0x390a9b(0x7f))/0x7*(-parseInt(_0x390a9b(0xa7))/0x8)+parseInt(_0x390a9b(0x9a))/0x9+-parseInt(_0x390a9b(0x74))/0xa;if(_0x5b4e9d===_0x11eedf)break;else _0x1304ce['push'](_0x1304ce['shift']());}catch(_0x281c28){_0x1304ce['push'](_0x1304ce['shift']());}}}(a514_0x38c9,0xced88));import a514_0x63f559 from'../Core/Cartographic.js';import a514_0x32bd85 from'../Core/defined.js';import a514_0x3e64a5 from'../Core/DeveloperError.js';import a514_0x490eda from'../Core/RuntimeError.js';import a514_0x3673b1 from'./ImageryLayerFeatureInfo.js';function a514_0x38c9(){var _0x172011=['1113766bNznCu','nodeType','FIELDS','31335KDuPDb','http://www.opengis.net/wfs','ELEMENT_NODE','test','length','documentElement','configureNameFromProperties','getAttribute','push','value','trim','Point','coordinates','properties','hasAttribute','name','callback','childNodes','272718URvSlG','Polygon','pre','data','createElement','textContent','div','1313747FUTFZr','boundedBy','json','http://www.opengis.net/gml','LineString','serializeToString','1440ccfUVi','ref','text/xml','application/json','configureDescriptionFromProperties','text/html','geometry','Feature','294VHStjQ','position','hasChildNodes','localName','getElementsByTagNameNS','2295590GwLhLQ','type\x20is\x20required.','text','format\x20is\x20required\x20when\x20type\x20is\x20not\x20\x22json\x22,\x20\x22xml\x22,\x20\x22html\x22,\x20or\x20\x22text\x22.','format','appendChild','9dCopvJ','attributes','description','http://www.esri.com/wms','namespaceURI','26859AchMZi','type','featureMember','exec','html','1622624YHxJpS'];a514_0x38c9=function(){return _0x172011;};return a514_0x38c9();}function GetFeatureInfoFormat(_0x523be7,_0x486ac4,_0x10f8b2){var _0x43cb8b=a514_0x84a3;if(!a514_0x32bd85(_0x523be7))throw new a514_0x3e64a5(_0x43cb8b(0x75));this[_0x43cb8b(0x80)]=_0x523be7;if(!a514_0x32bd85(_0x486ac4)){if(_0x523be7===_0x43cb8b(0xa3))_0x486ac4=_0x43cb8b(0xaa);else{if(_0x523be7==='xml')_0x486ac4=_0x43cb8b(0xa9);else{if(_0x523be7===_0x43cb8b(0x83))_0x486ac4=_0x43cb8b(0xac);else{if(_0x523be7==='text')_0x486ac4='text/plain';else throw new a514_0x3e64a5(_0x43cb8b(0x77));}}}}this[_0x43cb8b(0x78)]=_0x486ac4;if(!a514_0x32bd85(_0x10f8b2)){if(_0x523be7===_0x43cb8b(0xa3))_0x10f8b2=geoJsonToFeatureInfo;else{if(_0x523be7==='xml')_0x10f8b2=xmlToFeatureInfo;else{if(_0x523be7===_0x43cb8b(0x83))_0x10f8b2=textToFeatureInfo;else{if(_0x523be7===_0x43cb8b(0x76))_0x10f8b2=textToFeatureInfo;else throw new a514_0x3e64a5('callback\x20is\x20required\x20when\x20type\x20is\x20not\x20\x22json\x22,\x20\x22xml\x22,\x20\x22html\x22,\x20or\x20\x22text\x22.');}}}}this[_0x43cb8b(0x98)]=_0x10f8b2;}function geoJsonToFeatureInfo(_0x11f2a5){var _0x79c31c=a514_0x84a3,_0x2aa69c=[],_0x1a54d1=_0x11f2a5['features'];for(var _0x4e0a31=0x0;_0x4e0a31<_0x1a54d1[_0x79c31c(0x8c)];++_0x4e0a31){var _0x84d705=_0x1a54d1[_0x4e0a31],_0x39a92d=new a514_0x3673b1();_0x39a92d['data']=_0x84d705,_0x39a92d['properties']=_0x84d705[_0x79c31c(0x95)],_0x39a92d[_0x79c31c(0x8e)](_0x84d705[_0x79c31c(0x95)]),_0x39a92d[_0x79c31c(0xab)](_0x84d705[_0x79c31c(0x95)]);if(a514_0x32bd85(_0x84d705[_0x79c31c(0xad)])&&_0x84d705[_0x79c31c(0xad)][_0x79c31c(0x80)]===_0x79c31c(0x93)){var _0x3f847f=_0x84d705[_0x79c31c(0xad)][_0x79c31c(0x94)][0x0],_0x3ce539=_0x84d705[_0x79c31c(0xad)][_0x79c31c(0x94)][0x1];_0x39a92d[_0x79c31c(0x70)]=a514_0x63f559['fromDegrees'](_0x3f847f,_0x3ce539);}_0x2aa69c[_0x79c31c(0x90)](_0x39a92d);}return _0x2aa69c;}var mapInfoMxpNamespace='http://www.mapinfo.com/mxp',esriWmsNamespace=a514_0x384fa5(0x7d),wfsNamespace=a514_0x384fa5(0x89),gmlNamespace=a514_0x384fa5(0xa4);function xmlToFeatureInfo(_0x15ecf5){var _0x2d1951=a514_0x384fa5,_0x59b114=_0x15ecf5[_0x2d1951(0x8d)];if(_0x59b114[_0x2d1951(0x72)]==='MultiFeatureCollection'&&_0x59b114[_0x2d1951(0x7e)]===mapInfoMxpNamespace)return mapInfoXmlToFeatureInfo(_0x15ecf5);else{if(_0x59b114[_0x2d1951(0x72)]==='FeatureInfoResponse'&&_0x59b114['namespaceURI']===esriWmsNamespace)return esriXmlToFeatureInfo(_0x15ecf5);else{if(_0x59b114[_0x2d1951(0x72)]==='FeatureCollection'&&_0x59b114[_0x2d1951(0x7e)]===wfsNamespace)return gmlToFeatureInfo(_0x15ecf5);else{if(_0x59b114[_0x2d1951(0x72)]==='ServiceExceptionReport')throw new a514_0x490eda(new XMLSerializer()[_0x2d1951(0xa6)](_0x59b114));else return _0x59b114[_0x2d1951(0x72)]==='msGMLOutput'?msGmlToFeatureInfo(_0x15ecf5):unknownXmlToFeatureInfo(_0x15ecf5);}}}}function mapInfoXmlToFeatureInfo(_0x5c34ed){var _0x8a8d6=a514_0x384fa5,_0x4d4278=[],_0x214fac=_0x5c34ed['documentElement'],_0xa34afb=_0x214fac['getElementsByTagNameNS'](mapInfoMxpNamespace,_0x8a8d6(0xae));for(var _0x23e114=0x0;_0x23e114<_0xa34afb[_0x8a8d6(0x8c)];++_0x23e114){var _0x555066=_0xa34afb[_0x23e114],_0x5009d0={},_0x1f22f7=_0x555066[_0x8a8d6(0x73)](mapInfoMxpNamespace,'Val');for(var _0x389e5f=0x0;_0x389e5f<_0x1f22f7[_0x8a8d6(0x8c)];++_0x389e5f){var _0x421f00=_0x1f22f7[_0x389e5f];if(_0x421f00[_0x8a8d6(0x96)](_0x8a8d6(0xa8))){var _0x3ec4fa=_0x421f00[_0x8a8d6(0x8f)](_0x8a8d6(0xa8)),_0x585598=_0x421f00[_0x8a8d6(0x9f)][_0x8a8d6(0x92)]();_0x5009d0[_0x3ec4fa]=_0x585598;}}var _0x55494d=new a514_0x3673b1();_0x55494d[_0x8a8d6(0x9d)]=_0x555066,_0x55494d['properties']=_0x5009d0,_0x55494d['configureNameFromProperties'](_0x5009d0),_0x55494d[_0x8a8d6(0xab)](_0x5009d0),_0x4d4278[_0x8a8d6(0x90)](_0x55494d);}return _0x4d4278;}function esriXmlToFeatureInfo(_0x3db1b7){var _0x54dba3=a514_0x384fa5,_0x6ad14a=_0x3db1b7['documentElement'],_0x4ec4a2=[],_0x37b445,_0x1335d0=_0x6ad14a['getElementsByTagNameNS']('*',_0x54dba3(0x87));if(_0x1335d0[_0x54dba3(0x8c)]>0x0)for(var _0x44f785=0x0;_0x44f785<_0x1335d0['length'];++_0x44f785){var _0x46f88d=_0x1335d0[_0x44f785];_0x37b445={};var _0x16540b=_0x46f88d[_0x54dba3(0x7b)];for(var _0x5bc8d7=0x0;_0x5bc8d7<_0x16540b[_0x54dba3(0x8c)];++_0x5bc8d7){var _0x1ba370=_0x16540b[_0x5bc8d7];_0x37b445[_0x1ba370[_0x54dba3(0x97)]]=_0x1ba370[_0x54dba3(0x91)];}_0x4ec4a2[_0x54dba3(0x90)](imageryLayerFeatureInfoFromDataAndProperties(_0x46f88d,_0x37b445));}else{var _0xd147aa=_0x6ad14a[_0x54dba3(0x73)]('*','FeatureInfo');for(var _0x59b847=0x0;_0x59b847<_0xd147aa[_0x54dba3(0x8c)];++_0x59b847){var _0x13f1e5=_0xd147aa[_0x59b847];_0x37b445={};var _0x3db77a=_0x13f1e5[_0x54dba3(0x99)];for(var _0x4b4ef9=0x0;_0x4b4ef9<_0x3db77a[_0x54dba3(0x8c)];++_0x4b4ef9){var _0x5e4253=_0x3db77a[_0x4b4ef9];_0x5e4253[_0x54dba3(0x86)]===Node[_0x54dba3(0x8a)]&&(_0x37b445[_0x5e4253['localName']]=_0x5e4253[_0x54dba3(0x9f)]);}_0x4ec4a2[_0x54dba3(0x90)](imageryLayerFeatureInfoFromDataAndProperties(_0x13f1e5,_0x37b445));}}return _0x4ec4a2;}function a514_0x84a3(_0x18fecc,_0x47eb5a){var _0x38c9fb=a514_0x38c9();return a514_0x84a3=function(_0x84a383,_0x582cce){_0x84a383=_0x84a383-0x6f;var _0x4d5d0f=_0x38c9fb[_0x84a383];return _0x4d5d0f;},a514_0x84a3(_0x18fecc,_0x47eb5a);}function gmlToFeatureInfo(_0x46743c){var _0x546549=a514_0x384fa5,_0x50c5ed=[],_0x46f2ee=_0x46743c['documentElement'],_0x14c8a6=_0x46f2ee['getElementsByTagNameNS'](gmlNamespace,_0x546549(0x81));for(var _0x1356fe=0x0;_0x1356fe<_0x14c8a6['length'];++_0x1356fe){var _0x2dea5c=_0x14c8a6[_0x1356fe],_0x536f93={};getGmlPropertiesRecursively(_0x2dea5c,_0x536f93),_0x50c5ed[_0x546549(0x90)](imageryLayerFeatureInfoFromDataAndProperties(_0x2dea5c,_0x536f93));}return _0x50c5ed;}function msGmlToFeatureInfo(_0x3ea83b){var _0x30a186=a514_0x384fa5,_0x35c689=[],_0x275bff,_0x27d7c3=_0x3ea83b[_0x30a186(0x8d)]['childNodes'];for(var _0x274c63=0x0;_0x274c63<_0x27d7c3[_0x30a186(0x8c)];_0x274c63++){if(_0x27d7c3[_0x274c63]['nodeType']===Node[_0x30a186(0x8a)]){_0x275bff=_0x27d7c3[_0x274c63];break;}}if(!a514_0x32bd85(_0x275bff))throw new a514_0x490eda('Unable\x20to\x20find\x20first\x20child\x20of\x20the\x20feature\x20info\x20xml\x20document');var _0x21d992=_0x275bff[_0x30a186(0x99)];for(var _0x103783=0x0;_0x103783<_0x21d992[_0x30a186(0x8c)];++_0x103783){var _0x290155=_0x21d992[_0x103783];if(_0x290155[_0x30a186(0x86)]===Node[_0x30a186(0x8a)]){var _0x14a0ed={};getGmlPropertiesRecursively(_0x290155,_0x14a0ed),_0x35c689[_0x30a186(0x90)](imageryLayerFeatureInfoFromDataAndProperties(_0x290155,_0x14a0ed));}}return _0x35c689;}function getGmlPropertiesRecursively(_0x305e93,_0x164989){var _0x46cb36=a514_0x384fa5,_0x28fe20=!![];for(var _0x5e5d87=0x0;_0x5e5d87<_0x305e93[_0x46cb36(0x99)]['length'];++_0x5e5d87){var _0x5e50bb=_0x305e93[_0x46cb36(0x99)][_0x5e5d87];_0x5e50bb[_0x46cb36(0x86)]===Node[_0x46cb36(0x8a)]&&(_0x28fe20=![]);if(_0x5e50bb[_0x46cb36(0x72)]==='Point'||_0x5e50bb[_0x46cb36(0x72)]===_0x46cb36(0xa5)||_0x5e50bb['localName']===_0x46cb36(0x9b)||_0x5e50bb[_0x46cb36(0x72)]===_0x46cb36(0xa2))continue;_0x5e50bb[_0x46cb36(0x71)]()&&getGmlPropertiesRecursively(_0x5e50bb,_0x164989)&&(_0x164989[_0x5e50bb[_0x46cb36(0x72)]]=_0x5e50bb[_0x46cb36(0x9f)]);}return _0x28fe20;}function imageryLayerFeatureInfoFromDataAndProperties(_0x532ee4,_0x158d2e){var _0x70801d=a514_0x384fa5,_0x510876=new a514_0x3673b1();return _0x510876[_0x70801d(0x9d)]=_0x532ee4,_0x510876[_0x70801d(0x95)]=_0x158d2e,_0x510876['configureNameFromProperties'](_0x158d2e),_0x510876[_0x70801d(0xab)](_0x158d2e),_0x510876;}function unknownXmlToFeatureInfo(_0x1ff49d){var _0x366bad=a514_0x384fa5,_0x209115=new XMLSerializer()['serializeToString'](_0x1ff49d),_0x342a76=document[_0x366bad(0x9e)](_0x366bad(0xa0)),_0x5b0d67=document['createElement'](_0x366bad(0x9c));_0x5b0d67[_0x366bad(0x9f)]=_0x209115,_0x342a76[_0x366bad(0x79)](_0x5b0d67);var _0x5508d0=new a514_0x3673b1();return _0x5508d0[_0x366bad(0x9d)]=_0x1ff49d,_0x5508d0[_0x366bad(0x7c)]=_0x342a76['innerHTML'],[_0x5508d0];}var emptyBodyRegex=/<body>\s*<\/body>/im,wmsServiceExceptionReportRegex=/<ServiceExceptionReport([\s\S]*)<\/ServiceExceptionReport>/im,titleRegex=/<title>([\s\S]*)<\/title>/im;function textToFeatureInfo(_0x36050c){var _0x3b4356=a514_0x384fa5;if(emptyBodyRegex[_0x3b4356(0x8b)](_0x36050c))return undefined;if(wmsServiceExceptionReportRegex[_0x3b4356(0x8b)](_0x36050c))return undefined;var _0x16d389,_0x2a0f61=titleRegex[_0x3b4356(0x82)](_0x36050c);_0x2a0f61&&_0x2a0f61[_0x3b4356(0x8c)]>0x1&&(_0x16d389=_0x2a0f61[0x1]);var _0x233d02=new a514_0x3673b1();return _0x233d02[_0x3b4356(0x97)]=_0x16d389,_0x233d02[_0x3b4356(0x7c)]=_0x36050c,_0x233d02[_0x3b4356(0x9d)]=_0x36050c,[_0x233d02];}export default GetFeatureInfoFormat;