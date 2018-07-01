import { Component, OnInit } from '@angular/core';
import { RegUser } from '../../../interfaces/reg-user';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public regUser = new RegUser(
    '',
    '',
    '',
    '',
  );
  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }
  register(cPassword) {
    const data = JSON.stringify(this.regUser);
    if (this.regUser.password === cPassword) {
      this._auth.sendRegister(data)
        .subscribe( (res: any) => {
          if (res.response) {
            sessionStorage.setItem('user', JSON.stringify(res.user));
            sessionStorage.setItem('auth_key', res.user.auth_key);
            sessionStorage.setItem('valid_auth', 'true');
            window.location.reload();
          } else {
            alert(res.message);
          }
        });
    } else {
      alert('Las contraseñas no son identicas!');
    }
  }

}
