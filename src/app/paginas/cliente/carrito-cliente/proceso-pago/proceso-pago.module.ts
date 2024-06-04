import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcesoPagoPageRoutingModule } from './proceso-pago-routing.module';

import { ProcesoPagoPage } from './proceso-pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcesoPagoPageRoutingModule
  ],
  declarations: [ProcesoPagoPage]
})
export class ProcesoPagoPageModule {}
