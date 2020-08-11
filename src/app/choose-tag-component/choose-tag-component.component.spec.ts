import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTagComponentComponent } from './choose-tag-component.component';

describe('ChooseTagComponentComponent', () => {
  let component: ChooseTagComponentComponent;
  let fixture: ComponentFixture<ChooseTagComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseTagComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseTagComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
