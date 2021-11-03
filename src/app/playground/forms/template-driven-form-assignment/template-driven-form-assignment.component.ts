import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven-form-assignment',
  templateUrl: './template-driven-form-assignment.component.html',
  styleUrls: ['./template-driven-form-assignment.component.css']
})
export class TemplateDrivenFormAssignmentComponent implements OnInit {

  @ViewChild("form") formData: NgForm | undefined
  defaultType = "advanced"
  isSubmitted = false
  results = {
    email: "",
    password: "",
    type: ""
  }

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.formData)
    this.results.email = this.formData?.value.credentials.username
    this.results.password = this.formData?.value.credentials.password
    this.results.type = this.formData?.value.type
    this.isSubmitted = true
    this.formData?.resetForm()
  }

}
