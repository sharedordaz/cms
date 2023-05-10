import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() selectedHeaderEvent = new EventEmitter<any>();


  onSelected(selectedEvent: string) {
    this.selectedHeaderEvent.emit(selectedEvent);
  }


}
