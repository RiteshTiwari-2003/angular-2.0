import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  amount:any=56789;
  name:string="Ritesh Tiwari";
  dob:any='1987-17-10';
  data:any="hi this is dummy data";

}
