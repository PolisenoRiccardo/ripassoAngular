import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messaggio !: String;

  constructor(){}

  invioMessaggio(saluto: HTMLInputElement): void {
    this.messaggio = saluto.value
  }
}
