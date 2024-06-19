import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaClientePageRoutingModule } from './lista-cliente-routing.module';

import { ListaClientePage } from './lista-cliente.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaClientePageRoutingModule,
    HttpClientModule
  ],
  declarations: [ListaClientePage]
})
export class ListaClientePageModule {}
