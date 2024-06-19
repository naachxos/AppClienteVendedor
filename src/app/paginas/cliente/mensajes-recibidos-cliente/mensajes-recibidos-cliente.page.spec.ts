import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MensajesRecibidosClientePage } from './mensajes-recibidos-cliente.page';

describe('MensajesRecibidosClientePage', () => {
  let component: MensajesRecibidosClientePage;
  let fixture: ComponentFixture<MensajesRecibidosClientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesRecibidosClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
