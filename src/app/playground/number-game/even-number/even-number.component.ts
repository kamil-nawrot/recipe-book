import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even-number',
  templateUrl: './even-number.component.html',
  styleUrls: ['./even-number.component.css']
})
export class EvenNumberComponent implements OnInit {

  evenNumbers = [2, 4, 6, 8]

  constructor() { }

  ngOnInit(): void {
  }

}
