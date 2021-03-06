import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StepItemListComponent } from './step-item-list.component';

describe('StepItemListComponent', () => {
  let component: StepItemListComponent;
  let fixture: ComponentFixture<StepItemListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StepItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
