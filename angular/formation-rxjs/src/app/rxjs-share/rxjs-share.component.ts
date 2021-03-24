import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Observable } from 'rxjs';
import { share, shareReplay, tap } from 'rxjs/operators';
import { inputValue } from '../rxjs-services/inputValue';

@Component({
  selector: 'app-rxjs-share',
  templateUrl: './rxjs-share.component.html',
  styleUrls: ['./rxjs-share.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsShareComponent implements OnInit {
  optionRequete = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };

  request$: Observable<inputValue>;
  requestShareReplay$: Observable<inputValue>;
  requestShare$: Observable<inputValue>;

  constructor(private httpService: HttpClient) {
    this.request$ = this.httpService
      .get<inputValue>(`http://localhost:3000/name/test`, this.optionRequete)
      .pipe(tap((r) => console.log('Requête Exécutée')));

    this.requestShare$ = this.request$.pipe(
      tap((r) => console.log('RequeteShare exécutée')),
      share()
    );

    this.requestShareReplay$ = this.request$.pipe(
      tap((r) => console.log('RequeteShareReplay exécutée')),
      shareReplay({ refCount: true, bufferSize: 1 })
    );
  }

  ngOnInit(): void {
    this.request$.subscribe();
    this.request$.subscribe();
    console.log('Souscription Share');
    this.requestShare$.subscribe((rs) => console.log('share' + rs.value));
    this.requestShare$.subscribe((rs) => console.log('share' + rs.value));
    console.log('Souscription ShareReplay');
    this.requestShareReplay$.subscribe((rs) =>
      console.log('shareReplay' + rs.value)
    );
    this.requestShareReplay$.subscribe((rs) =>
      console.log('shareReplay' + rs.value)
    );

  }
}
