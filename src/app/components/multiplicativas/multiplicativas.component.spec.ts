import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicativasComponent } from './multiplicativas.component';

describe('MultiplicativasComponent', () => {
  let component: MultiplicativasComponent;
  let fixture: ComponentFixture<MultiplicativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplicativasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
