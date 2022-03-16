import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesProductsDetailComponent } from './invoices-products-detail.component';

describe('InvoicesProductsDetailComponent', () => {
  let component: InvoicesProductsDetailComponent;
  let fixture: ComponentFixture<InvoicesProductsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvoicesProductsDetailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesProductsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
