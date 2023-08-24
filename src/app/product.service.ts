import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product[] = [
    new Product(1, 'Memory Card', 500),
    new Product(2, 'Pen Drive', 750),
    new Product(3, 'Power Bank', 100),
  ];

  constructor() { }

  public getProducts(){
    return this.products;
  }

  public getProduct(id:number){
    return this.products.find(p=>p.productID===id);
  }
}
