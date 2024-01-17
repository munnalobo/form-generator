import {Component, Input, OnInit} from '@angular/core';
import {RadioButtonMetadata} from "../radio-button/radio-button.component";

@Component({
  selector: 'form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css'],
})
export class FormGeneratorComponent implements OnInit {
  @Input() public formMetaData: RadioButtonMetadata[];
  colors:string[] = ['red', 'blue', 'yellow', 'green'];
  favoriteColor:string;
  ngOnInit(): void {
  }

}
