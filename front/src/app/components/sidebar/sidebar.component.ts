import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() sidebarChange = new EventEmitter<boolean>();

  sidebarVisible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    // Puedes ajustar el valor según cuánto quieres que el usuario haga scroll antes de ocultar el sidebar
    const scrollOffset = 75;

    if (window.pageYOffset > scrollOffset) {
      this.hideSidebar();
    } else {
      this.showSidebar();
    }
  }

  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
    this.sidebarChange.emit(this.sidebarVisible);
  }

  private hideSidebar(): void {
    this.sidebarVisible = false;
    this.sidebarChange.emit(this.sidebarVisible);
  }

  private showSidebar(): void {
    this.sidebarVisible = true;
    this.sidebarChange.emit(this.sidebarVisible);
  }
}
