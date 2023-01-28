import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashComponent } from './cash.component';

describe('CashComponent', () => {
  let component: CashComponent;
  let fixture: ComponentFixture<CashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
