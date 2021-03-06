import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewBusinessSignupComponent } from './auth/signup/NewBusinessSignup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthService} from './auth/auth.service';
import { RegisterNewUserComponent } from './auth/register-new-user/register-new-user.component';
import { DropdownDirective } from "./shared/dropdown.directive";
import { MasteritemlistComponent } from './items/masteritemlist/masteritemlist.component';
import { ItemsmappingComponent } from './items/itemsmapping/itemsmapping.component';
import { ItempricingComponent } from './items/itempricing/itempricing.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NewBusinessSignupComponent,
    SigninComponent,
    RegisterNewUserComponent,
    DropdownDirective,
    MasteritemlistComponent,
    ItemsmappingComponent,
    ItempricingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
