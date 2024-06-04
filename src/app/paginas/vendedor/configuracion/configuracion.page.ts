import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

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
    const url = `http://localhost/obtenerVendedor.php?rut=${rutUsuario}`;

    this.http.get(url).subscribe(
      (data: any) => {
        if (data) {
          this.usuario = data;
        } else {
          console.error('No se encontraron datos del Vendedor');
        }
      },
      (error) => {
        console.error('Error al obtener datos del Vendedor:', error);
      }
    );
  }

   //Modo Oscuro Ionic
  toggleDarkMode(event: any) {
    document.body.classList.toggle('dark-mode', event.detail.checked);
  }
}
