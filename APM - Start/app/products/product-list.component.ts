import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css'],
    selector: 'pm-productList'
})
export class ProductListComponent implements OnInit {

    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    filterText: string = '';


    currencyFormat: string = 'USD';
    showSymbol: boolean = true;
    format: string = '1.2-2';

    products: IProduct[];

    constructor(private _productService: ProductService) { }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('this is the oninit of the productlist component');

        this.products = this._productService.getProducts();
    }

    onRatingClicked(message: string): void {
        this.pageTitle = message;
    }
}
