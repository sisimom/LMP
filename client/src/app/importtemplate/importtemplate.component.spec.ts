import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImporttemplateComponent } from './importtemplate.component';

describe('ImporttemplateComponent', () => {
  let component: ImporttemplateComponent;
  let fixture: ComponentFixture<ImporttemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImporttemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImporttemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
