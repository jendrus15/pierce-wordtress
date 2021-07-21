import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IWordpressCommentResponse, IWordpressPostResponse } from './postress/postress.model';

@Injectable({
  providedIn: 'root'
})
export class PostressService {

  private _url: string = environment.wordpressApi;

  constructor(private http: HttpClient) { }

  getPosts(number: number):Observable<IWordpressPostResponse> {
    return this.http.get<IWordpressPostResponse>(this._url + '/posts/?number=' + number);
  }

  getComment(id: number, number: number):Observable<IWordpressCommentResponse> {
    return this.http.get<IWordpressCommentResponse>(this._url + '/posts/' + id + '/replies/?number=' + number);
  }
}
