import { Component, signal } from '@angular/core';

import { PjuSideMenuComponent, TitleColor } from 'pju-side-menu'

@Component({
  selector: 'app-root',
  imports: [PjuSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pju-testbed-app';

  titleColor = TitleColor
  isAuthenticated = signal(true)
}
