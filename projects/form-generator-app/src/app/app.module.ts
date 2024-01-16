import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import {FormGeneratorLibraryModule} from "form-generator-library";

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormGeneratorLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
