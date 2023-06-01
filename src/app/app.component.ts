import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'cms';

  //selectedFeature: string = "documents";
  selectedFeature?: string;

  alerta(pass: any): void {
    alert(pass);
  }
  switchView(selectedFeature: string) {
    this.selectedFeature = selectedFeature;
  }



}
