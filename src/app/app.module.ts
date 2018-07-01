import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { MainComponent } from './components/users/profile/main/main.component';
import { AuthService } from './services/auth.service';

import { HttpClientModule } from '@angular/common/http';
import { Globals } from './globals/globals';

import { FormsModule } from '@angular/forms';
import { PostformComponent } from './components/users/profile/main/postform/postform.component';
import { PostsComponent } from './components/users/profile/main/posts/posts.component';
import { ProfileService } from './services/profile.service';
import { PostService } from './services/post.service';
import { NavbarComponent } from './components/users/navbar/navbar.component';
import { AuthnavbarComponent } from './components/auth/authnavbar/authnavbar.component';
import { AuthfooterComponent } from './components/auth/authfooter/authfooter.component';
import { RolePipe } from './pipes/roles.pipe';
import { AuthGuard } from './guards/auth.guard';
import { UsersGuard } from './guards/users.guard';
import { HeaderPipe } from './pipes/header.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    ProfileComponent,
    MainComponent,
    PostformComponent,
    PostsComponent,
    NavbarComponent,
    AuthnavbarComponent,
    AuthfooterComponent,
    RolePipe,
    HeaderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, Globals, ProfileService, PostService, AuthGuard, UsersGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
