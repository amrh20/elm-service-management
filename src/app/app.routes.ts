import { Routes } from '@angular/router';

import { LayoutComponent } from './shared/components/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'service-management',
                pathMatch: 'full'
            },
            {
                path: 'service-management',
                loadChildren: () =>
                    import('./features/service-management/service-management.module').then(m => m.ServiceManagementModule),
                data: { breadcrumb: 'Service Management' },

            }
        ]
    },
    {
        path: '**',
        redirectTo: 'service-management'
    }
];


