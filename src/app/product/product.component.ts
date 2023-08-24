import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  products: Product[] = [];

  constructor(public activatedRoute:ActivatedRoute,
              private productService: ProductService){}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
