import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaClientePage } from './lista-cliente.page';

describe('ListaClientePage', () => {
  let component: ListaClientePage;
  let fixture: ComponentFixture<ListaClientePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaClientePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
