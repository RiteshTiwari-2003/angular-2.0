import { ProductsComponent } from './components/products/products.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { EditproductComponent } from './components/editproduct/editproduct.component';
import { authGuard } from './gaurds/auth.guard';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'products',component:ProductsComponent},
    {path:'addproduct',component:AddproductsComponent,canActivate:[authGuard]},
    {path:"editpro/:id",component:EditproductComponent},
];
