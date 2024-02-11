import {Component, OnInit} from '@angular/core';
import {ParentFormServiceService} from "../service/parent-form-service/parent-form-service.service";

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrl: './parent-form.component.scss'
})
export class ParentFormComponent implements OnInit {

  constructor(public parentFormServiceService: ParentFormServiceService) {
  }

  ngOnInit(): void {
    this.parentFormServiceService.populateData()
  }

  getData() {
    this.parentFormServiceService.getFinalJson();
  }
}
