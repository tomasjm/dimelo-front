import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../../services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { Globals } from '../../../../globals/globals';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public userName;
  public userDesc;
  public userPhoto;
  public mainURL;
  public userRole;
  public userBanned;
  public userExists = false;
  public loggedUser = true;
  public i = 0;
  public mainInit = false;

  constructor(private _profile: ProfileService, private _activatedRoute: ActivatedRoute, private _global: Globals) {
    this._activatedRoute.params.subscribe((params) => {
      let firstUser;
      if (this.i !== 0) {
        if ( firstUser !== params.user) {
          window.location.reload();
        }
      }
      if (this.i === 0) {
        this.i = 1;
        firstUser = params.user;
      }
    });
  }

  ngOnInit() {
    localStorage.clear();
    this.mainURL = this._global.api;
    this._profile.getUserInfo(this._activatedRoute.snapshot.params['user']).subscribe((res: any) => {
      if (res.response) {
        this.userExists = true;
        this.userName = res.user.name;
        this.userDesc = res.user.desc;
        this.userPhoto = res.user.photo;
        if (res.user.banned === '1') {
          this.userBanned = true;
        } else {
          this.userBanned = false;
        }
        this.userRole = res.user.role;
        localStorage.setItem('profile_id', res.user.id);
        localStorage.setItem('postperm', res.user.postperm);
      } else {
        this.mainInit = true;
      }
    });
  }

}
