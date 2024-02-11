import {ComponentType} from "./component-type";
import {BaseFormField} from "./base-form-field";

export class FormRadioButtonCluster extends BaseFormField {
  type: ComponentType = ComponentType.RADIO_BUTTON;
  valueMap: {}

  setValueMap(value: {}) {
    this.valueMap = value;
    return this;
  }
}
