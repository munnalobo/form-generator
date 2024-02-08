import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularReactiveFormGeneratorComponent } from './angular-reactive-form-generator.component';

describe('AngularReactiveFormGeneratorComponent', () => {
  let component: AngularReactiveFormGeneratorComponent;
  let fixture: ComponentFixture<AngularReactiveFormGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularReactiveFormGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularReactiveFormGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
