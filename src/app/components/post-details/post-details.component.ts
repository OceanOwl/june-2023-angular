import {Component, OnInit} from '@angular/core';
import {IPost} from "../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../../services";
import {NgIf} from "@angular/common";
import {CommentsPageComponent} from "../../pages";

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [
    NgIf,
    CommentsPageComponent
  ],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent implements OnInit{
  post: IPost;

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private postsService:PostsService,
    ) {
    this.activatedRoute.params.subscribe(({id})=>{
    this.post = this.router.getCurrentNavigation()?.extras.state as IPost
      if (!this.post){
        // this.postsService.getByUserId(id).subscribe(value => this.post = value)
      }
    })
  }


  ngOnInit(): void {
  }




}
