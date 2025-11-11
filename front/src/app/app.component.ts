import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'itsme';
  isDarkTheme = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.theme$.subscribe(isDark => {
      this.isDarkTheme = isDark;
    });
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
