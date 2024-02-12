import {Component, Input, OnInit} from '@angular/core';
import {FormRadioButtonCluster} from "../models/form-radio-button-cluster";
import {FormInputField} from "../models/form-Input-field";
import {FormDropdown} from "../models/form-dropdown";
import {FormAgGrid} from "../models/form-ag-grid";
import {ComponentType} from "../models/component-type";

@Component({
  selector: 'lib-ag-grid-with-form',
  templateUrl: './ag-grid-with-form.component.html',
  styleUrl: './ag-grid-with-form.component.css'
})
export class AgGridWithFormComponent implements OnInit {
  @Input() individualComponent: FormRadioButtonCluster | FormInputField | FormDropdown | FormAgGrid;
  formAgGrid: FormAgGrid;
  themeClass = "ag-theme-quartz";

  ngOnInit(): void {
    if (this.isAgGrid()) {
      this.formAgGrid = this.agGridTypeConvert(this.individualComponent)
    }
  }

  agGridTypeConvert(individualComponent: FormRadioButtonCluster | FormInputField | FormDropdown | FormAgGrid) {
    return individualComponent as FormAgGrid;
  }

  isAgGrid() {
    return this.individualComponent.type === ComponentType.AG_GRID;
  }
}
