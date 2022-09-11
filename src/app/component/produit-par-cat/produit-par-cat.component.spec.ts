import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitParCatComponent } from './produit-par-cat.component';

describe('ProduitParCatComponent', () => {
  let component: ProduitParCatComponent;
  let fixture: ComponentFixture<ProduitParCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitParCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitParCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
