import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childoutput',
  imports: [],
  templateUrl: './childoutput.component.html',
  styleUrl: './childoutput.component.css'
})
export class ChildoutputComponent {
  @Output() myevent=new EventEmitter();
  count:any=0;
  xyz(){
    this.count++;
    this.myevent.emit(this.count);

  }

}
