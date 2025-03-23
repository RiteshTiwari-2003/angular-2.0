import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-childinput',
  imports: [],
  templateUrl: './childinput.component.html',
  styleUrl: './childinput.component.css'
})
export class ChildinputComponent {
  @Input() mycount!:number;

}
