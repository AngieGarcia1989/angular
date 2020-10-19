import { Component } from '@angular/core';
import { product } from '../product.model';

@Component({
    selector: '@app-product',
    templateUrl:'./product.component.html'
}) 
export class ProductComponent {
product: product = {
    id: '1',
    image: 'assets/images/camiseta.png',
    title: 'Camiseta',
    price: 80000,
    description: 'bla bla bla bla bla'  
  };
}