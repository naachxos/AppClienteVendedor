import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaleriaPostPage } from './galeria-post.page';

const routes: Routes = [
  {
    path: '',
    component: GaleriaPostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaleriaPostPageRoutingModule {}
