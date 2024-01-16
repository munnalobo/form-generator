import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGeneratorLibraryComponent } from './form-generator-library.component';

describe('FormGeneratorLibraryComponent', () => {
  let component: FormGeneratorLibraryComponent;
  let fixture: ComponentFixture<FormGeneratorLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGeneratorLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGeneratorLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
