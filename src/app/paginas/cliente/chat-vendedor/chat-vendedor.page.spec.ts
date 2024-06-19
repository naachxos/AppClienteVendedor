import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatVendedorPage } from './chat-vendedor.page';

describe('ChatVendedorPage', () => {
  let component: ChatVendedorPage;
  let fixture: ComponentFixture<ChatVendedorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatVendedorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
