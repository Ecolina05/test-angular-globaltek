import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesProductComponent } from './invoices-product.component';

describe('InvoicesProductComponent', () => {
  let component: InvoicesProductComponent;
  let fixture: ComponentFixture<InvoicesProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
