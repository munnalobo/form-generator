import {Component, OnInit} from '@angular/core';
import {ComponentType} from "../models/component-type";
import {FormRadioButtonCluster} from "../models/form-radio-button-cluster";
import {FormGroup} from "@angular/forms";
import {FormInputField, TextInputType} from "../models/form-Input-field";

let caremarkClientOtherValueMap = {
  CareMark: "CARE_MARK",
  Client: "CLIENT",
  Other: "OTHER",
};
let simpleYesNo = {
  Yes: true,
  No: false,
};

let eligibilityEntityName = new FormRadioButtonCluster("priorAuthorizations_entityName",
  "Who is handling Prior Authorization?",
  caremarkClientOtherValueMap,
  'OTHER');

let memberAndContactSame = new FormRadioButtonCluster("priorAuthorizations_handler",
  "Who is handling Prior Authorization?",
  simpleYesNo,
  undefined,
  eligibilityEntityName.formControl,
  'CLIENT');

let priorAuthCaremarkWorkInstructionUrl = new FormInputField(
  'priorAuth_caremarkWorkInstructionUrl',
  '',
  'Work Instructions URL (optional)',
  TextInputType.URL,
  undefined,
  eligibilityEntityName.formControl,
  'CARE_MARK'
)

@Component({
  selector: 'lib-angular-reactive-form-generator',
  templateUrl: './angular-reactive-form-generator.component.html',
  styleUrl: './angular-reactive-form-generator.component.css'
})
export class AngularReactiveFormGeneratorComponent implements OnInit {
  dataFromBackend = {
    eligibilityEntityName: 'CLIENT',
    memberAndContactSame: false
  }
  someFormGroup = new FormGroup({
    eligibilityEntityName: eligibilityEntityName.formControl,
    memberAndContactSame: memberAndContactSame.formControl
  })
  someStaticForm = [
    eligibilityEntityName, memberAndContactSame,
    priorAuthCaremarkWorkInstructionUrl
  ]
  RADIO_BUTTON: ComponentType = ComponentType.RADIO_BUTTON;
  TEXT_INPUT: ComponentType = ComponentType.TEXT_INPUT;

  ngOnInit(): void {
    // this.someFormGroup.patchValue(this.dataFromBackend);
  }

  getKeys(someStaticForm) {
    return Object.keys(someStaticForm);
  }

  radioButtonTypeConvert(individualComponent: FormRadioButtonCluster | FormInputField) {
    return individualComponent as FormRadioButtonCluster;

  }
  textInputTypeConvert(individualComponent: FormRadioButtonCluster | FormInputField) {
    return individualComponent as FormInputField;

  }
}
