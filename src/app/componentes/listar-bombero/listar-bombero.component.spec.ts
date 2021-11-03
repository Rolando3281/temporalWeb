import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBomberoComponent } from './listar-bombero.component';

describe('ListarBomberoComponent', () => {
  let component: ListarBomberoComponent;
  let fixture: ComponentFixture<ListarBomberoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarBomberoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarBomberoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
