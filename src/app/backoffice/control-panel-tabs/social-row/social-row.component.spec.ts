import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialRowComponent } from './social-row.component';

describe('SocialRowComponent', () => {
  let component: SocialRowComponent;
  let fixture: ComponentFixture<SocialRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
