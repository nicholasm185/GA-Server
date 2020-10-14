import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToInstructionsComponent } from './back-to-instructions.component';

describe('BackToInstructionsComponent', () => {
  let component: BackToInstructionsComponent;
  let fixture: ComponentFixture<BackToInstructionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackToInstructionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackToInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
