import { Component, Input, OnInit } from '@angular/core';
import { PostressCommentEntity } from '../postress/postress.model';

@Component({
  selector: 'app-postress-comment',
  templateUrl: './postress-comment.component.html',
  styleUrls: ['./postress-comment.component.scss']
})
export class PostressCommentComponent implements OnInit {

  @Input() comment: PostressCommentEntity | undefined;

  constructor() {}

  ngOnInit(): void {}

}
