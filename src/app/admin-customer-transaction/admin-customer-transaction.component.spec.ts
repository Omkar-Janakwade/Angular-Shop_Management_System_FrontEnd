import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustomerTransactionComponent } from './admin-customer-transaction.component';

describe('AdminCustomerTransactionComponent', () => {
  let component: AdminCustomerTransactionComponent;
  let fixture: ComponentFixture<AdminCustomerTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCustomerTransactionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminCustomerTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
