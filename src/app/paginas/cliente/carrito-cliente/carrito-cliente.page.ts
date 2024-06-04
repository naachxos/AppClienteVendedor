import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Product {
  title: string;
  description: string;
  date?: string;
  precio: string;
}

@Component({
  selector: 'app-carrito-cliente',
  templateUrl: './carrito-cliente.page.html',
  styleUrls: ['./carrito-cliente.page.scss'],
})
export class CarritoClientePage implements OnInit {
  selectedProducts: Product[] = [
    { title: 'Producto 1', description: 'Descripción del producto 1', precio: '$10000' },
    { title: 'Producto 2', description: 'Descripción del producto 2', precio: '$30000' }
  ];

  purchasedProducts: Product[] = [
    { title: 'Producto 3', description: 'Descripción del producto 3', date: '2024-06-01', precio: '$23000' },
    { title: 'Producto 7', description: 'Descripción del producto 7', date: '2024-02-21', precio: '$15000' }
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  viewProduct(product: Product) {
    this.router.navigate(['/product-detail', product.title]);
  }

  removeFromCart(product: Product, event: Event) {
    event.stopPropagation();
    this.selectedProducts = this.selectedProducts.filter(p => p !== product);
  }

  checkout() {
    const confirm = window.confirm('¿Proceder con la transacción?');
    if (confirm) {
      this.router.navigate(['/proceso-pago']);
    }
  }

  markAsReceived(product: Product) {
    alert(`Producto ${product.title} marcado como recibido.`);
    this.purchasedProducts = this.purchasedProducts.filter(p => p !== product);
  }
}
