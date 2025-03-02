import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersGraphicComponent } from './users-graphic.component';

describe('UsersGraphicComponent', () => {
  let component: UsersGraphicComponent;
  let fixture: ComponentFixture<UsersGraphicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersGraphicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
