import { ValidatorFn } from '@angular/forms';

export interface FormFieldConfig {
  name: string;
  label: string;
  type:
    | 'text'
    | 'email'
    | 'password'
    | 'select'
    | 'checkbox'
    | 'radio'
    | 'textarea'
    | 'date'
    | 'number'
    | 'file';
  value?: string;
  validators?: ValidatorFn[];
  validations?: any;
  wrapperClass?: string;
  options?: { value: string; label: string }[]; // Add options for select and radio controls
  checkboxLabel?: string; // Add a label for checkbox controls
}
