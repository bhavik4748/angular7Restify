import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationsComponent, DialogDataExampleDialog } from './locations/locations.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './material-module';


@NgModule({
  declarations: [
    AppComponent,
    LocationsComponent,
    DialogDataExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  entryComponents: [DialogDataExampleDialog],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
