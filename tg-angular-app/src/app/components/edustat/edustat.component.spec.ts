import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdustatComponent } from './edustat.component';

describe('EdustatComponent', () => {
  let component: EdustatComponent;
  let fixture: ComponentFixture<EdustatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdustatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdustatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
