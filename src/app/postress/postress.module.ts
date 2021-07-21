import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostressComponent } from './postress/postress.component';
import { PostressPostComponent } from './postress-post/postress-post.component';
import { PostressCommentComponent } from './postress-comment/postress-comment.component';
import { PostressService } from './postress.service';



@NgModule({
  declarations: [
    PostressComponent,
    PostressPostComponent,
    PostressCommentComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PostressService
  ]
})
export class PostressModule { }
