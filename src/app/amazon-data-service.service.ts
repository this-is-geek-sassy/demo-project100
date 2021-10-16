import { Injectable } from '@angular/core';
import { Product } from './product';
import { ProductsdataService } from './productsdata.service';

@Injectable({
  providedIn: 'root'
})
export class AmazonDataServiceService extends ProductsdataService {

  productList!:Array<Product>;
  constructor() { 
    super();
    this.productList = new Array<Product>();
    this.productList.push(new Product(
      1, "Angular Cookbook","../assets/images/angular.png", "Technical", 240
    ));
    this.productList.push(new Product(
      2, "Ajax for dummies", "../assets/images/pic_ajax.gif", "Technical", 640
    ));
    this.productList.push(new Product(
      3, "Life Rules", "../assets/images/purposeoflife.png", "Self help", 540
    ));
    this.productList.push(new Product(
      4, "tinkle", "../assets/images/tinkle.png", "Comic", 140
    ));
    this.productList.push(new Product(
      5, "You can win", "../assets/images/81zgGfR5TtL.png", "Self help", 440
    ));

    // replace these static values with http calls
  }
}
