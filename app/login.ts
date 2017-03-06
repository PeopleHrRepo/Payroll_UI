

import { Component} from "@angular/core";
import {User1} from './user';
import {Http,Headers,RequestOptions}  from '@angular/http';

import { Router, ActivatedRoute } from '@angular/router';
@Component ({

 
 selector: 'my-login',

 templateUrl:'app/login.html',
 styleUrls:['app/style/login.css']
})

export class loginComponent{
show=false;

token;
errorMesssage;
 errorMsg1;
    public errorMsg = '';
     user:User1=new User1();
     empId;
     companyId;
     loginUser = {empid:this.user.employeeId,pass:this.user.password};

     


    constructor(private http:Http, private route: ActivatedRoute,
        private router: Router,) {
      
      
       
    }

    login(user) {
  
       
                       this.http.post("http://172.40.1.198:8077/api-payroll/v1/api/login",user).subscribe(
           res=>{
             

                this.errorMsg=res.json().data;
                this.token=res.json().data.userToken;
                this.empId=res.json().data.employeeId;
                this.companyId=res.json().data.companyId;
                localStorage.setItem("token",this.token);
                localStorage.setItem("empId",this.empId);
                localStorage.setItem("companyId",this.companyId);



             
               
              
                this.token=res.json().data.userToken;
            if( this.errorMsg== null ) {
                    this.errorMsg1="error details";
                    console.log( this.errorMsg1)
                  
                      
                }
                else{
                 this.router.navigate(['/date']);
                }
                  
              
           }
          
       );
            
            
      
     
        
    }



}