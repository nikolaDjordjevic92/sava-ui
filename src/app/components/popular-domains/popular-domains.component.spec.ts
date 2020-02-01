import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularDomainsComponent } from './popular-domains.component';

describe('PopularDomainsComponent', () => {
  let component: PopularDomainsComponent;
  let fixture: ComponentFixture<PopularDomainsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularDomainsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularDomainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
