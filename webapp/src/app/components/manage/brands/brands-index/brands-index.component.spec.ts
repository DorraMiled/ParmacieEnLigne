import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsIndexComponent } from './brands-index.component';

describe('BrandsIndexComponent', () => {
  let component: BrandsIndexComponent;
  let fixture: ComponentFixture<BrandsIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandsIndexComponent]
    });
    fixture = TestBed.createComponent(BrandsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
