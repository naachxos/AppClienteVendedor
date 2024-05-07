import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginVendedorPageRoutingModule } from './login-vendedor-routing.module';

import { LoginVendedorPage } from './login-vendedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginVendedorPageRoutingModule
  ],
  declarations: [LoginVendedorPage]
})
export class LoginVendedorPageModule {}
