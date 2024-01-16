import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'form-generator',
  templateUrl: './form-generator.component.html',
  styleUrls: ['./form-generator.component.css'],
})
export class FormGeneratorComponent implements OnInit {
  @Input() public formMetaData: any;
  favoriteColor:string;
  colors:string[] = ['red', 'blue', 'yellow', 'green'];
  ngOnInit(): void {
    console.log(this.formMetaData);
  }

}
