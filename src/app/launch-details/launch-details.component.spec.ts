import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  ApolloTestingModule,
} from 'apollo-angular/testing';

import { LaunchDetailsComponent } from './launch-details.component';

describe('LaunchDetailsComponent', () => {
  let component: LaunchDetailsComponent;
  let fixture: ComponentFixture<LaunchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ LaunchDetailsComponent ],
      imports: [ApolloTestingModule,RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
