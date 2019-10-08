import { Component, OnInit, Input } from '@angular/core';

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
      return value ;
    }

    return value;
  }
  @Input() maxSlider: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
