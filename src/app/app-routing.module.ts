import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  // Routing configurations 
  {
    path: '',
    // component: LoginComponent
    redirectTo: 'login',
    pathMatch: 'full'

  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'products',
    component: ProductlistComponent
  },
  {
    path: 'inventory',
    component: InventoryComponent
  },
  {
    path: 'users',
    component: UserlistComponent,
    children: [  // this is how u add child routes 
      {
        path: 'userdetails/:id',
        component: UserdetailsComponent
      }
    ]
  },
  {   // needs to be placed at the end 
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
