var a161_0x437c26=a161_0x59dc;(function(_0x2284f2,_0x5992c9){var _0x21bee9=a161_0x59dc,_0x47d335=_0x2284f2();while(!![]){try{var _0x4d6257=parseInt(_0x21bee9(0x181))/0x1*(parseInt(_0x21bee9(0x1af))/0x2)+parseInt(_0x21bee9(0x1a4))/0x3*(-parseInt(_0x21bee9(0x16a))/0x4)+-parseInt(_0x21bee9(0x19d))/0x5+-parseInt(_0x21bee9(0x195))/0x6*(-parseInt(_0x21bee9(0x193))/0x7)+-parseInt(_0x21bee9(0x171))/0x8*(parseInt(_0x21bee9(0x1a1))/0x9)+-parseInt(_0x21bee9(0x177))/0xa+parseInt(_0x21bee9(0x18a))/0xb*(parseInt(_0x21bee9(0x17a))/0xc);if(_0x4d6257===_0x5992c9)break;else _0x47d335['push'](_0x47d335['shift']());}catch(_0x409802){_0x47d335['push'](_0x47d335['shift']());}}}(a161_0x4fd0,0x62be7));import a161_0x1905fe from'./Cartesian3.js';import a161_0x4a4e9b from'./Check.js';import a161_0x32aca3 from'./defaultValue.js';import a161_0x190201 from'./defined.js';import a161_0x1b64be from'./DeveloperError.js';import a161_0x24251a from'./Math.js';function Matrix3(_0x3573c5,_0x4c2582,_0x432351,_0x4d2595,_0x5824c2,_0xd07e65,_0xf51fb8,_0x543533,_0x4a36c7){this[0x0]=a161_0x32aca3(_0x3573c5,0x0),this[0x1]=a161_0x32aca3(_0x4d2595,0x0),this[0x2]=a161_0x32aca3(_0xf51fb8,0x0),this[0x3]=a161_0x32aca3(_0x4c2582,0x0),this[0x4]=a161_0x32aca3(_0x5824c2,0x0),this[0x5]=a161_0x32aca3(_0x543533,0x0),this[0x6]=a161_0x32aca3(_0x432351,0x0),this[0x7]=a161_0x32aca3(_0xd07e65,0x0),this[0x8]=a161_0x32aca3(_0x4a36c7,0x0);}Matrix3[a161_0x437c26(0x16d)]=0x9,Matrix3[a161_0x437c26(0x1ac)]=function(_0x39a0f4,_0x118690,_0xba36be){var _0x42e0a5=a161_0x437c26;return a161_0x4a4e9b['typeOf']['object'](_0x42e0a5(0x162),_0x39a0f4),a161_0x4a4e9b[_0x42e0a5(0x1ab)](_0x42e0a5(0x17d),_0x118690),_0xba36be=a161_0x32aca3(_0xba36be,0x0),_0x118690[_0xba36be++]=_0x39a0f4[0x0],_0x118690[_0xba36be++]=_0x39a0f4[0x1],_0x118690[_0xba36be++]=_0x39a0f4[0x2],_0x118690[_0xba36be++]=_0x39a0f4[0x3],_0x118690[_0xba36be++]=_0x39a0f4[0x4],_0x118690[_0xba36be++]=_0x39a0f4[0x5],_0x118690[_0xba36be++]=_0x39a0f4[0x6],_0x118690[_0xba36be++]=_0x39a0f4[0x7],_0x118690[_0xba36be++]=_0x39a0f4[0x8],_0x118690;},Matrix3[a161_0x437c26(0x180)]=function(_0x2c2034,_0x30a82f,_0x2342bc){var _0x51e2ab=a161_0x437c26;return a161_0x4a4e9b[_0x51e2ab(0x1ab)](_0x51e2ab(0x17d),_0x2c2034),_0x30a82f=a161_0x32aca3(_0x30a82f,0x0),!a161_0x190201(_0x2342bc)&&(_0x2342bc=new Matrix3()),_0x2342bc[0x0]=_0x2c2034[_0x30a82f++],_0x2342bc[0x1]=_0x2c2034[_0x30a82f++],_0x2342bc[0x2]=_0x2c2034[_0x30a82f++],_0x2342bc[0x3]=_0x2c2034[_0x30a82f++],_0x2342bc[0x4]=_0x2c2034[_0x30a82f++],_0x2342bc[0x5]=_0x2c2034[_0x30a82f++],_0x2342bc[0x6]=_0x2c2034[_0x30a82f++],_0x2342bc[0x7]=_0x2c2034[_0x30a82f++],_0x2342bc[0x8]=_0x2c2034[_0x30a82f++],_0x2342bc;},Matrix3['clone']=function(_0xb8b4ad,_0x4a8945){if(!a161_0x190201(_0xb8b4ad))return undefined;if(!a161_0x190201(_0x4a8945))return new Matrix3(_0xb8b4ad[0x0],_0xb8b4ad[0x3],_0xb8b4ad[0x6],_0xb8b4ad[0x1],_0xb8b4ad[0x4],_0xb8b4ad[0x7],_0xb8b4ad[0x2],_0xb8b4ad[0x5],_0xb8b4ad[0x8]);return _0x4a8945[0x0]=_0xb8b4ad[0x0],_0x4a8945[0x1]=_0xb8b4ad[0x1],_0x4a8945[0x2]=_0xb8b4ad[0x2],_0x4a8945[0x3]=_0xb8b4ad[0x3],_0x4a8945[0x4]=_0xb8b4ad[0x4],_0x4a8945[0x5]=_0xb8b4ad[0x5],_0x4a8945[0x6]=_0xb8b4ad[0x6],_0x4a8945[0x7]=_0xb8b4ad[0x7],_0x4a8945[0x8]=_0xb8b4ad[0x8],_0x4a8945;},Matrix3[a161_0x437c26(0x19b)]=function(_0x39b1b0,_0x2c1d8e,_0x21518e){var _0xe3f04a=a161_0x437c26;return a161_0x4a4e9b[_0xe3f04a(0x1ab)](_0xe3f04a(0x17d),_0x39b1b0),_0x2c1d8e=a161_0x32aca3(_0x2c1d8e,0x0),!a161_0x190201(_0x21518e)&&(_0x21518e=new Matrix3()),_0x21518e[0x0]=_0x39b1b0[_0x2c1d8e],_0x21518e[0x1]=_0x39b1b0[_0x2c1d8e+0x1],_0x21518e[0x2]=_0x39b1b0[_0x2c1d8e+0x2],_0x21518e[0x3]=_0x39b1b0[_0x2c1d8e+0x3],_0x21518e[0x4]=_0x39b1b0[_0x2c1d8e+0x4],_0x21518e[0x5]=_0x39b1b0[_0x2c1d8e+0x5],_0x21518e[0x6]=_0x39b1b0[_0x2c1d8e+0x6],_0x21518e[0x7]=_0x39b1b0[_0x2c1d8e+0x7],_0x21518e[0x8]=_0x39b1b0[_0x2c1d8e+0x8],_0x21518e;},Matrix3[a161_0x437c26(0x170)]=function(_0x395456,_0x371619){var _0x43e0da=a161_0x437c26;return a161_0x4a4e9b[_0x43e0da(0x1ab)](_0x43e0da(0x190),_0x395456),Matrix3[_0x43e0da(0x15f)](_0x395456,_0x371619);},Matrix3['fromRowMajorArray']=function(_0x1a151a,_0xdb7e5f){var _0x43739b=a161_0x437c26;a161_0x4a4e9b[_0x43739b(0x1ab)](_0x43739b(0x190),_0x1a151a);if(!a161_0x190201(_0xdb7e5f))return new Matrix3(_0x1a151a[0x0],_0x1a151a[0x1],_0x1a151a[0x2],_0x1a151a[0x3],_0x1a151a[0x4],_0x1a151a[0x5],_0x1a151a[0x6],_0x1a151a[0x7],_0x1a151a[0x8]);return _0xdb7e5f[0x0]=_0x1a151a[0x0],_0xdb7e5f[0x1]=_0x1a151a[0x3],_0xdb7e5f[0x2]=_0x1a151a[0x6],_0xdb7e5f[0x3]=_0x1a151a[0x1],_0xdb7e5f[0x4]=_0x1a151a[0x4],_0xdb7e5f[0x5]=_0x1a151a[0x7],_0xdb7e5f[0x6]=_0x1a151a[0x2],_0xdb7e5f[0x7]=_0x1a151a[0x5],_0xdb7e5f[0x8]=_0x1a151a[0x8],_0xdb7e5f;},Matrix3[a161_0x437c26(0x179)]=function(_0x5cc9b1,_0x306128){var _0x24df12=a161_0x437c26;a161_0x4a4e9b[_0x24df12(0x189)][_0x24df12(0x18f)](_0x24df12(0x1b1),_0x5cc9b1);var _0x4bb1be=_0x5cc9b1['x']*_0x5cc9b1['x'],_0x4cd45c=_0x5cc9b1['x']*_0x5cc9b1['y'],_0x3e1d89=_0x5cc9b1['x']*_0x5cc9b1['z'],_0x5b83dc=_0x5cc9b1['x']*_0x5cc9b1['w'],_0x10cb55=_0x5cc9b1['y']*_0x5cc9b1['y'],_0x99eea6=_0x5cc9b1['y']*_0x5cc9b1['z'],_0x124804=_0x5cc9b1['y']*_0x5cc9b1['w'],_0x548fff=_0x5cc9b1['z']*_0x5cc9b1['z'],_0xe4117a=_0x5cc9b1['z']*_0x5cc9b1['w'],_0x1347f1=_0x5cc9b1['w']*_0x5cc9b1['w'],_0x391642=_0x4bb1be-_0x10cb55-_0x548fff+_0x1347f1,_0x576105=0x2*(_0x4cd45c-_0xe4117a),_0x4d1f31=0x2*(_0x3e1d89+_0x124804),_0xf6ffdb=0x2*(_0x4cd45c+_0xe4117a),_0x201595=-_0x4bb1be+_0x10cb55-_0x548fff+_0x1347f1,_0x43dcef=0x2*(_0x99eea6-_0x5b83dc),_0x48dd89=0x2*(_0x3e1d89-_0x124804),_0x112fc6=0x2*(_0x99eea6+_0x5b83dc),_0x13cb55=-_0x4bb1be-_0x10cb55+_0x548fff+_0x1347f1;if(!a161_0x190201(_0x306128))return new Matrix3(_0x391642,_0x576105,_0x4d1f31,_0xf6ffdb,_0x201595,_0x43dcef,_0x48dd89,_0x112fc6,_0x13cb55);return _0x306128[0x0]=_0x391642,_0x306128[0x1]=_0xf6ffdb,_0x306128[0x2]=_0x48dd89,_0x306128[0x3]=_0x576105,_0x306128[0x4]=_0x201595,_0x306128[0x5]=_0x112fc6,_0x306128[0x6]=_0x4d1f31,_0x306128[0x7]=_0x43dcef,_0x306128[0x8]=_0x13cb55,_0x306128;},Matrix3['fromHeadingPitchRoll']=function(_0x41fb43,_0xc06b6b){var _0x11759=a161_0x437c26;a161_0x4a4e9b['typeOf'][_0x11759(0x18f)]('headingPitchRoll',_0x41fb43);var _0x44ec3d=Math[_0x11759(0x185)](-_0x41fb43[_0x11759(0x17b)]),_0x130a96=Math[_0x11759(0x185)](-_0x41fb43[_0x11759(0x160)]),_0x25ce49=Math['cos'](_0x41fb43[_0x11759(0x183)]),_0x5603df=Math['sin'](-_0x41fb43[_0x11759(0x17b)]),_0x3f94eb=Math['sin'](-_0x41fb43[_0x11759(0x160)]),_0x17fb8e=Math[_0x11759(0x1a9)](_0x41fb43['roll']),_0x5ad1a7=_0x44ec3d*_0x130a96,_0x3a7b23=-_0x25ce49*_0x3f94eb+_0x17fb8e*_0x5603df*_0x130a96,_0x1bf26f=_0x17fb8e*_0x3f94eb+_0x25ce49*_0x5603df*_0x130a96,_0x59de56=_0x44ec3d*_0x3f94eb,_0x1baa5e=_0x25ce49*_0x130a96+_0x17fb8e*_0x5603df*_0x3f94eb,_0x55e4a1=-_0x17fb8e*_0x130a96+_0x25ce49*_0x5603df*_0x3f94eb,_0x50dec3=-_0x5603df,_0x11678c=_0x17fb8e*_0x44ec3d,_0x9c4c53=_0x25ce49*_0x44ec3d;if(!a161_0x190201(_0xc06b6b))return new Matrix3(_0x5ad1a7,_0x3a7b23,_0x1bf26f,_0x59de56,_0x1baa5e,_0x55e4a1,_0x50dec3,_0x11678c,_0x9c4c53);return _0xc06b6b[0x0]=_0x5ad1a7,_0xc06b6b[0x1]=_0x59de56,_0xc06b6b[0x2]=_0x50dec3,_0xc06b6b[0x3]=_0x3a7b23,_0xc06b6b[0x4]=_0x1baa5e,_0xc06b6b[0x5]=_0x11678c,_0xc06b6b[0x6]=_0x1bf26f,_0xc06b6b[0x7]=_0x55e4a1,_0xc06b6b[0x8]=_0x9c4c53,_0xc06b6b;},Matrix3[a161_0x437c26(0x18b)]=function(_0x812506,_0x5c7361){var _0x3e5b57=a161_0x437c26;a161_0x4a4e9b[_0x3e5b57(0x189)][_0x3e5b57(0x18f)](_0x3e5b57(0x1b0),_0x812506);if(!a161_0x190201(_0x5c7361))return new Matrix3(_0x812506['x'],0x0,0x0,0x0,_0x812506['y'],0x0,0x0,0x0,_0x812506['z']);return _0x5c7361[0x0]=_0x812506['x'],_0x5c7361[0x1]=0x0,_0x5c7361[0x2]=0x0,_0x5c7361[0x3]=0x0,_0x5c7361[0x4]=_0x812506['y'],_0x5c7361[0x5]=0x0,_0x5c7361[0x6]=0x0,_0x5c7361[0x7]=0x0,_0x5c7361[0x8]=_0x812506['z'],_0x5c7361;},Matrix3['fromUniformScale']=function(_0x17c721,_0x1bacd8){var _0x15ddab=a161_0x437c26;a161_0x4a4e9b['typeOf']['number'](_0x15ddab(0x1b0),_0x17c721);if(!a161_0x190201(_0x1bacd8))return new Matrix3(_0x17c721,0x0,0x0,0x0,_0x17c721,0x0,0x0,0x0,_0x17c721);return _0x1bacd8[0x0]=_0x17c721,_0x1bacd8[0x1]=0x0,_0x1bacd8[0x2]=0x0,_0x1bacd8[0x3]=0x0,_0x1bacd8[0x4]=_0x17c721,_0x1bacd8[0x5]=0x0,_0x1bacd8[0x6]=0x0,_0x1bacd8[0x7]=0x0,_0x1bacd8[0x8]=_0x17c721,_0x1bacd8;},Matrix3['fromCrossProduct']=function(_0x5859ca,_0x533303){var _0x1ec6bb=a161_0x437c26;a161_0x4a4e9b[_0x1ec6bb(0x189)][_0x1ec6bb(0x18f)](_0x1ec6bb(0x198),_0x5859ca);if(!a161_0x190201(_0x533303))return new Matrix3(0x0,-_0x5859ca['z'],_0x5859ca['y'],_0x5859ca['z'],0x0,-_0x5859ca['x'],-_0x5859ca['y'],_0x5859ca['x'],0x0);return _0x533303[0x0]=0x0,_0x533303[0x1]=_0x5859ca['z'],_0x533303[0x2]=-_0x5859ca['y'],_0x533303[0x3]=-_0x5859ca['z'],_0x533303[0x4]=0x0,_0x533303[0x5]=_0x5859ca['x'],_0x533303[0x6]=_0x5859ca['y'],_0x533303[0x7]=-_0x5859ca['x'],_0x533303[0x8]=0x0,_0x533303;},Matrix3[a161_0x437c26(0x1aa)]=function(_0x36dab3,_0x23acfc){var _0x358b5c=a161_0x437c26;a161_0x4a4e9b['typeOf'][_0x358b5c(0x161)](_0x358b5c(0x15b),_0x36dab3);var _0x269daa=Math['cos'](_0x36dab3),_0x328825=Math[_0x358b5c(0x1a9)](_0x36dab3);if(!a161_0x190201(_0x23acfc))return new Matrix3(0x1,0x0,0x0,0x0,_0x269daa,-_0x328825,0x0,_0x328825,_0x269daa);return _0x23acfc[0x0]=0x1,_0x23acfc[0x1]=0x0,_0x23acfc[0x2]=0x0,_0x23acfc[0x3]=0x0,_0x23acfc[0x4]=_0x269daa,_0x23acfc[0x5]=_0x328825,_0x23acfc[0x6]=0x0,_0x23acfc[0x7]=-_0x328825,_0x23acfc[0x8]=_0x269daa,_0x23acfc;},Matrix3[a161_0x437c26(0x18e)]=function(_0x42dbae,_0x205d07){var _0x2df67e=a161_0x437c26;a161_0x4a4e9b[_0x2df67e(0x189)]['number'](_0x2df67e(0x15b),_0x42dbae);var _0x53d8ae=Math[_0x2df67e(0x185)](_0x42dbae),_0x5b53fe=Math[_0x2df67e(0x1a9)](_0x42dbae);if(!a161_0x190201(_0x205d07))return new Matrix3(_0x53d8ae,0x0,_0x5b53fe,0x0,0x1,0x0,-_0x5b53fe,0x0,_0x53d8ae);return _0x205d07[0x0]=_0x53d8ae,_0x205d07[0x1]=0x0,_0x205d07[0x2]=-_0x5b53fe,_0x205d07[0x3]=0x0,_0x205d07[0x4]=0x1,_0x205d07[0x5]=0x0,_0x205d07[0x6]=_0x5b53fe,_0x205d07[0x7]=0x0,_0x205d07[0x8]=_0x53d8ae,_0x205d07;},Matrix3['fromRotationZ']=function(_0x2a1355,_0x18d1ae){var _0x4ff943=a161_0x437c26;a161_0x4a4e9b[_0x4ff943(0x189)]['number'](_0x4ff943(0x15b),_0x2a1355);var _0x47e626=Math[_0x4ff943(0x185)](_0x2a1355),_0x58d8d3=Math[_0x4ff943(0x1a9)](_0x2a1355);if(!a161_0x190201(_0x18d1ae))return new Matrix3(_0x47e626,-_0x58d8d3,0x0,_0x58d8d3,_0x47e626,0x0,0x0,0x0,0x1);return _0x18d1ae[0x0]=_0x47e626,_0x18d1ae[0x1]=_0x58d8d3,_0x18d1ae[0x2]=0x0,_0x18d1ae[0x3]=-_0x58d8d3,_0x18d1ae[0x4]=_0x47e626,_0x18d1ae[0x5]=0x0,_0x18d1ae[0x6]=0x0,_0x18d1ae[0x7]=0x0,_0x18d1ae[0x8]=0x1,_0x18d1ae;},Matrix3['toArray']=function(_0x4c9d61,_0x4299e0){var _0x5a347b=a161_0x437c26;a161_0x4a4e9b[_0x5a347b(0x189)][_0x5a347b(0x18f)](_0x5a347b(0x1a7),_0x4c9d61);if(!a161_0x190201(_0x4299e0))return[_0x4c9d61[0x0],_0x4c9d61[0x1],_0x4c9d61[0x2],_0x4c9d61[0x3],_0x4c9d61[0x4],_0x4c9d61[0x5],_0x4c9d61[0x6],_0x4c9d61[0x7],_0x4c9d61[0x8]];return _0x4299e0[0x0]=_0x4c9d61[0x0],_0x4299e0[0x1]=_0x4c9d61[0x1],_0x4299e0[0x2]=_0x4c9d61[0x2],_0x4299e0[0x3]=_0x4c9d61[0x3],_0x4299e0[0x4]=_0x4c9d61[0x4],_0x4299e0[0x5]=_0x4c9d61[0x5],_0x4299e0[0x6]=_0x4c9d61[0x6],_0x4299e0[0x7]=_0x4c9d61[0x7],_0x4299e0[0x8]=_0x4c9d61[0x8],_0x4299e0;},Matrix3[a161_0x437c26(0x167)]=function(_0x11c061,_0xe4900b){var _0x4478f9=a161_0x437c26;return a161_0x4a4e9b[_0x4478f9(0x189)]['number'][_0x4478f9(0x19c)](_0x4478f9(0x164),_0xe4900b,0x0),a161_0x4a4e9b[_0x4478f9(0x189)]['number']['lessThanOrEquals'](_0x4478f9(0x164),_0xe4900b,0x2),a161_0x4a4e9b[_0x4478f9(0x189)][_0x4478f9(0x161)]['greaterThanOrEquals']('column',_0x11c061,0x0),a161_0x4a4e9b[_0x4478f9(0x189)][_0x4478f9(0x161)][_0x4478f9(0x1a3)](_0x4478f9(0x196),_0x11c061,0x2),_0x11c061*0x3+_0xe4900b;},Matrix3['getColumn']=function(_0x3bbcd,_0x54d31d,_0x13bfce){var _0x1d8a43=a161_0x437c26;a161_0x4a4e9b[_0x1d8a43(0x189)]['object'](_0x1d8a43(0x1a7),_0x3bbcd),a161_0x4a4e9b['typeOf'][_0x1d8a43(0x161)][_0x1d8a43(0x19c)](_0x1d8a43(0x169),_0x54d31d,0x0),a161_0x4a4e9b[_0x1d8a43(0x189)][_0x1d8a43(0x161)][_0x1d8a43(0x1a3)](_0x1d8a43(0x169),_0x54d31d,0x2),a161_0x4a4e9b[_0x1d8a43(0x189)][_0x1d8a43(0x18f)](_0x1d8a43(0x15c),_0x13bfce);var _0x62759f=_0x54d31d*0x3,_0x2f189e=_0x3bbcd[_0x62759f],_0x515040=_0x3bbcd[_0x62759f+0x1],_0x4e066e=_0x3bbcd[_0x62759f+0x2];return _0x13bfce['x']=_0x2f189e,_0x13bfce['y']=_0x515040,_0x13bfce['z']=_0x4e066e,_0x13bfce;},Matrix3[a161_0x437c26(0x16c)]=function(_0x3a787a,_0x1f4e11,_0x47adac,_0x291283){var _0x5ef446=a161_0x437c26;a161_0x4a4e9b[_0x5ef446(0x189)]['object']('matrix',_0x3a787a),a161_0x4a4e9b[_0x5ef446(0x189)][_0x5ef446(0x161)][_0x5ef446(0x19c)](_0x5ef446(0x169),_0x1f4e11,0x0),a161_0x4a4e9b[_0x5ef446(0x189)][_0x5ef446(0x161)][_0x5ef446(0x1a3)](_0x5ef446(0x169),_0x1f4e11,0x2),a161_0x4a4e9b[_0x5ef446(0x189)]['object']('cartesian',_0x47adac),a161_0x4a4e9b[_0x5ef446(0x189)][_0x5ef446(0x18f)](_0x5ef446(0x15c),_0x291283),_0x291283=Matrix3[_0x5ef446(0x15f)](_0x3a787a,_0x291283);var _0x5566d5=_0x1f4e11*0x3;return _0x291283[_0x5566d5]=_0x47adac['x'],_0x291283[_0x5566d5+0x1]=_0x47adac['y'],_0x291283[_0x5566d5+0x2]=_0x47adac['z'],_0x291283;},Matrix3['getRow']=function(_0xeef22e,_0x21ba60,_0x3c409d){var _0x1c7c58=a161_0x437c26;a161_0x4a4e9b['typeOf'][_0x1c7c58(0x18f)]('matrix',_0xeef22e),a161_0x4a4e9b[_0x1c7c58(0x189)]['number']['greaterThanOrEquals'](_0x1c7c58(0x169),_0x21ba60,0x0),a161_0x4a4e9b['typeOf'][_0x1c7c58(0x161)]['lessThanOrEquals']('index',_0x21ba60,0x2),a161_0x4a4e9b['typeOf'][_0x1c7c58(0x18f)](_0x1c7c58(0x15c),_0x3c409d);var _0x34c00d=_0xeef22e[_0x21ba60],_0x5c199f=_0xeef22e[_0x21ba60+0x3],_0x4ec8a2=_0xeef22e[_0x21ba60+0x6];return _0x3c409d['x']=_0x34c00d,_0x3c409d['y']=_0x5c199f,_0x3c409d['z']=_0x4ec8a2,_0x3c409d;},Matrix3[a161_0x437c26(0x1a0)]=function(_0x2fdcdd,_0x40cbde,_0x13adfa,_0x2513bc){var _0x5cee4f=a161_0x437c26;return a161_0x4a4e9b[_0x5cee4f(0x189)][_0x5cee4f(0x18f)](_0x5cee4f(0x1a7),_0x2fdcdd),a161_0x4a4e9b[_0x5cee4f(0x189)][_0x5cee4f(0x161)][_0x5cee4f(0x19c)]('index',_0x40cbde,0x0),a161_0x4a4e9b[_0x5cee4f(0x189)][_0x5cee4f(0x161)]['lessThanOrEquals'](_0x5cee4f(0x169),_0x40cbde,0x2),a161_0x4a4e9b[_0x5cee4f(0x189)][_0x5cee4f(0x18f)](_0x5cee4f(0x18c),_0x13adfa),a161_0x4a4e9b['typeOf'][_0x5cee4f(0x18f)](_0x5cee4f(0x15c),_0x2513bc),_0x2513bc=Matrix3[_0x5cee4f(0x15f)](_0x2fdcdd,_0x2513bc),_0x2513bc[_0x40cbde]=_0x13adfa['x'],_0x2513bc[_0x40cbde+0x3]=_0x13adfa['y'],_0x2513bc[_0x40cbde+0x6]=_0x13adfa['z'],_0x2513bc;};var scratchColumn=new a161_0x1905fe();Matrix3[a161_0x437c26(0x16f)]=function(_0x1eee43,_0xbac2d){var _0x46e1cd=a161_0x437c26;return a161_0x4a4e9b[_0x46e1cd(0x189)][_0x46e1cd(0x18f)](_0x46e1cd(0x1a7),_0x1eee43),a161_0x4a4e9b[_0x46e1cd(0x189)][_0x46e1cd(0x18f)](_0x46e1cd(0x15c),_0xbac2d),_0xbac2d['x']=a161_0x1905fe[_0x46e1cd(0x168)](a161_0x1905fe[_0x46e1cd(0x1ad)](_0x1eee43[0x0],_0x1eee43[0x1],_0x1eee43[0x2],scratchColumn)),_0xbac2d['y']=a161_0x1905fe['magnitude'](a161_0x1905fe[_0x46e1cd(0x1ad)](_0x1eee43[0x3],_0x1eee43[0x4],_0x1eee43[0x5],scratchColumn)),_0xbac2d['z']=a161_0x1905fe[_0x46e1cd(0x168)](a161_0x1905fe[_0x46e1cd(0x1ad)](_0x1eee43[0x6],_0x1eee43[0x7],_0x1eee43[0x8],scratchColumn)),_0xbac2d;};var scratchScale=new a161_0x1905fe();Matrix3[a161_0x437c26(0x176)]=function(_0x2ca456){var _0x26945f=a161_0x437c26;return Matrix3[_0x26945f(0x16f)](_0x2ca456,scratchScale),a161_0x1905fe['maximumComponent'](scratchScale);},Matrix3[a161_0x437c26(0x197)]=function(_0x36bf27,_0x134d1d,_0x77f9c1){var _0x3bd147=a161_0x437c26;a161_0x4a4e9b['typeOf'][_0x3bd147(0x18f)](_0x3bd147(0x187),_0x36bf27),a161_0x4a4e9b[_0x3bd147(0x189)][_0x3bd147(0x18f)](_0x3bd147(0x1a2),_0x134d1d),a161_0x4a4e9b['typeOf'][_0x3bd147(0x18f)]('result',_0x77f9c1);var _0x42089e=_0x36bf27[0x0]*_0x134d1d[0x0]+_0x36bf27[0x3]*_0x134d1d[0x1]+_0x36bf27[0x6]*_0x134d1d[0x2],_0x298ef6=_0x36bf27[0x1]*_0x134d1d[0x0]+_0x36bf27[0x4]*_0x134d1d[0x1]+_0x36bf27[0x7]*_0x134d1d[0x2],_0x20bca4=_0x36bf27[0x2]*_0x134d1d[0x0]+_0x36bf27[0x5]*_0x134d1d[0x1]+_0x36bf27[0x8]*_0x134d1d[0x2],_0x28511d=_0x36bf27[0x0]*_0x134d1d[0x3]+_0x36bf27[0x3]*_0x134d1d[0x4]+_0x36bf27[0x6]*_0x134d1d[0x5],_0x4f6185=_0x36bf27[0x1]*_0x134d1d[0x3]+_0x36bf27[0x4]*_0x134d1d[0x4]+_0x36bf27[0x7]*_0x134d1d[0x5],_0x42be0a=_0x36bf27[0x2]*_0x134d1d[0x3]+_0x36bf27[0x5]*_0x134d1d[0x4]+_0x36bf27[0x8]*_0x134d1d[0x5],_0x326004=_0x36bf27[0x0]*_0x134d1d[0x6]+_0x36bf27[0x3]*_0x134d1d[0x7]+_0x36bf27[0x6]*_0x134d1d[0x8],_0x5146bc=_0x36bf27[0x1]*_0x134d1d[0x6]+_0x36bf27[0x4]*_0x134d1d[0x7]+_0x36bf27[0x7]*_0x134d1d[0x8],_0x321417=_0x36bf27[0x2]*_0x134d1d[0x6]+_0x36bf27[0x5]*_0x134d1d[0x7]+_0x36bf27[0x8]*_0x134d1d[0x8];return _0x77f9c1[0x0]=_0x42089e,_0x77f9c1[0x1]=_0x298ef6,_0x77f9c1[0x2]=_0x20bca4,_0x77f9c1[0x3]=_0x28511d,_0x77f9c1[0x4]=_0x4f6185,_0x77f9c1[0x5]=_0x42be0a,_0x77f9c1[0x6]=_0x326004,_0x77f9c1[0x7]=_0x5146bc,_0x77f9c1[0x8]=_0x321417,_0x77f9c1;},Matrix3[a161_0x437c26(0x17c)]=function(_0x55ec30,_0x14e1c7,_0x3547ae){var _0x53411c=a161_0x437c26;return a161_0x4a4e9b[_0x53411c(0x189)]['object']('left',_0x55ec30),a161_0x4a4e9b[_0x53411c(0x189)][_0x53411c(0x18f)](_0x53411c(0x1a2),_0x14e1c7),a161_0x4a4e9b['typeOf'][_0x53411c(0x18f)](_0x53411c(0x15c),_0x3547ae),_0x3547ae[0x0]=_0x55ec30[0x0]+_0x14e1c7[0x0],_0x3547ae[0x1]=_0x55ec30[0x1]+_0x14e1c7[0x1],_0x3547ae[0x2]=_0x55ec30[0x2]+_0x14e1c7[0x2],_0x3547ae[0x3]=_0x55ec30[0x3]+_0x14e1c7[0x3],_0x3547ae[0x4]=_0x55ec30[0x4]+_0x14e1c7[0x4],_0x3547ae[0x5]=_0x55ec30[0x5]+_0x14e1c7[0x5],_0x3547ae[0x6]=_0x55ec30[0x6]+_0x14e1c7[0x6],_0x3547ae[0x7]=_0x55ec30[0x7]+_0x14e1c7[0x7],_0x3547ae[0x8]=_0x55ec30[0x8]+_0x14e1c7[0x8],_0x3547ae;},Matrix3[a161_0x437c26(0x175)]=function(_0x12522b,_0x264d31,_0x3ceeb4){var _0x1a9add=a161_0x437c26;return a161_0x4a4e9b['typeOf'][_0x1a9add(0x18f)](_0x1a9add(0x187),_0x12522b),a161_0x4a4e9b[_0x1a9add(0x189)][_0x1a9add(0x18f)](_0x1a9add(0x1a2),_0x264d31),a161_0x4a4e9b[_0x1a9add(0x189)][_0x1a9add(0x18f)](_0x1a9add(0x15c),_0x3ceeb4),_0x3ceeb4[0x0]=_0x12522b[0x0]-_0x264d31[0x0],_0x3ceeb4[0x1]=_0x12522b[0x1]-_0x264d31[0x1],_0x3ceeb4[0x2]=_0x12522b[0x2]-_0x264d31[0x2],_0x3ceeb4[0x3]=_0x12522b[0x3]-_0x264d31[0x3],_0x3ceeb4[0x4]=_0x12522b[0x4]-_0x264d31[0x4],_0x3ceeb4[0x5]=_0x12522b[0x5]-_0x264d31[0x5],_0x3ceeb4[0x6]=_0x12522b[0x6]-_0x264d31[0x6],_0x3ceeb4[0x7]=_0x12522b[0x7]-_0x264d31[0x7],_0x3ceeb4[0x8]=_0x12522b[0x8]-_0x264d31[0x8],_0x3ceeb4;},Matrix3[a161_0x437c26(0x1b2)]=function(_0x1ce53e,_0x2d6047,_0x3a911e){var _0x5a25a3=a161_0x437c26;a161_0x4a4e9b[_0x5a25a3(0x189)][_0x5a25a3(0x18f)]('matrix',_0x1ce53e),a161_0x4a4e9b[_0x5a25a3(0x189)]['object'](_0x5a25a3(0x18c),_0x2d6047),a161_0x4a4e9b['typeOf']['object'](_0x5a25a3(0x15c),_0x3a911e);var _0x4c3317=_0x2d6047['x'],_0x55638d=_0x2d6047['y'],_0x2d7585=_0x2d6047['z'],_0x904f15=_0x1ce53e[0x0]*_0x4c3317+_0x1ce53e[0x3]*_0x55638d+_0x1ce53e[0x6]*_0x2d7585,_0x5c06f2=_0x1ce53e[0x1]*_0x4c3317+_0x1ce53e[0x4]*_0x55638d+_0x1ce53e[0x7]*_0x2d7585,_0x59736f=_0x1ce53e[0x2]*_0x4c3317+_0x1ce53e[0x5]*_0x55638d+_0x1ce53e[0x8]*_0x2d7585;return _0x3a911e['x']=_0x904f15,_0x3a911e['y']=_0x5c06f2,_0x3a911e['z']=_0x59736f,_0x3a911e;},Matrix3[a161_0x437c26(0x174)]=function(_0x2377ec,_0x5f0f22,_0x30f430){var _0x3c9187=a161_0x437c26;return a161_0x4a4e9b[_0x3c9187(0x189)][_0x3c9187(0x18f)]('matrix',_0x2377ec),a161_0x4a4e9b[_0x3c9187(0x189)][_0x3c9187(0x161)](_0x3c9187(0x15d),_0x5f0f22),a161_0x4a4e9b[_0x3c9187(0x189)][_0x3c9187(0x18f)](_0x3c9187(0x15c),_0x30f430),_0x30f430[0x0]=_0x2377ec[0x0]*_0x5f0f22,_0x30f430[0x1]=_0x2377ec[0x1]*_0x5f0f22,_0x30f430[0x2]=_0x2377ec[0x2]*_0x5f0f22,_0x30f430[0x3]=_0x2377ec[0x3]*_0x5f0f22,_0x30f430[0x4]=_0x2377ec[0x4]*_0x5f0f22,_0x30f430[0x5]=_0x2377ec[0x5]*_0x5f0f22,_0x30f430[0x6]=_0x2377ec[0x6]*_0x5f0f22,_0x30f430[0x7]=_0x2377ec[0x7]*_0x5f0f22,_0x30f430[0x8]=_0x2377ec[0x8]*_0x5f0f22,_0x30f430;},Matrix3[a161_0x437c26(0x173)]=function(_0x1830d2,_0x51b4e7,_0x1d1cb3){var _0x616f90=a161_0x437c26;return a161_0x4a4e9b[_0x616f90(0x189)][_0x616f90(0x18f)]('matrix',_0x1830d2),a161_0x4a4e9b['typeOf'][_0x616f90(0x18f)](_0x616f90(0x1b0),_0x51b4e7),a161_0x4a4e9b[_0x616f90(0x189)][_0x616f90(0x18f)](_0x616f90(0x15c),_0x1d1cb3),_0x1d1cb3[0x0]=_0x1830d2[0x0]*_0x51b4e7['x'],_0x1d1cb3[0x1]=_0x1830d2[0x1]*_0x51b4e7['x'],_0x1d1cb3[0x2]=_0x1830d2[0x2]*_0x51b4e7['x'],_0x1d1cb3[0x3]=_0x1830d2[0x3]*_0x51b4e7['y'],_0x1d1cb3[0x4]=_0x1830d2[0x4]*_0x51b4e7['y'],_0x1d1cb3[0x5]=_0x1830d2[0x5]*_0x51b4e7['y'],_0x1d1cb3[0x6]=_0x1830d2[0x6]*_0x51b4e7['z'],_0x1d1cb3[0x7]=_0x1830d2[0x7]*_0x51b4e7['z'],_0x1d1cb3[0x8]=_0x1830d2[0x8]*_0x51b4e7['z'],_0x1d1cb3;},Matrix3[a161_0x437c26(0x163)]=function(_0x137cbc,_0x1ead3d){var _0x467264=a161_0x437c26;return a161_0x4a4e9b[_0x467264(0x189)][_0x467264(0x18f)](_0x467264(0x1a7),_0x137cbc),a161_0x4a4e9b[_0x467264(0x189)][_0x467264(0x18f)]('result',_0x1ead3d),_0x1ead3d[0x0]=-_0x137cbc[0x0],_0x1ead3d[0x1]=-_0x137cbc[0x1],_0x1ead3d[0x2]=-_0x137cbc[0x2],_0x1ead3d[0x3]=-_0x137cbc[0x3],_0x1ead3d[0x4]=-_0x137cbc[0x4],_0x1ead3d[0x5]=-_0x137cbc[0x5],_0x1ead3d[0x6]=-_0x137cbc[0x6],_0x1ead3d[0x7]=-_0x137cbc[0x7],_0x1ead3d[0x8]=-_0x137cbc[0x8],_0x1ead3d;},Matrix3[a161_0x437c26(0x19f)]=function(_0x331b24,_0x4e15d8){var _0x5a5da5=a161_0x437c26;a161_0x4a4e9b['typeOf'][_0x5a5da5(0x18f)](_0x5a5da5(0x1a7),_0x331b24),a161_0x4a4e9b[_0x5a5da5(0x189)][_0x5a5da5(0x18f)](_0x5a5da5(0x15c),_0x4e15d8);var _0x1c84d5=_0x331b24[0x0],_0x55505b=_0x331b24[0x3],_0x481081=_0x331b24[0x6],_0x4eaec3=_0x331b24[0x1],_0x373a04=_0x331b24[0x4],_0x4f6623=_0x331b24[0x7],_0x13d5da=_0x331b24[0x2],_0x21fadf=_0x331b24[0x5],_0x1f04b5=_0x331b24[0x8];return _0x4e15d8[0x0]=_0x1c84d5,_0x4e15d8[0x1]=_0x55505b,_0x4e15d8[0x2]=_0x481081,_0x4e15d8[0x3]=_0x4eaec3,_0x4e15d8[0x4]=_0x373a04,_0x4e15d8[0x5]=_0x4f6623,_0x4e15d8[0x6]=_0x13d5da,_0x4e15d8[0x7]=_0x21fadf,_0x4e15d8[0x8]=_0x1f04b5,_0x4e15d8;};var UNIT=new a161_0x1905fe(0x1,0x1,0x1);function a161_0x4fd0(){var _0x38b78c=['multiplyByScalar','subtract','getMaximumScale','5309990YOQhZQ','EPSILON15','fromQuaternion','2148bqeFdA','pitch','add','array','IDENTITY','computeEigenDecomposition','unpack','79ovsoHD','toString','roll','freeze','cos','COLUMN2ROW0','left','equalsArray','typeOf','31702FwZfpN','fromScale','cartesian','EPSILON20','fromRotationY','object','values','unitary','inverse','3962QTviBC','matrix\x20is\x20not\x20invertible','7296rJsAOX','column','multiply','vector','COLUMN2ROW2','abs','fromArray','greaterThanOrEquals','409480BjPcuV','COLUMN2ROW1','transpose','setRow','599409LxXlqC','right','lessThanOrEquals','1125hxSbLQ','determinant','equals','matrix','ZERO','sin','fromRotationX','defined','pack','fromElements','COLUMN1ROW0','14648DeBRFp','scale','quaternion','multiplyByVector','equalsEpsilon','inverseTranspose','sqrt','angle','result','scalar','COLUMN0ROW1','clone','heading','number','value','negate','row','divideComponents','diagonal','getElementIndex','magnitude','index','4612EAumyt','getRotation','setColumn','packedLength','COLUMN0ROW2','getScale','fromColumnMajorArray','40GeopZl','prototype','multiplyByScale'];a161_0x4fd0=function(){return _0x38b78c;};return a161_0x4fd0();}Matrix3[a161_0x437c26(0x16b)]=function(_0x5b2b65,_0x501f4f){var _0x1e8602=a161_0x437c26;a161_0x4a4e9b[_0x1e8602(0x189)][_0x1e8602(0x18f)]('matrix',_0x5b2b65),a161_0x4a4e9b[_0x1e8602(0x189)][_0x1e8602(0x18f)](_0x1e8602(0x15c),_0x501f4f);var _0x964cf9=a161_0x1905fe[_0x1e8602(0x165)](UNIT,Matrix3[_0x1e8602(0x16f)](_0x5b2b65,scratchScale),scratchScale);return _0x501f4f=Matrix3['multiplyByScale'](_0x5b2b65,_0x964cf9,_0x501f4f),_0x501f4f;};function computeFrobeniusNorm(_0x298bbf){var _0x180efd=a161_0x437c26,_0x25a36a=0x0;for(var _0x2aa44e=0x0;_0x2aa44e<0x9;++_0x2aa44e){var _0x1dafc9=_0x298bbf[_0x2aa44e];_0x25a36a+=_0x1dafc9*_0x1dafc9;}return Math[_0x180efd(0x15a)](_0x25a36a);}var rowVal=[0x1,0x0,0x0],colVal=[0x2,0x2,0x1];function offDiagonalFrobeniusNorm(_0x5cb5dd){var _0x3535a0=a161_0x437c26,_0x405ec7=0x0;for(var _0x3c4b78=0x0;_0x3c4b78<0x3;++_0x3c4b78){var _0x1b3738=_0x5cb5dd[Matrix3[_0x3535a0(0x167)](colVal[_0x3c4b78],rowVal[_0x3c4b78])];_0x405ec7+=0x2*_0x1b3738*_0x1b3738;}return Math['sqrt'](_0x405ec7);}function shurDecomposition(_0x170d67,_0x792b54){var _0x1a624e=a161_0x437c26,_0x282ac1=a161_0x24251a[_0x1a624e(0x178)],_0x4524cf=0x0,_0x1f9db9=0x1;for(var _0x37bbf8=0x0;_0x37bbf8<0x3;++_0x37bbf8){var _0x1e94df=Math[_0x1a624e(0x19a)](_0x170d67[Matrix3[_0x1a624e(0x167)](colVal[_0x37bbf8],rowVal[_0x37bbf8])]);_0x1e94df>_0x4524cf&&(_0x1f9db9=_0x37bbf8,_0x4524cf=_0x1e94df);}var _0x86ef46=0x1,_0x59b6ff=0x0,_0x1b5177=rowVal[_0x1f9db9],_0x421753=colVal[_0x1f9db9];if(Math['abs'](_0x170d67[Matrix3[_0x1a624e(0x167)](_0x421753,_0x1b5177)])>_0x282ac1){var _0x24ac71=_0x170d67[Matrix3[_0x1a624e(0x167)](_0x421753,_0x421753)],_0x22a65f=_0x170d67[Matrix3['getElementIndex'](_0x1b5177,_0x1b5177)],_0x50b66e=_0x170d67[Matrix3['getElementIndex'](_0x421753,_0x1b5177)],_0x4fb720=(_0x24ac71-_0x22a65f)/0x2/_0x50b66e,_0x36429c;_0x4fb720<0x0?_0x36429c=-0x1/(-_0x4fb720+Math[_0x1a624e(0x15a)](0x1+_0x4fb720*_0x4fb720)):_0x36429c=0x1/(_0x4fb720+Math[_0x1a624e(0x15a)](0x1+_0x4fb720*_0x4fb720)),_0x86ef46=0x1/Math[_0x1a624e(0x15a)](0x1+_0x36429c*_0x36429c),_0x59b6ff=_0x36429c*_0x86ef46;}return _0x792b54=Matrix3['clone'](Matrix3[_0x1a624e(0x17e)],_0x792b54),_0x792b54[Matrix3['getElementIndex'](_0x1b5177,_0x1b5177)]=_0x792b54[Matrix3['getElementIndex'](_0x421753,_0x421753)]=_0x86ef46,_0x792b54[Matrix3[_0x1a624e(0x167)](_0x421753,_0x1b5177)]=_0x59b6ff,_0x792b54[Matrix3[_0x1a624e(0x167)](_0x1b5177,_0x421753)]=-_0x59b6ff,_0x792b54;}function a161_0x59dc(_0x5d1af3,_0xde57c7){var _0x4fd0f4=a161_0x4fd0();return a161_0x59dc=function(_0x59dc38,_0x1bbcdd){_0x59dc38=_0x59dc38-0x159;var _0x36ebf5=_0x4fd0f4[_0x59dc38];return _0x36ebf5;},a161_0x59dc(_0x5d1af3,_0xde57c7);}var jMatrix=new Matrix3(),jMatrixTranspose=new Matrix3();Matrix3[a161_0x437c26(0x17f)]=function(_0x4a80a4,_0x3df80b){var _0x105e71=a161_0x437c26;a161_0x4a4e9b[_0x105e71(0x189)][_0x105e71(0x18f)](_0x105e71(0x1a7),_0x4a80a4);var _0x15e6ca=a161_0x24251a[_0x105e71(0x18d)],_0x17d0fb=0xa,_0x22f69e=0x0,_0x2bcd8f=0x0;!a161_0x190201(_0x3df80b)&&(_0x3df80b={});var _0x4f0817=_0x3df80b[_0x105e71(0x191)]=Matrix3['clone'](Matrix3['IDENTITY'],_0x3df80b[_0x105e71(0x191)]),_0x13ea60=_0x3df80b['diagonal']=Matrix3[_0x105e71(0x15f)](_0x4a80a4,_0x3df80b[_0x105e71(0x166)]),_0x2fd4ae=_0x15e6ca*computeFrobeniusNorm(_0x13ea60);while(_0x2bcd8f<_0x17d0fb&&offDiagonalFrobeniusNorm(_0x13ea60)>_0x2fd4ae){shurDecomposition(_0x13ea60,jMatrix),Matrix3[_0x105e71(0x19f)](jMatrix,jMatrixTranspose),Matrix3[_0x105e71(0x197)](_0x13ea60,jMatrix,_0x13ea60),Matrix3[_0x105e71(0x197)](jMatrixTranspose,_0x13ea60,_0x13ea60),Matrix3[_0x105e71(0x197)](_0x4f0817,jMatrix,_0x4f0817),++_0x22f69e>0x2&&(++_0x2bcd8f,_0x22f69e=0x0);}return _0x3df80b;},Matrix3[a161_0x437c26(0x19a)]=function(_0x148f31,_0x9fe892){var _0x4836b6=a161_0x437c26;return a161_0x4a4e9b['typeOf']['object'](_0x4836b6(0x1a7),_0x148f31),a161_0x4a4e9b['typeOf'][_0x4836b6(0x18f)]('result',_0x9fe892),_0x9fe892[0x0]=Math[_0x4836b6(0x19a)](_0x148f31[0x0]),_0x9fe892[0x1]=Math[_0x4836b6(0x19a)](_0x148f31[0x1]),_0x9fe892[0x2]=Math[_0x4836b6(0x19a)](_0x148f31[0x2]),_0x9fe892[0x3]=Math['abs'](_0x148f31[0x3]),_0x9fe892[0x4]=Math[_0x4836b6(0x19a)](_0x148f31[0x4]),_0x9fe892[0x5]=Math['abs'](_0x148f31[0x5]),_0x9fe892[0x6]=Math[_0x4836b6(0x19a)](_0x148f31[0x6]),_0x9fe892[0x7]=Math[_0x4836b6(0x19a)](_0x148f31[0x7]),_0x9fe892[0x8]=Math[_0x4836b6(0x19a)](_0x148f31[0x8]),_0x9fe892;},Matrix3[a161_0x437c26(0x1a5)]=function(_0x4cb367){var _0x358c11=a161_0x437c26;a161_0x4a4e9b[_0x358c11(0x189)][_0x358c11(0x18f)]('matrix',_0x4cb367);var _0x549350=_0x4cb367[0x0],_0x510242=_0x4cb367[0x3],_0x2ef34d=_0x4cb367[0x6],_0x1ae626=_0x4cb367[0x1],_0x33dc8c=_0x4cb367[0x4],_0x4b00b9=_0x4cb367[0x7],_0x249ce2=_0x4cb367[0x2],_0x4115f1=_0x4cb367[0x5],_0x11cce8=_0x4cb367[0x8];return _0x549350*(_0x33dc8c*_0x11cce8-_0x4115f1*_0x4b00b9)+_0x1ae626*(_0x4115f1*_0x2ef34d-_0x510242*_0x11cce8)+_0x249ce2*(_0x510242*_0x4b00b9-_0x33dc8c*_0x2ef34d);},Matrix3[a161_0x437c26(0x192)]=function(_0x1c4e71,_0x5d0b81){var _0x571378=a161_0x437c26;a161_0x4a4e9b['typeOf']['object']('matrix',_0x1c4e71),a161_0x4a4e9b[_0x571378(0x189)][_0x571378(0x18f)]('result',_0x5d0b81);var _0x44c867=_0x1c4e71[0x0],_0x2333be=_0x1c4e71[0x1],_0x505e6d=_0x1c4e71[0x2],_0x47a93a=_0x1c4e71[0x3],_0x48b3af=_0x1c4e71[0x4],_0x18f3c9=_0x1c4e71[0x5],_0x4157f7=_0x1c4e71[0x6],_0x24e945=_0x1c4e71[0x7],_0x365989=_0x1c4e71[0x8],_0x13090a=Matrix3[_0x571378(0x1a5)](_0x1c4e71);if(Math[_0x571378(0x19a)](_0x13090a)<=a161_0x24251a[_0x571378(0x178)])throw new a161_0x1b64be(_0x571378(0x194));_0x5d0b81[0x0]=_0x48b3af*_0x365989-_0x24e945*_0x18f3c9,_0x5d0b81[0x1]=_0x24e945*_0x505e6d-_0x2333be*_0x365989,_0x5d0b81[0x2]=_0x2333be*_0x18f3c9-_0x48b3af*_0x505e6d,_0x5d0b81[0x3]=_0x4157f7*_0x18f3c9-_0x47a93a*_0x365989,_0x5d0b81[0x4]=_0x44c867*_0x365989-_0x4157f7*_0x505e6d,_0x5d0b81[0x5]=_0x47a93a*_0x505e6d-_0x44c867*_0x18f3c9,_0x5d0b81[0x6]=_0x47a93a*_0x24e945-_0x4157f7*_0x48b3af,_0x5d0b81[0x7]=_0x4157f7*_0x2333be-_0x44c867*_0x24e945,_0x5d0b81[0x8]=_0x44c867*_0x48b3af-_0x47a93a*_0x2333be;var _0x16288c=0x1/_0x13090a;return Matrix3['multiplyByScalar'](_0x5d0b81,_0x16288c,_0x5d0b81);};var scratchTransposeMatrix=new Matrix3();Matrix3[a161_0x437c26(0x159)]=function(_0x5d0cfc,_0x523529){var _0x58c9db=a161_0x437c26;return a161_0x4a4e9b[_0x58c9db(0x189)][_0x58c9db(0x18f)](_0x58c9db(0x1a7),_0x5d0cfc),a161_0x4a4e9b[_0x58c9db(0x189)][_0x58c9db(0x18f)](_0x58c9db(0x15c),_0x523529),Matrix3[_0x58c9db(0x192)](Matrix3['transpose'](_0x5d0cfc,scratchTransposeMatrix),_0x523529);},Matrix3[a161_0x437c26(0x1a6)]=function(_0x4b57af,_0x30c199){return _0x4b57af===_0x30c199||a161_0x190201(_0x4b57af)&&a161_0x190201(_0x30c199)&&_0x4b57af[0x0]===_0x30c199[0x0]&&_0x4b57af[0x1]===_0x30c199[0x1]&&_0x4b57af[0x2]===_0x30c199[0x2]&&_0x4b57af[0x3]===_0x30c199[0x3]&&_0x4b57af[0x4]===_0x30c199[0x4]&&_0x4b57af[0x5]===_0x30c199[0x5]&&_0x4b57af[0x6]===_0x30c199[0x6]&&_0x4b57af[0x7]===_0x30c199[0x7]&&_0x4b57af[0x8]===_0x30c199[0x8];},Matrix3[a161_0x437c26(0x1b3)]=function(_0x4af433,_0x3d15ef,_0x33f6b2){var _0x93d7cc=a161_0x437c26;return _0x33f6b2=a161_0x32aca3(_0x33f6b2,0x0),_0x4af433===_0x3d15ef||a161_0x190201(_0x4af433)&&a161_0x190201(_0x3d15ef)&&Math[_0x93d7cc(0x19a)](_0x4af433[0x0]-_0x3d15ef[0x0])<=_0x33f6b2&&Math[_0x93d7cc(0x19a)](_0x4af433[0x1]-_0x3d15ef[0x1])<=_0x33f6b2&&Math[_0x93d7cc(0x19a)](_0x4af433[0x2]-_0x3d15ef[0x2])<=_0x33f6b2&&Math['abs'](_0x4af433[0x3]-_0x3d15ef[0x3])<=_0x33f6b2&&Math['abs'](_0x4af433[0x4]-_0x3d15ef[0x4])<=_0x33f6b2&&Math[_0x93d7cc(0x19a)](_0x4af433[0x5]-_0x3d15ef[0x5])<=_0x33f6b2&&Math[_0x93d7cc(0x19a)](_0x4af433[0x6]-_0x3d15ef[0x6])<=_0x33f6b2&&Math['abs'](_0x4af433[0x7]-_0x3d15ef[0x7])<=_0x33f6b2&&Math[_0x93d7cc(0x19a)](_0x4af433[0x8]-_0x3d15ef[0x8])<=_0x33f6b2;},Matrix3['IDENTITY']=Object[a161_0x437c26(0x184)](new Matrix3(0x1,0x0,0x0,0x0,0x1,0x0,0x0,0x0,0x1)),Matrix3[a161_0x437c26(0x1a8)]=Object[a161_0x437c26(0x184)](new Matrix3(0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0,0x0)),Matrix3['COLUMN0ROW0']=0x0,Matrix3[a161_0x437c26(0x15e)]=0x1,Matrix3[a161_0x437c26(0x16e)]=0x2,Matrix3[a161_0x437c26(0x1ae)]=0x3,Matrix3['COLUMN1ROW1']=0x4,Matrix3['COLUMN1ROW2']=0x5,Matrix3[a161_0x437c26(0x186)]=0x6,Matrix3[a161_0x437c26(0x19e)]=0x7,Matrix3[a161_0x437c26(0x199)]=0x8,Object['defineProperties'](Matrix3[a161_0x437c26(0x172)],{'length':{'get':function(){return Matrix3['packedLength'];}}}),Matrix3[a161_0x437c26(0x172)]['clone']=function(_0x24ca19){var _0x2cf74c=a161_0x437c26;return Matrix3[_0x2cf74c(0x15f)](this,_0x24ca19);},Matrix3[a161_0x437c26(0x172)]['equals']=function(_0x6cda7){var _0x1c17e1=a161_0x437c26;return Matrix3[_0x1c17e1(0x1a6)](this,_0x6cda7);},Matrix3[a161_0x437c26(0x188)]=function(_0x2073fc,_0x664908,_0x3eb834){return _0x2073fc[0x0]===_0x664908[_0x3eb834]&&_0x2073fc[0x1]===_0x664908[_0x3eb834+0x1]&&_0x2073fc[0x2]===_0x664908[_0x3eb834+0x2]&&_0x2073fc[0x3]===_0x664908[_0x3eb834+0x3]&&_0x2073fc[0x4]===_0x664908[_0x3eb834+0x4]&&_0x2073fc[0x5]===_0x664908[_0x3eb834+0x5]&&_0x2073fc[0x6]===_0x664908[_0x3eb834+0x6]&&_0x2073fc[0x7]===_0x664908[_0x3eb834+0x7]&&_0x2073fc[0x8]===_0x664908[_0x3eb834+0x8];},Matrix3['prototype'][a161_0x437c26(0x1b3)]=function(_0x540572,_0xbfa345){var _0x2bd2b7=a161_0x437c26;return Matrix3[_0x2bd2b7(0x1b3)](this,_0x540572,_0xbfa345);},Matrix3[a161_0x437c26(0x172)][a161_0x437c26(0x182)]=function(){return'('+this[0x0]+',\x20'+this[0x3]+',\x20'+this[0x6]+')\x0a'+'('+this[0x1]+',\x20'+this[0x4]+',\x20'+this[0x7]+')\x0a'+'('+this[0x2]+',\x20'+this[0x5]+',\x20'+this[0x8]+')';};export default Matrix3;