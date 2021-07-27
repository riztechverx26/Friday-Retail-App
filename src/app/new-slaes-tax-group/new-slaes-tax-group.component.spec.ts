import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSlaesTaxGroupComponent } from './new-slaes-tax-group.component';

describe('NewSlaesTaxGroupComponent', () => {
  let component: NewSlaesTaxGroupComponent;
  let fixture: ComponentFixture<NewSlaesTaxGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSlaesTaxGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSlaesTaxGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
