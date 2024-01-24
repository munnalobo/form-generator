import {Component, Input, OnInit} from '@angular/core';
import {ComponentType} from "../models/component-type";
import {RadioButtonClusterMetadata} from "../models/radio-button-cluster-metadata";
import {TextInputMetadata} from "../models/text-input-metadata";
import {getDataArray} from "../helpers/utils.service";


export type AcceptableComponentTypes = (RadioButtonClusterMetadata | TextInputMetadata);

@Component({
  selector: 'form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css'],
})
export class FormGeneratorComponent implements OnInit {
  @Input() formMetaData!: (AcceptableComponentTypes | AcceptableComponentTypes[])[];
  @Input() overrideData!: any;
  protected readonly ComponentType = ComponentType;
  protected readonly Array = Array;

  ngOnInit(): void {
  }

  getDataWithType(formFieldMetadata: AcceptableComponentTypes) {
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

  protected readonly getDataArray = getDataArray;
}

