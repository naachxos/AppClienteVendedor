import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BusquedaService } from '../../services/busqueda.service';

@Component({
  selector: 'app-buscar-vendedores',
  templateUrl: './buscar-vendedores.page.html',
  styleUrls: ['./buscar-vendedores.page.scss'],
})
export class BuscarVendedoresPage {
  rut: string = '';
  vendedores: any[] = [];

  constructor(private busquedaService: BusquedaService, private router: Router) {}

  buscarVendedores() {
    if (this.rut.length > 0) {
      this.busquedaService.buscar('vendedor', this.rut).subscribe(response => {
        if (response.status === 'success') {
          this.vendedores = response.data;
        } else {
          this.vendedores = [];
        }
      });
    }
  }

  irAlChat(tipo: string, rut: string) {
    this.router.navigate(['/chat', { tipo, rut }]);
  }
}
