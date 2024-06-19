import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.page.html',
  styleUrls: ['./crear-producto.page.scss'],
})
export class CrearProductoPage {
  producto = {
    title: '',
    precio: 0,
    description: '',
    imagen: '',
    stock: '',
    tipoProducto: '',
    rut: ''
  };
  isSubmitting = false;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private authService: AuthService,
    private alertController: AlertController
  ) {
    // Obtener rut_vendedor del AuthService al inicializar
    const rut = this.authService.getRut();
    this.producto.rut = rut ? rut : ''; // Asigna cadena vacía si es null
  }

  async crearProducto() {
    this.isSubmitting = true;
    try {
      console.log('Datos del producto antes de enviar:', this.producto);

      const response = await this.http.post('http://localhost/crearProducto.php', this.producto, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).toPromise();

      console.log('Respuesta del servidor:', response);
      this.alerta();
    } catch (error) {
      console.error('Error al crear producto', error);
    } finally {
      this.isSubmitting = false;
    }
  }

  // Creamos la alerta e integramos el alertController en el Constructor
  async alerta() {
    const alert = await this.alertController.create({
      header: 'Alerta con Temporizador',
      message: 'Este es un mensaje de alerta que se cerrará automáticamente en 10 segundos.',
      buttons: ['OK']
    });

    await alert.present();

    // Cerrar la alerta después de 10 segundos
    setTimeout(() => {
      alert.dismiss();
    }, 10000); // 10000 milisegundos = 10 segundos
  }
}
