import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mn-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupComponent),
      multi: true
    }
  ]
})
export class RadioGroupComponent implements ControlValueAccessor, OnInit {
  @Input() label: string;
  selectedValue: string;
  propagateChange = (_: any) => {};

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(value: string) {
    if (value) {
      this.selectedValue = value;
    }
  }

  registerOnChange(fn: (_: any) => {}) {
    this.propagateChange = fn;
  }

  registerOnTouched() {

  }

  onChange(value: string) {
    console.log(value)
  }

}
