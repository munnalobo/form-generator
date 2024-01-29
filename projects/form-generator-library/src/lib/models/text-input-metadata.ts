import {FormFieldMetadata} from "./form-field-metadata";
import {ComponentType} from "./component-type";

export class TextInputMetadata extends FormFieldMetadata {
  placeHolder!: string;

  constructor(heading: string,
              toolTip: string,
              mandatoryField: boolean,
              selectedValuePath: string,
              placeHolder: string,
              displayCondition?: () => boolean,
  ) {
    super(heading, toolTip, mandatoryField, ComponentType.TEXT_INPUT, selectedValuePath, displayCondition);
    this.placeHolder = placeHolder;
  }
}
