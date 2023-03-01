import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomepageComponent } from './homepage/homepage.component';
<<<<<<< HEAD
=======
import { NavbarComponent } from './navbar/navbar.component';
>>>>>>> main


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    CategoryListComponent,
    SigninComponent,
    LoginComponent,
    CartComponent,
    CheckoutComponent,
<<<<<<< HEAD
    HomepageComponent
=======
    HomepageComponent,
    NavbarComponent
>>>>>>> main
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
