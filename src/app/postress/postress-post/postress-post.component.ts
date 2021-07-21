import { Component, Input, OnInit } from '@angular/core';
import { PostressPostEntity } from '../postress/postress.model';

@Component({
  selector: 'app-postress-post',
  templateUrl: './postress-post.component.html',
  styleUrls: ['./postress-post.component.scss']
})
export class PostressPostComponent implements OnInit {

  @Input() post: PostressPostEntity | undefined;

  constructor() {}

  ngOnInit(): void {}

}
