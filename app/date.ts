import { Component,ElementRef,ViewChild  } from '@angular/core';
import { MyDatePickerModule } from 'mydatepicker';
import {IMyOptions, IMyDateModel} from 'mydatepicker';
import {UserDetails} from './user';
import {Http,Headers} from '@angular/http';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import{ModalService} from './ModalService';
import { Location} from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: "ascending"})
export class SortPipe {
  transform(array: Array<string>, args: string): Array<string> {
    
    array.sort((a: any, b: any) => {
     if ( a[args] < b[args] ){
      return -1;
     }else if( a[args] > b[args] ){
         return 1;
     }else{
      return 0; 
     }
    });
    return array;
  }
}



@Pipe({name: "descending"})
export class SortPipedesc {
  transform(array: Array<string>, args: string): Array<string> {
    
    array.sort((a: any, b: any) => {
     if ( a[args] < b[args] ){
      return 1;
     }else if( a[args] > b[args] ){
         return -1;
     }else{
      return 0; 
     }
    });
    return array;
  }
}



@Component({
  selector: 'my-temp',
  templateUrl:'app/date.html' ,
  styleUrls: ['app/date.css'],
    providers:[ModalService]
})
export class dateComponent  { 
private id;
sub;



@ViewChild('myModal') myModal:ElementRef;
ngAfterViewInit(){
  
  console.log(this.myModal.nativeElement);
  
}

ascendingorder() {
    this.sorting=true;
    this.sort1=false;
    this.sortingdesc=false;
    
  }
descendingorder()
{

    this.sorting=false;
    this.sort1=false;
    this.sortingdesc=true;

}

  sorting;
  sort1=true;
  sortingdesc;
  
  

onDateChanged(event: IMyDateModel) {
        // event properties are: event.date, event.jsdate, event.formatted and event.epoc
    }

senddata(user){
 
  this.successMsg=false;
  this.specialButton=true;
   /*$timeout(function() {
                 $scope.success = true;
                            }, 2000);*/
this.specialCreate=false;
}
closeMsg(){
  this.successMsg=true;
  
}

discardChanges(user){
  
  var y=this.modalservice.getForm();
  y.reset();
}

private myDatePickerOptions: IMyOptions = {
        // other options...
        dateFormat: 'dd-mm-yyyy',
         height: '25px',
      width: '260px'
    };
    

successMsg=true;
specialCreate=true;
specialButton=false;
selectedDate;
 availablecodes;
 earning;
 
 formPrevious = false;
 formNext = true;
  currentRoute;
  nextButtonDisable:boolean;
  doneButtonDisable:boolean;
 payrollSetup;
 imageurl='app/download.png';
 test1:Date=new Date();
 payrollDate=new Date();
 payrollMonths=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 getPayrollMonth=this.payrollMonths[this.payrollDate.getMonth()];
 getPayrollDay=this.payrollDate.getDate();
 getPayrollYear=this.payrollDate.getFullYear();
 months= ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    days=['S','M','T','W','T','F','S'];
    result;
    list;
    listEmp=new Array;
    daysClick=0;
    dt= new Date();
    month=this.dt.getMonth(); // read the current month
    year=this.dt.getFullYear(); // read the current year 
    currentMonthIndex=new Date().getMonth();
    currentMonth=this.payrollMonths[this.currentMonthIndex];
    currentDate=new Date().getDate();
    currentYear=new Date().getFullYear();
    week=['','','','',''];
    dy=0;
    num=new Array(42);
    mon=new Array;
    monClick=new Array;
    splits=new Array;
    prevArray=new Array;
    prevArrayClick=null;
    nextArrayClick=null;
    nextArray=new Array;
    nextArray1=new Array;
    nextMonths1=new Array;
    nextMonths2=new Array;
    middleSplits=new Array;
    middleSplits1=new Array;
    splits1=null;
    clickedMonth;
    monthRow=false;
    defaultRow=true;
    selectedDay =null;
    checkmonthFlag=false;
    checkDayFlag=false;
    currentFlag;
    resData;
    payGroupData; 
    payData;
    checkColor=false;
    colorFlag=false;
    colorFlag2=false;
    val1=5;
    val2=20;
    empId;
    middleDays=new Array;
    datePicker=true;
    valid=true;
    private modalService;
    mySetupEarningCodes;
    modalClose=false;
    mysetupEanringCodeResult;
    closeVar;
  


