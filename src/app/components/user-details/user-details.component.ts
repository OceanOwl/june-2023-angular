import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from "@angular/router";

import {IPost, IUser} from "../../interfaces";
import {PostsService, UserService} from "../../services";
import {NgForOf, NgIf} from "@angular/common";
import {PostComponent} from "../post/post.component";

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    RouterLink,
    NgIf,
    PostComponent,
    NgForOf,
    RouterOutlet
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {

  user: IUser;
  posts: IPost[];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private postsService: PostsService
  ) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.user = this.router.getCurrentNavigation()?.extras.state as IUser
      if (!this.user) {
        this.userService.getById(id).subscribe(value => this.user = value)
      }
    })
  }

  ngOnInit(): void {

  }

  getPosts(userId: number) {
    this.postsService.getByUserId(userId).subscribe(value => this.posts = value)
    this.router.navigate(['posts'], {
      relativeTo: this.activatedRoute,
      state: this.posts
    })
}}
