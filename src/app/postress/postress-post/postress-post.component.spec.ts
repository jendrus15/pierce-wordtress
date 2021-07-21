import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostressPostComponent } from './postress-post.component';

describe('PostressPostComponent', () => {
  let component: PostressPostComponent;
  let fixture: ComponentFixture<PostressPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostressPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostressPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
