import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfileComponent } from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
    {path: '', component: HomepageComponent },
    {path: 'account', component: ProfileComponent},
    {path: 'cart', component: CartComponent},
    {path: 'register', component: SigninComponent},
    {path: 'contactus', component: ContactComponent},
    {path: 'products', component: CategoryListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
