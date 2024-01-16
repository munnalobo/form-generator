import { NgModule } from '@angular/core';
import { FormGeneratorLibraryComponent } from './form-generator-library.component';
import { FormGeneratorComponent } from './form-generator/form-generator.component';
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";



@NgModule({
  declarations: [
    FormGeneratorLibraryComponent,
    FormGeneratorComponent
  ],
    imports: [
        MatButtonModule,
        MatRadioModule
    ],
  exports: [
    FormGeneratorLibraryComponent,
    FormGeneratorComponent,
  ]
})
export class FormGeneratorLibraryModule { }
