(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"3msT":function(e,n,t){"use strict";t.r(n);var r=t("mrSG"),a=t("CcnG"),i=t("ZYCi"),s=t("qmRI"),o=function(){function e(e,n){var t=this;this.router=e,this.ems=n,this.errMsg=!1,this.examData=[],this.isAdd=!1,this.campOfficerDetails=[],this.campList=[],this.chiefDataList=[],this.districtData=[],this.campOfficerList=[],this.programmeData=[],this.campData=[],this.popoverTitle="Delete Camp Officer",this.popoverMessage="Are you sure to delete",this.confirmClicked=!1,this.cancelClicked=!1,this.p=1,this.ems.active=5,this.ems.isAdmin=!0,this.ems.roleName="Administrator",this.ems.login("emsadmin@yopmail.com","Test@123").subscribe(function(e){"Success"==e.status&&(localStorage.setItem("sessionid",e.data.session_token),localStorage.setItem("uid",e.data.user_id),localStorage.setItem("role",e.data.role_name),localStorage.setItem("cen_id",e.data.cen_id),localStorage.setItem("username",e.data.user_name),localStorage.setItem("permission",e.data.action_list),t.sessionid=localStorage.getItem("sessionid"),t.userid=localStorage.getItem("uid"),t.centerId=localStorage.getItem("cen_id"),t.ems.getExam(t.sessionid,t.userid).subscribe(function(e){t.examData=e.data}),t.ems.getCampDetails(t.sessionid,t.userid).subscribe(function(e){"Success"==e.status&&(t.campList=e.data)}),t.ems.getCampOfficerInfo(t.sessionid,t.userid).subscribe(function(e){"Success"==e.status&&(t.campOfficerDetails=e.data)}),t.ems.getAllCampOfficer(t.sessionid,t.userid).subscribe(function(e){"Success"==e.status&&(t.campOfficerList=e.data)}))})}return e.prototype.addCampOfficer=function(e){var n=this;e.invalid?this.errMsg=!0:(this.errMsg=!1,this.ems.addCampOfficer(this.campofficer,this.campId,this.exam,this.sessionid,this.userid).subscribe(function(t){n.ems.status=t.status,"Success"==t.status?(n.ems.msg=t.message,e.reset(),$("#myModal").modal("show"),n.ems.getAllCampOfficer(n.sessionid,n.userid).subscribe(function(e){"Success"==e.status&&(n.campOfficerList=e.data)}),n.ems.getCampOfficerInfo(n.sessionid,n.userid).subscribe(function(e){"Success"==e.status&&(n.campOfficerDetails=e.data)})):"Bad request"==t.message?(n.ems.msg="Internal Server Error",$("#myModal").modal("show")):(n.ems.msg=t.message,$("#myModal").modal("show"))}))},e.prototype.onChangeExam=function(e){var n=this;this.pgmId=null,this.campname=null,this.examinationId=e,this.programmeData=[],this.ems.getprglist(e,this.sessionid,this.userid).subscribe(function(e){n.programmeData=e.data})},e.prototype.onChangeProgramme=function(e){var n=this;this.programmeId=e,this.campData=[],this.campname=null,this.ems.getCampnew(this.examinationId,e,this.sessionid,this.userid).subscribe(function(e){n.campData=e.data})},e.prototype.onChange=function(e){this.campId=e},e.prototype.deleteCampOfficer=function(e,n,t){var r=this;$("html, body").animate({scrollTop:0}),this.ems.removeCampOfficer(e,n,t,this.sessionid,this.userid).subscribe(function(e){r.ems.status=e.status,"Success"==e.status?(r.ems.getCampOfficerInfo(r.sessionid,r.userid).subscribe(function(e){"Success"==e.status&&(r.campOfficerDetails=e.data)}),r.ems.msg=e.message,$("#myModal").modal("show")):"Bad request"==e.message?(r.ems.msg="Internal Server Error",$("#myModal").modal("show")):(r.ems.msg=e.message,$("#myModal").modal("show"))})},e.prototype.ngOnInit=function(){$("html, body").animate({scrollTop:0})},e=r.b([Object(a.Component)({selector:"app-campofficeradd",template:t("Zudx"),styles:[t("Jkqj")]}),r.d("design:paramtypes",[i.Router,s.a])],e)}(),c=t("Zseb"),l=t("Ip0R"),d=t("gIcY"),p=t("fCu2"),u=t("xkgV");t.d(n,"routes",function(){return m}),t.d(n,"CampofficeraddModule",function(){return g});var m=[{path:"",component:o,pathMatch:"full"}],g=function(){function e(){}return e.routes=m,e=r.b([Object(a.NgModule)({imports:[l.CommonModule,i.RouterModule.forChild(m),d.FormsModule,c.a,u.a,p.a.forRoot({confirmButtonType:"danger"})],declarations:[o],providers:[],bootstrap:[o]})],e)}()},Jkqj:function(e,n){e.exports=""},Zudx:function(e,n){e.exports='\x3c!-- <div class="row brdcrm-mrgn">\r\n \r\n  <div class="col-md-6 col-sm-12 col-xs-12 pull-right">\r\n    <ol class="breadcrumb">\r\n      <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>\r\n      <li><a href="#app/evaluation">Evaluation Management</a></li>\r\n      <li class="active">campofficer</li>\r\n    </ol>\r\n  </div>\r\n</div> --\x3e\r\n\r\n<div *ngIf="ems.isAdmin">\r\n  <section>\r\n    \x3c!-- <div class="container"> --\x3e\r\n    <div class="row margin-card">\r\n\r\n      <div class="col-md-12" id="first-content">\r\n        <form #f="ngForm" (ngSubmit)="addCampOfficer(f)">\r\n          <div class="panel panel-primary" id="shadows">\r\n            <div class="panel-heading " id="head-title"><i class="fa fa-info-circle"></i>&nbsp;Add Camp Officer\r\n            </div>\r\n            <div class="panel-body">\r\n\r\n              <div class="row">\r\n                <div class="col-md-6">\r\n                  <div class="form-group">\r\n                    <label for="email" id="labels">Exam<strong style="color:red;">*</strong></label>\r\n                    <select class="form-control input-sm" name="exam" required [(ngModel)]="exam" #examControl="ngModel"\r\n                      (ngModelChange)="onChangeExam($event)">\r\n                      <option value="undefined" disabled selected>-Select exam-</option>\r\n                      <option *ngFor="let item of examData" value="{{item.exam_id}}">{{item.exam_name}}</option>\r\n                    </select>\r\n                    <span style="color:red;" *ngIf="examControl.errors?.required && examControl.touched">\r\n                      Exam is required\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <div class="form-group">\r\n                    <label for="email" id="labels">Programme<strong style="color:red;">*</strong></label>\r\n                    <select class="form-control input-sm" required #pgmControl="ngModel"\r\n                      (ngModelChange)="onChangeProgramme($event)" [(ngModel)]="pgmId" name="pgmId">\r\n\r\n                      <option hidden value="undefined" disabled selected>-Select Programme-</option>\r\n                      <option *ngFor="let k of programmeData" value="{{k.program_id}}">{{k.program_name}}</option>\r\n                    </select>\r\n                    <span style="color:red;" class="help-block" *ngIf="pgmControl.invalid && pgmControl.touched">\r\n                      Programme is required\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              \x3c!-- <div class="row">\r\n                <div class="col-md-12">\r\n                  <div class="form-group">\r\n                    <label for="email" id="labels">District<strong style="color:red;">*</strong>:</label>\r\n                    <select class="form-control input-sm" name="district" required [(ngModel)]="district"\r\n                      #districtControl="ngModel" (ngModelChange)="onDistrictChange($event)">\r\n                      <option value="undefined" disabled selected>-Select district-</option>\r\n                      <option value="Kottayam">Kottayam</option>\r\n                      <option value="Pathanamthitta">Pathanamthitta</option>\r\n                      <option value="Idukki">Idukki</option>\r\n                      <option value="Ernakulam">Ernakulam</option>\r\n                      <option value="Alappuzha">Alappuzha</option>\r\n                    </select>\r\n                    <span style="color:red;" *ngIf="districtControl.errors?.required && districtControl.touched">\r\n                      District is required\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </div> --\x3e\r\n              <div class="row">\r\n                <div class="col-md-6">\r\n                  <div class="form-group">\r\n                    <label for="email" id="labels">Camp<strong style="color:red;">*</strong></label>\r\n                    <select class="form-control input-sm" name="campname" required [(ngModel)]="campname"\r\n                      #campnameControl="ngModel" (ngModelChange)="onChange($event)">\r\n                      <option value="undefined" disabled selected>-Select camp-</option>\r\n                      <option value="camp1" *ngFor="let k of campData; let m=index;" value="{{k.camp_id}}">\r\n                        {{k.camp_name}}</option>\r\n\r\n                    </select>\r\n                    <span style="color:red;" *ngIf="campnameControl.errors?.required && campnameControl.touched">\r\n                      Camp is required\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n                <div class="col-md-6">\r\n                  <div class="form-group">\r\n                    <label for="email" id="labels">Camp Officer<strong style="color:red;">*</strong></label>\r\n                    <select class="form-control input-sm" name="campofficer" required [(ngModel)]="campofficer"\r\n                      #campofficerControl="ngModel">\r\n                      <option value="undefined" disabled selected>-Select camp officer-</option>\r\n                      <option *ngFor="let j of campOfficerList; let n=index;" value="{{j.officer_id}}">\r\n                        {{j.officer_name}}</option>\r\n\r\n                    </select>\r\n                    <span style="color:red;" *ngIf="campofficerControl.errors?.required && campofficerControl.touched">\r\n                      Camp Officer is required\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              \x3c!-- <div class="row">\r\n              </div> --\x3e\r\n              <div *ngIf="errMsg" class="red-text center error-message"\r\n                style="text-align: center;font-size: 15px;color:red;">\r\n                Please fill valid data in the required fields\r\n              </div>\r\n            </div>\r\n            <div class="panel-footer panel-default text-right">\r\n              <button type="submit" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i>&nbsp;Add</button>\r\n            </div>\r\n\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    \x3c!-- </div> --\x3e\r\n\r\n  </section>\r\n\r\n  <section>\r\n    \x3c!-- <div class="container"> --\x3e\r\n    <div class="row margin-card">\r\n      <div class="col-md-12" id="first-content">\r\n        <div class="panel panel-primary" id="shadows">\r\n          <div class="panel-heading " id="head-title"><i class="fa fa-info-circle"></i>&nbsp;Exam Details\r\n          </div>\r\n          <div class="panel-body" id="table-contents">\r\n\r\n            <div class="row">\r\n\r\n              <div id="no-more-tables">\r\n\r\n                <table class="col-md-12 table-bordered table-striped table-condensed cf">\r\n                  <thead class="cf">\r\n                    <tr>\r\n                      <th>No</th>\r\n                      <th>Camp officer name</th>\r\n                      <th>Center</th>\r\n                      <th>Delete</th>\r\n\r\n\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr\r\n                      *ngFor="let item of campOfficerDetails | paginate: { itemsPerPage: 10, currentPage: p } ;let j=index">\r\n                      <td data-title="No">{{(10*(p-1))+j+1}}</td>\r\n                      <td data-title="Name">{{item.campofficer_name}}</td>\r\n                      <td data-title="Camp">{{item.cen_name}}</td>\r\n                      \x3c!-- <td data-title="Edit"><a (click)="editCampOfficer(item.des_id)" style="cursor:pointer"><i class="fa fa-pencil"></i></a>&nbsp;</td> --\x3e\r\n                      <td data-title="Delete" class="editdel"><a class="btn btn-default" mwlConfirmationPopover\r\n                          [popoverTitle]="popoverTitle" [popoverMessage]="popoverMessage" placement="top"\r\n                          (confirm)="deleteCampOfficer(item.co_id,item.exam_id,item.cen_id)"\r\n                          (cancel)="cancelClicked = true" role="button" title="Delete"><i class="fa fa-trash"></i></a>\r\n                      </td>\r\n\r\n\r\n                    </tr>\r\n\r\n                  </tbody>\r\n                </table>\r\n                <pagination-controls style="text-align:center;" (pageChange)="p = $event">\r\n                </pagination-controls>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class="panel-footer panel-default text-right">\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \x3c!-- </div> --\x3e\r\n\r\n  </section>\r\n</div>\r\n\r\n<div *ngIf="!ems.isAdmin">\r\n  <section>\r\n    \x3c!-- <div class="container"> --\x3e\r\n    <div class="row margin-card">\r\n      <div class="col-md-12" id="first-content">\r\n        <div class="panel panel-primary" id="shadows">\r\n          <div class="panel-heading " id="head-title"><i class="fa fa-info-circle"></i>&nbsp;Exam Details\r\n          </div>\r\n          <div class="panel-body" id="table-contents">\r\n\r\n            <div class="row">\r\n\r\n              <div id="no-more-tables">\r\n\r\n                <table class="col-md-12 table-bordered table-striped table-condensed cf">\r\n                  <thead class="cf">\r\n                    <tr>\r\n                      <th>No</th>\r\n                      <th>Camp officer name</th>\r\n                      <th>Center</th>\r\n\r\n\r\n\r\n                    </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                    <tr\r\n                      *ngFor="let item of campOfficerDetails | paginate: { itemsPerPage: 10, currentPage: p };let j=index">\r\n                      <td data-title="No">{{(10*(p-1))+j+1}}</td>\r\n                      <td data-title="Name">{{item.campofficer_name}}</td>\r\n                      <td data-title="Camp">{{item.cen_name}}</td>\r\n                      \x3c!-- <td data-title="Edit"><a (click)="editCampOfficer(item.des_id)" style="cursor:pointer"><i class="fa fa-pencil"></i></a>&nbsp;</td> --\x3e\r\n\r\n\r\n\r\n                    </tr>\r\n\r\n                  </tbody>\r\n                </table>\r\n                <pagination-controls style="text-align:center;" (pageChange)="p = $event">\r\n                </pagination-controls>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div class="panel-footer panel-default text-right">\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \x3c!-- </div> --\x3e\r\n\r\n  </section>\r\n</div>'},xkgV:function(e,n,t){"use strict";t.d(n,"a",function(){return p});var r=t("CcnG"),a=t("Ip0R"),i=function(){function e(){this.change=new r.EventEmitter,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}return e.prototype.defaultId=function(){return this.DEFAULT_ID},e.prototype.register=function(e){(null==e.id&&(e.id=this.DEFAULT_ID),this.instances[e.id])?this.updateInstance(e)&&this.change.emit(e.id):(this.instances[e.id]=e,this.change.emit(e.id))},e.prototype.updateInstance=function(e){var n=!1;for(var t in this.instances[e.id])e[t]!==this.instances[e.id][t]&&(this.instances[e.id][t]=e[t],n=!0);return n},e.prototype.getCurrentPage=function(e){if(this.instances[e])return this.instances[e].currentPage},e.prototype.setCurrentPage=function(e,n){if(this.instances[e]){var t=this.instances[e];n<=Math.ceil(t.totalItems/t.itemsPerPage)&&1<=n&&(this.instances[e].currentPage=n,this.change.emit(e))}},e.prototype.setTotalItems=function(e,n){this.instances[e]&&0<=n&&(this.instances[e].totalItems=n,this.change.emit(e))},e.prototype.setItemsPerPage=function(e,n){this.instances[e]&&(this.instances[e].itemsPerPage=n,this.change.emit(e))},e.prototype.getInstance=function(e){return void 0===e&&(e=this.DEFAULT_ID),this.instances[e]?this.clone(this.instances[e]):{}},e.prototype.clone=function(e){var n={};for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);return n},e}(),s=Number.MAX_SAFE_INTEGER,o=function(){function e(e){this.service=e,this.state={}}return e.prototype.transform=function(e,n){if(n instanceof Array&&(n=n[0]),!(e instanceof Array)){var t=n.id||this.service.defaultId;return this.state[t]?this.state[t].slice:e}var r,a,i=n.totalItems&&n.totalItems!==e.length,o=this.createInstance(e,n),c=o.id,l=o.itemsPerPage;if(this.service.register(o),!i&&e instanceof Array){if(l=+l||s,a=(r=(o.currentPage-1)*l)+l,this.stateIsIdentical(c,e,r,a))return this.state[c].slice;var d=e.slice(r,a);return this.saveState(c,e,d,r,a),this.service.change.emit(c),d}return this.saveState(c,e,e,r,a),e},e.prototype.createInstance=function(e,n){var t=n;return this.checkConfig(t),{id:null!=t.id?t.id:this.service.defaultId(),itemsPerPage:+t.itemsPerPage||0,currentPage:+t.currentPage||1,totalItems:+t.totalItems||e.length}},e.prototype.checkConfig=function(e){var n=["itemsPerPage","currentPage"].filter(function(n){return!(n in e)});if(0<n.length)throw new Error("PaginatePipe: Argument is missing the following required properties: "+n.join(", "))},e.prototype.saveState=function(e,n,t,r,a){this.state[e]={collection:n,size:n.length,slice:t,start:r,end:a}},e.prototype.stateIsIdentical=function(e,n,t,r){var a=this.state[e];return!!a&&(!(a.size!==n.length||a.start!==t||a.end!==r)&&a.slice.every(function(e,r){return e===n[t+r]}))},e.decorators=[{type:r.Pipe,args:[{name:"paginate",pure:!1}]}],e.ctorParameters=function(){return[{type:i}]},e}();function c(e){return!!e&&"false"!==e}var l=function(){function e(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new r.EventEmitter,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}return Object.defineProperty(e.prototype,"directionLinks",{get:function(){return this._directionLinks},set:function(e){this._directionLinks=c(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"autoHide",{get:function(){return this._autoHide},set:function(e){this._autoHide=c(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"responsive",{get:function(){return this._responsive},set:function(e){this._responsive=c(e)},enumerable:!0,configurable:!0}),e.decorators=[{type:r.Component,args:[{selector:"pagination-controls",template:'\n    <pagination-template  #p="paginationApi"\n                         [id]="id"\n                         [maxSize]="maxSize"\n                         (pageChange)="pageChange.emit($event)">\n    <ul class="ngx-pagination" \n        role="navigation" \n        [attr.aria-label]="screenReaderPaginationLabel" \n        [class.responsive]="responsive"\n        *ngIf="!(autoHide && p.pages.length <= 1)">\n\n        <li class="pagination-previous" [class.disabled]="p.isFirstPage()" *ngIf="directionLinks"> \n            <a tabindex="0" *ngIf="1 < p.getCurrent()" (keyup.enter)="p.previous()" (click)="p.previous()" [attr.aria-label]="previousLabel + \' \' + screenReaderPageLabel">\n                {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf="p.isFirstPage()">\n                {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class="small-screen">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]="p.getCurrent() === page.value" \n            [class.ellipsis]="page.label === \'...\'"\n            *ngFor="let page of p.pages">\n            <a tabindex="0" (keyup.enter)="p.setCurrent(page.value)" (click)="p.setCurrent(page.value)" *ngIf="p.getCurrent() !== page.value">\n                <span class="show-for-sr">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <ng-container *ngIf="p.getCurrent() === page.value">\n                <span class="show-for-sr">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </ng-container>\n        </li>\n\n        <li class="pagination-next" [class.disabled]="p.isLastPage()" *ngIf="directionLinks">\n            <a tabindex="0" *ngIf="!p.isLastPage()" (keyup.enter)="p.next()" (click)="p.next()" [attr.aria-label]="nextLabel + \' \' + screenReaderPageLabel">\n                 {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf="p.isLastPage()">\n                 {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ',styles:["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xab';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xbb';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "],changeDetection:r.ChangeDetectionStrategy.OnPush,encapsulation:r.ViewEncapsulation.None}]}],e.ctorParameters=function(){return[]},e.propDecorators={id:[{type:r.Input}],maxSize:[{type:r.Input}],directionLinks:[{type:r.Input}],autoHide:[{type:r.Input}],responsive:[{type:r.Input}],previousLabel:[{type:r.Input}],nextLabel:[{type:r.Input}],screenReaderPaginationLabel:[{type:r.Input}],screenReaderPageLabel:[{type:r.Input}],screenReaderCurrentLabel:[{type:r.Input}],pageChange:[{type:r.Output}]},e}(),d=function(){function e(e,n){var t=this;this.service=e,this.changeDetectorRef=n,this.maxSize=7,this.pageChange=new r.EventEmitter,this.pages=[],this.changeSub=this.service.change.subscribe(function(e){t.id===e&&(t.updatePageLinks(),t.changeDetectorRef.markForCheck(),t.changeDetectorRef.detectChanges())})}return e.prototype.ngOnInit=function(){void 0===this.id&&(this.id=this.service.defaultId()),this.updatePageLinks()},e.prototype.ngOnChanges=function(e){this.updatePageLinks()},e.prototype.ngOnDestroy=function(){this.changeSub.unsubscribe()},e.prototype.previous=function(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)},e.prototype.next=function(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)},e.prototype.isFirstPage=function(){return 1===this.getCurrent()},e.prototype.isLastPage=function(){return this.getLastPage()===this.getCurrent()},e.prototype.setCurrent=function(e){this.pageChange.emit(e)},e.prototype.getCurrent=function(){return this.service.getCurrentPage(this.id)},e.prototype.getLastPage=function(){var e=this.service.getInstance(this.id);return e.totalItems<1?1:Math.ceil(e.totalItems/e.itemsPerPage)},e.prototype.getTotalItems=function(){return this.service.getInstance(this.id).totalItems},e.prototype.checkValidId=function(){null==this.service.getInstance(this.id).id&&console.warn('PaginationControlsDirective: the specified id "'+this.id+'" does not match any registered PaginationInstance')},e.prototype.updatePageLinks=function(){var e=this,n=this.service.getInstance(this.id),t=this.outOfBoundCorrection(n);t!==n.currentPage?setTimeout(function(){e.setCurrent(t),e.pages=e.createPageArray(n.currentPage,n.itemsPerPage,n.totalItems,e.maxSize)}):this.pages=this.createPageArray(n.currentPage,n.itemsPerPage,n.totalItems,this.maxSize)},e.prototype.outOfBoundCorrection=function(e){var n=Math.ceil(e.totalItems/e.itemsPerPage);return n<e.currentPage&&0<n?n:e.currentPage<1?1:e.currentPage},e.prototype.createPageArray=function(e,n,t,r){r=+r;for(var a=[],i=Math.ceil(t/n),s=Math.ceil(r/2),o=e<=s,c=i-s<e,l=!o&&!c,d=r<i,p=1;p<=i&&p<=r;){var u=void 0,m=this.calculatePageNumber(p,e,r,i);u=d&&(2===p&&(l||c)||p===r-1&&(l||o))?"...":m,a.push({label:u,value:m}),p++}return a},e.prototype.calculatePageNumber=function(e,n,t,r){var a=Math.ceil(t/2);return e===t?r:1===e?e:t<r?r-a<n?r-t+e:a<n?n-a+e:e:e},e.decorators=[{type:r.Directive,args:[{selector:"pagination-template,[pagination-template]",exportAs:"paginationApi"}]}],e.ctorParameters=function(){return[{type:i},{type:r.ChangeDetectorRef}]},e.propDecorators={id:[{type:r.Input}],maxSize:[{type:r.Input}],pageChange:[{type:r.Output}]},e}(),p=function(){function e(){}return e.decorators=[{type:r.NgModule,args:[{imports:[a.CommonModule],declarations:[o,l,d],providers:[i],exports:[o,l,d]}]}],e.ctorParameters=function(){return[]},e}()}}]);