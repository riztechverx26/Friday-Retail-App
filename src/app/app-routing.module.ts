import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';
import { TermsOfPaymentComponent } from './terms-of-payment/terms-of-payment.component';
import { PaymentScheduleComponent } from './payment-schedule/payment-schedule.component';
import { NewSlaesTaxGroupComponent } from './new-slaes-tax-group/new-slaes-tax-group.component';

//This is my case
const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'new-product', component: NewProductComponent },
  { path: 'terms-of-payment', component: TermsOfPaymentComponent },
  { path: 'payment-schedule', component: PaymentScheduleComponent },
  { path: 'new-slaes-tax-group', component: NewSlaesTaxGroupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
