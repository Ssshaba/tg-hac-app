import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduadminaddComponent } from './eduadminadd.component';

describe('EduadminaddComponent', () => {
  let component: EduadminaddComponent;
  let fixture: ComponentFixture<EduadminaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EduadminaddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EduadminaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
