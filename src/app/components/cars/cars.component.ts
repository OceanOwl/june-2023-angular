import {Component, OnInit} from '@angular/core';
import {ICar} from "../../interfaces";
import {CarServiceService} from "../../services/car-service.service";
import {CarComponent} from "../car/car.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    CarComponent,
    NgForOf
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit{
  cars: ICar[];
constructor(private carServiceService:CarServiceService) {
}
  ngOnInit(): void {
  this.carServiceService.getAll().subscribe(value => this.cars = value)
  }

}
