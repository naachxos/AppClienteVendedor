import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service'; // Ajusta la ruta según tu proyecto

@Component({
  selector: 'app-mensajes-recibidos-vendedor',
  templateUrl: './mensajes-recibidos-vendedor.page.html',
  styleUrls: ['./mensajes-recibidos-vendedor.page.scss'],
})
export class MensajesRecibidosVendedorPage implements OnInit {
  mensajes: any[] = [];

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit(): void {
    this.obtenerMensajesVendedor();
  }

  obtenerMensajesVendedor() {
    const rut = this.authService.getRut();

    if (rut) {
      this.http.get<any[]>(`http://localhost/mensajes.php?rut=${rut}`).subscribe(
        (response: any[]) => { // Cast explícito del tipo de respuesta esperada
          if (response && response.length > 0) { // Verificar si la respuesta no está vacía
            this.mensajes = response; // Asignar directamente la respuesta al arreglo de mensajes
          } else {
            console.error('No se encontraron mensajes para el vendedor');
          }
        },
        error => {
          console.error('Error en la solicitud HTTP:', error);
        }
      );
    } else {
      console.error('Rut de vendedor no encontrado');
    }
  }
}
