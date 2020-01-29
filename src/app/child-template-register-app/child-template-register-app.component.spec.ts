import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTemplateRegisterAppComponent } from './child-template-register-app.component';

describe('ChildTemplateRegisterAppComponent', () => {
  let component: ChildTemplateRegisterAppComponent;
  let fixture: ComponentFixture<ChildTemplateRegisterAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildTemplateRegisterAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildTemplateRegisterAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
