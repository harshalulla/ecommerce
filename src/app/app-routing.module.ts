import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {path:'welcome',component:WelcomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'productinfo',component:InfoComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'cart',component:CartComponent},
  {path:'signout',component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [WelcomeComponent,ProductsComponent,CheckoutComponent]