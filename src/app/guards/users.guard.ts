import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services/auth.service';
import { Check } from '../interfaces/check';

@Injectable()
export class UsersGuard implements CanActivate {
  public objCheck = new Check(
    null,
    ''
  );
  public UserId;
  constructor(private _auth: AuthService, private _router: Router) {}
  canActivate() {
    if (sessionStorage['auth_key']) {
      const SessionUser = JSON.parse(sessionStorage.getItem('user'));
      this.objCheck.user_id = SessionUser.id;
      this.objCheck.auth_key = sessionStorage.getItem('auth_key');
      this._auth.checkSession(JSON.stringify(this.objCheck)).subscribe( (res: any) => {
        if (res.response) {
          return true;
        } else {
          sessionStorage.clear();
          alert('Ha caducado tu sesión, inicia sesión nuevamente por favor!');
          window.location.reload();
          return false;
        }
      });
    } else {
      return true;
    }
    return true;
  }
}

