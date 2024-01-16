import { NgModule } from '@angular/core';
import { FormGeneratorLibraryComponent } from './form-generator-library.component';
import { FormGeneratorComponent } from './form-generator/form-generator.component';



@NgModule({
  declarations: [
    FormGeneratorLibraryComponent,
    FormGeneratorComponent
  ],
  imports: [
  ],
  exports: [
    FormGeneratorLibraryComponent,
    FormGeneratorComponent
  ]
})
export class FormGeneratorLibraryModule { }
