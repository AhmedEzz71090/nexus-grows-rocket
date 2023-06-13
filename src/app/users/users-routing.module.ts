import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { UsersComponent } from '@app/users/users.component';
import { UsersListComponent } from '@app/users/users-list/users-list.component';
import { UsersFormComponent } from '@app/users/users-form/users-form.component';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  {
    path: '',
    component: UsersComponent,
    data: { title: marker('Users') },
    children: [
      { path: '', component: UsersListComponent, data: { title: marker('Users List') } },
      { path: 'add-user', component: UsersFormComponent, data: { title: marker('Add User') } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class UsersRoutingModule {}
