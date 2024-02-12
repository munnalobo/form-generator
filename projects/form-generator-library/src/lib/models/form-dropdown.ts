import {BaseFormField} from "./base-form-field";
import {ComponentType} from "./component-type";

export class FormDropdown extends BaseFormField {
  type: ComponentType = ComponentType.DROP_DOWN;
  valueMap: {}

  setValueMap(value: {}) {
    this.valueMap = value;
    return this;
  }
}
