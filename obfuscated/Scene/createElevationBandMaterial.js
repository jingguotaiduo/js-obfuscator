var a480_0x4bb6fd=a480_0x20dd;(function(_0x2a4e3b,_0xe11ad2){var _0x4fbd91=a480_0x20dd,_0x28464c=_0x2a4e3b();while(!![]){try{var _0x2c9ee7=-parseInt(_0x4fbd91(0xe4))/0x1+parseInt(_0x4fbd91(0xe3))/0x2*(-parseInt(_0x4fbd91(0xc7))/0x3)+parseInt(_0x4fbd91(0xba))/0x4*(-parseInt(_0x4fbd91(0xe2))/0x5)+parseInt(_0x4fbd91(0xdd))/0x6+parseInt(_0x4fbd91(0xeb))/0x7+parseInt(_0x4fbd91(0xbc))/0x8*(-parseInt(_0x4fbd91(0xb9))/0x9)+parseInt(_0x4fbd91(0xd5))/0xa*(parseInt(_0x4fbd91(0xc1))/0xb);if(_0x2c9ee7===_0xe11ad2)break;else _0x28464c['push'](_0x28464c['shift']());}catch(_0x58ed4b){_0x28464c['push'](_0x28464c['shift']());}}}(a480_0x5efe,0x90700));import a480_0x9155f2 from'../Core/Cartesian4.js';import a480_0xa70ffd from'../Core/Math.js';function a480_0x5efe(){var _0x4c2089=['4520etGtYK','20770nVlUHj','609890LmwqvA','entries','FLOAT','defined','typeOf','clone','greaterThan','4994731SuVbnR','equals','add','filter','_maximumHeight','fromType','scene','toBytes','LINEAR','packFloat','3222PSjTOB','4736AcjeZn','_useFloatTexture','7496TFaoXf','_minimumHeight','floatingPointTexture','entry\x20requires\x20a\x20color.','sign','588698qbRGnF','RGBA','EMPTY_OBJECT','CLAMP_TO_EDGE','multiplyByScalar','alpha','15IxmThG','clamp','lerp','create','isArray','UNSIGNED_BYTE','extendUpwards','ElevationBand','entry\x20requires\x20a\x20height.','blue','context','_emptyColor','length','NEAREST','290hTjzjt','push','layers','number','height','color','pack','LUMINANCE','2361948VoQird','reverse','splice','object','extendDownwards'];a480_0x5efe=function(){return _0x4c2089;};return a480_0x5efe();}import a480_0x235418 from'../Core/Check.js';function a480_0x20dd(_0x58b926,_0x417e28){var _0x5efe66=a480_0x5efe();return a480_0x20dd=function(_0x20dd54,_0x305e5b){_0x20dd54=_0x20dd54-0xb5;var _0x171782=_0x5efe66[_0x20dd54];return _0x171782;},a480_0x20dd(_0x58b926,_0x417e28);}import a480_0x4dff03 from'../Core/Color.js';import a480_0x5b8307 from'../Core/defaultValue.js';import a480_0x298168 from'../Core/defined.js';import a480_0x371cd9 from'../Core/DeveloperError.js';import a480_0x5a2bcd from'../Core/mergeSort.js';import a480_0x6c895a from'../Core/PixelFormat.js';import a480_0x1827c4 from'../Renderer/PixelDatatype.js';import a480_0x8ac17a from'../Renderer/Sampler.js';import a480_0x458c53 from'../Renderer/Texture.js';import a480_0x4552cf from'../Renderer/TextureMagnificationFilter.js';import a480_0x2d89d2 from'../Renderer/TextureMinificationFilter.js';import a480_0x3c23af from'../Renderer/TextureWrap.js';import a480_0x3fd1d1 from'./Material.js';var scratchColor=new a480_0x4dff03(),scratchColorAbove=new a480_0x4dff03(),scratchColorBelow=new a480_0x4dff03(),scratchColorBlend=new a480_0x4dff03(),scratchPackedFloat=new a480_0x9155f2(),scratchColorBytes=new Uint8Array(0x4);function lerpEntryColor(_0x1400bc,_0x3553af,_0x3236ae,_0x25ae50){var _0x3b13b9=a480_0x20dd,_0x15822b=_0x3553af[_0x3b13b9(0xd9)]===_0x3236ae['height']?0x0:(_0x1400bc-_0x3553af['height'])/(_0x3236ae[_0x3b13b9(0xd9)]-_0x3553af[_0x3b13b9(0xd9)]);return a480_0x4dff03[_0x3b13b9(0xc9)](_0x3553af[_0x3b13b9(0xda)],_0x3236ae['color'],_0x15822b,_0x25ae50);}function createNewEntry(_0x599d12,_0x4ca71d){var _0x21a08a=a480_0x20dd;return{'height':_0x599d12,'color':a480_0x4dff03[_0x21a08a(0xe9)](_0x4ca71d)};}function removeDuplicates(_0x28408f){var _0x1df505=a480_0x20dd;return _0x28408f=_0x28408f[_0x1df505(0xee)](function(_0xc4b83,_0x1d3e83,_0x5e3ebe){var _0x56b9fe=_0x1df505,_0x63d754=_0x1d3e83>0x0,_0x35dc23=_0x1d3e83<_0x5e3ebe[_0x56b9fe(0xd3)]-0x1,_0x61f213=_0x63d754?_0xc4b83[_0x56b9fe(0xd9)]===_0x5e3ebe[_0x1d3e83-0x1]['height']:!![],_0x390a76=_0x35dc23?_0xc4b83[_0x56b9fe(0xd9)]===_0x5e3ebe[_0x1d3e83+0x1]['height']:!![],_0x1cb993=!_0x61f213||!_0x390a76;return _0x1cb993;}),_0x28408f=_0x28408f['filter'](function(_0x598587,_0x567d3f,_0x52a11d){var _0x592266=_0x1df505,_0x143e9c=_0x567d3f>0x0,_0x813cca=_0x567d3f<_0x52a11d['length']-0x1,_0x4aa7a9=_0x143e9c?a480_0x4dff03['equals'](_0x598587[_0x592266(0xda)],_0x52a11d[_0x567d3f-0x1][_0x592266(0xda)]):![],_0x4f72c3=_0x813cca?a480_0x4dff03[_0x592266(0xec)](_0x598587[_0x592266(0xda)],_0x52a11d[_0x567d3f+0x1][_0x592266(0xda)]):![],_0x15ee98=!_0x4aa7a9||!_0x4f72c3;return _0x15ee98;}),_0x28408f=_0x28408f[_0x1df505(0xee)](function(_0x4012ff,_0x48b4a8,_0x258d85){var _0x4219de=_0x1df505,_0x52f9d2=_0x48b4a8>0x0,_0xd3621c=_0x52f9d2?a480_0x4dff03[_0x4219de(0xec)](_0x4012ff[_0x4219de(0xda)],_0x258d85[_0x48b4a8-0x1][_0x4219de(0xda)]):![],_0x3bbc49=_0x52f9d2?_0x4012ff[_0x4219de(0xd9)]===_0x258d85[_0x48b4a8-0x1]['height']:!![],_0x26f9ff=!_0xd3621c||!_0x3bbc49;return _0x26f9ff;}),_0x28408f;}function preprocess(_0xbd3816){var _0x1352d3=a480_0x20dd,_0x8cab5,_0x26876b,_0x199796=[],_0x48a900=_0xbd3816[_0x1352d3(0xd3)];for(_0x8cab5=0x0;_0x8cab5<_0x48a900;_0x8cab5++){var _0x3044bd=_0xbd3816[_0x8cab5],_0x57fa7e=_0x3044bd[_0x1352d3(0xe5)],_0xfebcf9=_0x57fa7e[_0x1352d3(0xd3)];if(!Array[_0x1352d3(0xcb)](_0x57fa7e)||_0xfebcf9===0x0)throw new a480_0x371cd9('entries\x20must\x20be\x20an\x20array\x20with\x20size\x20>\x200.');var _0x45918d=[];for(_0x26876b=0x0;_0x26876b<_0xfebcf9;_0x26876b++){var _0xeda7c8=_0x57fa7e[_0x26876b];if(!a480_0x298168(_0xeda7c8[_0x1352d3(0xd9)]))throw new a480_0x371cd9(_0x1352d3(0xcf));if(!a480_0x298168(_0xeda7c8[_0x1352d3(0xda)]))throw new a480_0x371cd9(_0x1352d3(0xbf));var _0x501fcb=a480_0xa70ffd[_0x1352d3(0xc8)](_0xeda7c8[_0x1352d3(0xd9)],createElevationBandMaterial[_0x1352d3(0xbd)],createElevationBandMaterial['_maximumHeight']),_0x132497=a480_0x4dff03[_0x1352d3(0xe9)](_0xeda7c8['color'],scratchColor);_0x132497['red']*=_0x132497['alpha'],_0x132497['green']*=_0x132497[_0x1352d3(0xc6)],_0x132497[_0x1352d3(0xd0)]*=_0x132497[_0x1352d3(0xc6)],_0x45918d['push'](createNewEntry(_0x501fcb,_0x132497));}var _0x3887ba=!![],_0x162dd0=!![];for(_0x26876b=0x0;_0x26876b<_0xfebcf9-0x1;_0x26876b++){var _0x5bdffb=_0x45918d[_0x26876b+0x0],_0x11c9e5=_0x45918d[_0x26876b+0x1];_0x3887ba=_0x3887ba&&_0x5bdffb[_0x1352d3(0xd9)]<=_0x11c9e5['height'],_0x162dd0=_0x162dd0&&_0x5bdffb['height']>=_0x11c9e5[_0x1352d3(0xd9)];}if(_0x162dd0)_0x45918d=_0x45918d[_0x1352d3(0xde)]();else!_0x3887ba&&a480_0x5a2bcd(_0x45918d,function(_0x42fb8e,_0x4c2daa){var _0x2ea063=_0x1352d3;return a480_0xa70ffd[_0x2ea063(0xc0)](_0x42fb8e[_0x2ea063(0xd9)]-_0x4c2daa[_0x2ea063(0xd9)]);});var _0x118ea6=a480_0x5b8307(_0x3044bd[_0x1352d3(0xe1)],![]),_0x21e8b6=a480_0x5b8307(_0x3044bd[_0x1352d3(0xcd)],![]);_0x45918d[_0x1352d3(0xd3)]===0x1&&!_0x118ea6&&!_0x21e8b6&&(_0x118ea6=!![],_0x21e8b6=!![]),_0x118ea6&&_0x45918d[_0x1352d3(0xdf)](0x0,0x0,createNewEntry(createElevationBandMaterial['_minimumHeight'],_0x45918d[0x0][_0x1352d3(0xda)])),_0x21e8b6&&_0x45918d[_0x1352d3(0xdf)](_0x45918d[_0x1352d3(0xd3)],0x0,createNewEntry(createElevationBandMaterial[_0x1352d3(0xef)],_0x45918d[_0x45918d['length']-0x1][_0x1352d3(0xda)])),_0x45918d=removeDuplicates(_0x45918d),_0x199796[_0x1352d3(0xd6)](_0x45918d);}return _0x199796;}function createLayeredEntries(_0x24cdc0){var _0x98c9c5=a480_0x20dd,_0x355fa8=preprocess(_0x24cdc0),_0x33db46=[],_0x15bc6d=[],_0x16a790;function _0x2739b8(_0xa9c4c5,_0x1f3865){_0x33db46['push'](createNewEntry(_0xa9c4c5,_0x1f3865));}function _0xf7e133(_0x5ec10a,_0x3e279e,_0x16e40b){var _0x2f68e2=a480_0x20dd,_0x5b2908=a480_0x4dff03[_0x2f68e2(0xc5)](_0x16e40b,0x1-_0x3e279e[_0x2f68e2(0xc6)],scratchColorBlend);_0x5b2908=a480_0x4dff03[_0x2f68e2(0xed)](_0x5b2908,_0x3e279e,_0x5b2908),_0x2739b8(_0x5ec10a,_0x5b2908);}var _0x321df0=_0x355fa8[_0x98c9c5(0xd3)];for(_0x16a790=0x0;_0x16a790<_0x321df0;_0x16a790++){var _0x433bb5=_0x355fa8[_0x16a790],_0x3ee412=0x0,_0xa7bd8f=0x0;_0x15bc6d=_0x33db46,_0x33db46=[];var _0x22f37c=_0x433bb5[_0x98c9c5(0xd3)],_0x2d0649=_0x15bc6d[_0x98c9c5(0xd3)];while(_0x3ee412<_0x22f37c||_0xa7bd8f<_0x2d0649){var _0x1e56f1=_0x3ee412<_0x22f37c?_0x433bb5[_0x3ee412]:undefined,_0x27534c=_0x3ee412>0x0?_0x433bb5[_0x3ee412-0x1]:undefined,_0x671f35=_0x3ee412<_0x22f37c-0x1?_0x433bb5[_0x3ee412+0x1]:undefined,_0x28ab6e=_0xa7bd8f<_0x2d0649?_0x15bc6d[_0xa7bd8f]:undefined,_0x58c804=_0xa7bd8f>0x0?_0x15bc6d[_0xa7bd8f-0x1]:undefined,_0x2b664f=_0xa7bd8f<_0x2d0649-0x1?_0x15bc6d[_0xa7bd8f+0x1]:undefined;if(a480_0x298168(_0x1e56f1)&&a480_0x298168(_0x28ab6e)&&_0x1e56f1[_0x98c9c5(0xd9)]===_0x28ab6e[_0x98c9c5(0xd9)]){var _0x42ac06=a480_0x298168(_0x2b664f)&&_0x28ab6e[_0x98c9c5(0xd9)]===_0x2b664f['height'],_0x2ed966=!a480_0x298168(_0x58c804),_0x2d768c=!a480_0x298168(_0x2b664f),_0x260aa5=a480_0x298168(_0x671f35)&&_0x1e56f1[_0x98c9c5(0xd9)]===_0x671f35[_0x98c9c5(0xd9)],_0x445c5b=!a480_0x298168(_0x27534c),_0x5deb26=!a480_0x298168(_0x671f35);if(_0x42ac06){if(_0x260aa5)_0xf7e133(_0x1e56f1['height'],_0x1e56f1[_0x98c9c5(0xda)],_0x28ab6e[_0x98c9c5(0xda)]),_0xf7e133(_0x1e56f1[_0x98c9c5(0xd9)],_0x671f35[_0x98c9c5(0xda)],_0x2b664f[_0x98c9c5(0xda)]);else{if(_0x445c5b)_0x2739b8(_0x1e56f1['height'],_0x28ab6e[_0x98c9c5(0xda)]),_0xf7e133(_0x1e56f1[_0x98c9c5(0xd9)],_0x1e56f1[_0x98c9c5(0xda)],_0x2b664f[_0x98c9c5(0xda)]);else _0x5deb26?(_0xf7e133(_0x1e56f1[_0x98c9c5(0xd9)],_0x1e56f1[_0x98c9c5(0xda)],_0x28ab6e['color']),_0x2739b8(_0x1e56f1['height'],_0x2b664f[_0x98c9c5(0xda)])):(_0xf7e133(_0x1e56f1['height'],_0x1e56f1[_0x98c9c5(0xda)],_0x28ab6e[_0x98c9c5(0xda)]),_0xf7e133(_0x1e56f1[_0x98c9c5(0xd9)],_0x1e56f1['color'],_0x2b664f[_0x98c9c5(0xda)]));}}else{if(_0x2ed966){if(_0x260aa5)_0x2739b8(_0x1e56f1[_0x98c9c5(0xd9)],_0x1e56f1[_0x98c9c5(0xda)]),_0xf7e133(_0x1e56f1[_0x98c9c5(0xd9)],_0x671f35[_0x98c9c5(0xda)],_0x28ab6e[_0x98c9c5(0xda)]);else{if(_0x5deb26)_0x2739b8(_0x1e56f1['height'],_0x1e56f1['color']),_0x2739b8(_0x1e56f1['height'],_0x28ab6e[_0x98c9c5(0xda)]);else _0x445c5b?_0xf7e133(_0x1e56f1[_0x98c9c5(0xd9)],_0x1e56f1[_0x98c9c5(0xda)],_0x28ab6e[_0x98c9c5(0xda)]):(_0x2739b8(_0x1e56f1[_0x98c9c5(0xd9)],_0x1e56f1[_0x98c9c5(0xda)]),_0xf7e133(_0x1e56f1[_0x98c9c5(0xd9)],_0x1e56f1[_0x98c9c5(0xda)],_0x28ab6e['color']));}}else{if(_0x2d768c){if(_0x260aa5)_0xf7e133(_0x1e56f1[_0x98c9c5(0xd9)],_0x1e56f1[_0x98c9c5(0xda)],_0x28ab6e['color']),_0x2739b8(_0x1e56f1[_0x98c9c5(0xd9)],_0x671f35[_0x98c9c5(0xda)]);else{if(_0x445c5b)_0x2739b8(_0x1e56f1[_0x98c9c5(0xd9)],_0x28ab6e[_0x98c9c5(0xda)]),_0x2739b8(_0x1e56f1[_0x98c9c5(0xd9)],_0x1e56f1[_0x98c9c5(0xda)]);else _0x5deb26?_0xf7e133(_0x1e56f1[_0x98c9c5(0xd9)],_0x1e56f1[_0x98c9c5(0xda)],_0x28ab6e[_0x98c9c5(0xda)]):(_0xf7e133(_0x1e56f1['height'],_0x1e56f1[_0x98c9c5(0xda)],_0x28ab6e[_0x98c9c5(0xda)]),_0x2739b8(_0x1e56f1[_0x98c9c5(0xd9)],_0x1e56f1[_0x98c9c5(0xda)]));}}else{if(_0x260aa5)_0xf7e133(_0x1e56f1[_0x98c9c5(0xd9)],_0x1e56f1[_0x98c9c5(0xda)],_0x28ab6e[_0x98c9c5(0xda)]),_0xf7e133(_0x1e56f1[_0x98c9c5(0xd9)],_0x671f35['color'],_0x28ab6e[_0x98c9c5(0xda)]);else{if(_0x445c5b)_0x2739b8(_0x1e56f1[_0x98c9c5(0xd9)],_0x28ab6e[_0x98c9c5(0xda)]),_0xf7e133(_0x1e56f1[_0x98c9c5(0xd9)],_0x1e56f1[_0x98c9c5(0xda)],_0x28ab6e[_0x98c9c5(0xda)]);else _0x5deb26?(_0xf7e133(_0x1e56f1[_0x98c9c5(0xd9)],_0x1e56f1['color'],_0x28ab6e[_0x98c9c5(0xda)]),_0x2739b8(_0x1e56f1[_0x98c9c5(0xd9)],_0x28ab6e[_0x98c9c5(0xda)])):_0xf7e133(_0x1e56f1[_0x98c9c5(0xd9)],_0x1e56f1[_0x98c9c5(0xda)],_0x28ab6e[_0x98c9c5(0xda)]);}}}}_0x3ee412+=_0x260aa5?0x2:0x1,_0xa7bd8f+=_0x42ac06?0x2:0x1;}else{if(a480_0x298168(_0x1e56f1)&&a480_0x298168(_0x28ab6e)&&a480_0x298168(_0x58c804)&&_0x1e56f1[_0x98c9c5(0xd9)]<_0x28ab6e[_0x98c9c5(0xd9)]){var _0x2d61ba=lerpEntryColor(_0x1e56f1['height'],_0x58c804,_0x28ab6e,scratchColorBelow);if(!a480_0x298168(_0x27534c))_0x2739b8(_0x1e56f1[_0x98c9c5(0xd9)],_0x2d61ba),_0xf7e133(_0x1e56f1[_0x98c9c5(0xd9)],_0x1e56f1[_0x98c9c5(0xda)],_0x2d61ba);else!a480_0x298168(_0x671f35)?(_0xf7e133(_0x1e56f1[_0x98c9c5(0xd9)],_0x1e56f1[_0x98c9c5(0xda)],_0x2d61ba),_0x2739b8(_0x1e56f1['height'],_0x2d61ba)):_0xf7e133(_0x1e56f1['height'],_0x1e56f1[_0x98c9c5(0xda)],_0x2d61ba);_0x3ee412++;}else{if(a480_0x298168(_0x28ab6e)&&a480_0x298168(_0x1e56f1)&&a480_0x298168(_0x27534c)&&_0x28ab6e[_0x98c9c5(0xd9)]<_0x1e56f1[_0x98c9c5(0xd9)]){var _0xd869d1=lerpEntryColor(_0x28ab6e['height'],_0x27534c,_0x1e56f1,scratchColorAbove);if(!a480_0x298168(_0x58c804))_0x2739b8(_0x28ab6e[_0x98c9c5(0xd9)],_0xd869d1),_0xf7e133(_0x28ab6e['height'],_0xd869d1,_0x28ab6e[_0x98c9c5(0xda)]);else!a480_0x298168(_0x2b664f)?(_0xf7e133(_0x28ab6e[_0x98c9c5(0xd9)],_0xd869d1,_0x28ab6e[_0x98c9c5(0xda)]),_0x2739b8(_0x28ab6e[_0x98c9c5(0xd9)],_0xd869d1)):_0xf7e133(_0x28ab6e[_0x98c9c5(0xd9)],_0xd869d1,_0x28ab6e[_0x98c9c5(0xda)]);_0xa7bd8f++;}else{if(a480_0x298168(_0x1e56f1)&&(!a480_0x298168(_0x28ab6e)||_0x1e56f1['height']<_0x28ab6e[_0x98c9c5(0xd9)])){if(a480_0x298168(_0x28ab6e)&&!a480_0x298168(_0x58c804)&&!a480_0x298168(_0x671f35))_0x2739b8(_0x1e56f1[_0x98c9c5(0xd9)],_0x1e56f1[_0x98c9c5(0xda)]),_0x2739b8(_0x1e56f1[_0x98c9c5(0xd9)],createElevationBandMaterial['_emptyColor']),_0x2739b8(_0x28ab6e[_0x98c9c5(0xd9)],createElevationBandMaterial[_0x98c9c5(0xd2)]);else!a480_0x298168(_0x28ab6e)&&a480_0x298168(_0x58c804)&&!a480_0x298168(_0x27534c)?(_0x2739b8(_0x58c804[_0x98c9c5(0xd9)],createElevationBandMaterial['_emptyColor']),_0x2739b8(_0x1e56f1[_0x98c9c5(0xd9)],createElevationBandMaterial[_0x98c9c5(0xd2)]),_0x2739b8(_0x1e56f1[_0x98c9c5(0xd9)],_0x1e56f1['color'])):_0x2739b8(_0x1e56f1[_0x98c9c5(0xd9)],_0x1e56f1['color']);_0x3ee412++;}else a480_0x298168(_0x28ab6e)&&(!a480_0x298168(_0x1e56f1)||_0x28ab6e[_0x98c9c5(0xd9)]<_0x1e56f1[_0x98c9c5(0xd9)])&&(_0x2739b8(_0x28ab6e[_0x98c9c5(0xd9)],_0x28ab6e['color']),_0xa7bd8f++);}}}}}var _0x3f8fb2=removeDuplicates(_0x33db46);return _0x3f8fb2;}function createElevationBandMaterial(_0x21be07){var _0x11854c=a480_0x20dd;_0x21be07=a480_0x5b8307(_0x21be07,a480_0x5b8307[_0x11854c(0xc3)]);var _0x58ddda=_0x21be07[_0x11854c(0xb5)],_0x4a592f=_0x21be07[_0x11854c(0xd7)];a480_0x235418[_0x11854c(0xe8)][_0x11854c(0xe0)]('options.scene',_0x58ddda),a480_0x235418[_0x11854c(0xe7)]('options.layers',_0x4a592f),a480_0x235418[_0x11854c(0xe8)][_0x11854c(0xd8)][_0x11854c(0xea)]('options.layers.length',_0x4a592f[_0x11854c(0xd3)],0x0);var _0x2ec0ce=createLayeredEntries(_0x4a592f),_0x121928=_0x2ec0ce[_0x11854c(0xd3)],_0x425c24,_0x21cd9b,_0x295d30,_0x2ace3e,_0x4e1728=!createElevationBandMaterial['_useFloatTexture'](_0x58ddda['context']);if(_0x4e1728){_0x295d30=a480_0x1827c4[_0x11854c(0xcc)],_0x2ace3e=a480_0x6c895a[_0x11854c(0xc2)],_0x21cd9b=new Uint8Array(_0x121928*0x4);for(_0x425c24=0x0;_0x425c24<_0x121928;_0x425c24++){a480_0x9155f2[_0x11854c(0xb8)](_0x2ec0ce[_0x425c24][_0x11854c(0xd9)],scratchPackedFloat),a480_0x9155f2[_0x11854c(0xdb)](scratchPackedFloat,_0x21cd9b,_0x425c24*0x4);}}else{_0x295d30=a480_0x1827c4[_0x11854c(0xe6)],_0x2ace3e=a480_0x6c895a[_0x11854c(0xdc)],_0x21cd9b=new Float32Array(_0x121928);for(_0x425c24=0x0;_0x425c24<_0x121928;_0x425c24++){_0x21cd9b[_0x425c24]=_0x2ec0ce[_0x425c24][_0x11854c(0xd9)];}}var _0x504749=a480_0x458c53[_0x11854c(0xca)]({'context':_0x58ddda[_0x11854c(0xd1)],'pixelFormat':_0x2ace3e,'pixelDatatype':_0x295d30,'source':{'arrayBufferView':_0x21cd9b,'width':_0x121928,'height':0x1},'sampler':new a480_0x8ac17a({'wrapS':a480_0x3c23af['CLAMP_TO_EDGE'],'wrapT':a480_0x3c23af[_0x11854c(0xc4)],'minificationFilter':a480_0x2d89d2[_0x11854c(0xd4)],'magnificationFilter':a480_0x4552cf[_0x11854c(0xd4)]})}),_0x526429=new Uint8Array(_0x121928*0x4);for(_0x425c24=0x0;_0x425c24<_0x121928;_0x425c24++){var _0x1fb300=_0x2ec0ce[_0x425c24][_0x11854c(0xda)];_0x1fb300[_0x11854c(0xb6)](scratchColorBytes),_0x526429[_0x425c24*0x4+0x0]=scratchColorBytes[0x0],_0x526429[_0x425c24*0x4+0x1]=scratchColorBytes[0x1],_0x526429[_0x425c24*0x4+0x2]=scratchColorBytes[0x2],_0x526429[_0x425c24*0x4+0x3]=scratchColorBytes[0x3];}var _0xd4f5b=a480_0x458c53[_0x11854c(0xca)]({'context':_0x58ddda[_0x11854c(0xd1)],'pixelFormat':a480_0x6c895a[_0x11854c(0xc2)],'pixelDatatype':a480_0x1827c4[_0x11854c(0xcc)],'source':{'arrayBufferView':_0x526429,'width':_0x121928,'height':0x1},'sampler':new a480_0x8ac17a({'wrapS':a480_0x3c23af[_0x11854c(0xc4)],'wrapT':a480_0x3c23af[_0x11854c(0xc4)],'minificationFilter':a480_0x2d89d2[_0x11854c(0xb7)],'magnificationFilter':a480_0x4552cf['LINEAR']})}),_0x2206dc=a480_0x3fd1d1[_0x11854c(0xf0)](_0x11854c(0xce),{'heights':_0x504749,'colors':_0xd4f5b});return _0x2206dc;}createElevationBandMaterial[a480_0x4bb6fd(0xbb)]=function(_0x1e0743){var _0x40f468=a480_0x4bb6fd;return _0x1e0743[_0x40f468(0xbe)];},createElevationBandMaterial[a480_0x4bb6fd(0xef)]=+0x55f2f780000,createElevationBandMaterial['_minimumHeight']=-0x55f2f780000,createElevationBandMaterial[a480_0x4bb6fd(0xd2)]=new a480_0x4dff03(0x0,0x0,0x0,0x0);export default createElevationBandMaterial;