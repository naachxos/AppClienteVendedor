import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.page.html',
  styleUrls: ['./carga.page.scss'],
})
export class CargaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // Esperar 3 segundos (3000 milisegundos) antes de redirigir a otra página
    setTimeout(() => {
      this.router.navigateByUrl('/intro');
    }, 8000); // Cambia 3000 a la cantidad de milisegundos que desees
  }
 

}
