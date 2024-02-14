import { Injectable } from '@angular/core';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
  postList: Array<any> = [
    {id: 1, postTitle: 'post 1'},
    {id: 2, postTitle: 'post 2'},
    {id: 3, postTitle: 'post 3'},
    {id: 4, postTitle: 'post 4'},
    {id: 5, postTitle: 'post 5'},
    {id: 6, postTitle: 'post 6'},
    {id: 7, postTitle: 'post 7'}
  ];

  addPost(){
    let newPost:Post =
    {
          id: this.postList.length+1,
          postTitle: "Post " + (this.postList.length+1)
        }
    this.postList.push(newPost);
  }
}
