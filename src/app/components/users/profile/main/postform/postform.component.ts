import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../../../interfaces/post';
import { PostService } from '../../../../../services/post.service';

@Component({
  selector: 'app-postform',
  templateUrl: './postform.component.html',
  styleUrls: ['./postform.component.css']
})
export class PostformComponent implements OnInit {
  public userLogged = false;
  public postPerm = false;
  public sendedPost = false;
  public receiverId;
  public sameUser = false;
  public makePost = new Post(
    '',
    null,
    null,
    false
  );
  constructor(private _route: ActivatedRoute, private _post: PostService) { }

  ngOnInit() {
    this.receiverId = localStorage.getItem('profile_id');
    if (sessionStorage['user']) {
      this.userLogged = true;
      this.makePost.from = (JSON.parse(sessionStorage.getItem('user'))).id;
      if (((JSON.parse(sessionStorage.getItem('user'))).id) === this.receiverId) {
        this.sameUser = true;
      } else {
        this.sameUser = false;
      }
    }
    if (localStorage.getItem('postperm') === '1') {
      this.postPerm = true;
    } else {
      this.postPerm = false;
    }
    this.makePost.receiver = this.receiverId;
  }

  sendPost() {
    this._post.sendPost(JSON.stringify(this.makePost)).subscribe((res: any) => {
      if (res.response) {
        this.sendedPost = true;
        setTimeout( () => {
          window.location.reload();
        }, 1500);
      } else {
        alert(res);
      }
    });
  }

}
