import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostressCommentComponent } from './postress-comment.component';

describe('PostressCommentComponent', () => {
  let component: PostressCommentComponent;
  let fixture: ComponentFixture<PostressCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostressCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostressCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
