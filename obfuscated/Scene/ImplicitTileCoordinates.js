var a577_0x3aedd0=a577_0x614a;(function(_0x433308,_0x410865){var _0x414644=a577_0x614a,_0x40a7a0=_0x433308();while(!![]){try{var _0x5c9181=-parseInt(_0x414644(0x93))/0x1+parseInt(_0x414644(0x92))/0x2*(-parseInt(_0x414644(0x85))/0x3)+parseInt(_0x414644(0x84))/0x4+-parseInt(_0x414644(0x8b))/0x5*(-parseInt(_0x414644(0x71))/0x6)+-parseInt(_0x414644(0x9c))/0x7+-parseInt(_0x414644(0x78))/0x8+-parseInt(_0x414644(0x9a))/0x9*(-parseInt(_0x414644(0x7f))/0xa);if(_0x5c9181===_0x410865)break;else _0x40a7a0['push'](_0x40a7a0['shift']());}catch(_0x583088){_0x40a7a0['push'](_0x40a7a0['shift']());}}}(a577_0x82ed,0xe3dc5));import a577_0x2274eb from'../Core/Math.js';import a577_0x505afa from'../Core/Check.js';import a577_0x2b11b5 from'../Core/DeveloperError.js';import a577_0x1eff88 from'../Core/MortonOrder.js';import a577_0x36d598 from'./ImplicitSubdivisionScheme.js';export default function ImplicitTileCoordinates(_0x191115){var _0x30d580=a577_0x614a;a577_0x505afa[_0x30d580(0xa1)][_0x30d580(0xa6)](_0x30d580(0x87),_0x191115[_0x30d580(0x81)]),a577_0x505afa['typeOf'][_0x30d580(0x94)](_0x30d580(0x86),_0x191115['subtreeLevels']),a577_0x505afa['typeOf'][_0x30d580(0x94)](_0x30d580(0x73),_0x191115[_0x30d580(0x7c)]),a577_0x505afa[_0x30d580(0xa1)]['number'](_0x30d580(0x72),_0x191115['x']),a577_0x505afa[_0x30d580(0xa1)][_0x30d580(0x94)](_0x30d580(0x77),_0x191115['y']);_0x191115[_0x30d580(0x81)]===a577_0x36d598[_0x30d580(0x6e)]&&a577_0x505afa[_0x30d580(0xa1)]['number'](_0x30d580(0x8e),_0x191115['z']);if(_0x191115[_0x30d580(0x7c)]<0x0)throw new a577_0x2b11b5(_0x30d580(0x6c));if(_0x191115['x']<0x0)throw new a577_0x2b11b5(_0x30d580(0x88));if(_0x191115['y']<0x0)throw new a577_0x2b11b5(_0x30d580(0x9b));if(_0x191115['subdivisionScheme']===a577_0x36d598[_0x30d580(0x6e)]){if(_0x191115['z']<0x0)throw new a577_0x2b11b5(_0x30d580(0x6f));}var _0x2953fc=0x1<<_0x191115[_0x30d580(0x7c)];if(_0x191115['x']>=_0x2953fc)throw new a577_0x2b11b5(_0x30d580(0xa0));if(_0x191115['y']>=_0x2953fc)throw new a577_0x2b11b5(_0x30d580(0x7e));if(_0x191115[_0x30d580(0x81)]===a577_0x36d598[_0x30d580(0x6e)]){if(_0x191115['z']>=_0x2953fc)throw new a577_0x2b11b5('z\x20is\x20out\x20of\x20range');}this[_0x30d580(0x81)]=_0x191115['subdivisionScheme'],this['subtreeLevels']=_0x191115['subtreeLevels'],this[_0x30d580(0x7c)]=_0x191115[_0x30d580(0x7c)],this['x']=_0x191115['x'],this['y']=_0x191115['y'],this['z']=undefined,_0x191115[_0x30d580(0x81)]===a577_0x36d598[_0x30d580(0x6e)]&&(this['z']=_0x191115['z']);}Object[a577_0x3aedd0(0x8d)](ImplicitTileCoordinates[a577_0x3aedd0(0x95)],{'childIndex':{'get':function(){var _0x28de9d=a577_0x3aedd0,_0x538bd0=0x0;return _0x538bd0|=this['x']&0x1,_0x538bd0|=(this['y']&0x1)<<0x1,this[_0x28de9d(0x81)]===a577_0x36d598[_0x28de9d(0x6e)]&&(_0x538bd0|=(this['z']&0x1)<<0x2),_0x538bd0;}},'mortonIndex':{'get':function(){var _0x4ae4c4=a577_0x3aedd0;if(this[_0x4ae4c4(0x81)]===a577_0x36d598[_0x4ae4c4(0x6e)])return a577_0x1eff88['encode3D'](this['x'],this['y'],this['z']);return a577_0x1eff88[_0x4ae4c4(0x7a)](this['x'],this['y']);}},'tileIndex':{'get':function(){var _0x267037=a577_0x3aedd0,_0x16f741=this[_0x267037(0x81)]===a577_0x36d598[_0x267037(0x6e)]?((0x1<<0x3*this[_0x267037(0x7c)])-0x1)/0x7:((0x1<<0x2*this['level'])-0x1)/0x3,_0x423b90=this[_0x267037(0x70)];return _0x16f741+_0x423b90;}}});function checkMatchingSubtreeShape(_0x499f31,_0x278e92){var _0x2d69bf=a577_0x3aedd0;if(_0x499f31[_0x2d69bf(0x81)]!==_0x278e92[_0x2d69bf(0x81)])throw new a577_0x2b11b5(_0x2d69bf(0x97));if(_0x499f31['subtreeLevels']!==_0x278e92['subtreeLevels'])throw new a577_0x2b11b5(_0x2d69bf(0x90));}ImplicitTileCoordinates[a577_0x3aedd0(0x95)]['getDescendantCoordinates']=function(_0x1044c2){var _0x5ec6ef=a577_0x3aedd0;a577_0x505afa[_0x5ec6ef(0xa1)][_0x5ec6ef(0x9e)](_0x5ec6ef(0xa2),_0x1044c2),checkMatchingSubtreeShape(this,_0x1044c2);var _0x1b3a1c=this[_0x5ec6ef(0x7c)]+_0x1044c2[_0x5ec6ef(0x7c)],_0x5b2c52=(this['x']<<_0x1044c2['level'])+_0x1044c2['x'],_0x2180e4=(this['y']<<_0x1044c2[_0x5ec6ef(0x7c)])+_0x1044c2['y'];if(this[_0x5ec6ef(0x81)]===a577_0x36d598[_0x5ec6ef(0x6e)]){var _0xf4688f=(this['z']<<_0x1044c2[_0x5ec6ef(0x7c)])+_0x1044c2['z'];return new ImplicitTileCoordinates({'subdivisionScheme':this[_0x5ec6ef(0x81)],'subtreeLevels':this['subtreeLevels'],'level':_0x1b3a1c,'x':_0x5b2c52,'y':_0x2180e4,'z':_0xf4688f});}return new ImplicitTileCoordinates({'subdivisionScheme':this[_0x5ec6ef(0x81)],'subtreeLevels':this['subtreeLevels'],'level':_0x1b3a1c,'x':_0x5b2c52,'y':_0x2180e4});},ImplicitTileCoordinates[a577_0x3aedd0(0x95)][a577_0x3aedd0(0x8a)]=function(_0x56a09b){var _0x1b640a=a577_0x3aedd0;a577_0x505afa[_0x1b640a(0xa1)][_0x1b640a(0x94)](_0x1b640a(0x8c),_0x56a09b);if(_0x56a09b<0x0)throw new a577_0x2b11b5(_0x1b640a(0x96));if(_0x56a09b>this['level'])throw new a577_0x2b11b5(_0x1b640a(0x76));var _0x229432=0x1<<_0x56a09b,_0x19a373=this[_0x1b640a(0x7c)]-_0x56a09b,_0x61543e=Math[_0x1b640a(0xa4)](this['x']/_0x229432),_0x113574=Math[_0x1b640a(0xa4)](this['y']/_0x229432);if(this[_0x1b640a(0x81)]===a577_0x36d598[_0x1b640a(0x6e)]){var _0xcdc775=Math[_0x1b640a(0xa4)](this['z']/_0x229432);return new ImplicitTileCoordinates({'subdivisionScheme':this[_0x1b640a(0x81)],'subtreeLevels':this['subtreeLevels'],'level':_0x19a373,'x':_0x61543e,'y':_0x113574,'z':_0xcdc775});}return new ImplicitTileCoordinates({'subdivisionScheme':this['subdivisionScheme'],'subtreeLevels':this[_0x1b640a(0x7b)],'level':_0x19a373,'x':_0x61543e,'y':_0x113574});},ImplicitTileCoordinates[a577_0x3aedd0(0x95)][a577_0x3aedd0(0x89)]=function(_0x54dd4f){var _0x3887b3=a577_0x3aedd0;a577_0x505afa['typeOf'][_0x3887b3(0x9e)]('descendantCoordinates',_0x54dd4f);if(!this[_0x3887b3(0x79)](_0x54dd4f)&&!this['isAncestor'](_0x54dd4f))throw new a577_0x2b11b5(_0x3887b3(0x9f));checkMatchingSubtreeShape(this,_0x54dd4f);var _0x19fa84=_0x54dd4f[_0x3887b3(0x7c)]-this[_0x3887b3(0x7c)],_0x25eadd=0x1<<_0x19fa84,_0x2efac2=_0x54dd4f['x']%_0x25eadd,_0x3cd363=_0x54dd4f['y']%_0x25eadd;if(this[_0x3887b3(0x81)]===a577_0x36d598['OCTREE']){var _0x87472d=_0x54dd4f['z']%_0x25eadd;return new ImplicitTileCoordinates({'subdivisionScheme':this['subdivisionScheme'],'subtreeLevels':this['subtreeLevels'],'level':_0x19fa84,'x':_0x2efac2,'y':_0x3cd363,'z':_0x87472d});}return new ImplicitTileCoordinates({'subdivisionScheme':this['subdivisionScheme'],'subtreeLevels':this['subtreeLevels'],'level':_0x19fa84,'x':_0x2efac2,'y':_0x3cd363});},ImplicitTileCoordinates[a577_0x3aedd0(0x95)][a577_0x3aedd0(0x6d)]=function(_0x1b0986){var _0xfa5b53=a577_0x3aedd0;a577_0x505afa[_0xfa5b53(0xa1)]['number'](_0xfa5b53(0x91),_0x1b0986);var _0x541c8d=a577_0x36d598[_0xfa5b53(0x6b)](this['subdivisionScheme']);if(_0x1b0986<0x0||_0x541c8d<=_0x1b0986)throw new a577_0x2b11b5(_0xfa5b53(0xa5)+_0x541c8d);var _0x1ffc39=this[_0xfa5b53(0x7c)]+0x1,_0x2c72df=0x2*this['x']+_0x1b0986%0x2,_0x496075=0x2*this['y']+Math[_0xfa5b53(0xa4)](_0x1b0986/0x2)%0x2;if(this['subdivisionScheme']===a577_0x36d598['OCTREE']){var _0x1fa198=0x2*this['z']+Math[_0xfa5b53(0xa4)](_0x1b0986/0x4)%0x2;return new ImplicitTileCoordinates({'subdivisionScheme':this[_0xfa5b53(0x81)],'subtreeLevels':this[_0xfa5b53(0x7b)],'level':_0x1ffc39,'x':_0x2c72df,'y':_0x496075,'z':_0x1fa198});}return new ImplicitTileCoordinates({'subdivisionScheme':this[_0xfa5b53(0x81)],'subtreeLevels':this['subtreeLevels'],'level':_0x1ffc39,'x':_0x2c72df,'y':_0x496075});},ImplicitTileCoordinates[a577_0x3aedd0(0x95)][a577_0x3aedd0(0x99)]=function(){var _0x16b7aa=a577_0x3aedd0;return this[_0x16b7aa(0x8a)](this[_0x16b7aa(0x7c)]%this[_0x16b7aa(0x7b)]);},ImplicitTileCoordinates[a577_0x3aedd0(0x95)][a577_0x3aedd0(0x83)]=function(){var _0x699ea1=a577_0x3aedd0;return this['getAncestorCoordinates'](this['level']%this[_0x699ea1(0x7b)]+this[_0x699ea1(0x7b)]);},ImplicitTileCoordinates[a577_0x3aedd0(0x95)][a577_0x3aedd0(0x8f)]=function(_0x1e79b3){var _0xff7f85=a577_0x3aedd0;a577_0x505afa[_0xff7f85(0xa1)][_0xff7f85(0x9e)](_0xff7f85(0x75),_0x1e79b3),checkMatchingSubtreeShape(this,_0x1e79b3);var _0x48fb4a=_0x1e79b3[_0xff7f85(0x7c)]-this[_0xff7f85(0x7c)];if(_0x48fb4a<=0x0)return![];var _0x34ad3b=_0x1e79b3['x']>>_0x48fb4a,_0x55973a=_0x1e79b3['y']>>_0x48fb4a,_0x59f762=this['x']===_0x34ad3b,_0x3688c6=this['y']===_0x55973a;if(this[_0xff7f85(0x81)]===a577_0x36d598[_0xff7f85(0x6e)]){var _0x44bc21=_0x1e79b3['z']>>_0x48fb4a,_0x3592ac=this['z']===_0x44bc21;return _0x59f762&&_0x3688c6&&_0x3592ac;}return _0x59f762&&_0x3688c6;},ImplicitTileCoordinates[a577_0x3aedd0(0x95)][a577_0x3aedd0(0x79)]=function(_0x36723b){var _0x386d50=a577_0x3aedd0;return a577_0x505afa['typeOf'][_0x386d50(0x9e)]('otherCoordinates',_0x36723b),this[_0x386d50(0x81)]===_0x36723b[_0x386d50(0x81)]&&this[_0x386d50(0x7b)]===_0x36723b[_0x386d50(0x7b)]&&this['level']===_0x36723b['level']&&this['x']===_0x36723b['x']&&this['y']===_0x36723b['y']&&(this[_0x386d50(0x81)]===a577_0x36d598[_0x386d50(0x6e)]?this['z']===_0x36723b['z']:!![]);},ImplicitTileCoordinates[a577_0x3aedd0(0x95)][a577_0x3aedd0(0x82)]=function(){var _0x56919d=a577_0x3aedd0;return this[_0x56919d(0x7c)]===0x0;},ImplicitTileCoordinates['prototype']['isSubtreeRoot']=function(){var _0x56003d=a577_0x3aedd0;return this['level']%this[_0x56003d(0x7b)]===0x0;},ImplicitTileCoordinates[a577_0x3aedd0(0x95)][a577_0x3aedd0(0xa3)]=function(){var _0x50af03=a577_0x3aedd0;return this['level']%this[_0x50af03(0x7b)]===this[_0x50af03(0x7b)]-0x1;},ImplicitTileCoordinates[a577_0x3aedd0(0x95)][a577_0x3aedd0(0x98)]=function(){var _0x29e772=a577_0x3aedd0,_0x1e68c6={'level':this[_0x29e772(0x7c)],'x':this['x'],'y':this['y']};return this[_0x29e772(0x81)]===a577_0x36d598[_0x29e772(0x6e)]&&(_0x1e68c6['z']=this['z']),_0x1e68c6;};function a577_0x614a(_0x310c97,_0x51c810){var _0x82ed29=a577_0x82ed();return a577_0x614a=function(_0x614af6,_0x3dc3fe){_0x614af6=_0x614af6-0x6b;var _0x3dc6db=_0x82ed29[_0x614af6];return _0x3dc6db;},a577_0x614a(_0x310c97,_0x51c810);}var scratchCoordinatesArray=[0x0,0x0,0x0];function a577_0x82ed(){var _0xd88e7c=['defineProperties','options.z','isAncestor','coordinates\x20must\x20have\x20same\x20subtreeLevels','childIndex','60BOOHFp','692549sZgdgM','number','prototype','offsetLevels\x20must\x20be\x20non-negative','coordinates\x20must\x20have\x20same\x20subdivisionScheme','getTemplateValues','getSubtreeCoordinates','19854OHcjkv','y\x20must\x20be\x20non-negative','2159136HiEAfw','fromTileIndex','object','this\x20is\x20not\x20an\x20ancestor\x20of\x20descendant','x\x20is\x20out\x20of\x20range','typeOf','offsetCoordinates','isBottomOfSubtree','floor','childIndex\x20must\x20be\x20at\x20least\x200\x20and\x20less\x20than\x20','string','getBranchingFactor','level\x20must\x20be\x20non-negative','getChildCoordinates','OCTREE','z\x20must\x20be\x20non-negative','mortonIndex','36qoJUSk','options.x','options.level','decode2D','descendantCoordinates','ancestor\x20cannot\x20be\x20above\x20the\x20tileset\x20root','options.y','3386184LrmRMl','isEqual','encode2D','subtreeLevels','level','fromMortonIndex','y\x20is\x20out\x20of\x20range','6430VcpLqe','log2','subdivisionScheme','isImplicitTilesetRoot','getParentSubtreeCoordinates','6880524YfNYgm','171861hphAMM','options.subtreeLevels','options.subdivisionScheme','x\x20must\x20be\x20non-negative','getOffsetCoordinates','getAncestorCoordinates','781340jLarqQ','offsetLevels'];a577_0x82ed=function(){return _0xd88e7c;};return a577_0x82ed();}ImplicitTileCoordinates[a577_0x3aedd0(0x7d)]=function(_0x5f123d,_0xff6670,_0x5a0090,_0x2c6e2e){var _0x21176a=a577_0x3aedd0,_0x8011d4;if(_0x5f123d===a577_0x36d598['OCTREE'])return _0x8011d4=a577_0x1eff88['decode3D'](_0x2c6e2e,scratchCoordinatesArray),new ImplicitTileCoordinates({'subdivisionScheme':_0x5f123d,'subtreeLevels':_0xff6670,'level':_0x5a0090,'x':_0x8011d4[0x0],'y':_0x8011d4[0x1],'z':_0x8011d4[0x2]});return _0x8011d4=a577_0x1eff88[_0x21176a(0x74)](_0x2c6e2e,scratchCoordinatesArray),new ImplicitTileCoordinates({'subdivisionScheme':_0x5f123d,'subtreeLevels':_0xff6670,'level':_0x5a0090,'x':_0x8011d4[0x0],'y':_0x8011d4[0x1]});},ImplicitTileCoordinates[a577_0x3aedd0(0x9d)]=function(_0x398ed9,_0x4e778c,_0x4f58ba){var _0x459603=a577_0x3aedd0,_0x4e2bf2,_0x1922d3,_0x737ec9;return _0x398ed9===a577_0x36d598[_0x459603(0x6e)]?(_0x4e2bf2=Math[_0x459603(0xa4)](a577_0x2274eb[_0x459603(0x80)](0x7*_0x4f58ba+0x1)/0x3),_0x1922d3=((0x1<<0x3*_0x4e2bf2)-0x1)/0x7,_0x737ec9=_0x4f58ba-_0x1922d3):(_0x4e2bf2=Math['floor'](a577_0x2274eb[_0x459603(0x80)](0x3*_0x4f58ba+0x1)/0x2),_0x1922d3=((0x1<<0x2*_0x4e2bf2)-0x1)/0x3,_0x737ec9=_0x4f58ba-_0x1922d3),ImplicitTileCoordinates[_0x459603(0x7d)](_0x398ed9,_0x4e778c,_0x4e2bf2,_0x737ec9);};