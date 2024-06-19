import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaVendedorPage } from './lista-vendedor.page';

describe('ListaVendedorPage', () => {
  let component: ListaVendedorPage;
  let fixture: ComponentFixture<ListaVendedorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
