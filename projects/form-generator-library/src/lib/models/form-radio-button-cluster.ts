import {ComponentType} from "./component-type";
import {FormControl} from "@angular/forms";

export class FormRadioButtonCluster {
  name: string
  question: string
  valueMap: {}
  type: ComponentType = ComponentType.RADIO_BUTTON;
  selectedValue: any;

  parentFormControl: FormControl<any>;
  valueToBeChecked: any;
  display: boolean = true;

  private readonly _formControl: FormControl<any>;

  constructor(name: string,
              question: string,
              valueMap: {},
              selectedValue?: any,
              parentFormControl?: FormControl<any>,
              valueToBeChecked?: any) {

    this.name = name;
    this.question = question;
    this.valueMap = valueMap;
    this.selectedValue = selectedValue;

    this._formControl = new FormControl(this.name);
    this._formControl.setValue(this.selectedValue);

    this.parentFormControl = parentFormControl;
    this.valueToBeChecked = valueToBeChecked;

    if (this.parentFormControl) {
      this.display = selectedValue === this.valueToBeChecked
      this.parentFormControl.valueChanges.subscribe({
        next: value => {
          this._formControl.setValue(undefined);
          this.display = value === this.valueToBeChecked
        }
      })
    }
  }

  get formControl() {
    return this._formControl
  }
}

