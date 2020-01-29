import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttparentComponent } from './httparent.component';

describe('HttparentComponent', () => {
  let component: HttparentComponent;
  let fixture: ComponentFixture<HttparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
