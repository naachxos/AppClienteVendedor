import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { RegistroVendedorPageRoutingModule } from './registro-vendedor-routing.module';

import { RegistroVendedorPage } from './registro-vendedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroVendedorPageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroVendedorPage]
})
export class RegistroVendedorPageModule {}
