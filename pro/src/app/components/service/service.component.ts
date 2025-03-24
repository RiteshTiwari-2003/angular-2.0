import { Component } from '@angular/core';
import { ChildoutputComponent } from '../childoutput/childoutput.component';

@Component({
  selector: 'app-service',
  imports: [ChildoutputComponent],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  counter:any=0;
  abc(data:any){
    this.counter=data;
  }

}
