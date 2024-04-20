import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandompersonComponent } from './randomperson.component';

describe('RandompersonComponent', () => {
  let component: RandompersonComponent;
  let fixture: ComponentFixture<RandompersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandompersonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandompersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
