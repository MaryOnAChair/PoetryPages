import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadPoemsComponent } from './sad-poems.component';

describe('SadPoemsComponent', () => {
  let component: SadPoemsComponent;
  let fixture: ComponentFixture<SadPoemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SadPoemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SadPoemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
