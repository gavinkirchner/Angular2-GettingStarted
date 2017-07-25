import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    selector: 'pm-productDetail',
    templateUrl: 'product-detail.component.html',
    styleUrls: [ 'product-detail.component.css' ]
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    currencyFormat: string = 'USD';
    showSymbol: boolean = true;
    format: string = '1.2-2';
    product: IProduct;
    errorMessage: string;

    constructor(private _route: ActivatedRoute,
                private _productService: ProductService,
                private _router: Router) { }

    ngOnInit(): void {
        let id = this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;

        this._route.data.subscribe(p => this.product = p.product);
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}
