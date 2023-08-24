import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  id='';
  product:Product=new Product(0,'',0);

  constructor(public activatedRoute:ActivatedRoute, 
              private productService: ProductService){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params)=>{
      this.id = <string>params?.get('id');//params.get('id');
      this.product = <Product>this.productService.getProduct(+this.id);
    });
  }

}
