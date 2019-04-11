import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPQRSComponent } from './consulta-pqrs.component';

describe('ConsultaPQRSComponent', () => {
  let component: ConsultaPQRSComponent;
  let fixture: ComponentFixture<ConsultaPQRSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaPQRSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPQRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
