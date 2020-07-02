import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PSRanDifficultyListFormComponent } from './p-s-ran-difficulty-list-form.component';

describe('PSRanDifficultyListFormComponent', () => {
  let component: PSRanDifficultyListFormComponent;
  let fixture: ComponentFixture<PSRanDifficultyListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PSRanDifficultyListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PSRanDifficultyListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
