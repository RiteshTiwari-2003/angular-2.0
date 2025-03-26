import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  cartCount:number=0;
  ngOnInit():void{
    if(localStorage.getItem('mycart')!=undefined){
      let data:any=localStorage.getItem('mycart');
      let arr=JSON.parse(data);
      this.cartCount=arr.length;
    }
  }


}
