import { Component, Input, OnInit } from '@angular/core';
import { PostressService } from '../postress.service';
import { IWordpressCommentResponse, IWordpressPostResponse, PostressCommentEntity, PostressPostEntity } from './postress.model';

@Component({
  selector: 'app-postress',
  templateUrl: './postress.component.html',
  styleUrls: ['./postress.component.scss']
})
export class PostressComponent implements OnInit {

  public posts: PostressPostEntity[];

  @Input() postCount: number = 3;
  @Input() commentCount: number = 1;

  constructor(private _postressService: PostressService) {
    this.posts = [];
  }

  ngOnInit(): void {
    this._postressService.getPosts(this.postCount).subscribe(
      (data: IWordpressPostResponse) => {
        this.posts = data.posts.map(post => new PostressPostEntity(post));
      }
    );
  }

  private fetchComments(): void {
    this.posts.forEach(post => {
      this._postressService.getComment(post.id, this.commentCount).subscribe(
        (data: IWordpressCommentResponse) => {
          post.comments = data.comments.map(comment => new PostressCommentEntity(comment));
          console.log(post);
        }
      );
    });
  }

  public getComments(): void {
    this.fetchComments();
  }

}
