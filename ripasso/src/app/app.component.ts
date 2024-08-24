import { Component } from '@angular/core';
import { Message } from './messaggio.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chat : Array<Message> = [new Message("Paolo"," sono il componente Paolo")]
  constructor(){}

  invioMessaggio(Mittente:HTMLInputElement, saluto: HTMLInputElement): void {
    this.chat.push(new Message(Mittente.value ,saluto.value))
  }
}
