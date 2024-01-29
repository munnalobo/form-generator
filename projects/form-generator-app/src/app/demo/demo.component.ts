import {Component, OnInit} from '@angular/core';
import {AcceptableComponentTypes, RadioButtonClusterMetadata, TextInputMetadata} from "form-generator-library";
import {RadioButtonOption} from "../../../../form-generator-library/src/lib/models/radio-button-option";


@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  allowLimitOverrides: Boolean = false;
  // Came from BackEnd
  overrideData: any = {
    mailOrderBulkUp: true,
    allowLimitOverrides: false,
    contactNumber: "+xx xxx-xxx-xxxx"
  };

  formMetaData: (AcceptableComponentTypes | AcceptableComponentTypes[])[] = [this.clientMailOrderRadioButton(),
                                                                             this.limitNumberOverrideRadioButton(),
    [this.mailOrderBulkUpTextInput(), this.mailOrderBulkUpTextInput2()]];

  formGroupedMetaData: Map<string, (AcceptableComponentTypes | AcceptableComponentTypes[])[]> = new Map();

  ngOnInit(): void {
    this.formGroupedMetaData.set('accordion1', this.formMetaData);
  }

  clientMailOrderRadioButton(): RadioButtonClusterMetadata {
    const radioButtonOptionYes = new RadioButtonOption('Yes', true);
    const radioButtonOptionNo = new RadioButtonOption('No', false);
    return new RadioButtonClusterMetadata("Does client have mail order bulk up?",
      "clint bulk up.",
      true,
      'mailOrderBulkUp',
      [radioButtonOptionYes, radioButtonOptionNo],);
  }

  limitNumberOverrideRadioButton(): RadioButtonClusterMetadata {
    const radioButtonOptionYes = new RadioButtonOption('Yes', true);
    const radioButtonOptionNo = new RadioButtonOption('No', false);

    return new RadioButtonClusterMetadata("Is there a limit to the number of Overrides allowed?",
      "clint bulk up.",
      true,
      'allowLimitOverrides',
      [radioButtonOptionYes, radioButtonOptionNo]);
  }

  mailOrderBulkUpTextInput(): TextInputMetadata {
    return new TextInputMetadata("Contact Number.",
      "clint bulk up.",
      true,
      'contactNumber',
      "somePlaceHolder",
      () => this.overrideData.allowLimitOverrides === true);
  }

  mailOrderBulkUpTextInput2(): TextInputMetadata {
    return new TextInputMetadata("Contact Number.",
      "clint bulk up.",
      true,
      'contactNumber',
      "somePlaceHolder",
      () => this.overrideData.allowLimitOverrides === true);
  }

}
