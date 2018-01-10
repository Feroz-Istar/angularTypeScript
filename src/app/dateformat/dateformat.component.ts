import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common'

@Component({
  selector: 'app-dateformat',
  templateUrl: './dateformat.component.html',
  styleUrls: ['./dateformat.component.css']
})
export class DateformatComponent implements OnInit {
  formatdate = 'dd/MM/yyyy h:mm:ss a';
  pipe = new DatePipe('en-US');
  constructor() { }

  ngOnInit() {
    const now = Date.now();
    const myFormattedDate = this.pipe.transform(now, this.formatdate);

    console.log(myFormattedDate);
  }

}
