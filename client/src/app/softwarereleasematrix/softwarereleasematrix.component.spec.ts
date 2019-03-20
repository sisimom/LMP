import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwarereleasematrixComponent } from './softwarereleasematrix.component';

describe('SoftwarereleasematrixComponent', () => {
  let component: SoftwarereleasematrixComponent;
  let fixture: ComponentFixture<SoftwarereleasematrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftwarereleasematrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftwarereleasematrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
