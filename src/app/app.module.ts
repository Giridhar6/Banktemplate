import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { NgxChartsComponent } from './components/charts/ngx-charts/ngx-charts.component';
import { BarchartComponent } from './components/charts/barchart/barchart.component';
@NgModule({
  declarations: [
    AppComponent,
    NgxChartsComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
