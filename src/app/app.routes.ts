import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductListComponent } from './pages/admin/products/list/list.component';

import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { DetailComponent } from './pages/product/detail/detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContentComponent } from './layouts/client-layout/content/content.component';
import { CreateProductComponent } from './pages/admin/products/create/create.component';
import { UpdateComponent } from './pages/admin/products/update/update.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { adminGuard } from './admin.guard';
import { UsersComponent } from './pages/admin/products/users/users.component';



export const routes: Routes = [
    {
        path: 'admin',
        component: AdminLayoutComponent,
        canActivate: [adminGuard],
        children: [
            {
                
                path: 'products/list',
                component: ProductListComponent,
            },
            {
                path: 'products/add',
                // canActivate: [adminGuard],
                component: CreateProductComponent,

            },
            {
                path: 'products/update/:id',
                // canActivate: [adminGuard],
                component: UpdateComponent,

            },
            {
                path:'users/list',
                component: UsersComponent,
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
                path: 'notfound',
                component: NotFoundComponent,
            },
            {
                path: 'register',
                component: RegisterComponent,
            },
            {
                path: 'login',
                component: LoginComponent
            }
        ],
    },
];
