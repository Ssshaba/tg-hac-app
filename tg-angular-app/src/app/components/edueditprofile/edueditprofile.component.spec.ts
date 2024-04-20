import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdueditprofileComponent } from './edueditprofile.component';

describe('EdueditprofileComponent', () => {
  let component: EdueditprofileComponent;
  let fixture: ComponentFixture<EdueditprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdueditprofileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdueditprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
