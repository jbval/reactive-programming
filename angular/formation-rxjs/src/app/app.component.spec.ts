import { fakeAsync, tick } from '@angular/core/testing';
import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TestScheduler } from 'rxjs/testing';

describe('AppComponent', () => {
  const testScheduler = new TestScheduler((actual, expected) => {
    expect(actual).toEqual(expected);
  });

  // Specific angular
  it('test Async', fakeAsync(() => {
    let result = -1;
    timer(100).subscribe((t) => (result = t));
    expect(result).toEqual(-1);
    tick(100);
    expect(result).toEqual(0);
  }));


  // Spécifique RxJs pas de dépendance angular
  it('Test marble', () =>
    testScheduler.run((helpers) => {
      const { cold, expectObservable, expectSubscriptions } = helpers;
      const values = { a: { name: 'test' }, b: { name: 'testSaisie2' }, x: 0 };
      const source = cold('--x--x|', values);
      const query = cold('a---b|', values);
      const expected = '--a--a---b|';
      const resultStream = source.pipe(switchMap(() => query));
      expectObservable(resultStream).toBe(expected, values);
    }));

  it('Test marble échec', () =>
    testScheduler.run((helpers) => {
      const { cold, expectObservable } = helpers;
      const values = { a: { name: 'test' }, b: { name: 'testSaisie2' }, x: 0 };
      const source = cold('--x--x|', values);
      const query = cold('a---b|', values);
      const expected = '--a--a---a|';
      const resultStream = source.pipe(switchMap(() => query));
      expectObservable(resultStream).toBe(expected, values);
    }));
});
