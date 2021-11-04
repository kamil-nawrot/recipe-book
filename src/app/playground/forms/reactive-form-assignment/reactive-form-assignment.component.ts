import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-reactive-form-assignment',
  templateUrl: './reactive-form-assignment.component.html',
  styleUrls: ['./reactive-form-assignment.component.css']
})
export class ReactiveFormAssignmentComponent implements OnInit {

  form: FormGroup
  forbiddenNames = ["test"]
  submitted = false
  result: { name: string, email: string, status: string }

  constructor() {
    this.form = new FormGroup({
      "name": new FormControl(null, Validators.required, this.allowedNames),
      "email": new FormControl(null, [Validators.required, Validators.email]),
      "status": new FormControl("stable")
    })
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(values => console.log(values))
  }

  allowedNames = (control: FormControl): Observable<{[s: string]: boolean} | null> => {
    return new Observable<{[s: string]: boolean} | null>(observer => {
      setTimeout(() => {
        if (this.forbiddenNames.includes(control.value.toString().toLowerCase())) {
          observer.next({"nameIsForbidden": true})
        } else observer.next(null)
        observer.complete()
      }, 1000)
    })
  }

  onSubmit() {
    console.log(this.form)
    this.submitted = true
    this.result = {
      name: this.form.get("name").value,
      email: this.form.get("email").value,
      status: this.form.get("status").value
    }
    this.form.reset()
  }

}
