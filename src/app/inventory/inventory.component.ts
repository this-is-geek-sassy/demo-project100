import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsdataService } from '../productsdata.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  products!: Array<Product>;
  constructor(private pdataService: ProductsdataService) { 
    // this.products = pdataService.getProductList();
  }

  ngOnInit(): void {
    this.products = this.pdataService.getProductList();
  }

  setNewPrice(newPrice:number, pid:number) {
    for(var i=0; i<this.products.length; i++) {
      if(this.products[i].id==pid){
        this.products[i].price = newPrice;
      }
    }
  }

}
