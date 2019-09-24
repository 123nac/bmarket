import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantSliderComponent } from './cant-slider.component';

describe('CantSliderComponent', () => {
  let component: CantSliderComponent;
  let fixture: ComponentFixture<CantSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
