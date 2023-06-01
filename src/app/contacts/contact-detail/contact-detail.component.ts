import { Component, Input } from '@angular/core';
import { Contact } from '../contacts.model';
import { ContactService } from '../contact.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {

  contact?: any;

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    //subscribe to current active route and get the id from param
    this.route.params.subscribe(
      (params: Params) => {
        //retrieve contact that has id from params and store it in contact property
        this.contact = this.contactService.getContact(params['id']);
      }
    )
  }

  onDelete() {
    //delete using service
    this.contactService.deleteContact(this.contact);
    //navigate to contact list relative to this route
    // this.router.navigate(['/contacts'], { relativeTo: this.route });
    this.router.navigateByUrl('/contacts');
    //Here you put what is done when the constructor has been called
  }

}
