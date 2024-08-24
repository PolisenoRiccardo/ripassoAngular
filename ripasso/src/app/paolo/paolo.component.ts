import { Component, Input } from '@angular/core';
import { Message } from '../messaggio.model';

@Component({
  selector: 'app-paolo',
  templateUrl: './paolo.component.html',
  styleUrls: ['./paolo.component.css']
})
export class PaoloComponent {
  @Input() messaggioRicevuto !: Message;

  like() {
    this.messaggioRicevuto.voteUp()
  }

  dislike() {
    this.messaggioRicevuto.voteDown()
  }
}
