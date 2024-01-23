import {FormFieldMetadata} from "./form-field-metadata";
import {ComponentType} from "./component-type";

export class TextInputMetadata extends FormFieldMetadata {


  constructor(heading: string,
              toolTip: string,
              mandatoryField: boolean,
              type: ComponentType,
              selectedValuePath: string,
              displayCondition: () => boolean,
              placeHolder: string) {
    super(heading, toolTip, mandatoryField, type, selectedValuePath, displayCondition);
    this.placeHolder = placeHolder;
  }

  placeHolder!: string;
}
