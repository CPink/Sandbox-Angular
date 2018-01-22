import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/';

import { Post } from '../models/Post';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class PostService {
postUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _http: HttpClient) { }

  //GET request to https://jsonplaceholder.typicode.com/posts
  getPosts() : Observable<Post[]> {
    return this._http.get<Post[]>(this.postUrl);
  }

  //POST request to https://jsonplaceholder.typicode.com/posts
  savePost(post: Post): Observable<Post> {
     return this._http.post<Post>(this.postUrl, post, httpOptions);
  }

  //PUT request to https://jsonplaceholder.typicode.com/posts
  updatePost(post: Post) :Observable<Post> {
    const url = `https://jsonplaceholder.typicode.com/posts/${post.id}`;

    return this._http.put<Post>(url, post, httpOptions);
  }

  getPost(id: number ) :Observable<Post> {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    return this._http.get<Post>(url);
  }


  //DELETE request to https://jsonplaceholder.typicode.com/posts
  removePost(post: Post | number) :Observable<Post> {
    const id = typeof post === 'number' ? post : post.id;
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    return this._http.delete<Post>(url, httpOptions);
  }

  
}
