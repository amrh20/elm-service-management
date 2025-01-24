import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ServiceInfoComponent } from '../../components/service-info/service-info.component';

@Component({
  selector: 'app-service-details',
  imports: [ServiceInfoComponent],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss',
  standalone: true,

})
export class ServiceDetailsComponent {


  serviceItems = [
    { label: 'Service Name (EN)', value: 'XXXXXX' },
    { label: 'Service Name (AR)', value: 'XXXXXX' },
    { label: 'Service Code', value: 'XX3' },
    { label: 'Price List', value: '100 SR' },
    { label: 'Service Type', value: 'Service Type' },
  ];
  ServiceDescription = [
    { label: 'Service Arabic Description', value: 'description description description' },
    { label: 'Service English Description', value: 'description description description' },
  ]

  VatInfo = [
    { label: 'Has VAT?', value: 'Yes' },
    { label: 'VAT (%)', value: '13%' },
  ]

  constructor (private router: Router) {

  }

  goBack() {
    this.router.navigate(['/service-management'])
  }
}

