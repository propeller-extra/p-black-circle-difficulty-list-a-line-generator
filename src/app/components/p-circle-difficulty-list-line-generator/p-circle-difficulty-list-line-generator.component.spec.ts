import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PCircleDifficultyListLineGeneratorComponent } from './p-circle-difficulty-list-line-generator.component';

describe('PCircleDifficultyListLineGeneratorComponent', () => {
  let component: PCircleDifficultyListLineGeneratorComponent;
  let fixture: ComponentFixture<PCircleDifficultyListLineGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PCircleDifficultyListLineGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PCircleDifficultyListLineGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
