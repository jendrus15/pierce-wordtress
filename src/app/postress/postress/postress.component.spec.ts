import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostressComponent } from './postress.component';

describe('PostressComponent', () => {
  let component: PostressComponent;
  let fixture: ComponentFixture<PostressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
