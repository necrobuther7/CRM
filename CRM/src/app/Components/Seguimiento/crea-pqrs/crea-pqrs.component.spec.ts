import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaPQRSComponent } from './crea-pqrs.component';

describe('CreaPQRSComponent', () => {
  let component: CreaPQRSComponent;
  let fixture: ComponentFixture<CreaPQRSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaPQRSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaPQRSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
