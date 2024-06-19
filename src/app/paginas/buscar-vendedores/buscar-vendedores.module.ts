import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarVendedoresPageRoutingModule } from './buscar-vendedores-routing.module';

import { BuscarVendedoresPage } from './buscar-vendedores.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarVendedoresPageRoutingModule,
    HttpClientModule
  ],
  declarations: [BuscarVendedoresPage]
})
export class BuscarVendedoresPageModule {}
