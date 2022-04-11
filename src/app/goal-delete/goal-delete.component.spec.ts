import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalDeleteComponent } from './goal-delete.component';

describe('GoalDeleteComponent', () => {
  let component: GoalDeleteComponent;
  let fixture: ComponentFixture<GoalDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
