import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaMediasComponent } from './prueba-medias.component';

describe('PruebaMediasComponent', () => {
  let component: PruebaMediasComponent;
  let fixture: ComponentFixture<PruebaMediasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaMediasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaMediasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
