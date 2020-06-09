import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css'],
  styles: [
    `p{
      font: lato;
      color: darkblue;
      padding: 20px;
      background-color: white;
      border: 1px solid black;
  }`],
})
export class WarningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
