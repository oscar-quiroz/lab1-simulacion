import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaVarianzaComponent } from './prueba-varianza.component';

describe('PruebaVarianzaComponent', () => {
  let component: PruebaVarianzaComponent;
  let fixture: ComponentFixture<PruebaVarianzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaVarianzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaVarianzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
