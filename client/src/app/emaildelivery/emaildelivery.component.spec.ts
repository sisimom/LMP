import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmaildeliveryComponent } from './emaildelivery.component';

describe('EmaildeliveryComponent', () => {
  let component: EmaildeliveryComponent;
  let fixture: ComponentFixture<EmaildeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmaildeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmaildeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
