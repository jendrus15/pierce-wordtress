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

  private async _fetchComments(): Promise<void> {

    // to have sequancial api calls, we are using for
    for (const post of this.posts) {
      const comments: PostressCommentEntity[] = await this._fetchSinglePostComments(post.id);
      post.comments = comments;
    }
  }

  public getComments(): void {
    this._fetchComments();
  }

  private async _fetchSinglePostComments(id: number): Promise<PostressCommentEntity[]> {
    const response: IWordpressCommentResponse = await this._postressService.getComments(id, this.commentCount).toPromise();

    return response.comments.map(comment => new PostressCommentEntity(comment));
  }
}
