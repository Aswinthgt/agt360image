import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agt360imageViewComponent } from './agt360image-view.component';

describe('Agt360imageViewComponent', () => {
  let component: Agt360imageViewComponent;
  let fixture: ComponentFixture<Agt360imageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Agt360imageViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Agt360imageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
