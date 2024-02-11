import {Component, Input, OnInit} from '@angular/core';
import {FormRadioButtonCluster} from "../models/form-radio-button-cluster";
import {FormInputField} from "../models/form-Input-field";
import {ComponentType} from "../models/component-type";

@Component({
  selector: 'lib-form-radio-button',
  templateUrl: './form-radio-button.component.html',
  styleUrl: './form-radio-button.component.css'
})
export class FormRadioButtonComponent implements OnInit {
  @Input() individualComponent: FormRadioButtonCluster | FormInputField;
  radioButtonMetaData: FormRadioButtonCluster;

  ngOnInit(): void {
    if (this.isRadioButton()) {
      this.radioButtonMetaData = this.radioButtonTypeConvert(this.individualComponent)
    }
  }

  radioButtonTypeConvert(individualComponent: FormRadioButtonCluster | FormInputField) {
    return individualComponent as FormRadioButtonCluster;
  }

  getKeys(someObject: {}) {
    return Object.keys(someObject);
  }

  isRadioButton() {
    return this.individualComponent.type === ComponentType.RADIO_BUTTON;
  }
}
