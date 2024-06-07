import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminshoworderComponent } from './adminshoworder.component';

describe('AdminshoworderComponent', () => {
  let component: AdminshoworderComponent;
  let fixture: ComponentFixture<AdminshoworderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminshoworderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminshoworderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
