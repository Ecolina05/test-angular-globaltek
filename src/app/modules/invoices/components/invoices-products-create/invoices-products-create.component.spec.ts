import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesProductsCreateComponent } from './invoices-products-create.component';

describe('InvoicesProductsCreateComponent', () => {
  let component: InvoicesProductsCreateComponent;
  let fixture: ComponentFixture<InvoicesProductsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesProductsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesProductsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
