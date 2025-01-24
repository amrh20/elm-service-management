import { CommonModule } from '@angular/common';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbService } from '../../../core/services/breadcrumb.service';

interface Breadcrumb {
  label: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  standalone: true,
  imports: [RouterLink, CommonModule]
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  isDropdownOpen: boolean = false;

  constructor (private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
    this.breadcrumbService.breadcrumbs$.subscribe(
      (breadcrumbs: any) => (this.breadcrumbs = breadcrumbs)
    );
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  onProfile(): void {
    this.isDropdownOpen = false;
  }

  onLogout(): void {
    this.isDropdownOpen = false;
  }

  @Output() sideMenuStatus = new EventEmitter<any>();


  openSideMenu() {
    this.sideMenuStatus.emit(true)
  }


}