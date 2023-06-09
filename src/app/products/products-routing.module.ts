import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from '@app/products/products.component';
import { ProductsListComponent } from '@app/products/products-list/products-list.component';
import { ProductsFormComponent } from '@app/products/products-form/products-form.component';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { ProductDetailsComponent } from '@app/products/product-details/product-details.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    data: { title: marker('Products') },
    children: [
      { path: '', component: ProductsListComponent, data: { title: marker('Products List') } },
      { path: 'add-product', component: ProductsFormComponent, data: { title: marker('Add Products') } },
      { path: 'product-details', component: ProductDetailsComponent, data: { title: marker('Product Details') } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ProductsRoutingModule {}
