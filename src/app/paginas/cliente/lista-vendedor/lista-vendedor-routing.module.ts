import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaVendedorPage } from './lista-vendedor.page';

const routes: Routes = [
  {
    path: '',
    component: ListaVendedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaVendedorPageRoutingModule {}
