import { Injectable } from '@angular/core';
import { Product } from "./product";

@Injectable({
  providedIn: 'root'   // provided in the module 
})
export class ProductsdataService {

  productList!: Array<Product>;
  constructor() { 
    console.log('Product data service invoked!');
    this.productList = new Array<Product>();
  }

  getProductList() {
    return this.productList;
  }
}
