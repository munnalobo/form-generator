import {Component} from '@angular/core';

@Component({
  selector: 'lib-radio-button',
  standalone: true,
  imports: [],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.css'
})
export class RadioButtonComponent {


}

export interface RadioButtonMetadata {
  heading: string;
  toolTip: string;
  mandatoryField: boolean;
  type: string;
  radioButtonOptions: RadioButtonOption[];
  selectedValue?: boolean | string;
}

export interface RadioButtonOption {
  displayName: string;
  value: boolean;
}
