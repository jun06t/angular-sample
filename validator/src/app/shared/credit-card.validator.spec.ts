/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

import { CreditCardValidator } from './credit-card.validator';


@Component({
  template: `
<form [formGroup]="fg">
  <input type="text" formControlName="card">
</form>
`
})
class TestComponent implements OnInit {
  public fg: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.fg = this.fb.group({
      'card': ['', CreditCardValidator.luhn],
    });
  }
}

describe('Credit card validators', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let card: AbstractControl;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent
      ],
      imports: [
        ReactiveFormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    card = component.fg.controls['card'];
  });

  it('should be form invalid when empty', () => {
    expect(component.fg.valid).toBeFalsy();
  });

  it('should be card field invalid when empty', () => {
    expect(card.valid).toBeFalsy();
  });

  it('should be errors field invalid when empty', () => {
    expect(card.hasError('luhn')).toBeTruthy();
  });

  it('should be errors field invalid when number is short', () => {
    card.setValue('42424242');

    expect(card.hasError('luhn')).toBeTruthy();
  });

  it('should be errors field invalid when number is invalid', () => {
    card.setValue('4242424242424241');

    expect(card.hasError('luhn')).toBeTruthy();
  });

  it('should be valid', () => {
    card.setValue('4242424242424242');

    expect(card.valid).toBeTruthy();
  });
});
