import {Component, Input} from '@angular/core';
import {ICar} from "../../interfaces";
import {CarServiceService} from "../../services/car-service.service";

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  @Input()
  car: ICar;

  constructor(private carServiceService:CarServiceService) {
  }
  update():void {
    this.carServiceService.setCarForUpdate(this.car)

  }

  delete():void {
    this.carServiceService.deleteById(this.car.id).subscribe(()=>{
      this.carServiceService.setTrigger()
    })
  }
}
