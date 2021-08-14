import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pruebachi2Component } from './pruebachi2.component';

describe('Pruebachi2Component', () => {
  let component: Pruebachi2Component;
  let fixture: ComponentFixture<Pruebachi2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pruebachi2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pruebachi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
