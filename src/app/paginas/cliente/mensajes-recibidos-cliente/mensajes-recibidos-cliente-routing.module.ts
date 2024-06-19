import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesRecibidosClientePage } from './mensajes-recibidos-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesRecibidosClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesRecibidosClientePageRoutingModule {}
