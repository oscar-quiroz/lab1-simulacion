import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaKsComponent } from './prueba-ks.component';

describe('PruebaKsComponent', () => {
  let component: PruebaKsComponent;
  let fixture: ComponentFixture<PruebaKsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaKsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaKsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
