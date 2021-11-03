import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  genders = ["male", "female", "other"];

  signupForm: FormGroup

  constructor() {
    this.signupForm = new FormGroup({
      "username": new FormControl(),
      "email": new FormControl(),
      "gender": new FormControl("male")
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signupForm)
  }

}
