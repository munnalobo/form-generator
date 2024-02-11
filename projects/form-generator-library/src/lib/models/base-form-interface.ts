export interface BaseFormInterface {
  populateData(): void;

  getFormData(): Map<any, any>;

  getFormMetaData(): any;
}
