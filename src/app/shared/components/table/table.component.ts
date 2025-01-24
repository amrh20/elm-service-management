import { Router } from '@angular/router';
import { NoDataFoundComponent } from './../no-data-found/no-data-found.component';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';

interface Column {
  field: string;
  header: string;
  searchable: boolean;
}


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [TableModule, CommonModule, NoDataFoundComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  @Input() serviceData: any[] = [];
  @Input() tableColumns: { field: string; header: string }[] = [];

  filteredData: any = [];

  ngOnInit(): void {
    this.filteredData = [...this.serviceData];
  }

  constructor (private router: Router) {

  }

  onSearch(filters: { searchText: string; status: string; priceType: string }): void {
    const { searchText, status, priceType } = filters;

    this.filteredData = this.serviceData.filter((row) => {
      const matchesSearchText =
        !searchText ||
        row.serviceName.toLowerCase().includes(searchText.toLowerCase()) ||
        row.code.toLowerCase().includes(searchText.toLowerCase());
      const matchesStatus = !status || row.status === status;
      const matchesPriceType = !priceType || row.type === priceType;

      return matchesSearchText && matchesStatus && matchesPriceType;
    });
  }



  onEdit(row: any): void {

  }

  onView(row: any): void {
    this.router.navigate(['/service-management/service-details/1'])
  }
}
