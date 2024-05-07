import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BodegaNegocioPage } from './bodega-negocio.page';

describe('BodegaNegocioPage', () => {
  let component: BodegaNegocioPage;
  let fixture: ComponentFixture<BodegaNegocioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BodegaNegocioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
