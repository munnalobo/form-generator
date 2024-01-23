import {FormFieldMetadata} from "./form-field-metadata";
import {RadioButtonOption} from "./radio-button-option";
import {ComponentType} from "./component-type";

export class RadioButtonClusterMetadata extends FormFieldMetadata {
  radioButtonOptions!: RadioButtonOption[];


  constructor(heading: string,
              toolTip: string,
              mandatoryField: boolean,
              type: ComponentType,
              selectedValuePath: string,
              displayCondition: () => boolean,
              radioButtonOptions: RadioButtonOption[]) {
    super(heading, toolTip, mandatoryField, type, selectedValuePath, displayCondition);
    this.radioButtonOptions = radioButtonOptions;
  }
}
