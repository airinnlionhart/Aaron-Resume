import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplePlaygroundComponent } from './sample-playground.component';

describe('SamplePlaygroundComponent', () => {
  let component: SamplePlaygroundComponent;
  let fixture: ComponentFixture<SamplePlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamplePlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamplePlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
