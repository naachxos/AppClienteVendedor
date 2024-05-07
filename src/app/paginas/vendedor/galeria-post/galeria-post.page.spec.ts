import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GaleriaPostPage } from './galeria-post.page';

describe('GaleriaPostPage', () => {
  let component: GaleriaPostPage;
  let fixture: ComponentFixture<GaleriaPostPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
