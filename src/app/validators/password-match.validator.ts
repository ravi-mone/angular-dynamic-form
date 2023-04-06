import { AbstractControl, ValidatorFn } from '@angular/forms';

export function passwordMatchValidator(matchToControlName: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const matchToControl = control.parent?.get(matchToControlName);

    if (!control.value || !matchToControl?.value || control.value === matchToControl.value) {
      return null;
    }

    return { passwordMismatch: true };
  };
}
