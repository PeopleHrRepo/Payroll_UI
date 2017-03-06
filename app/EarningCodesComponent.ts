import { Component} from '@angular/core';
import { EaringcodesService } from './EarningcodesService';
import { Pipe, PipeTransform } from '@angular/core';
import {ModalService} from './ModalService';





@Component ({
      templateUrl:'app/EarningCodesComponent.html',
      styleUrls:['app/style/styles.css'],
      providers: [EaringcodesService]
})

export class EarningCodesComponent{

selectedItem;
  result;
  accordiandata;
  accordiandata1;
  modalService;
  nextButtonDisable;
  doneButtonDisable;
  earningcode;
  public selectedlist = [];
  x=false;
selectedRow;
data=true;

checkvalue=true;
hide;
   constructor(private  EaringcodesService:EaringcodesService,private modalservice:ModalService){
      this.modalService= modalservice;
       this.modalService.setNextButton(true);
      this.EaringcodesService.fetchData().subscribe(
          res=>{
           this.result=res;  
           this.accordiandata= this.result.data;
           console.log( this.accordiandata)
          }
        );

   
    this.EaringcodesService.getAdditionalEarningcodes().subscribe(
          res=>{
           this.result=res;  
          this.accordiandata1= this.result.data;
           console.log(this.result);
          }
        );


      /*  this.employee(); */



} 

addSelectedItem(obj,index) {

  console.log(index);
  if (obj.checked) {
     this.modalService.setNextButton(true);
    let that = this;
    this.selectedlist.map(function (item, index) {
      if (item.code === obj.code) {
        that.selectedlist.splice(index, 1);

        /*  this.selectedRow = !index;*/

      }
    })
  } else {
    let that1 = this;
     this.modalService.setNextButton(false);
    this.selectedlist.map(function (item) {
        if (item.code !== obj.code) {
            that1.selectedlist.push(obj);

           /*  this.selectedRow = index;*/


        }
    })
    if (this.selectedlist.length === 0) {
        this.selectedlist.push(obj);

     /*    this.selectedRow = index;
*/

    }
    
  }
  
}



mychange(code)
{

console.log(code);
this.earningcode=code;
}

remove(item)
{
  this.selectedlist.splice(this.selectedlist.indexOf(item),1);
   this.selectedRow="";

}

setClickedRow (index) {
 
   this.selectedRow = index;

  /* this.selectedlist.push(record);
   console.log(this.selectedlist)*/

  
 
}


       checkbox(x){      

      
       
        }


save(f,usedata) {
      if(f.valid){
        console.log('inside if payroll valid frorm');
       this.modalService.setNextButton(false);
      }
  }
    
}

/* filter code  for earningcodes*/
@Pipe({
  name : 'searchPipe',
})
export class SearchPipe implements PipeTransform {
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

/* filte code end for earningcodes */

