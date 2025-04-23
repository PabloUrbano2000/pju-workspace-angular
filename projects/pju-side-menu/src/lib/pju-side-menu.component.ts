/* eslint-disable @angular-eslint/no-output-on-prefix */
import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export enum TitleColor {
  red = 'text-red-500',
  green = 'text-green-500',
  blue = 'text-blue-500',
  purple = 'text-purple-500',
}

@Component({
  selector: 'lib-pju-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './pju-side-menu.component.html',
  styles: ``
})
export class PjuSideMenuComponent {
  isAuthenticated = input(false)

  titleColor = input<TitleColor>(TitleColor.purple)

  onSignOut = output()
  onSignIn = output()
}
