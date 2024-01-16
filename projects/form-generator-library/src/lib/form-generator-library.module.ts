import { NgModule } from '@angular/core';
import { FormGeneratorLibraryComponent } from './form-generator-library.component';
import { SomethingComponent } from './something/something.component';



@NgModule({
  declarations: [
    FormGeneratorLibraryComponent,
    SomethingComponent
  ],
  imports: [
  ],
  exports: [
    FormGeneratorLibraryComponent,
    SomethingComponent
  ]
})
export class FormGeneratorLibraryModule { }
