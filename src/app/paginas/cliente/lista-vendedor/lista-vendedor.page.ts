import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BusquedaService } from '../../../services/busqueda.service';

@Component({
  selector: 'app-lista-vendedor',
  templateUrl: './lista-vendedor.page.html',
  styleUrls: ['./lista-vendedor.page.scss'],
})
export class ListaVendedorPage {

  rut: string = '';
  vendedores: any[] = [];

  constructor(private busquedaService: BusquedaService) {}

  buscarVendedores() {
    if (this.rut.length > 0) {
      this.busquedaService.buscar('vendedor', this.rut).subscribe(response => {
        if (response.status === 'success') {
          this.vendedores = response.data;
        } else {
          console.error('Error en la búsqueda:', response.message);
        }
      });
    } else {
      this.vendedores = [];
    }
  }


}
