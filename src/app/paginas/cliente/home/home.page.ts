import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth2Service } from '../../../services/auth2.service'; // Importa el servicio de autenticación del cliente

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  productosLista: any = [];
  productos: any[] = [];
  constructor(
    private http: HttpClient,
    private router: Router,
    private auth2Service: Auth2Service // Inyecta el servicio de autenticación del cliente
  ) { }

  ngOnInit() {
    // Llamada a la función para cargar las noticias al iniciar la página
    this.productoLista();
  }

  getRutCliente() {
    return this.http.get<{ nombre_cliente: string }>('http://localhost/dataCliente.php');
  }

  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

  handleRefresh(event: { target: { complete: () => void; }; }) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }

  productoLista() {
    // Realizar la solicitud HTTP para obtener los datos del usuario
    this.http.get('http://localhost/obtenerPosts.php').subscribe((Response) => {
      this.productosLista = Response;
    });
  }

  logout() {
    this.auth2Service.clearRut(); // Llama al método para limpiar las credenciales
    this.router.navigate(['/login-cliente']); // Redirige a la página de login
  }

  cargarProductos() {
    this.http.get<any[]>('http://localhost/obtenerPosts3.php').subscribe(
      (response) => {
        this.productos = response;
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

}
