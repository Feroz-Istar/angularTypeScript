import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { SetComponent } from './set/set.component';
import { DateformatComponent } from './dateformat/dateformat.component';
import { ModaltestComponent } from './modaltest/modaltest.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SetComponent,
    DateformatComponent,
    ModaltestComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
