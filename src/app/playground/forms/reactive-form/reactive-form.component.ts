import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

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
      "username": new FormControl("", Validators.required),
      "email": new FormControl("", [Validators.required, Validators.email]),
      "gender": new FormControl("male"),
      "hobbies": new FormArray([])
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signupForm)
  }

  onAddHobby() {
    (<FormArray>this.signupForm.get("hobbies")).push(new FormControl(null, Validators.required))
  }

  getControls() {
    return (<FormArray>this.signupForm.get("hobbies")).controls
  }

}
