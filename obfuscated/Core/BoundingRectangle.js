var a13_0x26cb7e=a13_0x45cf;function a13_0x3592(){var _0x20357c=['2231292gWvRyl','5cNWDhA','313677WNdaKk','array','project','expand','height','right','width','packedLength','length','5888770UNuNih','intersect','30XUqwla','southwest','left','defined','clone','object','union','fromPoints','unpack','11LZNpmC','typeOf','23049hIsKnu','3003TRtqwy','1175344GNMIzB','INTERSECTING','1362872gAZRKN','point','max','equals','min','964ZVhYkD','prototype','subtract'];a13_0x3592=function(){return _0x20357c;};return a13_0x3592();}(function(_0x274534,_0x4d1c23){var _0x5d63e2=a13_0x45cf,_0x29a030=_0x274534();while(!![]){try{var _0x28108c=-parseInt(_0x5d63e2(0xd3))/0x1*(parseInt(_0x5d63e2(0xc8))/0x2)+parseInt(_0x5d63e2(0xd4))/0x3*(parseInt(_0x5d63e2(0xdc))/0x4)+parseInt(_0x5d63e2(0xe0))/0x5*(-parseInt(_0x5d63e2(0xdf))/0x6)+parseInt(_0x5d63e2(0xd7))/0x7+-parseInt(_0x5d63e2(0xd5))/0x8+parseInt(_0x5d63e2(0xe1))/0x9+-parseInt(_0x5d63e2(0xc6))/0xa*(-parseInt(_0x5d63e2(0xd1))/0xb);if(_0x28108c===_0x4d1c23)break;else _0x29a030['push'](_0x29a030['shift']());}catch(_0x2501fc){_0x29a030['push'](_0x29a030['shift']());}}}(a13_0x3592,0x2fa3c));function a13_0x45cf(_0x51c78b,_0x20aa7a){var _0x359286=a13_0x3592();return a13_0x45cf=function(_0x45cf27,_0x1f7374){_0x45cf27=_0x45cf27-0xbe;var _0x21e92c=_0x359286[_0x45cf27];return _0x21e92c;},a13_0x45cf(_0x51c78b,_0x20aa7a);}import a13_0x2fce68 from'./Cartesian2.js';import a13_0x199297 from'./Cartographic.js';import a13_0x243830 from'./Check.js';import a13_0x1286d4 from'./defaultValue.js';import a13_0x5ab8ae from'./defined.js';import a13_0x5927e0 from'./GeographicProjection.js';import a13_0x5108db from'./Intersect.js';import a13_0x370fb6 from'./Rectangle.js';function BoundingRectangle(_0x4f78c7,_0x18179e,_0x73f3ee,_0x32e1c2){var _0x31c6b4=a13_0x45cf;this['x']=a13_0x1286d4(_0x4f78c7,0x0),this['y']=a13_0x1286d4(_0x18179e,0x0),this[_0x31c6b4(0xc3)]=a13_0x1286d4(_0x73f3ee,0x0),this[_0x31c6b4(0xc1)]=a13_0x1286d4(_0x32e1c2,0x0);}BoundingRectangle[a13_0x26cb7e(0xc4)]=0x4,BoundingRectangle['pack']=function(_0x547553,_0x2d1a1b,_0x1a3a30){var _0x1f94b0=a13_0x26cb7e;return a13_0x243830[_0x1f94b0(0xd2)][_0x1f94b0(0xcd)]('value',_0x547553),a13_0x243830[_0x1f94b0(0xcb)](_0x1f94b0(0xbe),_0x2d1a1b),_0x1a3a30=a13_0x1286d4(_0x1a3a30,0x0),_0x2d1a1b[_0x1a3a30++]=_0x547553['x'],_0x2d1a1b[_0x1a3a30++]=_0x547553['y'],_0x2d1a1b[_0x1a3a30++]=_0x547553[_0x1f94b0(0xc3)],_0x2d1a1b[_0x1a3a30]=_0x547553[_0x1f94b0(0xc1)],_0x2d1a1b;},BoundingRectangle[a13_0x26cb7e(0xd0)]=function(_0x351771,_0x3cfe79,_0x31d166){var _0x30b4c4=a13_0x26cb7e;return a13_0x243830[_0x30b4c4(0xcb)](_0x30b4c4(0xbe),_0x351771),_0x3cfe79=a13_0x1286d4(_0x3cfe79,0x0),!a13_0x5ab8ae(_0x31d166)&&(_0x31d166=new BoundingRectangle()),_0x31d166['x']=_0x351771[_0x3cfe79++],_0x31d166['y']=_0x351771[_0x3cfe79++],_0x31d166['width']=_0x351771[_0x3cfe79++],_0x31d166[_0x30b4c4(0xc1)]=_0x351771[_0x3cfe79],_0x31d166;},BoundingRectangle[a13_0x26cb7e(0xcf)]=function(_0x239f1b,_0x333fa3){var _0x49a983=a13_0x26cb7e;!a13_0x5ab8ae(_0x333fa3)&&(_0x333fa3=new BoundingRectangle());if(!a13_0x5ab8ae(_0x239f1b)||_0x239f1b[_0x49a983(0xc5)]===0x0)return _0x333fa3['x']=0x0,_0x333fa3['y']=0x0,_0x333fa3['width']=0x0,_0x333fa3[_0x49a983(0xc1)]=0x0,_0x333fa3;var _0x40ba6d=_0x239f1b[_0x49a983(0xc5)],_0x2fe030=_0x239f1b[0x0]['x'],_0x43abfb=_0x239f1b[0x0]['y'],_0x12db04=_0x239f1b[0x0]['x'],_0x4a8e0c=_0x239f1b[0x0]['y'];for(var _0x32ddc9=0x1;_0x32ddc9<_0x40ba6d;_0x32ddc9++){var _0x1194e9=_0x239f1b[_0x32ddc9],_0x106eeb=_0x1194e9['x'],_0x2ac971=_0x1194e9['y'];_0x2fe030=Math[_0x49a983(0xdb)](_0x106eeb,_0x2fe030),_0x12db04=Math[_0x49a983(0xd9)](_0x106eeb,_0x12db04),_0x43abfb=Math[_0x49a983(0xdb)](_0x2ac971,_0x43abfb),_0x4a8e0c=Math[_0x49a983(0xd9)](_0x2ac971,_0x4a8e0c);}return _0x333fa3['x']=_0x2fe030,_0x333fa3['y']=_0x43abfb,_0x333fa3[_0x49a983(0xc3)]=_0x12db04-_0x2fe030,_0x333fa3[_0x49a983(0xc1)]=_0x4a8e0c-_0x43abfb,_0x333fa3;};var defaultProjection=new a13_0x5927e0(),fromRectangleLowerLeft=new a13_0x199297(),fromRectangleUpperRight=new a13_0x199297();BoundingRectangle['fromRectangle']=function(_0x29b616,_0x326170,_0x33762e){var _0x17ccd9=a13_0x26cb7e;!a13_0x5ab8ae(_0x33762e)&&(_0x33762e=new BoundingRectangle());if(!a13_0x5ab8ae(_0x29b616))return _0x33762e['x']=0x0,_0x33762e['y']=0x0,_0x33762e[_0x17ccd9(0xc3)]=0x0,_0x33762e['height']=0x0,_0x33762e;_0x326170=a13_0x1286d4(_0x326170,defaultProjection);var _0x1c3c42=_0x326170[_0x17ccd9(0xbf)](a13_0x370fb6[_0x17ccd9(0xc9)](_0x29b616,fromRectangleLowerLeft)),_0xf76393=_0x326170[_0x17ccd9(0xbf)](a13_0x370fb6['northeast'](_0x29b616,fromRectangleUpperRight));return a13_0x2fce68[_0x17ccd9(0xde)](_0xf76393,_0x1c3c42,_0xf76393),_0x33762e['x']=_0x1c3c42['x'],_0x33762e['y']=_0x1c3c42['y'],_0x33762e['width']=_0xf76393['x'],_0x33762e[_0x17ccd9(0xc1)]=_0xf76393['y'],_0x33762e;},BoundingRectangle[a13_0x26cb7e(0xcc)]=function(_0x404ee0,_0x47e195){var _0x3f1746=a13_0x26cb7e;if(!a13_0x5ab8ae(_0x404ee0))return undefined;if(!a13_0x5ab8ae(_0x47e195))return new BoundingRectangle(_0x404ee0['x'],_0x404ee0['y'],_0x404ee0[_0x3f1746(0xc3)],_0x404ee0[_0x3f1746(0xc1)]);return _0x47e195['x']=_0x404ee0['x'],_0x47e195['y']=_0x404ee0['y'],_0x47e195[_0x3f1746(0xc3)]=_0x404ee0[_0x3f1746(0xc3)],_0x47e195[_0x3f1746(0xc1)]=_0x404ee0[_0x3f1746(0xc1)],_0x47e195;},BoundingRectangle[a13_0x26cb7e(0xce)]=function(_0x521232,_0x3bfaca,_0x238c68){var _0xa9438=a13_0x26cb7e;a13_0x243830['typeOf'][_0xa9438(0xcd)](_0xa9438(0xca),_0x521232),a13_0x243830[_0xa9438(0xd2)][_0xa9438(0xcd)](_0xa9438(0xc2),_0x3bfaca);!a13_0x5ab8ae(_0x238c68)&&(_0x238c68=new BoundingRectangle());var _0x558b5d=Math['min'](_0x521232['x'],_0x3bfaca['x']),_0x2d1798=Math['min'](_0x521232['y'],_0x3bfaca['y']),_0x3d6365=Math[_0xa9438(0xd9)](_0x521232['x']+_0x521232[_0xa9438(0xc3)],_0x3bfaca['x']+_0x3bfaca['width']),_0x3bc820=Math[_0xa9438(0xd9)](_0x521232['y']+_0x521232[_0xa9438(0xc1)],_0x3bfaca['y']+_0x3bfaca[_0xa9438(0xc1)]);return _0x238c68['x']=_0x558b5d,_0x238c68['y']=_0x2d1798,_0x238c68[_0xa9438(0xc3)]=_0x3d6365-_0x558b5d,_0x238c68[_0xa9438(0xc1)]=_0x3bc820-_0x2d1798,_0x238c68;},BoundingRectangle[a13_0x26cb7e(0xc0)]=function(_0x435780,_0x24e168,_0x10b421){var _0x37874c=a13_0x26cb7e;a13_0x243830[_0x37874c(0xd2)][_0x37874c(0xcd)]('rectangle',_0x435780),a13_0x243830[_0x37874c(0xd2)][_0x37874c(0xcd)](_0x37874c(0xd8),_0x24e168),_0x10b421=BoundingRectangle[_0x37874c(0xcc)](_0x435780,_0x10b421);var _0x4387d3=_0x24e168['x']-_0x10b421['x'],_0x31e69e=_0x24e168['y']-_0x10b421['y'];if(_0x4387d3>_0x10b421[_0x37874c(0xc3)])_0x10b421[_0x37874c(0xc3)]=_0x4387d3;else _0x4387d3<0x0&&(_0x10b421[_0x37874c(0xc3)]-=_0x4387d3,_0x10b421['x']=_0x24e168['x']);if(_0x31e69e>_0x10b421[_0x37874c(0xc1)])_0x10b421[_0x37874c(0xc1)]=_0x31e69e;else _0x31e69e<0x0&&(_0x10b421[_0x37874c(0xc1)]-=_0x31e69e,_0x10b421['y']=_0x24e168['y']);return _0x10b421;},BoundingRectangle[a13_0x26cb7e(0xc7)]=function(_0x4ce1fb,_0x4043ae){var _0x599a72=a13_0x26cb7e;a13_0x243830[_0x599a72(0xd2)]['object']('left',_0x4ce1fb),a13_0x243830['typeOf'][_0x599a72(0xcd)]('right',_0x4043ae);var _0x1b5194=_0x4ce1fb['x'],_0x1afa48=_0x4ce1fb['y'],_0x43d2d4=_0x4043ae['x'],_0x400de0=_0x4043ae['y'];if(!(_0x1b5194>_0x43d2d4+_0x4043ae[_0x599a72(0xc3)]||_0x1b5194+_0x4ce1fb[_0x599a72(0xc3)]<_0x43d2d4||_0x1afa48+_0x4ce1fb['height']<_0x400de0||_0x1afa48>_0x400de0+_0x4043ae[_0x599a72(0xc1)]))return a13_0x5108db[_0x599a72(0xd6)];return a13_0x5108db['OUTSIDE'];},BoundingRectangle[a13_0x26cb7e(0xda)]=function(_0x1dc20d,_0xcb8f8f){var _0x50fec2=a13_0x26cb7e;return _0x1dc20d===_0xcb8f8f||a13_0x5ab8ae(_0x1dc20d)&&a13_0x5ab8ae(_0xcb8f8f)&&_0x1dc20d['x']===_0xcb8f8f['x']&&_0x1dc20d['y']===_0xcb8f8f['y']&&_0x1dc20d[_0x50fec2(0xc3)]===_0xcb8f8f[_0x50fec2(0xc3)]&&_0x1dc20d[_0x50fec2(0xc1)]===_0xcb8f8f[_0x50fec2(0xc1)];},BoundingRectangle[a13_0x26cb7e(0xdd)]['clone']=function(_0xad6c02){var _0x81277a=a13_0x26cb7e;return BoundingRectangle[_0x81277a(0xcc)](this,_0xad6c02);},BoundingRectangle[a13_0x26cb7e(0xdd)][a13_0x26cb7e(0xc7)]=function(_0x4756d1){return BoundingRectangle['intersect'](this,_0x4756d1);},BoundingRectangle[a13_0x26cb7e(0xdd)][a13_0x26cb7e(0xda)]=function(_0x2cd505){var _0x3fd519=a13_0x26cb7e;return BoundingRectangle[_0x3fd519(0xda)](this,_0x2cd505);};export default BoundingRectangle;