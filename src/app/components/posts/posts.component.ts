import {Component, Input} from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {IPost} from "../../interfaces/post.interface";
import {IUser} from "../../interfaces";
import {PostComponent} from "../post/post.component";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    PostComponent
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: IPost[]
@Input()
user:IUser

  constructor(private postsService: PostsService) {
  }

  ngOnInit(): void {
    this.postsService.getById(this.user.id).subscribe(value => this.posts = value)
  }
}
