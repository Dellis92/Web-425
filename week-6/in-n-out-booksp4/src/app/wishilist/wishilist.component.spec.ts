import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishilistComponent } from './wishilist.component';

describe('WishilistComponent', () => {
  let component: WishilistComponent;
  let fixture: ComponentFixture<WishilistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishilistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WishilistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
