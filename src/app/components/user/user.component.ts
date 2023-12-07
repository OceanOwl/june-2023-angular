import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";

import {IUser} from "../../interfaces";
import {PostComponent} from "../post/post.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    RouterOutlet,
    PostComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input()
  user: IUser;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  getDetails():void {
    this.router.navigate([this.user.id], {
      relativeTo:this.activatedRoute,
      state:this.user
    })
  }
}

