import { Component, EventEmitter, Output, OnDestroy, OnInit, Input } from '@angular/core';
import { Subscription, window } from 'rxjs';
import { ContactService } from '../contact.service';
import { Contact } from '../contacts.model';
import { CdkDrag, CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})

/**Contact List Component **/
export class ContactListComponent implements OnInit, OnDestroy {

  contacts: Contact[] = [];
  private subscription?: any;

  @Output() selectedContactEvent = new EventEmitter<any>();
  @Input() draggedListElement?: any;

  constructor(private contactService: ContactService) {
  };
  ngOnInit() {
    this.contacts = this.contactService.getContacts();
    this.subscription = this.contactService.contactListChangedEvent
      .subscribe((contacts: Contact[]) => {
        this.contacts = contacts;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  drop($event: CdkDragDrop<string[]>) {
    let draggedContact = $event.container.element.nativeElement.firstElementChild?.textContent;
    //console.log($event)
    //console.log(this.draggedListElement);

    if (draggedContact) {
      this.contactService.dragContact(draggedContact);
    }
  }

  /* onSelected(contact: Contact) {
     this.contactService.contactSelectedEvent.emit(contact);
   }*/

}
