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
            this._router.navigate(['u', res.user.user]);
          } else {
            alert(res.msg);
          }
        });
    } else {
      alert('Las contraseñas no son identicas!');
    }
  }

}
