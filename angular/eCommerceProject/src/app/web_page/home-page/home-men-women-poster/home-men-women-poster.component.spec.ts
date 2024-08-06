import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMenWomenPosterComponent } from './home-men-women-poster.component';

describe('HomeMenWomenPosterComponent', () => {
  let component: HomeMenWomenPosterComponent;
  let fixture: ComponentFixture<HomeMenWomenPosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMenWomenPosterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMenWomenPosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
