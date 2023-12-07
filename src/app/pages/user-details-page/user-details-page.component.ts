import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

import {UserDetailsComponent} from "../../components";
import {PostDetailsPageComponent} from "../post-details-page/post-details-page.component";
import {PostsPageComponent} from "../posts-page/posts-page.component";

@Component({
  selector: 'app-user-details-page',
  standalone: true,
  imports: [
    UserDetailsComponent,
    RouterOutlet,
    PostDetailsPageComponent,
    PostsPageComponent
  ],
  templateUrl: './user-details-page.component.html',
  styleUrl: './user-details-page.component.css'
})
export class UserDetailsPageComponent {

}
