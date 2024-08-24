import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chat : Array<string> = ["Paolo: Sono il componente Paolo",]
  constructor(){}

  invioMessaggio(saluto: HTMLInputElement): void {
    this.chat.push("Tu:" + saluto.value)
  }
}
