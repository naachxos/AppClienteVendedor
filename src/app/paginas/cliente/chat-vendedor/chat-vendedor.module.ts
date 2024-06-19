import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatVendedorPageRoutingModule } from './chat-vendedor-routing.module';

import { ChatVendedorPage } from './chat-vendedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatVendedorPageRoutingModule
  ],
  declarations: [ChatVendedorPage]
})
export class ChatVendedorPageModule {}
