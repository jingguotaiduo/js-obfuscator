(function(_0x15c948,_0x78f45e){var _0x1d1e7c=a1230_0x3457,_0x3a633e=_0x15c948();while(!![]){try{var _0x2ab549=parseInt(_0x1d1e7c(0x7b))/0x1+parseInt(_0x1d1e7c(0x88))/0x2+parseInt(_0x1d1e7c(0x81))/0x3*(parseInt(_0x1d1e7c(0x82))/0x4)+parseInt(_0x1d1e7c(0x78))/0x5+parseInt(_0x1d1e7c(0x72))/0x6*(parseInt(_0x1d1e7c(0x87))/0x7)+-parseInt(_0x1d1e7c(0x80))/0x8+-parseInt(_0x1d1e7c(0x7e))/0x9;if(_0x2ab549===_0x78f45e)break;else _0x3a633e['push'](_0x3a633e['shift']());}catch(_0x555dbd){_0x3a633e['push'](_0x3a633e['shift']());}}}(a1230_0x5412,0xaa1ab));import a1230_0x20fdcc from'../Core/Cartesian3.js';function a1230_0x3457(_0x3dec8c,_0x536721){var _0x541275=a1230_0x5412();return a1230_0x3457=function(_0x3457fe,_0x51c092){_0x3457fe=_0x3457fe-0x72;var _0x5f0458=_0x541275[_0x3457fe];return _0x5f0458;},a1230_0x3457(_0x3dec8c,_0x536721);}import a1230_0x40316a from'../Core/combine.js';import a1230_0x2d402c from'../Core/decodeVectorPolylinePositions.js';function a1230_0x5412(){var _0x20a232=['127216GAKnrK','max','add','packedBuffer','length','1537018fTYibp','720102mKkRpF','6EChaAJ','batchIds','counts','min','buffer','positions','6145970UevXRZ','subtract','unpack','1241401FzqmGP','packedLength','push','32723946AYWuTY','pack','171544RTuGBp','123QXhTwQ'];a1230_0x5412=function(){return _0x20a232;};return a1230_0x5412();}import a1230_0x11f701 from'../Core/Ellipsoid.js';import a1230_0x59ef9e from'../Core/IndexDatatype.js';import a1230_0x182400 from'../Core/Rectangle.js';import a1230_0x2d7035 from'./createTaskProcessorWorker.js';var scratchRectangle=new a1230_0x182400(),scratchEllipsoid=new a1230_0x11f701(),scratchCenter=new a1230_0x20fdcc(),scratchMinMaxHeights={'min':undefined,'max':undefined};function unpackBuffer(_0x15dc04){var _0x2b5359=a1230_0x3457;_0x15dc04=new Float64Array(_0x15dc04);var _0x2cf536=0x0;scratchMinMaxHeights[_0x2b5359(0x75)]=_0x15dc04[_0x2cf536++],scratchMinMaxHeights[_0x2b5359(0x83)]=_0x15dc04[_0x2cf536++],a1230_0x182400['unpack'](_0x15dc04,_0x2cf536,scratchRectangle),_0x2cf536+=a1230_0x182400[_0x2b5359(0x7c)],a1230_0x11f701[_0x2b5359(0x7a)](_0x15dc04,_0x2cf536,scratchEllipsoid),_0x2cf536+=a1230_0x11f701[_0x2b5359(0x7c)],a1230_0x20fdcc[_0x2b5359(0x7a)](_0x15dc04,_0x2cf536,scratchCenter);}function getPositionOffsets(_0xa8261){var _0x70e0a9=a1230_0x3457,_0x96b6e8=_0xa8261[_0x70e0a9(0x86)],_0x439f9a=new Uint32Array(_0x96b6e8+0x1),_0x5370ae=0x0;for(var _0x2cd587=0x0;_0x2cd587<_0x96b6e8;++_0x2cd587){_0x439f9a[_0x2cd587]=_0x5370ae,_0x5370ae+=_0xa8261[_0x2cd587];}return _0x439f9a[_0x96b6e8]=_0x5370ae,_0x439f9a;}var scratchP0=new a1230_0x20fdcc(),scratchP1=new a1230_0x20fdcc(),scratchPrev=new a1230_0x20fdcc(),scratchCur=new a1230_0x20fdcc(),scratchNext=new a1230_0x20fdcc();function createVectorTilePolylines(_0x34a7b5,_0x1fba08){var _0x742006=a1230_0x3457,_0x4010eb=new Uint16Array(_0x34a7b5[_0x742006(0x77)]),_0x571319=new Uint16Array(_0x34a7b5['widths']),_0x443c62=new Uint32Array(_0x34a7b5[_0x742006(0x74)]),_0x44e79a=new Uint16Array(_0x34a7b5[_0x742006(0x73)]);unpackBuffer(_0x34a7b5[_0x742006(0x85)]);var _0x5d118b=scratchRectangle,_0x550eb9=scratchEllipsoid,_0x3b6079=scratchCenter,_0x39296b=scratchMinMaxHeights['min'],_0xf55d05=scratchMinMaxHeights[_0x742006(0x83)],_0x364dfe=a1230_0x2d402c(_0x4010eb,_0x5d118b,_0x39296b,_0xf55d05,_0x550eb9),_0x303abf=_0x364dfe[_0x742006(0x86)]/0x3,_0x57d66c=_0x303abf*0x4-0x4,_0x4d37f4=new Float32Array(_0x57d66c*0x3),_0x31ee6a=new Float32Array(_0x57d66c*0x3),_0x480185=new Float32Array(_0x57d66c*0x3),_0x211d8c=new Float32Array(_0x57d66c*0x2),_0x35948c=new Uint16Array(_0x57d66c),_0x1ebe98=0x0,_0x3235bb=0x0,_0x32b05a=0x0,_0x476701,_0x4dbda8=0x0,_0x5a5364=_0x443c62['length'];for(_0x476701=0x0;_0x476701<_0x5a5364;++_0x476701){var _0xe8b5db=_0x443c62[_0x476701],_0x23e25f=_0x571319[_0x476701],_0x18a87f=_0x44e79a[_0x476701];for(var _0x5d7c44=0x0;_0x5d7c44<_0xe8b5db;++_0x5d7c44){var _0x5cc931;if(_0x5d7c44===0x0){var _0x1724b4=a1230_0x20fdcc[_0x742006(0x7a)](_0x364dfe,_0x4dbda8*0x3,scratchP0),_0x3d06db=a1230_0x20fdcc['unpack'](_0x364dfe,(_0x4dbda8+0x1)*0x3,scratchP1);_0x5cc931=a1230_0x20fdcc[_0x742006(0x79)](_0x1724b4,_0x3d06db,scratchPrev),a1230_0x20fdcc[_0x742006(0x84)](_0x1724b4,_0x5cc931,_0x5cc931);}else _0x5cc931=a1230_0x20fdcc[_0x742006(0x7a)](_0x364dfe,(_0x4dbda8+_0x5d7c44-0x1)*0x3,scratchPrev);var _0x317314=a1230_0x20fdcc[_0x742006(0x7a)](_0x364dfe,(_0x4dbda8+_0x5d7c44)*0x3,scratchCur),_0x16336e;if(_0x5d7c44===_0xe8b5db-0x1){var _0x2655f2=a1230_0x20fdcc[_0x742006(0x7a)](_0x364dfe,(_0x4dbda8+_0xe8b5db-0x1)*0x3,scratchP0),_0x28cedb=a1230_0x20fdcc[_0x742006(0x7a)](_0x364dfe,(_0x4dbda8+_0xe8b5db-0x2)*0x3,scratchP1);_0x16336e=a1230_0x20fdcc[_0x742006(0x79)](_0x2655f2,_0x28cedb,scratchNext),a1230_0x20fdcc[_0x742006(0x84)](_0x2655f2,_0x16336e,_0x16336e);}else _0x16336e=a1230_0x20fdcc[_0x742006(0x7a)](_0x364dfe,(_0x4dbda8+_0x5d7c44+0x1)*0x3,scratchNext);a1230_0x20fdcc[_0x742006(0x79)](_0x5cc931,_0x3b6079,_0x5cc931),a1230_0x20fdcc[_0x742006(0x79)](_0x317314,_0x3b6079,_0x317314),a1230_0x20fdcc[_0x742006(0x79)](_0x16336e,_0x3b6079,_0x16336e);var _0x5a2694=_0x5d7c44===0x0?0x2:0x0,_0x4312c0=_0x5d7c44===_0xe8b5db-0x1?0x2:0x4;for(var _0x909146=_0x5a2694;_0x909146<_0x4312c0;++_0x909146){a1230_0x20fdcc[_0x742006(0x7f)](_0x317314,_0x4d37f4,_0x1ebe98),a1230_0x20fdcc[_0x742006(0x7f)](_0x5cc931,_0x31ee6a,_0x1ebe98),a1230_0x20fdcc['pack'](_0x16336e,_0x480185,_0x1ebe98),_0x1ebe98+=0x3;var _0xb2fe88=_0x909146-0x2<0x0?-0x1:0x1;_0x211d8c[_0x3235bb++]=0x2*(_0x909146%0x2)-0x1,_0x211d8c[_0x3235bb++]=_0xb2fe88*_0x23e25f,_0x35948c[_0x32b05a++]=_0x18a87f;}}_0x4dbda8+=_0xe8b5db;}var _0x53bf6b=a1230_0x59ef9e['createTypedArray'](_0x57d66c,_0x303abf*0x6-0x6),_0x174f18=0x0,_0x438d9e=0x0;_0x5a5364=_0x303abf-0x1;for(_0x476701=0x0;_0x476701<_0x5a5364;++_0x476701){_0x53bf6b[_0x438d9e++]=_0x174f18,_0x53bf6b[_0x438d9e++]=_0x174f18+0x2,_0x53bf6b[_0x438d9e++]=_0x174f18+0x1,_0x53bf6b[_0x438d9e++]=_0x174f18+0x1,_0x53bf6b[_0x438d9e++]=_0x174f18+0x2,_0x53bf6b[_0x438d9e++]=_0x174f18+0x3,_0x174f18+=0x4;}_0x1fba08[_0x742006(0x7d)](_0x4d37f4[_0x742006(0x76)],_0x31ee6a[_0x742006(0x76)],_0x480185[_0x742006(0x76)]),_0x1fba08[_0x742006(0x7d)](_0x211d8c[_0x742006(0x76)],_0x35948c[_0x742006(0x76)],_0x53bf6b[_0x742006(0x76)]);var _0x462279={'indexDatatype':_0x53bf6b['BYTES_PER_ELEMENT']===0x2?a1230_0x59ef9e['UNSIGNED_SHORT']:a1230_0x59ef9e['UNSIGNED_INT'],'currentPositions':_0x4d37f4[_0x742006(0x76)],'previousPositions':_0x31ee6a[_0x742006(0x76)],'nextPositions':_0x480185[_0x742006(0x76)],'expandAndWidth':_0x211d8c[_0x742006(0x76)],'batchIds':_0x35948c['buffer'],'indices':_0x53bf6b[_0x742006(0x76)]};if(_0x34a7b5['keepDecodedPositions']){var _0x229683=getPositionOffsets(_0x443c62);_0x1fba08[_0x742006(0x7d)](_0x364dfe[_0x742006(0x76)],_0x229683['buffer']),_0x462279=a1230_0x40316a(_0x462279,{'decodedPositions':_0x364dfe[_0x742006(0x76)],'decodedPositionOffsets':_0x229683[_0x742006(0x76)]});}return _0x462279;}export default a1230_0x2d7035(createVectorTilePolylines);