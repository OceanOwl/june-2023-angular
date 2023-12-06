import { Component } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {IPost} from "../../interfaces/post.interface";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: IPost[]
  postsOfCurrentUser: IPost[];


  constructor(private postsService:PostsService) {
}
ngOnInit():void{
    this.postsService.getById(1)
}
}
