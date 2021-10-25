import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-odd-number',
  templateUrl: './odd-number.component.html',
  styleUrls: ['./odd-number.component.css']
})
export class OddNumberComponent implements OnInit {

  @Input() number: number = 0

  constructor() { }

  ngOnInit(): void {
  }

}
