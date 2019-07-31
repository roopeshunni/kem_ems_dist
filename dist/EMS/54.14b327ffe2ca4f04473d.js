(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{BBSV:function(n,e){n.exports=""},ywJU:function(n,e){n.exports='\r\n<div class="row brdcrm-mrgn">\r\n        <div class="col-md-6 col-sm-0 col-xs-0">\r\n          <div >\r\n          <div class="panel-heading mainpanel-hd text-uppercase">\r\n            \x3c!-- Examination Management System --\x3e\r\n          </div>\r\n          </div>\r\n         </div>\r\n         <div class="col-md-6 col-sm-12 col-xs-12 pull-right">\r\n          <ol class="breadcrumb">\r\n            <li><a href="#/app/dashboard"><i class="fa fa-dashboard"></i> Home</a></li>\r\n            <li><a href="#/app/evaluation">Evaluation Management\r\n            </a>\r\n              </li>\r\n              <li class="active">Answer Script Distribution</li>\r\n            </ol>\r\n         </div>\r\n       </div>\r\n\x3c!-- <section> --\x3e\r\n    <div *ngIf="isco">\r\n<section>\r\n  \x3c!-- <div class="container"> --\x3e\r\n      <div class="row">\r\n\r\n          <div class="col-md-12" id="first-content">\r\n                <form #f="ngForm" (ngSubmit)="ansScriptDistribute(f)">\r\n              <div class="panel panel-primary" id="shadows">\r\n                  <div class="panel-heading " id="head-title"><i class="fa fa-info-circle"></i>&nbsp;Answerscript Distributer\r\n                  </div>\r\n                  <div class="panel-body">\r\n                     \r\n                      <div class="row">\r\n                          <div class="col-md-6">\r\n                            <div class="form-group">\r\n                                <label for="email" id="labels">Exam<strong style="color:red;">*</strong></label>\r\n                                <select class="form-control input-sm" name="exam" (change)="examselect($event.target.value)"  required [(ngModel)]="exam" #examControl="ngModel">\r\n                                        <option  diabled selected value="undefined" disabled>----select your option-------- </option>\r\n                                    <option *ngFor="let exam of examdetails" value="{{exam.exam_id}}">{{exam.exam_name}}</option>\r\n                                    \x3c!-- <option>#</option>\r\n                                    <option>#</option>\r\n                                    <option>#</option> --\x3e\r\n                                </select>\r\n                                <span style="color:red;" class="help-block" *ngIf="examControl.errors?.required && examControl.touched">\r\n                                        Exam is required\r\n                                    </span>\r\n\r\n                           </div>\r\n                          </div>\r\n          <div class="col-md-6">\r\n                              <div class="form-group">\r\n                                  <label for="email" id="labels">Additional Examiner<strong style="color:red;">*</strong></label>\r\n                                  <select class="form-control input-sm" name="examiner"  required [(ngModel)]="examiner" #examinerControl="ngModel">\r\n                                    <option  diabled selected value="undefined" disabled>----select your option-------- </option>\r\n                                <option *ngFor="let examiner of adExaminerdetails" value="{{examiner.additional_id}}">{{examiner.additional_name}}</option>\r\n                                \x3c!-- <option>#</option>\r\n                                <option>#</option>\r\n                                <option>#</option> --\x3e\r\n                            </select>\r\n                            <span style="color:red;" class="help-block" *ngIf="examinerControl.errors?.required && examinerControl.touched">\r\n                                    Additional examiner is required\r\n                                </span>\r\n                                <div  *ngIf="isadexaminer" class="red-text center error-message" style="font-size: 15px;color:red;">\r\n                                    No additional Examiner found for that particular exam\r\n                                    </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <div class="row">\r\n          <div class="col-md-6">\r\n                              <div class="form-group">\r\n                                  <label for="email" id="labels">Number of Paper<strong style="color:red;">*</strong></label>\r\n                                  <input type="text" minlength="0" maxlength="2" class="form-control input-sm" (input)="check($event.target.value)" placeholder="total papper to be scanned" name="totalpaper" required [(ngModel)]="totalpaper"  #papperNumberControl="ngModel">\r\n                                  <span style="color:red;" class="help-block" *ngIf="papperNumberControl.errors?.required && papperNumberControl.touched">\r\n                                    Papper Number is required\r\n                                </span>\r\n                              </div>\r\n                          </div>\r\n                          \r\n          <div class="col-md-6">\r\n                              <div class="form-group">\r\n                                  <label for="email" id="labels">Paper Scanned<strong style="color:red;">*</strong></label>\r\n                                  <input type="text" (input)="check($event.target.value)" disabled class="form-control input-sm" placeholder="total papper scanned" name="scannedpaper" required [(ngModel)]="scannedpaper"  #papperScanedControl="ngModel">\r\n                                  \x3c!-- <span style="color:red;" class="help-block" *ngIf="falsenoControl.errors?.required && falsenoControl.touched">\r\n                                    False Number is required\r\n                                </span> --\x3e\r\n                              </div>\r\n                          </div>\r\n                        </div>\r\n                        <div class="row">\r\n                          <div class="col-md-6">\r\n                                <div class="form-group scan-text">\r\n                                    <label for="email" id="labels">Scan<strong style="color:red;">*</strong></label>\r\n                                    <textarea id="my_field" type="number" style="height:250px !important;" rows="2" cols="200"  class="form-control input-sm"  placeholder="Enter the False Number"  (input)="nextField($event)" (change)="nextField($event)" name="stdId" required [(ngModel)]="stdId"  #falsenoControl="ngModel"></textarea>\r\n                                    <span style="color:red;" id="stdId" class="help-block" *ngIf="falsenoControl.errors?.required && falsenoControl.touched">\r\n                                        False Number is required\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                      </div>\r\n                    \r\n                      \r\n                      <div  *ngIf="errMsg" class="red-text center error-message" style="text-align: center;font-size: 15px;color:red;">\r\n                            Please fill valid data in the required fields\r\n                            </div>\r\n                  </div>\r\n                  <div *ngIf="showButton" class="panel-footer panel-default text-right">\r\n                      <button type="submit" class="btn btn-primary btn-sm"><i class="fa fa-refresh"></i>&nbsp;Assign</button>\r\n                  </div>\r\n                  <div *ngIf="!showButton" class="panel-footer panel-default text-right">\r\n                    <button type="submit" disabled class="btn btn-primary btn-sm"><i class="fa fa-refresh"></i>&nbsp;Assign</button>\r\n                </div>\r\n\r\n              </div>\r\n              </form>\r\n          </div>\r\n      </div>\r\n  \x3c!-- </div> --\x3e\r\n\r\n</section>\r\n\r\n<section>\r\n  \x3c!-- <div class="container"> --\x3e\r\n      <div class="row">\r\n          <div class="col-md-12" id="first-content">\r\n              <div class="panel panel-primary" id="shadows">\r\n                  <div class="panel-heading " id="head-title"><i class="fa fa-info-circle"></i>&nbsp;Answerscript Distributer List\r\n                  </div>\r\n                  <div class="panel-body" id="table-contents">\r\n\r\n                      <div class="row">\r\n\r\n                          <div id="no-more-tables">\r\n\r\n                              <table class="col-md-12 col-sm-12 col-xs-12 table-bordered table-striped table-condensed cf">\r\n                                  <thead class="cf">\r\n                                      <tr>\r\n                                          <th>No</th>\r\n                                          <th>Exam</th>\r\n                                           <th>Additional Examiner Name</th>\r\n                                          <th>Answer Distribution Count</th>\r\n                                           <th>Answer Distribution Date</th>\r\n                                      </tr>\r\n                                  </thead>\r\n                                  <tbody>\r\n                                      <tr *ngFor="let examiner of ansdetails;let i=index;">\r\n                                        <td data-title="No">&nbsp;{{i+1}}</td>\r\n                                        <td data-title="Exam">&nbsp;{{examiner.exam_name}}</td>\r\n                                        <td data-title="Additional Examiner Name">&nbsp;{{examiner.additional_name}}</td>\r\n                                        <td data-title="Answer Distribution Count">&nbsp;{{examiner.answer_distribution_count}}</td>\r\n                                        <td data-title="Answer Distribution Date">&nbsp;{{examiner.answer_distribution_date}}</td>\r\n                                         \r\n\r\n                                      </tr>\r\n                                        \r\n                                        \r\n\r\n                                  </tbody>\r\n                              </table>\r\n                          </div>\r\n                      </div>\r\n\r\n                  </div>\r\n                 \r\n\r\n              </div>\r\n          </div>\r\n      </div>\r\n  \x3c!-- </div> --\x3e\r\n\r\n</section>\r\n</div>\r\n<div *ngIf="!isco">\r\n        <section>\r\n                \x3c!-- <div class="container"> --\x3e\r\n                    <div class="row">\r\n                        <div class="col-md-12" id="first-content">\r\n                            <div class="panel panel-primary" id="shadows">\r\n                                <div class="panel-heading " id="head-title"><i class="fa fa-info-circle"></i>&nbsp;Answerscript Distributer List\r\n                                </div>\r\n                                <div class="panel-body" id="table-contents">\r\n              \r\n                                    <div class="row">\r\n              \r\n                                        <div id="no-more-tables">\r\n              \r\n                                            <table class="col-md-12 col-sm-12 col-xs-12 table-bordered table-striped table-condensed cf">\r\n                                                <thead class="cf">\r\n                                                    <tr>\r\n                                                        <th>No</th>\r\n                                                        <th>Exam</th>\r\n                                                         <th>Additional Examiner Name</th>\r\n                                                        <th>Answer Distribution Count</th>\r\n                                                         <th>Answer Distribution Date</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor="let examiner of ansdetails;let i=index;">\r\n                                                      <td data-title="No">&nbsp;{{i+1}}</td>\r\n                                                      <td data-title="Exam">&nbsp;{{examiner.exam_name}}</td>\r\n                                                      <td data-title="Additional Examiner Name">&nbsp;{{examiner.additional_name}}</td>\r\n                                                      <td data-title="Answer Distribution Count">&nbsp;{{examiner.answer_distribution_count}}</td>\r\n                                                      <td data-title="Answer Distribution Date">&nbsp;{{examiner.answer_distribution_date}}</td>\r\n                                                       \r\n              \r\n                                                    </tr>\r\n                                                      \r\n                                                      \r\n              \r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n              \r\n                                </div>\r\n                               \r\n              \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                \x3c!-- </div> --\x3e\r\n              \r\n              </section>\r\n</div>'},zNhr:function(n,e,r){"use strict";r.r(e);var t=r("mrSG"),s=r("CcnG"),i=r("qmRI"),a=function(){function n(n){this.ems=n,this.errMsg=!1,this.errmsg=!1,this.isData=!1,this.showButton=!1,this.scanpapper=[],this.show_name=!1,this.isduplicate=!1,this.unique_array=[],this.s1=[],this.ems.active=5,"Camp Officer"==this.ems.roleName?this.isco=!0:this.isco=!1,$(window).load(function(){$("#my_field").keydown(function(n){})}),this.cen_id=localStorage.getItem("cen_id")}return n.prototype.ngOnInit=function(){this.getdetails()},n.prototype.ansScriptDistribute=function(n){var e=this;n.invalid?this.errMsg=!0:(this.errMsg=!1,this.ems.ansdistribute(this.ems.sessionid,this.ems.uid,this.cen_id,this.exam,this.examiner,this.unique_array).subscribe(function(r){e.ems.status=r.status,"Success"==r.status?(e.getdetails(),e.ems.msg=r.message,$("#myModal").modal("show"),n.reset()):("Unauthorised access"==r.message&&e.ems.sessionlogout(),"Bad request"==r.message?(e.ems.msg="Internal Server Error",$("#myModal").modal("show")):(e.ems.msg=r.message,$("#myModal").modal("show")))}))},n.prototype.examselect=function(n){var e=this;this.ems.addExaminerList(this.ems.sessionid,this.ems.uid,this.cen_id,n).subscribe(function(n){e.adExaminerdetails=n.data,"Unauthorised access"==n.message&&e.ems.sessionlogout(),0==e.adExaminerdetails.length?e.isadexaminer=!0:e.isadexaminer=!1})},n.prototype.check=function(n){null!=this.scannedpaper&&(this.scannedpaper==this.totalpaper?this.showButton=!0:this.showButton=!1)},n.prototype.nextField=function(n){var e=n.target.value;if(this.scan_bundleSplit=e.match(/.{1,16}/g),null!=this.scan_bundleSplit){this.scan_length=this.scan_bundleSplit.length,this.unique_array=this.scan_bundleSplit.filter(function(n,e,r){return e===r.indexOf(n)});var r=0;this.stdId="";for(var t=0,s=this.unique_array;t<s.length;t++){var i=s[t];++r>1?(this.scandata=this.scandata+i,this.stdId=this.stdId+i):this.scandata=i}0!=this.unique_array.length?this.scannedpaper=this.unique_array.length:this.scannedpaper=0,null!=this.totalpaper&&(this.totalpaper==this.scannedpaper?this.showButton=!0:this.showButton=!1),this.stdId=this.scandata;this.stdId="";for(var a=0;a<this.scandata.length;a+=16)this.stdId=this.stdId+this.scandata.substring(a,a+16)+"\n"}else this.scan_length=0,this.scannedpaper=0,null!=this.totalpaper&&(this.totalpaper==this.scannedpaper?this.showButton=!0:this.showButton=!1)},n.prototype.getdetails=function(){var n=this;this.ems.getansdistribute(this.cen_id,this.ems.sessionid,this.ems.uid).subscribe(function(e){n.ansdetails=e.data,"Unauthorised access"==e.message&&n.ems.sessionlogout(),n.ems.getExam(n.ems.sessionid,n.ems.uid).subscribe(function(e){n.examdetails=e.data,"Unauthorised access"==e.message&&n.ems.sessionlogout()})})},n=t.b([Object(s.Component)({selector:"app-ans-script-distribute",template:r("ywJU"),styles:[r("BBSV")]}),t.d("design:paramtypes",[i.a])],n)}(),o=r("Zseb"),d=r("Ip0R"),l=r("ZYCi"),c=r("gIcY"),p=r("xkgV"),m=r("fCu2"),u=r("JXGk");r.d(e,"routes",function(){return h}),r.d(e,"AnsScriptDistributeModule",function(){return b});var h=[{path:"",component:a,pathMatch:"full"}],b=function(){function n(){}return n.routes=h,n=t.b([Object(s.NgModule)({imports:[d.CommonModule,l.RouterModule.forChild(h),c.FormsModule,o.a,p.a,m.a.forRoot({confirmButtonType:"danger"}),u.ModalModule],declarations:[a],providers:[],bootstrap:[a]})],n)}()}}]);