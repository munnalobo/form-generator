export class RadioButtonOption {
  displayName: string;
  value: boolean | string;

  public constructor(displayName: string, value: boolean | string) {
    this.displayName = displayName;
    this.value = value;
  }
}
