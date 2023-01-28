import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCatalogueComponent } from './update-catalogue.component';

describe('UpdateCatalogueComponent', () => {
  let component: UpdateCatalogueComponent;
  let fixture: ComponentFixture<UpdateCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCatalogueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
