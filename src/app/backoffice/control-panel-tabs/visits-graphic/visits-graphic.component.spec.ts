import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitsGraphicComponent } from './visits-graphic.component';

describe('VisitsGraphicComponent', () => {
  let component: VisitsGraphicComponent;
  let fixture: ComponentFixture<VisitsGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitsGraphicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitsGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
