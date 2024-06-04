import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaleriaPostPageRoutingModule } from './galeria-post-routing.module';

import { GaleriaPostPage } from './galeria-post.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaleriaPostPageRoutingModule,
    HttpClientModule
  ],
  declarations: [GaleriaPostPage]
})
export class GaleriaPostPageModule {}
