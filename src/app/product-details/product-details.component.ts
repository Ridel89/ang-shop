import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const roteParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(roteParams.get('productId'));
    this.product = products.find((pdt) => pdt.id === productIdFromRoute);
  }

  addToCart(pdt: Product) {
    this.cartService.addToCart(pdt);
    window.alert('Your product has been added to the cart!');
  }
}
