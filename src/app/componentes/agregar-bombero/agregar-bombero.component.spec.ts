import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarBomberoComponent } from './agregar-bombero.component';

describe('AgregarBomberoComponent', () => {
  let component: AgregarBomberoComponent;
  let fixture: ComponentFixture<AgregarBomberoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarBomberoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarBomberoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
