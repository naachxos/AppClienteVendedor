import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesRecibidosClientePageRoutingModule } from './mensajes-recibidos-cliente-routing.module';

import { MensajesRecibidosClientePage } from './mensajes-recibidos-cliente.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesRecibidosClientePageRoutingModule,
    HttpClientModule
  ],
  declarations: [MensajesRecibidosClientePage]
})
export class MensajesRecibidosClientePageModule {}
