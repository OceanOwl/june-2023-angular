import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IPost} from "../../interfaces/post.interface";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  @Input()
  post: IPost

  @Input()
  id: number

  @Output()
  getPosts = new EventEmitter<IPost>();

  getPostsOfCurrentUser(): void {
    this.getPosts.emit(this.post)
  }
}
