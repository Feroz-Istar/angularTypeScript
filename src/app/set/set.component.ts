import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.css']
})
export class SetComponent implements OnInit {
  set = new Set<String>();

  constructor() { }

  ngOnInit() {
    this.set.add('yahooo ');
    this.set.add('sd dljd skd  ');
    this.set.add('asassasaasa ');
    this.set.forEach((value: string) => {
      console.log(value)
    });
  }

}
