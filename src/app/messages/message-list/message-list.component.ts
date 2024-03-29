import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model'
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  public messages: Message[] = [];

  constructor(private messageService: MessagesService) {

  }
  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
    this.messageService.messageChangeEvent.subscribe((messages: Message[]) => {
      this.messages = messages;
    });

  }
  onAddMessage(message: Message) {
    this.messages.push(message);
    //alert(message);
  }
  alerta(text: any) {
    alert(text);
  }
}
