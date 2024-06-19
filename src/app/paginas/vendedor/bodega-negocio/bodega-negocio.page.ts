import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../services/auth.service'; // Ajusta la ruta según la ubicación correcta

@Component({
  selector: 'app-bodega-negocio',
  templateUrl: './bodega-negocio.page.html',
  styleUrls: ['./bodega-negocio.page.scss'],
})
export class BodegaNegocioPage implements OnInit {
  productos: any[] = [];
  rut: string | null = null;

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit() {
    this.rut = this.authService.getRut();

    console.log('RUT del vendedor obtenido:', this.rut);

    if (this.rut) {
      this.obtenerProductos();
    } else {
      console.error('No se ha proporcionado rut.');
    }
  }

  obtenerProductos() {
    if (!this.rut) {
      console.error('No se ha proporcionado rut.');
      return;
    }

    const url = `http://localhost/obtenerProducto.php?rut_vendedor=${encodeURIComponent(this.rut)}`;

    console.log('URL de la solicitud:', url);

    this.http.get<any[]>(url).subscribe(
      (data) => {
        console.log('Productos recibidos:', data);
        this.productos = data;
      },
      (error) => {
        console.error('Error al obtener productos', error);
      }
    );
  }
}
