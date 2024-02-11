import {NgModule} from '@angular/core';
import {FormGeneratorLibraryComponent} from './form-generator-library.component';
import {FormGeneratorComponent} from './form-generator/form-generator.component';
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {RadioButtonComponent} from "./radio-button/radio-button.component";
import {TextInputComponent} from "./text-input/text-input.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatExpansionModule} from "@angular/material/expansion";
import {
  AngularReactiveFormGeneratorComponent
} from "./angular-reactive-form-generator/angular-reactive-form-generator.component";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormRadioButtonComponent} from "./form-radio-button/form-radio-button.component";
import {FormInputFieldComponent} from "./form-input-field/form-input-field.component";

@NgModule({
  declarations: [FormGeneratorLibraryComponent,
                 FormGeneratorComponent,
                 AngularReactiveFormGeneratorComponent,
                 FormInputFieldComponent,
                 FormRadioButtonComponent],
  imports: [MatButtonModule,
            MatRadioModule,
            FormsModule,
            MatFormFieldModule,
            NgIf,
            MatInputModule,
            RadioButtonComponent,
            BrowserAnimationsModule,
            TextInputComponent,
            MatExpansionModule, ReactiveFormsModule, MatIconModule],
  exports: [FormGeneratorLibraryComponent,
            FormGeneratorComponent,
            AngularReactiveFormGeneratorComponent,
            FormInputFieldComponent,
            FormRadioButtonComponent]
})
export class FormGeneratorLibraryModule {
}
