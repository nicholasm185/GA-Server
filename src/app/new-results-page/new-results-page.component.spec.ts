import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResultsPageComponent } from './new-results-page.component';

describe('NewResultsPageComponent', () => {
  let component: NewResultsPageComponent;
  let fixture: ComponentFixture<NewResultsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewResultsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
