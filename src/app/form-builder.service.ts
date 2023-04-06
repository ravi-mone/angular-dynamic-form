import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { FormFieldConfig } from './formfieldconfig.interface';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  constructor(private fb: FormBuilder) {}

  buildForm(
    fieldsConfig: FormFieldConfig[],
    customValidators?: ValidatorFn | ValidatorFn[] | null
  ): FormGroup {
    const formGroup: { [key: string]: FormControl } = {};

    fieldsConfig.forEach((field) => {
      formGroup[field.name] = new FormControl('', field?.validators);
    });

    const form = this.fb.group(formGroup);

    if (customValidators) {
      form.setValidators(customValidators);
    }

    return form;
  }
}
