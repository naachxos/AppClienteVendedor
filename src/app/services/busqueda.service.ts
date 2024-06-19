import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  private apiUrl = 'http://localhost/buscar.php';

  constructor(private http: HttpClient) {}

  buscar(tipo: string, rut: string) {
    return this.http.get<any>(`${this.apiUrl}?tipo=${tipo}&rut=${rut}`);
  }
}
