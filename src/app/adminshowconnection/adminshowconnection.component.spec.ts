import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminshowconnectionComponent } from './adminshowconnection.component';

describe('AdminshowconnectionComponent', () => {
  let component: AdminshowconnectionComponent;
  let fixture: ComponentFixture<AdminshowconnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminshowconnectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminshowconnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
