import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerercommandesComponent } from './gerercommandes.component';

describe('GerercommandesComponent', () => {
  let component: GerercommandesComponent;
  let fixture: ComponentFixture<GerercommandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerercommandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GerercommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
