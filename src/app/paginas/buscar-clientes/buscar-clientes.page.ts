import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BusquedaService } from '../../services/busqueda.service';

@Component({
  selector: 'app-buscar-clientes',
  templateUrl: './buscar-clientes.page.html',
  styleUrls: ['./buscar-clientes.page.scss'],
})
export class BuscarClientesPage {
  rut: string = '';
  clientes: any[] = [];

  constructor(private busquedaService: BusquedaService, private router: Router) {}

  buscarClientes() {
    if (this.rut.length > 0) {
      this.busquedaService.buscar('cliente', this.rut).subscribe(response => {
        if (response.status === 'success') {
          this.clientes = response.data;
        } else {
          this.clientes = [];
        }
      });
    }
  }

  irAlChat(tipo: string, rut: string) {
    this.router.navigate(['/chat', { tipo, rut }]);
  }
}
