import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-vendedor',
  templateUrl: './login-vendedor.page.html',
  styleUrls: ['./login-vendedor.page.scss'],
})
export class LoginVendedorPage {
  password!: string;
  rut!: string;

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    this.http.get('http://localhost/dataVendedor.php', { responseType: 'text' }).subscribe(
      (response) => {
        const cleanResponse = response.replace('Conectado!!... Entregando Datos =>', ''); 
        try {
          const userData = JSON.parse(cleanResponse);

          if (userData && userData.length > 0) {
            const usuario = userData.find((user: { rut_vendedor: string; password: string; }) => user.rut_vendedor === this.rut && user.password === this.password);

            if (usuario) {
              this.router.navigate(['/homeVendedor']);
            } else {
              console.error('Credenciales incorrectas');
            }

          } else {
            console.error('No se pudieron obtener los datos del usuario');
          }
        } catch (error) {
          console.error('Error al analizar la respuesta del servidor:', error);
        }
      },
      (error) => {
        console.error('Error al obtener los datos del usuario:', error);
      }
    );
  }
}
