var a40_0x37d4ec=a40_0x3710;(function(_0x442f2d,_0x341e94){var _0x4abcf9=a40_0x3710,_0x5deed5=_0x442f2d();while(!![]){try{var _0x54763d=parseInt(_0x4abcf9(0x16e))/0x1+-parseInt(_0x4abcf9(0x154))/0x2*(-parseInt(_0x4abcf9(0x171))/0x3)+parseInt(_0x4abcf9(0x169))/0x4*(-parseInt(_0x4abcf9(0x14a))/0x5)+parseInt(_0x4abcf9(0x159))/0x6+parseInt(_0x4abcf9(0x158))/0x7*(-parseInt(_0x4abcf9(0x15c))/0x8)+-parseInt(_0x4abcf9(0x156))/0x9+parseInt(_0x4abcf9(0x16c))/0xa;if(_0x54763d===_0x341e94)break;else _0x5deed5['push'](_0x5deed5['shift']());}catch(_0x4eca4a){_0x5deed5['push'](_0x5deed5['shift']());}}}(a40_0x5403,0x3d590));import a40_0x424a32 from'./arrayRemoveDuplicates.js';import a40_0x336756 from'./BoundingSphere.js';import a40_0x51c4bd from'./Cartesian3.js';import a40_0x27487d from'./Check.js';import a40_0x23ec65 from'./ComponentDatatype.js';import a40_0x3037cc from'./CoplanarPolygonGeometryLibrary.js';import a40_0x25c2c3 from'./defaultValue.js';import a40_0x560dca from'./defined.js';import a40_0x1839d0 from'./Geometry.js';import a40_0x852579 from'./GeometryAttribute.js';import a40_0xfdeec3 from'./GeometryAttributes.js';import a40_0x30dc5b from'./GeometryInstance.js';import a40_0x5744d9 from'./GeometryPipeline.js';import a40_0x3a9fd4 from'./IndexDatatype.js';import a40_0x2a210d from'./PolygonGeometryLibrary.js';import a40_0x2cafc8 from'./PrimitiveType.js';function createGeometryFromPositions(_0x5b599f){var _0x2d29fb=a40_0x3710,_0x599a90=_0x5b599f['length'],_0x239235=new Float64Array(_0x599a90*0x3),_0x41a998=a40_0x3a9fd4[_0x2d29fb(0x16d)](_0x599a90,_0x599a90*0x2),_0x48e060=0x0,_0x4bc464=0x0;for(var _0x2a454f=0x0;_0x2a454f<_0x599a90;_0x2a454f++){var _0x45c671=_0x5b599f[_0x2a454f];_0x239235[_0x48e060++]=_0x45c671['x'],_0x239235[_0x48e060++]=_0x45c671['y'],_0x239235[_0x48e060++]=_0x45c671['z'],_0x41a998[_0x4bc464++]=_0x2a454f,_0x41a998[_0x4bc464++]=(_0x2a454f+0x1)%_0x599a90;}var _0x5e5415=new a40_0xfdeec3({'position':new a40_0x852579({'componentDatatype':a40_0x23ec65['DOUBLE'],'componentsPerAttribute':0x3,'values':_0x239235})});return new a40_0x1839d0({'attributes':_0x5e5415,'indices':_0x41a998,'primitiveType':a40_0x2cafc8['LINES']});}function CoplanarPolygonOutlineGeometry(_0x3b9d61){var _0x402e1f=a40_0x3710;_0x3b9d61=a40_0x25c2c3(_0x3b9d61,a40_0x25c2c3[_0x402e1f(0x14d)]);var _0xbbbb82=_0x3b9d61[_0x402e1f(0x15f)];a40_0x27487d['defined'](_0x402e1f(0x149),_0xbbbb82),this[_0x402e1f(0x165)]=_0xbbbb82,this[_0x402e1f(0x170)]=_0x402e1f(0x15a),this[_0x402e1f(0x15b)]=a40_0x2a210d[_0x402e1f(0x163)](_0xbbbb82)+0x1;}CoplanarPolygonOutlineGeometry[a40_0x37d4ec(0x16b)]=function(_0x2d459e){var _0x4e0abc=a40_0x37d4ec;_0x2d459e=a40_0x25c2c3(_0x2d459e,a40_0x25c2c3[_0x4e0abc(0x14d)]),a40_0x27487d[_0x4e0abc(0x155)](_0x4e0abc(0x16a),_0x2d459e[_0x4e0abc(0x168)]);var _0x2a7e6d={'polygonHierarchy':{'positions':_0x2d459e['positions']}};return new CoplanarPolygonOutlineGeometry(_0x2a7e6d);},CoplanarPolygonOutlineGeometry[a40_0x37d4ec(0x153)]=function(_0x4f2f44,_0xe761e7,_0x16ac7a){var _0x2b1644=a40_0x37d4ec;return a40_0x27487d[_0x2b1644(0x14b)][_0x2b1644(0x160)](_0x2b1644(0x161),_0x4f2f44),a40_0x27487d[_0x2b1644(0x155)](_0x2b1644(0x150),_0xe761e7),_0x16ac7a=a40_0x25c2c3(_0x16ac7a,0x0),_0x16ac7a=a40_0x2a210d[_0x2b1644(0x152)](_0x4f2f44[_0x2b1644(0x165)],_0xe761e7,_0x16ac7a),_0xe761e7[_0x16ac7a]=_0x4f2f44['packedLength'],_0xe761e7;};var scratchOptions={'polygonHierarchy':{}};CoplanarPolygonOutlineGeometry[a40_0x37d4ec(0x166)]=function(_0x4e2c68,_0xb4e58a,_0x581a47){var _0x24facc=a40_0x37d4ec;a40_0x27487d[_0x24facc(0x155)](_0x24facc(0x150),_0x4e2c68),_0xb4e58a=a40_0x25c2c3(_0xb4e58a,0x0);var _0x35ee85=a40_0x2a210d[_0x24facc(0x157)](_0x4e2c68,_0xb4e58a);_0xb4e58a=_0x35ee85['startingIndex'],delete _0x35ee85[_0x24facc(0x15e)];var _0x26879e=_0x4e2c68[_0xb4e58a];return!a40_0x560dca(_0x581a47)&&(_0x581a47=new CoplanarPolygonOutlineGeometry(scratchOptions)),_0x581a47['_polygonHierarchy']=_0x35ee85,_0x581a47['packedLength']=_0x26879e,_0x581a47;},CoplanarPolygonOutlineGeometry[a40_0x37d4ec(0x15d)]=function(_0x51537e){var _0x1c59bf=a40_0x37d4ec,_0x5e073d=_0x51537e[_0x1c59bf(0x165)],_0x18b2df=_0x5e073d[_0x1c59bf(0x168)];_0x18b2df=a40_0x424a32(_0x18b2df,a40_0x51c4bd[_0x1c59bf(0x162)],!![]);if(_0x18b2df['length']<0x3)return;var _0x548fb3=a40_0x3037cc[_0x1c59bf(0x16f)](_0x18b2df);if(!_0x548fb3)return undefined;var _0x2aac93=a40_0x2a210d[_0x1c59bf(0x151)](_0x5e073d,![]);if(_0x2aac93['length']===0x0)return undefined;var _0x574e4c=[];for(var _0x251416=0x0;_0x251416<_0x2aac93[_0x1c59bf(0x14e)];_0x251416++){var _0x45a7a0=new a40_0x30dc5b({'geometry':createGeometryFromPositions(_0x2aac93[_0x251416])});_0x574e4c[_0x1c59bf(0x167)](_0x45a7a0);}var _0x282ec4=a40_0x5744d9['combineInstances'](_0x574e4c)[0x0],_0x271c88=a40_0x336756[_0x1c59bf(0x14c)](_0x5e073d['positions']);return new a40_0x1839d0({'attributes':_0x282ec4['attributes'],'indices':_0x282ec4[_0x1c59bf(0x164)],'primitiveType':_0x282ec4[_0x1c59bf(0x14f)],'boundingSphere':_0x271c88});};export default CoplanarPolygonOutlineGeometry;function a40_0x3710(_0x27b53b,_0x7b4d19){var _0x540324=a40_0x5403();return a40_0x3710=function(_0x3710fd,_0x356060){_0x3710fd=_0x3710fd-0x149;var _0x19abf0=_0x540324[_0x3710fd];return _0x19abf0;},a40_0x3710(_0x27b53b,_0x7b4d19);}function a40_0x5403(){var _0x2fd5a9=['push','positions','4624ftgnyQ','options.positions','fromPositions','2356430fzWCdM','createTypedArray','411482mSrkVl','validOutline','_workerName','3DfXXXG','options.polygonHierarchy','655OONvzl','typeOf','fromPoints','EMPTY_OBJECT','length','primitiveType','array','polygonOutlinesFromHierarchy','packPolygonHierarchy','pack','247508wQtqDd','defined','4326012lDbTxy','unpackPolygonHierarchy','175UCVGOF','2951730DhzLcE','createCoplanarPolygonOutlineGeometry','packedLength','121424ifCler','createGeometry','startingIndex','polygonHierarchy','object','value','equalsEpsilon','computeHierarchyPackedLength','indices','_polygonHierarchy','unpack'];a40_0x5403=function(){return _0x2fd5a9;};return a40_0x5403();}