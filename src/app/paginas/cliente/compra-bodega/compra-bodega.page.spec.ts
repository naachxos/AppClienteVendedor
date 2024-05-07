import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompraBodegaPage } from './compra-bodega.page';

describe('CompraBodegaPage', () => {
  let component: CompraBodegaPage;
  let fixture: ComponentFixture<CompraBodegaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraBodegaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
