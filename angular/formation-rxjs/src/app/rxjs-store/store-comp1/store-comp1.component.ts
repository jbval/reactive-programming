import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Contract } from '../contract';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-comp1',
  templateUrl: './store-comp1.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreComp1Component implements OnInit {
  currentContracts$: Observable<Contract>;
  constructor(private store: StoreService) {
    this.currentContracts$ = this.store.currentContract$;
  }

  ngOnInit(): void {}
}
