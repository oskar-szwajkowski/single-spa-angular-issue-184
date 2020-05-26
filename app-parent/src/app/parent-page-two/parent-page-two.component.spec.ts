import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentPageTwoComponent } from './parent-page-two.component';

describe('ParentPageTwoComponent', () => {
  let component: ParentPageTwoComponent;
  let fixture: ComponentFixture<ParentPageTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentPageTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
