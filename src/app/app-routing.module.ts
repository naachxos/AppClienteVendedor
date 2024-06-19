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
    loadChildren: () => import('./paginas/vendedor/home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'registro-vendedor',
    loadChildren: () => import('./paginas/vendedor/registro-vendedor/registro-vendedor.module').then( m => m.RegistroVendedorPageModule)
  },
  {
    path: 'login-cliente',
    loadChildren: () => import('./paginas/login-cliente/login-cliente.module').then( m => m.LoginClientePageModule)
  },
  {
    path: 'homeCliente',
    loadChildren: () => import('./paginas/cliente/home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'registro-cliente',
    loadChildren: () => import('./paginas/cliente/registro-cliente/registro-cliente.module').then( m => m.RegistroClientePageModule)
  },
  {
    path: 'carga',
    loadChildren: () => import('./paginas/carga/carga.module').then( m => m.CargaPageModule)
  },
  {
    path: 'galeria-post',
    loadChildren: () => import('./paginas/cliente/galeria-post/galeria-post.module').then( m => m.GaleriaPostPageModule),
    
  },
  {
    path: 'compra-bodega',
    loadChildren: () => import('./paginas/cliente/compra-bodega/compra-bodega.module').then( m => m.CompraBodegaPageModule),
    
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./paginas/cliente/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule),
    
  },
  {
    path: 'galeria-post',
    loadChildren: () => import('./paginas/vendedor/galeria-post/galeria-post.module').then( m => m.GaleriaPostPageModule),
  },
  {
    path: 'configuracion2',
    loadChildren: () => import('./paginas/vendedor/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule),
  },
  {
    path: 'bodega-negocio',
    loadChildren: () => import('./paginas/vendedor/bodega-negocio/bodega-negocio.module').then( m => m.BodegaNegocioPageModule),
  },
  {
    path: 'carrito-cliente',
    loadChildren: () => import('./paginas/cliente/carrito-cliente/carrito-cliente.module').then( m => m.CarritoClientePageModule),
  },
  {
    path: 'proceso-pago',
    loadChildren: () => import('./paginas/cliente/carrito-cliente/proceso-pago/proceso-pago.module').then( m => m.ProcesoPagoPageModule),
  },
  {
    path: 'crear-producto',
    loadChildren: () => import('./paginas/vendedor/crear-producto/crear-producto.module').then( m => m.CrearProductoPageModule),
  },
  {
    path: 'lista-vendedor',
    loadChildren: () => import('./paginas/cliente/lista-vendedor/lista-vendedor.module').then( m => m.ListaVendedorPageModule),
  },
  {
    path: 'chat-vendedor',
    loadChildren: () => import('./paginas/cliente/chat-vendedor/chat-vendedor.module').then( m => m.ChatVendedorPageModule),
  },
  {
    path: 'chat-cliente',
    loadChildren: () => import('./paginas/vendedor/chat-cliente/chat-cliente.module').then( m => m.ChatClientePageModule),
  },
  {
    path: 'lista-cliente',
    loadChildren: () => import('./paginas/vendedor/lista-cliente/lista-cliente.module').then( m => m.ListaClientePageModule),
  },
  {
    path: 'chat',
    loadChildren: () => import('./paginas/chat/chat.module').then( m => m.ChatPageModule),
  },
  {
    path: 'buscar-vendedores',
    loadChildren: () => import('./paginas/buscar-vendedores/buscar-vendedores.module').then( m => m.BuscarVendedoresPageModule),
  },
  {
    path: 'buscar-clientes',
    loadChildren: () => import('./paginas/buscar-clientes/buscar-clientes.module').then( m => m.BuscarClientesPageModule),
  },
  {
    path: 'mensajes-recibidos-vendedor',
    loadChildren: () => import('./paginas/vendedor/mensajes-recibidos-vendedor/mensajes-recibidos-vendedor.module').then( m => m.MensajesRecibidosVendedorPageModule),
  },
  {
    path: 'mensajes-recibidos-cliente',
    loadChildren: () => import('./paginas/cliente/mensajes-recibidos-cliente/mensajes-recibidos-cliente.module').then( m => m.MensajesRecibidosClientePageModule),
  },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
