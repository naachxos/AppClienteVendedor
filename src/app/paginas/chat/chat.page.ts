import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  tipo: string = '';
  rut: string = '';
  mensajes: any[] = [];
  nuevoMensaje: string = '';

  private apiUrl = 'http://localhost/chat.php';

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tipo = params['tipo'];
      this.rut = params['rut'];
      this.cargarMensajes();
      this.iniciarActualizacionAutomatica();
    });
  }

  cargarMensajes() {
    this.http.get<any>(`${this.apiUrl}?tipo=${this.tipo}&rut=${this.rut}`).subscribe(response => {
      if (response.status === 'success') {
        this.mensajes = response.data;
      }
    });
  }

  enviarMensaje() {
    const mensaje = {
      tipo: this.tipo,
      rut: this.rut,
      mensaje: this.nuevoMensaje
    };

    this.http.post<any>(this.apiUrl, mensaje).subscribe(response => {
      if (response.status === 'success') {
        this.nuevoMensaje = '';
        this.cargarMensajes();
      }
    });
  }

  iniciarActualizacionAutomatica() {
    setInterval(() => {
      this.cargarMensajes();
    }, 5000); // Actualizar cada 5 segundos
  }
}
