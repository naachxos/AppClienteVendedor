import { Component } from '@angular/core';
import { BusquedaService } from '../../../services/busqueda.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.page.html',
  styleUrls: ['./lista-cliente.page.scss'],
})
export class ListaClientePage{

  rut: string = '';
  clientes: any[] = [];

  constructor(private busquedaService: BusquedaService) {}

  buscarClientes() {
    if (this.rut.length > 0) {
      this.busquedaService.buscar('cliente', this.rut).subscribe(response => {
        if (response.status === 'success') {
          this.clientes = response.data;
        } else {
          console.error('Error en la búsqueda:', response.message);
        }
      });
    } else {
      this.clientes = [];
    }
  }
}
