import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthPoemsComponent } from './growth-poems.component';

describe('GrowthPoemsComponent', () => {
  let component: GrowthPoemsComponent;
  let fixture: ComponentFixture<GrowthPoemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrowthPoemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowthPoemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
