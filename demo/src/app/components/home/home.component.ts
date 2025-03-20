import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title:string="MY Home Page";
  isActive:boolean=true;
  imagePath:string="https://picsum.photos/200/300";
  xyz(){
    this.isActive=!this.isActive;
  }

}
