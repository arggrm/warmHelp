import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitsRowComponent } from './visits-row.component';

describe('VisitsRowComponent', () => {
  let component: VisitsRowComponent;
  let fixture: ComponentFixture<VisitsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitsRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
