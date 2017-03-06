import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from "@angular/http";
import {FormsModule} from '@angular/forms';

import { routing, appRoutingProviders }        from './app.routing';
import { AppComponent }  from './app.component';
import { dateComponent }  from './date';
import { CreateSpecialPayrollComponent } from './CreateSpecialPayroll';
import { MyDatePickerModule } from 'mydatepicker';
import { Ng2DatetimePickerModule } from 'ng2-datetime-picker';
import { Routesmodule } from './routingTabs';
import { DeliveryOptionsComponent} from './DeliveryOptionsComponent';
import { EarningCodesComponent} from './EarningCodesComponent';
import { PayrollSetupComponent} from './PayrollSetupComponent';
import { SelectEmployeesComponent} from './SelectEmployeesComponent';
import {SearchPipe} from './EarningCodesComponent';
import {SearchPipedata} from './SelectEmployeesComponent';
import {SortPipe} from './date';
import {SortPipedesc} from './date';
import {loginComponent} from './login';

@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule,MyDatePickerModule,Ng2DatetimePickerModule,Routesmodule,routing],
  declarations: [ AppComponent,dateComponent,loginComponent,CreateSpecialPayrollComponent,SelectEmployeesComponent,EarningCodesComponent,DeliveryOptionsComponent,SortPipedesc,PayrollSetupComponent,SearchPipe,SearchPipedata,SortPipe],
  bootstrap:    [  AppComponent ],
  providers: [
    appRoutingProviders
  ]
})
export class AppModule { }