  constructor(private http:Http , private router: Router,
        private activatedRoute: ActivatedRoute, private modalservice:ModalService,location:Location){
  this.modalService= modalservice;
  this.nextButtonDisable = this.modalService.getNextButton();
  console.log("validity button" + this.nextButtonDisable);
  this.doneButtonDisable = this.modalService.getDisableButton();

  this.availableCodes();
  this.getSetupEarningCodes();
  this.getList();
  this.getDays();
  this.getDynamicData();
  this.monthRow=false;
  this.defaultRow=true;

  this.nextButtonDisable = this.modalService.getNextButton();

  this.doneButtonDisable = this.modalService.getDisableButton();
   this.router.events
        .subscribe((event) => {
        /*    this.currentRoute = this.router.url;*/

      
        if(location.path()=='/date/earningCode'){
              
             
            this.formPrevious = true;
            this.formNext = true;
           
        }else if(location.path()=='/date/selectEmployees'){
          
            this.formPrevious = true;
            this.formNext = true;
          
        }
        else if(location.path()=='/date/deliveryOptions'){
            this.formPrevious = true;
            this.formNext = false;
        

        }
        else {
         
           this.formPrevious = false;
            this.formNext = true;
               
        }
        });







} 

ngAfterContentChecked() {
 
  this.nextButtonDisable = this.modalService.getNextButton();
  console.log(this.nextButtonDisable+"lll");
  this.doneButtonDisable = this.modalService.getDisableButton();
  console.log(this.modalservice.getForm());
var x=this.modalservice.getDate();
 
   if (typeof x === 'object') {
    var str = x.toString();
    console.log(str.split('-'));
    var str1=new Array;
    str1=str.split('-');
    this.selectedDate=str1[0];
    console.log(str1[0]);
    console.log(this.selectedDate);
  }

}

 ngOnInit() {
   this.sub = this.activatedRoute.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
    });
 }
nextButton(){
   
       this.currentRoute=  this.router.url;;
      
       if(this.currentRoute == '/date/payroll'){
         this.router.navigate(['date/earningCode']);
        
       /*  this.formPrevious = true;
            this.formNext = true;*/
       }
        if(this.currentRoute == '/date/earningCode'){
         this.router.navigate(['date/selectEmployees']);
       
       }
        if(this.currentRoute == '/date/selectEmployees'){
         this.router.navigate(['date/deliveryOptions']);
        }  
    }
    prevButton(){

        this.currentRoute=  this.router.url;;
      
       if(this.currentRoute == '/date/earningCode'){
         this.router.navigate(['date/payroll']);
         
       }
        if(this.currentRoute == '/date/selectEmployees'){
         this.router.navigate(['date/earningCode']);
      }
        if(this.currentRoute == '/date/deliveryOptions'){
         this.router.navigate(['date/selectEmployees']);
     }



    }

closeParent(){
  var x=this.myModal.nativeElement;
 
  this.closeVar=true;
}



