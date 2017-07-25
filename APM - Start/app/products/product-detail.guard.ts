import { Injectable } from '@angular/core';
import { CanActivate,
         Resolve,
         ActivatedRouteSnapshot,
         RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Injectable()
export class ProductDetailGuard implements CanActivate, Resolve<IProduct> {
    constructor(private _productService: ProductService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        let id = +route.url[1].path;
        let returnValue: boolean;
        if (isNaN(id) || id < 1) {
            returnValue = false;
        } else {
            returnValue = true;
        }

        return Observable.of(returnValue);
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
        let id = +route.url[1].path;

        return this._productService.getProduct(id);
    }

}
