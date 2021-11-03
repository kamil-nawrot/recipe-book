import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  @ViewChild("form") formData: NgForm | undefined

  defaultQuestion = "pet"
  answer = ""
  genderList = ["male", "female", "other"]

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formData: NgForm) {
    console.log(formData)
  }

  onSuggestUsername() {
    this.formData?.form.patchValue({
      userData: {
        username: "Suggested Username"
      }
    })
  }

}
