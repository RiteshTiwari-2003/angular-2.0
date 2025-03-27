import { CanActivateFn, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const prodService=inject(ProductService);
  const router =inject(Router);
  if(prodService.isLoggedIn()){
    return true;
  }
  else{
    router.navigateByUrl('/');
    return false;}
  // }so in that example guys the gaurds check if the user is logged in my product service if the user is logged in so they are allowed to access the particuler route otherwise they are redirecting to the home 
  //page
};
