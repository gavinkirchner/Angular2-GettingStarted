import { Component } from '@angular/core';

import { IProduct } from './product';

@Component({
    moduleId: module.id,
    selector: 'pm-productDetail',
    templateUrl: 'product-detail.component.html',
    styleUrls: [ 'product-detail.component.css' ]
})
export class ProductDetailComponent {
    pageTitle: string = 'Product Detail';
    currencyFormat: string = 'USD';
    showSymbol: boolean = true;
    format: string = '1.2-2';
    product: IProduct;
}
