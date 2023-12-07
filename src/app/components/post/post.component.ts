import {Component, Input} from '@angular/core';
import {IPost} from "../../interfaces";
import {NgIf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
@Input()
  post:IPost

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  getFullPost():void {
    this.router.navigate([`posts/${this.post.id}`], {
      relativeTo:this.activatedRoute,
      state:this.post
    })
  }
}
