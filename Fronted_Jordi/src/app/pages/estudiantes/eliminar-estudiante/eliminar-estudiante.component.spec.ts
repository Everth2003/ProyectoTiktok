import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEstudianteComponent } from './eliminar-estudiante.component';

describe('EliminarEstudianteComponent', () => {
  let component: EliminarEstudianteComponent;
  let fixture: ComponentFixture<EliminarEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarEstudianteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
