import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';


@Component({
  selector: 'app-cant-slider',
  templateUrl: './cant-slider.component.html',
  styleUrls: ['./cant-slider.component.scss']
})
export class CantSliderComponent implements OnInit {
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1) {
      return value;
    }

    return value;
  }
  @Input() maxSlider: number = 0;
  
  @Output() cantidad = new EventEmitter<number>();

  cambio(event: MatSliderChange) {
    this.cantidad.emit(event.value);
    // console.log(event.value);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
