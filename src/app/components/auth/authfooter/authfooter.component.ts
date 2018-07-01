import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-authfooter',
  templateUrl: './authfooter.component.html',
  styleUrls: ['./authfooter.component.css']
})
export class AuthfooterComponent implements OnInit {
  public SuperAdminList;
  public AdminList;

  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }
  getAdmins() {
    this._auth.getAdmins().subscribe( (res: any) => {
      if (res.response) {
        this.SuperAdminList = res.superadm;
        this.AdminList = res.adm;
      }
    });
  }
  reload() {
    window.location.reload();
  }

}
