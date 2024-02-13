import {Injectable} from '@angular/core';
import {
  PriorAuthorizationSectionServiceService
} from "../prior-authorization-section/prior-authorization-section-service.service";

@Injectable({
  providedIn: 'root'
})
export class ParentFormServiceService {

  parentForm: Map<any, any>;
  finalJson: Map<any, any> = new Map<any, any>()

  constructor(private priorAuthorizationSectionServiceService: PriorAuthorizationSectionServiceService) {
  }

  getFormMetaData() {
    return this.priorAuthorizationSectionServiceService.getFormMetaData()
  }

  getFormMetaDataWithSections() {
    let map = new Map<any, any>();
    map.set(this.priorAuthorizationSectionServiceService.sectionName,
      this.priorAuthorizationSectionServiceService.getFormMetaData());
    return map
  }

  getFinalJson() {
    this.validateForm();

    this.parentForm = new Map([...Array.from(this.priorAuthorizationSectionServiceService.getFormData().entries())]);
    this.parentForm.forEach((value, key) => {
      this.finalJson.set(key, value.value)
    })
    console.log('this.parentForm', this.finalJson)
  }

  private validateForm() {
    this.flattenArray(this.getFormMetaData()).filter(x => x.display).forEach(x => {
      console.log(x.name, " is ", x.formControl.valid)
    })
  }

  populateData() {
    this.priorAuthorizationSectionServiceService.populateData();
  }

  disableForm() {
    this.flattenArray(this.getFormMetaData()).forEach(x => {
      x.formControl.disable();
    })
  }
  enableForm() {
    this.flattenArray(this.getFormMetaData()).forEach(x => {
      x.formControl.enable();
    })
  }

  flattenArray(arr: any[]): any[] {
    let result: any[] = [];

    arr.forEach(item => {
      if (Array.isArray(item)) {
        result = result.concat(this.flattenArray(item));
      } else {
        result.push(item);
      }
    });

    return result;
  }
}


