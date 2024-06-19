import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-vendedor',
  templateUrl: './login-vendedor.page.html',
  styleUrls: ['./login-vendedor.page.scss'],
})
export class LoginVendedorPage {
  password: string = '';
  rut: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService // Ajusta el nombre del servicio aquí
  ) {}

  login() {
    console.log('Intentando login con rut:', this.rut, 'y password:', this.password);
    this.authService.autenticarVendedor(this.rut, this.password).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
        if (response.status === 'success') {
          this.authService.setRut(this.rut); // Guarda el rut del cliente en el AuthService
          this.authService.setVendedor(response); // Guarda los datos del cliente
          this.router.navigate(['/homeVendedor']);
        } else {
          console.error('Credenciales incorrectas');
        }
      },
      (error) => {
        console.error('Error al autenticar cliente:', error);
      }
    );
  }
}
