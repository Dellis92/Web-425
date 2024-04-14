import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ComposerService } from '../composer.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-composer-list',
  standalone: true,
  imports: [],
  templateUrl: './composer-list.component.html',
  styleUrl: './composer-list.component.css'
})
export class ComposerListComponent implements OnInit {

  composers: Observable<IComposer[]>;

  constructor(private composerService: ComposerService) {
    this.composers = this.composers = this.composerService.ServicefilterComposers(name);
  }

  }

  ngOnInit(): void {

}
