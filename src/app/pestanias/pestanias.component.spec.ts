import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PestaniasComponent } from './pestanias.component';

describe('PestaniasComponent', () => {
  let component: PestaniasComponent;
  let fixture: ComponentFixture<PestaniasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PestaniasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PestaniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
