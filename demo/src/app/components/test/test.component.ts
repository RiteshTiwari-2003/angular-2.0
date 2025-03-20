import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
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
