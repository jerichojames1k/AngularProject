import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttchildComponent } from './httchild.component';

describe('HttchildComponent', () => {
  let component: HttchildComponent;
  let fixture: ComponentFixture<HttchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
