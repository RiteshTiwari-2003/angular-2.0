import { ProductsComponent } from './components/products/products.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'products',component:ProductsComponent},
    {path:'addproduct',component:AddproductsComponent},
    {path:"editpro/:id",component:EditproductComponent},
];
