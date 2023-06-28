import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {
  public list1 = ["List1", "list1"];
  public list2 = ["List2", "list2"];

  ngOnInit() {

  }

}
