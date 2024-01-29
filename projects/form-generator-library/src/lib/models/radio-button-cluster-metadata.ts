import {FormFieldMetadata} from "./form-field-metadata";
import {RadioButtonOption} from "./radio-button-option";
import {ComponentType} from "./component-type";

export class RadioButtonClusterMetadata extends FormFieldMetadata {
  radioButtonOptions!: RadioButtonOption[];


  constructor(heading: string,
              toolTip: string,
              mandatoryField: boolean,
              selectedValuePath: string,
              radioButtonOptions: RadioButtonOption[],
              displayCondition?: () => boolean) {
    super(heading, toolTip, mandatoryField, ComponentType.RADIO_BUTTON, selectedValuePath, displayCondition);
    this.radioButtonOptions = radioButtonOptions;
  }
}
