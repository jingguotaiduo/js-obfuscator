function a965_0x37a6(){var _0x2b7205=['1933640xcFAie','1rQsCiK','829714oukUWH','17220tqTcri','11028soCkAh','8849862nHBUlZ','1484cxhYTB','472008qmOJfv','156700kvuhGx'];a965_0x37a6=function(){return _0x2b7205;};return a965_0x37a6();}function a965_0x46aa(_0x5e5f77,_0x5d0026){var _0x37a607=a965_0x37a6();return a965_0x46aa=function(_0x46aafa,_0x1496f0){_0x46aafa=_0x46aafa-0x83;var _0x4d759f=_0x37a607[_0x46aafa];return _0x4d759f;},a965_0x46aa(_0x5e5f77,_0x5d0026);}(function(_0x12e108,_0x2f0c8b){var _0xd3f615=a965_0x46aa,_0x5945ad=_0x12e108();while(!![]){try{var _0x371ed2=parseInt(_0xd3f615(0x84))/0x1*(parseInt(_0xd3f615(0x85))/0x2)+-parseInt(_0xd3f615(0x86))/0x3+parseInt(_0xd3f615(0x83))/0x4+parseInt(_0xd3f615(0x8b))/0x5+-parseInt(_0xd3f615(0x87))/0x6*(-parseInt(_0xd3f615(0x89))/0x7)+-parseInt(_0xd3f615(0x8a))/0x8+-parseInt(_0xd3f615(0x88))/0x9;if(_0x371ed2===_0x2f0c8b)break;else _0x5945ad['push'](_0x5945ad['shift']());}catch(_0x52bf86){_0x5945ad['push'](_0x5945ad['shift']());}}}(a965_0x37a6,0x42364));export default'varying\x20vec2\x20v_textureCoordinates;\x0auniform\x20float\x20originalSize;\x0auniform\x20sampler2D\x20texture0;\x0auniform\x20sampler2D\x20texture1;\x0auniform\x20sampler2D\x20texture2;\x0auniform\x20sampler2D\x20texture3;\x0auniform\x20sampler2D\x20texture4;\x0auniform\x20sampler2D\x20texture5;\x0aconst\x20float\x20yMipLevel1\x20=\x201.0\x20-\x20(1.0\x20/\x20pow(2.0,\x201.0));\x0aconst\x20float\x20yMipLevel2\x20=\x201.0\x20-\x20(1.0\x20/\x20pow(2.0,\x202.0));\x0aconst\x20float\x20yMipLevel3\x20=\x201.0\x20-\x20(1.0\x20/\x20pow(2.0,\x203.0));\x0aconst\x20float\x20yMipLevel4\x20=\x201.0\x20-\x20(1.0\x20/\x20pow(2.0,\x204.0));\x0avoid\x20main()\x0a{\x0avec2\x20uv\x20=\x20v_textureCoordinates;\x0avec2\x20textureSize\x20=\x20vec2(originalSize\x20*\x201.5\x20+\x202.0,\x20originalSize);\x0avec2\x20pixel\x20=\x201.0\x20/\x20textureSize;\x0afloat\x20mipLevel\x20=\x200.0;\x0aif\x20(uv.x\x20-\x20pixel.x\x20>\x20(textureSize.y\x20/\x20textureSize.x))\x0a{\x0amipLevel\x20=\x201.0;\x0aif\x20(uv.y\x20-\x20pixel.y\x20>\x20yMipLevel1)\x0a{\x0amipLevel\x20=\x202.0;\x0aif\x20(uv.y\x20-\x20pixel.y\x20*\x203.0\x20>\x20yMipLevel2)\x0a{\x0amipLevel\x20=\x203.0;\x0aif\x20(uv.y\x20-\x20pixel.y\x20*\x205.0\x20>\x20yMipLevel3)\x0a{\x0amipLevel\x20=\x204.0;\x0aif\x20(uv.y\x20-\x20pixel.y\x20*\x207.0\x20>\x20yMipLevel4)\x0a{\x0amipLevel\x20=\x205.0;\x0a}\x0a}\x0a}\x0a}\x0a}\x0aif\x20(mipLevel\x20>\x200.0)\x0a{\x0afloat\x20scale\x20=\x20pow(2.0,\x20mipLevel);\x0auv.y\x20-=\x20(pixel.y\x20*\x20(mipLevel\x20-\x201.0)\x20*\x202.0);\x0auv.x\x20*=\x20((textureSize.x\x20-\x202.0)\x20/\x20textureSize.y);\x0auv.x\x20-=\x201.0\x20+\x20pixel.x;\x0auv.y\x20-=\x20(1.0\x20-\x20(1.0\x20/\x20pow(2.0,\x20mipLevel\x20-\x201.0)));\x0auv\x20*=\x20scale;\x0a}\x0aelse\x0a{\x0auv.x\x20*=\x20(textureSize.x\x20/\x20textureSize.y);\x0a}\x0aif(mipLevel\x20==\x200.0)\x0a{\x0agl_FragColor\x20=\x20texture2D(texture0,\x20uv);\x0a}\x0aelse\x20if(mipLevel\x20==\x201.0)\x0a{\x0agl_FragColor\x20=\x20texture2D(texture1,\x20uv);\x0a}\x0aelse\x20if(mipLevel\x20==\x202.0)\x0a{\x0agl_FragColor\x20=\x20texture2D(texture2,\x20uv);\x0a}\x0aelse\x20if(mipLevel\x20==\x203.0)\x0a{\x0agl_FragColor\x20=\x20texture2D(texture3,\x20uv);\x0a}\x0aelse\x20if(mipLevel\x20==\x204.0)\x0a{\x0agl_FragColor\x20=\x20texture2D(texture4,\x20uv);\x0a}\x0aelse\x20if(mipLevel\x20==\x205.0)\x0a{\x0agl_FragColor\x20=\x20texture2D(texture5,\x20uv);\x0a}\x0aelse\x0a{\x0agl_FragColor\x20=\x20vec4(0.0);\x0a}\x0a}\x0a';