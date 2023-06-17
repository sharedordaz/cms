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
  originalDocument?: Document | null;

  constructor(
    private documentsService: DocumentsService,
    private router: Router,
    private route: ActivatedRoute) {


  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const id: string = params["id"]
        //if id parameter is undefined or null then
        if (!id) {
          this.editMode = false
          return
        }
        if (this.originalDocument === undefined || this.originalDocument === null) {
          return
        }
        else {
          this.originalDocument = this.documentsService.getdocument(id)
          this.editMode = true;
          this.document = JSON.parse(JSON.stringify(this.originalDocument));

        }
      })
  }
  onCancel() {
    this.router.navigate(['/documents'], { relativeTo: this.route });
  }

  onSubmit(form: NgForm) {

  }

}
