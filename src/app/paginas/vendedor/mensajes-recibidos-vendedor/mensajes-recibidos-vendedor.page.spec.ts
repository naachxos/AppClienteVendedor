import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensajesRecibidosVendedorPage } from './mensajes-recibidos-vendedor.page';

describe('MensajesRecibidosVendedorPage', () => {
  let component: MensajesRecibidosVendedorPage;
  let fixture: ComponentFixture<MensajesRecibidosVendedorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesRecibidosVendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
