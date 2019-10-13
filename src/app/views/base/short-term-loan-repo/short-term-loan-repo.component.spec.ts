import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortTermLoanRepoComponent } from '../short-term-loan-repo.component';

describe('ShortTermLoanRepoComponent', () => {
  let component: ShortTermLoanRepoComponent;
  let fixture: ComponentFixture<ShortTermLoanRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortTermLoanRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortTermLoanRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
