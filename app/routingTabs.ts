

import { NgModule }      from '@angular/core';

import {PayrollSetupComponent } from './PayrollSetupComponent';
import { EarningCodesComponent} from './EarningCodesComponent';
import {SelectEmployeesComponent} from './SelectEmployeesComponent';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryOptionsComponent} from './DeliveryOptionsComponent';


const routes:Routes =[


/*{ path:'payroll',component:PayrollSetupComponent },
{ path:'earningCode',component:EarningCodesComponent},
{ path:'selectEmployees',component:SelectEmployeesComponent},
{ path:'deliveryOptions',component:DeliveryOptionsComponent}*/
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class Routesmodule{

}
