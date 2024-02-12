import {BaseFormField} from "./base-form-field";
import {ColDef} from "ag-grid-community";
import {ComponentType} from "./component-type";

export class FormAgGrid extends BaseFormField {
  type: ComponentType = ComponentType.AG_GRID;
  colDefs: ColDef[];

  setColDefs(value: ColDef<unknown>[]) {
    this.colDefs = value;
    return this;
  }
}
