import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsDialogComponent } from './book-details-dialog.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core';
import { IBook } from '../book.interface.ts';

describe('BookDetailsDialogComponent', () => {
  let component: BookDetailsDialogComponent;
  let fixture: ComponentFixture<BookDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDetailsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

constructor(private dialogREf:MatDialogRef<BookDetailsDialogComponent>),@inject(MAT_DIALOG_DATA){
  this.book=data.book;
}
