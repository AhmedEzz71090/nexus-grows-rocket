import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ProductsRoutingModule } from '@app/products/products-routing.module';
import { ProductsComponent } from '@app/products/products-list/products.component';
import { SharedModule } from '@shared';

@NgModule({
  imports: [CommonModule, TranslateModule, ProductsRoutingModule, SharedModule],
  declarations: [ProductsComponent],
})
export class ProductsModule {}
