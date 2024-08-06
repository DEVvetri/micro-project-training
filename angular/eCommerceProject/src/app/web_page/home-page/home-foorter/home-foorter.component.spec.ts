import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFoorterComponent } from './home-foorter.component';

describe('HomeFoorterComponent', () => {
  let component: HomeFoorterComponent;
  let fixture: ComponentFixture<HomeFoorterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeFoorterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFoorterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
