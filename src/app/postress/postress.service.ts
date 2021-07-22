import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IWordpressCommentResponse, IWordpressPostResponse } from './postress/postress.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostressService {

  private _url: string = environment.wordpressApi;

  constructor(private http: HttpClient) { }

  /**
   * Get posts from wordpress api
   * 
   * @param number Number of posts we want to get
   * @returns Observable<IWordpressPostResponse>
   * 
   * @author Andrzej Sikorski
   * @since  2021-07-22
   */
  getPosts(number: number):Observable<IWordpressPostResponse> {
    return this.http.get<IWordpressPostResponse>(this._url + '/posts/?number=' + number);
  }

  /**
   * Get comments for posts from wordpress api
   * 
   * @param id     Id of the post we want to get comments for
   * @param number Number of comments we want to get
   * @returns Observable<IWordpressCommentResponse>
   * 
   * @author Andrzej Sikorski
   * @since  2021-07-22
   */
  getComments(id: number, number: number):Observable<IWordpressCommentResponse> {
    // delay added for test/visual purpose
    return this.http.get<IWordpressCommentResponse>(this._url + '/posts/' + id + '/replies/?number=' + number).pipe(delay(1000));
  }
}
