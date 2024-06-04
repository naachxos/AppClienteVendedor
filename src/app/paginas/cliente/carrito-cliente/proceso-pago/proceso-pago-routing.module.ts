import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcesoPagoPage } from './proceso-pago.page';

const routes: Routes = [
  {
    path: '',
    component: ProcesoPagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProcesoPagoPageRoutingModule {}
