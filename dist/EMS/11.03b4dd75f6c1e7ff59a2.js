(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"0KVQ":function(e,t){e.exports='<body class="loginbknd">\r\n    <div class="container">\r\n      <div class="row">\r\n          <div class="col-md-12">\r\n        \r\n          <div class="loginbg">\r\n                <h1 class="login-fnt">Examination Management System</h1>\r\n                \x3c!-- <h3 style="text-align: center">Login Here</h3> --\x3e\r\n\r\n              <div class="pr-wrap">\r\n                  <div class="pass-reset">\r\n                      <label>\r\n                          Enter the email you signed up with</label>\r\n                      <input type="email" placeholder="Email" />\r\n                      <input type="submit" value="Submit" class="pass-reset-submit btn btn-success btn-sm" />\r\n                  </div>\r\n              </div>\r\n              <div>\r\n                  <p class="form-title"><img style="width:150px;height:150px;" src="../assets/images/logo.png"></p>\r\n                  <form class="login" #f="ngForm" (ngSubmit)="loginuser(f)">\r\n                      <div>\r\n                  <input type="email" autofocus placeholder="Email" #unameControl="ngModel" name="uname" required [(ngModel)]="uname"  [email]="true"/>\r\n                  <div style="color:red;" class="help-block" *ngIf="unameControl.invalid && (unameControl.dirty)">\r\n                        <div *ngIf="unameControl.errors?.required" >\r\n                          Email is required\r\n                        </div>\r\n                        <div *ngIf="unameControl.errors?.email && !(unameControl.errors?.required)">Email must be valid</div>\r\n                      </div>  \r\n                </div>\r\n                  <div>\r\n                  <input type="password" placeholder="Password" required #passwordControl="ngModel" name="password" [(ngModel)]="password"/>\r\n                   <span style="color:red;" class="help-block" *ngIf="passwordControl.errors?.required && passwordControl.touched">\r\n                                      Password is required\r\n                                  </span>\r\n                </div>\r\n                \x3c!-- <re-captcha  (resolved)="resolved($event)" siteKey="6Ld2yJ0UAAAAAOgSrq-bVN35QQV0r52fcocnrNJ-"></re-captcha> --\x3e\r\n                \x3c!-- <ngx-invisible-recaptcha #captchaElem\r\n                [siteKey]="siteKey"\r\n                (reset)="handleReset()"\r\n                (ready)="handleReady()"\r\n                (load)="handleLoad()"\r\n                (success)="handleSuccess($event)"\r\n                [useGlobalDomain]="false"\r\n                [type]="type"\r\n                [badge]="badge"\r\n                [ngModel]="recaptcha"\r\n                [ngModelOptions]="{ standalone: true }">\r\n              </ngx-invisible-recaptcha> --\x3e\r\n                 \r\n                \r\n                <div  *ngIf="isError" class="red-text center error-message" style="text-align: center;font-size: 15px;color:red;">\r\n                        *Invalid Email or Password\r\n                        </div>\r\n                        <div  *ngIf="isError1" class="red-text center error-message" style="text-align: center;font-size: 15px;color:red;">\r\n                          *Internal Server Error\r\n                          </div>\r\n                        <div  *ngIf="errMsg" class="red-text center error-message" style="text-align: center;font-size: 15px;color:red;">\r\n                          Please fill valid data in the required fields\r\n                          </div>\r\n                  <input type="submit" value="Sign In" class="btn btn-success btn-sm" />\r\n                  <div class="remember-forgot">\r\n                      <div class="row">\r\n                          <div class="col-md-6 col-sm-6 col-xs-6">\r\n                              \x3c!-- <div class="checkbox">\r\n                                  <label>\r\n                                      <input type="checkbox" />\r\n                                      Remember Me\r\n                                  </label>\r\n                              </div> --\x3e\r\n                          </div>\r\n                          <div class="col-md-6 col-sm-6 col-xs-6 forgot-pass-content">\r\n                              <a href="#/forgot" class="forgot-pass">Forgot Password?</a>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                  </form>\r\n              </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n           \r\n       \r\n  \r\n     \r\n\r\n    </body>\r\n          \x3c!-- Modal section Starts --\x3e\r\n <div class="container">\r\n        \r\n    <div class="modal fade" id="myModal" role="dialog" >\r\n        <div class="modal-dialog" style="margin-top:37vh">\r\n\r\n            \x3c!-- Modal content--\x3e\r\n            <div class="modal-content">\r\n            \r\n                <div *ngIf="ems.status==\'Success\'" class="modal-header" style="background-color: rgb(109, 212, 61);">\r\n                    <button type="button" class="close"  data-dismiss="modal" style="opacity: 1;color: #ffff;">&times;</button>\r\n                    <h4 class="modal-title" style="color: white;">{{ems.status}}</h4>\r\n                </div>\r\n                <div *ngIf="ems.status!=\'Success\'" class="modal-header" style="background-color: rgb(230, 67, 55);">\r\n                      <button type="button" class="close"  data-dismiss="modal" style="opacity: 1;color: #ffff;">&times;</button>\r\n                      <h4 class="modal-title" style="color: white;">{{ems.status}}</h4>\r\n                  </div>\r\n                <div class="modal-body">\r\n\r\n                   \r\n                    \r\n                   \r\n                        \r\n                      \x3c!-- <label>Email:<strong style="color:red;">*</strong></label>  --\x3e\r\n                    \r\n                    <p class="succes-fnt">{{ems.msg}}</p>\r\n                    <div class="text-center align-center">\r\n                         <input class="succes-btn btn btn-primary btn-sm"  data-dismiss="modal"  type="submit" value="OK" />\r\n                     </div>\r\n                    \r\n                </div>\r\n                \r\n                \x3c!-- <div class="modal-footer">\r\n                    <div class="row">\r\n                        <div>\r\n                            <a (click)="forgot()" style="cursor:pointer;" >\r\n                                <p class="forgot-pw">Forgot Password?</p>\r\n                            </a>\r\n                        </div>\r\n                        <div class="register">\r\n\r\n                            <span style="color: grey;">Don\'t&nbsp;Have&nbsp;an&nbsp;Account?</span>\r\n\r\n                            <a  (click)="register()" style="cursor:pointer;">\r\n                                <span class="register-clr" >Register Now</span>\r\n                            </a>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div> --\x3e\r\n            \r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\x3c!-- Modal section ends --\x3e\r\n\r\n\r\n\x3c!-- <script src="https://www.google.com/recaptcha/api.js?render=v3_site_key"><\/script>\r\n<script>\r\n  grecaptcha.ready(() => {\r\n    grecaptcha.render(\'html_element\', {\r\n       \'sitekey\' : \'v2_site_key\'\r\n    });\r\n  });\r\n<\/script>\r\n<script>\r\n  function onSubmit() {\r\n    grecaptcha.ready(() => {\r\n        grecaptcha.execute(\'v3_site_key\', {action: \'homepage\'}).then((token) => {\r\n           \r\n        });\r\n    });\r\n  }\r\n<\/script> --\x3e'},"15PL":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("CcnG"),a=r("p4DR"),o=r("wrqk"),i=0,s=function(){function e(e,t,r,a){this.elementRef=e,this.loader=t,this.zone=r,this.id="ngrecaptcha-"+i++,this.resolved=new n.EventEmitter,a&&(this.siteKey=a.siteKey,this.theme=a.theme,this.type=a.type,this.size=a.size,this.badge=a.badge)}return e.prototype.ngAfterViewInit=function(){var e=this;this.subscription=this.loader.ready.subscribe(function(t){null!=t&&t.render instanceof Function&&(e.grecaptcha=t,e.renderRecaptcha())})},e.prototype.ngOnDestroy=function(){this.grecaptchaReset(),this.subscription&&this.subscription.unsubscribe()},e.prototype.execute=function(){"invisible"===this.size&&(null!=this.widget?this.grecaptcha.execute(this.widget):this.executeRequested=!0)},e.prototype.reset=function(){null!=this.widget&&(this.grecaptcha.getResponse(this.widget)&&this.resolved.emit(null),this.grecaptchaReset())},e.prototype.expired=function(){this.resolved.emit(null)},e.prototype.captchaResponseCallback=function(e){this.resolved.emit(e)},e.prototype.grecaptchaReset=function(){var e=this;null!=this.widget&&this.zone.runOutsideAngular(function(){return e.grecaptcha.reset(e.widget)})},e.prototype.renderRecaptcha=function(){var e=this;this.widget=this.grecaptcha.render(this.elementRef.nativeElement,{badge:this.badge,callback:function(t){e.zone.run(function(){return e.captchaResponseCallback(t)})},"expired-callback":function(){e.zone.run(function(){return e.expired()})},sitekey:this.siteKey,size:this.size,tabindex:this.tabIndex,theme:this.theme,type:this.type}),!0===this.executeRequested&&(this.executeRequested=!1,this.execute())},e.decorators=[{type:n.Component,args:[{exportAs:"reCaptcha",selector:"re-captcha",template:""}]}],e.ctorParameters=function(){return[{type:n.ElementRef},{type:a.RecaptchaLoaderService},{type:n.NgZone},{type:void 0,decorators:[{type:n.Optional},{type:n.Inject,args:[o.RECAPTCHA_SETTINGS]}]}]},e.propDecorators={id:[{type:n.Input},{type:n.HostBinding,args:["attr.id"]}],siteKey:[{type:n.Input}],theme:[{type:n.Input}],type:[{type:n.Input}],size:[{type:n.Input}],tabIndex:[{type:n.Input}],badge:[{type:n.Input}],resolved:[{type:n.Output}]},e}();t.RecaptchaComponent=s},"9cOK":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("15PL");t.RecaptchaComponent=n.RecaptchaComponent;var a=r("p4DR");t.RecaptchaLoaderService=a.RecaptchaLoaderService,t.RECAPTCHA_LANGUAGE=a.RECAPTCHA_LANGUAGE,t.RECAPTCHA_BASE_URL=a.RECAPTCHA_BASE_URL,t.RECAPTCHA_NONCE=a.RECAPTCHA_NONCE;var o=r("uOf+");t.RecaptchaModule=o.RecaptchaModule;var i=r("wrqk");t.RECAPTCHA_SETTINGS=i.RECAPTCHA_SETTINGS},WH67:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("CcnG"),a=r("15PL"),o=function(){function e(){}return e.decorators=[{type:n.NgModule,args:[{declarations:[a.RecaptchaComponent],exports:[a.RecaptchaComponent]}]}],e}();t.RecaptchaCommonModule=o},X3zk:function(e,t,r){"use strict";r.r(t);var n=r("mrSG"),a=r("CcnG"),o=r("qmRI"),i=r("YNg7"),s=r("ZYCi"),c=r("gIcY"),p=r("Ip0R"),l=function(){function e(e,t,r,n){this.renderer=e,this.zone=t,this.injector=r,this.scriptService=n,this.captchaElemPrefix="ngx_captcha_id_",this.useGlobalDomain=!1,this.type="image",this.tabIndex=0,this.success=new a.EventEmitter,this.load=new a.EventEmitter,this.reset=new a.EventEmitter,this.ready=new a.EventEmitter,this.error=new a.EventEmitter,this.expire=new a.EventEmitter,this.setupAfterLoad=!1,this.resetCaptchaAfterSuccess=!1,this.isLoaded=!1}return e.prototype.ngAfterViewInit=function(){this.control=this.injector.get(c.NgControl).control},e.prototype.ngOnChanges=function(e){e&&e.hl&&(e.hl.firstChange||e.hl.currentValue===e.hl.previousValue||this.scriptService.cleanup()),e&&e.useGlobalDomain&&(e.useGlobalDomain.firstChange||e.useGlobalDomain.currentValue===e.useGlobalDomain.previousValue||this.scriptService.cleanup()),this.setupComponent()},e.prototype.getResponse=function(){return this.reCaptchaApi.getResponse(this.captchaId)},e.prototype.getCaptchaId=function(){return this.captchaId},e.prototype.resetCaptcha=function(){var e=this;this.zone.run(function(){e.reCaptchaApi.reset(),e.onChange(void 0),e.onTouched(void 0),e.reset.next()})},e.prototype.getCurrentResponse=function(){return this.currentResponse},e.prototype.reloadCaptcha=function(){this.setupComponent()},e.prototype.ensureCaptchaElem=function(e){var t=document.getElementById(e);if(!t)throw Error("Captcha element with id '"+e+"' was not found");this.captchaElem=t},e.prototype.renderReCaptcha=function(){var e=this;this.zone.runOutsideAngular(function(){e.captchaId=e.reCaptchaApi.render(e.captchaElemId,e.getCaptchaProperties()),e.ready.next()})},e.prototype.handleCallback=function(e){var t=this;this.currentResponse=e,this.success.next(e),this.zone.run(function(){t.onChange(e),t.onTouched(e)}),this.resetCaptchaAfterSuccess&&this.resetCaptcha()},e.prototype.getPseudoUniqueNumber=function(){return(new Date).getUTCMilliseconds()+Math.floor(9999*Math.random())},e.prototype.setupComponent=function(){var e=this;this.captchaSpecificSetup(),this.createAndSetCaptchaElem(),this.scriptService.registerCaptchaScript(this.useGlobalDomain,"explicit",function(t){e.onloadCallback(t)},this.hl)},e.prototype.onloadCallback=function(e){if(this.reCaptchaApi=e,!this.reCaptchaApi)throw Error("ReCaptcha Api was not initialized correctly");this.isLoaded=!0,this.load.next(),this.renderReCaptcha(),this.setupAfterLoad&&(this.setupAfterLoad=!1,this.setupComponent())},e.prototype.generateNewElemId=function(){return this.captchaElemPrefix+this.getPseudoUniqueNumber()},e.prototype.createAndSetCaptchaElem=function(){if(this.captchaElemId=this.generateNewElemId(),!this.captchaElemId)throw Error("Captcha elem Id is not set");this.captchaWrapperElem.nativeElement.innerHTML="";var e=this.renderer.createElement("div");e.id=this.captchaElemId,this.renderer.appendChild(this.captchaWrapperElem.nativeElement,e),this.ensureCaptchaElem(this.captchaElemId)},e.prototype.writeValue=function(e){},e.prototype.registerOnChange=function(e){this.onChange=e},e.prototype.registerOnTouched=function(e){this.onTouched=e},e.prototype.handleErrorCallback=function(){var e=this;this.zone.run(function(){e.onChange(void 0),e.onTouched(void 0)}),this.error.next()},e.prototype.handleExpireCallback=function(){this.expire.next(),this.resetCaptcha()},e.propDecorators={siteKey:[{type:a.Input}],useGlobalDomain:[{type:a.Input}],type:[{type:a.Input}],hl:[{type:a.Input}],tabIndex:[{type:a.Input}],success:[{type:a.Output}],load:[{type:a.Output}],reset:[{type:a.Output}],ready:[{type:a.Output}],error:[{type:a.Output}],expire:[{type:a.Output}],captchaWrapperElem:[{type:a.ViewChild,args:["captchaWrapperElem"]}],captchaScriptElem:[{type:a.ViewChild,args:["captchaScriptElem"]}]},e}(),d={InvisibleReCaptcha:0,ReCaptcha2:1};d[d.InvisibleReCaptcha]="InvisibleReCaptcha",d[d.ReCaptcha2]="ReCaptcha2";var u=function(){function e(e){this.zone=e,this.windowGrecaptcha="grecaptcha",this.windowOnLoadCallbackProperty="ngx_captcha_onload_callback",this.globalDomain="recaptcha.net",this.defaultDomain="google.com"}return e.prototype.registerCaptchaScript=function(e,t,r,n){var a=this;if(this.grecaptchaScriptLoaded())this.zone.run(function(){r(window[a.windowGrecaptcha])});else{window[this.windowOnLoadCallbackProperty]=function(){return a.zone.run(r.bind(a,window[a.windowGrecaptcha]))};var o=document.createElement("script");o.innerHTML="",o.src=this.getCaptchaScriptUrl(e,t,n),o.async=!0,o.defer=!0,document.getElementsByTagName("head")[0].appendChild(o)}},e.prototype.cleanup=function(){window[this.windowOnLoadCallbackProperty]=void 0,window[this.windowGrecaptcha]=void 0},e.prototype.grecaptchaScriptLoaded=function(){return!(!window[this.windowOnLoadCallbackProperty]||!window[this.windowGrecaptcha])},e.prototype.getLanguageParam=function(e){return e?"&hl="+e:""},e.prototype.getCaptchaScriptUrl=function(e,t,r){return"https://www."+(e?this.globalDomain:this.defaultDomain)+"/recaptcha/api.js?onload="+this.windowOnLoadCallbackProperty+"&render="+t+this.getLanguageParam(r)},e.decorators=[{type:a.Injectable}],e.ctorParameters=function(){return[{type:a.NgZone}]},e}(),h=function(e){function t(t,r,n,a){var o=e.call(this,t,r,n,a)||this;return o.renderer=t,o.zone=r,o.injector=n,o.scriptService=a,o.size="invisible",o.theme="light",o.badge="bottomright",o.recaptchaType=d.InvisibleReCaptcha,o}return Object(n.c)(t,e),t.prototype.ngOnChanges=function(t){e.prototype.ngOnChanges.call(this,t)},t.prototype.execute=function(){var e=this;this.zone.runOutsideAngular(function(){return e.reCaptchaApi.execute(e.captchaId)})},t.prototype.captchaSpecificSetup=function(){},t.prototype.getCaptchaProperties=function(){var e=this;return{sitekey:this.siteKey,callback:function(t){return e.zone.run(function(){return e.handleCallback(t)})},"expired-callback":function(){return e.zone.run(function(){return e.handleExpireCallback()})},"error-callback":function(){return e.zone.run(function(){return e.handleErrorCallback()})},badge:this.badge,type:this.type,tabindex:this.tabIndex,size:this.size,theme:this.theme}},t.decorators=[{type:a.Component,args:[{selector:"ngx-invisible-recaptcha",template:"\n  <div #captchaWrapperElem></div>",providers:[{provide:c.NG_VALUE_ACCESSOR,useExisting:Object(a.forwardRef)(function(){return t}),multi:!0}]}]}],t.ctorParameters=function(){return[{type:a.Renderer2},{type:a.NgZone},{type:a.Injector},{type:u}]},t.propDecorators={theme:[{type:a.Input}],badge:[{type:a.Input}],hl:[{type:a.Input}]},t}(l),g=function(e){function t(t,r,n,a){var o=e.call(this,t,r,n,a)||this;return o.renderer=t,o.zone=r,o.injector=n,o.scriptService=a,o.windowOnErrorCallbackProperty="ngx_captcha_error_callback",o.windowOnExpireCallbackProperty="ngx_captcha_expire_callback",o.theme="light",o.size="normal",o.recaptchaType=d.ReCaptcha2,o}return Object(n.c)(t,e),t.prototype.ngOnChanges=function(t){e.prototype.ngOnChanges.call(this,t)},t.prototype.ngOnDestroy=function(){window[this.windowOnErrorCallbackProperty]={},window[this.windowOnExpireCallbackProperty]={}},t.prototype.captchaSpecificSetup=function(){this.registerCallbacks()},t.prototype.getCaptchaProperties=function(){var e=this;return{sitekey:this.siteKey,callback:function(t){return e.zone.run(function(){return e.handleCallback(t)})},"expired-callback":function(){return e.zone.run(function(){return e.handleExpireCallback()})},"error-callback":function(){return e.zone.run(function(){return e.handleErrorCallback()})},theme:this.theme,type:this.type,size:this.size,tabindex:this.tabIndex}},t.prototype.registerCallbacks=function(){window[this.windowOnErrorCallbackProperty]=e.prototype.handleErrorCallback.bind(this),window[this.windowOnExpireCallbackProperty]=e.prototype.handleExpireCallback.bind(this)},t.decorators=[{type:a.Component,args:[{selector:"ngx-recaptcha2",template:"\n  <div #captchaWrapperElem></div>",providers:[{provide:c.NG_VALUE_ACCESSOR,useExisting:Object(a.forwardRef)(function(){return t}),multi:!0}]}]}],t.ctorParameters=function(){return[{type:a.Renderer2},{type:a.NgZone},{type:a.Injector},{type:u}]},t.propDecorators={theme:[{type:a.Input}],size:[{type:a.Input}],hl:[{type:a.Input}]},t}(l),m=function(){function e(e,t){this.scriptService=e,this.zone=t}return e.prototype.execute=function(e,t,r,n){var a=this,o=!(!n||!n.useGlobalDomain);this.scriptService.registerCaptchaScript(o,e,function(n){a.zone.runOutsideAngular(function(){n.execute(e,{action:t}).then(function(e){a.zone.run(function(){return r(e)})})})})},e.decorators=[{type:a.Injectable}],e.ctorParameters=function(){return[{type:u},{type:a.NgZone}]},e}(),y=function(){function e(){}return e.decorators=[{type:a.NgModule,args:[{imports:[p.CommonModule],declarations:[g,h],providers:[u,m],exports:[g,h]}]}],e}(),f=function(){function e(e,t,r,n){this.ems=e,this.EncrDecr=t,this.router=r,this.reCaptchaV3Service=n,this.isError1=!1,this.errMsg=!1,this.isError=!1,this.siteKey="6Ldixp0UAAAAAHciWyAZFK5u4jtYB1LvQ0REHRvB",this.isCaptche=!1}return e.prototype.ngOnInit=function(){this.ems.forgot&&(this.ems.status="Success",this.ems.msg="Password has been successfully changed Please login",$("#myModal").modal("show"),this.ems.forgot=!1)},e.prototype.loginuser=function(e){var t=this;this.errMsg=!1,this.isError=!1,this.isError1=!1,e.invalid?this.errMsg=!0:(this.errMsg=!1,this.password1=this.password,this.ems.login(this.uname,this.password1).subscribe(function(r){"Success"==r.status?(localStorage.setItem("sessionid",r.data.session_token),localStorage.setItem("uid",r.data.user_id),localStorage.setItem("role",r.data.role_name),localStorage.setItem("cen_id",r.data.cen_id),localStorage.setItem("username",r.data.user_name),localStorage.setItem("permission",r.data.action_list),t.router.navigate(["app/dashboard"])):"Fail"==r.status&&"Invalid id"==r.message?(t.isError=!0,e.reset()):(t.isError1=!0,e.reset())},function(r){t.isError1=!0,e.reset()}))},e=n.b([Object(a.Component)({selector:"app-login",template:r("0KVQ"),styles:[r("n7sk")]}),n.d("design:paramtypes",[o.a,i.a,s.Router,m])],e)}(),v=r("9cOK");r.d(t,"routes",function(){return b}),r.d(t,"LoginModule",function(){return C});var b=[{path:"",component:f,pathMatch:"full"}],C=function(){function e(){}return e.routes=b,e=n.b([Object(a.NgModule)({imports:[p.CommonModule,s.RouterModule.forChild(b),c.FormsModule,y,v.RecaptchaModule],declarations:[f],providers:[],bootstrap:[f]})],e)}()},n7sk:function(e,t){e.exports=""},p4DR:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("Ip0R"),a=r("CcnG"),o=r("DtyJ");t.RECAPTCHA_LANGUAGE=new a.InjectionToken("recaptcha-language"),t.RECAPTCHA_BASE_URL=new a.InjectionToken("recaptcha-base-url"),t.RECAPTCHA_NONCE=new a.InjectionToken("recaptcha-nonce-tag");var i=function(){function e(t,r,a,i){this.platformId=t,this.language=r,this.baseUrl=a,this.nonce=i,this.init(),this.ready=n.isPlatformBrowser(this.platformId)?e.ready.asObservable():o.of()}return e.prototype.init=function(){if(!e.ready&&n.isPlatformBrowser(this.platformId)){window.ng2recaptchaloaded=function(){e.ready.next(grecaptcha)},e.ready=new o.BehaviorSubject(null);var t=document.createElement("script");t.innerHTML="";var r=this.language?"&hl="+this.language:"",a=this.baseUrl||"https://www.google.com/recaptcha/api.js";t.src=a+"?render=explicit&onload=ng2recaptchaloaded"+r,this.nonce&&(t.nonce=this.nonce),t.async=!0,t.defer=!0,document.head.appendChild(t)}},e.ready=null,e.decorators=[{type:a.Injectable}],e.ctorParameters=function(){return[{type:void 0,decorators:[{type:a.Inject,args:[a.PLATFORM_ID]}]},{type:void 0,decorators:[{type:a.Optional},{type:a.Inject,args:[t.RECAPTCHA_LANGUAGE]}]},{type:void 0,decorators:[{type:a.Optional},{type:a.Inject,args:[t.RECAPTCHA_BASE_URL]}]},{type:void 0,decorators:[{type:a.Optional},{type:a.Inject,args:[t.RECAPTCHA_NONCE]}]}]},e}();t.RecaptchaLoaderService=i},"uOf+":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("CcnG"),a=r("WH67"),o=r("p4DR"),i=r("15PL"),s=function(){function e(){}return e.forRoot=function(){return e},e.decorators=[{type:n.NgModule,args:[{exports:[i.RecaptchaComponent],imports:[a.RecaptchaCommonModule],providers:[o.RecaptchaLoaderService]}]}],e}();t.RecaptchaModule=s},wrqk:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("CcnG");t.RECAPTCHA_SETTINGS=new n.InjectionToken("recaptcha-settings")}}]);