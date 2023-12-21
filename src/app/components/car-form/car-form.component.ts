import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {JsonPipe, NgIf} from "@angular/common";
import {CarServiceService} from "../../services/car-service.service";
import {ICar} from "../../interfaces";


@Component({
  selector: 'app-car-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    JsonPipe
  ],
  templateUrl: './car-form.component.html',
  styleUrl: './car-form.component.css'
})
export class CarFormComponent implements OnInit {
  form: FormGroup;
  carForUpdate: ICar;

  constructor(private fb: FormBuilder, private carServiceService: CarServiceService) {
  }

  ngOnInit(): void {
    this._formInit()
    this.carServiceService.getCarForUpdate().subscribe(value=>{
this.carForUpdate = value

      if (value){
        const {brand, price, year} = value;
        this.form.patchValue({brand, price, year})
      }
    })
  }

  _formInit(): void {
    this.form = this.fb.group({
      brand: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Zа-яА-ЯЇЙ{1-20}$]/)]
      ],
      price: ['', [
        Validators.required,
        Validators.pattern(/^\d*$/),
        Validators.min(0),
        Validators.max(1_000_000)]],
      year: ['', [
        Validators.required,
        Validators.pattern(/^\d*$/),
        Validators.min(1990),
        Validators.max(new Date().getFullYear())]
      ],

    })
  }

  create(): void {
    this.carServiceService.create(this.form.value).subscribe(() => {
      this.carServiceService.setTrigger()
      this.form.reset()
    })
  }
update():void{
    this.carServiceService.updateById(this.carForUpdate.id, this.form.value).subscribe(()=>{
      this.carServiceService.setTrigger()
      this.carServiceService.setCarForUpdate(null)
      this.form.reset()
    })
}
}
