import { Routes, RouterModule } from '@angular/router';
import {loginComponent} from './login';
import { dateComponent }  from './date';
import {PayrollSetupComponent } from './PayrollSetupComponent';
import { EarningCodesComponent} from './EarningCodesComponent';
import {SelectEmployeesComponent} from './SelectEmployeesComponent';

import { DeliveryOptionsComponent} from './DeliveryOptionsComponent';
const appRoutes: Routes = [
     
    { path: '', component: loginComponent,pathMatch: 'full'},
    
    { path: 'date', component: dateComponent,
         children:[
       { path: '', redirectTo: 'payroll', pathMatch: 'full' },
      { path:'payroll',component:PayrollSetupComponent },
      { path:'earningCode',component:EarningCodesComponent},
      { path:'selectEmployees',component:SelectEmployeesComponent},
      { path:'deliveryOptions',component:DeliveryOptionsComponent}
    ]
 }

   
    
];
export const appRoutingProviders: any[] = [

];
export const routing = RouterModule.forChild(appRoutes);
