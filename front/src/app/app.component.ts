import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'itsme';

  sidebarVisible: boolean = true;

  hiddenSidebar(isVisible: boolean): void {
    this.sidebarVisible = isVisible;
  }
}
