/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Content2Component } from './content2.component';

describe('Content2Component', () => {
  let component: Content2Component;
  let fixture: ComponentFixture<Content2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Content2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Content2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
