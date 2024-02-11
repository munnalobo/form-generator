import {Component, Input, OnInit} from '@angular/core';
import {FormRadioButtonCluster} from "../models/form-radio-button-cluster";
import {FormInputField} from "../models/form-Input-field";
import {ComponentType} from "../models/component-type";

@Component({
  selector: 'lib-form-input-field',
  templateUrl: './form-input-field.component.html',
  styleUrl: './form-input-field.component.css'
})
export class FormInputFieldComponent implements OnInit{
  @Input() individualComponent: FormRadioButtonCluster | FormInputField;
  formMetadataMetaData: FormInputField;

  ngOnInit(): void {
    if (this.isTextInput()) {
      this.formMetadataMetaData = this.radioButtonTypeConvert(this.individualComponent);
    }
  }

  radioButtonTypeConvert(individualComponent: FormRadioButtonCluster | FormInputField) {
    return individualComponent as FormInputField;
  }

  isTextInput() {
    return this.individualComponent.type === ComponentType.TEXT_INPUT;
  }
}
