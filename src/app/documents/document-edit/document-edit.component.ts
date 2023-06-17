import { Component, ViewChild } from '@angular/core';
import { DocumentsService } from "../documents.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Document } from '../document.model';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-document-edit',
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent {

  @ViewChild("f") form?: NgForm;

  document?: Document | null;
  editMode: boolean = false;
  originalDocument?: Document | null | undefined;

  constructor(
    private documentsService: DocumentsService,
    private router: Router,
    private route: ActivatedRoute) {


  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: any) => {
        const id = params.params.id;
        //console.log(id);
        //if id parameter is undefined or null then
        if (!id) {
          console.log("Undefined Lame")
          this.editMode = false
          return
        }
        this.originalDocument = this.documentsService.getdocument(id)

        if (this.originalDocument === undefined || this.originalDocument === null) {
          return
        }
        else {
          this.editMode = true;
          this.document = JSON.parse(JSON.stringify(this.originalDocument));

        }
      })
  }
  onCancel() {
    this.router.navigate(['/documents'], { relativeTo: this.route });
  }

  onSubmit(form: NgForm) {
    const value = form.value
    let newDocument = new Document("0", value.name, value.description, value.url, null);
    if (this.editMode === true) {
      this.documentsService.updateDocument(this.originalDocument, newDocument);
    }
    else {
      this.documentsService.addDocument(newDocument)
    }
  }

}
