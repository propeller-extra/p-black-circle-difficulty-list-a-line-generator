import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LineGeneratorComponent } from './line-generator.component';

describe('LineGeneratorFormComponent', () => {
  let component: LineGeneratorComponent;
  let fixture: ComponentFixture<LineGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LineGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
