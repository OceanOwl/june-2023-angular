import {Component, Input, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";

import {IPost} from "../../interfaces";
import {PostComponent} from "../post/post.component";

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    RouterOutlet,
    PostComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  @Input()
  posts: IPost[];
  post: IPost;

  // constructor(
  //   private postsService:PostsService,
  //   private activatedRoute:ActivatedRoute,
  //   private router:Router) {
  // }

  ngOnInit(): void {
  }

//   getPosts(userId: number) {
//     this.postsService.getByUserId(userId).subscribe(value => this.posts = value)
//     this.router.navigate(['posts'], {
//       relativeTo: this.activatedRoute,
//       state: this.posts
//     })
//
// }
}




