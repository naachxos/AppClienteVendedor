
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProductosByRut(rut: string): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost/obtenerProducto.php?rut=${rut}`);
  }
}

