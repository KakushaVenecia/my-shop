import { NgModule } from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CategoryListComponent,
    SigninComponent,
    LoginComponent,
    CartComponent,
    CheckoutComponent,
    HomepageComponent,
    NavbarComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
