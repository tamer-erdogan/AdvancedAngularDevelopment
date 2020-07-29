import { Component, OnInit } from '@angular/core';
import { from, EMPTY } from 'rxjs';
import { filterEven } from './filterEven';
import { takeEveryNth } from './takeEveryNth';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { logError, getFromApi } from './logErr';
import { pow } from './pow';

@Component({
  selector: 'app-custom-operators',
  templateUrl: './custom-operators.component.html',
  styleUrls: ['./custom-operators.component.scss']
})
export class CustomOperatorsComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  response: any;

  ngOnInit() {}

  simpleFilter() {
    const numbers$ = from([1, 4, 6, 7, 9, 11]).pipe(n => filterEven(n));
    numbers$.subscribe(n => console.log(n));
  }

  usePow() {
    const numbers$ = from([1, 4, 6, 7, 9, 11]).pipe(pow(2));
    numbers$.subscribe(n => console.log(n));
  }

  usingOperators() {
    const numbers$ = from([1, 4, 6, 7, 9, 11]).pipe(takeEveryNth(3));
    numbers$.subscribe(n => console.log(n));
  }

  errHandling() {
    // traditional rest call
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(
        catchError(err => {
          console.log('Error', err);
          return EMPTY;
        })
      )
      .subscribe(data => console.log('result from api', data));

    // traditional rest call
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .pipe(logError())
      .subscribe(data => console.log('result from api', data));
  }

  utilFunction() {
    getFromApi(
      this.httpClient,
      'https://jsonplaceholder.typicode.com/todos/1'
    ).subscribe(data => console.log('result from api', data));
  }

  resolveParentChild() {}
}
