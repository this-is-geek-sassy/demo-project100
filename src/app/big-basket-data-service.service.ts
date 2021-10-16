import { Injectable } from '@angular/core';
import { Product } from './product';
import { ProductsdataService } from './productsdata.service';

@Injectable({
  providedIn: 'root'
})
export class BigBasketDataServiceService extends ProductsdataService {
  productList!: Array<Product>;
  constructor() { 
    super();
    this.productList.push(new Product(
      1, "MotoG4", "../assets/images/motoG4.jpg", "Mobile", 12000
    ));
    this.productList.push(new Product(
      2, "SonyDSC", "../assets/images/sony_camera.png", "Camera", 8000
    ));
    this.productList.push(new Product(
      3, "Lenovo110", "../assets/images/lenovo.png", "Laptop", 40000
    ));
    this.productList.push(new Product(
      4, "Xaomi55", "../assets/images/lenovoTV.jpg", "Television", 40000
    ));
    this.productList.push(new Product(
      5, "Samsung Galaxy", "../assets/images/samgal.jpg", "Mobile", 14000
    ));
  }
}
