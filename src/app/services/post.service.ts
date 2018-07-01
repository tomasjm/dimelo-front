import { Injectable } from '@angular/core';
import { Globals } from '../globals/globals';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostService {

  constructor(private _global: Globals, private _http: HttpClient) { }
  sendPost(post) {
    console.log(post);
    return this._http.post(this._global.api + 'post/create', post);
  }
  getPost(user) {
    return this._http.get(this._global.api + 'post/' + user);
  }
  delPost(post) {
    return this._http.post(this._global.api + 'post/delete', post);
  }
}
