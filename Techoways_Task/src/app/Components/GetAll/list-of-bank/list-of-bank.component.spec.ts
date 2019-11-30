import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfBankComponent } from './list-of-bank.component';

describe('ListOfBankComponent', () => {
  let component: ListOfBankComponent;
  let fixture: ComponentFixture<ListOfBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
