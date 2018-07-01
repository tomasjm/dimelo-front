import { Component, OnInit } from '@angular/core';
import { UpdateUser } from '../../../interfaces/update-user';
import { ProfileService } from '../../../services/profile.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Globals } from '../../../globals/globals';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public userUrl;
  public mainUrl;
  public userLogged = false;
  public sessionUser;
  public selectedPhoto: any = '...';
  public updatedUser = new UpdateUser(
    '',
    '',
    '',
    '',
    false
  );
  public userPhoto = 'avatar.png';
  public AdminList;
  public SuperAdminList;
  constructor(private _profile: ProfileService, private _router: Router, private _global: Globals, private _auth: AuthService) { }

  ngOnInit() {
    this.mainUrl = this._global.api;
    if (sessionStorage['user']) {
      this.sessionUser = JSON.parse(sessionStorage.getItem('user'));
      this.userLogged = true;
      this.userUrl = this.sessionUser.user;
    }
  }


  reload() {
    window.location.reload();
  }
  cerrarSesion() {
    sessionStorage.clear();
    window.location.reload();
  }


  loadUserInfo() {
    this.updatedUser.user_id = this.sessionUser.id;
    this.updatedUser.name = this.sessionUser.name;
    this.updatedUser.desc = this.sessionUser.desc;
    this.updatedUser.user = this.sessionUser.user;
    if (this.sessionUser.postperm === '1' || this.sessionUser.postperm === 1) {
      this.updatedUser.postperm = true;
    } else {
      this.updatedUser.postperm = false;
    }
  }
  loadUserPhoto() {
    this.userPhoto = this.sessionUser.photo;
  }
  sendUpdateUser() {
    const data = JSON.stringify(this.updatedUser);
    this._profile.updateUser(data).subscribe((res: any) => {
      if (res.response) {
        sessionStorage.setItem('user', JSON.stringify(res.user));
        this._router.navigate(['/u/', res.user.user]);
        window.location.reload();
      } else {
        alert(res.message);
      }
     });
  }
  onFileSelected(event) {
    this.selectedPhoto = event.target.files[0];
  }
  photoUpload() {
    const formD = new FormData();
    formD.append('user_id', this.sessionUser.id);
    formD.append('photo', this.selectedPhoto, this.selectedPhoto.name);
    this._profile.uploadPhoto(formD).subscribe((res: any) => {
      if (res.response) {
        sessionStorage.setItem('user', JSON.stringify(res.user));
        this._router.navigate(['/u/', res.user.user]);
        window.location.reload();
      }
    });
  }
  getAdmins() {
    this._auth.getAdmins().subscribe( (res: any) => {
      if (res.response) {
        this.SuperAdminList = res.superadm;
        this.AdminList = res.adm;
      }
    });
  }

}
