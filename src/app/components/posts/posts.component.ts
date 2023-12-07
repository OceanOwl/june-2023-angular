import {Component, Input, OnInit} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {IPost} from "../../interfaces";
import {PostComponent} from "../post/post.component";
import {NgForOf, NgIf} from "@angular/common";

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
export class PostsComponent implements OnInit{
  @Input()
  posts: IPost[];
  post: IPost;

  ngOnInit(): void {
  }
}
