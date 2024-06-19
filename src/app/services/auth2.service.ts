import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth2Service {
  private apiUrl = 'http://localhost/authCliente.php'; // URL del script PHP en tu backend
  private rut: string | null = null;
  private cliente: any = null;

  constructor(private http: HttpClient) {}

  autenticarCliente(rut: string, password: string): Observable<any> {
    const formData = new FormData();
    formData.append('rut', rut);
    formData.append('password', password);

    return this.http.post<any>(this.apiUrl, formData);
  }

  setRut(rut: string) {
    this.rut = rut;
    localStorage.setItem('rut_cliente', rut);
  }

  getRut(): string | null {
    if (!this.rut) {
      this.rut = localStorage.getItem('rut_cliente');
    }
    return this.rut;
  }

  clearRut() {
    this.rut = null;
    localStorage.removeItem('rut_cliente');
  }

  setCliente(cliente: any) {
    this.cliente = cliente;
  }

  getCliente(): any {
    return this.cliente;
  }

  obtenerClienteAutenticado(): Observable<any> {
    const rut = this.getRut();
    return this.http.get<any>('http://localhost/cliente.php?rut=' + rut);
  }
}
