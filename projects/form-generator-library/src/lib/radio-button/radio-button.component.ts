import {Component, Input, OnInit} from '@angular/core';
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {RadioButtonClusterMetadata} from "../models/radio-button-cluster-metadata";
import {NgIf} from "@angular/common";

@Component({
  selector: 'lib-radio-button',
  standalone: true,
  imports: [
    FormsModule,
    MatRadioModule,
    NgIf],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.css'
})
export class RadioButtonComponent implements OnInit {
  @Input() public radioButtonMetadata: RadioButtonClusterMetadata;
  @Input() overrideData: any;

  selectedValuePath: string;
  selectedValue: any;

  ngOnInit(): void {
    this.selectedValuePath = this.radioButtonMetadata.selectedValuePath;
    this.selectedValue = this.overrideData[this.selectedValuePath]
  }

  updateSelectedValue(selectedValue: any) {
    this.overrideData[this.selectedValuePath] = selectedValue;
  }
}
