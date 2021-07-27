import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { TermsOfPaymentComponent } from './terms-of-payment/terms-of-payment.component';
import { NewSlaesTaxGroupComponent } from './new-slaes-tax-group/new-slaes-tax-group.component';
import { PaymentScheduleComponent } from './payment-schedule/payment-schedule.component';
import { AllComponentsComponent } from './all-components/all-components.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    ProductsComponent,
    NewProductComponent,
    ActionBarComponent,
    TermsOfPaymentComponent,
    NewSlaesTaxGroupComponent,
    PaymentScheduleComponent,
    AllComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgMultiSelectDropDownModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
