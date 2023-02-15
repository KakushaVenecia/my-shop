import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './appcomponents/login-component/login-component.component';
import { SigninComponentComponent } from './appcomponents/signin-component/signin-component.component';
import { CategoriesComponentComponent } from './appcomponents/categories-component/categories-component.component';
import { CheckoutComponentComponent } from './appcomponents/checkout-component/checkout-component.component';
import { HomepageComponentComponent } from './appcomponents/homepage-component/homepage-component.component';
import { ProductsComponentComponent } from './appcomponents/products-component/products-component.component';
import { CartComponentComponent } from './appcomponents/cart-component/cart-component.component';
import { ProfileComponentComponent } from './appcomponents/profile-component/profile-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    SigninComponentComponent,
    CategoriesComponentComponent,
    CheckoutComponentComponent,
    HomepageComponentComponent,
    ProductsComponentComponent,
    CartComponentComponent,
    ProfileComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
