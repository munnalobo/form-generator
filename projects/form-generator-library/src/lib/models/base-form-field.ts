import {FormControl} from "@angular/forms";

export class BaseFormField {
  name: string
  question: string
  selectedValue: any;
  parentFormControl: FormControl<any>;
  formControl: FormControl<any>;
  display: boolean = true;
  valueToBeChecked: any[];

  setName(value: string) {
    this.name = value;
    return this;
  }

  setQuestion(value: string) {
    this.question = value;
    return this;
  }

  setSelectedValue(value: any) {
    this.selectedValue = value;
    return this;
  }

  setParentFormControl(value: FormControl<any>) {
    this.parentFormControl = value;
    return this;
  }

  setDisplay(value: boolean) {
    this.display = value;
    return this;
  }

  setValueToBeChecked(value: any[]) {
    this.valueToBeChecked = value;
    return this;
  }

  build() {
    this.formControl = new FormControl(this.name);
    this.formControl.setValue(this.selectedValue)

    if (this.parentFormControl) {
      this.display = this.valueToBeChecked.includes(this.selectedValue)
      this.parentFormControl.valueChanges.subscribe({
        next: value => {
          this.formControl.setValue(undefined);
          this.display = this.valueToBeChecked.includes(value)
        }
      })
    }
    return this;
  }
}
