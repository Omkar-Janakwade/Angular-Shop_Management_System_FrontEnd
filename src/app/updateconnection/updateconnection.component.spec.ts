import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateconnectionComponent } from './updateconnection.component';

describe('UpdateconnectionComponent', () => {
  let component: UpdateconnectionComponent;
  let fixture: ComponentFixture<UpdateconnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateconnectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateconnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
