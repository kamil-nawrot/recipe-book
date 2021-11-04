import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  genders = ["male", "female", "other"];
  forbiddenNames = ["admin", "superadmin"]

  signupForm: FormGroup

  constructor() {
    this.signupForm = new FormGroup({
      "username": new FormControl("", [Validators.required, this.allowedUsernames, Validators.minLength(8)]),
      "email": new FormControl("", [Validators.required, Validators.email], this.allowedEmails),
      "gender": new FormControl("male"),
      "hobbies": new FormArray([])
    })
  }

  ngOnInit(): void {
    this.signupForm.statusChanges.subscribe(status => console.log(status))
    this.signupForm.get("email").valueChanges.subscribe(values => console.log(values))
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

  allowedUsernames = (control: FormControl): { [s: string]: boolean } | null => {
    if (this.forbiddenNames.includes(control.value)) {
      return { "nameIsForbidden": true }
    }
    return null
  }

  allowedEmails = (control: FormControl): Promise<any> | Observable<any> => {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === "test@test.com") resolve({"emailIsForbidden": true})
        else resolve(null)
      }, 1000)
    })
  }

}
