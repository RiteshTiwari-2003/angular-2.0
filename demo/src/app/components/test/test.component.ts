import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  imports: [FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  name:string="Ritesh Tiwari";
  status:Boolean=true;
  xyz(){
    this.status=!this.status;
  }


}
