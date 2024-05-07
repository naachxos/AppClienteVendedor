import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompraBodegaPage } from './compra-bodega.page';

const routes: Routes = [
  {
    path: '',
    component: CompraBodegaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompraBodegaPageRoutingModule {}
