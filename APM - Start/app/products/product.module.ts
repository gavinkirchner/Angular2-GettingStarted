import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductFilterPipe } from './product-list.pipe';
import { ProductDetailGuard } from './product-detail.guard';
import { ProductService } from './product.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductDetailComponent,
        ProductFilterPipe
    ],
    imports: [
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            {
                path: 'product/:id',
                canActivate: [ ProductDetailGuard ],
                resolve: { product: ProductDetailGuard },
                component: ProductDetailComponent
            }
        ]),
        SharedModule
    ],
    providers: [
        ProductService,
        ProductDetailGuard
    ]
})
export class ProductModule { }
