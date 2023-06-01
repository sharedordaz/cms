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
  /*public contacts: Contact[] = [
    {
      id: '1',
      name: 'Rex Barzee',
      email: 'barzeer@byui.edu',
      phone: '208-496-3768',
      imageUrl: '../../assets/images/barzeer.jpg',
      group: null
    },
    {
      id: '1',
      name: 'The Joker',
      email: 'barzeer@byui.edu',
      phone: '208-496-3768',
      imageUrl: '../../assets/images/barzeer.jpg',
      group: null
    }


  ];*/
  contacts: Contact[] = [];

  @Output() selectedContactEvent = new EventEmitter<any>();

  constructor(private contactService: ContactService) {
  };
  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.contactService.contactChangedEvent
      .subscribe((contacts: Contact[]) => {
        this.contacts = contacts;
      });
  }

  /* onSelected(contact: Contact) {
     this.contactService.contactSelectedEvent.emit(contact);
   }*/

}
