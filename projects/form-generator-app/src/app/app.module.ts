import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DemoComponent} from './demo/demo.component';
import {FormGeneratorLibraryModule} from "form-generator-library";
import {ParentFormComponent} from "./parrent-form/parent-form.component";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ParentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormGeneratorLibraryModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
