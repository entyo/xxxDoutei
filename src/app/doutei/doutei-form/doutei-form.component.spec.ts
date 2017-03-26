/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DouteiFormComponent } from './doutei-form.component';

describe('DouteiFormComponent', () => {
  let component: DouteiFormComponent;
  let fixture: ComponentFixture<DouteiFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DouteiFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DouteiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
