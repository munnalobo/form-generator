import {AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {pairwise, startWith} from "rxjs";

export class BaseFormField {
  name: string
  question: string
  selectedValue: any;
  parentFormControl: FormControl<any>;
  formControl: FormControl<any>;
  display: boolean = true;
  valueToBeChecked: any[];
  validators: (((control: AbstractControl) => (ValidationErrors | null)) | ValidatorFn)[]

  setName(value: string) {
    this.name = value;
    return this;
  }

  setValidators(...value: (((control: AbstractControl) => (ValidationErrors | null)) | ValidatorFn)[]) {
    this.validators = value;
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
    this.formControl = new FormControl(this.name, this.validators);
    this.formControl.setValue(this.selectedValue)

    if (this.parentFormControl) {
      this.display = this.valueToBeChecked.includes(this.selectedValue)
      this.parentFormControl.valueChanges
        .pipe(startWith(null), pairwise())
        .subscribe({
          next: ([previousValue, currentValue]: [any, any]) => {
            this.display = this.valueToBeChecked.includes(currentValue)
            if ((!this.parentFormControl.disabled) && (previousValue != currentValue)) {
              this.formControl.setValue(undefined)
            }
          }
        })
    }
    return this;
  }
}
