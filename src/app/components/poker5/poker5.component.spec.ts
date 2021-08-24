import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Poker5Component } from './poker5.component';

describe('Poker5Component', () => {
  let component: Poker5Component;
  let fixture: ComponentFixture<Poker5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Poker5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Poker5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
