import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormsModule
} from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule, DropdownModule, CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  standalone: true,
})
export class SearchBarComponent {

  @Output() searchChange = new EventEmitter<any>();

  searchText: string = '';
  selectedStatus: string | null = null;
  selectedPriceType: string | null = null;

  statusOptions = [
    { label: 'Active', value: 'Active' },
    { label: 'Inactive', value: 'Inactive' },
  ];

  priceTypeOptions = [
    { label: 'Service Type', value: 'Service Type' },
    { label: 'Other Type', value: 'Other Type' },
  ];

  get showClearButton(): boolean {
    return !!(this.searchText || this.selectedStatus || this.selectedPriceType);
  }

  onSearchChange(): void {
    this.searchChange.emit({
      searchText: this.searchText,
      status: this.selectedStatus,
      priceType: this.selectedPriceType,
    });
  }

  clearFilters(): void {
    this.searchText = '';
    this.selectedStatus = null;
    this.selectedPriceType = null;
    this.onSearchChange();
  }

}
