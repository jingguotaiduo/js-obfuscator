var a385_0x20c3d3=a385_0xa505;(function(_0x450029,_0x41f89a){var _0x23e86d=a385_0xa505,_0x14a4f8=_0x450029();while(!![]){try{var _0x3a3689=-parseInt(_0x23e86d(0x1f0))/0x1+-parseInt(_0x23e86d(0x1ce))/0x2+parseInt(_0x23e86d(0x1f3))/0x3*(parseInt(_0x23e86d(0x1cc))/0x4)+parseInt(_0x23e86d(0x1cb))/0x5+parseInt(_0x23e86d(0x1cf))/0x6+parseInt(_0x23e86d(0x1c7))/0x7+-parseInt(_0x23e86d(0x1e2))/0x8*(parseInt(_0x23e86d(0x1fa))/0x9);if(_0x3a3689===_0x41f89a)break;else _0x14a4f8['push'](_0x14a4f8['shift']());}catch(_0x2c6f69){_0x14a4f8['push'](_0x14a4f8['shift']());}}}(a385_0x5ba1,0xc609a));import a385_0xcb7748 from'../Core/Cartesian2.js';import a385_0x33fde4 from'../Core/Cartesian3.js';import a385_0x4b6b57 from'../Core/Cartesian4.js';import a385_0x42e9f0 from'../Core/Color.js';function a385_0xa505(_0x1416f3,_0x306a0b){var _0x5ba1bd=a385_0x5ba1();return a385_0xa505=function(_0xa50596,_0x528174){_0xa50596=_0xa50596-0x1c1;var _0x6415cb=_0x5ba1bd[_0xa50596];return _0x6415cb;},a385_0xa505(_0x1416f3,_0x306a0b);}function a385_0x5ba1(){var _0x11a4c0=['type','3033142eADKuT','green','FLOAT_MAT3','uniform3iv','3316130IbAdqS','1012iVSViW','length','407310dJTvsf','7331622XHXhvj','equalsArray','_location','uniformMatrix4fv','red','Invalid\x20vec4\x20value.','INT_VEC4','pack','FLOAT_MAT2','\x20for\x20uniform\x20\x22','FLOAT_VEC4','textureUnitIndex','value','FLOAT_VEC3','INT','FLOAT','bindTexture','set','_texture','8fmvJbt','Invalid\x20vec3\x20value.','uniform4iv','uniformMatrix2fv','BOOL_VEC2','uniform1iv','_gl','uniformMatrix3fv','INT_VEC3','FLOAT_MAT4','uniform3fv','SAMPLER_2D','_setSampler','uniform1fv','777788nypzQp','_locations','BOOL_VEC3','13089kAhJpC','_value','uniform2iv','prototype','FLOAT_VEC2','activeTexture','_target','14667327UHCEkE','Unrecognized\x20uniform\x20type:\x20','BOOL','uniform2fv','name','SAMPLER_CUBE','uniform1i','TEXTURE0','blue'];a385_0x5ba1=function(){return _0x11a4c0;};return a385_0x5ba1();}import a385_0x1237c6 from'../Core/defined.js';import a385_0x122268 from'../Core/DeveloperError.js';import a385_0xf2f523 from'../Core/Matrix2.js';import a385_0x143b66 from'../Core/Matrix3.js';import a385_0x584f0d from'../Core/Matrix4.js';import a385_0x11d9b1 from'../Core/RuntimeError.js';function createUniformArray(_0x1bc786,_0x4ac05d,_0x5ed9e6,_0x2de17f){var _0x493361=a385_0xa505;switch(_0x4ac05d[_0x493361(0x1c6)]){case _0x1bc786[_0x493361(0x1de)]:return new UniformArrayFloat(_0x1bc786,_0x4ac05d,_0x5ed9e6,_0x2de17f);case _0x1bc786[_0x493361(0x1f7)]:return new UniformArrayFloatVec2(_0x1bc786,_0x4ac05d,_0x5ed9e6,_0x2de17f);case _0x1bc786[_0x493361(0x1dc)]:return new UniformArrayFloatVec3(_0x1bc786,_0x4ac05d,_0x5ed9e6,_0x2de17f);case _0x1bc786[_0x493361(0x1d9)]:return new UniformArrayFloatVec4(_0x1bc786,_0x4ac05d,_0x5ed9e6,_0x2de17f);case _0x1bc786[_0x493361(0x1ed)]:case _0x1bc786[_0x493361(0x1c2)]:return new UniformArraySampler(_0x1bc786,_0x4ac05d,_0x5ed9e6,_0x2de17f);case _0x1bc786[_0x493361(0x1dd)]:case _0x1bc786[_0x493361(0x1fc)]:return new UniformArrayInt(_0x1bc786,_0x4ac05d,_0x5ed9e6,_0x2de17f);case _0x1bc786['INT_VEC2']:case _0x1bc786[_0x493361(0x1e6)]:return new UniformArrayIntVec2(_0x1bc786,_0x4ac05d,_0x5ed9e6,_0x2de17f);case _0x1bc786[_0x493361(0x1ea)]:case _0x1bc786[_0x493361(0x1f2)]:return new UniformArrayIntVec3(_0x1bc786,_0x4ac05d,_0x5ed9e6,_0x2de17f);case _0x1bc786[_0x493361(0x1d5)]:case _0x1bc786['BOOL_VEC4']:return new UniformArrayIntVec4(_0x1bc786,_0x4ac05d,_0x5ed9e6,_0x2de17f);case _0x1bc786[_0x493361(0x1d7)]:return new UniformArrayMat2(_0x1bc786,_0x4ac05d,_0x5ed9e6,_0x2de17f);case _0x1bc786[_0x493361(0x1c9)]:return new UniformArrayMat3(_0x1bc786,_0x4ac05d,_0x5ed9e6,_0x2de17f);case _0x1bc786[_0x493361(0x1eb)]:return new UniformArrayMat4(_0x1bc786,_0x4ac05d,_0x5ed9e6,_0x2de17f);default:throw new a385_0x11d9b1(_0x493361(0x1fb)+_0x4ac05d[_0x493361(0x1c6)]+_0x493361(0x1d8)+_0x5ed9e6+'\x22.');}}function UniformArrayFloat(_0x50a30e,_0x1856bd,_0x22d143,_0x45441d){var _0x1dd946=a385_0xa505,_0x5b0966=_0x45441d[_0x1dd946(0x1cd)];this[_0x1dd946(0x1c1)]=_0x22d143,this[_0x1dd946(0x1db)]=new Array(_0x5b0966),this[_0x1dd946(0x1f4)]=new Float32Array(_0x5b0966),this[_0x1dd946(0x1e8)]=_0x50a30e,this[_0x1dd946(0x1d1)]=_0x45441d[0x0];}UniformArrayFloat[a385_0x20c3d3(0x1f6)][a385_0x20c3d3(0x1e0)]=function(){var _0x5da569=a385_0x20c3d3,_0x2c23f2=this['value'],_0x29f4f8=_0x2c23f2['length'],_0x283675=this[_0x5da569(0x1f4)],_0x165f81=![];for(var _0x1ad6d0=0x0;_0x1ad6d0<_0x29f4f8;++_0x1ad6d0){var _0x3b162c=_0x2c23f2[_0x1ad6d0];_0x3b162c!==_0x283675[_0x1ad6d0]&&(_0x283675[_0x1ad6d0]=_0x3b162c,_0x165f81=!![]);}_0x165f81&&this[_0x5da569(0x1e8)][_0x5da569(0x1ef)](this[_0x5da569(0x1d1)],_0x283675);};function UniformArrayFloatVec2(_0x1673b4,_0x4130eb,_0x369ac5,_0x332602){var _0x4b4b3f=a385_0x20c3d3,_0x1b1230=_0x332602[_0x4b4b3f(0x1cd)];this['name']=_0x369ac5,this[_0x4b4b3f(0x1db)]=new Array(_0x1b1230),this[_0x4b4b3f(0x1f4)]=new Float32Array(_0x1b1230*0x2),this['_gl']=_0x1673b4,this[_0x4b4b3f(0x1d1)]=_0x332602[0x0];}UniformArrayFloatVec2['prototype'][a385_0x20c3d3(0x1e0)]=function(){var _0x2158f0=a385_0x20c3d3,_0x47cf59=this['value'],_0xaedb45=_0x47cf59[_0x2158f0(0x1cd)],_0xd9ab05=this[_0x2158f0(0x1f4)],_0x5b1efd=![],_0x51e1b7=0x0;for(var _0x200b13=0x0;_0x200b13<_0xaedb45;++_0x200b13){var _0x313f3e=_0x47cf59[_0x200b13];!a385_0xcb7748['equalsArray'](_0x313f3e,_0xd9ab05,_0x51e1b7)&&(a385_0xcb7748[_0x2158f0(0x1d6)](_0x313f3e,_0xd9ab05,_0x51e1b7),_0x5b1efd=!![]),_0x51e1b7+=0x2;}_0x5b1efd&&this[_0x2158f0(0x1e8)][_0x2158f0(0x1fd)](this[_0x2158f0(0x1d1)],_0xd9ab05);};function UniformArrayFloatVec3(_0x138407,_0x7f7331,_0x4079d6,_0x29153e){var _0x4ec0bb=a385_0x20c3d3,_0x6b0f01=_0x29153e['length'];this[_0x4ec0bb(0x1c1)]=_0x4079d6,this['value']=new Array(_0x6b0f01),this['_value']=new Float32Array(_0x6b0f01*0x3),this[_0x4ec0bb(0x1e8)]=_0x138407,this['_location']=_0x29153e[0x0];}UniformArrayFloatVec3['prototype'][a385_0x20c3d3(0x1e0)]=function(){var _0x37b6f2=a385_0x20c3d3,_0x36f074=this['value'],_0x56fd0c=_0x36f074['length'],_0x5f04ab=this[_0x37b6f2(0x1f4)],_0x28cc81=![],_0x8c3edb=0x0;for(var _0x230ee3=0x0;_0x230ee3<_0x56fd0c;++_0x230ee3){var _0xdbaf59=_0x36f074[_0x230ee3];if(a385_0x1237c6(_0xdbaf59[_0x37b6f2(0x1d3)]))(_0xdbaf59[_0x37b6f2(0x1d3)]!==_0x5f04ab[_0x8c3edb]||_0xdbaf59[_0x37b6f2(0x1c8)]!==_0x5f04ab[_0x8c3edb+0x1]||_0xdbaf59['blue']!==_0x5f04ab[_0x8c3edb+0x2])&&(_0x5f04ab[_0x8c3edb]=_0xdbaf59[_0x37b6f2(0x1d3)],_0x5f04ab[_0x8c3edb+0x1]=_0xdbaf59['green'],_0x5f04ab[_0x8c3edb+0x2]=_0xdbaf59[_0x37b6f2(0x1c5)],_0x28cc81=!![]);else{if(a385_0x1237c6(_0xdbaf59['x']))!a385_0x33fde4[_0x37b6f2(0x1d0)](_0xdbaf59,_0x5f04ab,_0x8c3edb)&&(a385_0x33fde4[_0x37b6f2(0x1d6)](_0xdbaf59,_0x5f04ab,_0x8c3edb),_0x28cc81=!![]);else throw new a385_0x122268(_0x37b6f2(0x1e3));}_0x8c3edb+=0x3;}_0x28cc81&&this[_0x37b6f2(0x1e8)][_0x37b6f2(0x1ec)](this['_location'],_0x5f04ab);};function UniformArrayFloatVec4(_0x477129,_0x40ea8f,_0x1baf1f,_0x43f66a){var _0xa00433=a385_0x20c3d3,_0x29e1a6=_0x43f66a[_0xa00433(0x1cd)];this[_0xa00433(0x1c1)]=_0x1baf1f,this[_0xa00433(0x1db)]=new Array(_0x29e1a6),this[_0xa00433(0x1f4)]=new Float32Array(_0x29e1a6*0x4),this[_0xa00433(0x1e8)]=_0x477129,this['_location']=_0x43f66a[0x0];}UniformArrayFloatVec4[a385_0x20c3d3(0x1f6)][a385_0x20c3d3(0x1e0)]=function(){var _0x425aba=a385_0x20c3d3,_0x1e679c=this[_0x425aba(0x1db)],_0x3c70e8=_0x1e679c['length'],_0x1371f8=this[_0x425aba(0x1f4)],_0x56d567=![],_0x32ed90=0x0;for(var _0x1ff976=0x0;_0x1ff976<_0x3c70e8;++_0x1ff976){var _0x46a351=_0x1e679c[_0x1ff976];if(a385_0x1237c6(_0x46a351[_0x425aba(0x1d3)]))!a385_0x42e9f0['equalsArray'](_0x46a351,_0x1371f8,_0x32ed90)&&(a385_0x42e9f0[_0x425aba(0x1d6)](_0x46a351,_0x1371f8,_0x32ed90),_0x56d567=!![]);else{if(a385_0x1237c6(_0x46a351['x']))!a385_0x4b6b57[_0x425aba(0x1d0)](_0x46a351,_0x1371f8,_0x32ed90)&&(a385_0x4b6b57[_0x425aba(0x1d6)](_0x46a351,_0x1371f8,_0x32ed90),_0x56d567=!![]);else throw new a385_0x122268(_0x425aba(0x1d4));}_0x32ed90+=0x4;}_0x56d567&&this[_0x425aba(0x1e8)]['uniform4fv'](this[_0x425aba(0x1d1)],_0x1371f8);};function UniformArraySampler(_0xa23c21,_0x101407,_0x595c15,_0x57f3e9){var _0xba22a2=a385_0x20c3d3,_0x1dcbd4=_0x57f3e9[_0xba22a2(0x1cd)];this[_0xba22a2(0x1c1)]=_0x595c15,this['value']=new Array(_0x1dcbd4),this[_0xba22a2(0x1f4)]=new Float32Array(_0x1dcbd4),this[_0xba22a2(0x1e8)]=_0xa23c21,this[_0xba22a2(0x1f1)]=_0x57f3e9,this['textureUnitIndex']=undefined;}UniformArraySampler[a385_0x20c3d3(0x1f6)][a385_0x20c3d3(0x1e0)]=function(){var _0x26626a=a385_0x20c3d3,_0x59105d=this[_0x26626a(0x1e8)],_0x432346=_0x59105d[_0x26626a(0x1c4)]+this['textureUnitIndex'],_0x17dd12=this['value'],_0x31e3cb=_0x17dd12[_0x26626a(0x1cd)];for(var _0xe5671d=0x0;_0xe5671d<_0x31e3cb;++_0xe5671d){var _0x121578=_0x17dd12[_0xe5671d];_0x59105d[_0x26626a(0x1f8)](_0x432346+_0xe5671d),_0x59105d[_0x26626a(0x1df)](_0x121578[_0x26626a(0x1f9)],_0x121578[_0x26626a(0x1e1)]);}},UniformArraySampler[a385_0x20c3d3(0x1f6)][a385_0x20c3d3(0x1ee)]=function(_0x3973dc){var _0x1102a7=a385_0x20c3d3;this[_0x1102a7(0x1da)]=_0x3973dc;var _0x1da113=this[_0x1102a7(0x1f1)],_0x462882=_0x1da113[_0x1102a7(0x1cd)];for(var _0x42e8e7=0x0;_0x42e8e7<_0x462882;++_0x42e8e7){var _0x54caf3=_0x3973dc+_0x42e8e7;this[_0x1102a7(0x1e8)][_0x1102a7(0x1c3)](_0x1da113[_0x42e8e7],_0x54caf3);}return _0x3973dc+_0x462882;};function UniformArrayInt(_0x79518d,_0xd31a1e,_0x3ecceb,_0x31a094){var _0x537dc8=a385_0x20c3d3,_0x4a9a72=_0x31a094[_0x537dc8(0x1cd)];this[_0x537dc8(0x1c1)]=_0x3ecceb,this[_0x537dc8(0x1db)]=new Array(_0x4a9a72),this[_0x537dc8(0x1f4)]=new Int32Array(_0x4a9a72),this[_0x537dc8(0x1e8)]=_0x79518d,this['_location']=_0x31a094[0x0];}UniformArrayInt[a385_0x20c3d3(0x1f6)][a385_0x20c3d3(0x1e0)]=function(){var _0x522ced=a385_0x20c3d3,_0x38ef23=this['value'],_0x2d2ce3=_0x38ef23[_0x522ced(0x1cd)],_0x278b20=this[_0x522ced(0x1f4)],_0x1eefa5=![];for(var _0x5c7ea0=0x0;_0x5c7ea0<_0x2d2ce3;++_0x5c7ea0){var _0x4d235c=_0x38ef23[_0x5c7ea0];_0x4d235c!==_0x278b20[_0x5c7ea0]&&(_0x278b20[_0x5c7ea0]=_0x4d235c,_0x1eefa5=!![]);}_0x1eefa5&&this[_0x522ced(0x1e8)][_0x522ced(0x1e7)](this[_0x522ced(0x1d1)],_0x278b20);};function UniformArrayIntVec2(_0x4cb1a9,_0x48a9b1,_0x4dff5d,_0x25b2cc){var _0x1786e6=a385_0x20c3d3,_0x1ff85f=_0x25b2cc['length'];this[_0x1786e6(0x1c1)]=_0x4dff5d,this[_0x1786e6(0x1db)]=new Array(_0x1ff85f),this[_0x1786e6(0x1f4)]=new Int32Array(_0x1ff85f*0x2),this[_0x1786e6(0x1e8)]=_0x4cb1a9,this[_0x1786e6(0x1d1)]=_0x25b2cc[0x0];}UniformArrayIntVec2['prototype'][a385_0x20c3d3(0x1e0)]=function(){var _0x20a5ff=a385_0x20c3d3,_0x4ae820=this[_0x20a5ff(0x1db)],_0x61cfff=_0x4ae820[_0x20a5ff(0x1cd)],_0x3310ff=this[_0x20a5ff(0x1f4)],_0x4b4853=![],_0x35152d=0x0;for(var _0x3e9aa0=0x0;_0x3e9aa0<_0x61cfff;++_0x3e9aa0){var _0x45e8db=_0x4ae820[_0x3e9aa0];!a385_0xcb7748[_0x20a5ff(0x1d0)](_0x45e8db,_0x3310ff,_0x35152d)&&(a385_0xcb7748[_0x20a5ff(0x1d6)](_0x45e8db,_0x3310ff,_0x35152d),_0x4b4853=!![]),_0x35152d+=0x2;}_0x4b4853&&this[_0x20a5ff(0x1e8)][_0x20a5ff(0x1f5)](this[_0x20a5ff(0x1d1)],_0x3310ff);};function UniformArrayIntVec3(_0x164200,_0xf9a03b,_0x1d821d,_0x191ae6){var _0x515acb=a385_0x20c3d3,_0x2d1acb=_0x191ae6[_0x515acb(0x1cd)];this[_0x515acb(0x1c1)]=_0x1d821d,this[_0x515acb(0x1db)]=new Array(_0x2d1acb),this['_value']=new Int32Array(_0x2d1acb*0x3),this['_gl']=_0x164200,this[_0x515acb(0x1d1)]=_0x191ae6[0x0];}UniformArrayIntVec3[a385_0x20c3d3(0x1f6)][a385_0x20c3d3(0x1e0)]=function(){var _0x74eea3=a385_0x20c3d3,_0x2263ab=this[_0x74eea3(0x1db)],_0xac953f=_0x2263ab['length'],_0x34e68d=this['_value'],_0x324229=![],_0x24be86=0x0;for(var _0xc6a8e1=0x0;_0xc6a8e1<_0xac953f;++_0xc6a8e1){var _0x464047=_0x2263ab[_0xc6a8e1];!a385_0x33fde4[_0x74eea3(0x1d0)](_0x464047,_0x34e68d,_0x24be86)&&(a385_0x33fde4[_0x74eea3(0x1d6)](_0x464047,_0x34e68d,_0x24be86),_0x324229=!![]),_0x24be86+=0x3;}_0x324229&&this[_0x74eea3(0x1e8)][_0x74eea3(0x1ca)](this[_0x74eea3(0x1d1)],_0x34e68d);};function UniformArrayIntVec4(_0x2a9e20,_0xde939a,_0x71254f,_0x399d7c){var _0x4a8b92=a385_0x20c3d3,_0x2ccd86=_0x399d7c[_0x4a8b92(0x1cd)];this[_0x4a8b92(0x1c1)]=_0x71254f,this[_0x4a8b92(0x1db)]=new Array(_0x2ccd86),this[_0x4a8b92(0x1f4)]=new Int32Array(_0x2ccd86*0x4),this[_0x4a8b92(0x1e8)]=_0x2a9e20,this[_0x4a8b92(0x1d1)]=_0x399d7c[0x0];}UniformArrayIntVec4[a385_0x20c3d3(0x1f6)][a385_0x20c3d3(0x1e0)]=function(){var _0x420220=a385_0x20c3d3,_0x33fac0=this[_0x420220(0x1db)],_0x1515f3=_0x33fac0[_0x420220(0x1cd)],_0x405ee8=this['_value'],_0x4719de=![],_0x561608=0x0;for(var _0x3fb78c=0x0;_0x3fb78c<_0x1515f3;++_0x3fb78c){var _0x15d5d0=_0x33fac0[_0x3fb78c];!a385_0x4b6b57[_0x420220(0x1d0)](_0x15d5d0,_0x405ee8,_0x561608)&&(a385_0x4b6b57[_0x420220(0x1d6)](_0x15d5d0,_0x405ee8,_0x561608),_0x4719de=!![]),_0x561608+=0x4;}_0x4719de&&this[_0x420220(0x1e8)][_0x420220(0x1e4)](this['_location'],_0x405ee8);};function UniformArrayMat2(_0x476c6f,_0x6f0391,_0xa6f3c9,_0x482d41){var _0x1fda07=a385_0x20c3d3,_0x14ab2f=_0x482d41[_0x1fda07(0x1cd)];this[_0x1fda07(0x1c1)]=_0xa6f3c9,this[_0x1fda07(0x1db)]=new Array(_0x14ab2f),this[_0x1fda07(0x1f4)]=new Float32Array(_0x14ab2f*0x4),this[_0x1fda07(0x1e8)]=_0x476c6f,this[_0x1fda07(0x1d1)]=_0x482d41[0x0];}UniformArrayMat2[a385_0x20c3d3(0x1f6)][a385_0x20c3d3(0x1e0)]=function(){var _0x177166=a385_0x20c3d3,_0x396294=this[_0x177166(0x1db)],_0x13b1b2=_0x396294[_0x177166(0x1cd)],_0x5a5b2c=this[_0x177166(0x1f4)],_0x4b6781=![],_0x30dd23=0x0;for(var _0x51c70d=0x0;_0x51c70d<_0x13b1b2;++_0x51c70d){var _0x548576=_0x396294[_0x51c70d];!a385_0xf2f523[_0x177166(0x1d0)](_0x548576,_0x5a5b2c,_0x30dd23)&&(a385_0xf2f523[_0x177166(0x1d6)](_0x548576,_0x5a5b2c,_0x30dd23),_0x4b6781=!![]),_0x30dd23+=0x4;}_0x4b6781&&this[_0x177166(0x1e8)][_0x177166(0x1e5)](this[_0x177166(0x1d1)],![],_0x5a5b2c);};function UniformArrayMat3(_0x4d2371,_0x3b5235,_0x11a652,_0x524d2b){var _0x11e478=a385_0x20c3d3,_0x3f255f=_0x524d2b[_0x11e478(0x1cd)];this[_0x11e478(0x1c1)]=_0x11a652,this[_0x11e478(0x1db)]=new Array(_0x3f255f),this[_0x11e478(0x1f4)]=new Float32Array(_0x3f255f*0x9),this['_gl']=_0x4d2371,this['_location']=_0x524d2b[0x0];}UniformArrayMat3[a385_0x20c3d3(0x1f6)]['set']=function(){var _0x6d86b7=a385_0x20c3d3,_0x1e4667=this[_0x6d86b7(0x1db)],_0x437e4c=_0x1e4667['length'],_0x3fe1b3=this[_0x6d86b7(0x1f4)],_0x4f5383=![],_0x5ba5ff=0x0;for(var _0xae72b5=0x0;_0xae72b5<_0x437e4c;++_0xae72b5){var _0x4ab5c0=_0x1e4667[_0xae72b5];!a385_0x143b66['equalsArray'](_0x4ab5c0,_0x3fe1b3,_0x5ba5ff)&&(a385_0x143b66[_0x6d86b7(0x1d6)](_0x4ab5c0,_0x3fe1b3,_0x5ba5ff),_0x4f5383=!![]),_0x5ba5ff+=0x9;}_0x4f5383&&this[_0x6d86b7(0x1e8)][_0x6d86b7(0x1e9)](this[_0x6d86b7(0x1d1)],![],_0x3fe1b3);};function UniformArrayMat4(_0x50a719,_0x4fe84f,_0x577428,_0xb0992c){var _0x56d309=a385_0x20c3d3,_0x1faaba=_0xb0992c[_0x56d309(0x1cd)];this[_0x56d309(0x1c1)]=_0x577428,this[_0x56d309(0x1db)]=new Array(_0x1faaba),this[_0x56d309(0x1f4)]=new Float32Array(_0x1faaba*0x10),this[_0x56d309(0x1e8)]=_0x50a719,this[_0x56d309(0x1d1)]=_0xb0992c[0x0];}UniformArrayMat4[a385_0x20c3d3(0x1f6)][a385_0x20c3d3(0x1e0)]=function(){var _0x1c4094=a385_0x20c3d3,_0x43bced=this[_0x1c4094(0x1db)],_0x5ba0f4=_0x43bced[_0x1c4094(0x1cd)],_0x4a187e=this[_0x1c4094(0x1f4)],_0x284397=![],_0x159742=0x0;for(var _0x1ba222=0x0;_0x1ba222<_0x5ba0f4;++_0x1ba222){var _0x16bd64=_0x43bced[_0x1ba222];!a385_0x584f0d[_0x1c4094(0x1d0)](_0x16bd64,_0x4a187e,_0x159742)&&(a385_0x584f0d['pack'](_0x16bd64,_0x4a187e,_0x159742),_0x284397=!![]),_0x159742+=0x10;}_0x284397&&this['_gl'][_0x1c4094(0x1d2)](this[_0x1c4094(0x1d1)],![],_0x4a187e);};export default createUniformArray;