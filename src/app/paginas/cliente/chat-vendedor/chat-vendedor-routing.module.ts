import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatVendedorPage } from './chat-vendedor.page';

const routes: Routes = [
  {
    path: '',
    component: ChatVendedorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatVendedorPageRoutingModule {}
