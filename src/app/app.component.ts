import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'libraries';
  formGroup = new FormGroup({
    gender: new FormControl('male')
  });
  selectedValue: any;

  constructor() { }

  radioSelect(value: string) {
    console.log(value);
    console.log(this.formGroup.value.gender)
    console.log(this.selectedValue);
  }
}
