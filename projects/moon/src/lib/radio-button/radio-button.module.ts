import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonComponent } from './radio-button.component';
import { LabelModule } from '../label/label.module';


@NgModule({
  declarations: [RadioButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LabelModule
  ],
  exports: [RadioButtonComponent]
})
export class RadioButtonModule { }
