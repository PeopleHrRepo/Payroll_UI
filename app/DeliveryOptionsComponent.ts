
import { Component, ViewChild} from '@angular/core';
import { Delivery } from './delivery.interface';
import{DeliveryService} from './delivery.service';
import{ModalService} from './ModalService';
import {Http,Headers} from '@angular/http';



@Component ({

     templateUrl:'app/DeliveryOptionsComponent.html',
     styleUrls:['app/style/deliveryOptions.css'],
     providers:[DeliveryService]
})

export class DeliveryOptionsComponent{
    
disableDeliveryForm: boolean = true;
  public countries;
  private states;
  public filteredStates;
  public delivery: Delivery;
  public instr: string = '';
  public charsLeft = 250;
  private modalService;
  items;
  result;
formColor=true;
   constructor(private deliveryService:DeliveryService, private modalService1: ModalService,private http:Http) {
     
     this.formColor=true;
     this.modalService = modalService1;
     
   /*  this.deliveryService.getCountries().subscribe(
        res => this.countries = res
     );
      this.deliveryService.getStates().subscribe(
        res => this.states = res
     );*/
     this.getStateAndCountries();
    }

 
  ngOnInit() {
      console.log('initalising');
      this.delivery = {
      deliveryType:'',
      attention: '',
      address1:'',
      address2:'',
      country:'',
      city:'',
      state:'',
      zip:'',
      instructions:''
    }
  }


showDoneButton(value){
   this.ngOnInit();
   if(value==true){
   this.modalService.setDisableButton(false);
   this.formColor=true;

   }
   else{
      this.modalService.setDisableButton(true);
      this.formColor=false;
   }
 
}
  onDeliveryTypeRadioChange(value){
    this.ngOnInit();
    this.disableDeliveryForm = value;

    
    
  }
  changed() {
    this.charsLeft = 250 - this.instr.length;
  }
  save(f,delivery) {

    


    //  console.log('saving' + delivery);
    this.modalService1.setForm(f);
     console.log(f.valid);
      if(f.valid){
        
       this.modalService.setDisableButton(false);


      }
      if(!f.valid){
         this.modalService.setDisableButton(true);
      }
     

  }
  selectStates(code){
    this.filteredStates=this.countries.filter((item)=> item.country == code);
  }

 getStateAndCountries()
 {

    let headers=new Headers();
    var x=localStorage.getItem("token");
    var y=localStorage.getItem("empId");
    var z=localStorage.getItem("companyId");
    headers.append('user_token',x);
      
        this.http.get("http://172.40.1.198:8077/api-payroll/v1/api/timesheetPayroll/states?_dc="+y,{headers:headers}).subscribe(
        res=>{
            this.result=res.json();
            console.log(this.result);
            this.countries=this.result.data;
            console.log(this.countries);
            /*for(var i=0;i<this.countries.length;i++){
               this.states=this.result.data[i].descr;
               console.log(this.states);
            } 
              /*const curr: string[] = this.items.map(data => this.result.data);
            this.countries = curr.filter((x, i, a) => x !== undefined && a.indexOf(x) === i);*/
              
      }
       
      )
  }
 }

