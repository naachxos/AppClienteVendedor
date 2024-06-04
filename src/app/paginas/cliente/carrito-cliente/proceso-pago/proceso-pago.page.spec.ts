import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProcesoPagoPage } from './proceso-pago.page';

describe('ProcesoPagoPage', () => {
  let component: ProcesoPagoPage;
  let fixture: ComponentFixture<ProcesoPagoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesoPagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
