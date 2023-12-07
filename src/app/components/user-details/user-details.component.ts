import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";

import {IPost, IUser} from "../../interfaces";
import {PostsService, UserService} from "../../services";
import {routes} from "../../app.routes";
import {PostsPageComponent} from "../../pages";
import {transition} from "@angular/animations";

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    RouterLink
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
    this.postsService.getByUserId(this.user.id).subscribe(value => this.posts = value)
    // console.log(this.posts);
  }
}
