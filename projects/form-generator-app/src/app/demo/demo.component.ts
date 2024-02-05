import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {RadioButtonClusterMetadata, TextInputMetadata} from "form-generator-library";
import {RadioButtonOption} from "../../../../form-generator-library/src/lib/models/radio-button-option";
import {ComponentType} from "../../../../form-generator-library/src/lib/models/component-type";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnChanges, OnInit {
  allowLimitOverrides: Boolean = false;
  // Came from BackEnd
  overrideData: any = {
    mailOrderBulkUp: true,
    allowLimitOverrides: false,
    contactNumber: "+xx xxx-xxx-xxxx"
  };
  formMetaData: (RadioButtonClusterMetadata | TextInputMetadata | (RadioButtonClusterMetadata | TextInputMetadata)[])[] = [this.clientMailOrderRadioButton(),
                                                                                                                           this.limitNumberOverrideRadioButton(),
    [this.mailOrderBulkUpTextInput(), this.mailOrderBulkUpTextInput2()]];
  headerMap: Map<string, (RadioButtonClusterMetadata | TextInputMetadata | (RadioButtonClusterMetadata | TextInputMetadata)[])[]> = new Map<string, (RadioButtonClusterMetadata | TextInputMetadata | (RadioButtonClusterMetadata | TextInputMetadata)[])[]>();


  ngOnInit(): void {
    this.headerMap.set('Client Information', this.formMetaData);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes", changes);
  }

  clientMailOrderRadioButton(): RadioButtonClusterMetadata {
    const radioButtonOptionYes = new RadioButtonOption('Yes', true);
    const radioButtonOptionNo = new RadioButtonOption('No', false);
    return new RadioButtonClusterMetadata("Does client have mail order bulk up?",
      "client bulk up.",
      true,
      ComponentType.RADIO_BUTTON,
      'mailOrderBulkUp',
      () => true,
      [radioButtonOptionYes, radioButtonOptionNo]);
  }

  limitNumberOverrideRadioButton(): RadioButtonClusterMetadata {
    const radioButtonOptionYes = new RadioButtonOption('Yes', true);
    const radioButtonOptionNo = new RadioButtonOption('No', false);
    return new RadioButtonClusterMetadata("Is there a limit to the number of Overrides allowed?",
      "client bulk up.",
      true,
      ComponentType.RADIO_BUTTON,
      'allowLimitOverrides',
      () => true,
      [radioButtonOptionYes, radioButtonOptionNo]);
  }

  mailOrderBulkUpTextInput(): TextInputMetadata {
    return new TextInputMetadata("Contact Number.",
      "clint bulk up.",
      true,
      ComponentType.TEXT_INPUT,
      'contactNumber',
      () => this.overrideData.allowLimitOverrides === true,
      "somePlaceHolder");
  }

  mailOrderBulkUpTextInput2(): TextInputMetadata {
    return new TextInputMetadata("Contact Number.",
      "clint bulk up.",
      true,
      ComponentType.TEXT_INPUT,
      'contactNumber',
      () => this.overrideData.allowLimitOverrides === true,
      "somePlaceHolder");
  }
}
