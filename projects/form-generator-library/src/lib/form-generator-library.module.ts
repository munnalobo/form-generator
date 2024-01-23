import {NgModule} from '@angular/core';
import {FormGeneratorLibraryComponent} from './form-generator-library.component';
import {FormGeneratorComponent} from './form-generator/form-generator.component';
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {RadioButtonComponent} from "./radio-button/radio-button.component";
import {TextInputComponent} from "./text-input/text-input.component";
import {FormFieldMetadata} from "./models/form-field-metadata";


@NgModule({
  declarations: [
    FormGeneratorLibraryComponent,
    FormGeneratorComponent
  ],
  imports: [
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    NgIf,
    MatInputModule,
    RadioButtonComponent,
    TextInputComponent
  ],
  exports: [
    FormGeneratorLibraryComponent,
    FormGeneratorComponent,
  ]
})
export class FormGeneratorLibraryModule {
}
