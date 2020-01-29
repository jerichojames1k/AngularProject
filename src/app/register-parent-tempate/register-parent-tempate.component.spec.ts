import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterParentTempateComponent } from './register-parent-tempate.component';

describe('RegisterParentTempateComponent', () => {
  let component: RegisterParentTempateComponent;
  let fixture: ComponentFixture<RegisterParentTempateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterParentTempateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterParentTempateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
