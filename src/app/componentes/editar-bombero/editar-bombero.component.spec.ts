import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarBomberoComponent } from './editar-bombero.component';

describe('EditarBomberoComponent', () => {
  let component: EditarBomberoComponent;
  let fixture: ComponentFixture<EditarBomberoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarBomberoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarBomberoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
