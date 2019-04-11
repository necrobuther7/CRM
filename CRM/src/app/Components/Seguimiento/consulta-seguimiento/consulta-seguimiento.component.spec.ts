import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaSeguimientoComponent } from './consulta-seguimiento.component';

describe('ConsultaSeguimientoComponent', () => {
  let component: ConsultaSeguimientoComponent;
  let fixture: ComponentFixture<ConsultaSeguimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaSeguimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaSeguimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
