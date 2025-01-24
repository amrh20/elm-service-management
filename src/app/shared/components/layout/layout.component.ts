import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './../breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './../side-menu/side-menu.component';
import { Component, ViewChild } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-layout',
  imports: [SideMenuComponent, RouterModule, BreadcrumbComponent, CommonModule, TableComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone: true,

})
export class LayoutComponent {

  sideMenuStatus: boolean = false

  openSideMenu(event: any) {
    this.sideMenuStatus = event;

    if (this.sideMenuStatus) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }

  toggleSideMenu() {
    this.sideMenuStatus = !this.sideMenuStatus
    document.body.classList.remove('overflow-hidden');

  }

  @ViewChild(TableComponent) table!: TableComponent;


  serviceData: any[] = [];
  tableColumns: any[] = [
    { field: 'serviceName', header: 'Service Name' },
    { field: 'code', header: 'Code' },
    { field: 'type', header: 'Type' },
    { field: 'status', header: 'Status' }
  ];

  ngOnInit(): void {
    // Adding dummy data to serviceData
    this.serviceData = [
      { serviceName: 'Property Transfer', code: 'P-T01', type: 'Service Type', status: 'Active' },
      { serviceName: 'Property Ownership', code: 'P-O2', type: 'Service Type', status: 'Active' },
      { serviceName: 'Property Transfer', code: 'P-T01', type: 'Service Type', status: 'Inactive' },
      { serviceName: 'Property Ownership', code: 'P-O2', type: 'Service Type', status: 'Inactive' },
      { serviceName: 'Property Transfer', code: 'P-T01', type: 'Service Type', status: 'Active' },
      { serviceName: 'Property Ownership', code: 'P-O2', type: 'Service Type', status: 'Active' },
      { serviceName: 'Property Transfer', code: 'P-T01', type: 'Service Type', status: 'Inactive' },
      { serviceName: 'Property Ownership', code: 'P-O2', type: 'Service Type', status: 'Inactive' },
      { serviceName: 'Property Transfer', code: 'P-T01', type: 'Service Type', status: 'Active' },
      { serviceName: 'Property Ownership', code: 'P-O2', type: 'Service Type', status: 'Active' },
      { serviceName: 'Property Transfer', code: 'P-T01', type: 'Service Type', status: 'Inactive' },
      { serviceName: 'Property Ownership', code: 'P-O2', type: 'Service Type', status: 'Inactive' }
    ];
  }


  onSearch(filters: any): void {
    // Pass the filters to the table component
    this.table.onSearch(filters);
  }

}
