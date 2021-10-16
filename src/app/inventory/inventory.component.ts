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

}
