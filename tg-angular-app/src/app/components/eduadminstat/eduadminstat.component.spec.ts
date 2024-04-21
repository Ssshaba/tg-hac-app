import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduadminstatComponent } from './eduadminstat.component';

describe('EduadminstatComponent', () => {
  let component: EduadminstatComponent;
  let fixture: ComponentFixture<EduadminstatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EduadminstatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EduadminstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
