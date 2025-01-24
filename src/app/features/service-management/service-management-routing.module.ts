import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routesStrings } from '../../core/constants/routes.constants';
import { ServiceDetailsComponent } from './views/service-details/service-details.component';
import { ServiceListComponent } from './views/service-list/service-list.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceListComponent,
    data: { breadcrumb: 'Service List' },
  },
  {
    path: routesStrings.dashboard.serviceDetails,
    component: ServiceDetailsComponent,
    data: { breadcrumb: 'View Service Details' },

  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ServiceManagementRoutingModule { }
