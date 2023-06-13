import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';
import { UsersComponent } from '@app/users/users.component';
import { UsersListComponent } from '@app/users/users-list/users-list.component';
import { UsersFormComponent } from '@app/users/users-form/users-form.component';
import { UsersRoutingModule } from '@app/users/users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    UsersRoutingModule,
    SharedModule,
    ButtonModule,
    TooltipModule,
    InputTextModule,
    InputNumberModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextareaModule,
    CardModule,
  ],
  declarations: [UsersComponent, UsersListComponent, UsersFormComponent],
})
export class UsersModule {}
