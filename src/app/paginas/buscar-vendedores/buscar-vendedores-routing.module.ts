import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarVendedoresPage } from './buscar-vendedores.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarVendedoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarVendedoresPageRoutingModule {}
