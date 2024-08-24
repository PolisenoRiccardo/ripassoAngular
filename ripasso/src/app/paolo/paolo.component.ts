import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paolo',
  templateUrl: './paolo.component.html',
  styleUrls: ['./paolo.component.css']
})
export class PaoloComponent {
  @Input() messaggioRicevuto : String = "";


}
