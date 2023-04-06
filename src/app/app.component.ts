import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilderService } from './form-builder.service';
import { FormFieldConfig } from './formfieldconfig.interface';
import { environment } from 'src/environments/environment';
import { fieldsConfig } from './fields.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userRegistrationForm!: FormGroup;
  fieldsConfig: FormFieldConfig[] =  fieldsConfig
  constructor(private formBuilderService: FormBuilderService) {}

  ngOnInit(): void {
    this.userRegistrationForm = this.formBuilderService.buildForm(this.fieldsConfig);
    console.log(this.userRegistrationForm)
    console.log('MY ENVIRONMENT : ', environment.stage);
  } 

  onSubmit(): void {
    if (this.userRegistrationForm.valid) {
      console.log('Form submitted', this.userRegistrationForm.value);
    } else {
      console.log('Form invalid');
    }
  }
}
