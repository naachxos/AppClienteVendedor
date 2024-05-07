import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'carga',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./paginas/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'login-vendedor',
    loadChildren: () => import('./paginas/login-vendedor/login-vendedor.module').then( m => m.LoginVendedorPageModule)
  },
  {
    path: 'homeVendedor',
    loadChildren: () => import('./paginas/vendedor/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'registroVendedor',
    loadChildren: () => import('./paginas/vendedor/registro-vendedor/registro-vendedor.module').then( m => m.RegistroVendedorPageModule)
  },

     ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  {
    path: 'login-cliente',
    loadChildren: () => import('./paginas/login-cliente/login-cliente.module').then( m => m.LoginClientePageModule)
  },
  {
    path: 'homeCliente',
    loadChildren: () => import('./paginas/cliente/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'registroCliente',
    loadChildren: () => import('./paginas/cliente/registro-cliente/registro-cliente.module').then( m => m.RegistroClientePageModule)
  },
  {
    path: 'carga',
    loadChildren: () => import('./paginas/carga/carga.module').then( m => m.CargaPageModule)
  },
  {
    path: 'galeria-post',
    loadChildren: () => import('./paginas/cliente/galeria-post/galeria-post.module').then( m => m.GaleriaPostPageModule)
  },
  {
    path: 'compra-bodega',
    loadChildren: () => import('./paginas/cliente/compra-bodega/compra-bodega.module').then( m => m.CompraBodegaPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./paginas/cliente/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'galeria-post',
    loadChildren: () => import('./paginas/vendedor/galeria-post/galeria-post.module').then( m => m.GaleriaPostPageModule)
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./paginas/vendedor/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'bodega-negocio',
    loadChildren: () => import('./paginas/vendedor/bodega-negocio/bodega-negocio.module').then( m => m.BodegaNegocioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
