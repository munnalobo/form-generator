import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  formMetaData: any = [
    {
      heading: "Does client have mail order bulk up?",
      toolTip: "clint bulk up.",
      mandatoryField: true,
      type: "RADIO_BUTTON",
      values: [
        {
          displayName: "Yes",
          value: true
        },
        {
          displayName: "No",
          value: false
        }
      ]
    }

  ];
}
