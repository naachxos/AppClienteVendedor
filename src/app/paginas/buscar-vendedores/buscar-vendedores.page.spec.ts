import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarVendedoresPage } from './buscar-vendedores.page';

describe('BuscarVendedoresPage', () => {
  let component: BuscarVendedoresPage;
  let fixture: ComponentFixture<BuscarVendedoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarVendedoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
