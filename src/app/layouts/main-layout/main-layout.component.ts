import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {UsersComponent} from "../../components";

@Component({
  selector: 'app-main-layout',
  standalone: true,
    imports: [
        RouterOutlet,
        UsersComponent
    ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
