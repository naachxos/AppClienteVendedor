import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BodegaNegocioPageRoutingModule } from './bodega-negocio-routing.module';

import { BodegaNegocioPage } from './bodega-negocio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BodegaNegocioPageRoutingModule
  ],
  declarations: [BodegaNegocioPage]
})
export class BodegaNegocioPageModule {}
