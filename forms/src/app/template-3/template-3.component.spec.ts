/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Template3Component } from './template-3.component';

describe('Template3Component', () => {
  let component: Template3Component;
  let fixture: ComponentFixture<Template3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Template3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Template3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
