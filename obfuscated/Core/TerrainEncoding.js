var a236_0x49e6cb=a236_0x313e;(function(_0x111d88,_0xe5320){var _0x45e519=a236_0x313e,_0x20b8c2=_0x111d88();while(!![]){try{var _0x901a67=parseInt(_0x45e519(0xe9))/0x1+-parseInt(_0x45e519(0xf1))/0x2+parseInt(_0x45e519(0xdd))/0x3+-parseInt(_0x45e519(0xfe))/0x4*(-parseInt(_0x45e519(0xe4))/0x5)+parseInt(_0x45e519(0xed))/0x6*(parseInt(_0x45e519(0xff))/0x7)+parseInt(_0x45e519(0x116))/0x8+-parseInt(_0x45e519(0xdb))/0x9*(parseInt(_0x45e519(0xee))/0xa);if(_0x901a67===_0xe5320)break;else _0x20b8c2['push'](_0x20b8c2['shift']());}catch(_0x1afbab){_0x20b8c2['push'](_0x20b8c2['shift']());}}}(a236_0x27bb,0xc3cbd));import a236_0x2f9b71 from'./AttributeCompression.js';import a236_0x41512e from'./Cartesian2.js';import a236_0x1475e5 from'./Cartesian3.js';import a236_0x2ecc8c from'./ComponentDatatype.js';import a236_0x2c77cf from'./defaultValue.js';import a236_0x53e832 from'./defined.js';import a236_0x64b424 from'./Math.js';import a236_0x119aaa from'./Matrix4.js';import a236_0x222491 from'./TerrainExaggeration.js';import a236_0x5d5d8d from'./TerrainQuantization.js';function a236_0x27bb(){var _0x57214b=['addGeodeticSurfaceNormals','stride','_offsetGeodeticSurfaceNormal','octPackFloat','_offsetVertexNormal','FLOAT','clamp','decodeWebMercatorT','compressed1','getHeight','clone','fromElements','length','fromScale','4507616AeJHdf','center','multiply','decodeHeight','fromTranslation','10125567DRlLOJ','hasWebMercatorT','2863011ZWSRvR','decompressTextureCoordinates','_calculateStrideAndOffsets','hasVertexNormals','NONE','negate','pow','428210rDVXRj','decodeTextureCoordinates','geodeticSurfaceNormal','getAttributes','exaggeration','1381721NGnqSA','exaggerationRelativeHeight','getAttributeLocations','push','162eOvdjK','30SLXhAO','inverseTransformation','minimum','698662zIFcHZ','subtract','compressed0','getExaggeratedPosition','textureCoordAndEncodedNormals','toScaledENU','decodeGeodeticSurfaceNormal','minimumHeight','decodePosition','matrix','BITS12','maximumComponent','quantization','4bJEhaq','399609jkGsFc','hasGeodeticSurfaceNormals','getOctEncodedNormal','maximumHeight','compressTextureCoordinates','add','multiplyByPoint','prototype','fromScaledENU'];a236_0x27bb=function(){return _0x57214b;};return a236_0x27bb();}var cartesian3Scratch=new a236_0x1475e5(),cartesian3DimScratch=new a236_0x1475e5(),cartesian2Scratch=new a236_0x41512e(),matrix4Scratch=new a236_0x119aaa(),matrix4Scratch2=new a236_0x119aaa(),SHIFT_LEFT_12=Math[a236_0x49e6cb(0xe3)](0x2,0xc);function TerrainEncoding(_0x32df86,_0x4050aa,_0x2cafd9,_0x545dc2,_0x68d5fc,_0x323c27,_0x4332d4,_0x14ff69,_0x46de23,_0xfc1d06){var _0x307750=a236_0x49e6cb,_0x10895a=a236_0x5d5d8d[_0x307750(0xe1)],_0x5aa0da,_0x5e5626;if(a236_0x53e832(_0x4050aa)&&a236_0x53e832(_0x2cafd9)&&a236_0x53e832(_0x545dc2)&&a236_0x53e832(_0x68d5fc)){var _0x4c7513=_0x4050aa[_0x307750(0xf0)],_0x1fde6a=_0x4050aa['maximum'],_0x507810=a236_0x1475e5[_0x307750(0xf2)](_0x1fde6a,_0x4c7513,cartesian3DimScratch),_0xfd253e=_0x545dc2-_0x2cafd9,_0x4ae731=Math['max'](a236_0x1475e5[_0x307750(0xfc)](_0x507810),_0xfd253e);_0x4ae731<SHIFT_LEFT_12-0x1?_0x10895a=a236_0x5d5d8d[_0x307750(0xfb)]:_0x10895a=a236_0x5d5d8d[_0x307750(0xe1)];_0x5aa0da=a236_0x119aaa[_0x307750(0xef)](_0x68d5fc,new a236_0x119aaa());var _0x11f9ea=a236_0x1475e5[_0x307750(0xe2)](_0x4c7513,cartesian3Scratch);a236_0x119aaa[_0x307750(0xd8)](a236_0x119aaa[_0x307750(0xda)](_0x11f9ea,matrix4Scratch),_0x5aa0da,_0x5aa0da);var _0x3223de=cartesian3Scratch;_0x3223de['x']=0x1/_0x507810['x'],_0x3223de['y']=0x1/_0x507810['y'],_0x3223de['z']=0x1/_0x507810['z'],a236_0x119aaa[_0x307750(0xd8)](a236_0x119aaa[_0x307750(0x115)](_0x3223de,matrix4Scratch),_0x5aa0da,_0x5aa0da),_0x5e5626=a236_0x119aaa[_0x307750(0x112)](_0x68d5fc),a236_0x119aaa['setTranslation'](_0x5e5626,a236_0x1475e5['ZERO'],_0x5e5626),_0x68d5fc=a236_0x119aaa[_0x307750(0x112)](_0x68d5fc,new a236_0x119aaa());var _0x1ac27a=a236_0x119aaa[_0x307750(0xda)](_0x4c7513,matrix4Scratch),_0x341f18=a236_0x119aaa[_0x307750(0x115)](_0x507810,matrix4Scratch2),_0x2b7009=a236_0x119aaa[_0x307750(0xd8)](_0x1ac27a,_0x341f18,matrix4Scratch);a236_0x119aaa[_0x307750(0xd8)](_0x68d5fc,_0x2b7009,_0x68d5fc),a236_0x119aaa[_0x307750(0xd8)](_0x5e5626,_0x2b7009,_0x5e5626);}this[_0x307750(0xfd)]=_0x10895a,this[_0x307750(0xf8)]=_0x2cafd9,this[_0x307750(0x102)]=_0x545dc2,this[_0x307750(0x117)]=a236_0x1475e5[_0x307750(0x112)](_0x32df86),this['toScaledENU']=_0x5aa0da,this[_0x307750(0x107)]=_0x68d5fc,this[_0x307750(0xfa)]=_0x5e5626,this[_0x307750(0xe0)]=_0x323c27,this[_0x307750(0xdc)]=a236_0x2c77cf(_0x4332d4,![]),this[_0x307750(0x100)]=a236_0x2c77cf(_0x14ff69,![]),this[_0x307750(0xe8)]=a236_0x2c77cf(_0x46de23,0x1),this[_0x307750(0xea)]=a236_0x2c77cf(_0xfc1d06,0x0),this[_0x307750(0x109)]=0x0,this[_0x307750(0x10a)]=0x0,this[_0x307750(0x10c)]=0x0,this['_calculateStrideAndOffsets']();}TerrainEncoding[a236_0x49e6cb(0x106)]['encode']=function(_0x4a9703,_0x4b1e26,_0x213e89,_0x23380f,_0x5e7fb0,_0x6784d1,_0x374610,_0x4cdd7d){var _0x5b094f=a236_0x49e6cb,_0x174e6f=_0x23380f['x'],_0x1d7e0d=_0x23380f['y'];if(this[_0x5b094f(0xfd)]===a236_0x5d5d8d[_0x5b094f(0xfb)]){_0x213e89=a236_0x119aaa[_0x5b094f(0x105)](this[_0x5b094f(0xf6)],_0x213e89,cartesian3Scratch),_0x213e89['x']=a236_0x64b424[_0x5b094f(0x10e)](_0x213e89['x'],0x0,0x1),_0x213e89['y']=a236_0x64b424[_0x5b094f(0x10e)](_0x213e89['y'],0x0,0x1),_0x213e89['z']=a236_0x64b424[_0x5b094f(0x10e)](_0x213e89['z'],0x0,0x1);var _0x89c50b=this[_0x5b094f(0x102)]-this[_0x5b094f(0xf8)],_0x2ff480=a236_0x64b424[_0x5b094f(0x10e)]((_0x5e7fb0-this[_0x5b094f(0xf8)])/_0x89c50b,0x0,0x1);a236_0x41512e[_0x5b094f(0x113)](_0x213e89['x'],_0x213e89['y'],cartesian2Scratch);var _0x5b8e7b=a236_0x2f9b71[_0x5b094f(0x103)](cartesian2Scratch);a236_0x41512e[_0x5b094f(0x113)](_0x213e89['z'],_0x2ff480,cartesian2Scratch);var _0x4d52fb=a236_0x2f9b71[_0x5b094f(0x103)](cartesian2Scratch);a236_0x41512e[_0x5b094f(0x113)](_0x174e6f,_0x1d7e0d,cartesian2Scratch);var _0x48d0fa=a236_0x2f9b71[_0x5b094f(0x103)](cartesian2Scratch);_0x4a9703[_0x4b1e26++]=_0x5b8e7b,_0x4a9703[_0x4b1e26++]=_0x4d52fb,_0x4a9703[_0x4b1e26++]=_0x48d0fa;if(this[_0x5b094f(0xdc)]){a236_0x41512e[_0x5b094f(0x113)](_0x374610,0x0,cartesian2Scratch);var _0x4d371d=a236_0x2f9b71[_0x5b094f(0x103)](cartesian2Scratch);_0x4a9703[_0x4b1e26++]=_0x4d371d;}}else a236_0x1475e5[_0x5b094f(0xf2)](_0x213e89,this[_0x5b094f(0x117)],cartesian3Scratch),_0x4a9703[_0x4b1e26++]=cartesian3Scratch['x'],_0x4a9703[_0x4b1e26++]=cartesian3Scratch['y'],_0x4a9703[_0x4b1e26++]=cartesian3Scratch['z'],_0x4a9703[_0x4b1e26++]=_0x5e7fb0,_0x4a9703[_0x4b1e26++]=_0x174e6f,_0x4a9703[_0x4b1e26++]=_0x1d7e0d,this[_0x5b094f(0xdc)]&&(_0x4a9703[_0x4b1e26++]=_0x374610);return this[_0x5b094f(0xe0)]&&(_0x4a9703[_0x4b1e26++]=a236_0x2f9b71[_0x5b094f(0x10b)](_0x6784d1)),this[_0x5b094f(0x100)]&&(_0x4a9703[_0x4b1e26++]=_0x4cdd7d['x'],_0x4a9703[_0x4b1e26++]=_0x4cdd7d['y'],_0x4a9703[_0x4b1e26++]=_0x4cdd7d['z']),_0x4b1e26;};var scratchPosition=new a236_0x1475e5(),scratchGeodeticSurfaceNormal=new a236_0x1475e5();TerrainEncoding[a236_0x49e6cb(0x106)][a236_0x49e6cb(0x108)]=function(_0x4d5cf2,_0x2a1245,_0x305e8a){var _0x36e606=a236_0x49e6cb;if(this[_0x36e606(0x100)])return;var _0x70d6ed=this[_0x36e606(0x109)],_0x3e7de3=_0x4d5cf2[_0x36e606(0x114)]/_0x70d6ed;this['hasGeodeticSurfaceNormals']=!![],this[_0x36e606(0xdf)]();var _0x437dfd=this['stride'];for(var _0x3f9db0=0x0;_0x3f9db0<_0x3e7de3;_0x3f9db0++){for(var _0xfa8eee=0x0;_0xfa8eee<_0x70d6ed;_0xfa8eee++){var _0xdf78cf=_0x3f9db0*_0x70d6ed+_0xfa8eee,_0x1112a1=_0x3f9db0*_0x437dfd+_0xfa8eee;_0x2a1245[_0x1112a1]=_0x4d5cf2[_0xdf78cf];}var _0xe8e91e=this[_0x36e606(0xf9)](_0x2a1245,_0x3f9db0,scratchPosition),_0x320cb5=_0x305e8a[_0x36e606(0xe6)](_0xe8e91e,scratchGeodeticSurfaceNormal),_0x5f1ecc=_0x3f9db0*_0x437dfd+this[_0x36e606(0x10a)];_0x2a1245[_0x5f1ecc]=_0x320cb5['x'],_0x2a1245[_0x5f1ecc+0x1]=_0x320cb5['y'],_0x2a1245[_0x5f1ecc+0x2]=_0x320cb5['z'];}},TerrainEncoding['prototype']['removeGeodeticSurfaceNormals']=function(_0x304068,_0x2350f4){var _0x1923d7=a236_0x49e6cb;if(!this[_0x1923d7(0x100)])return;var _0x38c8cf=this[_0x1923d7(0x109)],_0x5df51a=_0x304068[_0x1923d7(0x114)]/_0x38c8cf;this[_0x1923d7(0x100)]=![],this[_0x1923d7(0xdf)]();var _0x2db3a2=this[_0x1923d7(0x109)];for(var _0x2d23cc=0x0;_0x2d23cc<_0x5df51a;_0x2d23cc++){for(var _0x90b65e=0x0;_0x90b65e<_0x2db3a2;_0x90b65e++){var _0x26e1f1=_0x2d23cc*_0x38c8cf+_0x90b65e,_0x3909c9=_0x2d23cc*_0x2db3a2+_0x90b65e;_0x2350f4[_0x3909c9]=_0x304068[_0x26e1f1];}}},TerrainEncoding[a236_0x49e6cb(0x106)][a236_0x49e6cb(0xf9)]=function(_0x4288af,_0x1ab4f0,_0x343b44){var _0x3c6f17=a236_0x49e6cb;!a236_0x53e832(_0x343b44)&&(_0x343b44=new a236_0x1475e5());_0x1ab4f0*=this[_0x3c6f17(0x109)];if(this[_0x3c6f17(0xfd)]===a236_0x5d5d8d[_0x3c6f17(0xfb)]){var _0x612e49=a236_0x2f9b71[_0x3c6f17(0xde)](_0x4288af[_0x1ab4f0],cartesian2Scratch);_0x343b44['x']=_0x612e49['x'],_0x343b44['y']=_0x612e49['y'];var _0x57feee=a236_0x2f9b71[_0x3c6f17(0xde)](_0x4288af[_0x1ab4f0+0x1],cartesian2Scratch);return _0x343b44['z']=_0x57feee['x'],a236_0x119aaa[_0x3c6f17(0x105)](this[_0x3c6f17(0x107)],_0x343b44,_0x343b44);}return _0x343b44['x']=_0x4288af[_0x1ab4f0],_0x343b44['y']=_0x4288af[_0x1ab4f0+0x1],_0x343b44['z']=_0x4288af[_0x1ab4f0+0x2],a236_0x1475e5[_0x3c6f17(0x104)](_0x343b44,this[_0x3c6f17(0x117)],_0x343b44);},TerrainEncoding[a236_0x49e6cb(0x106)][a236_0x49e6cb(0xf4)]=function(_0x4350e,_0x18cd30,_0x236d93){var _0x3c4bfb=a236_0x49e6cb;_0x236d93=this[_0x3c4bfb(0xf9)](_0x4350e,_0x18cd30,_0x236d93);var _0x5d091f=this[_0x3c4bfb(0xe8)],_0x168724=this['exaggerationRelativeHeight'],_0x315d6b=_0x5d091f!==0x1;if(_0x315d6b&&this[_0x3c4bfb(0x100)]){var _0x9ac1c8=this['decodeGeodeticSurfaceNormal'](_0x4350e,_0x18cd30,scratchGeodeticSurfaceNormal),_0x2c166c=this['decodeHeight'](_0x4350e,_0x18cd30),_0x2c68c5=a236_0x222491[_0x3c4bfb(0x111)](_0x2c166c,_0x5d091f,_0x168724)-_0x2c166c;_0x236d93['x']+=_0x9ac1c8['x']*_0x2c68c5,_0x236d93['y']+=_0x9ac1c8['y']*_0x2c68c5,_0x236d93['z']+=_0x9ac1c8['z']*_0x2c68c5;}return _0x236d93;},TerrainEncoding['prototype'][a236_0x49e6cb(0xe5)]=function(_0x415b5d,_0x2b0ec3,_0x355f95){var _0x599085=a236_0x49e6cb;!a236_0x53e832(_0x355f95)&&(_0x355f95=new a236_0x41512e());_0x2b0ec3*=this['stride'];if(this['quantization']===a236_0x5d5d8d[_0x599085(0xfb)])return a236_0x2f9b71['decompressTextureCoordinates'](_0x415b5d[_0x2b0ec3+0x2],_0x355f95);return a236_0x41512e[_0x599085(0x113)](_0x415b5d[_0x2b0ec3+0x4],_0x415b5d[_0x2b0ec3+0x5],_0x355f95);},TerrainEncoding[a236_0x49e6cb(0x106)][a236_0x49e6cb(0xd9)]=function(_0x432bab,_0x219b11){var _0x1aad61=a236_0x49e6cb;_0x219b11*=this[_0x1aad61(0x109)];if(this[_0x1aad61(0xfd)]===a236_0x5d5d8d[_0x1aad61(0xfb)]){var _0x21102d=a236_0x2f9b71['decompressTextureCoordinates'](_0x432bab[_0x219b11+0x1],cartesian2Scratch);return _0x21102d['y']*(this['maximumHeight']-this[_0x1aad61(0xf8)])+this[_0x1aad61(0xf8)];}return _0x432bab[_0x219b11+0x3];},TerrainEncoding[a236_0x49e6cb(0x106)][a236_0x49e6cb(0x10f)]=function(_0xdfdf10,_0x42017e){var _0x56f142=a236_0x49e6cb;_0x42017e*=this[_0x56f142(0x109)];if(this[_0x56f142(0xfd)]===a236_0x5d5d8d['BITS12'])return a236_0x2f9b71[_0x56f142(0xde)](_0xdfdf10[_0x42017e+0x3],cartesian2Scratch)['x'];return _0xdfdf10[_0x42017e+0x6];},TerrainEncoding[a236_0x49e6cb(0x106)][a236_0x49e6cb(0x101)]=function(_0x2fef19,_0xa88cf4,_0x182cb3){var _0x3aa1cd=a236_0x49e6cb;_0xa88cf4=_0xa88cf4*this[_0x3aa1cd(0x109)]+this[_0x3aa1cd(0x10c)];var _0x5ef52d=_0x2fef19[_0xa88cf4]/0x100,_0x95a987=Math['floor'](_0x5ef52d),_0x51accb=(_0x5ef52d-_0x95a987)*0x100;return a236_0x41512e['fromElements'](_0x95a987,_0x51accb,_0x182cb3);},TerrainEncoding[a236_0x49e6cb(0x106)][a236_0x49e6cb(0xf7)]=function(_0x2bdc3f,_0x211d22,_0x1fa50c){var _0x3b1518=a236_0x49e6cb;return _0x211d22=_0x211d22*this[_0x3b1518(0x109)]+this[_0x3b1518(0x10a)],_0x1fa50c['x']=_0x2bdc3f[_0x211d22],_0x1fa50c['y']=_0x2bdc3f[_0x211d22+0x1],_0x1fa50c['z']=_0x2bdc3f[_0x211d22+0x2],_0x1fa50c;},TerrainEncoding[a236_0x49e6cb(0x106)][a236_0x49e6cb(0xdf)]=function(){var _0x5eb69e=a236_0x49e6cb,_0x39cf47=0x0;switch(this[_0x5eb69e(0xfd)]){case a236_0x5d5d8d['BITS12']:_0x39cf47+=0x3;break;default:_0x39cf47+=0x6;}this[_0x5eb69e(0xdc)]&&(_0x39cf47+=0x1),this[_0x5eb69e(0xe0)]&&(this[_0x5eb69e(0x10c)]=_0x39cf47,_0x39cf47+=0x1),this[_0x5eb69e(0x100)]&&(this[_0x5eb69e(0x10a)]=_0x39cf47,_0x39cf47+=0x3),this[_0x5eb69e(0x109)]=_0x39cf47;};var attributesIndicesNone={'position3DAndHeight':0x0,'textureCoordAndEncodedNormals':0x1,'geodeticSurfaceNormal':0x2},attributesIndicesBits12={'compressed0':0x0,'compressed1':0x1,'geodeticSurfaceNormal':0x2};TerrainEncoding[a236_0x49e6cb(0x106)][a236_0x49e6cb(0xe7)]=function(_0x4eb3d2){var _0x48f8d4=a236_0x49e6cb,_0x3a22ec=a236_0x2ecc8c[_0x48f8d4(0x10d)],_0x30390f=a236_0x2ecc8c['getSizeInBytes'](_0x3a22ec),_0x18f699=this[_0x48f8d4(0x109)]*_0x30390f,_0x106a06=0x0,_0x3ea6b9=[];function _0x1e884a(_0x273522,_0x46ff5e){var _0x181688=_0x48f8d4;_0x3ea6b9[_0x181688(0xec)]({'index':_0x273522,'vertexBuffer':_0x4eb3d2,'componentDatatype':_0x3a22ec,'componentsPerAttribute':_0x46ff5e,'offsetInBytes':_0x106a06,'strideInBytes':_0x18f699}),_0x106a06+=_0x46ff5e*_0x30390f;}if(this[_0x48f8d4(0xfd)]===a236_0x5d5d8d['NONE']){_0x1e884a(attributesIndicesNone['position3DAndHeight'],0x4);var _0x4a6465=0x2;_0x4a6465+=this[_0x48f8d4(0xdc)]?0x1:0x0,_0x4a6465+=this['hasVertexNormals']?0x1:0x0,_0x1e884a(attributesIndicesNone[_0x48f8d4(0xf5)],_0x4a6465),this[_0x48f8d4(0x100)]&&_0x1e884a(attributesIndicesNone['geodeticSurfaceNormal'],0x3);}else{var _0x247fbc=this[_0x48f8d4(0xdc)]||this[_0x48f8d4(0xe0)],_0x1e6743=this[_0x48f8d4(0xdc)]&&this[_0x48f8d4(0xe0)];_0x1e884a(attributesIndicesBits12[_0x48f8d4(0xf3)],_0x247fbc?0x4:0x3),_0x1e6743&&_0x1e884a(attributesIndicesBits12[_0x48f8d4(0x110)],0x1),this[_0x48f8d4(0x100)]&&_0x1e884a(attributesIndicesBits12['geodeticSurfaceNormal'],0x3);}return _0x3ea6b9;},TerrainEncoding[a236_0x49e6cb(0x106)][a236_0x49e6cb(0xeb)]=function(){var _0x3ad264=a236_0x49e6cb;if(this[_0x3ad264(0xfd)]===a236_0x5d5d8d[_0x3ad264(0xe1)])return attributesIndicesNone;return attributesIndicesBits12;},TerrainEncoding['clone']=function(_0x158f9f,_0x352512){var _0x3d1a1b=a236_0x49e6cb;if(!a236_0x53e832(_0x158f9f))return undefined;return!a236_0x53e832(_0x352512)&&(_0x352512=new TerrainEncoding()),_0x352512[_0x3d1a1b(0xfd)]=_0x158f9f[_0x3d1a1b(0xfd)],_0x352512[_0x3d1a1b(0xf8)]=_0x158f9f[_0x3d1a1b(0xf8)],_0x352512[_0x3d1a1b(0x102)]=_0x158f9f[_0x3d1a1b(0x102)],_0x352512[_0x3d1a1b(0x117)]=a236_0x1475e5['clone'](_0x158f9f[_0x3d1a1b(0x117)]),_0x352512[_0x3d1a1b(0xf6)]=a236_0x119aaa[_0x3d1a1b(0x112)](_0x158f9f[_0x3d1a1b(0xf6)]),_0x352512[_0x3d1a1b(0x107)]=a236_0x119aaa[_0x3d1a1b(0x112)](_0x158f9f['fromScaledENU']),_0x352512['matrix']=a236_0x119aaa[_0x3d1a1b(0x112)](_0x158f9f[_0x3d1a1b(0xfa)]),_0x352512['hasVertexNormals']=_0x158f9f[_0x3d1a1b(0xe0)],_0x352512[_0x3d1a1b(0xdc)]=_0x158f9f[_0x3d1a1b(0xdc)],_0x352512[_0x3d1a1b(0x100)]=_0x158f9f[_0x3d1a1b(0x100)],_0x352512[_0x3d1a1b(0xe8)]=_0x158f9f[_0x3d1a1b(0xe8)],_0x352512[_0x3d1a1b(0xea)]=_0x158f9f['exaggerationRelativeHeight'],_0x352512['_calculateStrideAndOffsets'](),_0x352512;};function a236_0x313e(_0x33bae7,_0x1f70d5){var _0x27bb22=a236_0x27bb();return a236_0x313e=function(_0x313e08,_0x421ac){_0x313e08=_0x313e08-0xd8;var _0x22e2c6=_0x27bb22[_0x313e08];return _0x22e2c6;},a236_0x313e(_0x33bae7,_0x1f70d5);}export default TerrainEncoding;