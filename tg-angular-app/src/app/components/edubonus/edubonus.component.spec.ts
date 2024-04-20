import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdubonusComponent } from './edubonus.component';

describe('EdubonusComponent', () => {
  let component: EdubonusComponent;
  let fixture: ComponentFixture<EdubonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdubonusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdubonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
