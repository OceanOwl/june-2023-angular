import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces";
import {UserComponent} from "../user/user.component";
import {NgForOf, NgIf} from "@angular/common";
import {UserDetailsComponent} from "../user-details/user-details.component";
import {PostsComponent} from "../posts/posts.component";
import {IPost} from "../../interfaces/post.interface";
import {PostComponent} from "../post/post.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserComponent,
    NgForOf,
    UserDetailsComponent,
    NgIf,
    PostsComponent,
    PostComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users: IUser[]
  userDetails: IUser
  posts: IPost[];

constructor(private userService:UserService) {
}

  ngOnInit(): void {
  this.userService.getAll().subscribe(value => this.users = value)
  }

  getUser(userDetails: IUser) {
  this.userDetails = userDetails
  }
}
