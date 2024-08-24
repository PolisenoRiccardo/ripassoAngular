import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaoloComponent } from './paolo.component';

describe('PaoloComponent', () => {
  let component: PaoloComponent;
  let fixture: ComponentFixture<PaoloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaoloComponent]
    });
    fixture = TestBed.createComponent(PaoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
