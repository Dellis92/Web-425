import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ComposerService } from '../composer.service';

@Component({
  selector: 'app-composer-list',
  standalone: true,
  imports: [],
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;
  txtSearchControl = new FormControl('');

  constructor(private composerService: ComposerService) {
    this.composers = new Composer().getComposers();

    this.textSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
  }

  }

  ngOnInit(): void {

}

filterComposers(name: string) {
  alert(name);
}