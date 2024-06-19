import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/authVendedor.php'; // URL del script PHP en tu backend
  private rut: string | null = null;
  private vendedor: any = null;

  constructor(private http: HttpClient) {}

  autenticarVendedor(rut: string, password: string): Observable<any> {
    const formData = new FormData();
    formData.append('rut', rut);
    formData.append('password', password);

    return this.http.post<any>(this.apiUrl, formData);
  }

  setRut(rut: string) {
    this.rut = rut;
    localStorage.setItem('rut', rut);
  }

  getRut(): string | null {
    if (!this.rut) {
      this.rut = localStorage.getItem('rut');
    }
    return this.rut;
  }

  clearRut() {
    this.rut = null;
    localStorage.removeItem('rut');
  }

  setVendedor(vendedor: any) {
    this.vendedor = vendedor;
  }

  getVendedor(): any {
    return this.vendedor;
  }
}
