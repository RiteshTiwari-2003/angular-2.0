import { CanDeactivateFn } from '@angular/router';
import { AddproductsComponent } from '../components/addproducts/addproducts.component';

export const leaveGuard: CanDeactivateFn<AddproductsComponent> = (component, currentRoute, currentState, nextState) => {//component is my instance of it 
  return component.canExit();
};
