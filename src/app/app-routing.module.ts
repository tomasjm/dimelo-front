import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { EditComponent } from './components/users/profile/edit/edit.component';
import { MainComponent } from './components/users/profile/main/main.component';
import { LogoutComponent } from './components/users/logout/logout.component';
import { AuthComponent } from './components/auth/auth.component';



const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
    ]},
  { path: 'u', component: UsersComponent,
    children: [
      { path: ':user', component: ProfileComponent,
      children: [
        { path: 'edit', component: EditComponent }
      ]},
    ] },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
