import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReserveProductPage } from './reserve-product.page';

const routes: Routes = [
  {
    path: '',
    component: ReserveProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReserveProductPageRoutingModule {}
