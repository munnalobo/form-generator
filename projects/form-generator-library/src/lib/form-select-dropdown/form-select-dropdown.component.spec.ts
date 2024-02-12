import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSelectDropdownComponent } from './form-select-dropdown.component';

describe('FormSelectDropdownComponent', () => {
  let component: FormSelectDropdownComponent;
  let fixture: ComponentFixture<FormSelectDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSelectDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormSelectDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
