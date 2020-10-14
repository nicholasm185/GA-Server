import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentFormPageComponent } from './consent-form-page.component';

describe('ConsentFormPageComponent', () => {
  let component: ConsentFormPageComponent;
  let fixture: ComponentFixture<ConsentFormPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentFormPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
