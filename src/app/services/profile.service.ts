import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../globals/globals';

@Injectable()
export class ProfileService {

  constructor(private _http: HttpClient, private _global: Globals) { }

  getUserInfo(user) {
    return this._http.get(this._global.api + 'profile/' + user);
  }

  updateUser(userinfo) {
    return this._http.post(this._global.api + 'profile/update', userinfo);
  }
  uploadPhoto(data) {
    return this._http.post(this._global.api + 'profile/updatephoto', data);
  }

}
