import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import {
  map,
  startWith,
  filter,
  debounce,
  debounceTime,
  share,
  shareReplay,
} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-operators',
  templateUrl: './rxjs-operators.component.html',
  styleUrls: ['./rxjs-operators.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsOperatorsComponent {
  title = 'formation-rxjs';
  form: FormGroup;
  fullNameCombineLatest$: Observable<string>;
  fullNameStartsWith$: Observable<string>;
  fullNameMinLength$: Observable<string>;
  fullNameMinLengthGlobal$: Observable<string>;
  fullNameBounce$: Observable<string>;
  lastNameFormat$: Observable<string>;

  /**
   *
   */
  constructor() {

    // Définition de formulaire
    this.form = new FormGroup({
      lastName: new FormControl(''),
      firstName: new FormControl(''),
    });


    // Point de départ : Observable en entrée
    const lastName$ = this.form.get('lastName')
      ?.valueChanges as Observable<string>;
    const firstName$ = this.form.get('firstName')
      ?.valueChanges as Observable<string>;

    // Map simple
    this.lastNameFormat$ = lastName$.pipe(map(ln => ln.toUpperCase()));


    // Combinaison et utilisation d'opérateurs plus complexes
    this.fullNameCombineLatest$ = combineLatest([lastName$, firstName$]).pipe(
      map(([lastName, firstName]) => `${firstName}-${lastName}`)
    );
    this.fullNameStartsWith$ = combineLatest([
      lastName$.pipe(startWith('')),
      firstName$.pipe(startWith('')),
    ]).pipe(map(([lastName, firstName]) => `${firstName}-${lastName}`));
    this.fullNameMinLength$ = combineLatest([
      lastName$.pipe(filter((l) => l.length > 3)),
      firstName$.pipe(startWith('')),
    ]).pipe(map(([lastName, firstName]) => `${firstName}-${lastName}`));

    this.fullNameMinLengthGlobal$ = combineLatest([
      lastName$,
      firstName$.pipe(startWith('')),
    ]).pipe(
      filter(([lastName, firstName]) => lastName.length > 3),
      map(([lastName, firstName]) => `${firstName}-${lastName}`)
    );

    this.fullNameBounce$ = lastName$.pipe(debounceTime(200));


  }
}
