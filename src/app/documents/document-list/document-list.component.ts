import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Document } from '../document.model';
import { DocumentsService } from '../documents.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit, OnDestroy {
  @Output() selectedDocumentEvent = new EventEmitter<any>();

  private subscription?: Subscription;

  documents: Document[] = []
  constructor(private documentService: DocumentsService) {
    this.documents = this.documentService.getDocuments();
  }

  ngOnInit(): void {
    this.documents = this.documentService.getDocuments();
    this.subscription = this.documentService.documentListChangedEvent.subscribe(
      (documents: Document[]) => {
        this.documents = documents;
      }
    )
  }

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }



}
