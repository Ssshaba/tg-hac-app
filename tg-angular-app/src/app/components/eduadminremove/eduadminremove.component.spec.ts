import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduadminremoveComponent } from './eduadminremove.component';

describe('EduadminremoveComponent', () => {
  let component: EduadminremoveComponent;
  let fixture: ComponentFixture<EduadminremoveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EduadminremoveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EduadminremoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
