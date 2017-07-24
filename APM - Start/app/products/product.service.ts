import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { IProduct } from './product';

@Injectable()
export class ProductService {
    private _productUrl: string = 'api/products/products.json';

    constructor(private _http: Http) { }

    getProducts(): Observable<IProduct[]> {
        try {
            let response = this._http.get(this._productUrl);
            let products = response.map((x: Response) => <IProduct[]> x.json());

            return products;
        } catch (Error) {
            this.handleError(Error);
        }
    }

    private handleError(Error: Response): void {
        console.error(Error);
    }
}
