import {ComponentType} from "./component-type";
import {FormControl} from "@angular/forms";

export class FormInputField {
  name: string
  question: string
  label: string
  textInputType: TextInputType
  type: ComponentType = ComponentType.TEXT_INPUT;
  selectedValue: any;

  parentFormControl: FormControl<any>;
  valueToBeChecked: any;
  display: boolean = true;

  private readonly _formControl: FormControl<any>;

  constructor(name: string,
              question: string,
              label: string,
              textInputType: TextInputType,
              selectedValue?: any,
              parentFormControl?: FormControl<any>,
              valueToBeChecked?: any) {

    this.name = name;
    this.question = question;
    this.label = label;
    this.textInputType = textInputType;
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

  get hint(): string {
    return this.textInputType == TextInputType.PHONE_NUMBER
           ? 'Example: (###) ###-####'
           : this.textInputType == TextInputType.EMAIL
             ? 'Example: leo.lobo@yahoo.com'
             : this.textInputType == TextInputType.URL
               ? 'Example: WWW.google.com'
               : this.textInputType == TextInputType.TEXT
                 ? 'Some Text Input'
                 : 'Some Text Input';

  }
}


export enum TextInputType {
  PHONE_NUMBER,
  EMAIL,
  URL,
  TEXT
}
