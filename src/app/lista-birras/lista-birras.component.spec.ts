import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBirrasComponent } from './lista-birras.component';

describe('ListaBirrasComponent', () => {
  let component: ListaBirrasComponent;
  let fixture: ComponentFixture<ListaBirrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaBirrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaBirrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
