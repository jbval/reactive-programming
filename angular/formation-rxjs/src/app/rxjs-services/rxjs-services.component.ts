import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { inputValue } from './inputValue';

@Component({
  selector: 'app-rxjs-services',
  templateUrl: './rxjs-services.component.html',
  styleUrls: ['./rxjs-services.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsServicesComponent implements OnInit {
  sendSearch$ = new Subject<void>();
  sendSearchSubscribe$ = new Subject<void>();
  formGroup: FormGroup;
  searchResult$: Observable<string>;

  optionRequete = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    }),
  };

  constructor(private httpService: HttpClient) {
    this.formGroup = new FormGroup({
      lastName: new FormControl(''),
    });
    const lastNameValueChanges$ = this.formGroup.get('lastName')
      ?.valueChanges as Observable<string>;
    this.searchResult$ = lastNameValueChanges$.pipe(
      switchMap((l) =>
        this.httpService
          .get<inputValue>(
            `http://localhost:3000/name/${l}`,
            this.optionRequete
          )
          .pipe(
            switchMap((r) =>
              this.httpService.get<inputValue>(
                `http://localhost:3000/name/${r.value}`,
                this.optionRequete
              )
            ),
            map((v) => v.value)
          )
      )
    );

    this.sendSearch$.pipe(tap(() => console.log(this.formGroup.value)));
    this.sendSearchSubscribe$
      .pipe(tap(() => console.log(this.formGroup.value)))
      .subscribe();
  }

  ngOnInit(): void {}
}
