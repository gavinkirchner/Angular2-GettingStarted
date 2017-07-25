import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductFilterPipe } from './products/product-list.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailGuard } from './products/product-detail.guard';
import { ForNumberDirective } from './shared/for-number.directive';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      {
        path: 'product/:id',
        canActivate: [ ProductDetailGuard ],
        resolve: { product: ProductDetailGuard },
        component: ProductDetailComponent
      },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ], {enableTracing: true})
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFilterPipe,
    StarComponent,
    WelcomeComponent,
    ForNumberDirective
  ],
  bootstrap: [ AppComponent ],
  providers: [
    ProductService,
    ProductDetailGuard
  ]
})
export class AppModule { }
