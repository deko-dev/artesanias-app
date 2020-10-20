import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPefilComponent } from './ver-pefil.component';

describe('VerPefilComponent', () => {
  let component: VerPefilComponent;
  let fixture: ComponentFixture<VerPefilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerPefilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerPefilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
