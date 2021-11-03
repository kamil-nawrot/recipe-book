import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven-form-assignment',
  templateUrl: './template-driven-form-assignment.component.html',
  styleUrls: ['./template-driven-form-assignment.component.css']
})
export class TemplateDrivenFormAssignmentComponent implements OnInit {

  @ViewChild("form") formData: NgForm | undefined

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.formData)
  }

}
