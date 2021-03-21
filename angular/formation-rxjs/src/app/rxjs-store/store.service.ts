import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contract } from './contract';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  currentContract$ = new BehaviorSubject<Contract>({ id: -1, title: '' });
  constructor() {}

  public fetch(id: number): void {
    if (this.currentContract$.value.id !== id) {
      this.currentContract$.next({ id, title: `Contrat - ${id}` });
    }
  }
}
