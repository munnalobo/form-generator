import {Component, Input, OnInit} from '@angular/core';
import {ComponentType} from "../models/component-type";
import {RadioButtonClusterMetadata} from "../models/radio-button-cluster-metadata";
import {TextInputMetadata} from "../models/text-input-metadata";


@Component({
  selector: 'form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css'],
})
export class FormGeneratorComponent implements OnInit {
  @Input() formMetaData!: (RadioButtonClusterMetadata | TextInputMetadata | (RadioButtonClusterMetadata | TextInputMetadata)[])[];
  @Input() overrideData!: any;
  display1 = true

  protected readonly ComponentType = ComponentType;
  protected readonly Array = Array;

  ngOnInit(): void {
  }

  getDataWithType(formFieldMetadata: RadioButtonClusterMetadata | TextInputMetadata) {
    let returnValue: any;

    if (formFieldMetadata.type === ComponentType.RADIO_BUTTON) {
      returnValue = formFieldMetadata as RadioButtonClusterMetadata;
    } else if (formFieldMetadata.type === ComponentType.TEXT_INPUT) {
      returnValue = formFieldMetadata as TextInputMetadata;
    } else {
      console.error('');
    }
    return returnValue;
  }

  convertToTypeArray(value: any): any[] {
    return value as any[];
  }
}
