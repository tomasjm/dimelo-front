import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../globals/globals';

@Injectable()
export class AuthService {

  constructor(private _http: HttpClient, private _globals: Globals) { }

  sendLogin(datos) {
    return this._http.post(this._globals.api + 'auth/login', datos);
  }
  sendRegister(datos) {
    return this._http.post(this._globals.api + 'auth/register', datos);
  }
}
