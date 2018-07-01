import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../../services/post.service';
import { Globals } from '../../../../../globals/globals';
import { Delpost } from '../../../../../interfaces/delpost';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  public receiverId;
  public canDelete = false;
  public posts;
  public mainURL;
  public delPost = new Delpost(
    null,
    null
  );
  constructor(private _post: PostService, private _global: Globals) {}

  ngOnInit() {
    this.mainURL = this._global.api;
    this.receiverId = localStorage.getItem('profile_id');
    if (sessionStorage['user']) {
      const sessionUser: any = JSON.parse(sessionStorage.getItem('user'));
      if (sessionUser.id === this.receiverId) {
        this.canDelete = true;
      }
    }
    this._post.getPost(this.receiverId).subscribe( (res: any) => {
      this.posts = res.slice().reverse();
    });
  }
  deletePost(id) {
    this.delPost.user_id = this.receiverId;
    this.delPost.post_id = id;
    this._post.delPost(JSON.stringify(this.delPost)).subscribe( (res: any) => {
      if (res.response) {
        window.location.reload();
      } else {
        alert('No se pudo borrar comentario, contacta con el desarrollador!');
      }
    });
  }
  reportPost(id) {
    alert('Has reportado el post Nº: ' + id + ' con el desarrollador, en caso de más información puedes consultar directamente al desarrollador proporcionando el número anterior');
  }
  reload() {
    window.location.reload();
  }

}
