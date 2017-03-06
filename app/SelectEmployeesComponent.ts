import { Component} from '@angular/core';
import { EaringcodesService } from './EarningcodesService';
import { Pipe, PipeTransform } from '@angular/core';

import {ModalService} from './ModalService'
/*filter code for employee */



@Pipe({
  name : 'searchPipedata',
})
export class SearchPipedata implements PipeTransform {
  public transform(value, key: string, term: string) {
    if (value==null) {
      return null;
    }

    return value.filter((item) => {
      if (item.hasOwnProperty(key)) {
        if (term) {
          let regExp = new RegExp('\\b' + term, 'gi');
          return regExp.test(item[key]);
        } else {
          return true;
        }
      } else {
        return false;
      }
    });
  }
}


/*filter code for employee end */



@Component ({  

      templateUrl:'app/SelectEmployeesComponent.html',
      styleUrls:['app/style/styles.css'],
      providers: [EaringcodesService],

})


export class SelectEmployeesComponent{



 edited=true;
  loc;
  dept

  result;
  selectemployees;
activedata;
departments;
departmentdata=new Array();

  changedata(active)
  {

   if(active)
   {
    this.activedata=true;
    this.modalservice.setNextButton(false);
   }
   else{
        this.activedata=false;
        this.modalservice.setNextButton(true);
   }
      
  }

   employee()
  {

  
       this.edited=true;
       this.dept=false;
       this.loc=false;

   this.EaringcodesService.getAllEmployes().subscribe(

          res=>{
          
           this.result=res;  
           this.selectemployees= this.result.results;
           console.log(this.selectemployees);
          }
        );

  }
  

   constructor(private  EaringcodesService:EaringcodesService,private modalservice:ModalService){

       this.edited=true;
       this.dept=false;
       this.loc=false;
       this.modalservice.setNextButton(true);
       this.EaringcodesService.getAllEmployes().subscribe(

          res=>{
          
           this.result=res;
           this.selectemployees= this.result.data;


         
         
          }
        );
    
      

}



     location()
  {   
       this.edited=false;
       this.dept=false;
       this.loc=true;
    
      
  }
department()
{ 
    this.edited=false;
    this.loc=false;
    this.dept=true;

     this.EaringcodesService.getAllEmployes().subscribe(

          res=>{
          
           this.result=res;
           this.departments= this.result.data;

     /*for(var i=0;i<this.departments.length;i++)
     {
       this.departmentdata.push(this.departments[i].departmentDesc)


       if (departmentdata.indexOf(item) == -1) {
           departmentdata.push(item);
         }
     }*/
       /* console.log(this.departmentdata);*/
         
          }
        );

     
}
 
}
