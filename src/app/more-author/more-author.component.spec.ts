import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAuthorComponent } from './more-author.component';

describe('MoreAuthorComponent', () => {
  let component: MoreAuthorComponent;
  let fixture: ComponentFixture<MoreAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
