import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form: FormGroup

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this._initForm()
  }

  _initForm(): void {
    this.form = this.fb.group({
      username: [''],
      password: ['']
    })

  }
}
