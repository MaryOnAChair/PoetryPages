import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappinessPoemsComponent } from './happiness-poems.component';

describe('HappinessPoemsComponent', () => {
  let component: HappinessPoemsComponent;
  let fixture: ComponentFixture<HappinessPoemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HappinessPoemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HappinessPoemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
