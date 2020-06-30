import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ALineGeneratorFormComponent } from './a-line-generator-form.component';

describe('ALineGeneratorFormComponent', () => {
  let component: ALineGeneratorFormComponent;
  let fixture: ComponentFixture<ALineGeneratorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ALineGeneratorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ALineGeneratorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
