function a476_0x2074(_0x3d46e2,_0x36c56d){var _0x192699=a476_0x1926();return a476_0x2074=function(_0x2074bf,_0x4ca05b){_0x2074bf=_0x2074bf-0x195;var _0x1111d6=_0x192699[_0x2074bf];return _0x1111d6;},a476_0x2074(_0x3d46e2,_0x36c56d);}(function(_0x593b73,_0x53a6b4){var _0x558cc4=a476_0x2074,_0x151c67=_0x593b73();while(!![]){try{var _0x592f2f=-parseInt(_0x558cc4(0x1a1))/0x1+parseInt(_0x558cc4(0x1a2))/0x2*(-parseInt(_0x558cc4(0x19e))/0x3)+-parseInt(_0x558cc4(0x1ab))/0x4*(parseInt(_0x558cc4(0x1b0))/0x5)+-parseInt(_0x558cc4(0x1a9))/0x6*(-parseInt(_0x558cc4(0x199))/0x7)+parseInt(_0x558cc4(0x1a5))/0x8*(-parseInt(_0x558cc4(0x1a3))/0x9)+-parseInt(_0x558cc4(0x197))/0xa+parseInt(_0x558cc4(0x198))/0xb;if(_0x592f2f===_0x53a6b4)break;else _0x151c67['push'](_0x151c67['shift']());}catch(_0x545eb5){_0x151c67['push'](_0x151c67['shift']());}}}(a476_0x1926,0x70f0d));import a476_0x349321 from'../Core/defined.js';function a476_0x1926(){var _0x286fe0=['cartesianToCartographic','readyPromise','then','center','5943HZNMXT','northeast','_sampleTerrainMostDetailed','491470GvPdbj','232GAiZoj','4062186pqkewx','terrainProvider','8CbVSWk','height','mapProjection','southwest','600690QvUMpj','unproject','312rvWmnn','mode','ellipsoid','southeast','availability','37640ELaEuh','SCENE3D','northwest','4781980hyGTZA','19795292qgnHIM','63ZsoGnd'];a476_0x1926=function(){return _0x286fe0;};return a476_0x1926();}import a476_0x2da489 from'../Core/Rectangle.js';import a476_0xdd553 from'../Core/sampleTerrainMostDetailed.js';import a476_0x743503 from'../ThirdParty/when.js';import a476_0x25fe24 from'./SceneMode.js';function computeFlyToLocationForRectangle(_0x5dba69,_0x10e8b2){var _0x31ddf3=a476_0x2074,_0x5779a4=_0x10e8b2[_0x31ddf3(0x1a4)],_0x300018=_0x10e8b2[_0x31ddf3(0x1a7)],_0x145d4e=_0x300018[_0x31ddf3(0x1ad)],_0x2396a8,_0x502b34=_0x10e8b2['camera']['getRectangleCameraCoordinates'](_0x5dba69);_0x10e8b2['mode']===a476_0x25fe24[_0x31ddf3(0x195)]?_0x2396a8=_0x145d4e[_0x31ddf3(0x19a)](_0x502b34):_0x2396a8=_0x300018[_0x31ddf3(0x1aa)](_0x502b34);if(!a476_0x349321(_0x5779a4))return a476_0x743503['resolve'](_0x2396a8);return _0x5779a4[_0x31ddf3(0x19b)][_0x31ddf3(0x19c)](function(){var _0x1c4087=_0x31ddf3,_0x518053=_0x5779a4[_0x1c4087(0x1af)];if(!a476_0x349321(_0x518053)||_0x10e8b2[_0x1c4087(0x1ac)]===a476_0x25fe24['SCENE2D'])return _0x2396a8;var _0xcc905=[a476_0x2da489[_0x1c4087(0x19d)](_0x5dba69),a476_0x2da489[_0x1c4087(0x1ae)](_0x5dba69),a476_0x2da489[_0x1c4087(0x1a8)](_0x5dba69),a476_0x2da489[_0x1c4087(0x19f)](_0x5dba69),a476_0x2da489[_0x1c4087(0x196)](_0x5dba69)];return computeFlyToLocationForRectangle[_0x1c4087(0x1a0)](_0x5779a4,_0xcc905)[_0x1c4087(0x19c)](function(_0x452c11){var _0x2dcd9b=_0x1c4087,_0x13ac6f=_0x452c11['reduce'](function(_0x844d05,_0x139648){return Math['max'](_0x139648['height'],_0x844d05);},-Number['MAX_VALUE']),_0x30ef34=_0x2396a8;return _0x30ef34[_0x2dcd9b(0x1a6)]+=_0x13ac6f,_0x30ef34;});});}computeFlyToLocationForRectangle['_sampleTerrainMostDetailed']=a476_0xdd553;export default computeFlyToLocationForRectangle;