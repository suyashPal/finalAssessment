import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { routes } from './app.router';
import { NgModel } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { ShoppingInfoService } from './shopping-info.service';
import { ProductShoppingComponent } from './product-shopping/product-shopping.component';
import { CheckOutPageComponent } from './check-out-page/check-out-page.component';
import { DeliverAddressComponent } from './deliver-address/deliver-address.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    ProductShoppingComponent,
    CheckOutPageComponent,
    DeliverAddressComponent,
    UserProfileComponent,
    SideMenuComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [ShoppingInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
