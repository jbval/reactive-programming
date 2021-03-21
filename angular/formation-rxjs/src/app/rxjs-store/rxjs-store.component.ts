import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { StoreService } from './store.service';

@Component({
  selector: 'app-rxjs-store',
  templateUrl: './rxjs-store.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsStoreComponent implements OnInit {
  numContract = 1;
  constructor(private store: StoreService) {}

  ngOnInit(): void {}
  nextContract(): void {
    this.numContract++;
    this.store.fetch(this.numContract);
  }
}
