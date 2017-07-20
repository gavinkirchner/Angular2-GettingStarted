import { Component } from '@angular/core';
import { ProductListComponent } from './products/product-list.component';

@Component({
    selector: 'pm-app',
    template: `
        <h1>{{pageTitle}}</h1>
        <pm-productList></pm-productList>
    `
})
export class AppComponent {
    pageTitle: string = "My First Angular App!"
}
