import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from '../contacts.model';
import { ContactService } from '../contact.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CdkDrag, CdkDragDrop } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  contact?: Contact | null;
  originalContact?: Contact | null;
  groupContacts: Contact[] = [];
  editMode: boolean = false;
  hasGroup: boolean = false;
  invalidGroupContact?: boolean;
  previousDrag: string | null = null

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.previousDrag = this.contactService.draggedContact;
    this.route.paramMap.subscribe(
      (params: any) => {
        const id = params.params.id;
        //console.log(id);
        if (!id) {
          this.editMode = false;
          return;
        }
        this.originalContact = this.contactService.getContact(id);
        if (!this.originalContact) {
          return;
        }
        this.editMode = true;
        this.contact = JSON.parse(JSON.stringify(this.originalContact));
        if (this.contact?.group !== null && this.contact?.group !== undefined) {
          this.hasGroup = true;
          this.groupContacts = [...this.contact?.group];

        }
        //console.log(this.contactService.draggedContacts);
        this.contactService.draggedContacts.forEach(element => {
          this.groupContacts.push(element);
        });
      }
    )
  }
  onCancel() {
    this.router.navigate(['/contacts'], { relativeTo: this.route });
  }
  onSubmit(form: NgForm) {
    const values = form.value;
    const newContact = new Contact(0, values.name, values.email, values.phone, values.imageUrl, this.groupContacts);
    if (this.editMode === true) {
      this.contactService.updateContact(this.originalContact, newContact);
    } else {
      this.contactService.addContact(newContact);
    }
    this.router.navigate(['/contacts'], { relativeTo: this.route });
  }
  isInvalidContact(newContact: Contact) {
    if (!newContact) {
      return true;
    }
    if (newContact.id === this.contact?.id) {
      return true;
    }
    for (let i = 0; i < this.groupContacts.length; i++) {
      if (newContact.id === this.groupContacts[i].id) {
        return true;
      }
    }
    return false;
  }
  addToGroup($event: any) {
    console.log("Event: " + $event);
    /*const selectedContact: Contact = $event.dragData;
    this.invalidGroupContact = this.isInvalidContact(selectedContact);
    if (this.invalidGroupContact) {
      return;
    }
    this.groupContacts.push(selectedContact);
    this.invalidGroupContact = false;*/
  }
  onRemoveItem(idx: number) {
    if (idx < 0 || idx >= this.groupContacts.length) {
      return;
    }
    this.groupContacts.splice(idx, 1);
    this.contactService.draggedContacts.splice(idx, 1);
    this.invalidGroupContact = false;
  }

  refreshGroupContacts() {
    //console.log(this.contactService.draggedContacts);
    console.log(this.previousDrag);
    this.contactService.draggedContacts.forEach(element => {
      this.contactService.draggedContacts = [];
      this.groupContacts.push(element);
    });

  }

}
