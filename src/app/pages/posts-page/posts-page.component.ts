import { Component } from '@angular/core';
import {PostsComponent} from "../../components";

@Component({
  selector: 'app-posts-page',
  standalone: true,
  imports: [
    PostsComponent
  ],
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.css'
})
export class PostsPageComponent {

}
