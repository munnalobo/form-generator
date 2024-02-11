import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-angular-reactive-form-generator',
  templateUrl: './angular-reactive-form-generator.component.html',
  styleUrl: './angular-reactive-form-generator.component.css'
})
export class AngularReactiveFormGeneratorComponent implements OnInit {
  @Input() formMetaData: any;
  @Input() formMetaDataWithSections: Map<any, any>;
  @Input() dataFromBackend: any;
  @Input() individualForm: any;
  constructor() {
  }

  ngOnInit(): void {
  }

  isArray(value: any) {
    return value instanceof Array;
  }

  asArray(value: any) {
    return value as [];
  }

  getKeys(){
    return Array.from(this.formMetaDataWithSections.keys())
  }
}
