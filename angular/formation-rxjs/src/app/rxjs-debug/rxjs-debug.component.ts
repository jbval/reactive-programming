import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { Observable, of, Subject, timer } from 'rxjs';
import { finalize, map, share, shareReplay, takeUntil } from 'rxjs/operators';

import { watch } from 'rxjs-watcher';

@Component({
  selector: 'app-rxjs-debug',
  templateUrl: './rxjs-debug.component.html',
  styleUrls: ['./rxjs-debug.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsDebugComponent implements OnDestroy {
  numbers$: Observable<number>;
  numbersWithShare$: Observable<number>;
  numbersWithShareReplay$: Observable<number>;

  private readonly stopNumbers$ = new Subject<void>();
  constructor() {
    this.numbers$ = this.getNumbers().pipe(
      watch('in numbers$ pipe', 10),
      takeUntil(this.stopNumbers$)
    );

    this.numbersWithShare$ = this.getNumbers().pipe(
      watch('in numbers$ pipe with share', 10),
      share(),
      takeUntil(this.stopNumbers$)
    );
    this.numbersWithShareReplay$ = this.getNumbers().pipe(
      watch('in numbers$ pipe with shareReplay(1)', 10),
      shareReplay(1),
      takeUntil(this.stopNumbers$)
    );

    window.setTimeout(() => {
      this.numbers$.pipe(watch('numberDelay1$', 10)).subscribe();
      this.numbersWithShare$
        .pipe(watch('numberWithShareDelay1$', 10))
        .subscribe();
      this.numbersWithShareReplay$
        .pipe(watch('numberWithShareReplayDelay1$', 10))
        .subscribe();
    }, 500);
  }

  private getNumbers(): Observable<number> {
    return timer(0, 1000).pipe(
      map((x) => x * 10),
      finalize(() => console.log('Unsubscribing from source'))
    );
  }

  ngOnDestroy() {
    this.stopNumbers$.next();
    this.stopNumbers$.complete();
  }
}
