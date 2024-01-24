import {Component, Input, OnInit} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {TextInputMetadata} from "../models/text-input-metadata";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@Component({
  selector: 'lib-text-input',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    NgIf,
    FormsModule,],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css'
})
export class TextInputComponent implements OnInit {
  @Input() public textInputMetadata: TextInputMetadata;

  ngOnInit(): void {
  }
}
