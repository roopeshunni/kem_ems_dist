(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{hj7C:function(e,t,n){"use strict";n.r(t);var a=n("mrSG"),r=n("CcnG"),i=n("qmRI"),s=function(){function e(e){this.ems=e,this.index=1,this.markfinalData=[],this.popoverTitle="Delete User",this.popoverMessage="Are you sure to delete",this.confirmClicked=!1,this.cancelClicked=!1,this.p=1,this.examData=[],this.programmeData=[],this.programmeID=[],this.courseData=[],this.ems.active=6}return e.prototype.ngOnInit=function(){var e=this;this.sessionid=localStorage.getItem("sessionid"),this.uid=localStorage.getItem("uid"),this.ems.getExam(this.sessionid,this.uid).subscribe(function(t){"Unauthorised access"==t.message&&e.ems.sessionlogout(),e.examData=t.data})},e.prototype.onChange=function(e){var t=this;this.examId=e,this.courseData=[],this.programmeData=[],this.pgmId="",this.courseID="",this.ems.getprglist(e,this.sessionid,this.uid).subscribe(function(e){"Unauthorised access"==e.message&&t.ems.sessionlogout(),t.programmeData=e.data})},e.prototype.onChange1=function(e){var t=this;this.programmeID=e,this.courseData=[],this.courseID="",this.ems.getcourselist(e,this.sessionid,this.uid).subscribe(function(e){"Unauthorised access"==e.message&&t.ems.sessionlogout(),t.courseData=e.data})},e.prototype.MarkRVview2=function(e){var t=this;e.invalid?this.errMsg=!0:(this.errMsg=!1,this.ems.getRv2List(this.examId,this.programmeID,this.courseID,this.sessionid,this.uid).subscribe(function(e){"Unauthorised access"==e.message&&t.ems.sessionlogout(),t.ems.status=e.status,"Success"==e.status?(t.ems.msg=e.message,$("#myModal").modal("show"),t.markfinalData=e.data[0],t.markfinalResult=e.data[1].result):"Bad request"==e.message?(t.ems.msg="Internal Server Error",$("#myModal").modal("show")):(t.ems.msg=e.message,$("#myModal").modal("show"))}))},e=a.b([Object(r.Component)({selector:"app-secondrelist",template:n("tmuQ"),styles:[n("ics4")]}),a.d("design:paramtypes",[i.a])],e)}(),o=n("xkgV"),l=n("Zseb"),c=n("Ip0R"),d=n("ZYCi"),p=n("gIcY"),u=n("fCu2");n.d(t,"routes",function(){return g}),n.d(t,"SecondrelistModule",function(){return m});var g=[{path:"",component:s,pathMatch:"full"}],m=function(){function e(){}return e.routes=g,e=a.b([Object(r.NgModule)({imports:[c.CommonModule,d.RouterModule.forChild(g),p.FormsModule,l.a,u.a.forRoot({confirmButtonType:"danger"}),o.a],declarations:[s],providers:[],bootstrap:[s]})],e)}()},ics4:function(e,t){e.exports=""},tmuQ:function(e,t){e.exports='\x3c!-- Field Section --\x3e\r\n<div class="row brdcrm-mrgn">\r\n        <div class="col-md-6 col-sm-6 col-xs-8">\r\n          <div >\r\n          <div class="panel-heading mainpanel-hd text-uppercase">\r\n          \r\n          </div>\r\n          </div>\r\n         </div>\r\n         <div class="col-md-6 col-sm-12 col-xs-12 pull-right">\r\n          <ol class="breadcrumb">\r\n            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>\r\n            <li ><a href="#/app/revaluation">Revaluation Management</a></li>\r\n            <li class="active"> Second Revaluation list view </li>\r\n            </ol>\r\n        </div>\r\n</div>\r\n<section>\r\n    <div class="row margin-card">\r\n         <form #f="ngForm" (ngSubmit)="MarkRVview2(f)">\r\n       <div class="col-md-12" id="first-content">\r\n          <div class="panel panel-primary" id="shadows">\r\n             <div class="panel-heading " id="head-title"><i class="fa fa-info-circle"></i>&nbsp;Second Revaluation List\r\n             </div>\r\n             <div class="panel-body">\r\n                <div class="row">\r\n                   <div class="col-md-4">\r\n                      <div class="form-group">\r\n                             <label for="email" id="labels">Exam<strong style="color:red;">*</strong></label>\r\n                             <select class="form-control input-sm" [(ngModel)]="examId"  (ngModelChange)="onChange($event)"  required #examControl="ngModel" name="examNameId" >\r\n                               \r\n                             <option disabled hidden value="undefined"\r\n                             disabled selected>----Select Exam----</option>\r\n                             <option *ngFor="let k of examData" value="{{k.exam_id}}" >{{k.exam_name}}</option>\r\n                             </select> \r\n                             <span style="color:red;" class="help-block" *ngIf="examControl.invalid && examControl.touched">\r\n                                 Must choose a valid exam\r\n                             </span>\r\n                      </div>\r\n                   </div>\r\n                   <div class="col-md-4">\r\n                      <div class="form-group">\r\n                             <label for="email" id="labels">Programme<strong style="color:red;">*</strong></label>\r\n                             <select class="form-control input-sm" required (ngModelChange)="onChange1($event)" #pgmControl="ngModel" [(ngModel)]="pgmId" name="pgmId" >\r\n                               \r\n                             <option hidden value="undefined"\r\n                             disabled selected>----Select Programme----</option>\r\n                             <option *ngFor="let k of programmeData" value="{{k.program_id}}" >{{k.program_name}}</option>\r\n                             </select> \r\n                             <span style="color:red;" class="help-block" *ngIf="pgmControl.invalid && pgmControl.touched">\r\n                                 Must choose a valid programme\r\n                             </span>\r\n                      </div>\r\n                   </div>\r\n                   <div class="col-md-4">\r\n                      <div class="form-group">\r\n                             <label for="email" id="labels">Course <strong style="color:red;">*</strong></label>\r\n                             <select class="form-control input-sm" type="text" [(ngModel)]="courseID" required #crsControl="ngModel" name="courseID" class="form-control input-sm" >\r\n                             <option hidden value="undefined"\r\n                             disabled selected>----Select Course----</option>\r\n                             <option *ngFor="let k of courseData" value="{{k.course_id}}" >{{k.course_name}}</option>\r\n    \r\n                             </select> \r\n                             <span style="color:red;" class="help-block" *ngIf="crsControl.invalid && crsControl.touched">\r\n                             please select a valid course\r\n                             </span>\r\n                      </div>\r\n                   </div>\r\n                   \r\n                </div>\r\n             </div>\r\n                 <div class="panel-footer panel-default text-right">\r\n                 <button type="submit" class="btn btn-primary btn-sm"><i class="fa fa-search"></i>&nbsp;Find</button>\r\n                 </div>\r\n                 <div *ngIf="errMsg" class="red-text center error-message"\r\n                 style="text-align: center;font-size: 15px;color:red;">\r\n                 Please fill the required fields\r\n                 </div>\r\n\r\n          </div>\r\n       </div>\r\n         </form>\r\n    </div>\r\n</section>\r\n\x3c!-- panels section --\x3e\r\n\r\n\r\n<section>\r\n    <div class="row">\r\n        <div class="col-md-12" id="first-content">\r\n            <div class="panel panel-primary" id="shadows">\r\n                <div class="panel-heading " id="head-title"><i class="fa fa-info-circle"></i>&nbsp;Second Revaluation Mark List\r\n                </div>\r\n                <div class="row" style="margin: 15px 5px;">\r\n                    <div class="col-md-6">\r\n                      <div class="form-group">\r\n                         <label for="email" id="labels">Exam Name </label>\r\n                        <label for="email" id="labels">{{markfinalData.exam_name}}</label>\r\n                      </div>\r\n                   </div>\r\n                   <div class="col-md-6">\r\n                      <div class="form-group">\r\n                         <label for="email" id="labels">Programe Name </label>\r\n                        <label for="email" id="labels">{{markfinalData.program_name}}</label>\r\n                      </div>\r\n                   </div>\r\n                   <div class="col-md-6">\r\n                      <div class="form-group">\r\n                         <label for="email" id="labels">Course </label>\r\n                        <label for="email" id="labels">{{markfinalData.course_name}}</label>\r\n                      </div>\r\n                   </div>\r\n                   \r\n                </div>\r\n                <div class="panel-body" id="table-contents">\r\n\r\n                    <div class="row">\r\n\r\n                        <div id="no-more-tables">\r\n\r\n                            <table class="col-md-12 table-bordered table-striped table-condensed cf">\r\n                                <thead class="cf">\r\n                                    <tr>\r\n                                        <th>SL No</th>\r\n                                        <th>False No</th>\r\n                                        <th>Register No</th>\r\n                                        <th>Current Mark</th>\r\n                                        <th>First Revaluation Mark</th>\r\n                                        <th>Second Revaluation Mark</th>\r\n                                        \x3c!-- <th>Camp officer Mark</th> --\x3e\r\n                                        <th>Final Mark</th>\r\n\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    \x3c!-- <tr *ngFor="let item of markfinalResult; let j=index " >\r\n                                        <td data-title="SL No">{{j+1}}</td>\r\n                                        <td data-title="False No">{{item.dfm_no}}</td>\r\n                                        <td data-title="Register No">{{item.student_register_number}}</td>\r\n                                        <td data-title="Current Mark">{{item.additional_mark}}</td>\r\n                                        <td data-title="First Revaluation Mark">{{item.chief_mark}}</td>\r\n                                        <td data-title="Second Revaluation Mark">{{item.chairman_mark}}</td>\r\n                                        <td data-title="Camp officer Mark">{{item.camp_officer_mark}}</td>\r\n                                        <td data-title="Final Mark">{{item.student_mark}}</td>\r\n                                    </tr> --\x3e\r\n                                    <tr *ngFor="let item of markfinalResult | paginate: { itemsPerPage: 20, currentPage: p }; let j= index" >\r\n                                        <td data-title="SL No">{{(20*(p-1))+j+1}}</td>\r\n                                        <td data-title="False No">{{item.false_num}}</td>\r\n                                        <td data-title="Register No">{{item.reg_num}}</td>\r\n                                        <td data-title="Secured Mark">{{item.current_mark}}</td>\r\n                                        <td data-title="First Revaluation Mark">{{item.first_rv_mark}}</td>\r\n                                        <td data-title="Second Revaluation Mark">{{item.second_rv_mark}}</td>\r\n                                        \x3c!-- <td data-title="Chairman Mark">{{item.chairman_mark}}</td>\r\n                                        <td data-title="Camp officer Mark">{{item.camp_officer_mark}}</td> --\x3e\r\n                                        <td data-title="Final Mark">{{item.final_mark}}</td>\r\n                                    </tr>\r\n\r\n                                </tbody>\r\n                            </table>\r\n                            <pagination-controls style="text-align:center;" (pageChange)="p = $event" >\r\n                            </pagination-controls>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class="panel-footer panel-default text-right">\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n</div>\r\n\r\n</section>'},xkgV:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var a=n("CcnG"),r=n("Ip0R"),i=function(){function e(){this.change=new a.EventEmitter,this.instances={},this.DEFAULT_ID="DEFAULT_PAGINATION_ID"}return e.prototype.defaultId=function(){return this.DEFAULT_ID},e.prototype.register=function(e){(null==e.id&&(e.id=this.DEFAULT_ID),this.instances[e.id])?this.updateInstance(e)&&this.change.emit(e.id):(this.instances[e.id]=e,this.change.emit(e.id))},e.prototype.updateInstance=function(e){var t=!1;for(var n in this.instances[e.id])e[n]!==this.instances[e.id][n]&&(this.instances[e.id][n]=e[n],t=!0);return t},e.prototype.getCurrentPage=function(e){if(this.instances[e])return this.instances[e].currentPage},e.prototype.setCurrentPage=function(e,t){if(this.instances[e]){var n=this.instances[e];t<=Math.ceil(n.totalItems/n.itemsPerPage)&&1<=t&&(this.instances[e].currentPage=t,this.change.emit(e))}},e.prototype.setTotalItems=function(e,t){this.instances[e]&&0<=t&&(this.instances[e].totalItems=t,this.change.emit(e))},e.prototype.setItemsPerPage=function(e,t){this.instances[e]&&(this.instances[e].itemsPerPage=t,this.change.emit(e))},e.prototype.getInstance=function(e){return void 0===e&&(e=this.DEFAULT_ID),this.instances[e]?this.clone(this.instances[e]):{}},e.prototype.clone=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},e}(),s=Number.MAX_SAFE_INTEGER,o=function(){function e(e){this.service=e,this.state={}}return e.prototype.transform=function(e,t){if(t instanceof Array&&(t=t[0]),!(e instanceof Array)){var n=t.id||this.service.defaultId;return this.state[n]?this.state[n].slice:e}var a,r,i=t.totalItems&&t.totalItems!==e.length,o=this.createInstance(e,t),l=o.id,c=o.itemsPerPage;if(this.service.register(o),!i&&e instanceof Array){if(c=+c||s,r=(a=(o.currentPage-1)*c)+c,this.stateIsIdentical(l,e,a,r))return this.state[l].slice;var d=e.slice(a,r);return this.saveState(l,e,d,a,r),this.service.change.emit(l),d}return this.saveState(l,e,e,a,r),e},e.prototype.createInstance=function(e,t){var n=t;return this.checkConfig(n),{id:null!=n.id?n.id:this.service.defaultId(),itemsPerPage:+n.itemsPerPage||0,currentPage:+n.currentPage||1,totalItems:+n.totalItems||e.length}},e.prototype.checkConfig=function(e){var t=["itemsPerPage","currentPage"].filter(function(t){return!(t in e)});if(0<t.length)throw new Error("PaginatePipe: Argument is missing the following required properties: "+t.join(", "))},e.prototype.saveState=function(e,t,n,a,r){this.state[e]={collection:t,size:t.length,slice:n,start:a,end:r}},e.prototype.stateIsIdentical=function(e,t,n,a){var r=this.state[e];return!!r&&(!(r.size!==t.length||r.start!==n||r.end!==a)&&r.slice.every(function(e,a){return e===t[n+a]}))},e.decorators=[{type:a.Pipe,args:[{name:"paginate",pure:!1}]}],e.ctorParameters=function(){return[{type:i}]},e}();function l(e){return!!e&&"false"!==e}var c=function(){function e(){this.maxSize=7,this.previousLabel="Previous",this.nextLabel="Next",this.screenReaderPaginationLabel="Pagination",this.screenReaderPageLabel="page",this.screenReaderCurrentLabel="You're on page",this.pageChange=new a.EventEmitter,this._directionLinks=!0,this._autoHide=!1,this._responsive=!1}return Object.defineProperty(e.prototype,"directionLinks",{get:function(){return this._directionLinks},set:function(e){this._directionLinks=l(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"autoHide",{get:function(){return this._autoHide},set:function(e){this._autoHide=l(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"responsive",{get:function(){return this._responsive},set:function(e){this._responsive=l(e)},enumerable:!0,configurable:!0}),e.decorators=[{type:a.Component,args:[{selector:"pagination-controls",template:'\n    <pagination-template  #p="paginationApi"\n                         [id]="id"\n                         [maxSize]="maxSize"\n                         (pageChange)="pageChange.emit($event)">\n    <ul class="ngx-pagination" \n        role="navigation" \n        [attr.aria-label]="screenReaderPaginationLabel" \n        [class.responsive]="responsive"\n        *ngIf="!(autoHide && p.pages.length <= 1)">\n\n        <li class="pagination-previous" [class.disabled]="p.isFirstPage()" *ngIf="directionLinks"> \n            <a tabindex="0" *ngIf="1 < p.getCurrent()" (keyup.enter)="p.previous()" (click)="p.previous()" [attr.aria-label]="previousLabel + \' \' + screenReaderPageLabel">\n                {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf="p.isFirstPage()">\n                {{ previousLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li> \n\n        <li class="small-screen">\n            {{ p.getCurrent() }} / {{ p.getLastPage() }}\n        </li>\n\n        <li [class.current]="p.getCurrent() === page.value" \n            [class.ellipsis]="page.label === \'...\'"\n            *ngFor="let page of p.pages">\n            <a tabindex="0" (keyup.enter)="p.setCurrent(page.value)" (click)="p.setCurrent(page.value)" *ngIf="p.getCurrent() !== page.value">\n                <span class="show-for-sr">{{ screenReaderPageLabel }} </span>\n                <span>{{ page.label }}</span>\n            </a>\n            <ng-container *ngIf="p.getCurrent() === page.value">\n                <span class="show-for-sr">{{ screenReaderCurrentLabel }} </span>\n                <span>{{ page.label }}</span> \n            </ng-container>\n        </li>\n\n        <li class="pagination-next" [class.disabled]="p.isLastPage()" *ngIf="directionLinks">\n            <a tabindex="0" *ngIf="!p.isLastPage()" (keyup.enter)="p.next()" (click)="p.next()" [attr.aria-label]="nextLabel + \' \' + screenReaderPageLabel">\n                 {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>\n            </a>\n            <span *ngIf="p.isLastPage()">\n                 {{ nextLabel }} <span class="show-for-sr">{{ screenReaderPageLabel }}</span>\n            </span>\n        </li>\n\n    </ul>\n    </pagination-template>\n    ',styles:["\n.ngx-pagination {\n  margin-left: 0;\n  margin-bottom: 1rem; }\n  .ngx-pagination::before, .ngx-pagination::after {\n    content: ' ';\n    display: table; }\n  .ngx-pagination::after {\n    clear: both; }\n  .ngx-pagination li {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n    margin-right: 0.0625rem;\n    border-radius: 0; }\n  .ngx-pagination li {\n    display: inline-block; }\n  .ngx-pagination a,\n  .ngx-pagination button {\n    color: #0a0a0a; \n    display: block;\n    padding: 0.1875rem 0.625rem;\n    border-radius: 0; }\n    .ngx-pagination a:hover,\n    .ngx-pagination button:hover {\n      background: #e6e6e6; }\n  .ngx-pagination .current {\n    padding: 0.1875rem 0.625rem;\n    background: #2199e8;\n    color: #fefefe;\n    cursor: default; }\n  .ngx-pagination .disabled {\n    padding: 0.1875rem 0.625rem;\n    color: #cacaca;\n    cursor: default; } \n    .ngx-pagination .disabled:hover {\n      background: transparent; }\n  .ngx-pagination a, .ngx-pagination button {\n    cursor: pointer; }\n\n.ngx-pagination .pagination-previous a::before,\n.ngx-pagination .pagination-previous.disabled::before { \n  content: '\xab';\n  display: inline-block;\n  margin-right: 0.5rem; }\n\n.ngx-pagination .pagination-next a::after,\n.ngx-pagination .pagination-next.disabled::after {\n  content: '\xbb';\n  display: inline-block;\n  margin-left: 0.5rem; }\n\n.ngx-pagination .show-for-sr {\n  position: absolute !important;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0); }\n.ngx-pagination .small-screen {\n  display: none; }\n@media screen and (max-width: 601px) {\n  .ngx-pagination.responsive .small-screen {\n    display: inline-block; } \n  .ngx-pagination.responsive li:not(.small-screen):not(.pagination-previous):not(.pagination-next) {\n    display: none; }\n}\n  "],changeDetection:a.ChangeDetectionStrategy.OnPush,encapsulation:a.ViewEncapsulation.None}]}],e.ctorParameters=function(){return[]},e.propDecorators={id:[{type:a.Input}],maxSize:[{type:a.Input}],directionLinks:[{type:a.Input}],autoHide:[{type:a.Input}],responsive:[{type:a.Input}],previousLabel:[{type:a.Input}],nextLabel:[{type:a.Input}],screenReaderPaginationLabel:[{type:a.Input}],screenReaderPageLabel:[{type:a.Input}],screenReaderCurrentLabel:[{type:a.Input}],pageChange:[{type:a.Output}]},e}(),d=function(){function e(e,t){var n=this;this.service=e,this.changeDetectorRef=t,this.maxSize=7,this.pageChange=new a.EventEmitter,this.pages=[],this.changeSub=this.service.change.subscribe(function(e){n.id===e&&(n.updatePageLinks(),n.changeDetectorRef.markForCheck(),n.changeDetectorRef.detectChanges())})}return e.prototype.ngOnInit=function(){void 0===this.id&&(this.id=this.service.defaultId()),this.updatePageLinks()},e.prototype.ngOnChanges=function(e){this.updatePageLinks()},e.prototype.ngOnDestroy=function(){this.changeSub.unsubscribe()},e.prototype.previous=function(){this.checkValidId(),this.setCurrent(this.getCurrent()-1)},e.prototype.next=function(){this.checkValidId(),this.setCurrent(this.getCurrent()+1)},e.prototype.isFirstPage=function(){return 1===this.getCurrent()},e.prototype.isLastPage=function(){return this.getLastPage()===this.getCurrent()},e.prototype.setCurrent=function(e){this.pageChange.emit(e)},e.prototype.getCurrent=function(){return this.service.getCurrentPage(this.id)},e.prototype.getLastPage=function(){var e=this.service.getInstance(this.id);return e.totalItems<1?1:Math.ceil(e.totalItems/e.itemsPerPage)},e.prototype.getTotalItems=function(){return this.service.getInstance(this.id).totalItems},e.prototype.checkValidId=function(){null==this.service.getInstance(this.id).id&&console.warn('PaginationControlsDirective: the specified id "'+this.id+'" does not match any registered PaginationInstance')},e.prototype.updatePageLinks=function(){var e=this,t=this.service.getInstance(this.id),n=this.outOfBoundCorrection(t);n!==t.currentPage?setTimeout(function(){e.setCurrent(n),e.pages=e.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,e.maxSize)}):this.pages=this.createPageArray(t.currentPage,t.itemsPerPage,t.totalItems,this.maxSize)},e.prototype.outOfBoundCorrection=function(e){var t=Math.ceil(e.totalItems/e.itemsPerPage);return t<e.currentPage&&0<t?t:e.currentPage<1?1:e.currentPage},e.prototype.createPageArray=function(e,t,n,a){a=+a;for(var r=[],i=Math.ceil(n/t),s=Math.ceil(a/2),o=e<=s,l=i-s<e,c=!o&&!l,d=a<i,p=1;p<=i&&p<=a;){var u=void 0,g=this.calculatePageNumber(p,e,a,i);u=d&&(2===p&&(c||l)||p===a-1&&(c||o))?"...":g,r.push({label:u,value:g}),p++}return r},e.prototype.calculatePageNumber=function(e,t,n,a){var r=Math.ceil(n/2);return e===n?a:1===e?e:n<a?a-r<t?a-n+e:r<t?t-r+e:e:e},e.decorators=[{type:a.Directive,args:[{selector:"pagination-template,[pagination-template]",exportAs:"paginationApi"}]}],e.ctorParameters=function(){return[{type:i},{type:a.ChangeDetectorRef}]},e.propDecorators={id:[{type:a.Input}],maxSize:[{type:a.Input}],pageChange:[{type:a.Output}]},e}(),p=function(){function e(){}return e.decorators=[{type:a.NgModule,args:[{imports:[r.CommonModule],declarations:[o,c,d],providers:[i],exports:[o,c,d]}]}],e.ctorParameters=function(){return[]},e}()}}]);