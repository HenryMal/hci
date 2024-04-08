import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicsBarComponent } from './topics-bar.component';

describe('TopicsBarComponent', () => {
  let component: TopicsBarComponent;
  let fixture: ComponentFixture<TopicsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopicsBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopicsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
