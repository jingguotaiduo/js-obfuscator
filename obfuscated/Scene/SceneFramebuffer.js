var a716_0x1d215d=a716_0xb75f;(function(_0xe6cc5b,_0x4e21d1){var _0x14132d=a716_0xb75f,_0x56e02e=_0xe6cc5b();while(!![]){try{var _0x206c39=-parseInt(_0x14132d(0x112))/0x1+parseInt(_0x14132d(0x11c))/0x2+-parseInt(_0x14132d(0x102))/0x3*(-parseInt(_0x14132d(0x10b))/0x4)+-parseInt(_0x14132d(0x116))/0x5+-parseInt(_0x14132d(0x11a))/0x6+-parseInt(_0x14132d(0x109))/0x7+-parseInt(_0x14132d(0x10f))/0x8*(-parseInt(_0x14132d(0x108))/0x9);if(_0x206c39===_0x4e21d1)break;else _0x56e02e['push'](_0x56e02e['shift']());}catch(_0x3f3af4){_0x56e02e['push'](_0x56e02e['shift']());}}}(a716_0x1795,0x2d1da));import a716_0x39cdce from'../Core/Color.js';import a716_0x140c06 from'../Core/defined.js';import a716_0x6154e5 from'../Core/destroyObject.js';import a716_0x3a85e1 from'../Core/PixelFormat.js';import a716_0x48cd28 from'../Renderer/ClearCommand.js';import a716_0x57f8c1 from'../Renderer/Framebuffer.js';import a716_0x1745be from'../Renderer/PixelDatatype.js';import a716_0x1f1abb from'../Renderer/Renderbuffer.js';import a716_0x3d49e2 from'../Renderer/RenderbufferFormat.js';import a716_0x576e71 from'../Renderer/Sampler.js';function a716_0xb75f(_0x933d07,_0x3b5c65){var _0x17951a=a716_0x1795();return a716_0xb75f=function(_0xb75f63,_0x31eda4){_0xb75f63=_0xb75f63-0xfe;var _0x44361a=_0x17951a[_0xb75f63];return _0x44361a;},a716_0xb75f(_0x933d07,_0x3b5c65);}import a716_0x331e8e from'../Renderer/Texture.js';function SceneFramebuffer(){var _0x1c2b95=a716_0xb75f;this[_0x1c2b95(0x11e)]=undefined,this[_0x1c2b95(0x10c)]=undefined,this[_0x1c2b95(0x106)]=undefined,this[_0x1c2b95(0x11d)]=undefined,this[_0x1c2b95(0x119)]=undefined,this[_0x1c2b95(0xff)]=undefined,this[_0x1c2b95(0x122)]=new a716_0x39cdce(0x0,0x0,0x0,0x0),this[_0x1c2b95(0x10a)]=undefined,this['_clearCommand']=new a716_0x48cd28({'color':new a716_0x39cdce(0x0,0x0,0x0,0x0),'depth':0x1,'owner':this});}function a716_0x1795(){var _0x24754b=['_colorTexture','color','framebuffer','UNSIGNED_BYTE','_idClearColor','RGBA','clone','_depthStencilIdRenderbuffer','_idFramebuffer','height','NEAREST','1096263NVLMEK','DEPTH_STENCIL','width','isDestroyed','_depthStencilTexture','update','27KKmiQp','1765232fqIRmX','_useHdr','4ocFTQI','_idTexture','_clearCommand','UNSIGNED_INT_24_8','2419368XkLSVH','_depthStencilIdTexture','HALF_FLOAT','348113XERGyI','prototype','execute','getIdFramebuffer','1563100qoYgZV','FLOAT','destroy','_framebuffer','2066592aYLsLC','depthTexture','338902oKwGmn','_depthStencilRenderbuffer'];a716_0x1795=function(){return _0x24754b;};return a716_0x1795();}function destroyResources(_0x4177fa){var _0x5c2507=a716_0xb75f;_0x4177fa[_0x5c2507(0x119)]=_0x4177fa[_0x5c2507(0x119)]&&_0x4177fa[_0x5c2507(0x119)]['destroy'](),_0x4177fa[_0x5c2507(0xff)]=_0x4177fa[_0x5c2507(0xff)]&&_0x4177fa['_idFramebuffer'][_0x5c2507(0x118)](),_0x4177fa['_colorTexture']=_0x4177fa[_0x5c2507(0x11e)]&&_0x4177fa[_0x5c2507(0x11e)][_0x5c2507(0x118)](),_0x4177fa[_0x5c2507(0x10c)]=_0x4177fa['_idTexture']&&_0x4177fa[_0x5c2507(0x10c)]['destroy'](),_0x4177fa[_0x5c2507(0x106)]=_0x4177fa[_0x5c2507(0x106)]&&_0x4177fa[_0x5c2507(0x106)][_0x5c2507(0x118)](),_0x4177fa[_0x5c2507(0x11d)]=_0x4177fa['_depthStencilRenderbuffer']&&_0x4177fa[_0x5c2507(0x11d)][_0x5c2507(0x118)](),_0x4177fa[_0x5c2507(0x110)]=_0x4177fa['_depthStencilIdTexture']&&_0x4177fa[_0x5c2507(0x110)][_0x5c2507(0x118)](),_0x4177fa[_0x5c2507(0xfe)]=_0x4177fa[_0x5c2507(0xfe)]&&_0x4177fa[_0x5c2507(0xfe)][_0x5c2507(0x118)](),_0x4177fa[_0x5c2507(0x119)]=undefined,_0x4177fa['_idFramebuffer']=undefined,_0x4177fa[_0x5c2507(0x11e)]=undefined,_0x4177fa['_idTexture']=undefined,_0x4177fa[_0x5c2507(0x106)]=undefined,_0x4177fa[_0x5c2507(0x11d)]=undefined,_0x4177fa[_0x5c2507(0x110)]=undefined,_0x4177fa[_0x5c2507(0xfe)]=undefined;}SceneFramebuffer[a716_0x1d215d(0x113)][a716_0x1d215d(0x107)]=function(_0x2fc7a4,_0x52c31f,_0x1481a2){var _0x167da6=a716_0x1d215d,_0xf3aedf=_0x52c31f[_0x167da6(0x104)],_0x3999bd=_0x52c31f[_0x167da6(0x100)],_0xce9730=this[_0x167da6(0x11e)];if(a716_0x140c06(_0xce9730)&&_0xce9730[_0x167da6(0x104)]===_0xf3aedf&&_0xce9730[_0x167da6(0x100)]===_0x3999bd&&_0x1481a2===this[_0x167da6(0x10a)])return;destroyResources(this),this[_0x167da6(0x10a)]=_0x1481a2;var _0x1109e0=_0x1481a2?_0x2fc7a4['halfFloatingPointTexture']?a716_0x1745be[_0x167da6(0x111)]:a716_0x1745be[_0x167da6(0x117)]:a716_0x1745be[_0x167da6(0x121)];this['_colorTexture']=new a716_0x331e8e({'context':_0x2fc7a4,'width':_0xf3aedf,'height':_0x3999bd,'pixelFormat':a716_0x3a85e1[_0x167da6(0x123)],'pixelDatatype':_0x1109e0,'sampler':a716_0x576e71[_0x167da6(0x101)]}),this[_0x167da6(0x10c)]=new a716_0x331e8e({'context':_0x2fc7a4,'width':_0xf3aedf,'height':_0x3999bd,'pixelFormat':a716_0x3a85e1[_0x167da6(0x123)],'pixelDatatype':a716_0x1745be[_0x167da6(0x121)],'sampler':a716_0x576e71['NEAREST']}),_0x2fc7a4[_0x167da6(0x11b)]?(this[_0x167da6(0x106)]=new a716_0x331e8e({'context':_0x2fc7a4,'width':_0xf3aedf,'height':_0x3999bd,'pixelFormat':a716_0x3a85e1[_0x167da6(0x103)],'pixelDatatype':a716_0x1745be[_0x167da6(0x10e)],'sampler':a716_0x576e71[_0x167da6(0x101)]}),this[_0x167da6(0x110)]=new a716_0x331e8e({'context':_0x2fc7a4,'width':_0xf3aedf,'height':_0x3999bd,'pixelFormat':a716_0x3a85e1[_0x167da6(0x103)],'pixelDatatype':a716_0x1745be[_0x167da6(0x10e)],'sampler':a716_0x576e71[_0x167da6(0x101)]})):(this[_0x167da6(0x11d)]=new a716_0x1f1abb({'context':_0x2fc7a4,'width':_0xf3aedf,'height':_0x3999bd,'format':a716_0x3d49e2['DEPTH_STENCIL']}),this[_0x167da6(0xfe)]=new a716_0x1f1abb({'context':_0x2fc7a4,'width':_0xf3aedf,'height':_0x3999bd,'format':a716_0x3d49e2['DEPTH_STENCIL']})),this[_0x167da6(0x119)]=new a716_0x57f8c1({'context':_0x2fc7a4,'colorTextures':[this[_0x167da6(0x11e)]],'depthStencilTexture':this[_0x167da6(0x106)],'depthStencilRenderbuffer':this[_0x167da6(0x11d)],'destroyAttachments':![]}),this[_0x167da6(0xff)]=new a716_0x57f8c1({'context':_0x2fc7a4,'colorTextures':[this[_0x167da6(0x10c)]],'depthStencilTexture':this['_depthStencilIdTexture'],'depthStencilRenderbuffer':this['_depthStencilIdRenderbuffer'],'destroyAttachments':![]});},SceneFramebuffer['prototype']['clear']=function(_0x14e1fc,_0xbd54b2,_0x17ae06){var _0xf95b4=a716_0x1d215d,_0x35c929=_0xbd54b2[_0xf95b4(0x120)];_0xbd54b2[_0xf95b4(0x120)]=this[_0xf95b4(0x119)],a716_0x39cdce['clone'](_0x17ae06,this[_0xf95b4(0x10d)][_0xf95b4(0x11f)]),this[_0xf95b4(0x10d)][_0xf95b4(0x114)](_0x14e1fc,_0xbd54b2),_0xbd54b2[_0xf95b4(0x120)]=this[_0xf95b4(0xff)],a716_0x39cdce[_0xf95b4(0x124)](this[_0xf95b4(0x122)],this[_0xf95b4(0x10d)]['color']),this[_0xf95b4(0x10d)][_0xf95b4(0x114)](_0x14e1fc,_0xbd54b2),_0xbd54b2[_0xf95b4(0x120)]=_0x35c929;},SceneFramebuffer[a716_0x1d215d(0x113)]['getFramebuffer']=function(){var _0x5c8adb=a716_0x1d215d;return this[_0x5c8adb(0x119)];},SceneFramebuffer['prototype'][a716_0x1d215d(0x115)]=function(){return this['_idFramebuffer'];},SceneFramebuffer[a716_0x1d215d(0x113)][a716_0x1d215d(0x105)]=function(){return![];},SceneFramebuffer[a716_0x1d215d(0x113)][a716_0x1d215d(0x118)]=function(){return destroyResources(this),a716_0x6154e5(this);};export default SceneFramebuffer;