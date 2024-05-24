import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductListComponent } from './pages/admin/products/list/list.component';

import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { DetailComponent } from './pages/product/detail/detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContentComponent } from './layouts/client-layout/content/content.component';
import { SignUpComponent } from './layouts/client-layout/sign-up/sign-up.component';
import { SignInComponent } from './layouts/client-layout/sign-in/sign-in.component';


export const routes: Routes = [
    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'products/list',
                component: ProductListComponent,
            },
            {
                path: 'notfound',
                component: NotFoundComponent,
            }
        ]
    },
    {
        path: '',
        component: ClientLayoutComponent,
        children: [
            {
                path: '',
                component: ContentComponent
            },
            {
                path: 'products/:id',
                component: DetailComponent,
            },
            {
                path: 'signup',
                component: SignUpComponent
            },
            {
                path: 'signin',
                component: SignInComponent
            }
        ],
    },
];
