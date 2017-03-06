import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DeliveryService {

    constructor(private http: Http){ }

    getCountries(){
        return this.http.get('app/json/countries.json')
                .map(res => res.json());
            
    }
     getStates(){
        return this.http.get('app/json/states.json')
                .map(res => res.json());
    }
}