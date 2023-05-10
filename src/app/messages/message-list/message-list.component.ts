import { Component } from '@angular/core';
import { Message } from '../message.model'

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {
  public messages: Message[] = [
    new Message(1, "New Linux Distro", "Please make a new linux distro", "Linus Torvalds"),
  ];

  alerta(text: any) {
    alert(text);
  }
}
