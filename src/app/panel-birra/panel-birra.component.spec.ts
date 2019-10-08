import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelBirraComponent } from './panel-birra.component';

describe('PanelBirraComponent', () => {
  let component: PanelBirraComponent;
  let fixture: ComponentFixture<PanelBirraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelBirraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelBirraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
