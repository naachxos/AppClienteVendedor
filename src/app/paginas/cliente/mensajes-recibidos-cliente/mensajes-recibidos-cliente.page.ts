// mensajes-recibidos-cliente.page.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth2Service } from '../../../services/auth2.service'; // Ajusta la ruta según tu estructura de proyecto
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensajes-recibidos-cliente',
  templateUrl: './mensajes-recibidos-cliente.page.html',
  styleUrls: ['./mensajes-recibidos-cliente.page.scss'],
})
export class MensajesRecibidosClientePage implements OnInit {
  mensajesRecibidosClientes: any[] = [];
  cliente: any;

  constructor(private http: HttpClient, private auth2Service: Auth2Service, private router: Router) {}

  ngOnInit(): void {
    this.obtenerClienteYMensajes();
  }

  obtenerClienteYMensajes() {
    this.auth2Service.obtenerClienteAutenticado().subscribe(
      (response: any) => {
        if (response.status === 'success') {
          this.cliente = response.data;
          this.obtenerMensajesCliente(this.cliente.rut);
        } else {
          console.error('Error al obtener cliente:', response.message);
        }
      },
      error => {
        console.error('Error en la solicitud HTTP:', error);
      }
    );
  }

  obtenerMensajesCliente(rutCliente: string) {
    this.http.get<any[]>(`http://localhost/mensajes.php?rut=${rutCliente}`).subscribe(
      (response: any[]) => { // Cast explícito del tipo de respuesta esperada
        if (response && response.length > 0) { // Verificar si la respuesta no está vacía
          this.mensajesRecibidosClientes = response; // Asignar directamente la respuesta al arreglo de mensajes
        } else {
          console.error('No se encontraron mensajes para el cliente');
        }
      },
      error => {
        console.error('Error en la solicitud HTTP:', error);
      }
    );
  }

  abrirChat(tipo: string, rut: string) {
    // Aquí puedes navegar a la página de chat con el tipo y rut específicos
    this.router.navigate(['/chat', { tipo, rut }]);
  }
}
