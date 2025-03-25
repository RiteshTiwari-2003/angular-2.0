import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

import { DelhiComponent } from './components/contact/delhi/delhi.component';
import { MumbaiComponent } from './components/contact/mumbai/mumbai.component';
import { ChennaiComponent } from './components/contact/chennai/chennai.component';
import { PunjabComponent } from './components/contact/punjab/punjab.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';
import { TemplateformComponent } from './components/templateform/templateform.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'service',component:ServiceComponent},
    {path:'product',component:ProductComponent},
    {path:'posts',component:PostsComponent},
    {path:'users',component:UsersComponent},
    {path:'tforms',component:TemplateformComponent},
    {path:'rforms',component:ReactiveformComponent},
    {path:'contact',component:ContactComponent, children:[
        {path:'delhi',component:DelhiComponent},
        {path:'mumbai',component:MumbaiComponent},
        {path:'chennai',component:ChennaiComponent},
        {path:'punjab',component:PunjabComponent},
        {path:'',redirectTo:'delhi',pathMatch:'full'}
    ]},
    {path:'**',component:NotfoundComponent}

];
