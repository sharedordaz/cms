import { Injectable } from '@angular/core';
import { Contact } from './contacts.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[] = [];

  constructor() { }
}
