import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingGraphicComponent } from './advertising-graphic.component';

describe('AdvertisingGraphicComponent', () => {
  let component: AdvertisingGraphicComponent;
  let fixture: ComponentFixture<AdvertisingGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertisingGraphicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertisingGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
