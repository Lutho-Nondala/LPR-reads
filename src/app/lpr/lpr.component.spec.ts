import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LprComponent } from './lpr.component';

describe('LprComponent', () => {
  let component: LprComponent;
  let fixture: ComponentFixture<LprComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LprComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
