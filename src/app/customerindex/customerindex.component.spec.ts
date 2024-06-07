import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerindexComponent } from './customerindex.component';

describe('CustomerindexComponent', () => {
  let component: CustomerindexComponent;
  let fixture: ComponentFixture<CustomerindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerindexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomerindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
