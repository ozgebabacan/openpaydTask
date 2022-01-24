import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterModule} from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ApolloTestingModule } from 'apollo-angular/testing';
import { RelativeTimePipe } from '../core/helpers/pipes/relative-time/relative-time.pipe';
import { LaunchListComponent } from './launch-list.component';

describe('LaunchListComponent', () => {
  let component: LaunchListComponent;
  let fixture: ComponentFixture<LaunchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ LaunchListComponent, RelativeTimePipe ],
      imports: [ApolloTestingModule, RouterModule, StoreModule.forRoot({})]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
