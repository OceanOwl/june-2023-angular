import { Component } from '@angular/core';
import {UsersComponent} from "../../components";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [
    UsersComponent,
    RouterOutlet
  ],
  templateUrl: './users-page.component.html',
  styleUrl: './users-page.component.css'
})
export class UsersPageComponent {

}
