import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent {

  @Output() addMessageEvent = new EventEmitter<any>;
  @ViewChild("subject") subjectInput!: ElementRef<HTMLInputElement>;
  @ViewChild("msgText") msgTextInput!: ElementRef<HTMLInputElement>;

  onSendMessage(subject: HTMLInputElement, msgText: HTMLInputElement) {
    let currentSender: Message = new Message(200, subject.value, msgText.value, "Myself");
    this.addMessageEvent.emit(currentSender);
    alert("onSendMessage" + currentSender.subject);
  }
  onClear() {
    alert("onSendMessage");

  }


}
