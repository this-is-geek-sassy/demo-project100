import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productList!: Array<Product>;
  isAdmin:boolean = false;

  constructor() {
    this.productList = new Array<Product>();
    this.productList.push(new Product(
      1, "Angular Cookbook","src\assets\images\angular.png", "Technical", 240
    ));
    this.productList.push(new Product(
      2, "Ajax for dummies", "src\assets\images\pic_ajax.gif", "Technical", 640
    ));
    this.productList.push(new Product(
      3, "Life Rules", "src\assets\images\purposeoflife.png", "Self help", 540
    ));
    this.productList.push(new Product(
      4, "tinkle", "src\assets\images\tinkle.png", "Comic", 140
    ));
    this.productList.push(new Product(
      5, "You can win", "src\assets\images\ 81zgGfR5TtL.png", "Self help", 440
    ));
   }

  ngOnInit(): void {
    // invoke services
  }

}
