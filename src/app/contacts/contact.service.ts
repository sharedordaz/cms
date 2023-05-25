import { EventEmitter, Injectable } from '@angular/core';
import { Contact } from './contacts.model';
import { MOCKCONTACTS } from "./MOCKCONTACTS";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactSelectedEvent = new EventEmitter<Contact>();
  contacts: Contact[] = [];

  constructor() {
    this.contacts = MOCKCONTACTS;
  }
  getContacts(): Contact[] {
    let returnedContact: Contact[] = this.contacts;
    return returnedContact.slice();
  }

  getContact(id: string): any | Contact | null {
    for (const contact of this.contacts) {
      if (contact.id === id) {
        return contact;
      }
    }
    return null;

  }
}
