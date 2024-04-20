import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdumeetcollegueComponent } from './edumeetcollegue.component';

describe('EdumeetcollegueComponent', () => {
  let component: EdumeetcollegueComponent;
  let fixture: ComponentFixture<EdumeetcollegueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdumeetcollegueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdumeetcollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
