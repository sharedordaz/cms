import { Component, Input } from '@angular/core';
import { Message } from '../message.model'

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {
  public messages: Message[] = [
    new Message(1, "New Linux Distro", "Please make a new linux distro", "Linus Torvalds"),
    new Message(2, "Free Software", "Do free software", "Richard Stallman"),
    new Message(3, "Bill Gates", "Help me with artificial inteligence", "Bill Gates"),
  ];

  onAddMessage(message: Message) {
    this.messages.push(message);
    //alert(message);
  }
  alerta(text: any) {
    alert(text);
  }
}
