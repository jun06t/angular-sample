/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Content1Component } from './content1.component';

describe('Content1Component', () => {
  let component: Content1Component;
  let fixture: ComponentFixture<Content1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Content1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Content1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
