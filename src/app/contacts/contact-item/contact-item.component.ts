import { Component } from '@angular/core';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { Contact } from '../contacts.model';
@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.css']
})
export class ContactItemComponent extends ContactListComponent {
  /*contacts: Contact[] = [
    new Contact('1', 'R. Kent Jackson', 'jacksonk@byui.edu', '208-496-3771', '../../assets/images/jacksonk.jpg', 'null'),
    new Contact('2', 'Rex Barzee', 'barzeer@byui.edu', '208-496-3768', '../../assets/images/barzeer.jpg', 'null')
  ];*/
  constructor() {
    super();
  };
  /*ngOnInit() {

  }*/
}