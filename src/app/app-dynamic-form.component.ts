import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFieldConfig } from './formfieldconfig.interface';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './app-dynamic-form.component.html',
})
export class UserRegistrationComponent {
  @Input('userRegistrationForm') userRegistrationForm!: FormGroup;
  @Input('fieldsConfig') fieldsConfig!: FormFieldConfig[];
  @Output() onFormSubmit = new EventEmitter<string>();
  onSubmit() {
    this.onFormSubmit.emit();
  }
}
