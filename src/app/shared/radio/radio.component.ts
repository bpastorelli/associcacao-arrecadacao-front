import { Component, OnInit, Input, forwardRef } from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { RadioOption } from './radio.model';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=> RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[]

  value: any

  onchange: any

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any){
    this.value = value
    this.onchange(this.value)
  }

  writeValue(obj: any): void{
    this.value = obj
  }

  registerOnChange(fn: any): void{
    this.onchange = fn
  }

  registerOnTouched(): void{ }

  setDisabledState?(isDisabled: boolean): void{ }

}
