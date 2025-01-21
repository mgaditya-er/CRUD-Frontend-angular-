import { Routes } from '@angular/router';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { UserAddComponent } from './components/user/user-add/user-add.component';

export const routes: Routes = [
    {
        path: '',component : UserListComponent,
    },
    {
        path: 'add',component : UserAddComponent,
    },
    {
        path: 'edit/:id',component : UserEditComponent,
    },
    {
        path: 'delete',component : UserDeleteComponent,
    }

    
];
