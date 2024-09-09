import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { GridComponent } from './grid/grid.component';
import { UpdateorderComponent } from './updateorder/updateorder.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'order', component:OrderComponent},
  {path:'grid', component:GridComponent},
  {path:'update_order/:id', component:UpdateorderComponent},
  {path:'product', component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
