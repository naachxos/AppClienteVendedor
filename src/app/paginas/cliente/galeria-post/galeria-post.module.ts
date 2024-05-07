import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriaPostPageRoutingModule } from './galeria-post-routing.module';

import { GaleriaPostPage } from './galeria-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriaPostPageRoutingModule
  ],
  declarations: [GaleriaPostPage]
})
export class GaleriaPostPageModule {}
