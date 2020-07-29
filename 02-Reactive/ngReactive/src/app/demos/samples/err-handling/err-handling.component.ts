import { Component, OnInit } from '@angular/core';
import {
  tap,
  map,
  catchError,
  finalize,
  shareReplay,
  retryWhen,
  delayWhen
} from 'rxjs/operators';
import { throwError, of, Observable, timer } from 'rxjs';
import { VouchersService } from '../voucher.service';
import { HttpClient } from '@angular/common/http';
import { DemoItem } from 'src/app/model/demo/DemoItem';
import { environment } from 'src/environments/environment';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-err-handling',
  templateUrl: './err-handling.component.html',
  styleUrls: ['./err-handling.component.scss']
})
export class ErrHandlingComponent implements OnInit {
  
  constructor(private vs: VouchersService, private httpClient: HttpClient) {}

  sub: SubSink = new SubSink();

  execHttp = (
    client: HttpClient,
    collection: string
  ): Observable<DemoItem[]> => {
    return client
      .get<DemoItem[]>(`${environment.apiUrl}${collection}`)
      .pipe(catchError(err => of([])));
  }

  getDemos = this.execHttp(this.httpClient, 'demos');

  ngOnInit() {}

  simpleHttp() {
    this.execHttp(this.httpClient, 'demos').subscribe(
      res => console.log(`HTTP response from demos`, res),
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
    );

    this.execHttp(this.httpClient, 'xxx').subscribe(
      res => console.log('HTTP response from xxx', res),
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
    );
  }

  // Used in tryCatchAlike
  setLabel = v => ({ ...v, Label: `${v.Text} costs € ${v.Amount}` });

  tryCatchAlike() {
    this.sub.sink = this.vs
      .getVouchers()
      .pipe(
        tap(data => console.log('logged by tap(): ', data)),
        map(vs => vs.map(this.setLabel)),
        catchError(err => {
          console.log('Error on getVouchers()', err);
          return throwError('Err happened while processing vouchers');
          // return of([]);
        }),
        finalize(() => console.log('finalizing ...'))
      )
      .subscribe(data => console.log('tryCatchAlike result', data));
  }

  fallbackValue() {
    this.sub.sink = this.getDemos
      .pipe(
        catchError(err => {
          console.log('caught mapping error and rethrowing', err);
          return throwError(err);
        }),
        finalize(() => console.log('first finalize() block executed')),
        catchError(err => {
          console.log('caught rethrown error, providing fallback value', err);
          return of([
            {
              url: 'langfeatures',
              topicid: 2,
              title: 'Language Features',
              component: 'LangFeaturesComponent',
              visible: true,
              sortOrder: 1
            },
            {
              url: 'creating',
              topicid: 2,
              title: 'Creating Observables',
              component: 'CreatingObservableComponent',
              visible: true,
              sortOrder: 2
            }
          ]);
        }),
        finalize(() => console.log('second finalize() block executed'))
      )
      .subscribe(
        res => console.log('HTTP response', res),
        err => console.log('HTTP Error', err),
        () => console.log('HTTP request completed.')
      );
  }

  retryImmediately() {
    // Stop json-server immediately after clicking the button
    // Watch retry - the start json-server again

    this.sub.sink = this.getDemos
      .pipe(
        tap(() => console.log('HTTP request executed')),
        map(items => {
          return items[0].url;
        }),
        shareReplay(),
        retryWhen(errors => {
          return errors.pipe(tap(() => console.log('retrying...')));
        })
      )
      .subscribe(
        res => console.log('HTTP response', res),
        err => console.log('HTTP Error', err),
        () => console.log('HTTP request completed.')
      );
  }

  retryAfter() {
    this.sub.sink = this.getDemos
      .pipe(
        tap(() => console.log('HTTP request executed')),
        map(items => {
          return items[0].url;
        }),
        shareReplay(),
        retryWhen(errors => {
          return errors.pipe(
            delayWhen(() => timer(2000)),
            tap(() => console.log('retrying after 2 sec ...'))
          );
        })
      )
      .subscribe(
        res => console.log('HTTP response', res),
        err => console.log('HTTP Error', err),
        () => console.log('HTTP request completed.')
      );
  }
}
