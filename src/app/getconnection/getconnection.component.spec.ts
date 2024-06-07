import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetconnectionComponent } from './getconnection.component';

describe('GetconnectionComponent', () => {
  let component: GetconnectionComponent;
  let fixture: ComponentFixture<GetconnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetconnectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetconnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
