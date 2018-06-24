import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../../../interfaces/login-user';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginUser = new LoginUser(
    '',
    ''
  );
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  login() {
    const data = JSON.stringify(this.loginUser);
    this._auth.sendLogin(data)
      .subscribe( (res: any) => {
        if (res.response) {
         this._router.navigate(['u', res.user.user]);
        }
      });
  }

}
