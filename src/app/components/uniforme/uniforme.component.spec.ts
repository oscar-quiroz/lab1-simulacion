import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniformeComponent } from './uniforme.component';

describe('UniformeComponent', () => {
  let component: UniformeComponent;
  let fixture: ComponentFixture<UniformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniformeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
