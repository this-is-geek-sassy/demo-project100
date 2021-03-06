import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { HeaderComponent } from './header/header.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MenuComponent } from './menu/menu.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PriceupdaterComponent } from './priceupdater/priceupdater.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CommonModule } from '@angular/common';
import { ProductsdataService } from './productsdata.service';
import { BigBasketDataServiceService } from './big-basket-data-service.service';
import { PriceUpdaterComponent } from './price-updater/price-updater.component';

@NgModule({
  declarations: [  // list of componenet which are part of this module 
    AppComponent,
    LoginComponent,
    ProductlistComponent,
    HeaderComponent,
    InventoryComponent,
    MenuComponent,
    PagenotfoundComponent,
    PriceupdaterComponent,
    RegistrationComponent,
    UserdetailsComponent,
    UserlistComponent,
    PriceUpdaterComponent
  ],
  imports: [  //list of modules to be used by this module 
    BrowserModule,  // internally also loads the core module 
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: ProductsdataService, useClass: BigBasketDataServiceService}],
  bootstrap: [AppComponent]   // defines which is the root component 
})
export class AppModule { }
