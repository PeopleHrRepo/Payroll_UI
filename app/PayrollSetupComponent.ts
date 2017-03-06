import { Component } from '@angular/core';
import { MyDatePickerModule } from 'mydatepicker';
import {IMyOptions, IMyDateModel} from 'mydatepicker';
import {UserDetails} from './user';
import {Http,Headers} from '@angular/http';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import {ModalService} from './ModalService'

@Component({
    templateUrl:'app/PayrollSetupComponent.html',
    styleUrls:['app/date.css']
    
})


export class PayrollSetupComponent{
  dateValue;
result;
list;
listEmp=new Array;
payrollSetup;
modalService;
nextButtonDisable;
doneButtonDisable;
  constructor(private http:Http,private modalservice:ModalService ){
    this.modalService= modalservice;
    this.getpayGroup();
    
  } 
 datePicker=true;

senddata(user){
  console.log(user);

}

ngOnInit() {
  this.modalService.setNextButton(true);
 
  this.nextButtonDisable = this.modalService.getNextButton();
  console.log("validity button" + this.nextButtonDisable);
  this.doneButtonDisable = this.modalService.getDisableButton();
}
userdata=new UserDetails();
discardChanges(user){
  
this.payrollSetup.resetForm();
}

private myDatePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'dd-mm-yyyy',
         height: '25px',
      width: '260px'
    };


    getpayGroup=function(){
    let headers=new Headers();
    var x=localStorage.getItem("token");
    var y=localStorage.getItem("empId");
    var z=localStorage.getItem("companyId");
    headers.append('user_token',x);
 this.http.get("http://172.40.1.198:8077/api-payroll/v1/api/payroll/paygroups/"+z+"/2017-01-01/2017-03-12?_dc="+y,{headers:headers}).subscribe(
        res=>{
            this.result=res.json();
            this.listEmp=this.result.data[0];  
            console.log(this.result.data[0]);
            console.log(this.listEmp.payGroupDesc);
      }
       
      )
    };

   enableDatepicker(event){
    if(event.target.value=="liveChecks" || event.target.value=="preferredMethods" ){
    
          this.datePicker=false;
   }}
onDateChanged(event: IMyDateModel) {
        // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    }

save(f,usedata,date) {

   this.dateValue=usedata.checkDate;
  this.modalservice.setDate(this.dateValue);
   this.modalservice.setForm(f);
      if(f.valid){
       console.log('inside if payroll valid frorm');
       this.modalService.setNextButton(false);
      }
         if(!f.valid){
        this.modalService.setNextButton(true);
      }

  
     
      

  }

}