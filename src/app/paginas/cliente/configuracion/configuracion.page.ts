import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage {
  usuario: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerRutUsuarioAutenticado();
  }

  obtenerRutUsuarioAutenticado() {
    const url = 'http://localhost/obtenerRutUsuarioAutenticado.php';

    this.http.get(url).subscribe(
      (response: any) => {
        const rutUsuario = response.rut;
        this.obtenerInformacionUsuario(rutUsuario);
      },
      (error) => {
        console.error('Error al obtener el rut del usuario autenticado:', error);
      }
    );
  }

  obtenerInformacionUsuario(rutUsuario: string) {
    const url = `http://localhost/obtenerCliente.php?rut=${rutUsuario}`;

    this.http.get(url).subscribe(
      (data: any) => {
        if (data) {
          this.usuario = data;
        } else {
          console.error('No se encontraron datos del Cliente');
        }
      },
      (error) => {
        console.error('Error al obtener datos del Cliente:', error);
      }
    );
  }

  toggleDarkMode(event: any) {
    document.body.classList.toggle('dark-mode', event.detail.checked);
  }
}
