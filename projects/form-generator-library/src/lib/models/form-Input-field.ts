import {ComponentType} from "./component-type";
import {BaseFormField} from "./base-form-field";

export class FormInputField extends BaseFormField {
  type: ComponentType = ComponentType.TEXT_INPUT;
  label: string
  textInputType: TextInputType = TextInputType.TEXT;

  get hint(): string {
    return this.textInputType == TextInputType.PHONE_NUMBER
           ? 'Example: (###) ###-####'
           : this.textInputType == TextInputType.EMAIL
             ? 'Example: leo.lobo@yahoo.com'
             : this.textInputType == TextInputType.URL
               ? 'Example: WWW.google.com'
               : this.textInputType == TextInputType.TEXT
                 ? 'Some Text Input'
                 : 'Some Text Input';
  }

  setLabel(value: string) {
    this.label = value;
    return this;
  }
}

export class PhoneNumberFormInputField extends FormInputField {
  override textInputType: TextInputType = TextInputType.PHONE_NUMBER;
}
export class UrlFormInputField extends FormInputField {
  override textInputType: TextInputType = TextInputType.URL;
}
export class EmailFormInputField extends FormInputField {
  override textInputType: TextInputType = TextInputType.EMAIL;
}

export enum TextInputType {
  PHONE_NUMBER,
  EMAIL,
  URL,
  TEXT
}
