import { Component, EventEmitter, Output } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contacts.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

/**Contact List Component **/
export class ContactListComponent {
  public contacts: Contact[] = [];

  @Output() selectedContactEvent = new EventEmitter<any>();

  constructor(private contactService: ContactService) {
  };
  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  onSelected(contact: Contact) {
    this.contactService.contactSelectedEvent.emit(contact);
  }
  newContact() {
    alert(`You are gay`);
  }
}
