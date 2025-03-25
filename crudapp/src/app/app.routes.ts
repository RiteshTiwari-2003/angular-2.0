import { ProductsComponent } from './components/products/products.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'products',component:ProductsComponent},
    {path:'addproduct',component:AddproductsComponent},
];
