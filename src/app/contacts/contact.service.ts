import { Injectable } from '@angular/core';
import { Contact } from './contacts.model';
import { MOCKCONTACTS } from "./MOCKCONTACTS";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [];

  constructor() {
    this.contacts = MOCKCONTACTS;
  }
  getContacts(): Contact[] {
    let returnedContact: Contact[] = this.contacts;
    return returnedContact;
  }

  getContact(id: string): any | Contact | null {
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
      else {
        return null;
      }

    }
  }
}
