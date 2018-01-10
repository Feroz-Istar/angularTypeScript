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
    this.map1.set("sss","aa");
    this.map1.set("aaa","aass");
    this.map1.set("sass","SZZZZ");
    this.map1.set("xxx","ssawqqqs");
    this.map1.set("ss","sdfxcxss");


    this.map1.forEach((value: string, key: string) => {
      console.log(key, value);
  
    });


    this.map.set("yoyoy",this.map1);

  }
  getKeys(map){
    return Array.from(map.keys());
  }
 

}

