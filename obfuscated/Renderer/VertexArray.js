var a414_0x445292=a414_0x2c0b;(function(_0x63994,_0x45a55c){var _0x3b7164=a414_0x2c0b,_0x45b9d3=_0x63994();while(!![]){try{var _0x19d750=parseInt(_0x3b7164(0x188))/0x1+parseInt(_0x3b7164(0x179))/0x2+parseInt(_0x3b7164(0x1c8))/0x3*(parseInt(_0x3b7164(0x1c3))/0x4)+-parseInt(_0x3b7164(0x1ac))/0x5*(-parseInt(_0x3b7164(0x1d2))/0x6)+-parseInt(_0x3b7164(0x1cd))/0x7+parseInt(_0x3b7164(0x1a0))/0x8+-parseInt(_0x3b7164(0x1b6))/0x9;if(_0x19d750===_0x45a55c)break;else _0x45b9d3['push'](_0x45b9d3['shift']());}catch(_0xdca91e){_0x45b9d3['push'](_0x45b9d3['shift']());}}}(a414_0x543f,0x4d61e));import a414_0xc3dc13 from'../Core/Check.js';import a414_0x280f1e from'../Core/ComponentDatatype.js';import a414_0x32d0c5 from'../Core/defaultValue.js';function a414_0x543f(){var _0x5af265=['index','slice','elementIndexUint','Index\x20','362385cFtxbi','bufferUsage','vertexBuffer','\x20is\x20used\x20by\x20more\x20than\x20one\x20attribute.','fromGeometry','_getBuffer','instancedArrays','getAttribute','glDeleteVertexArray','sizeInBytes','11892420VpaZrS','validate','defineProperties','\x20than\x20attribute\x20','_gl','vertexAttrib4fv','componentsPerAttribute','vertexArrayAttributes','length','interleave','bindBuffer','enabled','attribute\x20cannot\x20have\x20both\x20a\x20vertexBuffer\x20and\x20a\x20value.\x20\x20It\x20must\x20have\x20either\x20a\x20vertexBuffer\x20property\x20defining\x20per-vertex\x20data\x20or\x20a\x20value\x20property\x20defining\x20data\x20for\x20all\x20vertices.','436aAZPlq','DYNAMIC_DRAW','indices','createTypedArray','context','10119BLJsKL','strideInComponentType','_vertexAttribDivisors','_attributes','attribute.value.length\x20must\x20be\x20in\x20the\x20range\x20[1,\x204].','4115356oOqdVS','offsetsInBytes','buffer','componentDatatype','disableVertexAttribArray','42qvnmje','vertexArrayObject','hasOwnProperty','glCreateVertexArray','vertexAttrib','defined','options.attributes','values','computeNumberOfVertices','721098nmuuJg','vertexAttrib1fv','_bind','prototype','_indexBuffer','options.context','_context','normalize','DOUBLE','geometry','Each\x20attribute\x20list\x20must\x20have\x20the\x20same\x20number\x20of\x20vertices.\x20\x20','EMPTY_OBJECT','vertexAttribPointer','getSizeInBytes','vertexSizeInBytes','616805acUfpY','toString','glBindVertexArray','instanceDivisor','_hasInstancedAttributes','SIXTY_FOUR_KILOBYTES','ELEMENT_ARRAY_BUFFER','ARRAY_BUFFER','_numberOfVertices','strideInBytes','UNSIGNED_INT','_previousDrawInstanced','_hasConstantAttributes','attribute\x20must\x20have\x20an\x20instanceDivisor\x20greater\x20than\x20or\x20equal\x20to\x20zero','value','isDestroyed','push','glVertexAttribDivisor','destroy','FLOAT','_vao','attributes','createIndexBuffer','_unBind','2991168qTwuEp','pointer','sort','attribute\x20zero\x20cannot\x20have\x20an\x20instanceDivisor\x20greater\x20than\x200','attribute\x20must\x20have\x20a\x20strideInBytes\x20less\x20than\x20or\x20equal\x20to\x20255\x20or\x20not\x20specify\x20it.','createVertexBuffer','vertexArrayDestroyable','offsetInBytes'];a414_0x543f=function(){return _0x5af265;};return a414_0x543f();}import a414_0x333859 from'../Core/defined.js';import a414_0x2ccf2a from'../Core/destroyObject.js';import a414_0x8b1f06 from'../Core/DeveloperError.js';import a414_0x34565e from'../Core/Geometry.js';import a414_0x4075d9 from'../Core/IndexDatatype.js';import a414_0x2b1fe2 from'../Core/Math.js';import a414_0x5e67eb from'../Core/RuntimeError.js';import a414_0x409fe9 from'./Buffer.js';import a414_0x413231 from'./BufferUsage.js';import a414_0x41cbf0 from'./ContextLimits.js';function a414_0x2c0b(_0x46c471,_0x4bc5c6){var _0x543f2a=a414_0x543f();return a414_0x2c0b=function(_0x2c0b47,_0x531a23){_0x2c0b47=_0x2c0b47-0x172;var _0x58d446=_0x543f2a[_0x2c0b47];return _0x58d446;},a414_0x2c0b(_0x46c471,_0x4bc5c6);}function addAttribute(_0xe1a281,_0x58f20f,_0x4f60f,_0x619dc6){var _0x13183c=a414_0x2c0b,_0x533f02=a414_0x333859(_0x58f20f[_0x13183c(0x1ae)]),_0x2dfbbb=a414_0x333859(_0x58f20f['value']),_0x51f3b8=_0x58f20f[_0x13183c(0x196)]?_0x58f20f[_0x13183c(0x196)]['length']:_0x58f20f[_0x13183c(0x1bc)];if(!_0x533f02&&!_0x2dfbbb)throw new a414_0x8b1f06('attribute\x20must\x20have\x20a\x20vertexBuffer\x20or\x20a\x20value.');if(_0x533f02&&_0x2dfbbb)throw new a414_0x8b1f06(_0x13183c(0x1c2));if(_0x51f3b8!==0x1&&_0x51f3b8!==0x2&&_0x51f3b8!==0x3&&_0x51f3b8!==0x4){if(_0x2dfbbb)throw new a414_0x8b1f06(_0x13183c(0x1cc));throw new a414_0x8b1f06('attribute.componentsPerAttribute\x20must\x20be\x20in\x20the\x20range\x20[1,\x204].');}if(a414_0x333859(_0x58f20f['componentDatatype'])&&!a414_0x280f1e[_0x13183c(0x1b7)](_0x58f20f[_0x13183c(0x1d0)]))throw new a414_0x8b1f06('attribute\x20must\x20have\x20a\x20valid\x20componentDatatype\x20or\x20not\x20specify\x20it.');if(a414_0x333859(_0x58f20f[_0x13183c(0x191)])&&_0x58f20f['strideInBytes']>0xff)throw new a414_0x8b1f06(_0x13183c(0x1a4));if(a414_0x333859(_0x58f20f['instanceDivisor'])&&_0x58f20f['instanceDivisor']>0x0&&!_0x619dc6['instancedArrays'])throw new a414_0x8b1f06('instanced\x20arrays\x20is\x20not\x20supported');if(a414_0x333859(_0x58f20f[_0x13183c(0x18b)])&&_0x58f20f[_0x13183c(0x18b)]<0x0)throw new a414_0x8b1f06(_0x13183c(0x195));if(a414_0x333859(_0x58f20f[_0x13183c(0x18b)])&&_0x2dfbbb)throw new a414_0x8b1f06('attribute\x20cannot\x20have\x20have\x20an\x20instanceDivisor\x20if\x20it\x20is\x20not\x20backed\x20by\x20a\x20buffer');if(a414_0x333859(_0x58f20f[_0x13183c(0x18b)])&&_0x58f20f['instanceDivisor']>0x0&&_0x58f20f[_0x13183c(0x1a8)]===0x0)throw new a414_0x8b1f06(_0x13183c(0x1a3));var _0xc21c38={'index':a414_0x32d0c5(_0x58f20f[_0x13183c(0x1a8)],_0x4f60f),'enabled':a414_0x32d0c5(_0x58f20f[_0x13183c(0x1c1)],!![]),'vertexBuffer':_0x58f20f[_0x13183c(0x1ae)],'value':_0x2dfbbb?_0x58f20f[_0x13183c(0x196)][_0x13183c(0x1a9)](0x0):undefined,'componentsPerAttribute':_0x51f3b8,'componentDatatype':a414_0x32d0c5(_0x58f20f['componentDatatype'],a414_0x280f1e['FLOAT']),'normalize':a414_0x32d0c5(_0x58f20f[_0x13183c(0x180)],![]),'offsetInBytes':a414_0x32d0c5(_0x58f20f[_0x13183c(0x1a7)],0x0),'strideInBytes':a414_0x32d0c5(_0x58f20f['strideInBytes'],0x0),'instanceDivisor':a414_0x32d0c5(_0x58f20f[_0x13183c(0x18b)],0x0)};if(_0x533f02)_0xc21c38[_0x13183c(0x174)]=function(_0x5386a9){var _0x8f1c93=_0x13183c,_0x5ed76e=this[_0x8f1c93(0x1a8)];_0x5386a9[_0x8f1c93(0x1c0)](_0x5386a9[_0x8f1c93(0x18f)],this[_0x8f1c93(0x1ae)][_0x8f1c93(0x1b1)]()),_0x5386a9[_0x8f1c93(0x185)](_0x5ed76e,this[_0x8f1c93(0x1bc)],this[_0x8f1c93(0x1d0)],this[_0x8f1c93(0x180)],this[_0x8f1c93(0x191)],this[_0x8f1c93(0x1a7)]),_0x5386a9['enableVertexAttribArray'](_0x5ed76e),this[_0x8f1c93(0x18b)]>0x0&&(_0x619dc6[_0x8f1c93(0x199)](_0x5ed76e,this['instanceDivisor']),_0x619dc6['_vertexAttribDivisors'][_0x5ed76e]=this['instanceDivisor'],_0x619dc6[_0x8f1c93(0x193)]=!![]);},_0xc21c38[_0x13183c(0x1d1)]=function(_0x52f660){var _0x4fa8d9=_0x13183c;_0x52f660['disableVertexAttribArray'](this[_0x4fa8d9(0x1a8)]),this[_0x4fa8d9(0x18b)]>0x0&&_0x619dc6[_0x4fa8d9(0x199)](_0x4f60f,0x0);};else{switch(_0xc21c38[_0x13183c(0x1bc)]){case 0x1:_0xc21c38['vertexAttrib']=function(_0x4b60b7){var _0x5f34f1=_0x13183c;_0x4b60b7[_0x5f34f1(0x17a)](this[_0x5f34f1(0x1a8)],this['value']);};break;case 0x2:_0xc21c38['vertexAttrib']=function(_0x4d0a24){var _0x2830a0=_0x13183c;_0x4d0a24['vertexAttrib2fv'](this['index'],this[_0x2830a0(0x196)]);};break;case 0x3:_0xc21c38[_0x13183c(0x174)]=function(_0x37b199){var _0x26656e=_0x13183c;_0x37b199['vertexAttrib3fv'](this[_0x26656e(0x1a8)],this['value']);};break;case 0x4:_0xc21c38['vertexAttrib']=function(_0x44bf0e){var _0x25acf6=_0x13183c;_0x44bf0e[_0x25acf6(0x1bb)](this[_0x25acf6(0x1a8)],this[_0x25acf6(0x196)]);};break;}_0xc21c38[_0x13183c(0x1d1)]=function(_0x241ed9){};}_0xe1a281[_0x13183c(0x198)](_0xc21c38);}function bind(_0x3f8ea5,_0x1a9eb4,_0x51fc5d){var _0x527a06=a414_0x2c0b;for(var _0x1b1373=0x0;_0x1b1373<_0x1a9eb4[_0x527a06(0x1be)];++_0x1b1373){var _0x286e75=_0x1a9eb4[_0x1b1373];_0x286e75[_0x527a06(0x1c1)]&&_0x286e75[_0x527a06(0x174)](_0x3f8ea5);}a414_0x333859(_0x51fc5d)&&_0x3f8ea5[_0x527a06(0x1c0)](_0x3f8ea5[_0x527a06(0x18e)],_0x51fc5d[_0x527a06(0x1b1)]());}function VertexArray(_0x1e3eec){var _0x3c92d7=a414_0x2c0b;_0x1e3eec=a414_0x32d0c5(_0x1e3eec,a414_0x32d0c5['EMPTY_OBJECT']),a414_0xc3dc13[_0x3c92d7(0x175)](_0x3c92d7(0x17e),_0x1e3eec[_0x3c92d7(0x1c7)]),a414_0xc3dc13[_0x3c92d7(0x175)](_0x3c92d7(0x176),_0x1e3eec[_0x3c92d7(0x19d)]);var _0x577ef5=_0x1e3eec['context'],_0x2e3ea0=_0x577ef5[_0x3c92d7(0x1ba)],_0x3cee94=_0x1e3eec['attributes'],_0x23efa9=_0x1e3eec['indexBuffer'],_0x35cf82,_0x2bdc65=[],_0x27f990=0x1,_0x9597a9=![],_0x32c11d=![],_0x73bb54=_0x3cee94[_0x3c92d7(0x1be)];for(_0x35cf82=0x0;_0x35cf82<_0x73bb54;++_0x35cf82){addAttribute(_0x2bdc65,_0x3cee94[_0x35cf82],_0x35cf82,_0x577ef5);}_0x73bb54=_0x2bdc65[_0x3c92d7(0x1be)];for(_0x35cf82=0x0;_0x35cf82<_0x73bb54;++_0x35cf82){var _0x1bb859=_0x2bdc65[_0x35cf82];if(a414_0x333859(_0x1bb859[_0x3c92d7(0x1ae)])&&_0x1bb859[_0x3c92d7(0x18b)]===0x0){var _0x1ebc4e=_0x1bb859[_0x3c92d7(0x191)]||_0x1bb859[_0x3c92d7(0x1bc)]*a414_0x280f1e[_0x3c92d7(0x186)](_0x1bb859['componentDatatype']);_0x27f990=_0x1bb859[_0x3c92d7(0x1ae)][_0x3c92d7(0x1b5)]/_0x1ebc4e;break;}}for(_0x35cf82=0x0;_0x35cf82<_0x73bb54;++_0x35cf82){_0x2bdc65[_0x35cf82]['instanceDivisor']>0x0&&(_0x9597a9=!![]),a414_0x333859(_0x2bdc65[_0x35cf82][_0x3c92d7(0x196)])&&(_0x32c11d=!![]);}var _0x596b20={};for(_0x35cf82=0x0;_0x35cf82<_0x73bb54;++_0x35cf82){var _0x58c404=_0x2bdc65[_0x35cf82][_0x3c92d7(0x1a8)];if(_0x596b20[_0x58c404])throw new a414_0x8b1f06(_0x3c92d7(0x1ab)+_0x58c404+_0x3c92d7(0x1af));_0x596b20[_0x58c404]=!![];}var _0x54b6ef;_0x577ef5[_0x3c92d7(0x1d3)]&&(_0x54b6ef=_0x577ef5[_0x3c92d7(0x173)](),_0x577ef5[_0x3c92d7(0x18a)](_0x54b6ef),bind(_0x2e3ea0,_0x2bdc65,_0x23efa9),_0x577ef5[_0x3c92d7(0x18a)](null)),this['_numberOfVertices']=_0x27f990,this[_0x3c92d7(0x18c)]=_0x9597a9,this[_0x3c92d7(0x194)]=_0x32c11d,this[_0x3c92d7(0x17f)]=_0x577ef5,this['_gl']=_0x2e3ea0,this[_0x3c92d7(0x19c)]=_0x54b6ef,this[_0x3c92d7(0x1cb)]=_0x2bdc65,this[_0x3c92d7(0x17d)]=_0x23efa9;}function computeNumberOfVertices(_0x1eabf7){var _0x142283=a414_0x2c0b;return _0x1eabf7[_0x142283(0x177)]['length']/_0x1eabf7[_0x142283(0x1bc)];}function computeAttributeSizeInBytes(_0x19b5f8){var _0x3d74c1=a414_0x2c0b;return a414_0x280f1e[_0x3d74c1(0x186)](_0x19b5f8[_0x3d74c1(0x1d0)])*_0x19b5f8[_0x3d74c1(0x1bc)];}function interleaveAttributes(_0x2853ff){var _0x30c052=a414_0x2c0b,_0x3d2de2,_0x539889,_0x52dfff,_0x4ef9b6=[];for(_0x539889 in _0x2853ff){_0x2853ff[_0x30c052(0x172)](_0x539889)&&a414_0x333859(_0x2853ff[_0x539889])&&a414_0x333859(_0x2853ff[_0x539889][_0x30c052(0x177)])&&(_0x4ef9b6['push'](_0x539889),_0x2853ff[_0x539889][_0x30c052(0x1d0)]===a414_0x280f1e['DOUBLE']&&(_0x2853ff[_0x539889][_0x30c052(0x1d0)]=a414_0x280f1e[_0x30c052(0x19b)],_0x2853ff[_0x539889][_0x30c052(0x177)]=a414_0x280f1e['createTypedArray'](a414_0x280f1e[_0x30c052(0x19b)],_0x2853ff[_0x539889][_0x30c052(0x177)])));}var _0x4c33d3,_0x65d441=_0x4ef9b6['length'];if(_0x65d441>0x0){_0x4c33d3=computeNumberOfVertices(_0x2853ff[_0x4ef9b6[0x0]]);for(_0x3d2de2=0x1;_0x3d2de2<_0x65d441;++_0x3d2de2){var _0x32f4b8=computeNumberOfVertices(_0x2853ff[_0x4ef9b6[_0x3d2de2]]);if(_0x32f4b8!==_0x4c33d3)throw new a414_0x5e67eb(_0x30c052(0x183)+'Attribute\x20'+_0x4ef9b6[_0x3d2de2]+'\x20has\x20a\x20different\x20number\x20of\x20vertices\x20'+'('+_0x32f4b8['toString']()+')'+_0x30c052(0x1b9)+_0x4ef9b6[0x0]+'\x20('+_0x4c33d3[_0x30c052(0x189)]()+').');}}_0x4ef9b6[_0x30c052(0x1a2)](function(_0x8cc5d4,_0x4d044f){var _0x1e93c0=_0x30c052;return a414_0x280f1e[_0x1e93c0(0x186)](_0x2853ff[_0x4d044f][_0x1e93c0(0x1d0)])-a414_0x280f1e[_0x1e93c0(0x186)](_0x2853ff[_0x8cc5d4][_0x1e93c0(0x1d0)]);});var _0x4182e4=0x0,_0x284aa5={};for(_0x3d2de2=0x0;_0x3d2de2<_0x65d441;++_0x3d2de2){_0x539889=_0x4ef9b6[_0x3d2de2],_0x52dfff=_0x2853ff[_0x539889],_0x284aa5[_0x539889]=_0x4182e4,_0x4182e4+=computeAttributeSizeInBytes(_0x52dfff);}if(_0x4182e4>0x0){var _0x439015=a414_0x280f1e['getSizeInBytes'](_0x2853ff[_0x4ef9b6[0x0]][_0x30c052(0x1d0)]),_0x297439=_0x4182e4%_0x439015;_0x297439!==0x0&&(_0x4182e4+=_0x439015-_0x297439);var _0x39b59e=_0x4c33d3*_0x4182e4,_0x1520fc=new ArrayBuffer(_0x39b59e),_0x1bbb5c={};for(_0x3d2de2=0x0;_0x3d2de2<_0x65d441;++_0x3d2de2){_0x539889=_0x4ef9b6[_0x3d2de2];var _0x290c5c=a414_0x280f1e[_0x30c052(0x186)](_0x2853ff[_0x539889][_0x30c052(0x1d0)]);_0x1bbb5c[_0x539889]={'pointer':a414_0x280f1e[_0x30c052(0x1c6)](_0x2853ff[_0x539889][_0x30c052(0x1d0)],_0x1520fc),'index':_0x284aa5[_0x539889]/_0x290c5c,'strideInComponentType':_0x4182e4/_0x290c5c};}for(_0x3d2de2=0x0;_0x3d2de2<_0x4c33d3;++_0x3d2de2){for(var _0x4f5264=0x0;_0x4f5264<_0x65d441;++_0x4f5264){_0x539889=_0x4ef9b6[_0x4f5264],_0x52dfff=_0x2853ff[_0x539889];var _0x232003=_0x52dfff[_0x30c052(0x177)],_0x17c7fd=_0x1bbb5c[_0x539889],_0x23d7f6=_0x17c7fd[_0x30c052(0x1a1)],_0x42c14b=_0x52dfff[_0x30c052(0x1bc)];for(var _0x1071f3=0x0;_0x1071f3<_0x42c14b;++_0x1071f3){_0x23d7f6[_0x17c7fd[_0x30c052(0x1a8)]+_0x1071f3]=_0x232003[_0x3d2de2*_0x42c14b+_0x1071f3];}_0x17c7fd[_0x30c052(0x1a8)]+=_0x17c7fd[_0x30c052(0x1c9)];}}return{'buffer':_0x1520fc,'offsetsInBytes':_0x284aa5,'vertexSizeInBytes':_0x4182e4};}return undefined;}VertexArray[a414_0x445292(0x1b0)]=function(_0x59d03f){var _0x4a2dfd=a414_0x445292;_0x59d03f=a414_0x32d0c5(_0x59d03f,a414_0x32d0c5[_0x4a2dfd(0x184)]),a414_0xc3dc13[_0x4a2dfd(0x175)]('options.context',_0x59d03f[_0x4a2dfd(0x1c7)]);var _0x231265=_0x59d03f['context'],_0x160676=a414_0x32d0c5(_0x59d03f[_0x4a2dfd(0x182)],a414_0x32d0c5[_0x4a2dfd(0x184)]),_0x483574=a414_0x32d0c5(_0x59d03f[_0x4a2dfd(0x1ad)],a414_0x413231[_0x4a2dfd(0x1c4)]),_0x1e8d48=a414_0x32d0c5(_0x59d03f['attributeLocations'],a414_0x32d0c5[_0x4a2dfd(0x184)]),_0x4e8c7e=a414_0x32d0c5(_0x59d03f[_0x4a2dfd(0x1bf)],![]),_0x22acdc=_0x59d03f[_0x4a2dfd(0x1bd)],_0x2d96d2,_0x285652,_0x3e3ff8,_0x26eb92=a414_0x333859(_0x22acdc)?_0x22acdc:[],_0x33924a=_0x160676[_0x4a2dfd(0x19d)];if(_0x4e8c7e){var _0x1cebce=interleaveAttributes(_0x33924a);if(a414_0x333859(_0x1cebce)){_0x3e3ff8=a414_0x409fe9[_0x4a2dfd(0x1a5)]({'context':_0x231265,'typedArray':_0x1cebce[_0x4a2dfd(0x1cf)],'usage':_0x483574});var _0x37a6eb=_0x1cebce[_0x4a2dfd(0x1ce)],_0x3670c0=_0x1cebce[_0x4a2dfd(0x187)];for(_0x2d96d2 in _0x33924a){_0x33924a[_0x4a2dfd(0x172)](_0x2d96d2)&&a414_0x333859(_0x33924a[_0x2d96d2])&&(_0x285652=_0x33924a[_0x2d96d2],a414_0x333859(_0x285652[_0x4a2dfd(0x177)])?_0x26eb92[_0x4a2dfd(0x198)]({'index':_0x1e8d48[_0x2d96d2],'vertexBuffer':_0x3e3ff8,'componentDatatype':_0x285652[_0x4a2dfd(0x1d0)],'componentsPerAttribute':_0x285652['componentsPerAttribute'],'normalize':_0x285652[_0x4a2dfd(0x180)],'offsetInBytes':_0x37a6eb[_0x2d96d2],'strideInBytes':_0x3670c0}):_0x26eb92['push']({'index':_0x1e8d48[_0x2d96d2],'value':_0x285652[_0x4a2dfd(0x196)],'componentDatatype':_0x285652['componentDatatype'],'normalize':_0x285652[_0x4a2dfd(0x180)]}));}}}else for(_0x2d96d2 in _0x33924a){if(_0x33924a['hasOwnProperty'](_0x2d96d2)&&a414_0x333859(_0x33924a[_0x2d96d2])){_0x285652=_0x33924a[_0x2d96d2];var _0x5cbfcd=_0x285652['componentDatatype'];_0x5cbfcd===a414_0x280f1e[_0x4a2dfd(0x181)]&&(_0x5cbfcd=a414_0x280f1e['FLOAT']),_0x3e3ff8=undefined,a414_0x333859(_0x285652['values'])&&(_0x3e3ff8=a414_0x409fe9[_0x4a2dfd(0x1a5)]({'context':_0x231265,'typedArray':a414_0x280f1e[_0x4a2dfd(0x1c6)](_0x5cbfcd,_0x285652[_0x4a2dfd(0x177)]),'usage':_0x483574})),_0x26eb92[_0x4a2dfd(0x198)]({'index':_0x1e8d48[_0x2d96d2],'vertexBuffer':_0x3e3ff8,'value':_0x285652['value'],'componentDatatype':_0x5cbfcd,'componentsPerAttribute':_0x285652['componentsPerAttribute'],'normalize':_0x285652[_0x4a2dfd(0x180)]});}}var _0x413f55,_0x539e7e=_0x160676[_0x4a2dfd(0x1c5)];return a414_0x333859(_0x539e7e)&&(a414_0x34565e[_0x4a2dfd(0x178)](_0x160676)>=a414_0x2b1fe2[_0x4a2dfd(0x18d)]&&_0x231265[_0x4a2dfd(0x1aa)]?_0x413f55=a414_0x409fe9[_0x4a2dfd(0x19e)]({'context':_0x231265,'typedArray':new Uint32Array(_0x539e7e),'usage':_0x483574,'indexDatatype':a414_0x4075d9[_0x4a2dfd(0x192)]}):_0x413f55=a414_0x409fe9[_0x4a2dfd(0x19e)]({'context':_0x231265,'typedArray':new Uint16Array(_0x539e7e),'usage':_0x483574,'indexDatatype':a414_0x4075d9['UNSIGNED_SHORT']})),new VertexArray({'context':_0x231265,'attributes':_0x26eb92,'indexBuffer':_0x413f55});},Object[a414_0x445292(0x1b8)](VertexArray[a414_0x445292(0x17c)],{'numberOfAttributes':{'get':function(){var _0x356e8c=a414_0x445292;return this[_0x356e8c(0x1cb)][_0x356e8c(0x1be)];}},'numberOfVertices':{'get':function(){var _0x5139dc=a414_0x445292;return this[_0x5139dc(0x190)];}},'indexBuffer':{'get':function(){var _0x1d59ea=a414_0x445292;return this[_0x1d59ea(0x17d)];}}}),VertexArray[a414_0x445292(0x17c)][a414_0x445292(0x1b3)]=function(_0x1a5edc){var _0x87d5f2=a414_0x445292;return a414_0xc3dc13[_0x87d5f2(0x175)]('index',_0x1a5edc),this['_attributes'][_0x1a5edc];};function setVertexAttribDivisor(_0x30baea){var _0x258dae=a414_0x445292,_0x2e4e97=_0x30baea[_0x258dae(0x17f)],_0x53c91=_0x30baea[_0x258dae(0x18c)];if(!_0x53c91&&!_0x2e4e97[_0x258dae(0x193)])return;_0x2e4e97[_0x258dae(0x193)]=_0x53c91;var _0xcac6da=_0x2e4e97[_0x258dae(0x1ca)],_0x4efb45=_0x30baea[_0x258dae(0x1cb)],_0x5a915d=a414_0x41cbf0['maximumVertexAttributes'],_0xaf2190;if(_0x53c91){var _0x477a31=_0x4efb45[_0x258dae(0x1be)];for(_0xaf2190=0x0;_0xaf2190<_0x477a31;++_0xaf2190){var _0x114279=_0x4efb45[_0xaf2190];if(_0x114279['enabled']){var _0x312835=_0x114279['instanceDivisor'],_0x1f6e4b=_0x114279[_0x258dae(0x1a8)];_0x312835!==_0xcac6da[_0x1f6e4b]&&(_0x2e4e97[_0x258dae(0x199)](_0x1f6e4b,_0x312835),_0xcac6da[_0x1f6e4b]=_0x312835);}}}else for(_0xaf2190=0x0;_0xaf2190<_0x5a915d;++_0xaf2190){_0xcac6da[_0xaf2190]>0x0&&(_0x2e4e97[_0x258dae(0x199)](_0xaf2190,0x0),_0xcac6da[_0xaf2190]=0x0);}}function setConstantAttributes(_0x3f94d9,_0x47bb21){var _0x474d07=a414_0x445292,_0xf4b745=_0x3f94d9[_0x474d07(0x1cb)],_0xf7b4fe=_0xf4b745[_0x474d07(0x1be)];for(var _0x187ccc=0x0;_0x187ccc<_0xf7b4fe;++_0x187ccc){var _0x475da9=_0xf4b745[_0x187ccc];_0x475da9[_0x474d07(0x1c1)]&&a414_0x333859(_0x475da9['value'])&&_0x475da9[_0x474d07(0x174)](_0x47bb21);}}VertexArray[a414_0x445292(0x17c)][a414_0x445292(0x17b)]=function(){var _0x4a6fa5=a414_0x445292;a414_0x333859(this[_0x4a6fa5(0x19c)])?(this[_0x4a6fa5(0x17f)][_0x4a6fa5(0x18a)](this[_0x4a6fa5(0x19c)]),this['_context'][_0x4a6fa5(0x1b2)]&&setVertexAttribDivisor(this),this[_0x4a6fa5(0x194)]&&setConstantAttributes(this,this[_0x4a6fa5(0x1ba)])):bind(this[_0x4a6fa5(0x1ba)],this[_0x4a6fa5(0x1cb)],this[_0x4a6fa5(0x17d)]);},VertexArray['prototype'][a414_0x445292(0x19f)]=function(){var _0x1cc4b0=a414_0x445292;if(a414_0x333859(this[_0x1cc4b0(0x19c)]))this[_0x1cc4b0(0x17f)][_0x1cc4b0(0x18a)](null);else{var _0x46cad8=this[_0x1cc4b0(0x1cb)],_0xe282a5=this[_0x1cc4b0(0x1ba)];for(var _0xdcb339=0x0;_0xdcb339<_0x46cad8[_0x1cc4b0(0x1be)];++_0xdcb339){var _0x58cb8b=_0x46cad8[_0xdcb339];_0x58cb8b[_0x1cc4b0(0x1c1)]&&_0x58cb8b[_0x1cc4b0(0x1d1)](_0xe282a5);}this[_0x1cc4b0(0x17d)]&&_0xe282a5[_0x1cc4b0(0x1c0)](_0xe282a5[_0x1cc4b0(0x18e)],null);}},VertexArray[a414_0x445292(0x17c)][a414_0x445292(0x197)]=function(){return![];},VertexArray[a414_0x445292(0x17c)][a414_0x445292(0x19a)]=function(){var _0x534309=a414_0x445292,_0x1040a4=this[_0x534309(0x1cb)];for(var _0x5abe44=0x0;_0x5abe44<_0x1040a4[_0x534309(0x1be)];++_0x5abe44){var _0x3b26c3=_0x1040a4[_0x5abe44][_0x534309(0x1ae)];a414_0x333859(_0x3b26c3)&&!_0x3b26c3['isDestroyed']()&&_0x3b26c3['vertexArrayDestroyable']&&_0x3b26c3[_0x534309(0x19a)]();}var _0x329c2e=this[_0x534309(0x17d)];return a414_0x333859(_0x329c2e)&&!_0x329c2e[_0x534309(0x197)]()&&_0x329c2e[_0x534309(0x1a6)]&&_0x329c2e[_0x534309(0x19a)](),a414_0x333859(this[_0x534309(0x19c)])&&this[_0x534309(0x17f)][_0x534309(0x1b4)](this[_0x534309(0x19c)]),a414_0x2ccf2a(this);};export default VertexArray;