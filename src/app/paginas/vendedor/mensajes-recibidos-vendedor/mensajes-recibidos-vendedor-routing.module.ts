import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesRecibidosVendedorPage } from './mensajes-recibidos-vendedor.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesRecibidosVendedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesRecibidosVendedorPageRoutingModule {}
