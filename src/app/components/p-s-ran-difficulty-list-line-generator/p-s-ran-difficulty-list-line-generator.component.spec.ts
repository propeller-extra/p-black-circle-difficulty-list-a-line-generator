import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PSRanDifficultyListLineGeneratorComponent } from './p-s-ran-difficulty-list-line-generator.component';

describe('PSRanDifficultyListLineGeneratorComponent', () => {
  let component: PSRanDifficultyListLineGeneratorComponent;
  let fixture: ComponentFixture<PSRanDifficultyListLineGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PSRanDifficultyListLineGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PSRanDifficultyListLineGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
