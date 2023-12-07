import {Component, Input} from '@angular/core';
import {IComment} from "../../interfaces";
import {CommentService} from "../../services";
import {CommentComponent} from "../comment/comment.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [
    CommentComponent,
    NgForOf
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})
export class CommentsComponent {
  @Input()
  comments: IComment[];


  constructor(private commentService:CommentService) {
    this.commentService.getByPostId(1).subscribe(value => this.comments = value)

  }

}
