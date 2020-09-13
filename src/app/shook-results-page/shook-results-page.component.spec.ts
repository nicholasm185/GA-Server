import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShookResultsPageComponent } from './shook-results-page.component';

describe('ShookResultsPageComponent', () => {
  let component: ShookResultsPageComponent;
  let fixture: ComponentFixture<ShookResultsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShookResultsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShookResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
