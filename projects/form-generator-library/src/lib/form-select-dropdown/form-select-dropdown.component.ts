import {Component, Input, OnInit} from '@angular/core';
import {FormRadioButtonCluster} from "../models/form-radio-button-cluster";
import {FormInputField} from "../models/form-Input-field";
import {FormDropdown} from "../models/form-dropdown";
import {ComponentType} from "../models/component-type";

@Component({
  selector: 'lib-form-select-dropdown',
  templateUrl: './form-select-dropdown.component.html',
  styleUrl: './form-select-dropdown.component.css'
})
export class FormSelectDropdownComponent implements OnInit {
  @Input() individualComponent: FormRadioButtonCluster | FormInputField | FormDropdown;
  dropdownData: FormDropdown;

  ngOnInit(): void {
    if (this.isDropdown()) {
      this.dropdownData = this.radioButtonTypeConvert(this.individualComponent)
    }
  }

  radioButtonTypeConvert(individualComponent: FormRadioButtonCluster | FormInputField | FormDropdown) {
    return individualComponent as FormDropdown;
  }

  getKeys() {
    return Object.keys((this.individualComponent as FormDropdown).valueMap);
  }

  getDisplayValue(key: any) {
    return (this.individualComponent as FormDropdown).valueMap[key];
  }

  isDropdown() {
    return this.individualComponent.type === ComponentType.DROP_DOWN;
  }
}
