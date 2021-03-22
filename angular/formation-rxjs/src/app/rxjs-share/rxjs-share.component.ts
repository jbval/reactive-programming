import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { share, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-share',
  templateUrl: './rxjs-share.component.html',
  styleUrls: ['./rxjs-share.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RxjsShareComponent implements OnInit {
  fullNameShare$: Observable<string>;
  fullNameShareReplay$: Observable<string>;
  form: FormGroup;

  constructor() {
    // Définition de formulaire
    this.form = new FormGroup({
      lastName: new FormControl(''),
      firstName: new FormControl(''),
    });

    // Point de départ : Observable en entrée
    const lastName$ = this.form.get('lastName')
      ?.valueChanges as Observable<string>;

    this.fullNameShare$ = lastName$.pipe(share());
    this.fullNameShareReplay$ = lastName$.pipe(
      shareReplay({ refCount: true, bufferSize: 1 })
    );
  }

  ngOnInit(): void {}
}
