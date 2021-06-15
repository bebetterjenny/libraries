import { NgModule } from '@angular/core';
import { MoonComponent } from './moon.component';
import { RadioButtonModule } from './radio-button/radio-button.module';

const modules = [
  RadioButtonModule
];

@NgModule({
  declarations: [MoonComponent],
  imports: [
  ],
  exports: [
    MoonComponent,
    ...modules
  ]
})
export class MoonModule { }
