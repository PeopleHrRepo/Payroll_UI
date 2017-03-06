import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EaringcodesService {

    constructor(private http: Http){ }



  /*  fetchData(){
        return this.http.get('app/json/EarningCode.json').map(
            (res) => res.json());
            
    }*/

 
      fetchData(){

      let headers=new Headers();
      var x=localStorage.getItem("token");
      var y=localStorage.getItem("empId");

      var companyId=localStorage.getItem("companyId");
      console.log(companyId);



      headers.append('user_token',x);
      return this.http.get("http://172.40.1.198:8077/api-payroll/v1/api/payroll/earningcodes/"+companyId+"?_dc="+y,{headers:headers}).map(
            (res) => res.json());            
            
     }



  
     getAdditionalEarningcodes(){

      let headers=new Headers();
      var x=localStorage.getItem("token");
      var y=localStorage.getItem("empId");
      var companyId=localStorage.getItem("companyId");
      console.log(companyId);
      headers.append('user_token',x);

      return this.http.get("http://172.40.1.198:8077/api-payroll/v1/api/timesheetPayroll/masterEarningCodes/company/"+companyId+"?_dc="+y,{headers:headers}).map(
            (res) => res.json());            
            
     }












     getAllEmployes(){

      let headers=new Headers();
      var x=localStorage.getItem("token");
      var y=localStorage.getItem("empId");

      var companyId=localStorage.getItem("companyId");
      console.log(companyId);

      headers.append('user_token',x);
      
        return this.http.get("http://172.40.1.198:8077/api-payroll/v1/api/payroll/offcycle/employees/"+companyId+"/W?_dc="+y,{headers:headers}).map(
            (res) => res.json());
    }
  
   
}


