import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {
  nombre: string = 'Juan';
  edad: number = 25;
  correo: string = 'algo@gmail.com'
  editando: boolean = false;

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  toggleEdicion() {
    this.editando = !this.editando;
  }

  

  guardarInfo() {
    // Aquí puedes agregar la lógica para guardar la información en tu backend o donde sea necesario
    console.log('Información guardada:', { nombre: this.nombre, edad: this.edad });
    this.editando = false; // Finaliza la edición después de guardar
  }

  accederConfiguracion() {
    // Aquí puedes redirigir a la página de configuración
    this.navCtrl.navigateForward('/galeria-post');}


}
