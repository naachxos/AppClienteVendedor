import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  productosLista: any = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService // Inyecta el servicio de autenticación del vendedor
  ) { }

  ngOnInit() {
    // Llamada a la función para cargar las noticias al iniciar la página
    this.productoLista();
  }

  getRutVendedor() {
    return this.http.get<{ nombre_vendedor: string }>('http://localhost/dataVendedor.php');
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
    this.authService.clearRut(); // Llama al método para limpiar las credenciales
    this.router.navigate(['/login-vendedor']); // Redirige a la página de login
  }
}
