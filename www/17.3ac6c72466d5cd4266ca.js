(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{X3zk:function(n,t,o){"use strict";o.r(t),o.d(t,"LoginPageModule",(function(){return f}));var e=o("ofXK"),i=o("3Pt+"),c=o("TEn/"),r=o("tyNb"),g=o("mrSG"),a=o("fXoL"),s=o("PLN7"),l=o("kmnG"),m=o("qFsG"),d=o("NFeN");function _(n,t){if(1&n&&(a.Sb(0,"div",20),a.Nb(1,"ion-icon",21),a.vc(2),a.Rb()),2&n){var o=a.dc().$implicit;a.Bb(2),a.xc(" ",o.message," ")}}function C(n,t){if(1&n&&(a.Qb(0),a.uc(1,_,3,1,"div",19),a.Pb()),2&n){var o=t.$implicit,e=a.dc();a.Bb(1),a.ic("ngIf",e.validations_form.get("email").hasError(o.type)&&(e.validations_form.get("email").dirty||e.validations_form.get("email").touched))}}function P(n,t){if(1&n&&(a.Sb(0,"div",20),a.Nb(1,"ion-icon",21),a.vc(2),a.Rb()),2&n){var o=a.dc().$implicit;a.Bb(2),a.xc(" ",o.message," ")}}function O(n,t){if(1&n&&(a.Qb(0),a.uc(1,P,3,1,"div",19),a.Pb()),2&n){var o=t.$implicit,e=a.dc();a.Bb(1),a.ic("ngIf",e.validations_form.get("password").hasError(o.type)&&(e.validations_form.get("password").dirty||e.validations_form.get("password").touched))}}var M=[{path:"",component:function(){function n(n,t,o,e,i,c){this.navCtrl=n,this.formBuilder=t,this.loadingCtrl=o,this.toastController=e,this.menuCtrl=i,this.apiService=c,this.hide=!0,this.validation_messages={email:[{type:"required",message:"Email is required."},{type:"pattern",message:"Invalid email"}],password:[{type:"required",message:"Password is required."},{type:"minlength",message:"Password must be at least 4 characters long."}]}}return n.prototype.ngOnInit=function(){this.menuCtrl.enable(!1),this.validations_form=this.formBuilder.group({email:new i.d("",i.s.compose([i.s.required,i.s.pattern("[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}")])),password:new i.d("",i.s.compose([i.s.minLength(4),i.s.required]))})},n.prototype.onSubmit=function(n){return Object(g.a)(this,void 0,void 0,(function(){var t,o=this;return Object(g.c)(this,(function(e){switch(e.label){case 0:return[4,this.loadingCtrl.create({message:"Please wait..."})];case 1:return[4,(t=e.sent()).present()];case 2:return e.sent(),console.log(n),this.apiService.AeLogin(n).subscribe((function(n){o.loginResponse=n.data,o.loginResponse.token&&(localStorage.setItem("token",o.loginResponse.token),o.menuCtrl.enable(!0),o.navCtrl.navigateRoot("/home"),t.dismiss(),window.app.getProfile(),o.presentToast(n.message))}),(function(n){t.dismiss(),o.presentToast(n.error.message)})),[2]}}))}))},n.prototype.presentToast=function(n){return Object(g.a)(this,void 0,void 0,(function(){return Object(g.c)(this,(function(t){switch(t.label){case 0:return[4,this.toastController.create({message:n,duration:2e3,position:"bottom"})];case 1:return t.sent().present(),[2]}}))}))},n.\u0275fac=function(t){return new(t||n)(a.Mb(c.Q),a.Mb(i.c),a.Mb(c.N),a.Mb(c.W),a.Mb(c.O),a.Mb(s.a))},n.\u0275cmp=a.Gb({type:n,selectors:[["app-login"]],decls:36,vars:6,consts:[[1,"login"],[1,"container","card"],[1,"row"],[1,"col-md-12","col-sm-12","col-xs-12","col-lg-12","right"],[1,"login-form"],[1,"logo"],["src","https://www.agriapp.com/resources/assets/images/site_images/1556019826.logo.png","alt","",1,"swasthiks-logo","ml-1","animated","bounce","delay-0.5s"],[3,"formGroup","ngSubmit"],["size","12"],["lines","none"],["appearance","outline",2,"width","100%"],["matInput","","type","text","formControlName","email","required",""],["matSuffix","",1,"fa","fa-mobile"],[1,"validation-errors"],[4,"ngFor","ngForOf"],["matInput","","formControlName","password","required","",3,"type"],["matSuffix","",3,"click"],["size","12","text-center","",1,"signinbutton"],["type","submit","color","success",2,"width","100%","height","60px","text-transform","capitalize",3,"disabled"],["class","error-message",4,"ngIf"],[1,"error-message"],["name","information-circle-outline"]],template:function(n,t){1&n&&(a.Sb(0,"section",0),a.Sb(1,"div",1),a.Sb(2,"div",2),a.Sb(3,"div",3),a.Sb(4,"div",4),a.Sb(5,"div",5),a.Nb(6,"img",6),a.Rb(),a.Sb(7,"form",7),a.ac("ngSubmit",(function(){return t.onSubmit(t.validations_form.value)})),a.Sb(8,"ion-row"),a.Sb(9,"ion-col",8),a.Sb(10,"ion-item",9),a.Sb(11,"mat-form-field",10),a.Sb(12,"mat-label"),a.vc(13,"Email"),a.Rb(),a.Nb(14,"input",11),a.Nb(15,"i",12),a.Sb(16,"mat-hint"),a.Sb(17,"div",13),a.uc(18,C,2,1,"ng-container",14),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Sb(19,"ion-col",8),a.Sb(20,"ion-item",9),a.Sb(21,"mat-form-field",10),a.Sb(22,"mat-label"),a.vc(23,"Password"),a.Rb(),a.Nb(24,"input",15),a.Sb(25,"mat-icon",16),a.ac("click",(function(){return t.hide=!t.hide})),a.vc(26),a.Rb(),a.Sb(27,"mat-hint"),a.Sb(28,"div",13),a.uc(29,O,2,1,"ng-container",14),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Nb(30,"br"),a.Nb(31,"br"),a.Sb(32,"ion-col",17),a.Sb(33,"ion-button",18),a.vc(34,"Login"),a.Rb(),a.Rb(),a.Nb(35,"br"),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb(),a.Rb()),2&n&&(a.Bb(7),a.ic("formGroup",t.validations_form),a.Bb(11),a.ic("ngForOf",t.validation_messages.email),a.Bb(6),a.ic("type",t.hide?"password":"text"),a.Bb(2),a.xc("",t.hide?"visibility_off":"visibility"," "),a.Bb(3),a.ic("ngForOf",t.validation_messages.password),a.Bb(4),a.ic("disabled",!t.validations_form.valid))},directives:[i.t,i.n,i.f,c.D,c.i,c.t,l.b,l.f,m.b,i.b,i.m,i.e,i.r,l.g,l.e,e.k,d.a,c.f,e.l,c.p],styles:[".login[_ngcontent-%COMP%]{height:100vh;width:100%;background:#376a2d;display:flex;justify-content:center;align-items:center}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{width:35%;background:#fff}@media (max-width:768px){.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{width:60%}}@media (max-width:512px){.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{width:85%}}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{padding:12px}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-direction:column;align-items:center}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%}@media (max-width:992px){.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{width:100%}}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:flex;width:100%;flex-direction:column;align-items:center;justify-content:center}@media (max-width:512px){.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{display:flex;width:100%;align-items:center;justify-content:space-evenly}}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .swasthiks-logo[_ngcontent-%COMP%]{width:300px;margin-bottom:35px}@media (max-width:992px){.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .swasthiks-logo[_ngcontent-%COMP%]{margin-bottom:25px}}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .rala-logo[_ngcontent-%COMP%]{width:150px;margin-bottom:35px}@media (max-width:992px){.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   .rala-logo[_ngcontent-%COMP%]{margin-bottom:25px}}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{width:70%}@media (max-width:992px){.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{width:90%}}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 0 0 18px}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .input-box[_ngcontent-%COMP%]   .c-code[_ngcontent-%COMP%]{font-size:15px;font-family:Montserrat,Helvetica Neue,Arial,sans-serif}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;width:100%;padding:18px 18px 18px 4px;box-shadow:none;outline:none;font-size:15px}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]{text-align:center}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .resend[_ngcontent-%COMP%]{cursor:pointer;color:#d9261c}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%]{color:#d9261c}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%]   .signup-link[_ngcontent-%COMP%]{color:#123}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .send-otp[_ngcontent-%COMP%], .login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .verify-otp[_ngcontent-%COMP%]{transition:8s ease;margin-top:20px;background:#d9261c}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .verify-otp[_ngcontent-%COMP%]{margin-top:30px}.login[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .verify-otp[_ngcontent-%COMP%]:hover{background:#d9261c}ion-item[_ngcontent-%COMP%]{--ion-background-color:none} .mat-form-field-appearance-outline .mat-form-field-outline,  .mat-input.mat-input-element{color:#000}.error-message[_ngcontent-%COMP%]{position:relative;color:red}"]}),n}()}],p=function(){function n(){}return n.\u0275mod=a.Kb({type:n}),n.\u0275inj=a.Jb({factory:function(t){return new(t||n)},imports:[[r.i.forChild(M)],r.i]}),n}(),b=o("vvyD"),f=function(){function n(){}return n.\u0275mod=a.Kb({type:n}),n.\u0275inj=a.Jb({factory:function(t){return new(t||n)},imports:[[e.b,i.g,c.L,p,b.a,i.q]]}),n}()}}]);