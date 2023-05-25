import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Message } from '../message.model';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent {

  @Output() addMessageEvent = new EventEmitter<any>;
  @ViewChild("subject") subjectInput!: ElementRef<HTMLInputElement>;
  @ViewChild("msgText") msgTextInput!: ElementRef<HTMLInputElement>;

  constructor(private messageService: MessagesService) { }

  ngOnInit(): void {
  }

  onSendMessage(subject: HTMLInputElement, msgText: HTMLInputElement) {
    let currentSender: Message = new Message(200, subject.value, msgText.value, "Myself");
    this.addMessageEvent.emit(currentSender);
    //alert("onSendMessage" + currentSender.subject);
  }
  onClear(subject: HTMLInputElement, msgText: HTMLInputElement) {
    //alert("onSendMessage");
    subject.value = '';
    msgText.value = '';

  }


}
