import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './app-dynamic-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextFieldComponent } from './custom-fields/text-field/text-field.component';

@NgModule({
  declarations: [
    AppComponent, 
    UserRegistrationComponent, TextFieldComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
