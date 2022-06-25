import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugInfoComponent } from './bug-info.component';

describe('BugInfoComponent', () => {
  let component: BugInfoComponent;
  let fixture: ComponentFixture<BugInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BugInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
