// carrito-cliente.page.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from '../../../services/carrito.service';
import { Auth2Service } from '../../../services/auth2.service';

// Interfaz para describir la estructura de los productos
interface Product {
  id: number;
  title: string;
  description: string;
  precio: number;
  imagen: string;
  stock: number;
  stockDisponible: number;
}

@Component({
  selector: 'app-carrito-cliente',
  templateUrl: './carrito-cliente.page.html',
  styleUrls: ['./carrito-cliente.page.scss'],
})
export class CarritoClientePage implements OnInit {
  products: Product[] = [];
  cart: any = {};
  cliente: any; // Variable para almacenar los datos del cliente autenticado

  constructor(
    private productService: CarritoService,
    private authService: Auth2Service,
    private router: Router
  ) {}

  ngOnInit() {
    this.cliente = this.authService.getCliente(); // Obtener datos del cliente desde el servicio Auth2Service

    // Si no hay cliente autenticado, redirigir al login
    if (!this.cliente) {
      this.router.navigate(['/login-cliente']);
      return;
    }

    // Obtener lista de productos
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data.map(product => ({
        ...product,
        stockDisponible: product.stock
      }));
    });
  }

  addToCart(product: Product) {
    const quantity = prompt('Ingrese la cantidad que desea agregar:', '1');

    if (quantity === null || quantity === '' || isNaN(parseInt(quantity))) {
      alert('Por favor, ingrese una cantidad válida.');
      return;
    }

    const quantityToAdd = parseInt(quantity);

    if (quantityToAdd <= 0) {
      alert('La cantidad debe ser mayor que cero.');
      return;
    }

    if (quantityToAdd > product.stockDisponible) {
      alert('No hay suficiente stock disponible.');
      return;
    }

    if (!this.cart[product.id]) {
      this.cart[product.id] = 0; // Inicializar la cantidad en el carrito si no existe
    }

    if (product.stockDisponible < this.cart[product.id] + quantityToAdd) {
      alert('No hay suficiente stock disponible para la cantidad solicitada.');
      return;
    }

    // Simulación de agregar al carrito
    this.cart[product.id] += quantityToAdd;
    product.stockDisponible -= quantityToAdd;
    alert('Producto agregado al carrito.');

    // Mostrar el total de la compra
    console.log('Total de la compra:', this.getTotal());

    // Mostrar el rut del cliente que está comprando
    console.log('Rut del cliente:', this.cliente.rut); console.log('Total de la compra:', this.getTotal(), this.cliente.rut);
  }

  removeFromCart(productId: number) {
    const currentQuantity = this.cart[productId];

    if (currentQuantity === 1) {
      delete this.cart[productId];
    } else if (currentQuantity > 1) {
      this.cart[productId] -= 1;
    } else {
      alert('No hay productos para quitar del carrito.');
    }

    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.stockDisponible += 1;

    }

    // Mostrar el total de la compra actualizado
    console.log('Total de la compra:', this.getTotal());
  }

  clearCart() {
    this.cart = {};

    this.products.forEach(product => {
      product.stockDisponible = product.stock;
    });

    // Mostrar el total de la compra después de limpiar el carrito
    console.log('Total de la compra después de limpiar el carrito:', this.getTotal());
  }

  getTotal() {
    let total = 0;
    for (const productId in this.cart) {
      const product = this.products.find(p => p.id === parseInt(productId));
      if (product) {
        total += product.precio * this.cart[productId];
      }
    }
    return total;
  }

  comprar() {
    // Redireccionar a la página de proceso de pago
    this.router.navigate(['/proceso-pago']);
    console.log('Compra Final Efectuada: $', this.getTotal(), 'Compra Efectuada por Cliente:',this.cliente.rut);
  }
}
