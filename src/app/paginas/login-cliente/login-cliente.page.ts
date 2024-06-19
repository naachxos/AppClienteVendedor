import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Auth2Service } from '../../services/auth2.service'; // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.page.html',
  styleUrls: ['./login-cliente.page.scss'],
})
export class LoginClientePage {
  password: string = '';
  rut: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private auth2Service: Auth2Service // Ajusta el nombre del servicio aquí
  ) {}

  login() {
    this.auth2Service.autenticarCliente(this.rut, this.password).subscribe(
      (response) => {
        if (response.status === 'success') {
          this.auth2Service.setRut(this.rut); // Guarda el rut del cliente en el Auth2Service
          this.auth2Service.setCliente(response); // Guarda los datos del cliente
          this.router.navigate(['/homeCliente']);
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
