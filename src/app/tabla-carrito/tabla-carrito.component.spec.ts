import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCarritoComponent } from './tabla-carrito.component';

describe('TablaCarritoComponent', () => {
  let component: TablaCarritoComponent;
  let fixture: ComponentFixture<TablaCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
