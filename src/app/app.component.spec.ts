import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegistrationComponent } from './app-dynamic-form.component';
import { FormBuilderService } from './form-builder.service';
import { FormFieldConfig } from './formfieldconfig.interface';

describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserRegistrationComponent],
      imports: [ReactiveFormsModule],
      providers: [FormBuilderService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have form initialized', () => {
    expect(component.userRegistrationForm).toBeDefined();
  });

  it('should have form controls based on fieldsConfig', () => {
    const fieldsConfig: FormFieldConfig[] = component.fieldsConfig;

    fieldsConfig.forEach(field => {
      expect(component.userRegistrationForm.contains(field.name)).toBe(true);
    });
  });

  it('should not submit the form if invalid', () => {
    spyOn(console, 'log');
    component.onSubmit();
    expect(console.log).toHaveBeenCalledWith('Form invalid');
  });

  it('should have a required Name field with minimum length 3', () => {
    const nameControl = component.userRegistrationForm.controls.name;
  
    nameControl.setValue('');
    expect(nameControl.valid).toBeFalsy();
  
    nameControl.setValue('A');
    expect(nameControl.valid).toBeFalsy();
  
    nameControl.setValue('Ab');
    expect(nameControl.valid).toBeFalsy();
  
    nameControl.setValue('Abc');
    expect(nameControl.valid).toBeTruthy();
  });
  
  it('should have a required Email field with correct email pattern', () => {
    const emailControl = component.userRegistrationForm.controls.email;
  
    emailControl.setValue('');
    expect(emailControl.valid).toBeFalsy();
  
    emailControl.setValue('test@example');
    expect(emailControl.valid).toBeFalsy();
  
    emailControl.setValue('test@example.');
    expect(emailControl.valid).toBeFalsy();
  
    emailControl.setValue('test@example.com');
    expect(emailControl.valid).toBeTruthy();
  });
  
  it('should have a required Password field with minimum length 8 and specific pattern', () => {
    const passwordControl = component.userRegistrationForm.controls?.['password'];
  
    passwordControl.setValue('');
    expect(passwordControl.valid).toBeFalsy();
  
    passwordControl.setValue('short');
    expect(passwordControl.valid).toBeFalsy();
  
    passwordControl.setValue('onlylowercase');
    expect(passwordControl.valid).toBeFalsy();
  
    passwordControl.setValue('WithUppercase');
    expect(passwordControl.valid).toBeFalsy();
  
    passwordControl.setValue('WithNumber1');
    expect(passwordControl.valid).toBeFalsy();
  });
  
});
