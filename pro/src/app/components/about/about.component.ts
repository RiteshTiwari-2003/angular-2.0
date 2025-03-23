import { Component } from '@angular/core';
import { ChildinputComponent } from '../childinput/childinput.component';

@Component({
  selector: 'app-about',
  imports: [ChildinputComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  count:number=0;
  xyz(){
    this.count++;
   

  }

}
