import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mn-radio',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonComponent),
      multi: true
    }
  ]
})
export class RadioButtonComponent implements ControlValueAccessor, OnInit {
  @Input() name: string;
  @Input() value: string;
  @Input() label: string;
  @Input() id: string;
  @Input() disabled = false;
  @Output() focus = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Output() change = new EventEmitter();
  selectedValue: string;
  active = false;
  propagateChange = (_: any) => {};

  constructor() { }

  ngOnInit(): void {
  }

  writeValue(value: string) {
    if (value) this.selectedValue = value;
  }

  registerOnChange(fn: (_: any) => {}) {
    this.propagateChange = fn;
  }

  registerOnTouched() {

  }

  onChange(event: Event) {
    this.active = this.value === this.selectedValue;
    this.change.emit(this.selectedValue);
  }

  onMouseEnter(event: Event & { target: HTMLElement }) {
    event.target.classList.add('hover');
  }

  onMouseLeave(event: Event & { target: HTMLElement }) {
    event.target.classList.remove('hover');
  }

  onFocus(event: Event) {
    this.focus.emit(event);
  }

  onBlur(event: Event) {
    this.blur.emit(event);
  }
}
