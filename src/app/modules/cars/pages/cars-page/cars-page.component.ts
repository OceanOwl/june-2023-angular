import {Component, OnInit} from '@angular/core';
import {CarService} from "../../../../services";
import {ICar} from "../../../../interfaces";
import {PageEvent} from "@angular/material/paginator";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrl: './cars-page.component.css'
})
export class CarsPageComponent implements OnInit {
  cars: ICar[];
  length: number;
  pageSize: number = 10;
  pageIndex: number;

  constructor(private carService: CarService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.carService.getTrigger().subscribe(() => {
      this.activatedRoute.queryParams.subscribe(({page}) => {
        this.carService.getAll(page).subscribe(value => {
          this.length = value.total_items
          this.cars = value.items

        })

      })
      this.router.navigate([], {queryParams: {page: 1}})
    })

  }

  handlePageEvent(event: PageEvent) {
    this.router.navigate([], {queryParams: {page: event.pageIndex + 1}})
  }
}
