import {ComponentType} from "./component-type";

export class FormFieldMetadata {


  heading: string;
  toolTip: string;
  type: ComponentType;
  selectedValuePath: string;
  mandatoryField: boolean;
  displayCondition?: () => boolean;


  constructor(heading: string,
              toolTip: string,
              mandatoryField: boolean,
              type: ComponentType,
              selectedValuePath: string,
              displayCondition?: () => boolean
  ) {
    this.heading = heading;
    this.toolTip = toolTip;
    this.mandatoryField = mandatoryField;
    this.type = type;
    this.selectedValuePath = selectedValuePath;
    this.displayCondition = displayCondition === undefined
                            ? () => true
                            : displayCondition;
  }
}

