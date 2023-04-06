import { Validators } from '@angular/forms';
import { FormFieldConfig } from './formfieldconfig.interface';
import { passwordMatchValidator } from './validators/password-match.validator';

const emailValidator = Validators.pattern(
  '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$'
);
const passwordValidator = Validators.pattern(
  '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[A-Za-zd!@#$%^&*()]{8,}'
);
const numberValidator = Validators.pattern('^[0-9]*$');

export const fieldsConfig: FormFieldConfig[] = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    value: '',

    // validations: [
    //   {
    //     name: 'required',
    //     validator: Validators.required,
    //     message: 'Username is required',
    //   },
    //   {
    //     name: 'minlength',
    //     validator: Validators.minLength(3),
    //     message: 'Username must be at least 3 characters long',
    //   },
    // ],
    wrapperClass: 'w-full md:w-1/2', // Add your custom classes here
    validators: [Validators.required, Validators.minLength(3)],
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    validators: [Validators.required, emailValidator],
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
    validators: [
      Validators.required,
      Validators.minLength(8),
      passwordValidator,
    ],
  },
  {
    name: 'confirmPassword',
    label: 'Confirm Password',
    type: 'password',
    validators: [Validators.required, passwordMatchValidator('password')],
  },
  {
    name: 'dateOfBirth',
    label: 'Date of Birth',
    type: 'date',
    validators: [Validators.required],
  },
  {
    name: 'age',
    label: 'Age',
    type: 'number',
    validators: [
      Validators.required,
      Validators.min(18),
      Validators.max(100),
      numberValidator,
    ],
  },
  {
    name: 'gender',
    label: 'Gender',
    type: 'radio',
    validators: [Validators.required],
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' },
    ],
  },
  {
    name: 'country',
    label: 'Country',
    type: 'select',
    validators: [Validators.required],
    options: [
      { value: 'usa', label: 'USA' },
      { value: 'canada', label: 'Canada' },
      { value: 'mexico', label: 'Mexico' },
    ],
  },
  {
    name: 'description',
    label: 'Description',
    type: 'textarea',
    validators: [Validators.required, Validators.maxLength(500)],
  },
  {
    name: 'acceptTerms',
    label: '',
    type: 'checkbox',
    validators: [Validators.requiredTrue],
    checkboxLabel: 'I accept the terms and conditions',
  },
];
