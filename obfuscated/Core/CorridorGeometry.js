var a42_0x23d1e1=a42_0x13c5;(function(_0x294908,_0x1dc6d2){var _0x269dfe=a42_0x13c5,_0x2821f7=_0x294908();while(!![]){try{var _0x253add=-parseInt(_0x269dfe(0x1fa))/0x1+parseInt(_0x269dfe(0x1e5))/0x2+-parseInt(_0x269dfe(0x1c7))/0x3*(parseInt(_0x269dfe(0x1df))/0x4)+-parseInt(_0x269dfe(0x1e1))/0x5*(-parseInt(_0x269dfe(0x1f0))/0x6)+-parseInt(_0x269dfe(0x1e4))/0x7+-parseInt(_0x269dfe(0x1e2))/0x8*(parseInt(_0x269dfe(0x1d2))/0x9)+parseInt(_0x269dfe(0x1cf))/0xa*(-parseInt(_0x269dfe(0x1d5))/0xb);if(_0x253add===_0x1dc6d2)break;else _0x2821f7['push'](_0x2821f7['shift']());}catch(_0x54af9a){_0x2821f7['push'](_0x2821f7['shift']());}}}(a42_0x5d0c,0x74c32));import a42_0x277333 from'./arrayFill.js';import a42_0x51ec96 from'./arrayRemoveDuplicates.js';import a42_0x2e583b from'./BoundingSphere.js';import a42_0x5e866e from'./Cartesian3.js';import a42_0x2d9078 from'./Cartographic.js';import a42_0x40b516 from'./Check.js';import a42_0x411ee2 from'./ComponentDatatype.js';import a42_0x18f9a2 from'./CornerType.js';function a42_0x5d0c(){var _0x20e0c5=['offsetAttribute','POSITIVE_INFINITY','packedLength','_vertexFormat','DOUBLE','extrudeDirection','north','TRIANGLES','extrudedHeight','bitangent','vertexFormat','cos','TOP','options.width','cartesianToCartographic','max','defined','118974TrUOdJ','NEGATIVE_INFINITY','width','UNSIGNED_BYTE','multiplyByScalar','ellipsoid','scaleToGeodeticSurface','unpack','300970tvkUHX','_rectangle','rightPositions','207mUUpYc','scaleToGeodeticHeight','normal','33BmYnHc','normalize','add','_positions','positions','equalsEpsilon','createGeometry','DEFAULT','addAttribute','fromVertices','12NWGHqv','position','1170aMpeMQ','72728bqijSa','corners','2257381MOlpPz','1243514KaVBpH','west','_cornerType','_width','UNIT_SPHERE','cross','_workerName','_granularity','NONE','_offsetAttribute','longitude','20562lPJZgZ','height','_extrudedHeight','cornerType','createCorridorGeometry','min','lefts','FLOAT','splice','WGS84','204576PGHrdA','computePositions','sin','applyOffset','leftPositions','ROUNDED','_height','tangents','negate','bitangents','endPositions','computeRectangle','options.positions','normals','clone','granularity','_ellipsoid','EMPTY_OBJECT','_shadowVolume','latitude','fromArray','length','tangent','values','value','indices','pack','createShadowVolume','attributes','array','geodeticSurfaceNormal','subtract','set','RADIANS_PER_DEGREE','shadowVolume','PI_OVER_TWO'];a42_0x5d0c=function(){return _0x20e0c5;};return a42_0x5d0c();}import a42_0x51c64a from'./CorridorGeometryLibrary.js';import a42_0x5dae81 from'./defaultValue.js';import a42_0x1a69c1 from'./defined.js';import a42_0x1e63cb from'./Ellipsoid.js';import a42_0xd2560f from'./Geometry.js';function a42_0x13c5(_0x5a3274,_0x532008){var _0x5d0c2d=a42_0x5d0c();return a42_0x13c5=function(_0x13c5cc,_0x4bc81b){_0x13c5cc=_0x13c5cc-0x1b4;var _0x5d201e=_0x5d0c2d[_0x13c5cc];return _0x5d201e;},a42_0x13c5(_0x5a3274,_0x532008);}import a42_0x480ac2 from'./GeometryAttribute.js';import a42_0x3d1fa9 from'./GeometryAttributes.js';import a42_0x3b5d4e from'./GeometryOffsetAttribute.js';import a42_0x2f0836 from'./IndexDatatype.js';import a42_0x266fb4 from'./Math.js';import a42_0x45cb26 from'./PolygonPipeline.js';import a42_0x3a685f from'./PrimitiveType.js';import a42_0x5c8121 from'./Rectangle.js';import a42_0x4c265e from'./VertexFormat.js';var cartesian1=new a42_0x5e866e(),cartesian2=new a42_0x5e866e(),cartesian3=new a42_0x5e866e(),cartesian4=new a42_0x5e866e(),cartesian5=new a42_0x5e866e(),cartesian6=new a42_0x5e866e(),scratch1=new a42_0x5e866e(),scratch2=new a42_0x5e866e();function scaleToSurface(_0x1b1654,_0x427f27){var _0x3d8d14=a42_0x13c5;for(var _0x5ec6cf=0x0;_0x5ec6cf<_0x1b1654[_0x3d8d14(0x20f)];_0x5ec6cf++){_0x1b1654[_0x5ec6cf]=_0x427f27[_0x3d8d14(0x1cd)](_0x1b1654[_0x5ec6cf],_0x1b1654[_0x5ec6cf]);}return _0x1b1654;}function addNormals(_0x3be10e,_0x36c308,_0x463a37,_0x1507c6,_0x1c7fe0,_0x58c4d7){var _0x147786=a42_0x13c5,_0x2cd931=_0x3be10e[_0x147786(0x207)],_0x1f3bed=_0x3be10e[_0x147786(0x201)],_0xf1ae6b=_0x3be10e[_0x147786(0x203)],_0x2828b3=a42_0x5e866e[_0x147786(0x1d6)](a42_0x5e866e['cross'](_0x463a37,_0x36c308,scratch1),scratch1);_0x58c4d7[_0x147786(0x1d4)]&&a42_0x51c64a[_0x147786(0x1dd)](_0x2cd931,_0x36c308,_0x1507c6,_0x1c7fe0),_0x58c4d7[_0x147786(0x210)]&&a42_0x51c64a[_0x147786(0x1dd)](_0x1f3bed,_0x2828b3,_0x1507c6,_0x1c7fe0),_0x58c4d7['bitangent']&&a42_0x51c64a[_0x147786(0x1dd)](_0xf1ae6b,_0x463a37,_0x1507c6,_0x1c7fe0);}function combine(_0x12df04,_0x4b9031,_0x4f4196){var _0x2c7349=a42_0x13c5,_0x383370=_0x12df04[_0x2c7349(0x1d9)],_0x5ca775=_0x12df04[_0x2c7349(0x1e3)],_0x12485a=_0x12df04[_0x2c7349(0x204)],_0x39b916=_0x12df04[_0x2c7349(0x1f6)],_0x26b8b0=_0x12df04[_0x2c7349(0x207)],_0xd10c89=new a42_0x3d1fa9(),_0xe27e0b,_0x512d9a=0x0,_0x407ffc=0x0,_0x3d7c10,_0x2467a8=0x0,_0x250f85;for(_0x3d7c10=0x0;_0x3d7c10<_0x383370[_0x2c7349(0x20f)];_0x3d7c10+=0x2){_0x250f85=_0x383370[_0x3d7c10][_0x2c7349(0x20f)]-0x3,_0x512d9a+=_0x250f85,_0x2467a8+=_0x250f85*0x2,_0x407ffc+=_0x383370[_0x3d7c10+0x1]['length']-0x3;}_0x512d9a+=0x3,_0x407ffc+=0x3;for(_0x3d7c10=0x0;_0x3d7c10<_0x5ca775['length'];_0x3d7c10++){_0xe27e0b=_0x5ca775[_0x3d7c10];var _0x234b15=_0x5ca775[_0x3d7c10][_0x2c7349(0x1fe)];a42_0x1a69c1(_0x234b15)?(_0x250f85=_0x234b15[_0x2c7349(0x20f)],_0x512d9a+=_0x250f85,_0x2467a8+=_0x250f85):(_0x250f85=_0x5ca775[_0x3d7c10][_0x2c7349(0x1d1)][_0x2c7349(0x20f)],_0x407ffc+=_0x250f85,_0x2467a8+=_0x250f85);}var _0x34d6a2=a42_0x1a69c1(_0x12485a),_0x41a6a0;_0x34d6a2&&(_0x41a6a0=_0x12485a[0x0][_0x2c7349(0x20f)]-0x3,_0x512d9a+=_0x41a6a0,_0x407ffc+=_0x41a6a0,_0x41a6a0/=0x3,_0x2467a8+=_0x41a6a0*0x6);var _0x3e8763=_0x512d9a+_0x407ffc,_0x35ef7b=new Float64Array(_0x3e8763),_0x1bbe4a=_0x4b9031[_0x2c7349(0x1d4)]?new Float32Array(_0x3e8763):undefined,_0x2ba9df=_0x4b9031[_0x2c7349(0x210)]?new Float32Array(_0x3e8763):undefined,_0x50e45d=_0x4b9031[_0x2c7349(0x1bf)]?new Float32Array(_0x3e8763):undefined,_0x3f83b1={'normals':_0x1bbe4a,'tangents':_0x2ba9df,'bitangents':_0x50e45d},_0x448792=0x0,_0xe6c43=_0x3e8763-0x1,_0x86ec5c,_0x119081,_0x155c7e,_0x380f3c,_0x550a93=cartesian1,_0xac8d2a=cartesian2,_0x223ebc,_0x4121e9,_0xf570c=_0x41a6a0/0x2,_0x44456a=a42_0x2f0836['createTypedArray'](_0x3e8763/0x3,_0x2467a8),_0x4fd87d=0x0;if(_0x34d6a2){_0x4121e9=cartesian3,_0x223ebc=cartesian4;var _0x140b10=_0x12485a[0x0];_0x550a93=a42_0x5e866e['fromArray'](_0x26b8b0,0x0,_0x550a93),_0xac8d2a=a42_0x5e866e[_0x2c7349(0x20e)](_0x39b916,0x0,_0xac8d2a);for(_0x3d7c10=0x0;_0x3d7c10<_0xf570c;_0x3d7c10++){_0x4121e9=a42_0x5e866e[_0x2c7349(0x20e)](_0x140b10,(_0xf570c-0x1-_0x3d7c10)*0x3,_0x4121e9),_0x223ebc=a42_0x5e866e[_0x2c7349(0x20e)](_0x140b10,(_0xf570c+_0x3d7c10)*0x3,_0x223ebc),a42_0x51c64a[_0x2c7349(0x1dd)](_0x35ef7b,_0x223ebc,_0x448792),a42_0x51c64a[_0x2c7349(0x1dd)](_0x35ef7b,_0x4121e9,undefined,_0xe6c43),addNormals(_0x3f83b1,_0x550a93,_0xac8d2a,_0x448792,_0xe6c43,_0x4b9031),_0x119081=_0x448792/0x3,_0x380f3c=_0x119081+0x1,_0x86ec5c=(_0xe6c43-0x2)/0x3,_0x155c7e=_0x86ec5c-0x1,_0x44456a[_0x4fd87d++]=_0x86ec5c,_0x44456a[_0x4fd87d++]=_0x119081,_0x44456a[_0x4fd87d++]=_0x155c7e,_0x44456a[_0x4fd87d++]=_0x155c7e,_0x44456a[_0x4fd87d++]=_0x119081,_0x44456a[_0x4fd87d++]=_0x380f3c,_0x448792+=0x3,_0xe6c43-=0x3;}}var _0x56489c=0x0,_0x16dbcb=0x0,_0x4e0c89=_0x383370[_0x56489c++],_0xe4446c=_0x383370[_0x56489c++];_0x35ef7b['set'](_0x4e0c89,_0x448792),_0x35ef7b[_0x2c7349(0x21a)](_0xe4446c,_0xe6c43-_0xe4446c['length']+0x1),_0xac8d2a=a42_0x5e866e[_0x2c7349(0x20e)](_0x39b916,_0x16dbcb,_0xac8d2a);var _0x59cb89,_0x4d723a;_0x250f85=_0xe4446c[_0x2c7349(0x20f)]-0x3;for(_0x3d7c10=0x0;_0x3d7c10<_0x250f85;_0x3d7c10+=0x3){_0x59cb89=_0x4f4196['geodeticSurfaceNormal'](a42_0x5e866e[_0x2c7349(0x20e)](_0x4e0c89,_0x3d7c10,scratch1),scratch1),_0x4d723a=_0x4f4196[_0x2c7349(0x218)](a42_0x5e866e['fromArray'](_0xe4446c,_0x250f85-_0x3d7c10,scratch2),scratch2),_0x550a93=a42_0x5e866e[_0x2c7349(0x1d6)](a42_0x5e866e['add'](_0x59cb89,_0x4d723a,_0x550a93),_0x550a93),addNormals(_0x3f83b1,_0x550a93,_0xac8d2a,_0x448792,_0xe6c43,_0x4b9031),_0x119081=_0x448792/0x3,_0x380f3c=_0x119081+0x1,_0x86ec5c=(_0xe6c43-0x2)/0x3,_0x155c7e=_0x86ec5c-0x1,_0x44456a[_0x4fd87d++]=_0x86ec5c,_0x44456a[_0x4fd87d++]=_0x119081,_0x44456a[_0x4fd87d++]=_0x155c7e,_0x44456a[_0x4fd87d++]=_0x155c7e,_0x44456a[_0x4fd87d++]=_0x119081,_0x44456a[_0x4fd87d++]=_0x380f3c,_0x448792+=0x3,_0xe6c43-=0x3;}_0x59cb89=_0x4f4196['geodeticSurfaceNormal'](a42_0x5e866e['fromArray'](_0x4e0c89,_0x250f85,scratch1),scratch1),_0x4d723a=_0x4f4196[_0x2c7349(0x218)](a42_0x5e866e[_0x2c7349(0x20e)](_0xe4446c,_0x250f85,scratch2),scratch2),_0x550a93=a42_0x5e866e[_0x2c7349(0x1d6)](a42_0x5e866e[_0x2c7349(0x1d7)](_0x59cb89,_0x4d723a,_0x550a93),_0x550a93),_0x16dbcb+=0x3;for(_0x3d7c10=0x0;_0x3d7c10<_0x5ca775[_0x2c7349(0x20f)];_0x3d7c10++){var _0x205e36;_0xe27e0b=_0x5ca775[_0x3d7c10];var _0x3b9052=_0xe27e0b[_0x2c7349(0x1fe)],_0x444748=_0xe27e0b[_0x2c7349(0x1d1)],_0x4b6e5d,_0x368cc2,_0x92e7e=cartesian6,_0x3f4057=cartesian3,_0x5db3e1=cartesian4;_0x550a93=a42_0x5e866e['fromArray'](_0x26b8b0,_0x16dbcb,_0x550a93);if(a42_0x1a69c1(_0x3b9052)){addNormals(_0x3f83b1,_0x550a93,_0xac8d2a,undefined,_0xe6c43,_0x4b9031),_0xe6c43-=0x3,_0x4b6e5d=_0x380f3c,_0x368cc2=_0x155c7e;for(_0x205e36=0x0;_0x205e36<_0x3b9052[_0x2c7349(0x20f)]/0x3;_0x205e36++){_0x92e7e=a42_0x5e866e[_0x2c7349(0x20e)](_0x3b9052,_0x205e36*0x3,_0x92e7e),_0x44456a[_0x4fd87d++]=_0x4b6e5d,_0x44456a[_0x4fd87d++]=_0x368cc2-_0x205e36-0x1,_0x44456a[_0x4fd87d++]=_0x368cc2-_0x205e36,a42_0x51c64a[_0x2c7349(0x1dd)](_0x35ef7b,_0x92e7e,undefined,_0xe6c43),_0x3f4057=a42_0x5e866e[_0x2c7349(0x20e)](_0x35ef7b,(_0x368cc2-_0x205e36-0x1)*0x3,_0x3f4057),_0x5db3e1=a42_0x5e866e[_0x2c7349(0x20e)](_0x35ef7b,_0x4b6e5d*0x3,_0x5db3e1),_0xac8d2a=a42_0x5e866e[_0x2c7349(0x1d6)](a42_0x5e866e[_0x2c7349(0x219)](_0x3f4057,_0x5db3e1,_0xac8d2a),_0xac8d2a),addNormals(_0x3f83b1,_0x550a93,_0xac8d2a,undefined,_0xe6c43,_0x4b9031),_0xe6c43-=0x3;}_0x92e7e=a42_0x5e866e[_0x2c7349(0x20e)](_0x35ef7b,_0x4b6e5d*0x3,_0x92e7e),_0x3f4057=a42_0x5e866e[_0x2c7349(0x219)](a42_0x5e866e[_0x2c7349(0x20e)](_0x35ef7b,_0x368cc2*0x3,_0x3f4057),_0x92e7e,_0x3f4057),_0x5db3e1=a42_0x5e866e['subtract'](a42_0x5e866e[_0x2c7349(0x20e)](_0x35ef7b,(_0x368cc2-_0x205e36)*0x3,_0x5db3e1),_0x92e7e,_0x5db3e1),_0xac8d2a=a42_0x5e866e[_0x2c7349(0x1d6)](a42_0x5e866e[_0x2c7349(0x1d7)](_0x3f4057,_0x5db3e1,_0xac8d2a),_0xac8d2a),addNormals(_0x3f83b1,_0x550a93,_0xac8d2a,_0x448792,undefined,_0x4b9031),_0x448792+=0x3;}else{addNormals(_0x3f83b1,_0x550a93,_0xac8d2a,_0x448792,undefined,_0x4b9031),_0x448792+=0x3,_0x4b6e5d=_0x155c7e,_0x368cc2=_0x380f3c;for(_0x205e36=0x0;_0x205e36<_0x444748[_0x2c7349(0x20f)]/0x3;_0x205e36++){_0x92e7e=a42_0x5e866e['fromArray'](_0x444748,_0x205e36*0x3,_0x92e7e),_0x44456a[_0x4fd87d++]=_0x4b6e5d,_0x44456a[_0x4fd87d++]=_0x368cc2+_0x205e36,_0x44456a[_0x4fd87d++]=_0x368cc2+_0x205e36+0x1,a42_0x51c64a['addAttribute'](_0x35ef7b,_0x92e7e,_0x448792),_0x3f4057=a42_0x5e866e[_0x2c7349(0x20e)](_0x35ef7b,_0x4b6e5d*0x3,_0x3f4057),_0x5db3e1=a42_0x5e866e['fromArray'](_0x35ef7b,(_0x368cc2+_0x205e36)*0x3,_0x5db3e1),_0xac8d2a=a42_0x5e866e[_0x2c7349(0x1d6)](a42_0x5e866e['subtract'](_0x3f4057,_0x5db3e1,_0xac8d2a),_0xac8d2a),addNormals(_0x3f83b1,_0x550a93,_0xac8d2a,_0x448792,undefined,_0x4b9031),_0x448792+=0x3;}_0x92e7e=a42_0x5e866e[_0x2c7349(0x20e)](_0x35ef7b,_0x4b6e5d*0x3,_0x92e7e),_0x3f4057=a42_0x5e866e[_0x2c7349(0x219)](a42_0x5e866e[_0x2c7349(0x20e)](_0x35ef7b,(_0x368cc2+_0x205e36)*0x3,_0x3f4057),_0x92e7e,_0x3f4057),_0x5db3e1=a42_0x5e866e[_0x2c7349(0x219)](a42_0x5e866e[_0x2c7349(0x20e)](_0x35ef7b,_0x368cc2*0x3,_0x5db3e1),_0x92e7e,_0x5db3e1),_0xac8d2a=a42_0x5e866e['normalize'](a42_0x5e866e[_0x2c7349(0x202)](a42_0x5e866e[_0x2c7349(0x1d7)](_0x5db3e1,_0x3f4057,_0xac8d2a),_0xac8d2a),_0xac8d2a),addNormals(_0x3f83b1,_0x550a93,_0xac8d2a,undefined,_0xe6c43,_0x4b9031),_0xe6c43-=0x3;}_0x4e0c89=_0x383370[_0x56489c++],_0xe4446c=_0x383370[_0x56489c++],_0x4e0c89[_0x2c7349(0x1f8)](0x0,0x3),_0xe4446c[_0x2c7349(0x1f8)](_0xe4446c['length']-0x3,0x3),_0x35ef7b['set'](_0x4e0c89,_0x448792),_0x35ef7b['set'](_0xe4446c,_0xe6c43-_0xe4446c[_0x2c7349(0x20f)]+0x1),_0x250f85=_0xe4446c[_0x2c7349(0x20f)]-0x3,_0x16dbcb+=0x3,_0xac8d2a=a42_0x5e866e[_0x2c7349(0x20e)](_0x39b916,_0x16dbcb,_0xac8d2a);for(_0x205e36=0x0;_0x205e36<_0xe4446c['length'];_0x205e36+=0x3){_0x59cb89=_0x4f4196[_0x2c7349(0x218)](a42_0x5e866e[_0x2c7349(0x20e)](_0x4e0c89,_0x205e36,scratch1),scratch1),_0x4d723a=_0x4f4196[_0x2c7349(0x218)](a42_0x5e866e[_0x2c7349(0x20e)](_0xe4446c,_0x250f85-_0x205e36,scratch2),scratch2),_0x550a93=a42_0x5e866e['normalize'](a42_0x5e866e[_0x2c7349(0x1d7)](_0x59cb89,_0x4d723a,_0x550a93),_0x550a93),addNormals(_0x3f83b1,_0x550a93,_0xac8d2a,_0x448792,_0xe6c43,_0x4b9031),_0x380f3c=_0x448792/0x3,_0x119081=_0x380f3c-0x1,_0x155c7e=(_0xe6c43-0x2)/0x3,_0x86ec5c=_0x155c7e+0x1,_0x44456a[_0x4fd87d++]=_0x86ec5c,_0x44456a[_0x4fd87d++]=_0x119081,_0x44456a[_0x4fd87d++]=_0x155c7e,_0x44456a[_0x4fd87d++]=_0x155c7e,_0x44456a[_0x4fd87d++]=_0x119081,_0x44456a[_0x4fd87d++]=_0x380f3c,_0x448792+=0x3,_0xe6c43-=0x3;}_0x448792-=0x3,_0xe6c43+=0x3;}_0x550a93=a42_0x5e866e[_0x2c7349(0x20e)](_0x26b8b0,_0x26b8b0[_0x2c7349(0x20f)]-0x3,_0x550a93),addNormals(_0x3f83b1,_0x550a93,_0xac8d2a,_0x448792,_0xe6c43,_0x4b9031);if(_0x34d6a2){_0x448792+=0x3,_0xe6c43-=0x3,_0x4121e9=cartesian3,_0x223ebc=cartesian4;var _0x55dc50=_0x12485a[0x1];for(_0x3d7c10=0x0;_0x3d7c10<_0xf570c;_0x3d7c10++){_0x4121e9=a42_0x5e866e[_0x2c7349(0x20e)](_0x55dc50,(_0x41a6a0-_0x3d7c10-0x1)*0x3,_0x4121e9),_0x223ebc=a42_0x5e866e[_0x2c7349(0x20e)](_0x55dc50,_0x3d7c10*0x3,_0x223ebc),a42_0x51c64a[_0x2c7349(0x1dd)](_0x35ef7b,_0x4121e9,undefined,_0xe6c43),a42_0x51c64a[_0x2c7349(0x1dd)](_0x35ef7b,_0x223ebc,_0x448792),addNormals(_0x3f83b1,_0x550a93,_0xac8d2a,_0x448792,_0xe6c43,_0x4b9031),_0x380f3c=_0x448792/0x3,_0x119081=_0x380f3c-0x1,_0x155c7e=(_0xe6c43-0x2)/0x3,_0x86ec5c=_0x155c7e+0x1,_0x44456a[_0x4fd87d++]=_0x86ec5c,_0x44456a[_0x4fd87d++]=_0x119081,_0x44456a[_0x4fd87d++]=_0x155c7e,_0x44456a[_0x4fd87d++]=_0x155c7e,_0x44456a[_0x4fd87d++]=_0x119081,_0x44456a[_0x4fd87d++]=_0x380f3c,_0x448792+=0x3,_0xe6c43-=0x3;}}_0xd10c89[_0x2c7349(0x1e0)]=new a42_0x480ac2({'componentDatatype':a42_0x411ee2[_0x2c7349(0x1ba)],'componentsPerAttribute':0x3,'values':_0x35ef7b});if(_0x4b9031['st']){var _0x4a74e3=new Float32Array(_0x3e8763/0x3*0x2),_0xf41ad,_0x3beac9,_0x57b2c8=0x0;if(_0x34d6a2){_0x512d9a/=0x3,_0x407ffc/=0x3;var _0x80cfc6=Math['PI']/(_0x41a6a0+0x1);_0x3beac9=0x1/(_0x512d9a-_0x41a6a0+0x1),_0xf41ad=0x1/(_0x407ffc-_0x41a6a0+0x1);var _0x2997f7,_0x435467=_0x41a6a0/0x2;for(_0x3d7c10=_0x435467+0x1;_0x3d7c10<_0x41a6a0+0x1;_0x3d7c10++){_0x2997f7=a42_0x266fb4['PI_OVER_TWO']+_0x80cfc6*_0x3d7c10,_0x4a74e3[_0x57b2c8++]=_0xf41ad*(0x1+Math[_0x2c7349(0x1c1)](_0x2997f7)),_0x4a74e3[_0x57b2c8++]=0.5*(0x1+Math[_0x2c7349(0x1fc)](_0x2997f7));}for(_0x3d7c10=0x1;_0x3d7c10<_0x407ffc-_0x41a6a0+0x1;_0x3d7c10++){_0x4a74e3[_0x57b2c8++]=_0x3d7c10*_0xf41ad,_0x4a74e3[_0x57b2c8++]=0x0;}for(_0x3d7c10=_0x41a6a0;_0x3d7c10>_0x435467;_0x3d7c10--){_0x2997f7=a42_0x266fb4[_0x2c7349(0x1b5)]-_0x3d7c10*_0x80cfc6,_0x4a74e3[_0x57b2c8++]=0x1-_0xf41ad*(0x1+Math[_0x2c7349(0x1c1)](_0x2997f7)),_0x4a74e3[_0x57b2c8++]=0.5*(0x1+Math[_0x2c7349(0x1fc)](_0x2997f7));}for(_0x3d7c10=_0x435467;_0x3d7c10>0x0;_0x3d7c10--){_0x2997f7=a42_0x266fb4[_0x2c7349(0x1b5)]-_0x80cfc6*_0x3d7c10,_0x4a74e3[_0x57b2c8++]=0x1-_0x3beac9*(0x1+Math[_0x2c7349(0x1c1)](_0x2997f7)),_0x4a74e3[_0x57b2c8++]=0.5*(0x1+Math[_0x2c7349(0x1fc)](_0x2997f7));}for(_0x3d7c10=_0x512d9a-_0x41a6a0;_0x3d7c10>0x0;_0x3d7c10--){_0x4a74e3[_0x57b2c8++]=_0x3d7c10*_0x3beac9,_0x4a74e3[_0x57b2c8++]=0x1;}for(_0x3d7c10=0x1;_0x3d7c10<_0x435467+0x1;_0x3d7c10++){_0x2997f7=a42_0x266fb4[_0x2c7349(0x1b5)]+_0x80cfc6*_0x3d7c10,_0x4a74e3[_0x57b2c8++]=_0x3beac9*(0x1+Math['cos'](_0x2997f7)),_0x4a74e3[_0x57b2c8++]=0.5*(0x1+Math[_0x2c7349(0x1fc)](_0x2997f7));}}else{_0x512d9a/=0x3,_0x407ffc/=0x3,_0x3beac9=0x1/(_0x512d9a-0x1),_0xf41ad=0x1/(_0x407ffc-0x1);for(_0x3d7c10=0x0;_0x3d7c10<_0x407ffc;_0x3d7c10++){_0x4a74e3[_0x57b2c8++]=_0x3d7c10*_0xf41ad,_0x4a74e3[_0x57b2c8++]=0x0;}for(_0x3d7c10=_0x512d9a;_0x3d7c10>0x0;_0x3d7c10--){_0x4a74e3[_0x57b2c8++]=(_0x3d7c10-0x1)*_0x3beac9,_0x4a74e3[_0x57b2c8++]=0x1;}}_0xd10c89['st']=new a42_0x480ac2({'componentDatatype':a42_0x411ee2[_0x2c7349(0x1f7)],'componentsPerAttribute':0x2,'values':_0x4a74e3});}return _0x4b9031[_0x2c7349(0x1d4)]&&(_0xd10c89[_0x2c7349(0x1d4)]=new a42_0x480ac2({'componentDatatype':a42_0x411ee2[_0x2c7349(0x1f7)],'componentsPerAttribute':0x3,'values':_0x3f83b1['normals']})),_0x4b9031['tangent']&&(_0xd10c89[_0x2c7349(0x210)]=new a42_0x480ac2({'componentDatatype':a42_0x411ee2[_0x2c7349(0x1f7)],'componentsPerAttribute':0x3,'values':_0x3f83b1[_0x2c7349(0x201)]})),_0x4b9031[_0x2c7349(0x1bf)]&&(_0xd10c89[_0x2c7349(0x1bf)]=new a42_0x480ac2({'componentDatatype':a42_0x411ee2['FLOAT'],'componentsPerAttribute':0x3,'values':_0x3f83b1[_0x2c7349(0x203)]})),{'attributes':_0xd10c89,'indices':_0x44456a};}function extrudedAttributes(_0x73608d,_0x476e3d){var _0x2c7d2b=a42_0x13c5;if(!_0x476e3d[_0x2c7d2b(0x1d4)]&&!_0x476e3d['tangent']&&!_0x476e3d['bitangent']&&!_0x476e3d['st'])return _0x73608d;var _0x48ad23=_0x73608d[_0x2c7d2b(0x1e0)][_0x2c7d2b(0x211)],_0x3396ec,_0x159a10;(_0x476e3d[_0x2c7d2b(0x1d4)]||_0x476e3d['bitangent'])&&(_0x3396ec=_0x73608d[_0x2c7d2b(0x1d4)][_0x2c7d2b(0x211)],_0x159a10=_0x73608d[_0x2c7d2b(0x1bf)][_0x2c7d2b(0x211)]);var _0x1b0dc0=_0x73608d['position'][_0x2c7d2b(0x211)][_0x2c7d2b(0x20f)]/0x12,_0x38daff=_0x1b0dc0*0x3,_0x54559b=_0x1b0dc0*0x2,_0x2406b2=_0x38daff*0x2,_0x1da3dd;if(_0x476e3d[_0x2c7d2b(0x1d4)]||_0x476e3d['bitangent']||_0x476e3d[_0x2c7d2b(0x210)]){var _0x2a5643=_0x476e3d[_0x2c7d2b(0x1d4)]?new Float32Array(_0x38daff*0x6):undefined,_0x4ea115=_0x476e3d[_0x2c7d2b(0x210)]?new Float32Array(_0x38daff*0x6):undefined,_0x17fe72=_0x476e3d['bitangent']?new Float32Array(_0x38daff*0x6):undefined,_0x3e6c08=cartesian1,_0x12a2d5=cartesian2,_0x3b3847=cartesian3,_0x1b4b57=cartesian4,_0x38a62d=cartesian5,_0xbcc8dd=cartesian6,_0x438dc6=_0x2406b2;for(_0x1da3dd=0x0;_0x1da3dd<_0x38daff;_0x1da3dd+=0x3){var _0x421dfd=_0x438dc6+_0x2406b2;_0x3e6c08=a42_0x5e866e[_0x2c7d2b(0x20e)](_0x48ad23,_0x1da3dd,_0x3e6c08),_0x12a2d5=a42_0x5e866e['fromArray'](_0x48ad23,_0x1da3dd+_0x38daff,_0x12a2d5),_0x3b3847=a42_0x5e866e[_0x2c7d2b(0x20e)](_0x48ad23,(_0x1da3dd+0x3)%_0x38daff,_0x3b3847),_0x12a2d5=a42_0x5e866e[_0x2c7d2b(0x219)](_0x12a2d5,_0x3e6c08,_0x12a2d5),_0x3b3847=a42_0x5e866e[_0x2c7d2b(0x219)](_0x3b3847,_0x3e6c08,_0x3b3847),_0x1b4b57=a42_0x5e866e[_0x2c7d2b(0x1d6)](a42_0x5e866e[_0x2c7d2b(0x1ea)](_0x12a2d5,_0x3b3847,_0x1b4b57),_0x1b4b57),_0x476e3d['normal']&&(a42_0x51c64a[_0x2c7d2b(0x1dd)](_0x2a5643,_0x1b4b57,_0x421dfd),a42_0x51c64a[_0x2c7d2b(0x1dd)](_0x2a5643,_0x1b4b57,_0x421dfd+0x3),a42_0x51c64a[_0x2c7d2b(0x1dd)](_0x2a5643,_0x1b4b57,_0x438dc6),a42_0x51c64a[_0x2c7d2b(0x1dd)](_0x2a5643,_0x1b4b57,_0x438dc6+0x3)),(_0x476e3d['tangent']||_0x476e3d[_0x2c7d2b(0x1bf)])&&(_0xbcc8dd=a42_0x5e866e['fromArray'](_0x3396ec,_0x1da3dd,_0xbcc8dd),_0x476e3d[_0x2c7d2b(0x1bf)]&&(a42_0x51c64a['addAttribute'](_0x17fe72,_0xbcc8dd,_0x421dfd),a42_0x51c64a[_0x2c7d2b(0x1dd)](_0x17fe72,_0xbcc8dd,_0x421dfd+0x3),a42_0x51c64a[_0x2c7d2b(0x1dd)](_0x17fe72,_0xbcc8dd,_0x438dc6),a42_0x51c64a[_0x2c7d2b(0x1dd)](_0x17fe72,_0xbcc8dd,_0x438dc6+0x3)),_0x476e3d['tangent']&&(_0x38a62d=a42_0x5e866e['normalize'](a42_0x5e866e[_0x2c7d2b(0x1ea)](_0xbcc8dd,_0x1b4b57,_0x38a62d),_0x38a62d),a42_0x51c64a[_0x2c7d2b(0x1dd)](_0x4ea115,_0x38a62d,_0x421dfd),a42_0x51c64a[_0x2c7d2b(0x1dd)](_0x4ea115,_0x38a62d,_0x421dfd+0x3),a42_0x51c64a[_0x2c7d2b(0x1dd)](_0x4ea115,_0x38a62d,_0x438dc6),a42_0x51c64a['addAttribute'](_0x4ea115,_0x38a62d,_0x438dc6+0x3))),_0x438dc6+=0x6;}if(_0x476e3d['normal']){_0x2a5643[_0x2c7d2b(0x21a)](_0x3396ec);for(_0x1da3dd=0x0;_0x1da3dd<_0x38daff;_0x1da3dd+=0x3){_0x2a5643[_0x1da3dd+_0x38daff]=-_0x3396ec[_0x1da3dd],_0x2a5643[_0x1da3dd+_0x38daff+0x1]=-_0x3396ec[_0x1da3dd+0x1],_0x2a5643[_0x1da3dd+_0x38daff+0x2]=-_0x3396ec[_0x1da3dd+0x2];}_0x73608d[_0x2c7d2b(0x1d4)]['values']=_0x2a5643;}else _0x73608d[_0x2c7d2b(0x1d4)]=undefined;_0x476e3d[_0x2c7d2b(0x1bf)]?(_0x17fe72[_0x2c7d2b(0x21a)](_0x159a10),_0x17fe72[_0x2c7d2b(0x21a)](_0x159a10,_0x38daff),_0x73608d[_0x2c7d2b(0x1bf)]['values']=_0x17fe72):_0x73608d[_0x2c7d2b(0x1bf)]=undefined;if(_0x476e3d[_0x2c7d2b(0x210)]){var _0x396ac2=_0x73608d['tangent'][_0x2c7d2b(0x211)];_0x4ea115[_0x2c7d2b(0x21a)](_0x396ac2),_0x4ea115[_0x2c7d2b(0x21a)](_0x396ac2,_0x38daff),_0x73608d[_0x2c7d2b(0x210)][_0x2c7d2b(0x211)]=_0x4ea115;}}if(_0x476e3d['st']){var _0x38e797=_0x73608d['st'][_0x2c7d2b(0x211)],_0x55b150=new Float32Array(_0x54559b*0x6);_0x55b150[_0x2c7d2b(0x21a)](_0x38e797),_0x55b150[_0x2c7d2b(0x21a)](_0x38e797,_0x54559b);var _0x402404=_0x54559b*0x2;for(var _0x3a0000=0x0;_0x3a0000<0x2;_0x3a0000++){_0x55b150[_0x402404++]=_0x38e797[0x0],_0x55b150[_0x402404++]=_0x38e797[0x1];for(_0x1da3dd=0x2;_0x1da3dd<_0x54559b;_0x1da3dd+=0x2){var _0x1c76eb=_0x38e797[_0x1da3dd],_0x4f3c89=_0x38e797[_0x1da3dd+0x1];_0x55b150[_0x402404++]=_0x1c76eb,_0x55b150[_0x402404++]=_0x4f3c89,_0x55b150[_0x402404++]=_0x1c76eb,_0x55b150[_0x402404++]=_0x4f3c89;}_0x55b150[_0x402404++]=_0x38e797[0x0],_0x55b150[_0x402404++]=_0x38e797[0x1];}_0x73608d['st'][_0x2c7d2b(0x211)]=_0x55b150;}return _0x73608d;}function addWallPositions(_0x4d7666,_0x329005,_0xea49f6){var _0x5c91c1=a42_0x13c5;_0xea49f6[_0x329005++]=_0x4d7666[0x0],_0xea49f6[_0x329005++]=_0x4d7666[0x1],_0xea49f6[_0x329005++]=_0x4d7666[0x2];for(var _0x41d06e=0x3;_0x41d06e<_0x4d7666[_0x5c91c1(0x20f)];_0x41d06e+=0x3){var _0x118eba=_0x4d7666[_0x41d06e],_0x274533=_0x4d7666[_0x41d06e+0x1],_0x19ca7c=_0x4d7666[_0x41d06e+0x2];_0xea49f6[_0x329005++]=_0x118eba,_0xea49f6[_0x329005++]=_0x274533,_0xea49f6[_0x329005++]=_0x19ca7c,_0xea49f6[_0x329005++]=_0x118eba,_0xea49f6[_0x329005++]=_0x274533,_0xea49f6[_0x329005++]=_0x19ca7c;}return _0xea49f6[_0x329005++]=_0x4d7666[0x0],_0xea49f6[_0x329005++]=_0x4d7666[0x1],_0xea49f6[_0x329005++]=_0x4d7666[0x2],_0xea49f6;}function computePositionsExtruded(_0x32a457,_0x3a395d){var _0x34d277=a42_0x13c5,_0x2a5f95=new a42_0x4c265e({'position':_0x3a395d[_0x34d277(0x1e0)],'normal':_0x3a395d[_0x34d277(0x1d4)]||_0x3a395d[_0x34d277(0x1bf)]||_0x32a457[_0x34d277(0x1b4)],'tangent':_0x3a395d[_0x34d277(0x210)],'bitangent':_0x3a395d[_0x34d277(0x1d4)]||_0x3a395d[_0x34d277(0x1bf)],'st':_0x3a395d['st']}),_0x172c69=_0x32a457['ellipsoid'],_0x3a23fa=a42_0x51c64a[_0x34d277(0x1fb)](_0x32a457),_0x4b3450=combine(_0x3a23fa,_0x2a5f95,_0x172c69),_0x5296dd=_0x32a457[_0x34d277(0x1f1)],_0x38fadf=_0x32a457[_0x34d277(0x1be)],_0x41c4bc=_0x4b3450[_0x34d277(0x216)],_0x1694c9=_0x4b3450[_0x34d277(0x213)],_0x34c7e6=_0x41c4bc[_0x34d277(0x1e0)][_0x34d277(0x211)],_0x1a71a9=_0x34c7e6[_0x34d277(0x20f)],_0x2c526a=new Float64Array(_0x1a71a9*0x6),_0x2040f2=new Float64Array(_0x1a71a9);_0x2040f2[_0x34d277(0x21a)](_0x34c7e6);var _0x117bfa=new Float64Array(_0x1a71a9*0x4);_0x34c7e6=a42_0x45cb26[_0x34d277(0x1d3)](_0x34c7e6,_0x5296dd,_0x172c69),_0x117bfa=addWallPositions(_0x34c7e6,0x0,_0x117bfa),_0x2040f2=a42_0x45cb26[_0x34d277(0x1d3)](_0x2040f2,_0x38fadf,_0x172c69),_0x117bfa=addWallPositions(_0x2040f2,_0x1a71a9*0x2,_0x117bfa),_0x2c526a[_0x34d277(0x21a)](_0x34c7e6),_0x2c526a['set'](_0x2040f2,_0x1a71a9),_0x2c526a[_0x34d277(0x21a)](_0x117bfa,_0x1a71a9*0x2),_0x41c4bc[_0x34d277(0x1e0)][_0x34d277(0x211)]=_0x2c526a,_0x41c4bc=extrudedAttributes(_0x41c4bc,_0x3a395d);var _0xca5758,_0x38e70d=_0x1a71a9/0x3;if(_0x32a457[_0x34d277(0x1b4)]){var _0x23bf82=_0x41c4bc[_0x34d277(0x1d4)]['values'];_0x1a71a9=_0x23bf82[_0x34d277(0x20f)];var _0x2612be=new Float32Array(_0x1a71a9*0x6);for(_0xca5758=0x0;_0xca5758<_0x1a71a9;_0xca5758++){_0x23bf82[_0xca5758]=-_0x23bf82[_0xca5758];}_0x2612be[_0x34d277(0x21a)](_0x23bf82,_0x1a71a9),_0x2612be=addWallPositions(_0x23bf82,_0x1a71a9*0x4,_0x2612be),_0x41c4bc[_0x34d277(0x1bb)]=new a42_0x480ac2({'componentDatatype':a42_0x411ee2[_0x34d277(0x1f7)],'componentsPerAttribute':0x3,'values':_0x2612be}),!_0x3a395d[_0x34d277(0x1d4)]&&(_0x41c4bc[_0x34d277(0x1d4)]=undefined);}if(a42_0x1a69c1(_0x32a457['offsetAttribute'])){var _0x48b4ca=new Uint8Array(_0x38e70d*0x6);if(_0x32a457[_0x34d277(0x1b6)]===a42_0x3b5d4e[_0x34d277(0x1c2)])_0x48b4ca=a42_0x277333(_0x48b4ca,0x1,0x0,_0x38e70d),_0x48b4ca=a42_0x277333(_0x48b4ca,0x1,_0x38e70d*0x2,_0x38e70d*0x4);else{var _0x4bc1a1=_0x32a457[_0x34d277(0x1b6)]===a42_0x3b5d4e[_0x34d277(0x1ed)]?0x0:0x1;_0x48b4ca=a42_0x277333(_0x48b4ca,_0x4bc1a1);}_0x41c4bc[_0x34d277(0x1fd)]=new a42_0x480ac2({'componentDatatype':a42_0x411ee2[_0x34d277(0x1ca)],'componentsPerAttribute':0x1,'values':_0x48b4ca});}var _0x4bcbda=_0x1694c9[_0x34d277(0x20f)],_0x3e51e1=_0x38e70d+_0x38e70d,_0x1f075d=a42_0x2f0836['createTypedArray'](_0x2c526a['length']/0x3,_0x4bcbda*0x2+_0x3e51e1*0x3);_0x1f075d['set'](_0x1694c9);var _0x5b3a5b=_0x4bcbda;for(_0xca5758=0x0;_0xca5758<_0x4bcbda;_0xca5758+=0x3){var _0x3d7708=_0x1694c9[_0xca5758],_0x550044=_0x1694c9[_0xca5758+0x1],_0x2528de=_0x1694c9[_0xca5758+0x2];_0x1f075d[_0x5b3a5b++]=_0x2528de+_0x38e70d,_0x1f075d[_0x5b3a5b++]=_0x550044+_0x38e70d,_0x1f075d[_0x5b3a5b++]=_0x3d7708+_0x38e70d;}var _0x2c695d,_0x56bc99,_0x2e2007,_0x4929eb;for(_0xca5758=0x0;_0xca5758<_0x3e51e1;_0xca5758+=0x2){_0x2c695d=_0xca5758+_0x3e51e1,_0x56bc99=_0x2c695d+_0x3e51e1,_0x2e2007=_0x2c695d+0x1,_0x4929eb=_0x56bc99+0x1,_0x1f075d[_0x5b3a5b++]=_0x2c695d,_0x1f075d[_0x5b3a5b++]=_0x56bc99,_0x1f075d[_0x5b3a5b++]=_0x2e2007,_0x1f075d[_0x5b3a5b++]=_0x2e2007,_0x1f075d[_0x5b3a5b++]=_0x56bc99,_0x1f075d[_0x5b3a5b++]=_0x4929eb;}return{'attributes':_0x41c4bc,'indices':_0x1f075d};}var scratchCartesian1=new a42_0x5e866e(),scratchCartesian2=new a42_0x5e866e(),scratchCartographic=new a42_0x2d9078();function computeOffsetPoints(_0x36cd0a,_0x268e3f,_0x33fc5a,_0x37bb1d,_0xac3085,_0x33f27e){var _0x1e3762=a42_0x13c5,_0xa3b046=a42_0x5e866e[_0x1e3762(0x219)](_0x268e3f,_0x36cd0a,scratchCartesian1);a42_0x5e866e['normalize'](_0xa3b046,_0xa3b046);var _0x3889a0=_0x33fc5a[_0x1e3762(0x218)](_0x36cd0a,scratchCartesian2),_0x1ef558=a42_0x5e866e[_0x1e3762(0x1ea)](_0xa3b046,_0x3889a0,scratchCartesian1);a42_0x5e866e[_0x1e3762(0x1cb)](_0x1ef558,_0x37bb1d,_0x1ef558);var _0x418f8a=_0xac3085[_0x1e3762(0x20d)],_0x169a25=_0xac3085[_0x1e3762(0x1ef)],_0x8bb8=_0x33f27e[_0x1e3762(0x20d)],_0x274ce6=_0x33f27e[_0x1e3762(0x1ef)];a42_0x5e866e[_0x1e3762(0x1d7)](_0x36cd0a,_0x1ef558,scratchCartesian2),_0x33fc5a[_0x1e3762(0x1c4)](scratchCartesian2,scratchCartographic);var _0x197bd3=scratchCartographic[_0x1e3762(0x20d)],_0xd80a8c=scratchCartographic['longitude'];_0x418f8a=Math[_0x1e3762(0x1f5)](_0x418f8a,_0x197bd3),_0x169a25=Math['min'](_0x169a25,_0xd80a8c),_0x8bb8=Math[_0x1e3762(0x1c5)](_0x8bb8,_0x197bd3),_0x274ce6=Math[_0x1e3762(0x1c5)](_0x274ce6,_0xd80a8c),a42_0x5e866e['subtract'](_0x36cd0a,_0x1ef558,scratchCartesian2),_0x33fc5a[_0x1e3762(0x1c4)](scratchCartesian2,scratchCartographic),_0x197bd3=scratchCartographic['latitude'],_0xd80a8c=scratchCartographic[_0x1e3762(0x1ef)],_0x418f8a=Math[_0x1e3762(0x1f5)](_0x418f8a,_0x197bd3),_0x169a25=Math[_0x1e3762(0x1f5)](_0x169a25,_0xd80a8c),_0x8bb8=Math[_0x1e3762(0x1c5)](_0x8bb8,_0x197bd3),_0x274ce6=Math['max'](_0x274ce6,_0xd80a8c),_0xac3085['latitude']=_0x418f8a,_0xac3085[_0x1e3762(0x1ef)]=_0x169a25,_0x33f27e['latitude']=_0x8bb8,_0x33f27e[_0x1e3762(0x1ef)]=_0x274ce6;}var scratchCartesianOffset=new a42_0x5e866e(),scratchCartesianEnds=new a42_0x5e866e(),scratchCartographicMin=new a42_0x2d9078(),scratchCartographicMax=new a42_0x2d9078();function computeRectangle(_0x4ff44f,_0xe9e395,_0x1c4292,_0x598c3d,_0x29a9cd){var _0x430adf=a42_0x13c5;_0x4ff44f=scaleToSurface(_0x4ff44f,_0xe9e395);var _0x344964=a42_0x51ec96(_0x4ff44f,a42_0x5e866e[_0x430adf(0x1da)]),_0x5558c0=_0x344964[_0x430adf(0x20f)];if(_0x5558c0<0x2||_0x1c4292<=0x0)return new a42_0x5c8121();var _0x361481=_0x1c4292*0.5;scratchCartographicMin[_0x430adf(0x20d)]=Number[_0x430adf(0x1b7)],scratchCartographicMin['longitude']=Number[_0x430adf(0x1b7)],scratchCartographicMax[_0x430adf(0x20d)]=Number[_0x430adf(0x1c8)],scratchCartographicMax[_0x430adf(0x1ef)]=Number[_0x430adf(0x1c8)];var _0x1aa0af,_0x3b4ed1;if(_0x598c3d===a42_0x18f9a2[_0x430adf(0x1ff)]){var _0x4a100e=_0x344964[0x0];a42_0x5e866e[_0x430adf(0x219)](_0x4a100e,_0x344964[0x1],scratchCartesianOffset),a42_0x5e866e['normalize'](scratchCartesianOffset,scratchCartesianOffset),a42_0x5e866e[_0x430adf(0x1cb)](scratchCartesianOffset,_0x361481,scratchCartesianOffset),a42_0x5e866e[_0x430adf(0x1d7)](_0x4a100e,scratchCartesianOffset,scratchCartesianEnds),_0xe9e395['cartesianToCartographic'](scratchCartesianEnds,scratchCartographic),_0x1aa0af=scratchCartographic[_0x430adf(0x20d)],_0x3b4ed1=scratchCartographic['longitude'],scratchCartographicMin[_0x430adf(0x20d)]=Math[_0x430adf(0x1f5)](scratchCartographicMin[_0x430adf(0x20d)],_0x1aa0af),scratchCartographicMin[_0x430adf(0x1ef)]=Math['min'](scratchCartographicMin[_0x430adf(0x1ef)],_0x3b4ed1),scratchCartographicMax[_0x430adf(0x20d)]=Math['max'](scratchCartographicMax[_0x430adf(0x20d)],_0x1aa0af),scratchCartographicMax['longitude']=Math[_0x430adf(0x1c5)](scratchCartographicMax['longitude'],_0x3b4ed1);}for(var _0x312b19=0x0;_0x312b19<_0x5558c0-0x1;++_0x312b19){computeOffsetPoints(_0x344964[_0x312b19],_0x344964[_0x312b19+0x1],_0xe9e395,_0x361481,scratchCartographicMin,scratchCartographicMax);}var _0xebcdcd=_0x344964[_0x5558c0-0x1];a42_0x5e866e[_0x430adf(0x219)](_0xebcdcd,_0x344964[_0x5558c0-0x2],scratchCartesianOffset),a42_0x5e866e['normalize'](scratchCartesianOffset,scratchCartesianOffset),a42_0x5e866e[_0x430adf(0x1cb)](scratchCartesianOffset,_0x361481,scratchCartesianOffset),a42_0x5e866e[_0x430adf(0x1d7)](_0xebcdcd,scratchCartesianOffset,scratchCartesianEnds),computeOffsetPoints(_0xebcdcd,scratchCartesianEnds,_0xe9e395,_0x361481,scratchCartographicMin,scratchCartographicMax);_0x598c3d===a42_0x18f9a2[_0x430adf(0x1ff)]&&(_0xe9e395[_0x430adf(0x1c4)](scratchCartesianEnds,scratchCartographic),_0x1aa0af=scratchCartographic[_0x430adf(0x20d)],_0x3b4ed1=scratchCartographic['longitude'],scratchCartographicMin[_0x430adf(0x20d)]=Math[_0x430adf(0x1f5)](scratchCartographicMin['latitude'],_0x1aa0af),scratchCartographicMin[_0x430adf(0x1ef)]=Math[_0x430adf(0x1f5)](scratchCartographicMin[_0x430adf(0x1ef)],_0x3b4ed1),scratchCartographicMax[_0x430adf(0x20d)]=Math['max'](scratchCartographicMax[_0x430adf(0x20d)],_0x1aa0af),scratchCartographicMax['longitude']=Math['max'](scratchCartographicMax[_0x430adf(0x1ef)],_0x3b4ed1));var _0x2429cd=a42_0x1a69c1(_0x29a9cd)?_0x29a9cd:new a42_0x5c8121();return _0x2429cd[_0x430adf(0x1bc)]=scratchCartographicMax[_0x430adf(0x20d)],_0x2429cd['south']=scratchCartographicMin['latitude'],_0x2429cd['east']=scratchCartographicMax[_0x430adf(0x1ef)],_0x2429cd[_0x430adf(0x1e6)]=scratchCartographicMin['longitude'],_0x2429cd;}function CorridorGeometry(_0x5af8d1){var _0x329f56=a42_0x13c5;_0x5af8d1=a42_0x5dae81(_0x5af8d1,a42_0x5dae81['EMPTY_OBJECT']);var _0x154032=_0x5af8d1[_0x329f56(0x1d9)],_0x4b1667=_0x5af8d1[_0x329f56(0x1c9)];a42_0x40b516[_0x329f56(0x1c6)](_0x329f56(0x206),_0x154032),a42_0x40b516['defined']('options.width',_0x4b1667);var _0x3f58ef=a42_0x5dae81(_0x5af8d1[_0x329f56(0x1f1)],0x0),_0x3d7046=a42_0x5dae81(_0x5af8d1[_0x329f56(0x1be)],_0x3f58ef);this[_0x329f56(0x1d8)]=_0x154032,this['_ellipsoid']=a42_0x1e63cb[_0x329f56(0x208)](a42_0x5dae81(_0x5af8d1[_0x329f56(0x1cc)],a42_0x1e63cb[_0x329f56(0x1f9)])),this['_vertexFormat']=a42_0x4c265e[_0x329f56(0x208)](a42_0x5dae81(_0x5af8d1[_0x329f56(0x1c0)],a42_0x4c265e[_0x329f56(0x1dc)])),this[_0x329f56(0x1e8)]=_0x4b1667,this[_0x329f56(0x200)]=Math[_0x329f56(0x1c5)](_0x3f58ef,_0x3d7046),this[_0x329f56(0x1f2)]=Math[_0x329f56(0x1f5)](_0x3f58ef,_0x3d7046),this['_cornerType']=a42_0x5dae81(_0x5af8d1[_0x329f56(0x1f3)],a42_0x18f9a2['ROUNDED']),this['_granularity']=a42_0x5dae81(_0x5af8d1[_0x329f56(0x209)],a42_0x266fb4[_0x329f56(0x21b)]),this[_0x329f56(0x20c)]=a42_0x5dae81(_0x5af8d1[_0x329f56(0x1b4)],![]),this[_0x329f56(0x1eb)]=_0x329f56(0x1f4),this[_0x329f56(0x1ee)]=_0x5af8d1[_0x329f56(0x1b6)],this[_0x329f56(0x1d0)]=undefined,this[_0x329f56(0x1b8)]=0x1+_0x154032['length']*a42_0x5e866e[_0x329f56(0x1b8)]+a42_0x1e63cb['packedLength']+a42_0x4c265e[_0x329f56(0x1b8)]+0x7;}CorridorGeometry[a42_0x23d1e1(0x214)]=function(_0x2a8df6,_0x5231b3,_0x1046f2){var _0x34cf38=a42_0x23d1e1;a42_0x40b516[_0x34cf38(0x1c6)](_0x34cf38(0x212),_0x2a8df6),a42_0x40b516[_0x34cf38(0x1c6)](_0x34cf38(0x217),_0x5231b3),_0x1046f2=a42_0x5dae81(_0x1046f2,0x0);var _0x3f6993=_0x2a8df6['_positions'],_0x428895=_0x3f6993['length'];_0x5231b3[_0x1046f2++]=_0x428895;for(var _0x3d55f2=0x0;_0x3d55f2<_0x428895;++_0x3d55f2,_0x1046f2+=a42_0x5e866e[_0x34cf38(0x1b8)]){a42_0x5e866e[_0x34cf38(0x214)](_0x3f6993[_0x3d55f2],_0x5231b3,_0x1046f2);}return a42_0x1e63cb['pack'](_0x2a8df6[_0x34cf38(0x20a)],_0x5231b3,_0x1046f2),_0x1046f2+=a42_0x1e63cb['packedLength'],a42_0x4c265e[_0x34cf38(0x214)](_0x2a8df6[_0x34cf38(0x1b9)],_0x5231b3,_0x1046f2),_0x1046f2+=a42_0x4c265e[_0x34cf38(0x1b8)],_0x5231b3[_0x1046f2++]=_0x2a8df6['_width'],_0x5231b3[_0x1046f2++]=_0x2a8df6['_height'],_0x5231b3[_0x1046f2++]=_0x2a8df6[_0x34cf38(0x1f2)],_0x5231b3[_0x1046f2++]=_0x2a8df6[_0x34cf38(0x1e7)],_0x5231b3[_0x1046f2++]=_0x2a8df6[_0x34cf38(0x1ec)],_0x5231b3[_0x1046f2++]=_0x2a8df6[_0x34cf38(0x20c)]?0x1:0x0,_0x5231b3[_0x1046f2]=a42_0x5dae81(_0x2a8df6[_0x34cf38(0x1ee)],-0x1),_0x5231b3;};var scratchEllipsoid=a42_0x1e63cb[a42_0x23d1e1(0x208)](a42_0x1e63cb[a42_0x23d1e1(0x1e9)]),scratchVertexFormat=new a42_0x4c265e(),scratchOptions={'positions':undefined,'ellipsoid':scratchEllipsoid,'vertexFormat':scratchVertexFormat,'width':undefined,'height':undefined,'extrudedHeight':undefined,'cornerType':undefined,'granularity':undefined,'shadowVolume':undefined,'offsetAttribute':undefined};CorridorGeometry[a42_0x23d1e1(0x1ce)]=function(_0x2b9160,_0x4f6510,_0x38a9ed){var _0x411663=a42_0x23d1e1;a42_0x40b516['defined'](_0x411663(0x217),_0x2b9160),_0x4f6510=a42_0x5dae81(_0x4f6510,0x0);var _0x4a76f2=_0x2b9160[_0x4f6510++],_0x2f49da=new Array(_0x4a76f2);for(var _0xc4ff79=0x0;_0xc4ff79<_0x4a76f2;++_0xc4ff79,_0x4f6510+=a42_0x5e866e['packedLength']){_0x2f49da[_0xc4ff79]=a42_0x5e866e[_0x411663(0x1ce)](_0x2b9160,_0x4f6510);}var _0xec2b04=a42_0x1e63cb['unpack'](_0x2b9160,_0x4f6510,scratchEllipsoid);_0x4f6510+=a42_0x1e63cb[_0x411663(0x1b8)];var _0x5449b1=a42_0x4c265e[_0x411663(0x1ce)](_0x2b9160,_0x4f6510,scratchVertexFormat);_0x4f6510+=a42_0x4c265e[_0x411663(0x1b8)];var _0x6e87fe=_0x2b9160[_0x4f6510++],_0xc16cb0=_0x2b9160[_0x4f6510++],_0x37f6af=_0x2b9160[_0x4f6510++],_0x3c0636=_0x2b9160[_0x4f6510++],_0x291638=_0x2b9160[_0x4f6510++],_0xfb41de=_0x2b9160[_0x4f6510++]===0x1,_0x378f1a=_0x2b9160[_0x4f6510];if(!a42_0x1a69c1(_0x38a9ed))return scratchOptions[_0x411663(0x1d9)]=_0x2f49da,scratchOptions['width']=_0x6e87fe,scratchOptions[_0x411663(0x1f1)]=_0xc16cb0,scratchOptions[_0x411663(0x1be)]=_0x37f6af,scratchOptions[_0x411663(0x1f3)]=_0x3c0636,scratchOptions[_0x411663(0x209)]=_0x291638,scratchOptions[_0x411663(0x1b4)]=_0xfb41de,scratchOptions[_0x411663(0x1b6)]=_0x378f1a===-0x1?undefined:_0x378f1a,new CorridorGeometry(scratchOptions);return _0x38a9ed[_0x411663(0x1d8)]=_0x2f49da,_0x38a9ed[_0x411663(0x20a)]=a42_0x1e63cb['clone'](_0xec2b04,_0x38a9ed['_ellipsoid']),_0x38a9ed[_0x411663(0x1b9)]=a42_0x4c265e[_0x411663(0x208)](_0x5449b1,_0x38a9ed[_0x411663(0x1b9)]),_0x38a9ed[_0x411663(0x1e8)]=_0x6e87fe,_0x38a9ed[_0x411663(0x200)]=_0xc16cb0,_0x38a9ed[_0x411663(0x1f2)]=_0x37f6af,_0x38a9ed['_cornerType']=_0x3c0636,_0x38a9ed[_0x411663(0x1ec)]=_0x291638,_0x38a9ed[_0x411663(0x20c)]=_0xfb41de,_0x38a9ed[_0x411663(0x1ee)]=_0x378f1a===-0x1?undefined:_0x378f1a,_0x38a9ed;},CorridorGeometry[a42_0x23d1e1(0x205)]=function(_0x351835,_0x429777){var _0x3e45ed=a42_0x23d1e1;_0x351835=a42_0x5dae81(_0x351835,a42_0x5dae81[_0x3e45ed(0x20b)]);var _0x2b6003=_0x351835[_0x3e45ed(0x1d9)],_0x323ed9=_0x351835[_0x3e45ed(0x1c9)];a42_0x40b516['defined']('options.positions',_0x2b6003),a42_0x40b516[_0x3e45ed(0x1c6)](_0x3e45ed(0x1c3),_0x323ed9);var _0x451ca7=a42_0x5dae81(_0x351835[_0x3e45ed(0x1cc)],a42_0x1e63cb[_0x3e45ed(0x1f9)]),_0x3cae4d=a42_0x5dae81(_0x351835[_0x3e45ed(0x1f3)],a42_0x18f9a2['ROUNDED']);return computeRectangle(_0x2b6003,_0x451ca7,_0x323ed9,_0x3cae4d,_0x429777);},CorridorGeometry[a42_0x23d1e1(0x1db)]=function(_0xc01599){var _0x518209=a42_0x23d1e1,_0x270df6=_0xc01599['_positions'],_0x38e783=_0xc01599[_0x518209(0x1e8)],_0x2a071e=_0xc01599[_0x518209(0x20a)];_0x270df6=scaleToSurface(_0x270df6,_0x2a071e);var _0x501177=a42_0x51ec96(_0x270df6,a42_0x5e866e[_0x518209(0x1da)]);if(_0x501177[_0x518209(0x20f)]<0x2||_0x38e783<=0x0)return;var _0x2bfb21=_0xc01599[_0x518209(0x200)],_0x3a849e=_0xc01599[_0x518209(0x1f2)],_0xc5979=!a42_0x266fb4[_0x518209(0x1da)](_0x2bfb21,_0x3a849e,0x0,a42_0x266fb4['EPSILON2']),_0xb21106=_0xc01599['_vertexFormat'],_0x5be758={'ellipsoid':_0x2a071e,'positions':_0x501177,'width':_0x38e783,'cornerType':_0xc01599[_0x518209(0x1e7)],'granularity':_0xc01599[_0x518209(0x1ec)],'saveAttributes':!![]},_0x5b60af;if(_0xc5979)_0x5be758[_0x518209(0x1f1)]=_0x2bfb21,_0x5be758['extrudedHeight']=_0x3a849e,_0x5be758[_0x518209(0x1b4)]=_0xc01599['_shadowVolume'],_0x5be758[_0x518209(0x1b6)]=_0xc01599['_offsetAttribute'],_0x5b60af=computePositionsExtruded(_0x5be758,_0xb21106);else{var _0x4e596c=a42_0x51c64a['computePositions'](_0x5be758);_0x5b60af=combine(_0x4e596c,_0xb21106,_0x2a071e),_0x5b60af['attributes'][_0x518209(0x1e0)][_0x518209(0x211)]=a42_0x45cb26[_0x518209(0x1d3)](_0x5b60af[_0x518209(0x216)][_0x518209(0x1e0)][_0x518209(0x211)],_0x2bfb21,_0x2a071e);if(a42_0x1a69c1(_0xc01599[_0x518209(0x1ee)])){var _0x1f0cb8=_0xc01599[_0x518209(0x1ee)]===a42_0x3b5d4e[_0x518209(0x1ed)]?0x0:0x1,_0x319bd9=_0x5b60af[_0x518209(0x216)][_0x518209(0x1e0)][_0x518209(0x211)][_0x518209(0x20f)],_0x3f7fa2=new Uint8Array(_0x319bd9/0x3);a42_0x277333(_0x3f7fa2,_0x1f0cb8),_0x5b60af[_0x518209(0x216)]['applyOffset']=new a42_0x480ac2({'componentDatatype':a42_0x411ee2[_0x518209(0x1ca)],'componentsPerAttribute':0x1,'values':_0x3f7fa2});}}var _0x38d942=_0x5b60af['attributes'],_0x973aa5=a42_0x2e583b[_0x518209(0x1de)](_0x38d942[_0x518209(0x1e0)]['values'],undefined,0x3);return!_0xb21106[_0x518209(0x1e0)]&&(_0x5b60af[_0x518209(0x216)][_0x518209(0x1e0)][_0x518209(0x211)]=undefined),new a42_0xd2560f({'attributes':_0x38d942,'indices':_0x5b60af[_0x518209(0x213)],'primitiveType':a42_0x3a685f[_0x518209(0x1bd)],'boundingSphere':_0x973aa5,'offsetAttribute':_0xc01599[_0x518209(0x1ee)]});},CorridorGeometry[a42_0x23d1e1(0x215)]=function(_0xc0d1d6,_0x33b1fa,_0x53f95a){var _0x347c8e=a42_0x23d1e1,_0x3f475f=_0xc0d1d6[_0x347c8e(0x1ec)],_0xb1a400=_0xc0d1d6[_0x347c8e(0x20a)],_0x551f45=_0x33b1fa(_0x3f475f,_0xb1a400),_0x1fcb56=_0x53f95a(_0x3f475f,_0xb1a400);return new CorridorGeometry({'positions':_0xc0d1d6[_0x347c8e(0x1d8)],'width':_0xc0d1d6[_0x347c8e(0x1e8)],'cornerType':_0xc0d1d6[_0x347c8e(0x1e7)],'ellipsoid':_0xb1a400,'granularity':_0x3f475f,'extrudedHeight':_0x551f45,'height':_0x1fcb56,'vertexFormat':a42_0x4c265e['POSITION_ONLY'],'shadowVolume':!![]});},Object['defineProperties'](CorridorGeometry['prototype'],{'rectangle':{'get':function(){var _0x3bf179=a42_0x23d1e1;return!a42_0x1a69c1(this[_0x3bf179(0x1d0)])&&(this[_0x3bf179(0x1d0)]=computeRectangle(this[_0x3bf179(0x1d8)],this[_0x3bf179(0x20a)],this[_0x3bf179(0x1e8)],this[_0x3bf179(0x1e7)])),this[_0x3bf179(0x1d0)];}},'textureCoordinateRotationPoints':{'get':function(){return[0x0,0x0,0x0,0x1,0x1,0x0];}}});export default CorridorGeometry;