import {Injectable} from "@angular/core";

@Injectable()
export class ModalService {
    private nextValue = true;
    private disableValue = true;
    private formValue;
    private date;
    constructor() {
        console.log("ModalService Constructor");
    }
    public setNextButton(val) {
        console.log('setting disable next button to'+ val);
        this.nextValue = val;
    }

    public getNextButton() {
        return this.nextValue;
    }
    public setDisableButton(val) {
        console.log('setting disable to'+ val);
        this.disableValue = val;
    }

    public getDisableButton() {
        return this.disableValue;
    }
    public setForm(form){
        this.formValue=form;
    }
    public getForm(){
        return this.formValue;
    }
     public setDate(date){
        this.date=date;
    }
    public getDate(){
        return this.date;
    }
 
}