import { Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

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
  @Input() name: string = '';
  @Input() value: string;
  @Input() label: string;
  @Input() id: string;
  @Input() disabled = false;
  @Output() onFocus = new EventEmitter();
  @Output() onBlur = new EventEmitter();
  @Output() onClick = new EventEmitter();
  @ViewChild('input') input: ElementRef;
  selectedValue: string;
  propagateChange = (_: any) => {};

  constructor(
    private renderer: Renderer2
  ) { }

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

  change(event: Event) {
    this.propagateChange(this.selectedValue);
    this.onClick.emit(this.selectedValue);
  }

  mouseEnter(event: Event & { target: HTMLElement }) {
    event.target.classList.add('hover');
  }

  mouseLeave(event: Event & { target: HTMLElement }) {
    event.target.classList.remove('hover');
  }

  focus(event: Event) {
    this.onFocus.emit(event);
  }

  blur(event: Event) {
    this.onBlur.emit(event);
  }

}
