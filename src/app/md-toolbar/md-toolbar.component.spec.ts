import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdToolbarComponent } from './md-toolbar.component';

describe('MdToolbarComponent', () => {
  let component: MdToolbarComponent;
  let fixture: ComponentFixture<MdToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
