import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  //event emitter
  @Output() selectedDocumentEvent = new EventEmitter<any>();

  //array/list of dummy documents
  documents: Document[] = [
    new Document('1', 'Linux Mint', 'Distribution made for dairy use and average users', 'https://linuxmint.com', null),
    new Document('2', 'Debian', 'Distribution that is specially prominent at his stability, good for servers', 'https://www.debian.org/index.es.html', null),
    new Document('3', 'Fedora', 'Distribution made for flexible uses, based on Red Hat', 'https://fedoraproject.org/es/', null),
    new Document('4', 'Arch Linux', 'High customizable and minimalistic, but hard to use, linux distribution', 'https://archlinux.org', null)
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }

}
