import { Routes } from '@angular/router';
import { LoginComponent } from './user_login/login/login.component';
import { RegisterComponent } from './user_login/register/register.component';
import { HomePageComponent } from './web_page/home-page/home-page.component';
import { ProductsComponent } from './web_page/products/products.component';
import { LoginLayoutComponent } from './user_login/login-layout/login-layout.component';
import { HeaderLayoutComponent } from './web_page/header-layout/header-layout.component';
import { CartProductsComponent } from './web_page/cart-products/cart-products.component';
import { AddProductsComponent } from './web_page/add-products/add-products.component';
import { AboutComponent } from './web_page/about/about.component';

export const routes: Routes = [
  {path:"" ,redirectTo:"login-layout",pathMatch:'prefix'},
  {path:"login-layout",component:LoginLayoutComponent, children:[
    {path:"" ,redirectTo:"login",pathMatch:'prefix',outlet:"outlet-login"},
    {path:"login",component:LoginComponent,outlet:"outlet-login"},
    {path:"register",component:RegisterComponent,outlet:"outlet-login"},
  ]},

  {path:"header",component:HeaderLayoutComponent,children:[
    {path:"" ,redirectTo:"home",pathMatch:'prefix',outlet:"outlet-home"},
    {path:"home",component:HomePageComponent,outlet:"outlet-home"},
    {path:"products",component:ProductsComponent,outlet:"outlet-home"},
    {path:"cart",component:CartProductsComponent,outlet:"outlet-home"},
    {path:"addProduct",component:AddProductsComponent,outlet:"outlet-home"},
    {path:"about",component:AboutComponent,outlet:"outlet-home"}
  ]},
];
