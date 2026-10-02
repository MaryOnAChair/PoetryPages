import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LovePoemsComponent } from './love-poems.component';

describe('LovePoemsComponent', () => {
  let component: LovePoemsComponent;
  let fixture: ComponentFixture<LovePoemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LovePoemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LovePoemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
