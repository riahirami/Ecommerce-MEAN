import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererproduitsComponent } from './gererproduits.component';

describe('GererproduitsComponent', () => {
  let component: GererproduitsComponent;
  let fixture: ComponentFixture<GererproduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GererproduitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GererproduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
