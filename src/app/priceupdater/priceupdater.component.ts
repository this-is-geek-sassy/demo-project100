import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-priceupdater',
  templateUrl: './priceupdater.component.html',
  styleUrls: ['./priceupdater.component.css']
})
export class PriceupdaterComponent implements OnInit {
  @Input() 
  pricevalue!: number;  // to be set by the parent, ie. inventory

  @Output()
  update = new EventEmitter<number>();  // created a custom event 'update' 

  constructor() { }

  ngOnInit(): void {
  }
  
  updatePrice(newPrice:number):void {
    // emit a custom event to the parent (inventoryComp) along with the new pricevalue 
    this.update.emit(newPrice);
  }

}