getMonth(mon,currYear){
    
    this.splits1 = new Array;
    this.monClick = new Array;
    this.daysClick = 0;
    this.selectedDay = new Array;
    this.prevArrayClick=new Array;
    this.nextArrayClick=new Array;
    for(var i=0;i<=this.months.length;i++){
      if(mon==this.months[i]){
        this.clickedMonth=this.months.indexOf(mon);
      }
    }
    
    if(this.month==this.clickedMonth && currYear==new Date().getFullYear()){
      this.currentFlag=this.currentDate;
    }
    else{
      this.currentFlag=false;
    }
    this.dt=new Date(currYear,this.clickedMonth,1);
    var firstDay=this.dt.getDay();
    this.dt.setMonth(this.clickedMonth+1,0);
    var lastDay=this.dt.getDate();
    this.dt.setMonth(this.clickedMonth,0);
    var previousDays=this.dt.getDate();
    this.dt.setMonth(this.clickedMonth+1,1);
    var nextDays=this.dt.getDate();
   
    for(var i=0;i<35;i++){
      if((i>=firstDay) && (this.daysClick<lastDay)){
        this.daysClick=this.daysClick+1;
        this.monClick.push(this.daysClick);
  
      }
      
      else if(i<firstDay){ 
          this.monClick.push(previousDays);
          this.prevArrayClick.push(previousDays);
          previousDays=previousDays-1;
          this.monClick.sort();
        }
        else{
          this.monClick.push(nextDays);
          this.nextArrayClick.push(nextDays);
          nextDays=nextDays+1;
          this.nextArrayClick.sort();
        }
    }
 
    var size = 7;
        for (var i=0; i<35; i+=size) {
          var smallarray = this.monClick.slice(i,i+size);
          this.splits1.push(smallarray);
        } 
        this.monthRow=true;
        this.defaultRow=false;
    
  }

  dec(year,mon){
    this.year=year-1;
    this.getMonth(this.months[new Date().getMonth()],this.year);
  }
  inc(year,mon){
    this.year=year+1;
    this.getMonth(this.months[new Date().getMonth()],this.year);   
  }
  selectEmp(x){
    this.empId=x;
   
  }

  getDays(){
    this.selectedDay=new Array;
    this.dt=new Date(this.year, this.month,1);//Year , month,date format
    var first_day=this.dt.getDay(); //, first day of present month
    this.dt.setMonth(this.month+1,0); // Set to next month and one day backward. 
    var last_date=this.dt.getDate(); // Last date of present month
    this.dt.setMonth(this.month,0);
    var previousDays=this.dt.getDate();
    this.dt.setMonth(this.month+1,1);
    var nextDays=this.dt.getDate();
    var count=0;
    for(var i=0;i<35;i++){
        if((i>= first_day) && (this.dy<last_date)){
          this.dy=this.dy+1;
          this.mon.push(this.dy);   
        }
        else if(i<first_day){ 
          this.mon.push(previousDays);
          this.prevArray.push(previousDays);
          previousDays=previousDays-1;
          this.mon.sort();
        
        }
        else{
          this.mon.push(nextDays);
          this.nextArray.push(nextDays);
          nextDays=nextDays+1;
         
        }
  }
  

        var size = 7;
        for (var i=0; i<35; i+=size) {
          var smallarray = this.mon.slice(i,i+size);
          this.splits.push(smallarray); 
          
        }
         
         
      
             
  }
   getDynamicData=function(){

    let headers=new Headers();
    var x=localStorage.getItem("token");
    var y=localStorage.getItem("empId");
    var z=localStorage.getItem("companyId");
    headers.append('user_token',x);
    this.http.get("http://172.40.1.198:8077/api-payroll/v1/api/employeeName?_dc="+y,{headers:headers}).subscribe(
      res=>{
        console.log(res.json());
        this.empName=res.json().data;
      }
    );
    this.http.get("http://172.40.1.198:8077/api-payroll/v1/api/payroll/paygroups/"+z+"/2017-01-01/2017-03-12?_dc="+y,{headers:headers}).subscribe(
      res=>{
        console.log(res.json());
        this.resData=res.json();
        this.payGroupData=this.resData.data;
        
        
       
      }
    );
  }

 getList(){
      
  
    let headers=new Headers();
    var x=localStorage.getItem("token");
    var y=localStorage.getItem("empId");
    headers.append('user_token',x);
    
    this.http.get("http://172.40.1.198:8077/api-payroll/v1/api/timesheetPayroll/userCompanies?_dc="+y,{headers:headers}).subscribe(
      res=>{
        
        this.list=res.json().data;
        this.empId=this.list[0].orgDesc;
        console.log(res.json());
      }
    );
    

   
  }



getSetupEarningCodes() {
console.log("15456456556544556");

  let headers=new Headers();
    var x=localStorage.getItem("token");
    var y=localStorage.getItem("empId");
    var companyId=localStorage.getItem("companyId");

    headers.append('user_token',x);
    
    this.http.get("http://172.40.1.198:8077/api-payroll/v1/api/payroll/earningcodes/"+companyId+"?_dc="+y,{headers:headers}).subscribe(

  //  this.http.get('app/json/setupEarningCodes.json').subscribe(
      res=> {
        this.earning=res.json().data;

        console.log(this.earning);
      }
    );
  }



  availableCodes() {

  let headers=new Headers();
    var x=localStorage.getItem("token");
    var y=localStorage.getItem("empId");
    var companyId=localStorage.getItem("companyId");

    headers.append('user_token',x);

    this.http.get("http://172.40.1.198:8077/api-payroll/v1/api/timesheetPayroll/masterEarningCodes/company/"+companyId+"?_dc="+y,{headers:headers}).subscribe( 
    
    // this.http.get("http://172.40.1.198:8077/api-payroll/v1/api/payroll/earningcodes/"+companyId+"?_dc="+y,{headers:headers}).subscribe(
    // this.http.get('app/json/EarningCode.json').subscribe(
      res=> {
        this.availablecodes=res.json().data;
        console.log(this.availablecodes + "dgfsdgf");
      }
    );
  }






}

 
  






