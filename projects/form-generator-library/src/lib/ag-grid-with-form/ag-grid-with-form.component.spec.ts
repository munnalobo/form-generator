import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridWithFormComponent } from './ag-grid-with-form.component';

describe('AgGridWithFormComponent', () => {
  let component: AgGridWithFormComponent;
  let fixture: ComponentFixture<AgGridWithFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgGridWithFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgGridWithFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
