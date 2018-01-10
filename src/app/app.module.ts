import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MapComponent,IterablePipe } from './map/map.component';
import { SetComponent } from './set/set.component';
import { DateformatComponent } from './dateformat/dateformat.component';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SetComponent,
    IterablePipe,
    DateformatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
