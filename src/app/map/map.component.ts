import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  map = new Map<String, Map<String,String>>();
  map1 = new Map<String, String>();
  mapkeys;

  constructor() { 

    
  }

  ngOnInit() {
    this.map1.set("sss","sss");
    this.map1.set("aaa","sss");
    this.map1.set("sass","sss");
    this.map1.set("xxx","sss");
    this.map1.set("ss","sss");


    this.map1.forEach((value: string, key: string) => {
      console.log(key, value);
  
    });


    this.map.set("yoyoy",this.map1);
    this.mapkeys = Array.from(this.map.keys());

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