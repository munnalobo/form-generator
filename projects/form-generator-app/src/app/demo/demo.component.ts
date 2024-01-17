import {Component} from '@angular/core';
import {RadioButtonMetadata} from "../../../../form-generator-library/src/lib/radio-button/radio-button.component";

@Component({
  selector: 'app-demo', templateUrl: './demo.component.html', styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  overrideData: any = {
    mailOrderBulkUp: true,
    allowLimitOverrides: false
  };




  formMetaData: RadioButtonMetadata[] = [{
    heading: "Does client have mail order bulk up?",
    toolTip: "clint bulk up.",
    mandatoryField: true,
    type: "RADIO_BUTTON",
    radioButtonOptions: [{
      displayName: "Yes",
      value: true
    }, {
      displayName: "No",
      value: false
    }],
    selectedValue: this.overrideData.mailOrderBulkUp
  }, {
    heading: "Is there a limit to the number of Overrides allowed?",
    toolTip: "clint bulk up.",
    mandatoryField: true,
    type: "RADIO_BUTTON",
    radioButtonOptions: [{
      displayName: "Yes",
      value: true
    }, {
      displayName: "No",
      value: false
    }],
    selectedValue: this.overrideData.allowLimitOverrides
  }];
}
