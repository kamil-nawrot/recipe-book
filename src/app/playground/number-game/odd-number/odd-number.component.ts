import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd-number',
  templateUrl: './odd-number.component.html',
  styleUrls: ['./odd-number.component.css']
})
export class OddNumberComponent implements OnInit {

  oddNumbers = [1, 3, 5, 7, 9]

  constructor() { }

  ngOnInit(): void {
  }

}
