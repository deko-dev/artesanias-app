import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductosComponent } from './all-productos.component';

describe('AllProductosComponent', () => {
  let component: AllProductosComponent;
  let fixture: ComponentFixture<AllProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
