import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { LogoutComponent } from './components/users/logout/logout.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { EditComponent } from './components/users/profile/edit/edit.component';
import { MainComponent } from './components/users/profile/main/main.component';
import { AuthService } from './services/auth.service';

import { HttpClientModule } from '@angular/common/http';
import { Globals } from './globals/globals';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    LogoutComponent,
    ProfileComponent,
    EditComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
