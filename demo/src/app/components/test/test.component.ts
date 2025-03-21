import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  imports: [FormsModule,CommonModule,NgTemplateOutlet],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  name:string="Ritesh Tiwari";
  status:Boolean=true;
  
  courses:string[]=["Angular","react","viue"];
  xyz(){
    this.status=!this.status;
    
  }


}
