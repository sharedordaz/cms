import { Component } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from "./contacts.model";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  selectedContact?: any;

  constructor(private contactService: ContactService) {

  }
  ngOnInit(): void {
    this.contactService.contactSelectedEvent.subscribe((contact: Contact) => {
      this.selectedContact = contact;
    })
  }

  alerta() {
    alert(this.selectedContact.name);
  }
}
