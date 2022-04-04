import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstManageComponent } from './inst-manage.component';

describe('InstManageComponent', () => {
  let component: InstManageComponent;
  let fixture: ComponentFixture<InstManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
