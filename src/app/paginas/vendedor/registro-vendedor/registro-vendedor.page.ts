import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-registro-vendedor',
  templateUrl: './registro-vendedor.page.html',
  styleUrls: ['./registro-vendedor.page.scss'],
})
export class RegistroVendedorPage implements OnInit {

  registroForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]], // Solo letras y espacios permitidos
      rut: ['', [Validators.required, Validators.pattern('^[0-9]{7,8}-[0-9Kk]{1}$')]], // Rut chileno válido
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(9), Validators.maxLength(9)]], // Número de teléfono chileno válido
      direccion: ['', Validators.required],
      ciudad: ['', Validators.required],
      codigoPostal: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(5), Validators.maxLength(5)]], // Código postal válido
      rutNegocio: ['', Validators.required],
      nombreNegocio: ['', Validators.required],
      telefonoNegocio: ['', Validators.required],
      urlNegocio: ['', Validators.required],
      terminos: [false, Validators.requiredTrue]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit() {}

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('password2')?.value ? null : { mismatch: true };
  }

  onSubmit() {
    console.log('Formulario:', this.registroForm.value); // Verifica los valores del formulario antes de enviarlos

    if (this.registroForm.invalid) {
      console.log('El formulario es válido, enviando datos...');

      const formData = JSON.stringify(this.registroForm.value); // Convertir a JSON
      console.log('Datos a enviar:', formData);

      this.http.post('http://localhost/registroVendedor.php', formData, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json' // Establecer el tipo de contenido como JSON
        })
      }).subscribe(
        response => {
          console.log('Registro exitoso', response);
          window.alert('Vendedor registrado exitosamente');
          this.router.navigate(['/login-vendedor']);
        },
        error => {
          console.log('Error en el registro', error);
        }
      );
    } else {
      console.log('Formulario inválido');
    }
  }
}
