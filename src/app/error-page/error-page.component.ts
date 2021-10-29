import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";
import {updatePlaceholderMap} from "@angular/compiler/src/render3/view/i18n/util";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  errorMessage: string = ""

  constructor(private currentRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.errorMessage = this.currentRoute.snapshot.data.errorMessage
    this.currentRoute.data.subscribe((updatedData: Data) => {
      this.errorMessage = updatedData.errorMessage
    })
  }

}
