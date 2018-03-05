import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameinputComponent } from './nameinput.component';

describe('NameinputComponent', () => {
  let component: NameinputComponent;
  let fixture: ComponentFixture<NameinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
