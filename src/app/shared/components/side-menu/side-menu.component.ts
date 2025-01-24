import { Component } from '@angular/core';
import { RouterLink, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',

})
export class SideMenuComponent {
  constructor () {
  }
}
