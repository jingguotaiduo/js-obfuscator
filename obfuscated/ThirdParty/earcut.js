var a1024_0x140630=a1024_0x1447;(function(_0x1da9c7,_0x26e0a5){var _0x37c7bc=a1024_0x1447,_0x56b017=_0x1da9c7();while(!![]){try{var _0x4b95b6=-parseInt(_0x37c7bc(0x18e))/0x1+parseInt(_0x37c7bc(0x199))/0x2*(parseInt(_0x37c7bc(0x18f))/0x3)+-parseInt(_0x37c7bc(0x18a))/0x4+parseInt(_0x37c7bc(0x19b))/0x5*(-parseInt(_0x37c7bc(0x19e))/0x6)+-parseInt(_0x37c7bc(0x1a1))/0x7*(-parseInt(_0x37c7bc(0x18b))/0x8)+parseInt(_0x37c7bc(0x1a2))/0x9+parseInt(_0x37c7bc(0x194))/0xa*(parseInt(_0x37c7bc(0x1a3))/0xb);if(_0x4b95b6===_0x26e0a5)break;else _0x56b017['push'](_0x56b017['shift']());}catch(_0x2b501c){_0x56b017['push'](_0x56b017['shift']());}}}(a1024_0x5964,0xd9884));var earcut_1=earcut,_default=earcut;function earcut(_0x5a4c3a,_0x5911e5,_0x123918){var _0x36fc85=a1024_0x1447;_0x123918=_0x123918||0x2;var _0x1628ef=_0x5911e5&&_0x5911e5[_0x36fc85(0x19d)],_0x468c64=_0x1628ef?_0x5911e5[0x0]*_0x123918:_0x5a4c3a[_0x36fc85(0x19d)],_0xca057a=linkedList(_0x5a4c3a,0x0,_0x468c64,_0x123918,!![]),_0x12e50f=[];if(!_0xca057a||_0xca057a[_0x36fc85(0x198)]===_0xca057a[_0x36fc85(0x1a0)])return _0x12e50f;var _0x2eca73,_0x1d877d,_0x1419ea,_0x51157e,_0x2ec806,_0x386ac0,_0x5d4a09;if(_0x1628ef)_0xca057a=eliminateHoles(_0x5a4c3a,_0x5911e5,_0xca057a,_0x123918);if(_0x5a4c3a['length']>0x50*_0x123918){_0x2eca73=_0x1419ea=_0x5a4c3a[0x0],_0x1d877d=_0x51157e=_0x5a4c3a[0x1];for(var _0x40c036=_0x123918;_0x40c036<_0x468c64;_0x40c036+=_0x123918){_0x2ec806=_0x5a4c3a[_0x40c036],_0x386ac0=_0x5a4c3a[_0x40c036+0x1];if(_0x2ec806<_0x2eca73)_0x2eca73=_0x2ec806;if(_0x386ac0<_0x1d877d)_0x1d877d=_0x386ac0;if(_0x2ec806>_0x1419ea)_0x1419ea=_0x2ec806;if(_0x386ac0>_0x51157e)_0x51157e=_0x386ac0;}_0x5d4a09=Math[_0x36fc85(0x19c)](_0x1419ea-_0x2eca73,_0x51157e-_0x1d877d),_0x5d4a09=_0x5d4a09!==0x0?0x7fff/_0x5d4a09:0x0;}return earcutLinked(_0xca057a,_0x12e50f,_0x123918,_0x2eca73,_0x1d877d,_0x5d4a09,0x0),_0x12e50f;}function linkedList(_0x2e8cc6,_0x13d3b9,_0x607e13,_0x4cf5d8,_0x1931d6){var _0x3ac9cd=a1024_0x1447,_0xb4652a,_0x1ac226;if(_0x1931d6===signedArea(_0x2e8cc6,_0x13d3b9,_0x607e13,_0x4cf5d8)>0x0){for(_0xb4652a=_0x13d3b9;_0xb4652a<_0x607e13;_0xb4652a+=_0x4cf5d8)_0x1ac226=insertNode(_0xb4652a,_0x2e8cc6[_0xb4652a],_0x2e8cc6[_0xb4652a+0x1],_0x1ac226);}else{for(_0xb4652a=_0x607e13-_0x4cf5d8;_0xb4652a>=_0x13d3b9;_0xb4652a-=_0x4cf5d8)_0x1ac226=insertNode(_0xb4652a,_0x2e8cc6[_0xb4652a],_0x2e8cc6[_0xb4652a+0x1],_0x1ac226);}return _0x1ac226&&equals(_0x1ac226,_0x1ac226['next'])&&(removeNode(_0x1ac226),_0x1ac226=_0x1ac226[_0x3ac9cd(0x198)]),_0x1ac226;}function filterPoints(_0x48f70e,_0x2580c3){var _0x7a5afc=a1024_0x1447;if(!_0x48f70e)return _0x48f70e;if(!_0x2580c3)_0x2580c3=_0x48f70e;var _0x35df47=_0x48f70e,_0x19d709;do{_0x19d709=![];if(!_0x35df47[_0x7a5afc(0x18d)]&&(equals(_0x35df47,_0x35df47[_0x7a5afc(0x198)])||area(_0x35df47['prev'],_0x35df47,_0x35df47['next'])===0x0)){removeNode(_0x35df47),_0x35df47=_0x2580c3=_0x35df47[_0x7a5afc(0x1a0)];if(_0x35df47===_0x35df47['next'])break;_0x19d709=!![];}else _0x35df47=_0x35df47[_0x7a5afc(0x198)];}while(_0x19d709||_0x35df47!==_0x2580c3);return _0x2580c3;}function earcutLinked(_0x11f59d,_0x3388d7,_0x39a8fa,_0x4d9445,_0x573783,_0x29d35a,_0x2f899a){var _0x527f44=a1024_0x1447;if(!_0x11f59d)return;if(!_0x2f899a&&_0x29d35a)indexCurve(_0x11f59d,_0x4d9445,_0x573783,_0x29d35a);var _0x4e757f=_0x11f59d,_0x3d7c05,_0x3b5414;while(_0x11f59d[_0x527f44(0x1a0)]!==_0x11f59d['next']){_0x3d7c05=_0x11f59d[_0x527f44(0x1a0)],_0x3b5414=_0x11f59d['next'];if(_0x29d35a?isEarHashed(_0x11f59d,_0x4d9445,_0x573783,_0x29d35a):isEar(_0x11f59d)){_0x3388d7['push'](_0x3d7c05['i']/_0x39a8fa|0x0),_0x3388d7[_0x527f44(0x193)](_0x11f59d['i']/_0x39a8fa|0x0),_0x3388d7[_0x527f44(0x193)](_0x3b5414['i']/_0x39a8fa|0x0),removeNode(_0x11f59d),_0x11f59d=_0x3b5414[_0x527f44(0x198)],_0x4e757f=_0x3b5414[_0x527f44(0x198)];continue;}_0x11f59d=_0x3b5414;if(_0x11f59d===_0x4e757f){if(!_0x2f899a)earcutLinked(filterPoints(_0x11f59d),_0x3388d7,_0x39a8fa,_0x4d9445,_0x573783,_0x29d35a,0x1);else{if(_0x2f899a===0x1)_0x11f59d=cureLocalIntersections(filterPoints(_0x11f59d),_0x3388d7,_0x39a8fa),earcutLinked(_0x11f59d,_0x3388d7,_0x39a8fa,_0x4d9445,_0x573783,_0x29d35a,0x2);else _0x2f899a===0x2&&splitEarcut(_0x11f59d,_0x3388d7,_0x39a8fa,_0x4d9445,_0x573783,_0x29d35a);}break;}}}function isEar(_0x2f6505){var _0x43a6e1=a1024_0x1447,_0x5ac736=_0x2f6505[_0x43a6e1(0x1a0)],_0x373be6=_0x2f6505,_0x4e9a16=_0x2f6505[_0x43a6e1(0x198)];if(area(_0x5ac736,_0x373be6,_0x4e9a16)>=0x0)return![];var _0x3ecfbd=_0x5ac736['x'],_0x1c0823=_0x373be6['x'],_0x384db8=_0x4e9a16['x'],_0x5a3632=_0x5ac736['y'],_0x1e194c=_0x373be6['y'],_0x18719c=_0x4e9a16['y'],_0x362d49=_0x3ecfbd<_0x1c0823?_0x3ecfbd<_0x384db8?_0x3ecfbd:_0x384db8:_0x1c0823<_0x384db8?_0x1c0823:_0x384db8,_0x27c626=_0x5a3632<_0x1e194c?_0x5a3632<_0x18719c?_0x5a3632:_0x18719c:_0x1e194c<_0x18719c?_0x1e194c:_0x18719c,_0x2a06ed=_0x3ecfbd>_0x1c0823?_0x3ecfbd>_0x384db8?_0x3ecfbd:_0x384db8:_0x1c0823>_0x384db8?_0x1c0823:_0x384db8,_0x3cce6c=_0x5a3632>_0x1e194c?_0x5a3632>_0x18719c?_0x5a3632:_0x18719c:_0x1e194c>_0x18719c?_0x1e194c:_0x18719c,_0x5cf9b4=_0x4e9a16['next'];while(_0x5cf9b4!==_0x5ac736){if(_0x5cf9b4['x']>=_0x362d49&&_0x5cf9b4['x']<=_0x2a06ed&&_0x5cf9b4['y']>=_0x27c626&&_0x5cf9b4['y']<=_0x3cce6c&&pointInTriangle(_0x3ecfbd,_0x5a3632,_0x1c0823,_0x1e194c,_0x384db8,_0x18719c,_0x5cf9b4['x'],_0x5cf9b4['y'])&&area(_0x5cf9b4['prev'],_0x5cf9b4,_0x5cf9b4[_0x43a6e1(0x198)])>=0x0)return![];_0x5cf9b4=_0x5cf9b4[_0x43a6e1(0x198)];}return!![];}function isEarHashed(_0x549f4f,_0x278787,_0x526696,_0x35b3ee){var _0x4ce8f1=a1024_0x1447,_0x1ea995=_0x549f4f['prev'],_0x25e41d=_0x549f4f,_0x189005=_0x549f4f['next'];if(area(_0x1ea995,_0x25e41d,_0x189005)>=0x0)return![];var _0x5e62b7=_0x1ea995['x'],_0x3e36c2=_0x25e41d['x'],_0x3a9d8d=_0x189005['x'],_0xebd369=_0x1ea995['y'],_0x2f594b=_0x25e41d['y'],_0x567790=_0x189005['y'],_0x44aae8=_0x5e62b7<_0x3e36c2?_0x5e62b7<_0x3a9d8d?_0x5e62b7:_0x3a9d8d:_0x3e36c2<_0x3a9d8d?_0x3e36c2:_0x3a9d8d,_0x598f96=_0xebd369<_0x2f594b?_0xebd369<_0x567790?_0xebd369:_0x567790:_0x2f594b<_0x567790?_0x2f594b:_0x567790,_0x1f6f32=_0x5e62b7>_0x3e36c2?_0x5e62b7>_0x3a9d8d?_0x5e62b7:_0x3a9d8d:_0x3e36c2>_0x3a9d8d?_0x3e36c2:_0x3a9d8d,_0x4a352f=_0xebd369>_0x2f594b?_0xebd369>_0x567790?_0xebd369:_0x567790:_0x2f594b>_0x567790?_0x2f594b:_0x567790,_0x39b23b=zOrder(_0x44aae8,_0x598f96,_0x278787,_0x526696,_0x35b3ee),_0x4dd4a6=zOrder(_0x1f6f32,_0x4a352f,_0x278787,_0x526696,_0x35b3ee),_0x7ee6e9=_0x549f4f[_0x4ce8f1(0x19f)],_0x35f9ef=_0x549f4f['nextZ'];while(_0x7ee6e9&&_0x7ee6e9['z']>=_0x39b23b&&_0x35f9ef&&_0x35f9ef['z']<=_0x4dd4a6){if(_0x7ee6e9['x']>=_0x44aae8&&_0x7ee6e9['x']<=_0x1f6f32&&_0x7ee6e9['y']>=_0x598f96&&_0x7ee6e9['y']<=_0x4a352f&&_0x7ee6e9!==_0x1ea995&&_0x7ee6e9!==_0x189005&&pointInTriangle(_0x5e62b7,_0xebd369,_0x3e36c2,_0x2f594b,_0x3a9d8d,_0x567790,_0x7ee6e9['x'],_0x7ee6e9['y'])&&area(_0x7ee6e9['prev'],_0x7ee6e9,_0x7ee6e9[_0x4ce8f1(0x198)])>=0x0)return![];_0x7ee6e9=_0x7ee6e9[_0x4ce8f1(0x19f)];if(_0x35f9ef['x']>=_0x44aae8&&_0x35f9ef['x']<=_0x1f6f32&&_0x35f9ef['y']>=_0x598f96&&_0x35f9ef['y']<=_0x4a352f&&_0x35f9ef!==_0x1ea995&&_0x35f9ef!==_0x189005&&pointInTriangle(_0x5e62b7,_0xebd369,_0x3e36c2,_0x2f594b,_0x3a9d8d,_0x567790,_0x35f9ef['x'],_0x35f9ef['y'])&&area(_0x35f9ef[_0x4ce8f1(0x1a0)],_0x35f9ef,_0x35f9ef[_0x4ce8f1(0x198)])>=0x0)return![];_0x35f9ef=_0x35f9ef['nextZ'];}while(_0x7ee6e9&&_0x7ee6e9['z']>=_0x39b23b){if(_0x7ee6e9['x']>=_0x44aae8&&_0x7ee6e9['x']<=_0x1f6f32&&_0x7ee6e9['y']>=_0x598f96&&_0x7ee6e9['y']<=_0x4a352f&&_0x7ee6e9!==_0x1ea995&&_0x7ee6e9!==_0x189005&&pointInTriangle(_0x5e62b7,_0xebd369,_0x3e36c2,_0x2f594b,_0x3a9d8d,_0x567790,_0x7ee6e9['x'],_0x7ee6e9['y'])&&area(_0x7ee6e9[_0x4ce8f1(0x1a0)],_0x7ee6e9,_0x7ee6e9[_0x4ce8f1(0x198)])>=0x0)return![];_0x7ee6e9=_0x7ee6e9[_0x4ce8f1(0x19f)];}while(_0x35f9ef&&_0x35f9ef['z']<=_0x4dd4a6){if(_0x35f9ef['x']>=_0x44aae8&&_0x35f9ef['x']<=_0x1f6f32&&_0x35f9ef['y']>=_0x598f96&&_0x35f9ef['y']<=_0x4a352f&&_0x35f9ef!==_0x1ea995&&_0x35f9ef!==_0x189005&&pointInTriangle(_0x5e62b7,_0xebd369,_0x3e36c2,_0x2f594b,_0x3a9d8d,_0x567790,_0x35f9ef['x'],_0x35f9ef['y'])&&area(_0x35f9ef[_0x4ce8f1(0x1a0)],_0x35f9ef,_0x35f9ef['next'])>=0x0)return![];_0x35f9ef=_0x35f9ef['nextZ'];}return!![];}function cureLocalIntersections(_0x8cf018,_0x4eeffc,_0x7dae8c){var _0x1945fc=a1024_0x1447,_0x488697=_0x8cf018;do{var _0x37683e=_0x488697[_0x1945fc(0x1a0)],_0x472dfc=_0x488697['next']['next'];!equals(_0x37683e,_0x472dfc)&&intersects(_0x37683e,_0x488697,_0x488697[_0x1945fc(0x198)],_0x472dfc)&&locallyInside(_0x37683e,_0x472dfc)&&locallyInside(_0x472dfc,_0x37683e)&&(_0x4eeffc['push'](_0x37683e['i']/_0x7dae8c|0x0),_0x4eeffc[_0x1945fc(0x193)](_0x488697['i']/_0x7dae8c|0x0),_0x4eeffc[_0x1945fc(0x193)](_0x472dfc['i']/_0x7dae8c|0x0),removeNode(_0x488697),removeNode(_0x488697[_0x1945fc(0x198)]),_0x488697=_0x8cf018=_0x472dfc),_0x488697=_0x488697[_0x1945fc(0x198)];}while(_0x488697!==_0x8cf018);return filterPoints(_0x488697);}function splitEarcut(_0x37742f,_0x4dc719,_0x51e14d,_0x4c45ab,_0x2170e6,_0x46dad5){var _0x1e1a0f=a1024_0x1447,_0x4ecf3e=_0x37742f;do{var _0x244263=_0x4ecf3e[_0x1e1a0f(0x198)]['next'];while(_0x244263!==_0x4ecf3e[_0x1e1a0f(0x1a0)]){if(_0x4ecf3e['i']!==_0x244263['i']&&isValidDiagonal(_0x4ecf3e,_0x244263)){var _0x2a9b7f=splitPolygon(_0x4ecf3e,_0x244263);_0x4ecf3e=filterPoints(_0x4ecf3e,_0x4ecf3e[_0x1e1a0f(0x198)]),_0x2a9b7f=filterPoints(_0x2a9b7f,_0x2a9b7f[_0x1e1a0f(0x198)]),earcutLinked(_0x4ecf3e,_0x4dc719,_0x51e14d,_0x4c45ab,_0x2170e6,_0x46dad5,0x0),earcutLinked(_0x2a9b7f,_0x4dc719,_0x51e14d,_0x4c45ab,_0x2170e6,_0x46dad5,0x0);return;}_0x244263=_0x244263['next'];}_0x4ecf3e=_0x4ecf3e[_0x1e1a0f(0x198)];}while(_0x4ecf3e!==_0x37742f);}function a1024_0x5964(){var _0x2ce1b2=['83898IKdsTo','21ULRBQx','abs','min','holes','push','27740UUocUs','sort','nextZ','vertices','next','323954WSiMjW','default','1937280yWSUFd','max','length','24KINWzC','prevZ','prev','1076929IAFSiK','325692IfLKnd','2739DvAaIP','1036404neSxLT','48NRVoiV','flatten','steiner'];a1024_0x5964=function(){return _0x2ce1b2;};return a1024_0x5964();}function eliminateHoles(_0x1076d5,_0xd04a40,_0x224114,_0x15adda){var _0x8d3a16=a1024_0x1447,_0x570cfb=[],_0xc6cb69,_0x1f58cf,_0x443af6,_0x503e4b,_0x57b6ae;for(_0xc6cb69=0x0,_0x1f58cf=_0xd04a40[_0x8d3a16(0x19d)];_0xc6cb69<_0x1f58cf;_0xc6cb69++){_0x443af6=_0xd04a40[_0xc6cb69]*_0x15adda,_0x503e4b=_0xc6cb69<_0x1f58cf-0x1?_0xd04a40[_0xc6cb69+0x1]*_0x15adda:_0x1076d5[_0x8d3a16(0x19d)],_0x57b6ae=linkedList(_0x1076d5,_0x443af6,_0x503e4b,_0x15adda,![]);if(_0x57b6ae===_0x57b6ae[_0x8d3a16(0x198)])_0x57b6ae[_0x8d3a16(0x18d)]=!![];_0x570cfb[_0x8d3a16(0x193)](getLeftmost(_0x57b6ae));}_0x570cfb[_0x8d3a16(0x195)](compareX);for(_0xc6cb69=0x0;_0xc6cb69<_0x570cfb['length'];_0xc6cb69++){_0x224114=eliminateHole(_0x570cfb[_0xc6cb69],_0x224114);}return _0x224114;}function compareX(_0xa063da,_0x409789){return _0xa063da['x']-_0x409789['x'];}function a1024_0x1447(_0x5a6092,_0x5c9ff6){var _0x596433=a1024_0x5964();return a1024_0x1447=function(_0x144786,_0x95834){_0x144786=_0x144786-0x18a;var _0x5e57cd=_0x596433[_0x144786];return _0x5e57cd;},a1024_0x1447(_0x5a6092,_0x5c9ff6);}function eliminateHole(_0x1405f0,_0x26693e){var _0x230810=a1024_0x1447,_0x34f6f7=findHoleBridge(_0x1405f0,_0x26693e);if(!_0x34f6f7)return _0x26693e;var _0x39d118=splitPolygon(_0x34f6f7,_0x1405f0);return filterPoints(_0x39d118,_0x39d118[_0x230810(0x198)]),filterPoints(_0x34f6f7,_0x34f6f7[_0x230810(0x198)]);}function findHoleBridge(_0x43e2c3,_0xd5b8d7){var _0x4e54aa=a1024_0x1447,_0x577d65=_0xd5b8d7,_0xc70568=_0x43e2c3['x'],_0xb24a76=_0x43e2c3['y'],_0x2c1124=-Infinity,_0x403757;do{if(_0xb24a76<=_0x577d65['y']&&_0xb24a76>=_0x577d65[_0x4e54aa(0x198)]['y']&&_0x577d65['next']['y']!==_0x577d65['y']){var _0x37422f=_0x577d65['x']+(_0xb24a76-_0x577d65['y'])*(_0x577d65[_0x4e54aa(0x198)]['x']-_0x577d65['x'])/(_0x577d65[_0x4e54aa(0x198)]['y']-_0x577d65['y']);if(_0x37422f<=_0xc70568&&_0x37422f>_0x2c1124){_0x2c1124=_0x37422f,_0x403757=_0x577d65['x']<_0x577d65[_0x4e54aa(0x198)]['x']?_0x577d65:_0x577d65['next'];if(_0x37422f===_0xc70568)return _0x403757;}}_0x577d65=_0x577d65[_0x4e54aa(0x198)];}while(_0x577d65!==_0xd5b8d7);if(!_0x403757)return null;var _0x395639=_0x403757,_0x254c8b=_0x403757['x'],_0x3eb9e3=_0x403757['y'],_0x557719=Infinity,_0x431689;_0x577d65=_0x403757;do{_0xc70568>=_0x577d65['x']&&_0x577d65['x']>=_0x254c8b&&_0xc70568!==_0x577d65['x']&&pointInTriangle(_0xb24a76<_0x3eb9e3?_0xc70568:_0x2c1124,_0xb24a76,_0x254c8b,_0x3eb9e3,_0xb24a76<_0x3eb9e3?_0x2c1124:_0xc70568,_0xb24a76,_0x577d65['x'],_0x577d65['y'])&&(_0x431689=Math['abs'](_0xb24a76-_0x577d65['y'])/(_0xc70568-_0x577d65['x']),locallyInside(_0x577d65,_0x43e2c3)&&(_0x431689<_0x557719||_0x431689===_0x557719&&(_0x577d65['x']>_0x403757['x']||_0x577d65['x']===_0x403757['x']&&sectorContainsSector(_0x403757,_0x577d65)))&&(_0x403757=_0x577d65,_0x557719=_0x431689)),_0x577d65=_0x577d65['next'];}while(_0x577d65!==_0x395639);return _0x403757;}function sectorContainsSector(_0x264d9c,_0x15d0c0){var _0x246027=a1024_0x1447;return area(_0x264d9c[_0x246027(0x1a0)],_0x264d9c,_0x15d0c0['prev'])<0x0&&area(_0x15d0c0[_0x246027(0x198)],_0x264d9c,_0x264d9c['next'])<0x0;}function indexCurve(_0x9ecd83,_0x224ba6,_0x55468f,_0x2deee2){var _0x36e9d3=a1024_0x1447,_0x62af3f=_0x9ecd83;do{if(_0x62af3f['z']===0x0)_0x62af3f['z']=zOrder(_0x62af3f['x'],_0x62af3f['y'],_0x224ba6,_0x55468f,_0x2deee2);_0x62af3f['prevZ']=_0x62af3f[_0x36e9d3(0x1a0)],_0x62af3f['nextZ']=_0x62af3f[_0x36e9d3(0x198)],_0x62af3f=_0x62af3f['next'];}while(_0x62af3f!==_0x9ecd83);_0x62af3f['prevZ'][_0x36e9d3(0x196)]=null,_0x62af3f[_0x36e9d3(0x19f)]=null,sortLinked(_0x62af3f);}function sortLinked(_0x38b758){var _0x367627=a1024_0x1447,_0x59203f,_0x23f037,_0x1bdf58,_0x31b5f4,_0x256c85,_0x47e3ea,_0xd48011,_0x400767,_0x22b978=0x1;do{_0x23f037=_0x38b758,_0x38b758=null,_0x256c85=null,_0x47e3ea=0x0;while(_0x23f037){_0x47e3ea++,_0x1bdf58=_0x23f037,_0xd48011=0x0;for(_0x59203f=0x0;_0x59203f<_0x22b978;_0x59203f++){_0xd48011++,_0x1bdf58=_0x1bdf58['nextZ'];if(!_0x1bdf58)break;}_0x400767=_0x22b978;while(_0xd48011>0x0||_0x400767>0x0&&_0x1bdf58){_0xd48011!==0x0&&(_0x400767===0x0||!_0x1bdf58||_0x23f037['z']<=_0x1bdf58['z'])?(_0x31b5f4=_0x23f037,_0x23f037=_0x23f037[_0x367627(0x196)],_0xd48011--):(_0x31b5f4=_0x1bdf58,_0x1bdf58=_0x1bdf58[_0x367627(0x196)],_0x400767--);if(_0x256c85)_0x256c85[_0x367627(0x196)]=_0x31b5f4;else _0x38b758=_0x31b5f4;_0x31b5f4[_0x367627(0x19f)]=_0x256c85,_0x256c85=_0x31b5f4;}_0x23f037=_0x1bdf58;}_0x256c85['nextZ']=null,_0x22b978*=0x2;}while(_0x47e3ea>0x1);return _0x38b758;}function zOrder(_0x2d0b92,_0x1854ce,_0x32a187,_0x115a0c,_0x526518){return _0x2d0b92=(_0x2d0b92-_0x32a187)*_0x526518|0x0,_0x1854ce=(_0x1854ce-_0x115a0c)*_0x526518|0x0,_0x2d0b92=(_0x2d0b92|_0x2d0b92<<0x8)&0xff00ff,_0x2d0b92=(_0x2d0b92|_0x2d0b92<<0x4)&0xf0f0f0f,_0x2d0b92=(_0x2d0b92|_0x2d0b92<<0x2)&0x33333333,_0x2d0b92=(_0x2d0b92|_0x2d0b92<<0x1)&0x55555555,_0x1854ce=(_0x1854ce|_0x1854ce<<0x8)&0xff00ff,_0x1854ce=(_0x1854ce|_0x1854ce<<0x4)&0xf0f0f0f,_0x1854ce=(_0x1854ce|_0x1854ce<<0x2)&0x33333333,_0x1854ce=(_0x1854ce|_0x1854ce<<0x1)&0x55555555,_0x2d0b92|_0x1854ce<<0x1;}function getLeftmost(_0x1edde3){var _0x19218a=a1024_0x1447,_0x1b4344=_0x1edde3,_0x238f7d=_0x1edde3;do{if(_0x1b4344['x']<_0x238f7d['x']||_0x1b4344['x']===_0x238f7d['x']&&_0x1b4344['y']<_0x238f7d['y'])_0x238f7d=_0x1b4344;_0x1b4344=_0x1b4344[_0x19218a(0x198)];}while(_0x1b4344!==_0x1edde3);return _0x238f7d;}function pointInTriangle(_0x407445,_0x48ba36,_0x1a448a,_0x3c35ab,_0xf01912,_0x2861f4,_0x4d1887,_0x49baca){return(_0xf01912-_0x4d1887)*(_0x48ba36-_0x49baca)>=(_0x407445-_0x4d1887)*(_0x2861f4-_0x49baca)&&(_0x407445-_0x4d1887)*(_0x3c35ab-_0x49baca)>=(_0x1a448a-_0x4d1887)*(_0x48ba36-_0x49baca)&&(_0x1a448a-_0x4d1887)*(_0x2861f4-_0x49baca)>=(_0xf01912-_0x4d1887)*(_0x3c35ab-_0x49baca);}function isValidDiagonal(_0x3e7d51,_0xedb783){var _0x300852=a1024_0x1447;return _0x3e7d51['next']['i']!==_0xedb783['i']&&_0x3e7d51[_0x300852(0x1a0)]['i']!==_0xedb783['i']&&!intersectsPolygon(_0x3e7d51,_0xedb783)&&(locallyInside(_0x3e7d51,_0xedb783)&&locallyInside(_0xedb783,_0x3e7d51)&&middleInside(_0x3e7d51,_0xedb783)&&(area(_0x3e7d51[_0x300852(0x1a0)],_0x3e7d51,_0xedb783[_0x300852(0x1a0)])||area(_0x3e7d51,_0xedb783['prev'],_0xedb783))||equals(_0x3e7d51,_0xedb783)&&area(_0x3e7d51[_0x300852(0x1a0)],_0x3e7d51,_0x3e7d51[_0x300852(0x198)])>0x0&&area(_0xedb783[_0x300852(0x1a0)],_0xedb783,_0xedb783[_0x300852(0x198)])>0x0);}function area(_0x112f25,_0x3c821b,_0x39fcb3){return(_0x3c821b['y']-_0x112f25['y'])*(_0x39fcb3['x']-_0x3c821b['x'])-(_0x3c821b['x']-_0x112f25['x'])*(_0x39fcb3['y']-_0x3c821b['y']);}function equals(_0x3fc9ec,_0x3b5d6f){return _0x3fc9ec['x']===_0x3b5d6f['x']&&_0x3fc9ec['y']===_0x3b5d6f['y'];}function intersects(_0x4cd50f,_0x9baa0e,_0x1b90a2,_0x2d9ac0){var _0x3d89b3=sign(area(_0x4cd50f,_0x9baa0e,_0x1b90a2)),_0x601836=sign(area(_0x4cd50f,_0x9baa0e,_0x2d9ac0)),_0xfbbd87=sign(area(_0x1b90a2,_0x2d9ac0,_0x4cd50f)),_0x3e3e1b=sign(area(_0x1b90a2,_0x2d9ac0,_0x9baa0e));if(_0x3d89b3!==_0x601836&&_0xfbbd87!==_0x3e3e1b)return!![];if(_0x3d89b3===0x0&&onSegment(_0x4cd50f,_0x1b90a2,_0x9baa0e))return!![];if(_0x601836===0x0&&onSegment(_0x4cd50f,_0x2d9ac0,_0x9baa0e))return!![];if(_0xfbbd87===0x0&&onSegment(_0x1b90a2,_0x4cd50f,_0x2d9ac0))return!![];if(_0x3e3e1b===0x0&&onSegment(_0x1b90a2,_0x9baa0e,_0x2d9ac0))return!![];return![];}function onSegment(_0x4e1185,_0x100bee,_0x4867f9){var _0x35da07=a1024_0x1447;return _0x100bee['x']<=Math[_0x35da07(0x19c)](_0x4e1185['x'],_0x4867f9['x'])&&_0x100bee['x']>=Math[_0x35da07(0x191)](_0x4e1185['x'],_0x4867f9['x'])&&_0x100bee['y']<=Math['max'](_0x4e1185['y'],_0x4867f9['y'])&&_0x100bee['y']>=Math[_0x35da07(0x191)](_0x4e1185['y'],_0x4867f9['y']);}function sign(_0x5f2688){return _0x5f2688>0x0?0x1:_0x5f2688<0x0?-0x1:0x0;}function intersectsPolygon(_0x2c6c54,_0x3f0813){var _0x8e6ffa=a1024_0x1447,_0x227d87=_0x2c6c54;do{if(_0x227d87['i']!==_0x2c6c54['i']&&_0x227d87[_0x8e6ffa(0x198)]['i']!==_0x2c6c54['i']&&_0x227d87['i']!==_0x3f0813['i']&&_0x227d87[_0x8e6ffa(0x198)]['i']!==_0x3f0813['i']&&intersects(_0x227d87,_0x227d87[_0x8e6ffa(0x198)],_0x2c6c54,_0x3f0813))return!![];_0x227d87=_0x227d87[_0x8e6ffa(0x198)];}while(_0x227d87!==_0x2c6c54);return![];}function locallyInside(_0x8ca715,_0x492eb4){var _0x1ca5b9=a1024_0x1447;return area(_0x8ca715[_0x1ca5b9(0x1a0)],_0x8ca715,_0x8ca715[_0x1ca5b9(0x198)])<0x0?area(_0x8ca715,_0x492eb4,_0x8ca715[_0x1ca5b9(0x198)])>=0x0&&area(_0x8ca715,_0x8ca715[_0x1ca5b9(0x1a0)],_0x492eb4)>=0x0:area(_0x8ca715,_0x492eb4,_0x8ca715[_0x1ca5b9(0x1a0)])<0x0||area(_0x8ca715,_0x8ca715['next'],_0x492eb4)<0x0;}function middleInside(_0x5900a9,_0x178541){var _0x26e821=a1024_0x1447,_0x272c4f=_0x5900a9,_0x621eaf=![],_0x1b9493=(_0x5900a9['x']+_0x178541['x'])/0x2,_0x4296dc=(_0x5900a9['y']+_0x178541['y'])/0x2;do{if(_0x272c4f['y']>_0x4296dc!==_0x272c4f['next']['y']>_0x4296dc&&_0x272c4f[_0x26e821(0x198)]['y']!==_0x272c4f['y']&&_0x1b9493<(_0x272c4f[_0x26e821(0x198)]['x']-_0x272c4f['x'])*(_0x4296dc-_0x272c4f['y'])/(_0x272c4f['next']['y']-_0x272c4f['y'])+_0x272c4f['x'])_0x621eaf=!_0x621eaf;_0x272c4f=_0x272c4f[_0x26e821(0x198)];}while(_0x272c4f!==_0x5900a9);return _0x621eaf;}function splitPolygon(_0x29b690,_0x50d041){var _0x16dbab=a1024_0x1447,_0x4abe80=new Node(_0x29b690['i'],_0x29b690['x'],_0x29b690['y']),_0x307419=new Node(_0x50d041['i'],_0x50d041['x'],_0x50d041['y']),_0x33ec53=_0x29b690[_0x16dbab(0x198)],_0x1073b7=_0x50d041[_0x16dbab(0x1a0)];return _0x29b690[_0x16dbab(0x198)]=_0x50d041,_0x50d041[_0x16dbab(0x1a0)]=_0x29b690,_0x4abe80[_0x16dbab(0x198)]=_0x33ec53,_0x33ec53[_0x16dbab(0x1a0)]=_0x4abe80,_0x307419[_0x16dbab(0x198)]=_0x4abe80,_0x4abe80[_0x16dbab(0x1a0)]=_0x307419,_0x1073b7[_0x16dbab(0x198)]=_0x307419,_0x307419[_0x16dbab(0x1a0)]=_0x1073b7,_0x307419;}function insertNode(_0x11684c,_0x237c43,_0x3e35a2,_0x349cba){var _0x1901e6=a1024_0x1447,_0xe92bf0=new Node(_0x11684c,_0x237c43,_0x3e35a2);return!_0x349cba?(_0xe92bf0[_0x1901e6(0x1a0)]=_0xe92bf0,_0xe92bf0[_0x1901e6(0x198)]=_0xe92bf0):(_0xe92bf0[_0x1901e6(0x198)]=_0x349cba[_0x1901e6(0x198)],_0xe92bf0['prev']=_0x349cba,_0x349cba['next'][_0x1901e6(0x1a0)]=_0xe92bf0,_0x349cba[_0x1901e6(0x198)]=_0xe92bf0),_0xe92bf0;}function removeNode(_0x56e3ec){var _0x50d7e7=a1024_0x1447;_0x56e3ec[_0x50d7e7(0x198)][_0x50d7e7(0x1a0)]=_0x56e3ec['prev'],_0x56e3ec['prev'][_0x50d7e7(0x198)]=_0x56e3ec[_0x50d7e7(0x198)];if(_0x56e3ec[_0x50d7e7(0x19f)])_0x56e3ec['prevZ'][_0x50d7e7(0x196)]=_0x56e3ec['nextZ'];if(_0x56e3ec[_0x50d7e7(0x196)])_0x56e3ec['nextZ'][_0x50d7e7(0x19f)]=_0x56e3ec[_0x50d7e7(0x19f)];}function Node(_0x44b2e0,_0x176834,_0x1d8f4c){var _0x3c7d8d=a1024_0x1447;this['i']=_0x44b2e0,this['x']=_0x176834,this['y']=_0x1d8f4c,this[_0x3c7d8d(0x1a0)]=null,this[_0x3c7d8d(0x198)]=null,this['z']=0x0,this[_0x3c7d8d(0x19f)]=null,this[_0x3c7d8d(0x196)]=null,this[_0x3c7d8d(0x18d)]=![];}earcut['deviation']=function(_0x512cb9,_0x148be0,_0x1ad8bf,_0x2df461){var _0xda4b25=a1024_0x1447,_0x2d0a93=_0x148be0&&_0x148be0['length'],_0x11d9e9=_0x2d0a93?_0x148be0[0x0]*_0x1ad8bf:_0x512cb9[_0xda4b25(0x19d)],_0x38c650=Math['abs'](signedArea(_0x512cb9,0x0,_0x11d9e9,_0x1ad8bf));if(_0x2d0a93)for(var _0x26d9ee=0x0,_0x5dedee=_0x148be0[_0xda4b25(0x19d)];_0x26d9ee<_0x5dedee;_0x26d9ee++){var _0x476511=_0x148be0[_0x26d9ee]*_0x1ad8bf,_0x4ab77b=_0x26d9ee<_0x5dedee-0x1?_0x148be0[_0x26d9ee+0x1]*_0x1ad8bf:_0x512cb9[_0xda4b25(0x19d)];_0x38c650-=Math['abs'](signedArea(_0x512cb9,_0x476511,_0x4ab77b,_0x1ad8bf));}var _0x80f80d=0x0;for(_0x26d9ee=0x0;_0x26d9ee<_0x2df461[_0xda4b25(0x19d)];_0x26d9ee+=0x3){var _0x8dac78=_0x2df461[_0x26d9ee]*_0x1ad8bf,_0x517fee=_0x2df461[_0x26d9ee+0x1]*_0x1ad8bf,_0x168b4e=_0x2df461[_0x26d9ee+0x2]*_0x1ad8bf;_0x80f80d+=Math[_0xda4b25(0x190)]((_0x512cb9[_0x8dac78]-_0x512cb9[_0x168b4e])*(_0x512cb9[_0x517fee+0x1]-_0x512cb9[_0x8dac78+0x1])-(_0x512cb9[_0x8dac78]-_0x512cb9[_0x517fee])*(_0x512cb9[_0x168b4e+0x1]-_0x512cb9[_0x8dac78+0x1]));}return _0x38c650===0x0&&_0x80f80d===0x0?0x0:Math[_0xda4b25(0x190)]((_0x80f80d-_0x38c650)/_0x38c650);};function signedArea(_0xe88f09,_0x50ea0c,_0x67ac0,_0x504932){var _0x3e0d9e=0x0;for(var _0x42cfa2=_0x50ea0c,_0x48ab3e=_0x67ac0-_0x504932;_0x42cfa2<_0x67ac0;_0x42cfa2+=_0x504932){_0x3e0d9e+=(_0xe88f09[_0x48ab3e]-_0xe88f09[_0x42cfa2])*(_0xe88f09[_0x42cfa2+0x1]+_0xe88f09[_0x48ab3e+0x1]),_0x48ab3e=_0x42cfa2;}return _0x3e0d9e;}earcut[a1024_0x140630(0x18c)]=function(_0x39b66b){var _0x3deef1=a1024_0x140630,_0x1393d8=_0x39b66b[0x0][0x0][_0x3deef1(0x19d)],_0x243ef5={'vertices':[],'holes':[],'dimensions':_0x1393d8},_0xaa8f7f=0x0;for(var _0x35bd4d=0x0;_0x35bd4d<_0x39b66b[_0x3deef1(0x19d)];_0x35bd4d++){for(var _0x13d2b5=0x0;_0x13d2b5<_0x39b66b[_0x35bd4d][_0x3deef1(0x19d)];_0x13d2b5++){for(var _0x352215=0x0;_0x352215<_0x1393d8;_0x352215++)_0x243ef5[_0x3deef1(0x197)]['push'](_0x39b66b[_0x35bd4d][_0x13d2b5][_0x352215]);}_0x35bd4d>0x0&&(_0xaa8f7f+=_0x39b66b[_0x35bd4d-0x1][_0x3deef1(0x19d)],_0x243ef5[_0x3deef1(0x192)][_0x3deef1(0x193)](_0xaa8f7f));}return _0x243ef5;},earcut_1[a1024_0x140630(0x19a)]=_default;export{earcut_1 as default};