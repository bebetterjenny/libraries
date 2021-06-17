import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabelModule } from '../label/label.module';
import { RadioButtonComponent } from './radio-button.component';
import { RadioGroupComponent } from './radio-group.component';

@NgModule({
  declarations: [
    RadioButtonComponent,
    RadioGroupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LabelModule
  ],
  exports: [
    RadioButtonComponent,
    RadioGroupComponent
  ]
})
export class RadioButtonModule { }
