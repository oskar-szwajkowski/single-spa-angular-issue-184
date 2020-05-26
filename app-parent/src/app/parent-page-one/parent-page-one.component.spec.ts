import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentPageOneComponent } from './parent-page-one.component';

describe('ParentPageOneComponent', () => {
  let component: ParentPageOneComponent;
  let fixture: ComponentFixture<ParentPageOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentPageOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
