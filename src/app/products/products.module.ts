import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ProductsRoutingModule } from '@app/products/products-routing.module';
import { SharedModule } from '@shared';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

import { ProductsComponent } from './products.component';
import { ProductsListComponent } from '@app/products/products-list/products-list.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';
import { MenuModule } from 'primeng/menu';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ToastModule } from 'primeng/toast';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ProductsRoutingModule,
    SharedModule,
    ButtonModule,
    TooltipModule,
    InputTextModule,
    InputNumberModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextareaModule,
    CardModule,
    FileUploadModule,
    MenuModule,
    ToastModule,
  ],
  declarations: [ProductsComponent, ProductsListComponent, ProductsFormComponent, ProductDetailsComponent],
})
export class ProductsModule {}
