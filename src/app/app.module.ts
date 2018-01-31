import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarchartComponent } from './components/charts/barchart/barchart.component';
import { NgxChartsComponent } from './components/charts/ngx-charts/ngx-charts.component';
import { FormsComponent } from './components/material/forms/forms.component';
import { CdkTableModule } from '@angular/cdk/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations/src/module';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './module/material/MaterialModule';
import { ChatComponent } from './components/chat/chat.component';
import { CrudOperationsComponent } from './components/crudoperations/crud-operations/crud-operations.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NgxChartsComponent,
    BarchartComponent,
    FormsComponent,
    ChatComponent,
    CrudOperationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    MaterialModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CdkTableModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
