import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductShoppingComponent } from './product-shopping/product-shopping.component';
import { DeliverAddressComponent } from './deliver-address/deliver-address.component';
import { CheckOutPageComponent } from './check-out-page/check-out-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { HomeComponent } from './home/home.component';

export const router:Routes=[
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: ProductShoppingComponent},
    { path: 'profile', component: UserProfileComponent},
    { path: 'checkout', component: CheckOutPageComponent},
    { path: 'address', component: DeliverAddressComponent},
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignUpComponent}
];

export const routes:ModuleWithProviders = RouterModule.forRoot(router);
