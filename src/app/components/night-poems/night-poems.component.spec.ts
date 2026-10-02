import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NightPoemsComponent } from './night-poems.component';

describe('NightPoemsComponent', () => {
  let component: NightPoemsComponent;
  let fixture: ComponentFixture<NightPoemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NightPoemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NightPoemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
