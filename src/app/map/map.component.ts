import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map = new Map<String, String>();
  constructor() { 

    
  }

  ngOnInit() {
    this.map.set("sss","sss");
    this.map.set("aaa","sss");
    this.map.set("sass","sss");
    this.map.set("xxx","sss");
    this.map.set("ss","sss");
    this.map.forEach((value: string, key: string) => {
      console.log(key, value);
  
    });

    
  }

 

}


import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'iterable'
})
export class IterablePipe implements PipeTransform {
  transform(iterable: any, args: any[]): any {
    let result = [];

    if (iterable.entries) {
      iterable.forEach((key, value) => {
        result.push({ key, value });
      });
    } else {
      for (let key in iterable) {
        if (iterable.hasOwnProperty(key)) {
          result.push({ key, value: iterable[key] });
        }
      }
    }

    return result;
  }
}