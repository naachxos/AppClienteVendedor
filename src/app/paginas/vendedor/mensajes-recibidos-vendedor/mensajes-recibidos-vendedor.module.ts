import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesRecibidosVendedorPageRoutingModule } from './mensajes-recibidos-vendedor-routing.module';

import { MensajesRecibidosVendedorPage } from './mensajes-recibidos-vendedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesRecibidosVendedorPageRoutingModule
  ],
  declarations: [MensajesRecibidosVendedorPage]
})
export class MensajesRecibidosVendedorPageModule {}
