import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plugins } from '@capacitor/core';
const { Camera } = Plugins;

interface Usuario {
  nombre: string;
  rut: string;
  email: string;
  telefono: string;
  direccion: string;
  ciudad: string;
  codigoPostal: string;
  avatar?: string;
}

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage {
  usuario: Usuario = {
    nombre: '',
    rut: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    avatar: ''
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obtenerInformacionUsuario();
  }

  async obtenerInformacionUsuario() {
    const url = 'http://localhost/authCliente.php';
    const rut = localStorage.getItem('rut_cliente');

    if (!rut) {
      console.error('Rut del cliente no encontrado en el almacenamiento local.');
      return;
    }

    const formData = new FormData();
    formData.append('rut', rut);

    try {
      const response = await this.http.post<any>(url, formData).toPromise();
      console.log('Respuesta del servidor:', response);

      if (response && response.status === 'success') {
        this.usuario = {
          nombre: response.nombre,
          rut: response.rut,
          email: response.email,
          telefono: response.telefono,
          direccion: response.direccion,
          ciudad: response.ciudad,
          codigoPostal: response.codigoPostal,
          avatar: response.avatar
        };
      } else {
        console.error('Error al obtener datos del Cliente:', response);
      }
    } catch (error) {
      console.error('Error al obtener datos del Cliente:', error);
    }
  }

  toggleDarkMode(event: any) {
    document.body.classList.toggle('dark-mode', event.detail.checked);
  }

  async onFileChanged(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await this.http.post<any>('http://localhost/uploadAvatar.php', formData).toPromise();
      console.log('Respuesta del servidor:', response);

      if (response && response.status === 'success') {
        console.log('Imagen cargada exitosamente.');
        this.usuario.avatar = response.url;
      } else {
        console.error('Error al cargar la imagen:', response.message);
      }
    } catch (error) {
      console.error('Error al cargar la imagen:', error);
    }
  }

  async tomarFoto() {
    try {
      const image = await (Plugins as any).Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: 'base64',
        source: 'camera'
      });

      console.log('Foto tomada:', image);
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }
}
