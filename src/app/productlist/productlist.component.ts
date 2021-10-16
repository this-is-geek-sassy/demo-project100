import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsdataService } from '../productsdata.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
  //providers: [{provide: ProductsdataService, useClass: ProductsdataService}]   // it can also be configured at module level
})
export class ProductlistComponent implements OnInit {

  productList!: Array<Product>;
  isAdmin:boolean = true;

  constructor(prdDataService : ProductsdataService) {
    // refactor to fetch the data from a service/server side 
    //let prdDataService = new ProductsdataService();   // dependency 
    this.productList = prdDataService.getProductList();  
  }

  ngOnInit(): void {
    // invoke services
  }
  delete(pid:number): void {
    // find the product by id and then delete that product element
    for(var i=0; i<this.productList.length; i++) {
      if(this.productList[i].id == pid)
        this.productList.splice(i, 1);
    } 
  }

}
