var a844_0x34ec29=a844_0x231d;(function(_0x55b92b,_0x1073e2){var _0x19e5d1=a844_0x231d,_0x573cbe=_0x55b92b();while(!![]){try{var _0x56c492=-parseInt(_0x19e5d1(0x1b0))/0x1+-parseInt(_0x19e5d1(0x1b4))/0x2*(parseInt(_0x19e5d1(0x1b3))/0x3)+parseInt(_0x19e5d1(0x1b7))/0x4+-parseInt(_0x19e5d1(0x1ad))/0x5*(parseInt(_0x19e5d1(0x1b5))/0x6)+-parseInt(_0x19e5d1(0x1b6))/0x7*(-parseInt(_0x19e5d1(0x1b8))/0x8)+-parseInt(_0x19e5d1(0x1b1))/0x9*(-parseInt(_0x19e5d1(0x1b2))/0xa)+parseInt(_0x19e5d1(0x1af))/0xb;if(_0x56c492===_0x1073e2)break;else _0x573cbe['push'](_0x573cbe['shift']());}catch(_0x19e426){_0x573cbe['push'](_0x573cbe['shift']());}}}(a844_0x27df,0xbb94d));function a844_0x27df(){var _0xabdf85=['1231487DvSXPt','9PnLJUb','8016370FYKlZk','2499HQRcap','1466tniQMc','18rAIuce','239806EmiWOx','3518948BuMmYa','304eSGZdn','2211610xWzCQE','vec2\x20cordic(float\x20angle)\x0a{\x0avec2\x20vector\x20=\x20vec2(6.0725293500888267e-1,\x200.0);\x0afloat\x20sense\x20=\x20(angle\x20<\x200.0)\x20?\x20-1.0\x20:\x201.0;\x0amat2\x20rotation\x20=\x20mat2(1.0,\x20sense,\x20-sense,\x201.0);\x0avector\x20=\x20rotation\x20*\x20vector;\x0aangle\x20-=\x20sense\x20*\x207.8539816339744828e-1;\x0asense\x20=\x20(angle\x20<\x200.0)\x20?\x20-1.0\x20:\x201.0;\x0afloat\x20factor\x20=\x20sense\x20*\x205.0e-1;\x0arotation[0][1]\x20=\x20factor;\x0arotation[1][0]\x20=\x20-factor;\x0avector\x20=\x20rotation\x20*\x20vector;\x0aangle\x20-=\x20sense\x20*\x204.6364760900080609e-1;\x0asense\x20=\x20(angle\x20<\x200.0)\x20?\x20-1.0\x20:\x201.0;\x0afactor\x20=\x20sense\x20*\x202.5e-1;\x0arotation[0][1]\x20=\x20factor;\x0arotation[1][0]\x20=\x20-factor;\x0avector\x20=\x20rotation\x20*\x20vector;\x0aangle\x20-=\x20sense\x20*\x202.4497866312686414e-1;\x0asense\x20=\x20(angle\x20<\x200.0)\x20?\x20-1.0\x20:\x201.0;\x0afactor\x20=\x20sense\x20*\x201.25e-1;\x0arotation[0][1]\x20=\x20factor;\x0arotation[1][0]\x20=\x20-factor;\x0avector\x20=\x20rotation\x20*\x20vector;\x0aangle\x20-=\x20sense\x20*\x201.2435499454676144e-1;\x0asense\x20=\x20(angle\x20<\x200.0)\x20?\x20-1.0\x20:\x201.0;\x0afactor\x20=\x20sense\x20*\x206.25e-2;\x0arotation[0][1]\x20=\x20factor;\x0arotation[1][0]\x20=\x20-factor;\x0avector\x20=\x20rotation\x20*\x20vector;\x0aangle\x20-=\x20sense\x20*\x206.2418809995957350e-2;\x0asense\x20=\x20(angle\x20<\x200.0)\x20?\x20-1.0\x20:\x201.0;\x0afactor\x20=\x20sense\x20*\x203.125e-2;\x0arotation[0][1]\x20=\x20factor;\x0arotation[1][0]\x20=\x20-factor;\x0avector\x20=\x20rotation\x20*\x20vector;\x0aangle\x20-=\x20sense\x20*\x203.1239833430268277e-2;\x0asense\x20=\x20(angle\x20<\x200.0)\x20?\x20-1.0\x20:\x201.0;\x0afactor\x20=\x20sense\x20*\x201.5625e-2;\x0arotation[0][1]\x20=\x20factor;\x0arotation[1][0]\x20=\x20-factor;\x0avector\x20=\x20rotation\x20*\x20vector;\x0aangle\x20-=\x20sense\x20*\x201.5623728620476831e-2;\x0asense\x20=\x20(angle\x20<\x200.0)\x20?\x20-1.0\x20:\x201.0;\x0afactor\x20=\x20sense\x20*\x207.8125e-3;\x0arotation[0][1]\x20=\x20factor;\x0arotation[1][0]\x20=\x20-factor;\x0avector\x20=\x20rotation\x20*\x20vector;\x0aangle\x20-=\x20sense\x20*\x207.8123410601011111e-3;\x0asense\x20=\x20(angle\x20<\x200.0)\x20?\x20-1.0\x20:\x201.0;\x0afactor\x20=\x20sense\x20*\x203.90625e-3;\x0arotation[0][1]\x20=\x20factor;\x0arotation[1][0]\x20=\x20-factor;\x0avector\x20=\x20rotation\x20*\x20vector;\x0aangle\x20-=\x20sense\x20*\x203.9062301319669718e-3;\x0asense\x20=\x20(angle\x20<\x200.0)\x20?\x20-1.0\x20:\x201.0;\x0afactor\x20=\x20sense\x20*\x201.953125e-3;\x0arotation[0][1]\x20=\x20factor;\x0arotation[1][0]\x20=\x20-factor;\x0avector\x20=\x20rotation\x20*\x20vector;\x0aangle\x20-=\x20sense\x20*\x201.9531225164788188e-3;\x0asense\x20=\x20(angle\x20<\x200.0)\x20?\x20-1.0\x20:\x201.0;\x0afactor\x20=\x20sense\x20*\x209.765625e-4;\x0arotation[0][1]\x20=\x20factor;\x0arotation[1][0]\x20=\x20-factor;\x0avector\x20=\x20rotation\x20*\x20vector;\x0aangle\x20-=\x20sense\x20*\x209.7656218955931946e-4;\x0asense\x20=\x20(angle\x20<\x200.0)\x20?\x20-1.0\x20:\x201.0;\x0afactor\x20=\x20sense\x20*\x204.8828125e-4;\x0arotation[0][1]\x20=\x20factor;\x0arotation[1][0]\x20=\x20-factor;\x0avector\x20=\x20rotation\x20*\x20vector;\x0aangle\x20-=\x20sense\x20*\x204.8828121119489829e-4;\x0asense\x20=\x20(angle\x20<\x200.0)\x20?\x20-1.0\x20:\x201.0;\x0afactor\x20=\x20sense\x20*\x202.44140625e-4;\x0arotation[0][1]\x20=\x20factor;\x0arotation[1][0]\x20=\x20-factor;\x0avector\x20=\x20rotation\x20*\x20vector;\x0aangle\x20-=\x20sense\x20*\x202.4414062014936177e-4;\x0asense\x20=\x20(angle\x20<\x200.0)\x20?\x20-1.0\x20:\x201.0;\x0afactor\x20=\x20sense\x20*\x201.220703125e-4;\x0arotation[0][1]\x20=\x20factor;\x0arotation[1][0]\x20=\x20-factor;\x0avector\x20=\x20rotation\x20*\x20vector;\x0aangle\x20-=\x20sense\x20*\x201.2207031189367021e-4;\x0asense\x20=\x20(angle\x20<\x200.0)\x20?\x20-1.0\x20:\x201.0;\x0afactor\x20=\x20sense\x20*\x206.103515625e-5;\x0arotation[0][1]\x20=\x20factor;\x0arotation[1][0]\x20=\x20-factor;\x0avector\x20=\x20rotation\x20*\x20vector;\x0aangle\x20-=\x20sense\x20*\x206.1035156174208773e-5;\x0asense\x20=\x20(angle\x20<\x200.0)\x20?\x20-1.0\x20:\x201.0;\x0afactor\x20=\x20sense\x20*\x203.0517578125e-5;\x0arotation[0][1]\x20=\x20factor;\x0arotation[1][0]\x20=\x20-factor;\x0avector\x20=\x20rotation\x20*\x20vector;\x0aangle\x20-=\x20sense\x20*\x203.0517578115526096e-5;\x0asense\x20=\x20(angle\x20<\x200.0)\x20?\x20-1.0\x20:\x201.0;\x0afactor\x20=\x20sense\x20*\x201.52587890625e-5;\x0arotation[0][1]\x20=\x20factor;\x0arotation[1][0]\x20=\x20-factor;\x0avector\x20=\x20rotation\x20*\x20vector;\x0aangle\x20-=\x20sense\x20*\x201.5258789061315762e-5;\x0asense\x20=\x20(angle\x20<\x200.0)\x20?\x20-1.0\x20:\x201.0;\x0afactor\x20=\x20sense\x20*\x207.62939453125e-6;\x0arotation[0][1]\x20=\x20factor;\x0arotation[1][0]\x20=\x20-factor;\x0avector\x20=\x20rotation\x20*\x20vector;\x0aangle\x20-=\x20sense\x20*\x207.6293945311019700e-6;\x0asense\x20=\x20(angle\x20<\x200.0)\x20?\x20-1.0\x20:\x201.0;\x0afactor\x20=\x20sense\x20*\x203.814697265625e-6;\x0arotation[0][1]\x20=\x20factor;\x0arotation[1][0]\x20=\x20-factor;\x0avector\x20=\x20rotation\x20*\x20vector;\x0aangle\x20-=\x20sense\x20*\x203.8146972656064961e-6;\x0asense\x20=\x20(angle\x20<\x200.0)\x20?\x20-1.0\x20:\x201.0;\x0afactor\x20=\x20sense\x20*\x201.9073486328125e-6;\x0arotation[0][1]\x20=\x20factor;\x0arotation[1][0]\x20=\x20-factor;\x0avector\x20=\x20rotation\x20*\x20vector;\x0aangle\x20-=\x20sense\x20*\x201.9073486328101870e-6;\x0asense\x20=\x20(angle\x20<\x200.0)\x20?\x20-1.0\x20:\x201.0;\x0afactor\x20=\x20sense\x20*\x209.5367431640625e-7;\x0arotation[0][1]\x20=\x20factor;\x0arotation[1][0]\x20=\x20-factor;\x0avector\x20=\x20rotation\x20*\x20vector;\x0aangle\x20-=\x20sense\x20*\x209.5367431640596084e-7;\x0asense\x20=\x20(angle\x20<\x200.0)\x20?\x20-1.0\x20:\x201.0;\x0afactor\x20=\x20sense\x20*\x204.76837158203125e-7;\x0arotation[0][1]\x20=\x20factor;\x0arotation[1][0]\x20=\x20-factor;\x0avector\x20=\x20rotation\x20*\x20vector;\x0aangle\x20-=\x20sense\x20*\x204.7683715820308884e-7;\x0asense\x20=\x20(angle\x20<\x200.0)\x20?\x20-1.0\x20:\x201.0;\x0afactor\x20=\x20sense\x20*\x202.384185791015625e-7;\x0arotation[0][1]\x20=\x20factor;\x0arotation[1][0]\x20=\x20-factor;\x0avector\x20=\x20rotation\x20*\x20vector;\x0aangle\x20-=\x20sense\x20*\x202.3841857910155797e-7;\x0asense\x20=\x20(angle\x20<\x200.0)\x20?\x20-1.0\x20:\x201.0;\x0afactor\x20=\x20sense\x20*\x201.1920928955078125e-7;\x0arotation[0][1]\x20=\x20factor;\x0arotation[1][0]\x20=\x20-factor;\x0avector\x20=\x20rotation\x20*\x20vector;\x0areturn\x20vector;\x0a}\x0avec2\x20czm_cosineAndSine(float\x20angle)\x0a{\x0aif\x20(angle\x20<\x20-czm_piOverTwo\x20||\x20angle\x20>\x20czm_piOverTwo)\x0a{\x0aif\x20(angle\x20<\x200.0)\x0a{\x0areturn\x20-cordic(angle\x20+\x20czm_pi);\x0a}\x0aelse\x0a{\x0areturn\x20-cordic(angle\x20-\x20czm_pi);\x0a}\x0a}\x0aelse\x0a{\x0areturn\x20cordic(angle);\x0a}\x0a}\x0a','10496167pnNesI'];a844_0x27df=function(){return _0xabdf85;};return a844_0x27df();}function a844_0x231d(_0x23fe60,_0x4cbf08){var _0x27dfc2=a844_0x27df();return a844_0x231d=function(_0x231df6,_0x1a28b4){_0x231df6=_0x231df6-0x1ad;var _0xc559e7=_0x27dfc2[_0x231df6];return _0xc559e7;},a844_0x231d(_0x23fe60,_0x4cbf08);}export default a844_0x34ec29(0x1ae);