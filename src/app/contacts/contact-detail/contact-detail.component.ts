import { Component, Input } from '@angular/core';
import { Contact } from '../contacts.model';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {

  @Input() contact?: any;

  constructor() {
  }
  ngOnInit(): void {
    //Here you put what is done when the constructor has been called
  }

}
