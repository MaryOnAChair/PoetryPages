import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturePoemsComponent } from './nature-poems.component';

describe('NaturePoemsComponent', () => {
  let component: NaturePoemsComponent;
  let fixture: ComponentFixture<NaturePoemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaturePoemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaturePoemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
