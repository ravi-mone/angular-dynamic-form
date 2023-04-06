import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.css'],
})
export class TextFieldComponent {
  @Input() label!: string;
  @Input() controlName!: string;
  @Input() formGroup!: FormGroup;
}
