import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PCircleDifficultyListFormComponent } from './p-circle-difficulty-list-form.component';

describe('PCircleDifficultyListFormComponent', () => {
  let component: PCircleDifficultyListFormComponent;
  let fixture: ComponentFixture<PCircleDifficultyListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PCircleDifficultyListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PCircleDifficultyListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
