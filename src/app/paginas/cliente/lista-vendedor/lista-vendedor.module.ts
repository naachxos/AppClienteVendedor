import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaVendedorPageRoutingModule } from './lista-vendedor-routing.module';

import { ListaVendedorPage } from './lista-vendedor.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaVendedorPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ListaVendedorPage]
})
export class ListaVendedorPageModule {}
