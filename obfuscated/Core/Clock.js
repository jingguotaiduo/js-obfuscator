var a29_0x279c76=a29_0xd11c;(function(_0x31a7be,_0x264c59){var _0x5eb33d=a29_0xd11c,_0x21deaf=_0x31a7be();while(!![]){try{var _0x1127e6=-parseInt(_0x5eb33d(0x153))/0x1*(parseInt(_0x5eb33d(0x142))/0x2)+-parseInt(_0x5eb33d(0x132))/0x3*(-parseInt(_0x5eb33d(0x152))/0x4)+parseInt(_0x5eb33d(0x14d))/0x5+-parseInt(_0x5eb33d(0x148))/0x6*(-parseInt(_0x5eb33d(0x12f))/0x7)+parseInt(_0x5eb33d(0x13e))/0x8*(parseInt(_0x5eb33d(0x140))/0x9)+-parseInt(_0x5eb33d(0x151))/0xa+parseInt(_0x5eb33d(0x147))/0xb*(parseInt(_0x5eb33d(0x13d))/0xc);if(_0x1127e6===_0x264c59)break;else _0x21deaf['push'](_0x21deaf['shift']());}catch(_0x4387e9){_0x21deaf['push'](_0x21deaf['shift']());}}}(a29_0x3900,0x22834));import a29_0x49ffe8 from'./ClockRange.js';import a29_0x4807b8 from'./ClockStep.js';import a29_0x1c255b from'./defaultValue.js';import a29_0x4e8929 from'./defined.js';import a29_0x578039 from'./DeveloperError.js';import a29_0x8d756e from'./Event.js';function a29_0x3900(){var _0x377051=['startTime\x20must\x20come\x20before\x20stopTime.','addDays','SYSTEM_CLOCK','588zhaIdC','104XkFKiO','shouldAnimate','40059gPoHsz','_shouldAnimate','12308xKUSLC','startTime','clockRange','currentTime','clone','16379JBlHwe','12rVyftz','clockStep','_multiplier','prototype','_clockStep','92095YEGTGI','defineProperties','SYSTEM_CLOCK_MULTIPLIER','addSeconds','394880ZYTGqv','60ZwaPut','37KiUbcs','stopTime','onStop','_currentTime','EMPTY_OBJECT','onTick','equals','multiplier','768607RuNBvR','greaterThan','canAnimate','7941AEKEuA','secondsDifference','lessThan','UNBOUNDED','LOOP_STOP','now','raiseEvent','_lastSystemTime'];a29_0x3900=function(){return _0x377051;};return a29_0x3900();}import a29_0x52f3f2 from'./getTimestamp.js';import a29_0x580865 from'./JulianDate.js';function a29_0xd11c(_0x4a45d3,_0x4c5e4b){var _0x3900a6=a29_0x3900();return a29_0xd11c=function(_0xd11c5d,_0x55bcc8){_0xd11c5d=_0xd11c5d-0x12b;var _0x462380=_0x3900a6[_0xd11c5d];return _0x462380;},a29_0xd11c(_0x4a45d3,_0x4c5e4b);}function Clock(_0x170f67){var _0x6e8eb8=a29_0xd11c;_0x170f67=a29_0x1c255b(_0x170f67,a29_0x1c255b[_0x6e8eb8(0x12b)]);var _0x36a159=_0x170f67['currentTime'],_0x7768f3=_0x170f67[_0x6e8eb8(0x143)],_0x423bc6=_0x170f67['stopTime'];if(!a29_0x4e8929(_0x36a159)){if(a29_0x4e8929(_0x7768f3))_0x36a159=a29_0x580865[_0x6e8eb8(0x146)](_0x7768f3);else a29_0x4e8929(_0x423bc6)?_0x36a159=a29_0x580865[_0x6e8eb8(0x13b)](_0x423bc6,-0x1,new a29_0x580865()):_0x36a159=a29_0x580865[_0x6e8eb8(0x137)]();}else _0x36a159=a29_0x580865[_0x6e8eb8(0x146)](_0x36a159);!a29_0x4e8929(_0x7768f3)?_0x7768f3=a29_0x580865[_0x6e8eb8(0x146)](_0x36a159):_0x7768f3=a29_0x580865[_0x6e8eb8(0x146)](_0x7768f3);!a29_0x4e8929(_0x423bc6)?_0x423bc6=a29_0x580865[_0x6e8eb8(0x13b)](_0x7768f3,0x1,new a29_0x580865()):_0x423bc6=a29_0x580865[_0x6e8eb8(0x146)](_0x423bc6);if(a29_0x580865[_0x6e8eb8(0x130)](_0x7768f3,_0x423bc6))throw new a29_0x578039(_0x6e8eb8(0x13a));this[_0x6e8eb8(0x143)]=_0x7768f3,this[_0x6e8eb8(0x154)]=_0x423bc6,this[_0x6e8eb8(0x144)]=a29_0x1c255b(_0x170f67['clockRange'],a29_0x49ffe8[_0x6e8eb8(0x135)]),this[_0x6e8eb8(0x131)]=a29_0x1c255b(_0x170f67[_0x6e8eb8(0x131)],!![]),this[_0x6e8eb8(0x12c)]=new a29_0x8d756e(),this[_0x6e8eb8(0x155)]=new a29_0x8d756e(),this['_currentTime']=undefined,this[_0x6e8eb8(0x14a)]=undefined,this[_0x6e8eb8(0x14c)]=undefined,this['_shouldAnimate']=undefined,this[_0x6e8eb8(0x139)]=a29_0x52f3f2(),this[_0x6e8eb8(0x145)]=_0x36a159,this[_0x6e8eb8(0x12e)]=a29_0x1c255b(_0x170f67[_0x6e8eb8(0x12e)],0x1),this['shouldAnimate']=a29_0x1c255b(_0x170f67[_0x6e8eb8(0x13f)],![]),this[_0x6e8eb8(0x149)]=a29_0x1c255b(_0x170f67[_0x6e8eb8(0x149)],a29_0x4807b8[_0x6e8eb8(0x14f)]);}Object[a29_0x279c76(0x14e)](Clock[a29_0x279c76(0x14b)],{'currentTime':{'get':function(){var _0x541611=a29_0x279c76;return this[_0x541611(0x156)];},'set':function(_0x5322bd){var _0x9c1acc=a29_0x279c76;if(a29_0x580865[_0x9c1acc(0x12d)](this[_0x9c1acc(0x156)],_0x5322bd))return;this[_0x9c1acc(0x14c)]===a29_0x4807b8[_0x9c1acc(0x13c)]&&(this[_0x9c1acc(0x14c)]=a29_0x4807b8[_0x9c1acc(0x14f)]),this[_0x9c1acc(0x156)]=_0x5322bd;}},'multiplier':{'get':function(){var _0x333cb1=a29_0x279c76;return this[_0x333cb1(0x14a)];},'set':function(_0x23b16b){var _0x1a479a=a29_0x279c76;if(this['_multiplier']===_0x23b16b)return;this['_clockStep']===a29_0x4807b8['SYSTEM_CLOCK']&&(this[_0x1a479a(0x14c)]=a29_0x4807b8['SYSTEM_CLOCK_MULTIPLIER']),this['_multiplier']=_0x23b16b;}},'clockStep':{'get':function(){var _0x4e364b=a29_0x279c76;return this[_0x4e364b(0x14c)];},'set':function(_0x4fd4be){var _0x17a431=a29_0x279c76;_0x4fd4be===a29_0x4807b8[_0x17a431(0x13c)]&&(this[_0x17a431(0x14a)]=0x1,this[_0x17a431(0x141)]=!![],this[_0x17a431(0x156)]=a29_0x580865['now']()),this[_0x17a431(0x14c)]=_0x4fd4be;}},'shouldAnimate':{'get':function(){var _0x5b3ae7=a29_0x279c76;return this[_0x5b3ae7(0x141)];},'set':function(_0x329c1d){var _0x2c6a49=a29_0x279c76;if(this[_0x2c6a49(0x141)]===_0x329c1d)return;this[_0x2c6a49(0x14c)]===a29_0x4807b8['SYSTEM_CLOCK']&&(this[_0x2c6a49(0x14c)]=a29_0x4807b8[_0x2c6a49(0x14f)]),this[_0x2c6a49(0x141)]=_0x329c1d;}}}),Clock[a29_0x279c76(0x14b)]['tick']=function(){var _0x1629b9=a29_0x279c76,_0xf7ebe7=a29_0x52f3f2(),_0x38bbc1=a29_0x580865[_0x1629b9(0x146)](this[_0x1629b9(0x156)]);if(this[_0x1629b9(0x131)]&&this[_0x1629b9(0x141)]){var _0x52c897=this[_0x1629b9(0x14c)];if(_0x52c897===a29_0x4807b8['SYSTEM_CLOCK'])_0x38bbc1=a29_0x580865[_0x1629b9(0x137)](_0x38bbc1);else{var _0xb646a5=this[_0x1629b9(0x14a)];if(_0x52c897===a29_0x4807b8['TICK_DEPENDENT'])_0x38bbc1=a29_0x580865['addSeconds'](_0x38bbc1,_0xb646a5,_0x38bbc1);else{var _0x5a7df3=_0xf7ebe7-this['_lastSystemTime'];_0x38bbc1=a29_0x580865[_0x1629b9(0x150)](_0x38bbc1,_0xb646a5*(_0x5a7df3/0x3e8),_0x38bbc1);}var _0x553f7b=this['clockRange'],_0x16e09a=this[_0x1629b9(0x143)],_0x1bf86b=this['stopTime'];if(_0x553f7b===a29_0x49ffe8['CLAMPED']){if(a29_0x580865['lessThan'](_0x38bbc1,_0x16e09a))_0x38bbc1=a29_0x580865['clone'](_0x16e09a,_0x38bbc1);else a29_0x580865[_0x1629b9(0x130)](_0x38bbc1,_0x1bf86b)&&(_0x38bbc1=a29_0x580865[_0x1629b9(0x146)](_0x1bf86b,_0x38bbc1),this['onStop']['raiseEvent'](this));}else{if(_0x553f7b===a29_0x49ffe8[_0x1629b9(0x136)]){a29_0x580865[_0x1629b9(0x134)](_0x38bbc1,_0x16e09a)&&(_0x38bbc1=a29_0x580865['clone'](_0x16e09a,_0x38bbc1));while(a29_0x580865[_0x1629b9(0x130)](_0x38bbc1,_0x1bf86b)){_0x38bbc1=a29_0x580865['addSeconds'](_0x16e09a,a29_0x580865[_0x1629b9(0x133)](_0x38bbc1,_0x1bf86b),_0x38bbc1),this[_0x1629b9(0x155)]['raiseEvent'](this);}}}}}return this['_currentTime']=_0x38bbc1,this['_lastSystemTime']=_0xf7ebe7,this[_0x1629b9(0x12c)][_0x1629b9(0x138)](this),_0x38bbc1;};export default Clock;